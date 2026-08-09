import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { PieThemeComparison } from './PieThemeComponents.tsx';

test('Pie theme', async ({ mount }) => {
  const component = await mount(<PieThemeComparison />);

  await expect(component).toHaveScreenshot();
});
