import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const useMarginApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.LineChartExample,
    defaultTool: 'devtools',
    defaultToolTab: 'useMargin',
  },
];
