import { ChartExample } from '../../exampleComponents/types';
import { lineChartExamples } from '../../exampleComponents/LineChart';

export const useActiveTooltipCoordinateApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...lineChartExamples.SimpleLineChart,
    defaultTool: 'devtools',
    defaultToolTab: 'useActiveTooltipCoordinate',
  },
];
