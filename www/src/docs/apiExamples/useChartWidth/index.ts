import { ChartExample } from '../../exampleComponents/types';
import LineChartExample from '../../exampleComponents/LineChart/LineChartExample';
import LineChartExampleSource from '../../exampleComponents/LineChart/LineChartExample?raw';

export const useChartWidthAndHeightApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'useChartWidth API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'useChartWidth | useChartHeight',
  },
];
