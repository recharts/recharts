import { ChartExample } from '../../exampleComponents/types';
import LineChartExample from '../LineChart/LineChartExample';
import LineChartExampleSource from '../LineChart/LineChartExample?raw';

export const useActiveTooltipCoordinateApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'Simple Line Chart Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useActiveTooltipCoordinate',
  },
];
