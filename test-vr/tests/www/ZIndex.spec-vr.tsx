import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import PrahaMetro from '../../../www/src/components/GuideView/ZIndex/PrahaMetro';

test('ZIndex PrahaMetro', async ({ mount }) => {
  const component = await mount(<PrahaMetro />);
  await expect(component).toHaveScreenshot();
});
