import DataSnapExample from './DataSnapExample';
import dataSnapExampleSource from './DataSnapExample?raw';
import { ChartExample } from '../types.ts';

export const axisInverseDataSnapScaleExamples = {
  DataSnapExample: {
    Component: DataSnapExample,
    sourceCode: dataSnapExampleSource,
    name: 'Converting pixels to data values',
  },
} satisfies Record<string, ChartExample>;
