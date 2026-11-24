import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const tip = "Tip: you and your AI agent are both stuck on this loading screen. One of you runs on tokens. The other one pays for them.";

if (tip.length > 200 || tip.trim().length === 0) {
  throw new Error("tip must be 1 to 200 characters");
}
if (tip.includes("\n")) {
  throw new Error("tip must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), tip, "utf8");
