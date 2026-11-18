# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/Scatter.spec-vr.tsx >> Scatter with shape prop
- Location: test-vr/tests/Scatter.spec-vr.tsx:8:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  274 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" locator('#root').locator(':scope > *').first() with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="500" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 2843 pixels (ratio 0.02 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="500" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 2454 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="500" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 627 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="500" height="500" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 274 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=f4e1]:
  - application [ref=f4e4]:
    - generic [ref=f4e59]:
      - generic [ref=f4e60]:
        - generic [ref=f4e61]: circle
        - generic [ref=f4e63]: cross
        - generic [ref=f4e65]: diamond
        - generic [ref=f4e67]: square
        - generic [ref=f4e69]: star
        - generic [ref=f4e71]: triangle
        - generic [ref=f4e73]: wye
      - generic [ref=f4e75]:
        - generic [ref=f4e76]: "0"
        - generic [ref=f4e78]: "200"
        - generic [ref=f4e80]: "400"
        - generic [ref=f4e82]: "600"
        - generic [ref=f4e84]: "800"
  - generic [aria-hidden] [ref=f4e86]: "0"
```

# Test source

```ts
  1  | import { expect, testWithThemes } from './fixtures';
  2  | 
  3  | testWithThemes('Scatter with type in data array', async ({ mountStory }) => {
  4  |   const component = await mountStory('Scatter/ScatterWithTypeInDataArray');
  5  |   await expect(component).toHaveScreenshot();
  6  | });
  7  | 
  8  | testWithThemes('Scatter with shape prop', async ({ mountStory }) => {
  9  |   const component = await mountStory('Scatter/ScatterWithShapeProp');
> 10 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  11 | });
  12 | 
```