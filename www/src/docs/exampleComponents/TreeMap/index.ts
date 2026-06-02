import SimpleTreemap from './SimpleTreemap';
import BundleSizeTreemap from './BundleSizeTreemap';
import CustomContentTreemap from './CustomContentTreemap';
import NestedTreemap from './NestedTreemap';
import TreemapWithPaddingAndGaps from './TreemapWithPaddingAndGaps';
import simpleTreemapSource from './SimpleTreemap?raw';
import bundleSizeTreemapSource from './BundleSizeTreemap?raw';
import customContentTreemapSource from './CustomContentTreemap?raw';
import nestedTreemapSource from './NestedTreemap?raw';
import treemapWithPaddingAndGapsSource from './TreemapWithPaddingAndGaps?raw';
import { ChartExample } from '../types.ts';
import TreeMapNavExample from './TreeMapNavExample';

export { TreeMapNavExample };

export const treeMapExamples = {
  BundleSizeTreemap: {
    Component: BundleSizeTreemap,
    sourceCode: bundleSizeTreemapSource,
    name: 'Bundle Size Treemap',
    description:
      'This chart shows actual bundle size of tree-shaken Recharts app. Click to individual rectangles to see nested folders and files.',
  },
  SimpleTreemap: {
    Component: SimpleTreemap,
    sourceCode: simpleTreemapSource,
    name: 'Simple Treemap',
  },
  CustomContentTreemap: {
    Component: CustomContentTreemap,
    sourceCode: customContentTreemapSource,
    name: 'Custom Content Treemap',
  },
  NestedTreemap: {
    Component: NestedTreemap,
    sourceCode: nestedTreemapSource,
    name: 'Nested Treemap',
  },
  TreemapWithPaddingAndGaps: {
    Component: TreemapWithPaddingAndGaps,
    sourceCode: treemapWithPaddingAndGapsSource,
    name: 'Treemap with Padding and Gaps',
  },
} satisfies Record<string, ChartExample>;
