import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { BarChartExample, BarChartRangeExample } from '../../../www/src/docs/apiExamples/BarChart';

test('BarChartExample', async ({ mount }) => {
  const component = await mount(<BarChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('BarChartRangeExample', async ({ mount }) => {
  const component = await mount(<BarChartRangeExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
