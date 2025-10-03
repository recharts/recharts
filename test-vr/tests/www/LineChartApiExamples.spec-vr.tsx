import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { LineChartExample } from '../../../www/src/docs/apiExamples/LineChart';

test('LineChartExample', async ({ mount }) => {
  const component = await mount(<LineChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
