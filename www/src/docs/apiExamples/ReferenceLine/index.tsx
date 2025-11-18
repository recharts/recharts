import { ChartExample } from '../../exampleComponents/types.ts';
import ReferenceLineExample from './ReferenceLineExample.tsx';
import ReferenceLineExampleSource from './ReferenceLineExample.tsx?raw';
import ReferenceLinePositionExample from './ReferenceLinePositionExample.tsx';
import ReferenceLinePositionExampleSource from './ReferenceLinePositionExample.tsx?raw';

export const referenceLineApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: ReferenceLineExample,
    sourceCode: ReferenceLineExampleSource,
    name: 'Reference Line Example',
  },
  {
    Component: ReferenceLinePositionExample,
    sourceCode: ReferenceLinePositionExampleSource,
    name: 'Reference Line Position Example',
  },
];
