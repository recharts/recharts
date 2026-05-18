import { ChartExample } from '../types.ts';
import MultiXAxisExample, { multiXAxisDescription } from './MultiXAxisExample.tsx';
import MultiXAxisExampleSource from './MultiXAxisExample.tsx?raw';

export const xAxisExamples = {
  MultiXAxisExample: {
    name: 'Multiple X Axes',
    Component: MultiXAxisExample,
    sourceCode: MultiXAxisExampleSource,
    description: multiXAxisDescription,
  },
} satisfies Record<string, ChartExample>;
