import fs from "node:fs";
import path from "node:path";

const source = path.resolve("scripts/worker.js");
const destination = path.resolve("out/_worker.js");

fs.copyFileSync(source, destination);

console.log("[BUILD] Cloudflare Worker copied to out/_worker.js");