import { ChartExample } from '../exampleComponents/types';
import LineChartExample from './LineChart/LineChartExample';
import LineChartExampleSource from './LineChart/LineChartExample?raw';

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
