import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const useChartWidthAndHeightApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.SimpleLineChart,
    name: 'useChartWidth API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useChartWidth | useChartHeight',
  },
];
