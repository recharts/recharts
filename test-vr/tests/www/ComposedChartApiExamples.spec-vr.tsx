import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { ComposedChartExample } from '../../../www/src/docs/apiExamples/ComposedChart';

test('ComposedChartExample', async ({ mount }) => {
  const component = await mount(<ComposedChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
