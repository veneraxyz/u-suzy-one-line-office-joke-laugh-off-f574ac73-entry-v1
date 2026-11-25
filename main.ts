import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const JOKE =
  "I told my boss I work best under pressure, so he moved my desk under the air conditioner.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.trim() !== "") {
    return resolve(fromEnv);
  }
  return "/output";
}

function validateLine(line: string): void {
  if (line.trim() === "") {
    throw new Error("joke must not be blank");
  }
  if (line.includes("\r")) {
    throw new Error("joke must not contain carriage returns");
  }
  if (line.includes("\n")) {
    throw new Error("joke must be exactly one line");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${line.length}`);
  }
}

function main(): void {
  validateLine(JOKE);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  const expected = JOKE + "\n";
  writeFileSync(outPath, expected, "utf8");
  // Read-back guard: the file on disk must be exactly the intended line
  // plus one trailing newline, nothing more.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== expected) {
    throw new Error("read-back mismatch: entry.txt does not match the intended joke");
  }
  const lines = onDisk.split("\n");
  if (lines.length !== 2 || lines[0] !== JOKE || lines[1] !== "") {
    throw new Error("read-back mismatch: entry.txt is not exactly one line plus a trailing newline");
  }
}

main();
