import { ChartExample } from '../../exampleComponents/types.ts';
import BarChartExample from '../../exampleComponents/BarChart/BarChartExample.tsx';
import BarChartExampleSource from '../../exampleComponents/BarChart/BarChartExample.tsx?raw';
import BarChartRangeExample from '../../exampleComponents/BarChart/BarChartRangeExample.tsx';
import BarChartRangeExampleSource from '../../exampleComponents/BarChart/BarChartRangeExample.tsx?raw';

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
