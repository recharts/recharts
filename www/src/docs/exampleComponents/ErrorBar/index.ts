import ErrorBarExample from './ErrorBarExample';
import errorBarExampleSource from './ErrorBarExample?raw';
import { ChartExample } from '../types.ts';

export const errorBarExamples = {
  ErrorBarExample: {
    Component: ErrorBarExample,
    sourceCode: errorBarExampleSource,
    name: 'Error Bar Example',
  },
} satisfies Record<string, ChartExample>;
