// `npm run build` runs this before `next build`.
//
// The exporter writes `scripts/generate-seo-files.mjs` beside this file — the
// script that turns the exported page list into robots.txt, sitemap.xml and
// llms.txt. It is emitted, not shipped, so a fresh clone does not have it yet:
// this runner calls it when it is there and says so when it is not, so the
// starter builds before the first export as well as after it.
import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const script = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "generate-seo-files.mjs",
);
if (existsSync(script)) {
  execFileSync(process.execPath, [script], { stdio: "inherit" });
} else {
  console.log("  seo-files: nothing exported yet, skipped");
}
