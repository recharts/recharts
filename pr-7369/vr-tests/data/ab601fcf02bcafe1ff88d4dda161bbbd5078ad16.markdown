# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/LabelList.spec-vr.tsx >> Radar > explicit LabelList
- Location: test-vr/tests/LabelList.spec-vr.tsx:77:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator('internal:control=component')
  4140 pixels (ratio 0.01 of all image pixels) are different.

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
  - 4194 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 108 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 71 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 4624 pixels (ratio 0.02 of all image pixels) are different.
  - waiting 1000ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 4140 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- application [ref=e4]:
  - generic [ref=e9]:
    - generic [ref=e10]:
      - generic [ref=e11]: top
      - generic [ref=e12]: top
    - generic [ref=e13]:
      - generic [ref=e14]: left
      - generic [ref=e15]: left
    - generic [ref=e16]:
      - generic [ref=e17]: right
      - generic [ref=e18]: right
    - generic [ref=e19]:
      - generic [ref=e20]: bottom
      - generic [ref=e21]: bottom
    - generic [ref=e22]:
      - generic [ref=e23]: inside
      - generic [ref=e24]: inside
    - generic [ref=e25]:
      - generic [ref=e26]: outside
      - generic [ref=e27]: outside
    - generic [ref=e28]:
      - generic [ref=e29]: insideLeft
      - generic [ref=e30]: insideLeft
    - generic [ref=e31]:
      - generic [ref=e32]: insideRight
      - generic [ref=e33]: insideRight
    - generic [ref=e34]:
      - generic [ref=e35]: insideTop
      - generic [ref=e36]: insideTop
    - generic [ref=e37]:
      - generic [ref=e38]: insideBottom
      - generic [ref=e39]: insideBottom
    - generic [ref=e40]:
      - generic [ref=e41]: insideTopLeft
      - generic [ref=e42]: insideTopLeft
    - generic [ref=e43]:
      - generic [ref=e44]: insideBottomLeft
      - generic [ref=e45]: insideBottomLeft
    - generic [ref=e46]:
      - generic [ref=e47]: insideTopRight
      - generic [ref=e48]: insideTopRight
    - generic [ref=e49]:
      - generic [ref=e50]: insideBottomRight
      - generic [ref=e51]: insideBottomRight
    - generic [ref=e52]:
      - generic [ref=e53]: insideStart
      - generic [ref=e54]: insideStart
    - generic [ref=e55]:
      - generic [ref=e56]: insideEnd
      - generic [ref=e57]: insideEnd
    - generic [ref=e58]:
      - generic [ref=e59]: end
      - generic [ref=e60]: end
    - generic [ref=e61]:
      - generic [ref=e62]: center
      - generic [ref=e63]: center
    - generic [ref=e64]:
      - generic [ref=e65]: centerTop
      - generic [ref=e66]: centerTop
    - generic [ref=e67]:
      - generic [ref=e68]: centerBottom
      - generic [ref=e69]: centerBottom
    - generic [ref=e70]:
      - generic [ref=e71]: middle
      - generic [ref=e72]: middle
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
  59  |   await expect(component).toHaveScreenshot();
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
> 79  |   await expect(component).toHaveScreenshot();
      |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
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