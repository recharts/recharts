import { ChartExample } from '../../exampleComponents/types.ts';
import CellPieExample from './CellPieExample.tsx';
import CellPieExampleSource from './CellPieExample.tsx?raw';
import CellBarExample from './CellBarExample.tsx';
import CellBarExampleSource from './CellBarExample.tsx?raw';

export const cellApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: CellPieExample,
    sourceCode: CellPieExampleSource,
    name: 'Cell Pie Example',
  },
  {
    Component: CellBarExample,
    sourceCode: CellBarExampleSource,
    name: 'Cell Bar Example',
  },
];
