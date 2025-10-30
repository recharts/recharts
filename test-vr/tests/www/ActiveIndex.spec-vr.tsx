import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import PieChartDefaultIndex from '../../../www/src/components/GuideView/ActiveIndex/PieChartDefaultIndex';
import BarChartClickable from '../../../www/src/components/GuideView/ActiveIndex/BarChartClickable';

test('PieChartDefaultIndex', async ({ mount }) => {
  const component = await mount(<PieChartDefaultIndex isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('BarChartClickable', async ({ mount }) => {
  const component = await mount(<BarChartClickable />);
  await expect(component).toHaveScreenshot();
});
