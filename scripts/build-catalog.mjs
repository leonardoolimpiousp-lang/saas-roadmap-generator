import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { buildCatalog } from "./catalog-source.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "catalog", "universal-backlog.json");
const catalog = buildCatalog();

await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
console.log(`Catalog written: ${catalog.counts.core} core + ${catalog.counts.conditional} conditional = ${catalog.counts.total}`);

