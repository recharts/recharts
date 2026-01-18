import { ChartExample } from '../../exampleComponents/types';
import LineChartExample from '../LineChart/LineChartExample';
import LineChartExampleSource from '../LineChart/LineChartExample?raw';

export const useChartWidthAndHeightApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'useChartWidth API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useChartWidth | useChartHeight',
  },
];
