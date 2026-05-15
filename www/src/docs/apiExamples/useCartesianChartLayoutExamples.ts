import { ChartExample } from '../exampleComponents/types';
import { lineChartExamples } from '../exampleComponents/LineChart';

const useCartesianChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.LineChartExample,
    name: 'useChartLayout API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useCartesianChartLayoutExamples',
  },
];
export default useCartesianChartLayoutExamples;
