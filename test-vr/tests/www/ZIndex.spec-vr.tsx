import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import PrahaMetro from '../../../www/src/components/GuideView/ZIndex/PrahaMetro';
import ShadowDomExample from '../../../www/src/docs/exampleComponents/ZIndexLayer/ShadowDomExample';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('ZIndex PrahaMetro', async ({ mount }) => {
  const component = await mount(<PrahaMetro />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ShadowDomExample', async ({ mount }) => {
  const component = await mount(<ShadowDomExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
