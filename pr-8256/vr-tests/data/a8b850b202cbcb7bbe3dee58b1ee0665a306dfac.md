# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/Theming.spec-vr.tsx >> CustomThemeExample
- Location: test-vr/tests/www/Theming.spec-vr.tsx:7:1

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  26 pixels (ratio 0.01 of all image pixels) are different.

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
  - 1138 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 530 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 427 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - waiting for locator('#root').locator(':scope > *').first()
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 152 pixels (ratio 0.01 of all image pixels) are different.
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
  - 26 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic:
      - status:
        - paragraph: Mar
        - list:
          - listitem: "profit : 2400"
          - listitem: "revenue : 7200"
    - list [ref=e5]:
      - listitem [ref=e6]:
        - img "profit legend icon" [ref=e7]
        - text: profit
      - listitem [ref=e11]:
        - img "revenue legend icon" [ref=e12]
        - text: revenue
    - application [ref=e16]:
      - generic [ref=e93]:
        - generic [ref=e94]:
          - generic [ref=e95]: Jan
          - generic [ref=e97]: Feb
          - generic [ref=e99]: Mar
          - generic [ref=e101]: Apr
          - generic [ref=e103]: May
          - generic [ref=e105]: Jun
        - generic [ref=e107]: Month
        - generic [ref=e108]:
          - generic [ref=e109]: "0"
          - generic [ref=e111]: "2500"
          - generic [ref=e113]: "5000"
          - generic [ref=e115]: "7500"
          - generic [ref=e117]: "10000"
        - generic [ref=e119]: Revenue [AUD]
        - generic [ref=e120]: "6000"
  - generic [aria-hidden] [ref=e121]: "0"
```

# Test source

```ts
  1  | import { expect, testWithThemes } from '../fixtures';
  2  | 
  3  | /*
  4  |  * The example nests its own RechartsThemeProvider with a custom theme, which overrides
  5  |  * the theme selected by the gallery, so the light and dark variants would not add coverage.
  6  |  */
  7  | testWithThemes('CustomThemeExample', { tag: '@recharts-theme-legacy' }, async ({ mountStory }) => {
  8  |   const component = await mountStory('www/Theming/CustomThemeExample');
> 9  |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  10 | });
  11 | 
```