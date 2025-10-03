import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { PieChartExample } from '../../../www/src/docs/apiExamples/PieChart';

test('PieChartExample', async ({ mount }) => {
  const component = await mount(<PieChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
