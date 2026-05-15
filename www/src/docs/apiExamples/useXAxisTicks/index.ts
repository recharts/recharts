import { ChartExample } from '../../exampleComponents/types.ts';
import AxisTickSnapExample from '../../exampleComponents/useXAxisInverseTickSnapScale/AxisTicksSnapExample.tsx';
import AxisTickSnapExampleSource from '../../exampleComponents/useXAxisInverseTickSnapScale/AxisTicksSnapExample?raw';

export const useXAxisTicksApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: AxisTickSnapExample,
    sourceCode: AxisTickSnapExampleSource,
    name: 'Converting pixels to data values',
    defaultTool: 'devtools',
    defaultToolTab: 'useXAxisTicks',
  },
];
