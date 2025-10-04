import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { ScatterChartExample } from '../../../www/src/docs/apiExamples/ScatterChart';

test('ScatterChartExample', async ({ mount }) => {
  const component = await mount(<ScatterChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
