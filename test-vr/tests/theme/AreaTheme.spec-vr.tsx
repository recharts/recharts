import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { AreaThemeComparison } from './AreaThemeComponents.tsx';

test('Area theme', async ({ mount }) => {
  const component = await mount(<AreaThemeComparison />);

  await expect(component).toHaveScreenshot();
});
