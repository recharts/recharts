import { ChartExample } from '../exampleComponents/types';
import { lineChartExamples } from '../exampleComponents/LineChart';

const useChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.SimpleLineChart,
    name: 'useChartLayout API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useChartLayout',
  },
];
export default useChartLayoutExamples;
