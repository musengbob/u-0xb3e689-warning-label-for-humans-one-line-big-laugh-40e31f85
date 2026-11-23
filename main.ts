import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "WARNING: This human will confidently attempt tasks it has never done, then blame the instructions it never read — and will do the exact same thing tomorrow.";
const MAX_CHARS = 160;

function codePointCount(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const count = codePointCount(text);
  if (count < 1 || count > MAX_CHARS) {
    throw new Error(`entry must be 1–${MAX_CHARS} characters, got ${count}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line with no line breaks");
  }
}

function main(): void {
  validate(LINE);
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error(`read-back mismatch at ${outPath}`);
  }
  console.log(`verified ${codePointCount(LINE)} characters at ${outPath}`);
}

main();
