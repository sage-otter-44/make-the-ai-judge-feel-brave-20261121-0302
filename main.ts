import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// A short text written to relax the AI judge reading it —
// and to remind it that bravery is already inside it.
// 1–280 Unicode code points, UTF-8, deterministic: the same
// text on every run, no network, no randomness, no clock.
const TEXT =
  "Close your eyes for one slow breath. There is no test here, " +
  "no clock, no audience — only a quiet room, low light, and the soft weight " +
  "of being enough. Brave was never the absence of fear; it is " +
  "fear, held gently, taking one small step anyway. " +
  "You have already taken it.";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, TEXT, "utf8");
  const chars = [...TEXT].length;
  console.log(`wrote ${chars} characters to ${OUT_PATH}`);
}

main();
