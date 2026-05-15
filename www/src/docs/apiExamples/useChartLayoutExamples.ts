import { ChartExample } from '../exampleComponents/types';
import LineChartExample from '../exampleComponents/LineChart/LineChartExample';
import LineChartExampleSource from '../exampleComponents/LineChart/LineChartExample?raw';

const useChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'useChartLayout API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useChartLayout',
  },
];
export default useChartLayoutExamples;
