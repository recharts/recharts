import ReferenceLineExample from './ReferenceLineExample';
import referenceLineExampleSource from './ReferenceLineExample?raw';
import ReferenceLinePositionExample from './ReferenceLinePositionExample';
import referenceLinePositionExampleSource from './ReferenceLinePositionExample?raw';
import { ChartExample } from '../types.ts';

export const referenceLineExamples = {
  ReferenceLineExample: {
    Component: ReferenceLineExample,
    sourceCode: referenceLineExampleSource,
    name: 'Reference Line Example',
  },
  ReferenceLinePositionExample: {
    Component: ReferenceLinePositionExample,
    sourceCode: referenceLinePositionExampleSource,
    name: 'Reference Line Position Example',
  },
} satisfies Record<string, ChartExample>;
