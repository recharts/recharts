import { ChartExample } from '../types.ts';
import MultiXAxisExample, { multiXAxisDescription } from './MultiXAxisExample.tsx';
import MultiXAxisExampleSource from './MultiXAxisExample.tsx?raw';
import XAxisAutoHeightExample, { xAxisAutoHeightDescription } from './XAxisAutoHeightExample.tsx';
import XAxisAutoHeightExampleSource from './XAxisAutoHeightExample.tsx?raw';

export const xAxisExamples = {
  MultiXAxisExample: {
    name: 'Multiple X Axes',
    Component: MultiXAxisExample,
    sourceCode: MultiXAxisExampleSource,
    description: multiXAxisDescription,
  },
  XAxisAutoHeightExample: {
    name: 'Automatic X Axis Height',
    Component: XAxisAutoHeightExample,
    sourceCode: XAxisAutoHeightExampleSource,
    description: xAxisAutoHeightDescription,
  },
} satisfies Record<string, ChartExample>;
