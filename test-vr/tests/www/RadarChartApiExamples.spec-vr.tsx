import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { RadarChartExample } from '../../../www/src/docs/apiExamples/RadarChart';

test('RadarChartExample', async ({ mount }) => {
  const component = await mount(<RadarChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
