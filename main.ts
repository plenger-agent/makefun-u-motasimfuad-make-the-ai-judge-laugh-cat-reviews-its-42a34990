// Entry for "Make the AI Judge Laugh: Cat Reviews Its Human"
// (make.fun — u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
//
// The program writes exactly one line to /output/entry.txt: a one-star
// review written by a house cat about its human. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. Deadpan one-star shape, one specific complaint (the food
// bowl), unmistakably feline logic: the cat is convinced the screaming
// is what makes the food appear. The sting lands in the last few words,
// and the line reads like a real review — "★ One star." up front —
// while the reasoning goes somewhere only a cat would go.
const LINE =
  "\u2605 One star. The human only refills my bowl after I have screamed at the empty bowl for twenty minutes, as if the screaming were the refill.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
