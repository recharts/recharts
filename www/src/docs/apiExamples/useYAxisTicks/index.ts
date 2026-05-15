import { ChartExample } from '../../exampleComponents/types.ts';
import { axisInverseTickSnapScaleExamples } from '../../exampleComponents/useXAxisInverseTickSnapScale';

export const useYAxisTicksApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...axisInverseTickSnapScaleExamples.AxisTicksSnapExample,
    defaultTool: 'devtools',
    defaultToolTab: 'useYAxisTicks',
  },
];
