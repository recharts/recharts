# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/XAxisApiExamples.spec-vr.tsx >> MultiXAxisExample
- Location: test-vr/tests/www/XAxisApiExamples.spec-vr.tsx:3:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  1122 pixels (ratio 0.01 of all image pixels) are different.

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
  - 1733 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 407 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 255 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 64 pixels (ratio 0.01 of all image pixels) are different.
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
  - 1122 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - generic [ref=f2e3]:
    - generic:
      - status:
        - paragraph: Page C
        - list:
          - listitem: "amt : 2290"
          - listitem: "name : Page C"
          - listitem: "pv : 9800"
          - listitem: "uv : 2000"
    - application [ref=f2e4]:
      - generic [ref=f2e109]:
        - generic [ref=f2e110]:
          - generic [ref=f2e111]: Page B
          - generic [ref=f2e113]: Page C
          - generic [ref=f2e115]: Page D
          - generic [ref=f2e117]: Page E
          - generic [ref=f2e119]: Page F
          - generic [ref=f2e121]: Page G
        - generic [ref=f2e123]:
          - generic [ref=f2e124]: "3000"
          - generic [ref=f2e126]: "2000"
          - generic [ref=f2e128]: "2780"
          - generic [ref=f2e130]: "1890"
          - generic [ref=f2e132]: "2390"
          - generic [ref=f2e134]: "3490"
        - generic [ref=f2e136]:
          - generic [ref=f2e137]: "0"
          - generic [ref=f2e139]: "2500"
          - generic [ref=f2e141]: "5000"
          - generic [ref=f2e143]: "7500"
          - generic [ref=f2e145]: "10000"
        - generic [ref=f2e147]:
          - generic [ref=f2e148]: "0"
          - generic [ref=f2e150]: "650"
          - generic [ref=f2e152]: "1300"
          - generic [ref=f2e154]: "1950"
          - generic [ref=f2e156]: "2600"
  - generic [aria-hidden] [ref=f2e158]: "650"
```

# Test source

```ts
  1 | import { expect, testWithThemes } from '../fixtures';
  2 | 
  3 | testWithThemes('MultiXAxisExample', async ({ mountStory }) => {
  4 |   const component = await mountStory('www/XAxisApiExamples/MultiXAxisExample');
> 5 |   await expect(component).toHaveScreenshot();
    |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  6 | });
  7 | 
```