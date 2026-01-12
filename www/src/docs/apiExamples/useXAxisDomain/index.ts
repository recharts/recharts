import { ChartExample } from '../../exampleComponents/types';
import LineChartExample from '../LineChart/LineChartExample';
import LineChartExampleSource from '../LineChart/LineChartExample?raw';

export const useXAxisDomainApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'Simple Line Chart Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useXAxisDomain',
  },
];
