import { ChartExample } from '../exampleComponents/types';
import LineChartExample from '../exampleComponents/LineChart/LineChartExample';
import LineChartExampleSource from '../exampleComponents/LineChart/LineChartExample?raw';

const useCartesianChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'useChartLayout API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useCartesianChartLayoutExamples',
  },
];
export default useCartesianChartLayoutExamples;
