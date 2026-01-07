import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import SunburstChartExample from '../../../www/src/docs/apiExamples/SunburstChart/SunburstChartExample';

test('SunburstChartExample', async ({ mount }) => {
  const component = await mount(<SunburstChartExample />);
  await expect(component).toHaveScreenshot();
});
