import { ChartExample } from '../../exampleComponents/types.ts';
import AxisTickSnapExample from '../useAxisInverseTickSnapScale/AxisTicksSnapExample.tsx';
import AxisTickSnapExampleSource from '../useAxisInverseTickSnapScale/AxisTicksSnapExample?raw';

export const useXAxisTicksApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: AxisTickSnapExample,
    sourceCode: AxisTickSnapExampleSource,
    name: 'Converting pixels to data values',
    defaultTool: 'devtools',
    defaultToolTab: 'useXAxisTicks',
  },
];
