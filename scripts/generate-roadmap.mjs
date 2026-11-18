import { access, copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { composeRoadmap, validateProjectSpec, validateRoadmap } from "./roadmap-core.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--spec") args.spec = argv[++index];
    else if (argv[index] === "--out") args.out = argv[++index];
  }
  if (!args.spec || !args.out) throw new Error("Usage: node scripts/generate-roadmap.mjs --spec <project-spec.json> --out <directory>");
  return args;
}

async function exists(file) {
  try { await access(file, constants.F_OK); return true; } catch { return false; }
}

function escapeScriptJson(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029");
}

function markdown(payload) {
  const active = payload.tasks.filter(task => task.applicability !== "not_applicable");
  const lines = [`# ${payload.project.name} — SaaS Roadmap`, "", payload.project.description, "", `**North Star:** ${payload.project.northStar}`, `**Horizonte:** ${payload.timelineMonths} meses`, `**Tarefas ativas:** ${active.length}`, ""];
  for (const phase of payload.phases) {
    lines.push(`## ${phase.id} — ${phase.name}`, "", `**Janela:** ${phase.window}`, `**Gate:** ${phase.gate}`, "");
    for (const task of active.filter(item => item.phase === phase.id)) {
      const deps = task.dependencies.length ? ` · depende de ${task.dependencies.join(", ")}` : "";
      lines.push(`- [${task.status === "done" ? "x" : " "}] **${task.id}** ${task.title} · ${task.priority} · ${task.effort} · ${task.ownerRole}${deps}`);
    }
    lines.push("");
  }
  lines.push("## Fora de escopo / N/A", "");
  for (const task of payload.tasks.filter(item => item.applicability === "not_applicable")) lines.push(`- **${task.id}** ${task.title} — ${task.exclusionReason}`);
  return `${lines.join("\n")}\n`;
}

export async function generate({ specPath, outputDirectory }) {
  const resolvedSpec = path.resolve(specPath);
  const out = path.resolve(outputDirectory);
  const spec = JSON.parse(await readFile(resolvedSpec, "utf8"));
  const catalog = JSON.parse(await readFile(path.join(root, "catalog", "universal-backlog.json"), "utf8"));
  const specValidation = validateProjectSpec(spec, catalog);
  if (!specValidation.valid) throw new Error(`Project spec is invalid:\n- ${specValidation.errors.join("\n- ")}`);
  const previousPath = path.join(out, "tasks.json");
  const previous = await exists(previousPath) ? JSON.parse(await readFile(previousPath, "utf8")).tasks || [] : [];
  const payload = composeRoadmap(spec, catalog, previous);
  const validation = validateRoadmap(payload);
  if (!validation.valid) throw new Error(`Roadmap is invalid:\n- ${validation.errors.join("\n- ")}`);

  await mkdir(out, { recursive: true });
  const outputSpec = path.join(out, "project-spec.json");
  if (resolvedSpec !== outputSpec) await copyFile(resolvedSpec, outputSpec);
  await writeFile(previousPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  await writeFile(path.join(out, "backlog.md"), markdown(payload), "utf8");
  const template = await readFile(path.join(root, "template", "tasks.template.html"), "utf8");
  if (!template.includes("__ROADMAP_PAYLOAD__")) throw new Error("Template payload marker is missing");
  const html = template.replace("__ROADMAP_PAYLOAD__", escapeScriptJson(payload));
  await writeFile(path.join(out, "tasks.html"), html, "utf8");
  return { payload, validation };
}

if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
  const args = parseArgs(process.argv.slice(2));
  const result = await generate({ specPath: args.spec, outputDirectory: args.out });
  console.log(`Generated ${result.validation.stats.tasks} tasks (${result.validation.stats.active} active) in ${path.resolve(args.out)}`);
  for (const warning of result.validation.warnings) console.warn(`Warning: ${warning}`);
}
