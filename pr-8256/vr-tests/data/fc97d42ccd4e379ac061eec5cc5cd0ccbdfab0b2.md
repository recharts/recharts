# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/AreaChartRangeVariants.spec-vr.tsx >> Area range via baseValue dataMax
- Location: test-vr/tests/www/AreaChartRangeVariants.spec-vr.tsx:13:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  81 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" locator('#root').locator(':scope > *').first() with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="640" height="320" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 81 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="640" height="320" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 81 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - application [ref=e4]:
    - generic [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e24]: "1"
        - generic [ref=e26]: "2"
        - generic [ref=e28]: "3"
        - generic [ref=e30]: "4"
        - generic [ref=e32]: "5"
        - generic [ref=e34]: "6"
      - generic [ref=e36]:
        - generic [ref=e37]: "0"
        - generic [ref=e39]: "25"
        - generic [ref=e41]: "50"
        - generic [ref=e43]: "75"
        - generic [ref=e45]: "100"
  - generic [aria-hidden] [ref=e47]: "0"
```

# Test source

```ts
  1  | import { expect, testWithThemes } from '../fixtures';
  2  | 
  3  | testWithThemes('Area range via baseValue number', async ({ mountStory }) => {
  4  |   const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaBaseValueNumber');
  5  |   await expect(component).toHaveScreenshot();
  6  | });
  7  | 
  8  | testWithThemes('Area range via baseValue dataMin', async ({ mountStory }) => {
  9  |   const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaBaseValueDataMin');
  10 |   await expect(component).toHaveScreenshot();
  11 | });
  12 | 
  13 | testWithThemes('Area range via baseValue dataMax', async ({ mountStory }) => {
  14 |   const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaBaseValueDataMax');
> 15 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  16 | });
  17 | 
  18 | testWithThemes('Area range via chart baseValue number', async ({ mountStory }) => {
  19 |   const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaChartBaseValueNumber');
  20 |   await expect(component).toHaveScreenshot();
  21 | });
  22 | 
  23 | testWithThemes('Area range via chart baseValue dataMax', async ({ mountStory }) => {
  24 |   const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaChartBaseValueDataMax');
  25 |   await expect(component).toHaveScreenshot();
  26 | });
  27 | 
```