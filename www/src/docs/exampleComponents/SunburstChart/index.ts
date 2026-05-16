import SunburstChartExample from './SunburstChartExample';
import sunburstChartExampleSource from './SunburstChartExample?raw';
import { ChartExample } from '../types.ts';

export const sunburstChartExamples = {
  SunburstChartExample: {
    Component: SunburstChartExample,
    sourceCode: sunburstChartExampleSource,
    name: 'Sunburst Chart Example',
  },
} satisfies Record<string, ChartExample>;
