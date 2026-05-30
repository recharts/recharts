---
name: vr-test
description: Create visual regression tests
---

# What is a visual regression test?

VR test is a playwright test that renders a component and compares the rendered output to a baseline snapshot.

# Writing a new test

To write a new test, create a new file in the `test-vr/tests` directory. The file must end with `.spec-vr.tsx` to be picked up by the test runner.

Here is an example of a simple test:

```tsx
import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import PieChartDefaultIndex from '../../../www/src/components/GuideView/ActiveIndex/PieChartDefaultIndex';

test('PieChartDefaultIndex', async ({ mount }) => {
  const component = await mount(<PieChartDefaultIndex isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
```

## Playwright CT specialty

Playwright component testing (CT) allows us to render React components in isolation and test them. The `mount` function is used to render the component, and the `expect(component).toHaveScreenshot()` assertion compares the rendered output to a baseline screenshot.

There is one specialty that is different from other testing frameworks. Playwright CT does not support components declared inside the test file. Instead it requires us to define the component in a separate file and import it.

Example:
```tsx
// file: test-vr/tests/Legend.spec-vr.tsx
import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import LegendTestComponent from './LegendTestComponent';

test('correct test: this works', async ({ mount }) => {
  const component = await mount(<LegendTestComponent />);
  await expect(component).toHaveScreenshot();
});

function LegendTestComponent2() {
  return (
    <div>
      <p>This will not work because the component is declared inside the test file</p>
    </div>
  );
}

test('incorrect test: this does not work and throws when running the test', async ({ mount }) => {
  const component = await mount(<LegendTestComponent2 />);
  await expect(component).toHaveScreenshot();
});
```

This is described in https://playwright.dev/docs/test-components#test-stories in case you want to read details.

# Running the test

To run the full suite of VR tests, run:

```sh
npm run test-vr
```

Note that this may take 20+ minutes to run (because Recharts has almost 1000 VR tests). This is good for final verification but usually you will want to run a single file instead:

```sh
npm run test-vr -- --grep=Legend
```
Which will run only tests with "Legend" in their name. You can also specify the path to a specific test file:

```sh
npm run test-vr -- test-vr/tests/Legend.spec-vr.tsx
```

This will compare the screenshots. If there is no screenshot, it will generate three new screenshots. Why three? Because we run the same on three browsers.

These screenshots must be committed to the repository together with the test. Our CI only verifies the tests, but does not generate or update snapshots. So if you are adding a new test, you must add the generated screenshots to the commit. If you are updating an existing test, you must replace the old screenshots with the new ones in the commit.

# Updating screenshots

If you have made changes to the source code, or changes to the VR test itself that affect the rendered output, you will need to update the baseline screenshots. To do this, run:

```sh
npm run test-vr:update
```

This updates all screenshots for all tests. If you want to update screenshots for a specific test, you can use the same grep or file path options as when running the tests:

```sh
npm run test-vr:update -- --grep=Legend
```

```sh
npm run test-vr:update -- test-vr/tests/Legend.spec-vr.tsx
```

Screenshots generation depends on docker. If docker is not available in your environment, you will not be able to run the tests or update screenshots. If that happens, notify the user and move on.

# More instructions

If you need more instructions please see `test-vr/README.md`
