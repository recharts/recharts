import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import SunburstChartExample from '../../../www/src/docs/exampleComponents/SunburstChart/SunburstChartExample';
import BundleSizeSunburst from '../../../www/src/docs/exampleComponents/SunburstChart/BundleSizeSunburst';

test('SunburstChartExample', async ({ mount }) => {
  const component = await mount(<SunburstChartExample />);
  await expect(component).toHaveScreenshot();
});

test('BundleSizeSunburst', async ({ mount }) => {
  const component = await mount(<BundleSizeSunburst forceFallbackData />);
  await expect(component).toHaveScreenshot();
});
