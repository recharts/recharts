# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/Label.spec-vr.tsx >> Pie > Label
- Location: test-vr/tests/Label.spec-vr.tsx:48:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  1026 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" locator('#root').locator(':scope > *').first() with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 1026 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="900" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 1026 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - list [ref=e5]:
    - listitem [ref=e6]:
      - img "Page A legend icon" [ref=e7]
      - text: Page A
    - listitem [ref=e9]:
      - img "Page B legend icon" [ref=e10]
      - text: Page B
    - listitem [ref=e12]:
      - img "Page C legend icon" [ref=e13]
      - text: Page C
    - listitem [ref=e15]:
      - img "Page D legend icon" [ref=e16]
      - text: Page D
    - listitem [ref=e18]:
      - img "Page E legend icon" [ref=e19]
      - text: Page E
    - listitem [ref=e21]:
      - img "Page F legend icon" [ref=e22]
      - text: Page F
    - listitem [ref=e24]:
      - img "Page G legend icon" [ref=e25]
      - text: Page G
  - application [ref=e27]:
    - generic [ref=e29]:
      - generic [ref=e52]: "Position: insideStart"
      - generic [ref=e53]: "Position: insideEnd"
      - generic [ref=e54]: "Position: end"
    - generic [ref=e55]:
      - generic [ref=e56]: "Position: top"
      - generic [ref=e57]: "Position: left"
      - generic [ref=e58]: "Position: right"
      - generic [ref=e59]: "Position: bottom"
      - generic [ref=e60]: "Position: inside"
      - generic [ref=e61]: "Position: outside"
      - generic [ref=e62]: "Position: insideLeft"
      - generic [ref=e63]: "Position: insideRight"
      - generic [ref=e64]: "Position: insideTop"
      - generic [ref=e65]: "Position: insideBottom"
      - generic [ref=e66]: "Position: insideTopLeft"
      - generic [ref=e67]: "Position: insideBottomLeft"
      - generic [ref=e68]: "Position: insideTopRight"
      - generic [ref=e69]: "Position: insideBottomRight"
      - generic [ref=e70]: "Position: center"
      - generic [ref=e71]: "Position: centerTop"
      - generic [ref=e72]: "Position: centerBottom"
      - generic [ref=e73]: "Position: middle"
```

# Test source

```ts
  1  | import { expect, testWithThemes } from './fixtures';
  2  | 
  3  | testWithThemes('XAxis > Label', async ({ mountStory }) => {
  4  |   const component = await mountStory('Label/XAxisLabel');
  5  |   await expect(component).toHaveScreenshot();
  6  | });
  7  | 
  8  | testWithThemes('YAxis > Label', async ({ mountStory }) => {
  9  |   const component = await mountStory('Label/YAxisLabel');
  10 |   await expect(component).toHaveScreenshot();
  11 | });
  12 | 
  13 | testWithThemes('ReferenceArea > Label', async ({ mountStory }) => {
  14 |   const component = await mountStory('Label/ReferenceAreaLabel');
  15 |   await expect(component).toHaveScreenshot();
  16 | });
  17 | 
  18 | testWithThemes('ReferenceDot > Label', async ({ mountStory }) => {
  19 |   const component = await mountStory('Label/ReferenceDotLabel');
  20 |   await expect(component).toHaveScreenshot();
  21 | });
  22 | 
  23 | testWithThemes('ReferenceLine > Label', async ({ mountStory }) => {
  24 |   const component = await mountStory('Label/ReferenceLineLabel');
  25 |   await expect(component).toHaveScreenshot();
  26 | });
  27 | 
  28 | testWithThemes('RadarChart > Label', async ({ mountStory }) => {
  29 |   const component = await mountStory('Label/RadarChartLabel');
  30 |   await expect(component).toHaveScreenshot();
  31 | });
  32 | 
  33 | testWithThemes('PolarRadiusAxis > Label', async ({ mountStory }) => {
  34 |   const component = await mountStory('Label/PolarRadiusAxisLabel');
  35 |   await expect(component).toHaveScreenshot();
  36 | });
  37 | 
  38 | testWithThemes('PolarAngleAxis > Label', async ({ mountStory }) => {
  39 |   const component = await mountStory('Label/PolarAngleAxisLabel');
  40 |   await expect(component).toHaveScreenshot();
  41 | });
  42 | 
  43 | testWithThemes('PieChart > Label', async ({ mountStory }) => {
  44 |   const component = await mountStory('Label/PieChartLabel');
  45 |   await expect(component).toHaveScreenshot();
  46 | });
  47 | 
  48 | testWithThemes('Pie > Label', async ({ mountStory }) => {
  49 |   const component = await mountStory('Label/PieLabel');
> 50 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  51 | });
  52 | 
  53 | testWithThemes('ReferenceLine > Label with background', async ({ mountStory }) => {
  54 |   const component = await mountStory('Label/ReferenceLineLabelWithBackground');
  55 |   await expect(component).toHaveScreenshot();
  56 | });
  57 | 
```