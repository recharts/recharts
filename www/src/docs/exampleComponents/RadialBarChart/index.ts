import SimpleRadialBarChart from './SimpleRadialBarChart';
import simpleRadialBarChartSource from './SimpleRadialBarChart?raw';
import { ChartExample } from '../types.ts';
import RadialBarChartNavExample from './RadialBarChartNavExample';
import RadialBarChartClickToFocusLegendExample from './RadialBarChartClickToFocusLegendExample';
import RadialBarChartClickToFocusLegendExampleSource from './RadialBarChartClickToFocusLegendExample?raw';

export { RadialBarChartNavExample };

export const radialBarChartExamples: Record<string, ChartExample> = {
  SimpleRadialBarChart: {
    Component: SimpleRadialBarChart,
    sourceCode: simpleRadialBarChartSource,
    name: 'Simple Radial Bar Chart',
  },
  RadialBarChartClickToFocusLegendExample: {
    Component: RadialBarChartClickToFocusLegendExample,
    sourceCode: RadialBarChartClickToFocusLegendExampleSource,
    name: 'Radial Bar Chart with Click to Focus Legend',
  },
};
