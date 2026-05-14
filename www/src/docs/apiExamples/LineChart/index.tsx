import { ChartExample } from '../../exampleComponents/types.ts';
import LineChartExample from '../../exampleComponents/LineChart/LineChartExample.tsx';
import LineChartExampleSource from '../../exampleComponents/LineChart/LineChartExample.tsx?raw';

export const lineChartApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'Simple Line Chart Example',
  },
];
