import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { AreaChartExample, AreaChartRangeExample } from '../../../www/src/docs/apiExamples/AreaChart';

test('AreaChartExample', async ({ mount }) => {
  const component = await mount(<AreaChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('AreaChartRangeExample', async ({ mount }) => {
  const component = await mount(<AreaChartRangeExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
