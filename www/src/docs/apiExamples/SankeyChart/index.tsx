import { ChartExample } from '../../exampleComponents/types.ts';
import SankeyCustomNodeExample from './SankeyCustomNodeExample.tsx';
import SankeyCustomNodeExampleSource from './SankeyCustomNodeExample.tsx?raw';

export const sankeyApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: SankeyCustomNodeExample,
    sourceCode: SankeyCustomNodeExampleSource,
    name: 'Sankey Custom Node Example',
  },
];
