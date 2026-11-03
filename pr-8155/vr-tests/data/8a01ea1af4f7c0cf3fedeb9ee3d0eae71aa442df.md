# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/Theming.spec-vr.tsx >> NestedThemeExample
- Location: test-vr/tests/www/Theming.spec-vr.tsx:45:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator(':scope > *').first()
  Expected an image 1280px by 240px, received 1280px by 245px. 1584 pixels (ratio 0.01 of all image pixels) are different.

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
  - Expected an image 1280px by 240px, received 1280px by 245px. 1584 pixels (ratio 0.01 of all image pixels) are different.
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
  - Expected an image 1280px by 240px, received 1280px by 245px. 1584 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - figure "outer lightTheme" [ref=e4]:
      - application [ref=e6]:
        - generic [ref=e50]:
          - generic [ref=e51]:
            - generic [ref=e52]: Jan
            - generic [ref=e54]: Feb
            - generic [ref=e56]: Mar
            - generic [ref=e58]: Apr
          - generic [ref=e60]:
            - generic [ref=e61]: "0"
            - generic [ref=e63]: "150"
            - generic [ref=e65]: "300"
            - generic [ref=e67]: "450"
            - generic [ref=e69]: "600"
    - figure "nested campaignTheme" [ref=e72]:
      - application [ref=e74]:
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]: Jan
            - generic [ref=e122]: Feb
            - generic [ref=e124]: Mar
            - generic [ref=e126]: Apr
          - generic [ref=e128]:
            - generic [ref=e129]: "0"
            - generic [ref=e131]: "150"
            - generic [ref=e133]: "300"
            - generic [ref=e135]: "450"
            - generic [ref=e137]: "600"
    - figure "nested theme + explicit fill" [ref=e140]:
      - application [ref=e142]:
        - generic [ref=e186]:
          - generic [ref=e187]:
            - generic [ref=e188]: Jan
            - generic [ref=e190]: Feb
            - generic [ref=e192]: Mar
            - generic [ref=e194]: Apr
          - generic [ref=e196]:
            - generic [ref=e197]: "0"
            - generic [ref=e199]: "150"
            - generic [ref=e201]: "300"
            - generic [ref=e203]: "450"
            - generic [ref=e205]: "600"
  - generic [ref=e208]: "0"
```

# Test source

```ts
  1  | import type { ThemeSwitcherExample } from './Theming.story';
  2  | import { expect, test } from '../fixtures';
  3  | 
  4  | /*
  5  |  * The switcher example has no theme provider of its own when `themeName` is `inherit`,
  6  |  * so these two tests cover what the website's color mode toggle does to it.
  7  |  */
  8  | test('ThemeSwitcherExample - page theme, light', async ({ mountStory }) => {
  9  |   const component = await mountStory<typeof ThemeSwitcherExample>('www/Theming/ThemeSwitcherExample', {
  10 |     testTheme: 'light',
  11 |     themeName: 'inherit',
  12 |   });
  13 |   await expect(component).toHaveScreenshot();
  14 | });
  15 | 
  16 | test('ThemeSwitcherExample - page theme, dark', async ({ mountStory }) => {
  17 |   const component = await mountStory<typeof ThemeSwitcherExample>('www/Theming/ThemeSwitcherExample', {
  18 |     testTheme: 'dark',
  19 |     themeName: 'inherit',
  20 |   });
  21 |   await expect(component).toHaveScreenshot();
  22 | });
  23 | 
  24 | test('ThemeSwitcherExample - emptyTheme', async ({ mountStory }) => {
  25 |   const component = await mountStory<typeof ThemeSwitcherExample>('www/Theming/ThemeSwitcherExample', {
  26 |     testTheme: 'light',
  27 |     themeName: 'empty',
  28 |   });
  29 |   await expect(component).toHaveScreenshot();
  30 | });
  31 | 
  32 | test('ThemeSwitcherExample - no provider', async ({ mountStory }) => {
  33 |   const component = await mountStory<typeof ThemeSwitcherExample>('www/Theming/ThemeSwitcherExample', {
  34 |     testTheme: 'light',
  35 |     themeName: 'none',
  36 |   });
  37 |   await expect(component).toHaveScreenshot();
  38 | });
  39 | 
  40 | test('CustomThemeExample', async ({ mountStory }) => {
  41 |   const component = await mountStory('www/Theming/CustomThemeExample', { testTheme: 'light' });
  42 |   await expect(component).toHaveScreenshot();
  43 | });
  44 | 
  45 | test('NestedThemeExample', async ({ mountStory }) => {
  46 |   const component = await mountStory('www/Theming/NestedThemeExample', { testTheme: 'light' });
> 47 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  48 | });
  49 | 
```