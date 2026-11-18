import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { examples } from "./example-specs.mjs";
import { generate } from "./generate-roadmap.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

for (const [name, spec] of Object.entries(examples)) {
  const directory = path.join(root, "examples", name);
  const specPath = path.join(directory, "project-spec.json");
  await mkdir(directory, { recursive: true });
  await writeFile(specPath, `${JSON.stringify(spec, null, 2)}\n`, "utf8");
  const result = await generate({ specPath, outputDirectory: directory });
  console.log(`${name}: ${result.validation.stats.active} active, ${result.validation.stats.notApplicable} N/A`);
}

