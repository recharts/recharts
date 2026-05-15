import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const useXAxisDomainApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.LineChartExample,
    defaultTool: 'devtools',
    defaultToolTab: 'useXAxisDomain',
  },
];
