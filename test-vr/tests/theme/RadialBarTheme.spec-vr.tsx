import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { RadialBarThemeComparison } from './RadialBarThemeComponents.tsx';

test('RadialBar theme', async ({ mount }) => {
  const component = await mount(<RadialBarThemeComparison />);

  await expect(component).toHaveScreenshot();
});
