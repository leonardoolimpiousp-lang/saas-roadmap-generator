import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { buildCatalog } from "../scripts/catalog-source.mjs";
import { examples } from "../scripts/example-specs.mjs";
import { generate } from "../scripts/generate-roadmap.mjs";
import { composeRoadmap, createPhases, findCriticalPath, validateProjectSpec, validateRoadmap } from "../scripts/roadmap-core.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = buildCatalog();

test("catalog contains the promised core and conditional inventory", () => {
  assert.deepEqual(catalog.counts, { core: 160, conditional: 192, total: 352 });
  assert.equal(catalog.modules.length, 16);
  assert.equal(new Set(catalog.tasks.map(task => task.catalogKey)).size, 352);
  const serialized = JSON.stringify(catalog).toLowerCase();
  for (const forbidden of ["metaflow", "picot", "prisma", "meta-análise", "clinical-triage"]) assert.equal(serialized.includes(forbidden), false, `Catalog leaked project-specific term ${forbidden}`);
});

test("adaptive horizon creates 6 to 14 phases", () => {
  assert.equal(createPhases(6).length, 6);
  assert.equal(createPhases(9).length, 8);
  assert.equal(createPhases(12).length, 10);
  assert.equal(createPhases(15).length, 12);
  assert.equal(createPhases(18).length, 14);
  for (const months of [6, 8, 12, 15, 18]) for (const phase of createPhases(months)) assert.ok(phase.gate && phase.milestone);
});

test("all four fixtures validate and stay in the expected active range", () => {
  for (const [name, spec] of Object.entries(examples)) {
    const specResult = validateProjectSpec(spec, catalog);
    assert.deepEqual(specResult.errors, [], `${name} spec errors`);
    const payload = composeRoadmap(spec, catalog);
    const result = validateRoadmap(payload);
    assert.equal(result.valid, true, `${name}: ${result.errors.join("; ")}`);
    assert.ok(result.stats.active >= 220 && result.stats.active <= 400, `${name} has ${result.stats.active} active tasks`);
    assert.ok(result.stats.notApplicable > 0);
    assert.ok(payload.tasks.some(task => task.origin === "domain-specific"));
  }
});

test("catalogKey keeps visible IDs stable across regeneration", () => {
  const first = composeRoadmap(examples["b2b-multitenant"], catalog);
  const changed = structuredClone(examples["b2b-multitenant"]);
  changed.domainTasks.push({
    catalogKey: "controlled-procedure.new-capability", track: "process-governance", module: "controlled-procedure", title: "Nova capacidade", description: "Entregar uma nova capacidade de domínio com comportamento verificável.", rationale: "Expansão confirmada após a primeira geração.", priority: "P2", effort: "M", ownerRole: "Produto", acceptanceCriteria: ["Resultado verificável.", "Revisão independente concluída."], riskIds: ["R-DOMAIN"], dependsOnCatalogKeys: [], defaultStage: 8
  });
  const second = composeRoadmap(changed, catalog, first.tasks);
  const secondByKey = new Map(second.tasks.map(task => [task.catalogKey, task.id]));
  for (const task of first.tasks) assert.equal(secondByKey.get(task.catalogKey), task.id);
  assert.ok(secondByKey.get("controlled-procedure.new-capability"));
});

test("critical path uses the longest accumulated effort", () => {
  const tasks = [
    { id: "T-001", effort: "S", dependencies: [], applicability: "included" },
    { id: "T-002", effort: "XL", dependencies: ["T-001"], applicability: "included" },
    { id: "T-003", effort: "M", dependencies: [], applicability: "included" },
    { id: "T-004", effort: "M", dependencies: ["T-003"], applicability: "included" }
  ];
  assert.deepEqual(findCriticalPath(tasks), ["T-001", "T-002"]);
});

test("validator rejects unknown dependencies and cycles", () => {
  const payload = composeRoadmap(examples["b2c-simple"], catalog);
  const broken = structuredClone(payload);
  const active = broken.tasks.filter(task => task.applicability !== "not_applicable");
  active[0].dependencies = [active[1].id, "NOPE-999"];
  active[1].dependencies = [active[0].id];
  const result = validateRoadmap(broken);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some(error => error.includes("unknown dependency")));
  assert.ok(result.errors.some(error => error.includes("cycle")));
});

test("generated HTML neutralizes script injection and stays offline", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "saas-roadmap-kit-"));
  const spec = structuredClone(examples["b2c-simple"]);
  spec.project.name = "Unsafe </script><script>globalThis.pwned=true</script>";
  spec.project.description = "Descrição longa para validar conteúdo inseguro sem permitir execução </script><img src=x onerror=alert(1)> no painel autônomo.";
  const specPath = path.join(directory, "input.json");
  await writeFile(specPath, JSON.stringify(spec), "utf8");
  await generate({ specPath, outputDirectory: directory });
  const html = await readFile(path.join(directory, "tasks.html"), "utf8");
  assert.equal(html.includes("</script><script>globalThis.pwned"), false);
  assert.equal(html.includes("<img src=x onerror"), false);
  assert.equal(/<script\s+src=|<link\s+[^>]*href=|https?:\/\//i.test(html), false);
  assert.ok(html.includes("\\u003c/script>"));
});

test("generated examples contain all portable artifacts and isolated storage keys", async () => {
  for (const [name, spec] of Object.entries(examples)) {
    const directory = path.join(root, "examples", name);
    for (const file of ["project-spec.json", "tasks.json", "backlog.md", "tasks.html"]) assert.ok((await readFile(path.join(directory, file), "utf8")).length > 100);
    const html = await readFile(path.join(directory, "tasks.html"), "utf8");
    assert.ok(html.includes(spec.project.slug));
    assert.ok(html.includes("saas-roadmap:${roadmap.project.slug}:${roadmap.schemaVersion}"));
    assert.ok(html.includes('const cols=["id","catalogKey"'));
  }
});

test("every bundled JSON document parses", async () => {
  const files = ["catalog/universal-backlog.json", ...Object.keys(examples).flatMap(name => [`examples/${name}/project-spec.json`, `examples/${name}/tasks.json`])];
  for (const file of files) assert.doesNotThrow(() => JSON.parse(readFileSync(path.join(root, file), "utf8")), file);
});
