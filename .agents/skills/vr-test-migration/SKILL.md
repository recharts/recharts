---
name: vr-test-migration
description: Migrate a legacy Recharts visual-regression spec to automatic theme variants
---

# Migrate one visual-regression spec

Use this skill when one `test-vr` spec should move from the legacy browser-only
fixture to the automatic legacy/light/dark fixture.

## Non-negotiable scope

This skill migrates exactly one `*.spec-vr.tsx` file per run. At the start of
the run, execute the selector script:

```sh
node .agents/skills/vr-test-migration/find-next-spec.mjs
```

The script prints a JSON object describing the one spec to migrate. It selects
the first legacy spec that imports the old `test` fixture and does not import
`testWithThemes`; specs that explicitly use `legacyTest` remain intentional
compatibility exceptions. Do not select a different file, run the script in a
loop, or migrate multiple specs in one change. If the script exits with status
1, no legacy spec remains and the run must stop with that report. If it exits
with status 2 the selected spec has no companion `.story.tsx` file; that is a
blocker to report, not a reason to choose another spec.

The JSON gives you `spec`, its companion `story` (always the sibling
`*.story.tsx` next to the spec), the `snapshotDir`, and a `classification`:

- `trivial-fixture-swap` — the spec and its story contain no `testTheme`, no
  `themedStory`/`applyTestTheme`/`WithLightTheme`/`WithDarkTheme`/`TestColorModeProvider`,
  no `RechartsThemeProvider`, and no `colorScheme`/`emulateMedia`. Take the
  **Quick path** below. You do not need to read the supporting docs.
- `needs-review` — at least one of those signals is present. Read
  `DEVELOPING.md`, `AGENTS.md`, `test-vr/README.md`, and
  `.agents/skills/vr-test/SKILL.md`, then follow the full workflow (steps 1-7).

Supporting edits are allowed only when required to complete that one spec's
migration; do not migrate another spec, rewrite shared compatibility helpers,
or create a central exclusion list. If the selected spec is blocked, report
the blocker instead of moving on to the next file.

## Quick path (classification `trivial-fixture-swap`)

1. In the spec, change the fixture import to `testWithThemes` and replace every
   `test(`, `test.describe`, `test.use`, and hook reference (`test.beforeEach`,
   etc.) with `testWithThemes`. Change nothing else — preserve `colorScheme`,
   viewport, reduced motion, and timeouts.
2. Generate snapshots (one Docker run, no expected-to-fail run first):

   ```sh
   npm run test-vr:update -- <spec> 2>&1 | tail -n 40
   ```

3. Verify it is green (one more Docker run):

   ```sh
   npm run test-vr -- <spec> 2>&1 | tail -n 40
   ```

4. Confirm the snapshot file set with `ls "<snapshotDir>"`: every legacy
   `*-{chromium,firefox,webkit}-linux.png` still present, plus a new
   `*-{light,dark}-linux.png` for each browser and assertion. Do not open the
   PNGs and do not `Read` anything under `test-vr/test-results/` or
   `test-vr/playwright-report/` (large binary/HTML output).
5. Run `npm run check-types-test-vr` and ESLint/Prettier on the changed file.
6. Follow step 7 (commit, push, PR).

## Fixture model

`test-vr/tests/fixtures.ts` exposes two migration paths:

- `testWithThemes` is the default for migrated and newly authored specs. Each
  test runs in the legacy, light, and dark projects for each browser.
- `test` is an alias for the legacy-only compatibility fixture. `legacyTest`
  is the explicit name for the same behavior when a spec intentionally cannot
  be migrated yet.

Legacy projects retain the names `chromium`, `firefox`, and `webkit`, so their
existing snapshots remain stable. The new projects are
`chromium-light`, `chromium-dark`, `firefox-light`, `firefox-dark`,
`webkit-light`, and `webkit-dark`.

The gallery selects the Recharts variant at the rendering boundary:

- `legacy`: no `RechartsThemeProvider` and a white canvas;
- `light`: `RechartsThemeProvider` with `lightTheme` and a white canvas;
- `dark`: `RechartsThemeProvider` with `darkTheme` and a black canvas.

The selected variant is not a story prop. A migrated story must not receive
`testTheme`, and a migrated spec must not put a theme name in its test title or
custom screenshot name.

## Migration workflow

### 1. Inspect the target

Identify:

- the fixture import and every `test`, `test.describe`, `test.use`, and hook
  reference in the spec;
- every `testTheme` prop passed to `mountStory`;
- `themedStory`, `applyTestTheme`, `WithLightTheme`, `WithDarkTheme`, and
  `TestColorModeProvider` usage in the story graph;
- tests that differ only by a light/dark theme choice;
- explicit `RechartsThemeProvider` usage that may intentionally test nesting;
- browser `colorScheme` or `page.emulateMedia` settings.

Do not assume that a website color-mode provider and a Recharts theme are the
same thing. `colorScheme` controls the browser's `prefers-color-scheme` media
query; the Recharts theme is selected by the Playwright project.

If the spec has no `testTheme` props, no `themedStory`/`applyTestTheme`/`WithLightTheme`/`WithDarkTheme`/`TestColorModeProvider` usage, no explicit `RechartsThemeProvider` nesting, and no intentional exceptions, the migration is only the fixture swap in step 2; skip steps 3–5.

### 2. Switch the spec fixture

Change the fixture import to `testWithThemes` and update all references in the
file, including hooks and describe blocks:

```tsx
import { expect, testWithThemes } from '../fixtures';

testWithThemes.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
});

testWithThemes('LineChart', async ({ mountStory }) => {
  const component = await mountStory('App/LineChart');
  await expect(component).toHaveScreenshot();
});
```

