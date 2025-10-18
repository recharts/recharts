import SimpleTreemap from './SimpleTreemap';
import CustomContentTreemap from './CustomContentTreemap';
import simpleTreemapSource from './SimpleTreemap?raw';
import customContentTreemapSource from './CustomContentTreemap?raw';
import { ChartExample } from '../types.ts';
import TreeMapNavExample from './TreeMapNavExample';

export { TreeMapNavExample };

export const treeMapExamples: Record<string, ChartExample> = {
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
};
