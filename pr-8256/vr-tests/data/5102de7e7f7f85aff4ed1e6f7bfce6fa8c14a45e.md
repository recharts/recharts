# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/LabelApiExamples.spec-vr.tsx >> LabelBarChartExample
- Location: test-vr/tests/www/LabelApiExamples.spec-vr.tsx:28:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  626 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" locator('#root').locator(':scope > *').first() with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 626 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 626 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=f4e1]:
  - application [ref=f4e4]:
    - generic [ref=f4e41]:
      - generic [ref=f4e42]:
        - generic [ref=f4e43]: Page A
        - generic [ref=f4e45]: Page B
        - generic [ref=f4e47]: Page C
        - generic [ref=f4e49]: Page D
        - generic [ref=f4e51]: Page E
        - generic [ref=f4e53]: Page F
        - generic [ref=f4e55]: Page G
      - generic [ref=f4e57]: insideBottom
      - generic [ref=f4e58]:
        - generic [ref=f4e59]: "0"
        - generic [ref=f4e61]: "2500"
        - generic [ref=f4e63]: "5000"
        - generic [ref=f4e65]: "7500"
        - generic [ref=f4e67]: "10000"
      - generic [ref=f4e69]: insideLeft
      - generic [ref=f4e70]:
        - generic [ref=f4e71]: Page A
        - generic [ref=f4e72]: Page B
        - generic [ref=f4e73]: Page C
        - generic [ref=f4e74]: Page D
        - generic [ref=f4e75]: Page E
        - generic [ref=f4e76]: Page F
        - generic [ref=f4e77]: Page G
  - generic [aria-hidden] [ref=f4e78]: "0"
```

# Test source

```ts
  1  | import type {
  2  |   LabelBarChartExample,
  3  |   LabelFunnelPositions,
  4  |   LabelPiePositions,
  5  |   LabelRadialBarPositions,
  6  | } from './LabelApiExamples.story';
  7  | import { expect, testWithThemes } from '../fixtures';
  8  | 
  9  | testWithThemes('LabelCartesianPositions', async ({ mountStory }) => {
  10 |   const component = await mountStory('www/LabelApiExamples/LabelCartesianPositions');
  11 |   await expect(component).toHaveScreenshot();
  12 | });
  13 | 
  14 | testWithThemes('LabelPiePositions', async ({ mountStory }) => {
  15 |   const component = await mountStory<typeof LabelPiePositions>('www/LabelApiExamples/LabelPiePositions', {
  16 |     isAnimationActive: false,
  17 |   });
  18 |   await expect(component).toHaveScreenshot();
  19 | });
  20 | 
  21 | testWithThemes('LabelRadialBarPositions', async ({ mountStory }) => {
  22 |   const component = await mountStory<typeof LabelRadialBarPositions>('www/LabelApiExamples/LabelRadialBarPositions', {
  23 |     isAnimationActive: false,
  24 |   });
  25 |   await expect(component).toHaveScreenshot();
  26 | });
  27 | 
  28 | testWithThemes('LabelBarChartExample', async ({ mountStory }) => {
  29 |   const component = await mountStory<typeof LabelBarChartExample>('www/LabelApiExamples/LabelBarChartExample', {
  30 |     isAnimationActive: false,
  31 |   });
> 32 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  33 | });
  34 | 
  35 | testWithThemes('LabelFunnelPositions', async ({ mountStory }) => {
  36 |   const component = await mountStory<typeof LabelFunnelPositions>('www/LabelApiExamples/LabelFunnelPositions', {
  37 |     isAnimationActive: false,
  38 |   });
  39 |   await expect(component).toHaveScreenshot();
  40 | });
  41 | 
```