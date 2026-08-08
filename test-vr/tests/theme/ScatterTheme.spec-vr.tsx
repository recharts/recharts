import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { ScatterThemeComparison } from './ScatterThemeComponents.tsx';

test('Scatter theme', async ({ mount }) => {
  const component = await mount(<ScatterThemeComparison />);

  await expect(component).toHaveScreenshot();
});
