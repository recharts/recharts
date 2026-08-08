import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import { testWithLightTheme } from './fixtures.tsx';

import LabelListChartExample from '../../../www/src/docs/exampleComponents/LabelList/LabelListChartExample';

testWithLightTheme('LabelListChartExample', async ({ mount }) => {
  const component = await mount(<LabelListChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
