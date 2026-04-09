import { ChartExample } from '../../exampleComponents/types';
import VennExample from './VennExample';
import vennExampleSource from './VennExample?raw';

export const vennApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: VennExample,
    sourceCode: vennExampleSource,
    name: 'Venn Example',
  },
];
