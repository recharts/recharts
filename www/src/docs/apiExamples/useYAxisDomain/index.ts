import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const useYAxisDomainApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.SimpleLineChart,
    defaultTool: 'devtools',
    defaultToolTab: 'useYAxisDomain',
  },
];