Preserve unrelated Playwright options such as `colorScheme`, viewport, reduced
motion, and timeouts. Only change the fixture that controls the Recharts
variant.

### 3. Remove theme props from mounts

Remove `testTheme: 'default'`, `testTheme: 'light'`, and `testTheme: 'dark'`
from `mountStory` props. Keep all real story props:

```tsx
// Before
await mountStory('www/AreaChartApiExamples/SimpleAreaChart', {
  testTheme: 'light',
  isAnimationActive: false,
});

// After
await mountStory('www/AreaChartApiExamples/SimpleAreaChart', {
  isAnimationActive: false,
});
```

If multiple tests mount the same story and differ only by `testTheme`, normally
consolidate them into one ordinary scenario. The automatic fixture captures
all three variants. Keep separate tests only when they exercise another
independent dimension, such as a browser color mode, interaction, or different
story props.

Rename tests so they describe the scenario, not the theme. For example,
`SimpleAreaChart dark mode` becomes `SimpleAreaChart` when the only difference
was the Recharts theme.

### 4. Simplify story wrappers

If a story uses `themedStory` only to select `RechartsThemeProvider`, remove the
helper import and export the underlying component directly:

```tsx
// Before
import { themedStory } from './StoryTheme';

export const SimpleAreaChart = themedStory(SimpleAreaChartComponent);

// After
export const SimpleAreaChart = SimpleAreaChartComponent;
```

Remove `WithLightTheme` and `WithDarkTheme` wrappers when they only provide the
theme now supplied by the gallery. Do not remove an explicit provider that is
the subject of a nested-theme test; instead decide whether that test should
run with a selected outer variant or use a structured exception.

`StoryTheme.tsx` also supplies website CSS and `ColorModeProvider` behavior.
Preserve those concerns intentionally when the story needs them, but do not
use `testTheme` to choose a Recharts theme. A story that needs website color
mode can keep a provider such as `TestColorModeProvider`, while the spec uses
`colorScheme` for the browser media query.

### 5. Configure intentional exceptions

Do not encode exclusions in test titles. Use fixture metadata:

```tsx
testWithThemes.describe('website color mode', { tag: '@recharts-theme-legacy' }, () => {
  testWithThemes.use({ colorScheme: 'dark' });

  testWithThemes('dark website', async ({ mountStory }) => {
    const component = await mountStory('www/dark-mode/SimpleLineChartStory');
    await expect(component).toHaveScreenshot();
  });
});
```

For a file, describe block, or individual test that should run in a selected
set of variants, use:

```tsx
testWithThemes.use({ rechartsThemes: ['legacy', 'light'] });
```

Use `@recharts-theme-legacy`, `@recharts-theme-light`, and
`@recharts-theme-dark` tags when the exception is local to a test or describe
scope. Multiple tags select multiple variants, and tags take precedence over
the `rechartsThemes` option. Keep `colorScheme` separate from both.

### 6. Generate and review snapshots

Always pipe Docker test output through `tail` (or `grep -E`). A failing
`toHaveScreenshot()` attaches actual/expected/diff PNGs and a full HTML report
path to stdout; reading that raw floods the context with binary noise.

List the targeted projects and tests:

```sh
npm run test-vr -- test-vr/tests/path/to/Target.spec-vr.tsx --list 2>&1 | tail -n 60
```

Create the new snapshots directly — do not do an expected-to-fail `run` first:

```sh
npm run test-vr:update -- test-vr/tests/path/to/Target.spec-vr.tsx 2>&1 | tail -n 40
```

`test-vr:update` keeps the existing legacy snapshots and adds the light/dark
snapshots for each assertion. Use `--project=chromium-light` or
`--grep=ScenarioName` when narrowing an update. Then confirm every test passes
with one plain run:

```sh
npm run test-vr -- test-vr/tests/path/to/Target.spec-vr.tsx 2>&1 | tail -n 40
```

Snapshots are binary PNGs, so `git diff` shows nothing meaningful. Verify by
**file set**, not by opening images: `ls` the `snapshotDir` and check that
every legacy `*-{chromium,firefox,webkit}-linux.png` is still there and that a
new `*-{light,dark}-linux.png` exists for each browser and assertion (minus any
projects intentionally excluded — see below). Do not open the PNGs, do not
`Read` anything under `test-vr/test-results/` or `test-vr/playwright-report/`,
do not delete legacy snapshots because a new project has a different suffix,
and do not commit `test-results` or `playwright-report`.

For intentional exceptions, verify that the skipped projects are the only
missing variants. A test using `@recharts-theme-legacy` should not produce
light or dark snapshots, while another ordinary migrated test in the same
spec should still produce all selected variants.

### 7. Commit, push, and open a PR

- Make sure you are on a feature branch; never commit to `main` directly.
- Commit your changes with appropriate commit message.
- In the commit body mention that this work relates to issue "https://github.com/recharts/recharts/issues/7737".
- Push the branch. This repository has a long pre-push hook (build, test,
  check-types, lint) that can take around 5 minutes, so allow a timeout of up to
  10 minutes:

  ```sh
  git push -u origin <branch>
  ```

- Open a pull request from the feature branch to `main`.

## Validation checklist

- The target spec imports and uses `testWithThemes`.
- No migrated mount passes `testTheme`.
- No migrated test title or screenshot name encodes a Recharts theme.
- Story wrappers no longer select Recharts themes through props.
- Website `ColorModeProvider` and CSS dependencies were preserved only where
  they are independently required.
- Browser `colorScheme` behavior remains unchanged.
- Variant tags or `rechartsThemes` options document every intentional
  exception.
- Existing legacy snapshots remain unchanged unless the story itself changed.
- New light and dark snapshots are present for ordinary migrated assertions.
- `npm run check-types-test-vr` passes.
- ESLint and Prettier pass for the changed files.
