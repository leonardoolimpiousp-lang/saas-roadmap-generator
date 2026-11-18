import { readFile } from "node:fs/promises";
import path from "node:path";
import { validateRoadmap } from "./scripts/roadmap-core.mjs";

const target = path.resolve(process.argv[2] || ".");
const file = target.endsWith(".json") ? target : path.join(target, "tasks.json");
const payload = JSON.parse(await readFile(file, "utf8"));
const result = validateRoadmap(payload);

console.log(JSON.stringify(result.stats, null, 2));
for (const warning of result.warnings) console.warn(`Warning: ${warning}`);
if (!result.valid) {
  for (const error of result.errors) console.error(`Error: ${error}`);
  process.exitCode = 1;
} else {
  console.log("Roadmap valid.");
}

