import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { AreaChartExample, AreaChartRangeExample } from '../../../www/src/docs/apiExamples/AreaChart';
import SimpleAreaChart from '../../../www/src/docs/exampleComponents/AreaChart/SimpleAreaChart';
import StackedAreaChart from '../../../www/src/docs/exampleComponents/AreaChart/StackedAreaChart';
import AreaChartConnectNulls from '../../../www/src/docs/exampleComponents/AreaChart/AreaChartConnectNulls';
import CardinalAreaChart from '../../../www/src/docs/exampleComponents/AreaChart/CardinalAreaChart';
import PercentAreaChart from '../../../www/src/docs/exampleComponents/AreaChart/PercentAreaChart';
import SynchronizedAreaChart from '../../../www/src/docs/exampleComponents/AreaChart/SynchronizedAreaChart';
import TinyAreaChart from '../../../www/src/docs/exampleComponents/AreaChart/TinyAreaChart';
import AreaChartFillByValue from '../../../www/src/docs/exampleComponents/AreaChart/AreaChartFillByValue';

test('AreaChartFillByValue', async ({ mount }) => {
  const component = await mount(<AreaChartFillByValue />);
  await expect(component).toHaveScreenshot();
});

test('TinyAreaChart', async ({ mount }) => {
  const component = await mount(<TinyAreaChart />);
  await expect(component).toHaveScreenshot();
});

test('SynchronizedAreaChart', async ({ mount }) => {
  const component = await mount(<SynchronizedAreaChart />);
  await expect(component).toHaveScreenshot();
});

test('PercentAreaChart', async ({ mount }) => {
  const component = await mount(<PercentAreaChart />);
  await expect(component).toHaveScreenshot();
});

test('CardinalAreaChart', async ({ mount }) => {
  const component = await mount(<CardinalAreaChart />);
  await expect(component).toHaveScreenshot();
});

test('AreaChartConnectNulls', async ({ mount }) => {
  const component = await mount(<AreaChartConnectNulls />);
  await expect(component).toHaveScreenshot();
});

test('StackedAreaChart', async ({ mount }) => {
  const component = await mount(<StackedAreaChart />);
  await expect(component).toHaveScreenshot();
});

test('SimpleAreaChart', async ({ mount }) => {
  const component = await mount(<SimpleAreaChart />);
  await expect(component).toHaveScreenshot();
});

test('AreaChartExample', async ({ mount }) => {
  const component = await mount(<AreaChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('AreaChartRangeExample', async ({ mount }) => {
  const component = await mount(<AreaChartRangeExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
