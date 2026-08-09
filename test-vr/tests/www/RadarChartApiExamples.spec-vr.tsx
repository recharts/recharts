import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import SimpleRadarChart from '../../../www/src/docs/exampleComponents/RadarChart/SimpleRadarChart';
import SpecifiedDomainRadarChart from '../../../www/src/docs/exampleComponents/RadarChart/SpecifiedDomainRadarChart';
import RadarChartNavExample from '../../../www/src/docs/exampleComponents/RadarChart/RadarChartNavExample';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('RadarChartNavExample', async ({ mount }) => {
  const component = await mount(<RadarChartNavExample />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('SpecifiedDomainRadarChart', async ({ mount }) => {
  const component = await mount(<SpecifiedDomainRadarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('SimpleRadarChart', async ({ mount }) => {
  const component = await mount(<SimpleRadarChart />);
  await expect(component).toHaveScreenshot();
});
