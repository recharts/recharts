import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { TooltipThemeComparison } from './TooltipThemeComponents.tsx';

test('Tooltip theme', async ({ mount }) => {
  const component = await mount(<TooltipThemeComparison />);

  await expect(component).toHaveScreenshot();
});
