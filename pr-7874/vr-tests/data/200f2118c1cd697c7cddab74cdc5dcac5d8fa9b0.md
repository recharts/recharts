# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/theme/BrushTheme.spec-vr.tsx >> Brush theme
- Location: test-vr/tests/theme/BrushTheme.spec-vr.tsx:3:15

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root')
  2262 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root')
    - locator resolved to <div id="root" class="recharts-vr-canvas--contrast-dark">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 2262 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root')
    - locator resolved to <div id="root" class="recharts-vr-canvas--contrast-dark">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 2262 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - heading "Unthemed Brush" [level=1] [ref=e3]
    - application [ref=e5]:
      - generic [ref=e6]:
        - 'slider "Min value: A, Max value: E" [ref=e9]'
        - 'slider "Min value: A, Max value: E" [ref=e13]'
        - generic [ref=e17]:
          - generic: "120"
          - generic: "240"
      - generic [ref=e58]:
        - generic [ref=e59]:
          - generic [ref=e60]: A
          - generic [ref=e62]: B
          - generic [ref=e64]: C
          - generic [ref=e66]: D
          - generic [ref=e68]: E
        - generic [ref=e70]:
          - generic [ref=e71]: "0"
          - generic [ref=e73]: "90"
          - generic [ref=e75]: "180"
          - generic [ref=e77]: "270"
          - generic [ref=e79]: "360"
    - heading "Themed Brush" [level=1] [ref=e81]
    - application [ref=e83]:
      - generic [ref=e84]:
        - 'slider "Min value: A, Max value: E" [ref=e87]'
        - 'slider "Min value: A, Max value: E" [ref=e91]'
        - generic [ref=e95]:
          - generic: "120"
          - generic: "240"
      - generic [ref=e107]:
        - generic [ref=e108]:
          - generic [ref=e109]: A
          - generic [ref=e111]: B
          - generic [ref=e113]: C
          - generic [ref=e115]: D
          - generic [ref=e117]: E
        - generic [ref=e119]:
          - generic [ref=e120]: "0"
          - generic [ref=e122]: "90"
          - generic [ref=e124]: "180"
          - generic [ref=e126]: "270"
          - generic [ref=e128]: "360"
  - generic [ref=e130]: "0"
```

# Test source

```ts
  1 | import { expect, testWithThemes } from '../fixtures';
  2 | 
  3 | testWithThemes('Brush theme', async ({ mountStory }) => {
  4 |   const component = await mountStory('theme/BrushTheme/BrushThemeComparison');
  5 | 
> 6 |   await expect(component).toHaveScreenshot();
    |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  7 | });
  8 | 
```