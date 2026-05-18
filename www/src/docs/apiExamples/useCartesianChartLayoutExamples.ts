import { ChartExample } from '../exampleComponents/types';
import { lineChartExamples } from '../exampleComponents/LineChart';

const useCartesianChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.SimpleLineChart,
    name: 'useCartesianChartLayout API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useCartesianChartLayout',
  },
];
export default useCartesianChartLayoutExamples;
