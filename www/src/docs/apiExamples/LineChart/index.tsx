import { ChartExample } from '../../exampleComponents/types.ts';
import LineChartExample from './LineChartExample.tsx';
import LineChartExampleSource from './LineChartExample.tsx?raw';

export const lineChartApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: LineChartExample,
    sourceCode: LineChartExampleSource,
    name: 'Simple Line Chart Example',
  },
];
