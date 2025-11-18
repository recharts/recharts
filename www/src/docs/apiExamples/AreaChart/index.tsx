import { ChartExample } from '../../exampleComponents/types.ts';
import AreaChartExample from './AreaChartExample.tsx';
import AreaChartExampleSource from './AreaChartExample.tsx?raw';
import AreaChartRangeExample from './AreaChartRangeExample.tsx';
import AreaChartRangeExampleSource from './AreaChartRangeExample.tsx?raw';

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
