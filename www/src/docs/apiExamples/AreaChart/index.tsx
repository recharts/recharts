import { ChartExample } from '../../exampleComponents/types.ts';
import AreaChartExample from '../../exampleComponents/AreaChart/AreaChartExample.tsx';
import AreaChartExampleSource from '../../exampleComponents/AreaChart/AreaChartExample.tsx?raw';
import AreaChartRangeExample from '../../exampleComponents/AreaChart/AreaChartRangeExample.tsx';
import AreaChartRangeExampleSource from '../../exampleComponents/AreaChart/AreaChartRangeExample.tsx?raw';

export const areaChartApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: AreaChartExample,
    sourceCode: AreaChartExampleSource,
    name: 'Simple Area Chart Example',
  },
  {
    Component: AreaChartRangeExample,
    sourceCode: AreaChartRangeExampleSource,
    name: 'Ranged Area Chart Example',
  },
];
