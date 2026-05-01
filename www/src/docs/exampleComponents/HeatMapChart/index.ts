import SimpleHeatMapChart from './SimpleHeatMapChart';
import HeatMapChartWithLabels from './HeatMapChartWithLabels';
import simpleHeatMapChartSource from './SimpleHeatMapChart?raw';
import heatMapChartWithLabelsSource from './HeatMapChartWithLabels?raw';
import { ChartExample } from '../types.ts';
import HeatMapChartNavExample from './HeatMapChartNavExample';

export { HeatMapChartNavExample };

export const heatMapChartExamples: Record<string, ChartExample> = {
  SimpleHeatMapChart: {
    Component: SimpleHeatMapChart,
    sourceCode: simpleHeatMapChartSource,
    name: 'Simple Heat Map Chart',
  },
  HeatMapChartWithLabels: {
    Component: HeatMapChartWithLabels,
    sourceCode: heatMapChartWithLabelsSource,
    name: 'Heat Map Chart With Labels',
  },
};
