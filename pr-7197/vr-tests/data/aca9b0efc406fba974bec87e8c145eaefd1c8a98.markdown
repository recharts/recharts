# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/www/ReferenceLineApiExamples.spec-vr.tsx >> ReferenceLinePositionExample
- Location: test-vr/tests/www/ReferenceLineApiExamples.spec-vr.tsx:12:5

# Error details

```
Error: expect(locator).toHaveScreenshot(expected) failed

Locator: locator('#root').locator('internal:control=component')
  32 pixels (ratio 0.01 of all image pixels) are different.

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
  - 32 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - waiting for locator('#root').locator('internal:control=component')
    - locator resolved to <div width="100%" class="recharts-wrapper">…</div>
  - taking element screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - attempting scroll into view action
    - waiting for element to be stable
  - captured a stable screenshot
  - 32 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - application [ref=e4]:
    - generic [ref=e31]:
      - generic [ref=e32]:
        - generic [ref=e34]: Page A
        - generic [ref=e36]: Page B
        - generic [ref=e38]: Page C
      - generic [ref=e39]:
        - generic [ref=e41]: "0"
        - generic [ref=e43]: "2500"
        - generic [ref=e45]: "5000"
        - generic [ref=e47]: "7500"
        - generic [ref=e49]: "10000"
      - generic [ref=e50]: "position: start"
      - generic [ref=e51]: "position: middle"
      - generic [ref=e52]: "position: end"
  - generic [ref=e53]: "0"
```

# Test source

```ts
  1  | import * as React from 'react';
  2  | import { test, expect } from '@playwright/experimental-ct-react';
  3  | 
  4  | import ReferenceLinePositionExample from '../../../www/src/docs/apiExamples/ReferenceLine/ReferenceLinePositionExample';
  5  | import ReferenceLineExample from '../../../www/src/docs/apiExamples/ReferenceLine/ReferenceLineExample';
  6  | 
  7  | test('ReferenceLineExample', async ({ mount }) => {
  8  |   const component = await mount(<ReferenceLineExample isAnimationActive={false} />);
  9  |   await expect(component).toHaveScreenshot();
  10 | });
  11 | 
  12 | test('ReferenceLinePositionExample', async ({ mount }) => {
  13 |   const component = await mount(<ReferenceLinePositionExample isAnimationActive={false} />);
> 14 |   await expect(component).toHaveScreenshot();
     |                           ^ Error: expect(locator).toHaveScreenshot(expected) failed
  15 | });
  16 | 
```