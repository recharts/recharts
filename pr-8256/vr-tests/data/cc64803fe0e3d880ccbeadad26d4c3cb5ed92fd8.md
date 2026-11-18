# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/ResponsiveContainerApiExamples.spec-vr.tsx >> ResponsiveContainerExample
- Location: test-vr/tests/www/ResponsiveContainerApiExamples.spec-vr.tsx:4:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  365 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" locator('#root').locator(':scope > *').first() with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div class="recharts-responsive-container">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 365 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div class="recharts-responsive-container">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 365 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - application [ref=e5]:
    - generic [ref=e24]:
      - generic [ref=e25]:
        - generic [ref=e26]: Page A
        - generic [ref=e28]: Page B
        - generic [ref=e30]: Page C
        - generic [ref=e32]: Page D
        - generic [ref=e34]: Page E
        - generic [ref=e36]: Page F
        - generic [ref=e38]: Page G
      - generic [ref=e40]:
        - generic [ref=e41]: "0"
        - generic [ref=e43]: "1000"
        - generic [ref=e45]: "2000"
        - generic [ref=e47]: "3000"
        - generic [ref=e49]: "4000"
      - generic [ref=e51]: Min PAGE
      - generic [ref=e52]: Max
  - generic [aria-hidden] [ref=e53]: "0"
```

# Test source

```ts
  1  | import type { ResponsiveContainerExample } from './ResponsiveContainerApiExamples.story';
  2  | import { expect, testWithThemes } from '../fixtures';
  3  | 
  4  | testWithThemes('ResponsiveContainerExample', async ({ mountStory }) => {
  5  |   const component = await mountStory<typeof ResponsiveContainerExample>(
  6  |     'www/ResponsiveContainerApiExamples/ResponsiveContainerExample',
  7  |     {
  8  |       isAnimationActive: false,
  9  |     },
  10 |   );
> 11 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  12 | });
  13 | 
```