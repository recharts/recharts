import { ChartExample } from '../../exampleComponents/types.ts';
import WaterfallExample from './WaterfallExample.tsx';
import WaterfallExampleSource from './WaterfallExample.tsx?raw';

export const computeWaterfallDataApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: WaterfallExample,
    sourceCode: WaterfallExampleSource,
    name: 'Waterfall Chart Example',
  },
];
