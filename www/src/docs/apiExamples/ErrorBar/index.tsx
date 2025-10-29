import { ChartExample } from '../../exampleComponents/types.ts';
import ErrorBarExample from './ErrorBarExample.tsx';
import ErrorBarExampleSource from './ErrorBarExample.tsx?raw';

export const errorBarApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: ErrorBarExample,
    sourceCode: ErrorBarExampleSource,
    name: 'Error Bar Example',
  },
];
