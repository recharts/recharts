import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { ReferenceThemeComparison } from './ReferenceThemeComponents.tsx';

test('Reference elements theme', async ({ mount }) => {
  const component = await mount(<ReferenceThemeComparison />);

  await expect(component).toHaveScreenshot();
});
