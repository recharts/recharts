import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const useActiveTooltipLabelApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.SimpleLineChart,
    defaultTool: 'devtools',
    defaultToolTab: 'useActiveTooltipLabel',
  },
];
