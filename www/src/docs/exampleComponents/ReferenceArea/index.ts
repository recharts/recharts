import ReferenceAreaExample from './ReferenceAreaExample';
import referenceAreaExampleSource from './ReferenceAreaExample?raw';
import { ChartExample } from '../types.ts';

export const referenceAreaExamples = {
  ReferenceAreaExample: {
    Component: ReferenceAreaExample,
    sourceCode: referenceAreaExampleSource,
    name: 'Reference Area Example',
  },
} satisfies Record<string, ChartExample>;
