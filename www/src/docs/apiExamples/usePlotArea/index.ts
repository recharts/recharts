import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const usePlotAreaApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.LineChartExample,
    defaultTool: 'devtools',
    defaultToolTab: 'usePlotArea',
  },
];
