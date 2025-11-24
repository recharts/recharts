import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import ScatterChartExample from '../../../www/src/docs/apiExamples/ScatterChart/ScatterChartExample';
import SimpleScatterChart from '../../../www/src/docs/exampleComponents/ScatterChart/SimpleScatterChart';
import ThreeDimScatterChart from '../../../www/src/docs/exampleComponents/ScatterChart/ThreeDimScatterChart';
import JointLineScatterChart from '../../../www/src/docs/exampleComponents/ScatterChart/JointLineScatterChart';
import BubbleChart from '../../../www/src/docs/exampleComponents/ScatterChart/BubbleChart';
import ScatterChartWithLabels from '../../../www/src/docs/exampleComponents/ScatterChart/ScatterChartWithLabels';
import MultipleYAxesScatterChart from '../../../www/src/docs/exampleComponents/ScatterChart/MultipleYAxesScatterChart';
import ScatterChartWithCells from '../../../www/src/docs/exampleComponents/ScatterChart/ScatterChartWithCells';
import ScatterChartNavExample from '../../../www/src/docs/exampleComponents/ScatterChart/ScatterChartNavExample';

test('ScatterChartNavExample', async ({ mount }) => {
  const component = await mount(<ScatterChartNavExample />);
  await expect(component).toHaveScreenshot();
});

test('ScatterChartWithCells', async ({ mount }) => {
  const component = await mount(<ScatterChartWithCells />);
  await expect(component).toHaveScreenshot();
});

test('MultipleYAxesScatterChart', async ({ mount }) => {
  const component = await mount(<MultipleYAxesScatterChart />);
  await expect(component).toHaveScreenshot();
});

test('ScatterChartWithLabels', async ({ mount }) => {
  const component = await mount(<ScatterChartWithLabels defaultIndex="2" />);
  await expect(component).toHaveScreenshot();
});

test('BubbleChart', async ({ mount }) => {
  const component = await mount(<BubbleChart defaultIndex="7" />);
  await expect(component).toHaveScreenshot();
});

test('JointLineScatterChart', async ({ mount }) => {
  const component = await mount(<JointLineScatterChart defaultIndex="2" />);
  await expect(component).toHaveScreenshot();
});

test('ThreeDimScatterChart', async ({ mount }) => {
  const component = await mount(<ThreeDimScatterChart defaultIndex="3" />);
  await expect(component).toHaveScreenshot();
});

test('SimpleScatterChart', async ({ mount }) => {
  const component = await mount(<SimpleScatterChart defaultIndex="1" />);
  await expect(component).toHaveScreenshot();
});

test('ScatterChartExample', async ({ mount }) => {
  const component = await mount(<ScatterChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
