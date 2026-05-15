import { ChartExample } from '../../exampleComponents/types.ts';
import ErrorBarExample from '../../exampleComponents/ErrorBar/ErrorBarExample.tsx';
import ErrorBarExampleSource from '../../exampleComponents/ErrorBar/ErrorBarExample.tsx?raw';

export const errorBarApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: ErrorBarExample,
    sourceCode: ErrorBarExampleSource,
    name: 'Error Bar Example',
  },
];
