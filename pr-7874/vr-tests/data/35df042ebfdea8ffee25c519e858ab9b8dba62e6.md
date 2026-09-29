# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/theme/LineTheme.spec-vr.tsx >> Line theme
- Location: test-vr/tests/theme/LineTheme.spec-vr.tsx:3:15

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root')
  2006 pixels (ratio 0.01 of all image pixels) are different.

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
  - 2006 pixels (ratio 0.01 of all image pixels) are different.
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
  - 2006 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - heading "Unthemed Line" [level=1] [ref=e3]
    - generic [ref=e4]:
      - generic:
        - status:
          - paragraph: B
          - list:
            - listitem: "revenue : 280"
      - application [ref=e5]:
        - generic [ref=e47]:
          - generic [ref=e48]:
            - generic [ref=e49]: A
            - generic [ref=e51]: B
            - generic [ref=e53]: C
            - generic [ref=e55]: D
          - generic [ref=e57]:
            - generic [ref=e58]: "0"
            - generic [ref=e60]: "90"
            - generic [ref=e62]: "180"
            - generic [ref=e64]: "270"
            - generic [ref=e66]: "360"
    - heading "Themed Line" [level=1] [ref=e68]
    - generic [ref=e69]:
      - generic:
        - status:
          - paragraph: B
          - list:
            - listitem: "revenue : 280"
      - application [ref=e70]:
        - generic [ref=e84]:
          - generic [ref=e85]:
            - generic [ref=e86]: A
            - generic [ref=e88]: B
            - generic [ref=e90]: C
            - generic [ref=e92]: D
          - generic [ref=e94]:
            - generic [ref=e95]: "0"
            - generic [ref=e97]: "90"
            - generic [ref=e99]: "180"
            - generic [ref=e101]: "270"
            - generic [ref=e103]: "360"
  - generic [ref=e105]: "0"
```

# Test source

```ts
  1 | import { expect, testWithThemes } from '../fixtures';
  2 | 
  3 | testWithThemes('Line theme', async ({ mountStory }) => {
  4 |   const component = await mountStory('theme/LineTheme/LineThemeComparison');
  5 | 
> 6 |   await expect(component).toHaveScreenshot();
    |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  7 | });
  8 | 
```