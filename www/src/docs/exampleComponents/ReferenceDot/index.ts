import ReferenceDotExample from './ReferenceDotExample';
import referenceDotExampleSource from './ReferenceDotExample?raw';
import { ChartExample } from '../types.ts';

export const referenceDotExamples = {
  ReferenceDotExample: {
    Component: ReferenceDotExample,
    sourceCode: referenceDotExampleSource,
    name: 'Reference Dot Example',
  },
} satisfies Record<string, ChartExample>;
