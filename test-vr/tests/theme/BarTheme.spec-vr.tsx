import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { BarThemeComparison } from './BarThemeComponents.tsx';

test('Bar theme', async ({ mount }) => {
  const component = await mount(<BarThemeComparison />);

  await expect(component).toHaveScreenshot();
});
