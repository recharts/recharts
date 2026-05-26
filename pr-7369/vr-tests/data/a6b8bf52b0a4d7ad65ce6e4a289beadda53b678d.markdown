# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/RadialBarChartApiExamples.spec-vr.tsx >> RadialBarChartNavExample
- Location: test-vr/tests/www/RadialBarChartApiExamples.spec-vr.tsx:8:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator('internal:control=component')
  395 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 724073 pixels (ratio 0.46 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 615706 pixels (ratio 0.39 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 107368 pixels (ratio 0.07 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 395 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- application [ref=e4]:
  - generic [ref=e25]:
    - generic [ref=e27]: "0"
    - generic [ref=e30]: "5"
    - generic [ref=e33]: "10"
    - generic [ref=e36]: "15"
    - generic [ref=e39]: "20"
    - generic [ref=e42]: "25"
    - generic [ref=e45]: "30"
    - generic [ref=e48]: "35"
    - generic [ref=e51]: "40"
```

# Test source

```ts
  1  | import * as React from 'react';
  2  | import { test, expect } from '@playwright/experimental-ct-react';
  3  | 
  4  | import SimpleRadialBarChart from '../../../www/src/docs/exampleComponents/RadialBarChart/SimpleRadialBarChart';
  5  | import RadialBarChartNavExample from '../../../www/src/docs/exampleComponents/RadialBarChart/RadialBarChartNavExample';
  6  | import RadialBarChartClickToFocusLegendExample from '../../../www/src/docs/exampleComponents/RadialBarChart/RadialBarChartClickToFocusLegendExample';
  7  | 
  8  | test('RadialBarChartNavExample', async ({ mount }) => {
  9  |   const component = await mount(<RadialBarChartNavExample />);
> 10 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  11 | });
  12 | 
  13 | test('SimpleRadialBarChart', async ({ mount }) => {
  14 |   const component = await mount(<SimpleRadialBarChart />);
  15 |   await expect(component).toHaveScreenshot();
  16 | });
  17 | 
  18 | test('RadialBarChartClickToFocusLegendExample', async ({ mount }) => {
  19 |   const component = await mount(<RadialBarChartClickToFocusLegendExample />);
  20 |   await expect(component).toHaveScreenshot();
  21 | });
  22 | 
```