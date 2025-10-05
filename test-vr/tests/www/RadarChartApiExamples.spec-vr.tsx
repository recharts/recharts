import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { RadarChartExample } from '../../../www/src/docs/apiExamples/RadarChart';
import SimpleRadarChart from '../../../www/src/docs/exampleComponents/RadarChart/SimpleRadarChart';
import SpecifiedDomainRadarChart from '../../../www/src/docs/exampleComponents/RadarChart/SpecifiedDomainRadarChart';

test('SpecifiedDomainRadarChart', async ({ mount }) => {
  const component = await mount(<SpecifiedDomainRadarChart />);
  await expect(component).toHaveScreenshot();
});

test('SimpleRadarChart', async ({ mount }) => {
  const component = await mount(<SimpleRadarChart />);
  await expect(component).toHaveScreenshot();
});

test('RadarChartExample', async ({ mount }) => {
  const component = await mount(<RadarChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
