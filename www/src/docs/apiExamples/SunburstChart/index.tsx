import { ChartExample } from '../../exampleComponents/types';
import SunburstChartExample from '../../exampleComponents/SunburstChart/SunburstChartExample';
import sunburstChartExampleSource from '../../exampleComponents/SunburstChart/SunburstChartExample?raw';

export const sunburstChartApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: SunburstChartExample,
    sourceCode: sunburstChartExampleSource,
    name: 'Sunburst Chart Example',
  },
];
