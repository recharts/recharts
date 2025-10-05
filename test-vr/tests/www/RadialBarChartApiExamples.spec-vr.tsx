import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { RadialBarChartExample } from '../../../www/src/docs/apiExamples/RadialBarChart';
import SimpleRadialBarChart from '../../../www/src/docs/exampleComponents/RadialBarChart/SimpleRadialBarChart';

test('SimpleRadialBarChart', async ({ mount }) => {
  const component = await mount(<SimpleRadialBarChart />);
  await expect(component).toHaveScreenshot();
});

test('RadialBarChartExample', async ({ mount }) => {
  const component = await mount(<RadialBarChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
