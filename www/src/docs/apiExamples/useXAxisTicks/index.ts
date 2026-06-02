import { ChartExample } from '../../exampleComponents/types.ts';
import { axisInverseTickSnapScaleExamples } from '../../exampleComponents/useXAxisInverseTickSnapScale';

export const useXAxisTicksApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...axisInverseTickSnapScaleExamples.AxisTicksSnapExample,
    defaultTool: 'devtools',
    defaultToolTab: 'useXAxisTicks',
  },
];
