import SimpleRadialBarChart from './SimpleRadialBarChart';
import simpleRadialBarChartSource from './SimpleRadialBarChart?raw';
import { ChartExample } from '../types.ts';
import RadialBarChartNavExample from './RadialBarChartNavExample';

export { RadialBarChartNavExample };

export const radialBarChartExamples: Record<string, ChartExample> = {
  SimpleRadialBarChart: {
    Component: SimpleRadialBarChart,
    sourceCode: simpleRadialBarChartSource,
    name: 'Simple Radial Bar Chart',
  },
};
