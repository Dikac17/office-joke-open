// Make the AI Judge Laugh: the Office Joke Open
// make.fun entry for u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.
// Writes one line of office comedy (115 characters, limit 200) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader's
// container). Node 22, stdlib only, no network, deterministic: the same
// bytes every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The office plant died. Facilities replaced it with a plastic one and sent a memo titled 'Our Commitment to Growth.'";

// Bounty gate: the entry must be exactly one non-empty line, at most
// 200 characters, with no trailing newline (the grader counts bytes).
const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`entry error: ${message}`);
  process.exit(1);
}

if (LINE.length === 0) fail("entry line is empty");
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("entry line must be a single line with no line breaks");
}
if (LINE.length > MAX_CHARS) {
  fail(`entry line is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
}
if (LINE.endsWith("\n")) fail("entry line must not end with a newline");

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
const TARGET = join(OUTPUT_DIR, "entry.txt");
writeFileSync(TARGET, LINE, "utf8");

// Read back and verify: the bytes on disk must be exactly the line we
// validated above, so a partial write or encoding surprise fails loudly
// instead of silently submitting a broken entry.
const written = readFileSync(TARGET, "utf8");
if (written !== LINE) {
  fail("verification failed: entry.txt on disk does not match the entry line");
}
