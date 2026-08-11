import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { TreemapThemeComparison } from './TreemapThemeComponents.tsx';

test('Treemap theme', async ({ mount }) => {
  const component = await mount(<TreemapThemeComparison />);

  await expect(component).toHaveScreenshot();
});
