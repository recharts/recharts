# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/LabelList.spec-vr.tsx >> Scatter > explicit LabelList
- Location: test-vr/tests/LabelList.spec-vr.tsx:57:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator('internal:control=component')
  4002 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 3892 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 4411 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 4002 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - application [ref=e4]:
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic [ref=e41]: Page C
        - generic [ref=e43]: Page D
      - generic [ref=e44]:
        - generic [ref=e46]: "0"
        - generic [ref=e48]: "350"
        - generic [ref=e50]: "700"
        - generic [ref=e52]: "1050"
        - generic [ref=e54]: "1400"
      - generic [ref=e55]:
        - generic [ref=e56]: top
        - generic [ref=e57]: top
      - generic [ref=e58]:
        - generic [ref=e59]: left
        - generic [ref=e60]: left
      - generic [ref=e61]:
        - generic [ref=e62]: right
        - generic [ref=e63]: right
      - generic [ref=e64]:
        - generic [ref=e65]: bottom
        - generic [ref=e66]: bottom
      - generic [ref=e67]:
        - generic [ref=e68]: inside
        - generic [ref=e69]: inside
      - generic [ref=e70]:
        - generic [ref=e71]: outside
        - generic [ref=e72]: outside
      - generic [ref=e73]:
        - generic [ref=e74]: insideLeft
        - generic [ref=e75]: insideLeft
      - generic [ref=e76]:
        - generic [ref=e77]: insideRight
        - generic [ref=e78]: insideRight
      - generic [ref=e79]:
        - generic [ref=e80]: insideTop
        - generic [ref=e81]: insideTop
      - generic [ref=e82]:
        - generic [ref=e83]: insideBottom
        - generic [ref=e84]: insideBottom
      - generic [ref=e85]:
        - generic [ref=e86]: insideTopLeft
        - generic [ref=e87]: insideTopLeft
      - generic [ref=e88]:
        - generic [ref=e89]: insideBottomLeft
        - generic [ref=e90]: insideBottomLeft
      - generic [ref=e91]:
        - generic [ref=e92]: insideTopRight
        - generic [ref=e93]: insideTopRight
      - generic [ref=e94]:
        - generic [ref=e95]: insideBottomRight
        - generic [ref=e96]: insideBottomRight
      - generic [ref=e97]:
        - generic [ref=e98]: insideStart
        - generic [ref=e99]: insideStart
      - generic [ref=e100]:
        - generic [ref=e101]: insideEnd
        - generic [ref=e102]: insideEnd
      - generic [ref=e103]:
        - generic [ref=e104]: end
        - generic [ref=e105]: end
      - generic [ref=e106]:
        - generic [ref=e107]: center
        - generic [ref=e108]: center
      - generic [ref=e109]:
        - generic [ref=e110]: centerTop
        - generic [ref=e111]: centerTop
      - generic [ref=e112]:
        - generic [ref=e113]: centerBottom
        - generic [ref=e114]: centerBottom
      - generic [ref=e115]:
        - generic [ref=e116]: middle
        - generic [ref=e117]: middle
  - generic [ref=e118]: "0"
