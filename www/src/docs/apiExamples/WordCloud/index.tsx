import { ChartExample } from '../../exampleComponents/types.ts';
import WordCloudExample from './WordCloudExample.tsx';
import WordCloudExampleSource from './WordCloudExample.tsx?raw';

export const wordCloudApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: WordCloudExample,
    sourceCode: WordCloudExampleSource,
    name: 'Word Cloud Example',
  },
];
