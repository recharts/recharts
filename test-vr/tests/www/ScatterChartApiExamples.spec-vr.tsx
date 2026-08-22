import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import ScatterChartExample from '../../../www/src/docs/exampleComponents/ScatterChart/ScatterChartExample';
import ThreeDimScatterChart from '../../../www/src/docs/exampleComponents/ScatterChart/ThreeDimScatterChart';
import JointLineScatterChart from '../../../www/src/docs/exampleComponents/ScatterChart/JointLineScatterChart';
import BubbleChart from '../../../www/src/docs/exampleComponents/ScatterChart/BubbleChart';
import ScatterChartWithLabels from '../../../www/src/docs/exampleComponents/ScatterChart/ScatterChartWithLabels';
import MultipleYAxesScatterChart from '../../../www/src/docs/exampleComponents/ScatterChart/MultipleYAxesScatterChart';
import ScatterChartWithCells from '../../../www/src/docs/exampleComponents/ScatterChart/ScatterChartWithCells';
import ScatterChartNavExample from '../../../www/src/docs/exampleComponents/ScatterChart/ScatterChartNavExample';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('ScatterChartNavExample', async ({ mount }) => {
  const component = await mount(<ScatterChartNavExample />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ScatterChartWithCells', async ({ mount }) => {
  const component = await mount(<ScatterChartWithCells />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('MultipleYAxesScatterChart', async ({ mount }) => {
  const component = await mount(<MultipleYAxesScatterChart />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ScatterChartWithLabels', async ({ mount }) => {
  const component = await mount(<ScatterChartWithLabels defaultIndex="2" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BubbleChart', async ({ mount }) => {
  const component = await mount(<BubbleChart defaultIndex="7" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('JointLineScatterChart', async ({ mount }) => {
  const component = await mount(<JointLineScatterChart defaultIndex="2" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ThreeDimScatterChart', async ({ mount }) => {
  const component = await mount(<ThreeDimScatterChart defaultIndex="3" />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ScatterChartExample', async ({ mount }) => {
  const component = await mount(<ScatterChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
