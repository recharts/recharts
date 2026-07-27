import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { LineThemeComparison } from './LineThemeComponents.tsx';

test('Line theme', async ({ mount }) => {
  const component = await mount(<LineThemeComparison />);

  await expect(component).toHaveScreenshot();
});
