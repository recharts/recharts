import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { RadialBarChartExample } from '../../../www/src/docs/apiExamples/RadialBarChart';

test('RadialBarChartExample', async ({ mount }) => {
  const component = await mount(<RadialBarChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