```

# Test source

```ts
  1   | import * as React from 'react';
  2   | import { test, expect } from '@playwright/experimental-ct-react';
  3   | import {
  4   |   AreaExplicitLabelListTest,
  5   |   AreaImplicitLabelListTest,
  6   |   BarExplicitLabelListTest,
  7   |   BarImplicitLabelListTest,
  8   |   LineExplicitLabelListTest,
  9   |   LineImplicitLabelListTest,
  10  |   ScatterExplicitLabelListTest,
  11  |   ScatterImplicitLabelListTest,
  12  |   PieExplicitLabelListTest,
  13  |   PieImplicitLabelListTest,
  14  |   RadarExplicitLabelListTest,
  15  |   RadarImplicitLabelListTest,
  16  |   RadialBarExplicitLabelListTest,
  17  |   RadialBarImplicitLabelListTest,
  18  |   FunnelImplicitLabelListTest,
  19  |   FunnelExplicitLabelListTest,
  20  | } from './LabelListComponents';
  21  | 
  22  | test('Area > implicit LabelList', async ({ mount }) => {
  23  |   const component = await mount(<AreaImplicitLabelListTest />);
  24  |   await expect(component).toHaveScreenshot();
  25  | });
  26  | 
  27  | test('Area > explicit LabelList', async ({ mount }) => {
  28  |   const component = await mount(<AreaExplicitLabelListTest />);
  29  |   await expect(component).toHaveScreenshot();
  30  | });
  31  | 
  32  | test('Bar > implicit LabelList', async ({ mount }) => {
  33  |   const component = await mount(<BarImplicitLabelListTest />);
  34  |   await expect(component).toHaveScreenshot();
  35  | });
  36  | 
  37  | test('Bar > explicit LabelList', async ({ mount }) => {
  38  |   const component = await mount(<BarExplicitLabelListTest />);
  39  |   await expect(component).toHaveScreenshot();
  40  | });
  41  | 
  42  | test('Line > implicit LabelList', async ({ mount }) => {
  43  |   const component = await mount(<LineImplicitLabelListTest />);
  44  |   await expect(component).toHaveScreenshot();
  45  | });
  46  | 
  47  | test('Line > explicit LabelList', async ({ mount }) => {
  48  |   const component = await mount(<LineExplicitLabelListTest />);
  49  |   await expect(component).toHaveScreenshot();
  50  | });
  51  | 
  52  | test('Scatter > implicit LabelList', async ({ mount }) => {
  53  |   const component = await mount(<ScatterImplicitLabelListTest />);
  54  |   await expect(component).toHaveScreenshot();
  55  | });
  56  | 
  57  | test('Scatter > explicit LabelList', async ({ mount }) => {
  58  |   const component = await mount(<ScatterExplicitLabelListTest />);
> 59  |   await expect(component).toHaveScreenshot();
      |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  60  | });
  61  | 
  62  | test('Pie > implicit LabelList', async ({ mount }) => {
  63  |   const component = await mount(<PieImplicitLabelListTest />);
  64  |   await expect(component).toHaveScreenshot();
  65  | });
  66  | 
  67  | test('Pie > explicit LabelList', async ({ mount }) => {
  68  |   const component = await mount(<PieExplicitLabelListTest />);
  69  |   await expect(component).toHaveScreenshot();
  70  | });
  71  | 
  72  | test('Radar > implicit LabelList', async ({ mount }) => {
  73  |   const component = await mount(<RadarImplicitLabelListTest />);
  74  |   await expect(component).toHaveScreenshot();
  75  | });
  76  | 
  77  | test('Radar > explicit LabelList', async ({ mount }) => {
  78  |   const component = await mount(<RadarExplicitLabelListTest />);
  79  |   await expect(component).toHaveScreenshot();
  80  | });
  81  | 
  82  | test('RadialBar > implicit LabelList', async ({ mount }) => {
  83  |   const component = await mount(<RadialBarImplicitLabelListTest />);
  84  |   await expect(component).toHaveScreenshot();
  85  | });
  86  | 
  87  | test('RadialBar > explicit LabelList', async ({ mount }) => {
  88  |   const component = await mount(<RadialBarExplicitLabelListTest />);
  89  |   await expect(component).toHaveScreenshot();
  90  | });
  91  | 
  92  | test('Funnel > implicit LabelList', async ({ mount }) => {
  93  |   const component = await mount(<FunnelImplicitLabelListTest />);
  94  |   await expect(component).toHaveScreenshot();
  95  | });
  96  | 
  97  | test('Funnel > explicit LabelList', async ({ mount }) => {
  98  |   const component = await mount(<FunnelExplicitLabelListTest />);
  99  |   await expect(component).toHaveScreenshot();
  100 | });
  101 | 
```