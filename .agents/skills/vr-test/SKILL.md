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
import { expect, test } from './fixtures';

test('LineChart', async ({ mountStory }) => {
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
import { expect, test } from '../fixtures';

test('LineChartHasMultiSeries', async ({ mountStory }) => {
  const component = await mountStory<typeof LineChartHasMultiSeries>(
    'www/LineChartApiExamples/LineChartHasMultiSeries',
    {
      testTheme: 'light',
      defaultIndex: 2,
    },
  );
  await expect(component).toHaveScreenshot();
});
```

Keep the JSX in the story file rather than declaring a component inside the spec. This lets the
gallery resolve the story by id and keeps the same rendering path for tests and manual review.

## Running tests

The tests run inside Docker. Build the image and start the report server once with:

```sh
npm run test-vr:prepare
```

Run the full suite with:

```sh
npm run test-vr
```

The full suite may take 20+ minutes. Prefer a targeted file or grep while developing:

```sh
npm run test-vr -- test-vr/tests/Legend.spec-vr.tsx
```

```sh
npm run test-vr -- --grep=Legend
```

The default configuration runs Chromium, Firefox, and WebKit. If a screenshot is missing, the test
generates a baseline for each browser; commit those files in `test-vr/__snapshots__`.

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

## Playwright UI and the story preview

Run UI mode with:

```sh
npm run test-vr:ui
```

This publishes the Playwright UI at http://localhost:8080 and the Vite gallery at port 3100.
Open http://localhost:3100/gallery/preview.html for a human-facing navigation page that lets you
click through all stories using their default props.

The URL http://localhost:3100/gallery/index.html is intentionally a blank Playwright mount target.
Playwright navigates there before calling `window.mount`; it does not contain a story list and does
not require a story query parameter. If either host port is already in use, free it before starting
UI mode or change the host-side port mapping in the command.

The HTML report is served at http://localhost:9323 after `npm run test-vr:prepare`.

Tests and screenshot generation require Docker. If Docker is unavailable, do not attempt to run the
visual-regression suite locally.

For additional details, see `test-vr/README.md`.
