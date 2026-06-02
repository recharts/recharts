import AxisTicksSnapExample from './AxisTicksSnapExample';
import axisTicksSnapExampleSource from './AxisTicksSnapExample?raw';
import { ChartExample } from '../types.ts';

export const axisInverseTickSnapScaleExamples = {
  AxisTicksSnapExample: {
    Component: AxisTicksSnapExample,
    sourceCode: axisTicksSnapExampleSource,
    name: 'Converting pixels to data values',
  },
} satisfies Record<string, ChartExample>;
