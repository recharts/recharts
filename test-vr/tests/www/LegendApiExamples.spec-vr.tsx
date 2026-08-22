import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import LegendExample from '../../../www/src/docs/exampleComponents/Legend/LegendExample';
import LegendEffectOpacity from '../../../www/src/docs/exampleComponents/Legend/LegendEffectOpacity';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('LegendEffectOpacity', async ({ mount }) => {
  const component = await mount(<LegendEffectOpacity />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LegendExample', async ({ mount }) => {
  const component = await mount(<LegendExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
