import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { RadarThemeComparison } from './RadarThemeComponents.tsx';

test('Radar theme', async ({ mount }) => {
  const component = await mount(<RadarThemeComparison />);

  await expect(component).toHaveScreenshot();
});
