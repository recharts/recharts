import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import RadarChartExample from '../../../www/src/docs/apiExamples/RadarChart/RadarChartExample';
import SimpleRadarChart from '../../../www/src/docs/exampleComponents/RadarChart/SimpleRadarChart';
import SpecifiedDomainRadarChart from '../../../www/src/docs/exampleComponents/RadarChart/SpecifiedDomainRadarChart';
import RadarChartNavExample from '../../../www/src/docs/exampleComponents/RadarChart/RadarChartNavExample';

test('RadarChartNavExample', async ({ mount }) => {
  const component = await mount(<RadarChartNavExample />);
  await expect(component).toHaveScreenshot();
});

test('SpecifiedDomainRadarChart', async ({ mount }) => {
  const component = await mount(<SpecifiedDomainRadarChart />);
  await expect(component).toHaveScreenshot();
});

test('SimpleRadarChart', async ({ mount }) => {
  const component = await mount(<SimpleRadarChart />);
  await expect(component).toHaveScreenshot();
});

test('RadarChartExample', async ({ mount }) => {
  const component = await mount(<RadarChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
