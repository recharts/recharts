import { ChartExample } from '../../exampleComponents/types.ts';
import ReferenceLineExample from '../../exampleComponents/ReferenceLine/ReferenceLineExample.tsx';
import ReferenceLineExampleSource from '../../exampleComponents/ReferenceLine/ReferenceLineExample.tsx?raw';
import ReferenceLinePositionExample from '../../exampleComponents/ReferenceLine/ReferenceLinePositionExample.tsx';
import ReferenceLinePositionExampleSource from '../../exampleComponents/ReferenceLine/ReferenceLinePositionExample.tsx?raw';

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
