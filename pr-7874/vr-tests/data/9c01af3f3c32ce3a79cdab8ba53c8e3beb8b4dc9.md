# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/LegendPosition.spec-vr.tsx >> Legend.position with custom offset
- Location: test-vr/tests/LegendPosition.spec-vr.tsx:13:15

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  4191 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div>…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 4191 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div>…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 4191 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=f104e1]:
  - generic [ref=f104e3]:
    - generic [ref=f104e4]:
      - generic [ref=f104e5]: "Position: \"top\""
      - application [ref=f104e7]
    - generic [ref=f104e27]:
      - generic [ref=f104e28]: "Position: \"left\""
      - application [ref=f104e30]
    - generic [ref=f104e50]:
      - generic [ref=f104e51]: "Position: \"right\""
      - application [ref=f104e53]
    - generic [ref=f104e73]:
      - generic [ref=f104e74]: "Position: \"bottom\""
      - application [ref=f104e76]
    - generic [ref=f104e96]:
      - generic [ref=f104e97]: "Position: \"insideLeft\""
      - application [ref=f104e99]
    - generic [ref=f104e119]:
      - generic [ref=f104e120]: "Position: \"insideRight\""
      - application [ref=f104e122]
    - generic [ref=f104e142]:
      - generic [ref=f104e143]: "Position: \"insideTop\""
      - application [ref=f104e145]
    - generic [ref=f104e165]:
      - generic [ref=f104e166]: "Position: \"insideBottom\""
      - application [ref=f104e168]
    - generic [ref=f104e188]:
      - generic [ref=f104e189]: "Position: \"insideTopLeft\""
      - application [ref=f104e191]
    - generic [ref=f104e211]:
      - generic [ref=f104e212]: "Position: \"insideBottomLeft\""
      - application [ref=f104e214]
    - generic [ref=f104e234]:
      - generic [ref=f104e235]: "Position: \"insideTopRight\""
      - application [ref=f104e237]
    - generic [ref=f104e257]:
      - generic [ref=f104e258]: "Position: \"insideBottomRight\""
      - application [ref=f104e260]
    - generic [ref=f104e280]:
      - generic [ref=f104e281]: "Position: \"center\""
      - application [ref=f104e283]
    - generic [ref=f104e303]:
      - generic [ref=f104e304]: "Position: {\"x\":\"70%\",\"y\":\"70%\"}"
      - application [ref=f104e306]
    - generic [ref=f104e326]:
      - generic [ref=f104e327]: "Position: {\"x\":300,\"y\":100}"
      - application [ref=f104e329]
  - generic [ref=f104e349]: "1000"
```

# Test source

```ts
  1  | import type {
  2  |   LegendAlign,
  3  |   LegendPosition as LegendPositionStory,
  4  |   VeryLongLegendTextStory,
  5  | } from './LegendPosition.story';
  6  | import { expect, testWithThemes } from './fixtures';
  7  | 
  8  | testWithThemes('Legend.position with default offset', async ({ mountStory }) => {
  9  |   const component = await mountStory<typeof LegendPositionStory>('LegendPosition/LegendPosition');
  10 |   await expect(component).toHaveScreenshot();
  11 | });
  12 | 
  13 | testWithThemes('Legend.position with custom offset', async ({ mountStory }) => {
  14 |   const component = await mountStory<typeof LegendPositionStory>('LegendPosition/LegendPosition', { offset: 30 });
> 15 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  16 | });
  17 | 
  18 | testWithThemes('Legend.align without offset', async ({ mountStory }) => {
  19 |   const component = await mountStory<typeof LegendAlign>('LegendPosition/LegendAlign');
  20 |   await expect(component).toHaveScreenshot();
  21 | });
  22 | 
  23 | testWithThemes('VeryLongLegendText with position "bottom"', async ({ mountStory }) => {
  24 |   const component = await mountStory<typeof VeryLongLegendTextStory>('LegendPosition/VeryLongLegendTextStory', {
  25 |     position: 'bottom',
  26 |   });
  27 |   await expect(component).toHaveScreenshot();
  28 | });
  29 | 
  30 | testWithThemes('VeryLongLegendText with position "left"', async ({ mountStory }) => {
  31 |   const component = await mountStory<typeof VeryLongLegendTextStory>('LegendPosition/VeryLongLegendTextStory', {
  32 |     position: 'left',
  33 |   });
  34 |   await expect(component).toHaveScreenshot();
  35 | });
  36 | 
  37 | testWithThemes('VeryLongLegendText with position "insideRight"', async ({ mountStory }) => {
  38 |   const component = await mountStory<typeof VeryLongLegendTextStory>('LegendPosition/VeryLongLegendTextStory', {
  39 |     position: 'insideRight',
  40 |   });
  41 |   await expect(component).toHaveScreenshot();
  42 | });
  43 | 
```