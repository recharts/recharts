import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import TwoLevelPieChart from '../../../www/src/docs/exampleComponents/PieChart/TwoLevelPieChart';
import StraightAnglePieChart from '../../../www/src/docs/exampleComponents/PieChart/StraightAnglePieChart';
import CustomActiveShapePieChart from '../../../www/src/docs/exampleComponents/PieChart/CustomActiveShapePieChart';
import PieChartWithCustomizedLabel from '../../../www/src/docs/exampleComponents/PieChart/PieChartWithCustomizedLabel';
import PieChartWithPaddingAngle from '../../../www/src/docs/exampleComponents/PieChart/PieChartWithPaddingAngle';
import PieChartWithNeedle from '../../../www/src/docs/exampleComponents/PieChart/PieChartWithNeedle';
import PieChartInFlexbox from '../../../www/src/docs/exampleComponents/PieChart/PieChartInFlexbox';
import PieChartNavExample from '../../../www/src/docs/exampleComponents/PieChart/PieChartNavExample';
// import PieChartInGrid from '../../../www/src/docs/exampleComponents/PieChart/PieChartInGrid';

test('PieChartNavExample', async ({ mount }) => {
  const component = await mount(<PieChartNavExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

// The grid test is wild, it's failing in firefox in CI but passing on local. And timing out in Chrome and Safari - even though in real browser it looks just fine.
// test('PieChartInGrid', async ({ mount }) => {
//   const component = await mount(<PieChartInGrid />);
//   await expect(component).toHaveScreenshot();
// });

test('PieChartInFlexbox', async ({ mount }) => {
  const component = await mount(<PieChartInFlexbox />);
  await expect(component).toHaveScreenshot();
});

test('PieChartWithNeedle', async ({ mount }) => {
  const component = await mount(<PieChartWithNeedle isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('PieChartWithPaddingAngle', async ({ mount }) => {
  const component = await mount(<PieChartWithPaddingAngle isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('PieChartWithCustomizedLabel', async ({ mount }) => {
  const component = await mount(<PieChartWithCustomizedLabel isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('CustomActiveShapePieChart', async ({ mount }) => {
  const component = await mount(<CustomActiveShapePieChart isAnimationActive={false} defaultIndex="0" />);
  await expect(component).toHaveScreenshot();
});

test('StraightAnglePieChart', async ({ mount }) => {
  const component = await mount(<StraightAnglePieChart isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('TwoLevelPieChart', async ({ mount }) => {
  const component = await mount(<TwoLevelPieChart isAnimationActive={false} defaultIndex="1" />);
  await expect(component).toHaveScreenshot();
});
