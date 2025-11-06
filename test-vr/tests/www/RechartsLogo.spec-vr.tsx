import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { RechartsLogo } from '../../../www/src/layouts/RechartsLogo';

test('RechartsLogo', async ({ mount }) => {
  const component = await mount(<RechartsLogo />);
  await expect(component).toHaveScreenshot();
});
