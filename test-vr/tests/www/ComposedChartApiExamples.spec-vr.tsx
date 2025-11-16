import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import ComposedChartExample from '../../../www/src/docs/apiExamples/ComposedChart/ComposedChartExample';
import LineBarAreaComposedChart from '../../../www/src/docs/exampleComponents/ComposedChart/LineBarAreaComposedChart';
import SameDataComposedChart from '../../../www/src/docs/exampleComponents/ComposedChart/SameDataComposedChart';
import VerticalComposedChart from '../../../www/src/docs/exampleComponents/ComposedChart/VerticalComposedChart';
import ComposedChartWithAxisLabels from '../../../www/src/docs/exampleComponents/ComposedChart/ComposedChartWithAxisLabels';
import ScatterAndLineOfBestFit from '../../../www/src/docs/exampleComponents/ComposedChart/ScatterAndLineOfBestFit';
import BandedChart from '../../../www/src/docs/exampleComponents/ComposedChart/BandedChart';
import ComposedChartNavExample from '../../../www/src/docs/exampleComponents/ComposedChart/ComposedChartNavExample';
import TargetPriceChart from '../../../www/src/docs/exampleComponents/ComposedChart/TargetPriceChart';

test('TargetPriceChart', async ({ mount }) => {
  const component = await mount(<TargetPriceChart isAnimationActive={false} defaultIndex={50} />);
  await expect(component).toHaveScreenshot();
});

test('ComposedChartNavExample', async ({ mount }) => {
  const component = await mount(<ComposedChartNavExample />);
  await expect(component).toHaveScreenshot();
});

test('BandedChart', async ({ mount }) => {
  const component = await mount(<BandedChart />);
  await expect(component).toHaveScreenshot();
});

test('ScatterAndLineOfBestFit', async ({ mount }) => {
  const component = await mount(<ScatterAndLineOfBestFit />);
  await expect(component).toHaveScreenshot();
});

test('ComposedChartWithAxisLabels', async ({ mount }) => {
  const component = await mount(<ComposedChartWithAxisLabels />);
  await expect(component).toHaveScreenshot();
});

test('VerticalComposedChart', async ({ mount }) => {
  const component = await mount(<VerticalComposedChart />);
  await expect(component).toHaveScreenshot();
});

test('SameDataComposedChart', async ({ mount }) => {
  const component = await mount(<SameDataComposedChart />);
  await expect(component).toHaveScreenshot();
});

test('LineBarAreaComposedChart', async ({ mount }) => {
  const component = await mount(<LineBarAreaComposedChart />);
  await expect(component).toHaveScreenshot();
});

test('ComposedChartExample', async ({ mount }) => {
  const component = await mount(<ComposedChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
