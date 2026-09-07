---
name: vr-test
description: Create visual regression tests
---

# What is a visual regression test?

VR tests are Playwright tests that render a story and compare the rendered output to a baseline
snapshot. Recharts runs these tests in Docker using Playwright's component testing model and a Vite
story gallery.

## Story and spec structure

Each visual-regression spec has a matching story file in `test-vr/tests`:

```text
test-vr/tests/App.story.tsx
test-vr/tests/App.spec-vr.tsx
```

The story file exports one or more React components. The spec imports `test` and `expect` from the
shared fixtures and mounts a story by its story id:

```tsx
// test-vr/tests/App.story.tsx
import * as React from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from '../../src';
import { pageData } from '../../storybook/stories/data';

export const LineChartStory = () => (
  <LineChart width={800} height={500} data={pageData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Legend />
    <Line dataKey="pv" stroke="#8884d8" />
    <Line dataKey="uv" stroke="#82ca9d" />
  </LineChart>
);
```

```tsx
// test-vr/tests/App.spec-vr.tsx
import { expect, testWithThemes } from './fixtures';

testWithThemes('LineChart', async ({ mountStory }) => {
  const component = await mountStory('App/LineChartStory');
  await expect(component).toHaveScreenshot();
});
```

The story id is the path of the story file under `test-vr/tests/` without the `.story.tsx` suffix,
followed by the exported component name. For example,
`www/LineChartApiExamples/LineChartHasMultiSeries` refers to the
`LineChartHasMultiSeries` export from `test-vr/tests/www/LineChartApiExamples.story.tsx`.

Stories can accept serializable props. Pass them as the second argument to `mountStory`:

```tsx
import type { LineChartHasMultiSeries } from './LineChartApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('LineChartHasMultiSeries', async ({ mountStory }) => {
  const component = await mountStory<typeof LineChartHasMultiSeries>(
    'www/LineChartApiExamples/LineChartHasMultiSeries',
    {
      defaultIndex: 2,
    },
  );
  await expect(component).toHaveScreenshot();
});
```

Keep the JSX in the story file rather than declaring a component inside the spec. This lets the
gallery resolve the story by id and keeps the same rendering path for tests and manual review.

## Fixture and project structure

New specs use `testWithThemes` from `test-vr/tests/fixtures`. The fixture runs
each test in the following nine projects:

| Projects                                          | Recharts rendering                                      |
| ------------------------------------------------- | ------------------------------------------------------- |
| `chromium`, `firefox`, `webkit`                   | `legacy`: no `RechartsThemeProvider`, white canvas      |
| `chromium-light`, `firefox-light`, `webkit-light` | `RechartsThemeProvider` with `lightTheme`, white canvas |
| `chromium-dark`, `firefox-dark`, `webkit-dark`    | `RechartsThemeProvider` with `darkTheme`, black canvas  |

The Playwright project selects the variant through the gallery URL and metadata.
The story does not receive a theme prop. Never add `testTheme` to a new story,
put a theme name in the test title, or pass a custom screenshot name.

The exported `test` fixture is the legacy-only compatibility entry point used
by existing specs, and `legacyTest` is its explicit name. Keep those fixtures
local to specs that are not ready for light and dark baselines. The old
`test-vr/tests/www/StoryTheme.tsx` helper is also compatibility code for
unmigrated website stories. For migration work, use
`.agents/skills/vr-test-migration/SKILL.md`.

## Intentional variant exceptions

Suppress variants with structured fixture configuration rather than test-title
wording:

```tsx
testWithThemes.describe('website color mode', { tag: '@recharts-theme-legacy' }, () => {
  testWithThemes.use({ colorScheme: 'dark' });

  testWithThemes('dark website', async ({ mountStory }) => {
    const component = await mountStory('www/dark-mode/SimpleLineChartStory');
    await expect(component).toHaveScreenshot();
  });
});
```

The `@recharts-theme-legacy`, `@recharts-theme-light`, and
`@recharts-theme-dark` tags select Recharts variants and are inherited by
nested tests. Multiple tags can select multiple variants. Alternatively, set
`testWithThemes.use({ rechartsThemes: ['legacy', 'light'] })` at file,
`describe`, or test scope. Tags take precedence over the fixture option.
`colorScheme` remains the browser's independent `prefers-color-scheme` setting.

## Running tests

The tests run inside Docker. Build the image and start the report server once with:

```sh
npm run test-vr:prepare
```

Run the full suite with:

```sh
npm run test-vr
```

The full suite runs all nine projects and may take 20+ minutes. Prefer a
targeted file, project, or grep while developing:

```sh
npm run test-vr -- test-vr/tests/Legend.spec-vr.tsx
```

```sh
npm run test-vr -- --grep=Legend
```

```sh
npm run test-vr -- --project=chromium-dark --grep=Legend
```

If a screenshot is missing, a `testWithThemes` spec generates a baseline for
each selected browser/theme project. A legacy spec generates only the existing
browser baselines. Review and commit intentional files in
`test-vr/__snapshots__`.

## Updating screenshots

If source or story changes affect the rendered output, update the baselines:

```sh
npm run test-vr:update
```

Use the same file or grep selectors for a targeted update:

```sh
npm run test-vr:update -- --grep=Legend
```

```sh
npm run test-vr:update -- test-vr/tests/Legend.spec-vr.tsx
```

Use `--project` or `--grep` for a smaller update. Do not update all projects
while migrating one spec unless you intend to review every generated baseline.

## Playwright UI and the story preview

Run UI mode with:

```sh
npm run test-vr:ui
```

This publishes the Playwright UI at http://localhost:8080 and the Vite gallery at port 3100.
Open http://localhost:3100/gallery/preview.html for a human-facing navigation page that shows each
selected story in three stacked legacy, light, and dark panels. Each panel loads the Playwright
mount page (`index.html?story=…&rechartsTheme=…`) in an isolated iframe, with an open-in-new-tab
link for the single variant.

The URL http://localhost:3100/gallery/index.html is intentionally a blank Playwright mount target.
Playwright navigates there before calling `window.mount`; it does not contain a story list and does
not require a story query parameter. A `?story=` URL auto-mounts the story for iframe panels and
open-in-new-tab links. Theme projects add the `rechartsTheme`
query parameter automatically; opening the mount page directly shows the
legacy/no-provider path. If either host port is already in use, free it before
starting UI mode or change the host-side port mapping in the command.

The HTML report is served at http://localhost:9323 after `npm run test-vr:prepare`.

Tests and screenshot generation require Docker. If Docker is unavailable, do not attempt to run the
visual-regression suite locally.

For additional details, see `test-vr/README.md` and `DEVELOPING.md`.
