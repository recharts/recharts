import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const useIsTooltipActiveApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.SimpleLineChart,
    defaultTool: 'devtools',
    defaultToolTab: 'useIsTooltipActive',
  },
];
