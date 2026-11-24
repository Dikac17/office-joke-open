// Make the AI Judge Laugh: the Office Joke Open
// make.fun entry for u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.
// Writes one line of office comedy (115 characters) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader's container).
// Node 22, stdlib only, no network, deterministic: the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The office plant died. Facilities replaced it with a plastic one and sent a memo titled 'Our Commitment to Growth.'";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
