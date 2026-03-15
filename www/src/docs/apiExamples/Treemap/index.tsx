import { ChartExample } from '../../exampleComponents/types.ts';
import TreemapExample from './TreemapExample.tsx';
import TreemapExampleSource from './TreemapExample.tsx?raw';
import TreemapWithPaddingAndGaps from '../../exampleComponents/TreeMap/TreemapWithPaddingAndGaps.tsx';
import TreemapWithPaddingAndGapsSource from '../../exampleComponents/TreeMap/TreemapWithPaddingAndGaps.tsx?raw';

export const treemapApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: TreemapExample,
    sourceCode: TreemapExampleSource,
    name: 'Treemap Example',
  },
  {
    Component: TreemapWithPaddingAndGaps,
    sourceCode: TreemapWithPaddingAndGapsSource,
    name: 'Treemap with Padding and Gaps',
  },
];
