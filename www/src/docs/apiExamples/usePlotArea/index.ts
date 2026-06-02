import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const usePlotAreaApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.SimpleLineChart,
    defaultTool: 'devtools',
    defaultToolTab: 'usePlotArea',
  },
];
