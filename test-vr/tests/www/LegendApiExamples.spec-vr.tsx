import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import LegendExample from '../../../www/src/docs/apiExamples/Legend/LegendExample';
import LegendEffectOpacity from '../../../www/src/docs/exampleComponents/Legend/LegendEffectOpacity';

test('LegendEffectOpacity', async ({ mount }) => {
  const component = await mount(<LegendEffectOpacity />);
  await expect(component).toHaveScreenshot();
});

test('LegendExample', async ({ mount }) => {
  const component = await mount(<LegendExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
