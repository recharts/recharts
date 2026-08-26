---
name: mutation-testing
description: Run Stryker mutation tests on one or a few files and check the HTML report. Invoke when asked to run mutation tests, check mutation score/coverage, or find untested code paths.
---

# Mutation testing with Stryker

## What it does

Stryker makes small deliberate changes ("mutants") to the source, such as flipping a `>` to `>=` or a `true` to `false`, then reruns the tests. If a mutant survives (no test fails), that line has a gap in test coverage. This is a stronger signal than line/branch coverage because it verifies tests actually assert behavior, not just that the line executed.

Config lives in `stryker.config.mjs`. Notable settings already in place:

- `coverageAnalysis: 'perTest'` — only reruns tests that actually cover the mutated line.
- `ignoreStatic: true` — skips mutants Stryker can prove never affect runtime behavior.
- `checkers: ['typescript']` — type-checks every surviving mutant against `tsconfig.json`, which is correct but slow.
- `mutate` — the default file glob to mutate when no override is given. Currently scoped narrowly (not the whole `src` tree) because a full run takes hours on a laptop.

## Running mutation tests

Full suite, using whatever `mutate` glob is currently in `stryker.config.mjs`:

```sh
npm run test-mutation
```

This is slow (potentially hours) and normally only worth doing in CI or before a release, not while iterating.

For local iteration, mutate specific file(s) via the CLI instead of editing the config's `mutate` field. Stryker CLI options override the config file:

```sh
npm run test-mutation-file -- src/theme/useBackwardsCompatibleTheme.ts
```

This script (`test-mutation-file` in `package.json`) also passes `--checkers ""` (skips the TypeScript checker, which type-checks every surviving mutant and is one of the biggest time costs) and `--incremental` (caches mutant results in `.stryker-tmp/incremental.json` so unchanged code isn't re-mutated on the next run).

You can pass a glob to cover more than one file:

```sh
npm run test-mutation-file -- "src/cartesian/*.tsx"
```

Only skip `--checkers ""` (i.e. fall back to `npm run test-mutation -- --mutate <path>`) when you need type-safety verification on the surviving mutants, e.g. right before committing.

## Checking results

After a run, open the HTML report:

```
reports/mutation/mutation.html
```

Open it directly in a browser (`open reports/mutation/mutation.html` on macOS). It shows mutation score per file/line and highlights survived vs. killed vs. no-coverage mutants inline in the source.

A machine-readable version is also written to `reports/mutation/mutation.json` if you need to parse results programmatically (e.g. to compare mutation score across runs).

Both `reports/` and `.stryker-tmp/` are gitignored — reports are local/CI artifacts, not committed.

## Improving the score

For each survived mutant shown in the report:

1. Read the mutated line and the specific mutation applied (e.g. `x > 0` → `x >= 0`).
2. Find or write a test whose assertion would fail under that mutation but passes against the real code.
3. Prefer asserting on behavior/output over re-running with trivial boundary values only — pick inputs that actually distinguish the mutated behavior from the original.

Mutants with "no coverage" status mean no test even executes that line — add a test that exercises the branch, not just one that changes the mutation status without a real assertion.
