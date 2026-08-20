import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { PolarAngleAxisThemeComparison } from './PolarAngleAxisThemeComponents.tsx';

test('PolarAngleAxis theme', async ({ mount }) => {
  const component = await mount(<PolarAngleAxisThemeComparison />);

  await expect(component).toHaveScreenshot();
});
