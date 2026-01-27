import * as React from 'react';
import { test, expect } from './fixtures';
import LineChartExample from '../../../www/src/docs/apiExamples/LineChart/LineChartExample';
import SimpleLineChart from '../../../www/src/docs/exampleComponents/LineChart/SimpleLineChart';
import TinyLineChart from '../../../www/src/docs/exampleComponents/LineChart/TinyLineChart';
import DashedLineChart from '../../../www/src/docs/exampleComponents/LineChart/DashedLineChart';
import VerticalLineChart from '../../../www/src/docs/exampleComponents/LineChart/VerticalLineChart';
import BiaxialLineChart from '../../../www/src/docs/exampleComponents/LineChart/BiaxialLineChart';
import VerticalLineChartWithSpecifiedDomain from '../../../www/src/docs/exampleComponents/LineChart/VerticalLineChartWithSpecifiedDomain';
import LineChartConnectNulls from '../../../www/src/docs/exampleComponents/LineChart/LineChartConnectNulls';
import LineChartWithXAxisPadding from '../../../www/src/docs/exampleComponents/LineChart/LineChartWithXAxisPadding';
import LineChartWithReferenceLines from '../../../www/src/docs/exampleComponents/LineChart/LineChartWithReferenceLines';
import CustomizedDotLineChart from '../../../www/src/docs/exampleComponents/LineChart/CustomizedDotLineChart';
import CustomizedLabelLineChart from '../../../www/src/docs/exampleComponents/LineChart/CustomizedLabelLineChart';
import SynchronizedLineChart from '../../../www/src/docs/exampleComponents/LineChart/SynchronizedLineChart';
import HighlightAndZoomLineChart from '../../../www/src/docs/exampleComponents/LineChart/HighlightAndZoomLineChart';
import LineChartHasMultiSeries from '../../../www/src/docs/exampleComponents/LineChart/LineChartHasMultiSeries';
import LineChartAxisInterval from '../../../www/src/docs/exampleComponents/LineChart/LineChartAxisInterval';
import LineChartNegativeValuesWithReferenceLines from '../../../www/src/docs/exampleComponents/LineChart/LineChartNegativeValuesWithReferenceLines';
import LineChartNavExample from '../../../www/src/docs/exampleComponents/LineChart/LineChartNavExample';

test('LineChartNegativeValuesWithReferenceLines', async ({ mount }) => {
  const component = await mount(<LineChartNegativeValuesWithReferenceLines />);
  await expect(component).toHaveScreenshot();
});

test('LineChartAxisInterval', async ({ mount }) => {
  const component = await mount(<LineChartAxisInterval />);
  await expect(component).toHaveScreenshot();
});

test('LineChartHasMultiSeries', async ({ mount }) => {
  const component = await mount(<LineChartHasMultiSeries />);
  await expect(component).toHaveScreenshot();
});

test('HighlightAndZoomLineChart', async ({ mount }) => {
  const component = await mount(<HighlightAndZoomLineChart />);
  await expect(component).toHaveScreenshot();
});

test('SynchronizedLineChart', async ({ mount }) => {
  const component = await mount(<SynchronizedLineChart />);
  await expect(component).toHaveScreenshot();
});

test('CustomizedLabelLineChart', async ({ mount }) => {
  const component = await mount(<CustomizedLabelLineChart />);
  await expect(component).toHaveScreenshot();
});

test('CustomizedDotLineChart', async ({ mount }) => {
  const component = await mount(<CustomizedDotLineChart />);
  await expect(component).toHaveScreenshot();
});

test('LineChartWithReferenceLines', async ({ mount }) => {
  const component = await mount(<LineChartWithReferenceLines />);
  await expect(component).toHaveScreenshot();
});

test('LineChartWithXAxisPadding', async ({ mount }) => {
  const component = await mount(<LineChartWithXAxisPadding />);
  await expect(component).toHaveScreenshot();
});

test('LineChartConnectNulls', async ({ mount }) => {
  const component = await mount(<LineChartConnectNulls />);
  await expect(component).toHaveScreenshot();
});

test('VerticalLineChartWithSpecifiedDomain', async ({ mount }) => {
  const component = await mount(<VerticalLineChartWithSpecifiedDomain isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('BiaxialLineChart', async ({ mount }) => {
  const component = await mount(<BiaxialLineChart />);
  await expect(component).toHaveScreenshot();
});

test('VerticalLineChart', async ({ mount }) => {
  const component = await mount(<VerticalLineChart isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('DashedLineChart', async ({ mount }) => {
  const component = await mount(<DashedLineChart />);
  await expect(component).toHaveScreenshot();
});

test('TinyLineChart', async ({ mount }) => {
  const component = await mount(<TinyLineChart />);
  await expect(component).toHaveScreenshot();
});

test('LineChartExample', async ({ mount }) => {
  const component = await mount(<LineChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('SimpleLineChart', async ({ mount }) => {
  const component = await mount(<SimpleLineChart />);
  await expect(component).toHaveScreenshot();
});

test('LineChartNavExample', async ({ mount }) => {
  const component = await mount(<LineChartNavExample />);
  await expect(component).toHaveScreenshot();
});
