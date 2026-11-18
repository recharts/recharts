# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/LegendApiExamples.spec-vr.tsx >> LegendEffectOpacity
- Location: test-vr/tests/www/LegendApiExamples.spec-vr.tsx:4:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  331 pixels (ratio 0.01 of all image pixels) are different.

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
  - 1151 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 361 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 349 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 116 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 1000ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 331 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - list [ref=e5]:
      - listitem [ref=e6]:
        - img "pv legend icon" [ref=e7]
        - text: pv
      - listitem [ref=e9]:
        - img "uv legend icon" [ref=e10]
        - text: uv
    - application [ref=e12]:
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Page A
          - generic [ref=e52]: Page B
          - generic [ref=e54]: Page C
          - generic [ref=e56]: Page D
          - generic [ref=e58]: Page E
          - generic [ref=e60]: Page F
          - generic [ref=e62]: Page G
        - generic [ref=e64]:
          - generic [ref=e65]: "0"
          - generic [ref=e67]: "2500"
          - generic [ref=e69]: "5000"
          - generic [ref=e71]: "7500"
          - generic [ref=e73]: "10000"
  - generic [aria-hidden] [ref=e75]: "0"
```

# Test source

```ts
  1  | import type { LegendExample } from './LegendApiExamples.story';
  2  | import { expect, testWithThemes } from '../fixtures';
  3  | 
  4  | testWithThemes('LegendEffectOpacity', async ({ mountStory }) => {
  5  |   const component = await mountStory('www/LegendApiExamples/LegendEffectOpacity');
> 6  |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  7  | });
  8  | 
  9  | testWithThemes('LegendExample', async ({ mountStory }) => {
  10 |   const component = await mountStory<typeof LegendExample>('www/LegendApiExamples/LegendExample', {
  11 |     isAnimationActive: false,
  12 |   });
  13 |   await expect(component).toHaveScreenshot();
  14 | });
  15 | 
```