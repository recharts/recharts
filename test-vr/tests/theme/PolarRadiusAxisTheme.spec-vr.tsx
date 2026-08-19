import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { PolarRadiusAxisThemeComparison } from './PolarRadiusAxisThemeComponents.tsx';

test('PolarRadiusAxis theme', async ({ mount }) => {
  const component = await mount(<PolarRadiusAxisThemeComparison />);

  await expect(component).toHaveScreenshot();
});
