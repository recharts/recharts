import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import PrahaMetro from '../../../www/src/components/GuideView/ZIndex/PrahaMetro';
import ShadowDomExample from '../../../www/src/docs/apiExamples/ZIndexLayer/ShadowDomExample';

test('ZIndex PrahaMetro', async ({ mount }) => {
  const component = await mount(<PrahaMetro />);
  await expect(component).toHaveScreenshot();
});

test('ShadowDomExample', async ({ mount }) => {
  const component = await mount(<ShadowDomExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
