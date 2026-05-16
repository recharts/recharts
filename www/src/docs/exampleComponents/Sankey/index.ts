import SankeyCustomNodeExample from './SankeyCustomNodeExample';
import sankeyCustomNodeExampleSource from './SankeyCustomNodeExample?raw';
import { ChartExample } from '../types.ts';

export const sankeyExamples = {
  SankeyCustomNodeExample: {
    Component: SankeyCustomNodeExample,
    sourceCode: sankeyCustomNodeExampleSource,
    name: 'Sankey Custom Node Example',
  },
} satisfies Record<string, ChartExample>;
