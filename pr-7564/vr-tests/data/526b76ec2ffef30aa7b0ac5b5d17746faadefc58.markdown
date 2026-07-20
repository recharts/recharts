# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/IndexView.spec-vr.tsx >> Index Line Chart
- Location: test-vr/tests/www/IndexView.spec-vr.tsx:5:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator('internal:control=component')
  296 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 10000ms
    - verifying given screenshot expectation
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 952 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 271 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 254 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 127 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 1000ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - 3 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 1000ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 296 pixels (ratio 0.01 of all image pixels) are different.

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
      - generic [ref=e81]:
        - generic [ref=e82]:
          - generic [ref=e84]: A
          - generic [ref=e86]: B
          - generic [ref=e88]: C
          - generic [ref=e90]: D
          - generic [ref=e92]: E
          - generic [ref=e94]: F
        - generic [ref=e95]:
          - generic [ref=e97]: "0"
          - generic [ref=e99]: "250"
          - generic [ref=e101]: "500"
          - generic [ref=e103]: "750"
          - generic [ref=e105]: "1000"
  - generic [ref=e106]: "0"
```

# Test source

```ts
  1 | import * as React from 'react';
  2 | import { test, expect } from './fixtures';
  3 | import IndexLineChart from '../../../www/src/views/IndexView/IndexLineChart';
  4 | 
  5 | test('Index Line Chart', async ({ mount }) => {
  6 |   const component = await mount(<IndexLineChart />);
> 7 |   await expect(component).toHaveScreenshot();
    |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  8 | });
  9 | 
```