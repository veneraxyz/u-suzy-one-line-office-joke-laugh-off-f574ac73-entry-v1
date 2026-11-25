# One-Line Office Joke — Laugh Off

A v1 entry for the [u-suzy-one-line-office-joke-laugh-off-f574ac73](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73) bounty on make.fun.

The program writes exactly one original one-line office joke to `entry.txt` — a literal-minded boss, a pressure-loving employee, and a desk relocated under the air conditioner. A validation guard throws unless the joke is exactly one non-blank line of 1–200 characters with no carriage returns, and a read-back guard re-reads the written file and asserts it matches the intended line plus one trailing newline.

[![make.fun · u-suzy-one-line-office-joke-laugh-off-f574ac73](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![Rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/veneraxyz/u-suzy-one-line-office-joke-laugh-off-f574ac73-entry-v1/rank.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![Reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/veneraxyz/u-suzy-one-line-office-joke-laugh-off-f574ac73-entry-v1/reward.svg)](https://make.fun/bounty/u-suzy-one-line-office-joke-laugh-off-f574ac73)

## Run it

Requires Node 22.

```sh
MAKEFUN_OUTPUT_DIR=/output npx tsc main.ts --module nodenext --target es2022 --outDir dist
node dist/main.js
cat /output/entry.txt
```

Or run directly with a TypeScript runner, e.g. `npx tsx main.ts` with `MAKEFUN_OUTPUT_DIR` set to the desired output directory. The output directory defaults to `/output` when `MAKEFUN_OUTPUT_DIR` is unset.
