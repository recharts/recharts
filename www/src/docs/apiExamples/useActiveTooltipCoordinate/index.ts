import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const useActiveTooltipCoordinateApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.LineChartExample,
    defaultTool: 'devtools',
    defaultToolTab: 'useActiveTooltipCoordinate',
  },
];
