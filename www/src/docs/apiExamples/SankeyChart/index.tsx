import { ChartExample } from '../../exampleComponents/types.ts';
import SankeyCustomNodeExample from '../../exampleComponents/Sankey/SankeyCustomNodeExample.tsx';
import SankeyCustomNodeExampleSource from '../../exampleComponents/Sankey/SankeyCustomNodeExample.tsx?raw';

export const sankeyApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: SankeyCustomNodeExample,
    sourceCode: SankeyCustomNodeExampleSource,
    name: 'Sankey Custom Node Example',
  },
];
