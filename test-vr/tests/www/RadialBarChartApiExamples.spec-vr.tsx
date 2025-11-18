import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import RadialBarChartExample from '../../../www/src/docs/apiExamples/RadialBarChart/RadialBarChartExample';
import SimpleRadialBarChart from '../../../www/src/docs/exampleComponents/RadialBarChart/SimpleRadialBarChart';
import RadialBarChartNavExample from '../../../www/src/docs/exampleComponents/RadialBarChart/RadialBarChartNavExample';

test('RadialBarChartNavExample', async ({ mount }) => {
  const component = await mount(<RadialBarChartNavExample />);
  await expect(component).toHaveScreenshot();
});

test('SimpleRadialBarChart', async ({ mount }) => {
  const component = await mount(<SimpleRadialBarChart />);
  await expect(component).toHaveScreenshot();
});

test('RadialBarChartExample', async ({ mount }) => {
  const component = await mount(<RadialBarChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
