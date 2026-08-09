import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import SimpleRadialBarChart from '../../../www/src/docs/exampleComponents/RadialBarChart/SimpleRadialBarChart';
import RadialBarChartNavExample from '../../../www/src/docs/exampleComponents/RadialBarChart/RadialBarChartNavExample';
import RadialBarChartClickToFocusLegendExample from '../../../www/src/docs/exampleComponents/RadialBarChart/RadialBarChartClickToFocusLegendExample';
import { testWithDarkTheme, testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('RadialBarChartNavExample', async ({ mount }) => {
  const component = await mount(<RadialBarChartNavExample />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('SimpleRadialBarChart', async ({ mount }) => {
  const component = await mount(<SimpleRadialBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithDarkTheme('SimpleRadialBarChart dark theme', async ({ mount }) => {
  const component = await mount(<SimpleRadialBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('RadialBarChartClickToFocusLegendExample', async ({ mount }) => {
  const component = await mount(<RadialBarChartClickToFocusLegendExample />);
  await expect(component).toHaveScreenshot();
});
