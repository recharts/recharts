import JointLineScatterChart from './JointLineScatterChart';
import ThreeDimScatterChart from './ThreeDimScatterChart';
import BubbleChart from './BubbleChart';
import ScatterChartWithLabels from './ScatterChartWithLabels';
import MultipleYAxesScatterChart from './MultipleYAxesScatterChart';
import ScatterChartWithCells from './ScatterChartWithCells';
import jointLineScatterChartSource from './JointLineScatterChart?raw';
import threeDimScatterChartSource from './ThreeDimScatterChart?raw';
import bubbleChartSource from './BubbleChart?raw';
import scatterChartWithLabelsSource from './ScatterChartWithLabels?raw';
import multipleYAxesScatterChartSource from './MultipleYAxesScatterChart?raw';
import scatterChartWithCellsSource from './ScatterChartWithCells?raw';
import { ChartExample } from '../types.ts';
import ScatterChartPerformance from './ScatterChartPerformance';
import scatterChartPerformanceSource from './ScatterChartPerformance?raw';
import ScatterChartNavExample from './ScatterChartNavExample';
import ScatterChartExample from './ScatterChartExample';
import scatterChartExampleSource from './ScatterChartExample?raw';

export { ScatterChartNavExample };

export const scatterChartExamples = {
  SimpleScatterChart: {
    Component: ScatterChartExample,
    sourceCode: scatterChartExampleSource,
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
  ScatterChartPerformance: {
    Component: ScatterChartPerformance,
    sourceCode: scatterChartPerformanceSource,
    name: 'Scatter Chart with many points (performance test)',
  },
} satisfies Record<string, ChartExample>;
