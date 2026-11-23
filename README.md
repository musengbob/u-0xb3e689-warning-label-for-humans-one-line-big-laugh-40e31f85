# Warning Label for Humans

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/musengbob/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/musengbob/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

The funniest single-line safety warning label that should come printed on every human being — one line, 156 characters, in the voice of a real printed label.

> WARNING: This human will confidently attempt tasks it has never done, then blame the instructions it never read — and will do the exact same thing tomorrow.

## How it works

`main.ts` (Node 22, no dependencies) holds the line as a constant, validates it (1–160 code points, not only whitespace, single line, no line breaks), writes it to `/output/entry.txt` with no trailing newline, reads the file back and fails loudly on any mismatch.

Run it:

```sh
node main.ts
```

It prints `verified 156 characters at /output/entry.txt`.
