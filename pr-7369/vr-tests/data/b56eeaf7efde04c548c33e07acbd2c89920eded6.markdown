# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/LabelApiExamples.spec-vr.tsx >> LabelBarChartExample
- Location: test-vr/tests/www/LabelApiExamples.spec-vr.tsx:25:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator('internal:control=component')
  937 pixels (ratio 0.01 of all image pixels) are different.

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
  - 937 pixels (ratio 0.01 of all image pixels) are different.
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
  - 937 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - application [ref=e4]:
    - generic [ref=e42]:
      - generic [ref=e43]:
        - generic [ref=e45]: Page A
        - generic [ref=e47]: Page B
        - generic [ref=e49]: Page C
        - generic [ref=e51]: Page D
        - generic [ref=e53]: Page E
        - generic [ref=e55]: Page F
        - generic [ref=e57]: Page G
      - generic [ref=e58]: insideBottom
      - generic [ref=e59]:
        - generic [ref=e61]: "0"
        - generic [ref=e63]: "2500"
        - generic [ref=e65]: "5000"
        - generic [ref=e67]: "7500"
        - generic [ref=e69]: "10000"
      - generic [ref=e70]: insideLeft
      - generic [ref=e71]:
        - generic [ref=e72]: Page A
        - generic [ref=e73]: Page B
        - generic [ref=e74]: Page C
        - generic [ref=e75]: Page D
        - generic [ref=e76]: Page E
        - generic [ref=e77]: Page F
        - generic [ref=e78]: Page G
  - generic [ref=e79]: "0"
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
  22 |   await expect(component).toHaveScreenshot();
  23 | });
  24 | 
  25 | test('LabelBarChartExample', async ({ mount }) => {
  26 |   const component = await mount(<LabelBarChartExample isAnimationActive={false} />);
> 27 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  28 | });
  29 | 
  30 | test('LabelFunnelPositions', async ({ mount }) => {
  31 |   const component = await mount(<LabelFunnelPositions isAnimationActive={false} />);
  32 |   await expect(component).toHaveScreenshot();
  33 | });
  34 | 
```