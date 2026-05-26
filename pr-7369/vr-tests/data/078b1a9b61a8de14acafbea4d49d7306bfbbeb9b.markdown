# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/LabelApiExamples.spec-vr.tsx >> LabelRadialBarPositions
- Location: test-vr/tests/www/LabelApiExamples.spec-vr.tsx:20:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator('internal:control=component')
  287 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 287 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 287 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- application [ref=e4]:
  - generic [ref=e42]:
    - generic [ref=e43]:
      - generic [ref=e44]: insideStart
      - generic [ref=e45]: insideStart
    - generic [ref=e46]:
      - generic [ref=e47]: insideEnd
      - generic [ref=e48]: insideEnd
    - generic [ref=e49]:
      - generic [ref=e50]: end
      - generic [ref=e51]: end
```

# Test source

```ts
  1  | import * as React from 'react';
  2  | import { test, expect } from '@playwright/experimental-ct-react';
  3  | 
  4  | import LabelBarChartExample from '../../../www/src/docs/exampleComponents/Label/LabelBarChartExample';
  5  | import LabelFunnelPositions from '../../../www/src/docs/exampleComponents/Label/LabelFunnelPositions';
  6  | import LabelRadialBarPositions from '../../../www/src/docs/exampleComponents/Label/LabelRadialBarPositions';
  7  | import LabelPiePositions from '../../../www/src/docs/exampleComponents/Label/LabelPiePositions';
  8  | import LabelCartesianPositions from '../../../www/src/docs/exampleComponents/Label/LabelCartesianPositions';
  9  | 
  10 | test('LabelCartesianPositions', async ({ mount }) => {
  11 |   const component = await mount(<LabelCartesianPositions />);
  12 |   await expect(component).toHaveScreenshot();
  13 | });
  14 | 
  15 | test('LabelPiePositions', async ({ mount }) => {
  16 |   const component = await mount(<LabelPiePositions isAnimationActive={false} />);
  17 |   await expect(component).toHaveScreenshot();
  18 | });
  19 | 
  20 | test('LabelRadialBarPositions', async ({ mount }) => {
  21 |   const component = await mount(<LabelRadialBarPositions isAnimationActive={false} />);
> 22 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  23 | });
  24 | 
  25 | test('LabelBarChartExample', async ({ mount }) => {
  26 |   const component = await mount(<LabelBarChartExample isAnimationActive={false} />);
  27 |   await expect(component).toHaveScreenshot();
  28 | });
  29 | 
  30 | test('LabelFunnelPositions', async ({ mount }) => {
  31 |   const component = await mount(<LabelFunnelPositions isAnimationActive={false} />);
  32 |   await expect(component).toHaveScreenshot();
  33 | });
  34 | 
```