import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { PolarGridThemeComparison } from './PolarGridThemeComponents.tsx';

test('PolarGrid theme', async ({ mount }) => {
  const component = await mount(<PolarGridThemeComparison />);

  await expect(component).toHaveScreenshot();
});
