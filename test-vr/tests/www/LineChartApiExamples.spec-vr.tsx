import * as React from 'react';
import { testWithLightTheme, expect, testWithDarkTheme } from './fixtures';
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

testWithLightTheme('LineChartNegativeValuesWithReferenceLines', async ({ mount }) => {
  const component = await mount(<LineChartNegativeValuesWithReferenceLines />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LineChartAxisInterval', async ({ mount }) => {
  const component = await mount(<LineChartAxisInterval />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LineChartHasMultiSeries', async ({ mount }) => {
  const component = await mount(<LineChartHasMultiSeries defaultIndex={2} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('HighlightAndZoomLineChart', async ({ mount }) => {
  const component = await mount(<HighlightAndZoomLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('SynchronizedLineChart', async ({ mount }) => {
  const component = await mount(<SynchronizedLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomizedLabelLineChart', async ({ mount }) => {
  const component = await mount(<CustomizedLabelLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithDarkTheme('CustomizedLabelLineChart dark mode', async ({ mount }) => {
  const component = await mount(<CustomizedLabelLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomizedDotLineChart', async ({ mount }) => {
  const component = await mount(<CustomizedDotLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LineChartWithReferenceLines', async ({ mount }) => {
  const component = await mount(<LineChartWithReferenceLines />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LineChartWithXAxisPadding', async ({ mount }) => {
  const component = await mount(<LineChartWithXAxisPadding />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LineChartConnectNulls', async ({ mount }) => {
  const component = await mount(<LineChartConnectNulls />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('VerticalLineChartWithSpecifiedDomain', async ({ mount }) => {
  const component = await mount(<VerticalLineChartWithSpecifiedDomain isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BiaxialLineChart', async ({ mount }) => {
  const component = await mount(<BiaxialLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('VerticalLineChart', async ({ mount }) => {
  const component = await mount(<VerticalLineChart isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('DashedLineChart', async ({ mount }) => {
  const component = await mount(<DashedLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('TinyLineChart', async ({ mount }) => {
  const component = await mount(<TinyLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('SimpleLineChart', async ({ mount }) => {
  const component = await mount(<SimpleLineChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('LineChartNavExample', async ({ mount }) => {
  const component = await mount(<LineChartNavExample />);
  await expect(component).toHaveScreenshot();
});
