import { ChartExample } from '../../exampleComponents/types.ts';
import BarChartExample from './BarChartExample.tsx';
import BarChartExampleSource from './BarChartExample.tsx?raw';
import BarChartRangeExample from './BarChartRangeExample.tsx';
import BarChartRangeExampleSource from './BarChartRangeExample.tsx?raw';

export const barChartApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: BarChartExample,
    sourceCode: BarChartExampleSource,
    name: 'Simple Bar Chart Example',
  },
  {
    Component: BarChartRangeExample,
    sourceCode: BarChartRangeExampleSource,
    name: 'Ranged Bar Chart Example',
  },
];
