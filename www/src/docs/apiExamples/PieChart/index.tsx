import { ChartExample } from '../../exampleComponents/types.ts';
import PieChartExample from './PieChartExample.tsx';
import PieChartExampleSource from './PieChartExample.tsx?raw';

export const pieChartApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: PieChartExample,
    sourceCode: PieChartExampleSource,
    name: 'Pie Chart Example',
  },
];
