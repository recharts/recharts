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

The script prints one repository-relative path: that is the only spec file to
migrate. It selects the first legacy spec that imports the old `test` fixture
and does not import `testWithThemes`; specs that explicitly use `legacyTest`
remain intentional compatibility exceptions. Do not select a different file,
run the script in a loop, or migrate multiple specs in one change. If the
script exits with status 1, no legacy spec remains and the run must stop with
that report. The script also verifies that the selected spec has a companion
`.story.tsx` file; any other nonzero exit is a blocker, not a reason to choose
another spec.

Inspect the selected spec's companion story and imported helpers as needed.
Supporting edits are allowed only when required to complete that one spec's
migration; do not migrate another spec, rewrite shared compatibility helpers,
or create a central exclusion list. If the selected spec is blocked, report
the blocker instead of moving on to the next file.

Read `DEVELOPING.md`, `AGENTS.md`, `test-vr/README.md`, and
`.agents/skills/vr-test/SKILL.md` before editing. Inspect the target spec, its
companion story file, any imported story helpers, and the snapshots for the
target spec.

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

First list the targeted projects and tests:

```sh
npm run test-vr -- test-vr/tests/path/to/Target.spec-vr.tsx --list
```

Run the target in Docker:

```sh
npm run test-vr -- test-vr/tests/path/to/Target.spec-vr.tsx
```

The first migrated run should keep the existing legacy snapshots and add
light/dark snapshots for each assertion. The first `run` reports missing new
snapshots as failures because they do not exist yet; that is expected—create
them with the update below, then `run` again until every test passes. If new
snapshots are expected, update only the target:

```sh
npm run test-vr:update -- test-vr/tests/path/to/Target.spec-vr.tsx
```

Use `--project=chromium-light` or `--grep=ScenarioName` when narrowing an
update. Snapshots are binary PNGs, so `git diff` shows nothing meaningful;
verify that the expected new variants exist in `__snapshots__` and that each
renders as intended (legacy: white canvas, light: white canvas, dark: black
canvas). Do not delete legacy snapshots because a new project has a different
suffix, and do not commit `test-results` or `playwright-report`.

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
  10 minutes and set the tracking branch to the repository's main branch:

  ```sh
  git branch -u origin/main <branch>
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
