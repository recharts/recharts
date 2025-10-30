import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import LabelBarChartExample from '../../../www/src/docs/apiExamples/Label/LabelBarChartExample';
import LabelFunnelPositions from '../../../www/src/docs/apiExamples/Label/LabelFunnelPositions';
import LabelRadialBarPositions from '../../../www/src/docs/apiExamples/Label/LabelRadialBarPositions';
import LabelPiePositions from '../../../www/src/docs/apiExamples/Label/LabelPiePositions';
import LabelCartesianPositions from '../../../www/src/docs/apiExamples/Label/LabelCartesianPositions';

test('LabelCartesianPositions', async ({ mount }) => {
  const component = await mount(<LabelCartesianPositions />);
  await expect(component).toHaveScreenshot();
});

test('LabelPiePositions', async ({ mount }) => {
  const component = await mount(<LabelPiePositions isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('LabelRadialBarPositions', async ({ mount }) => {
  const component = await mount(<LabelRadialBarPositions isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('LabelBarChartExample', async ({ mount }) => {
  const component = await mount(<LabelBarChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('LabelFunnelPositions', async ({ mount }) => {
  const component = await mount(<LabelFunnelPositions isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
