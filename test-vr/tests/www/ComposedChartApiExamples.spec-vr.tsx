import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import LineBarAreaComposedChart from '../../../www/src/docs/exampleComponents/ComposedChart/LineBarAreaComposedChart';
import SameDataComposedChart from '../../../www/src/docs/exampleComponents/ComposedChart/SameDataComposedChart';
import VerticalComposedChart from '../../../www/src/docs/exampleComponents/ComposedChart/VerticalComposedChart';
import ComposedChartWithAxisLabels from '../../../www/src/docs/exampleComponents/ComposedChart/ComposedChartWithAxisLabels';
import ScatterAndLineOfBestFit from '../../../www/src/docs/exampleComponents/ComposedChart/ScatterAndLineOfBestFit';
import BandedChart from '../../../www/src/docs/exampleComponents/ComposedChart/BandedChart';
import ComposedChartNavExample from '../../../www/src/docs/exampleComponents/ComposedChart/ComposedChartNavExample';
import TargetPriceChart from '../../../www/src/docs/exampleComponents/ComposedChart/TargetPriceChart';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('TargetPriceChart', async ({ mount }) => {
  const component = await mount(<TargetPriceChart isAnimationActive={false} defaultIndex={50} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ComposedChartNavExample', async ({ mount }) => {
  const component = await mount(<ComposedChartNavExample />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BandedChart', async ({ mount }) => {
  const component = await mount(<BandedChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ScatterAndLineOfBestFit', async ({ mount }) => {
  const component = await mount(<ScatterAndLineOfBestFit />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ComposedChartWithAxisLabels', async ({ mount }) => {
  const component = await mount(<ComposedChartWithAxisLabels />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('VerticalComposedChart', async ({ mount }) => {
  const component = await mount(<VerticalComposedChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('SameDataComposedChart', async ({ mount }) => {
  const component = await mount(<SameDataComposedChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LineBarAreaComposedChart', async ({ mount }) => {
  const component = await mount(<LineBarAreaComposedChart />);
  await expect(component).toHaveScreenshot();
});
