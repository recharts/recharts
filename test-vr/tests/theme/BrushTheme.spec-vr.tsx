import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { BrushThemeComparison } from './BrushThemeComponents.tsx';

test('Brush theme', async ({ mount }) => {
  const component = await mount(<BrushThemeComparison />);

  await expect(component).toHaveScreenshot();
});
