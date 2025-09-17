import JointLineScatterChart from './JointLineScatterChart';
import SimpleScatterChart from './SimpleScatterChart';
import ThreeDimScatterChart from './ThreeDimScatterChart';
import BubbleChart from './BubbleChart';
import ScatterChartWithLabels from './ScatterChartWithLabels';
import MultipleYAxesScatterChart from './MultipleYAxesScatterChart';
import ScatterChartWithCells from './ScatterChartWithCells';
import jointLineScatterChartSource from './JointLineScatterChart?raw';
import simpleScatterChartSource from './SimpleScatterChart?raw';
import threeDimScatterChartSource from './ThreeDimScatterChart?raw';
import bubbleChartSource from './BubbleChart?raw';
import scatterChartWithLabelsSource from './ScatterChartWithLabels?raw';
import multipleYAxesScatterChartSource from './MultipleYAxesScatterChart?raw';
import scatterChartWithCellsSource from './ScatterChartWithCells?raw';
import { ChartExample } from '../types.ts';

const scatterChartExamples: Record<string, ChartExample> = {
  SimpleScatterChart: {
    Component: SimpleScatterChart,
    sourceCode: simpleScatterChartSource,
    name: 'Simple Scatter Chart',
  },
  ThreeDimScatterChart: {
    Component: ThreeDimScatterChart,
    sourceCode: threeDimScatterChartSource,
    name: 'Three Dim Scatter Chart',
  },
  JointLineScatterChart: {
    Component: JointLineScatterChart,
    sourceCode: jointLineScatterChartSource,
    name: 'Joint Line Scatter Chart',
  },
  BubbleChart: {
    Component: BubbleChart,
    sourceCode: bubbleChartSource,
    name: 'Bubble Chart',
  },
  ScatterChartWithLabels: {
    Component: ScatterChartWithLabels,
    sourceCode: scatterChartWithLabelsSource,
    name: 'Scatter Chart With Labels',
  },
  MultipleYAxesScatterChart: {
    Component: MultipleYAxesScatterChart,
    sourceCode: multipleYAxesScatterChartSource,
    name: 'Multiple Y Axes Scatter Chart',
  },
  ScatterChartWithCells: {
    Component: ScatterChartWithCells,
    sourceCode: scatterChartWithCellsSource,
    name: 'Scatter Chart With Cells',
  },
};

export default scatterChartExamples;
