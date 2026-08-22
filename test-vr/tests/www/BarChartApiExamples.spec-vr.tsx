import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import BarChartRangeExample from '../../../www/src/docs/exampleComponents/BarChart/BarChartRangeExample';
import TinyBarChart from '../../../www/src/docs/exampleComponents/BarChart/TinyBarChart';
import SimpleBarChart from '../../../www/src/docs/exampleComponents/BarChart/SimpleBarChart';
import StackedBarChart from '../../../www/src/docs/exampleComponents/BarChart/StackedBarChart';
import MixBarChart from '../../../www/src/docs/exampleComponents/BarChart/MixBarChart';
import CustomShapeBarChart from '../../../www/src/docs/exampleComponents/BarChart/CustomShapeBarChart';
import PositiveAndNegativeBarChart from '../../../www/src/docs/exampleComponents/BarChart/PositiveAndNegativeBarChart';
import BrushBarChart from '../../../www/src/docs/exampleComponents/BarChart/BrushBarChart';
import BarChartWithCustomizedEvent from '../../../www/src/docs/exampleComponents/BarChart/BarChartWithCustomizedEvent';
import BarChartWithMinHeight from '../../../www/src/docs/exampleComponents/BarChart/BarChartWithMinHeight';
import BarChartStackedBySign from '../../../www/src/docs/exampleComponents/BarChart/BarChartStackedBySign';
import BiaxialBarChart from '../../../www/src/docs/exampleComponents/BarChart/BiaxialBarChart';
import BarChartHasBackground from '../../../www/src/docs/exampleComponents/BarChart/BarChartHasBackground';
import BarChartWithMultiXAxis from '../../../www/src/docs/exampleComponents/BarChart/BarChartWithMultiXAxis';
import BarChartNavExample from '../../../www/src/docs/exampleComponents/BarChart/BarChartNavExample';
import RangedStackedBarChart from '../../../www/src/docs/exampleComponents/BarChart/RangedStackedBarChart';
import PopulationPyramidExample from '../../../www/src/docs/exampleComponents/BarChart/PopulationPyramidExample';
import TimelineExample from '../../../www/src/docs/exampleComponents/BarChart/TimelineExample';
import CandlestickExample from '../../../www/src/docs/exampleComponents/BarChart/CandlestickExample';
import BoxPlotExample from '../../../www/src/docs/exampleComponents/BarChart/BoxPlotExample';
import AnimatedBarWidthExample from '../../../www/src/docs/exampleComponents/BarChart/AnimatedBarWidthExample';
import { testWithDarkTheme, testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('CandlestickExample', async ({ mount }) => {
  const component = await mount(<CandlestickExample defaultIndex="50" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BoxPlotExample', async ({ mount }) => {
  const component = await mount(<BoxPlotExample defaultIndex="2" />);
  await expect(component).toHaveScreenshot();
});

testWithDarkTheme('BoxPlotExample dark', async ({ mount }) => {
  const component = await mount(<BoxPlotExample defaultIndex="2" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('TimelineExample', async ({ mount }) => {
  /*
   * This shows a bug where defaultIndex highlights all items in the row
   * but mouse hover only highlights one item in the stack.
   */
  const component = await mount(<TimelineExample defaultIndex={3} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('PopulationPyramidExample', async ({ mount }) => {
  const component = await mount(<PopulationPyramidExample defaultIndex={4} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BarChartNavExample', async ({ mount }) => {
  const component = await mount(<BarChartNavExample />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BarChartWithMultiXAxis', async ({ mount }) => {
  const component = await mount(<BarChartWithMultiXAxis />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BarChartHasBackground', async ({ mount }) => {
  const component = await mount(<BarChartHasBackground defaultIndex={1} />);
  await expect(component).toHaveScreenshot();
});

testWithDarkTheme('BarChartHasBackground dark theme', async ({ mount }) => {
  const component = await mount(<BarChartHasBackground defaultIndex={1} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BiaxialBarChart', async ({ mount }) => {
  const component = await mount(<BiaxialBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BarChartStackedBySign', async ({ mount }) => {
  const component = await mount(<BarChartStackedBySign />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BarChartWithMinHeight', async ({ mount }) => {
  const component = await mount(<BarChartWithMinHeight />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BarChartWithCustomizedEvent', async ({ mount }) => {
  const component = await mount(<BarChartWithCustomizedEvent />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BrushBarChart', async ({ mount }) => {
  const component = await mount(<BrushBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('PositiveAndNegativeBarChart', async ({ mount }) => {
  const component = await mount(<PositiveAndNegativeBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomShapeBarChart', async ({ mount }) => {
  const component = await mount(<CustomShapeBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('MixBarChart', async ({ mount }) => {
  const component = await mount(<MixBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('StackedBarChart', async ({ mount }) => {
  const component = await mount(<StackedBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('SimpleBarChart', async ({ mount }) => {
  const component = await mount(<SimpleBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('TinyBarChart', async ({ mount }) => {
  const component = await mount(<TinyBarChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BarChartRangeExample', async ({ mount }) => {
  const component = await mount(<BarChartRangeExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('RangedStackedBarChart', async ({ mount }) => {
  const component = await mount(<RangedStackedBarChart isAnimationActive={false} defaultIndex="1" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('AnimatedBarWidthExample', async ({ mount }) => {
  const component = await mount(<AnimatedBarWidthExample isAnimationActive={false} defaultIndex="2" />);
  await expect(component).toHaveScreenshot();
});
