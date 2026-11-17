import SimpleRadialBarChart from './SimpleRadialBarChart';
import simpleRadialBarChartSource from './SimpleRadialBarChart?raw';
import { ChartExample } from '../types.ts';
import RadialBarChartNavExample from './RadialBarChartNavExample';
import RadialBarChartClickToFocusLegendExample from './RadialBarChartClickToFocusLegendExample';
import RadialBarChartClickToFocusLegendExampleSource from './RadialBarChartClickToFocusLegendExample?raw';
import WindRoseChart from './WindRoseChart';
import windRoseChartSource from './WindRoseChart?raw';

export { RadialBarChartNavExample };

export const radialBarChartExamples = {
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
  WindRoseChart: {
    Component: WindRoseChart,
    sourceCode: windRoseChartSource,
    name: 'Wind Rose Chart',
    description:
      'A multi-series Nightingale chart. Each direction keeps an equal angle while stacked RadialBars grow radially with the value of each series.',
  },
} satisfies Record<string, ChartExample>;
