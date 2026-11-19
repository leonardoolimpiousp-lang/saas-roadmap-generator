import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { validateRoadmap } from "./roadmap-core.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const examples = ["b2c-simple", "b2b-multitenant", "ai-regulated", "marketplace"];
let hasErrors = false;

for (const name of examples) {
  const payload = JSON.parse(await readFile(path.join(root, "examples", name, "tasks.json"), "utf8"));
  const result = validateRoadmap(payload);
  if (!result.valid) {
    hasErrors = true;
    console.error(`${name}: ${result.errors.join("; ")}`);
  } else {
    console.log(`${name}: ${result.stats.active} active · ${result.stats.notApplicable} N/A · ${result.stats.phases} phases`);
  }
}

if (hasErrors) process.exitCode = 1;

