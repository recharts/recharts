import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import LabelBarChartExample from '../../../www/src/docs/exampleComponents/Label/LabelBarChartExample';
import LabelFunnelPositions from '../../../www/src/docs/exampleComponents/Label/LabelFunnelPositions';
import LabelRadialBarPositions from '../../../www/src/docs/exampleComponents/Label/LabelRadialBarPositions';
import LabelPiePositions from '../../../www/src/docs/exampleComponents/Label/LabelPiePositions';
import LabelCartesianPositions from '../../../www/src/docs/exampleComponents/Label/LabelCartesianPositions';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('LabelCartesianPositions', async ({ mount }) => {
  const component = await mount(<LabelCartesianPositions />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LabelPiePositions', async ({ mount }) => {
  const component = await mount(<LabelPiePositions isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LabelRadialBarPositions', async ({ mount }) => {
  const component = await mount(<LabelRadialBarPositions isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LabelBarChartExample', async ({ mount }) => {
  const component = await mount(<LabelBarChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LabelFunnelPositions', async ({ mount }) => {
  const component = await mount(<LabelFunnelPositions isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
