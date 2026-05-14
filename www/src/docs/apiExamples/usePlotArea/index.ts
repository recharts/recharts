import { ChartExample } from '../../exampleComponents/types';
import LineChartExample from '../../exampleComponents/LineChart/LineChartExample';
import LineChartExampleSource from '../../exampleComponents/LineChart/LineChartExample?raw';

export const usePlotAreaApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'Simple Line Chart Example',
    defaultTool: 'devtools',
    defaultToolTab: 'usePlotArea',
  },
];
