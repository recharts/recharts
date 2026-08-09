import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { FunnelThemeComparison } from './FunnelThemeComponents.tsx';

test('Funnel theme', async ({ mount }) => {
  const component = await mount(<FunnelThemeComparison />);

  await expect(component).toHaveScreenshot();
});
