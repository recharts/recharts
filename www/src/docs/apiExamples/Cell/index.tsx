import { ChartExample } from '../../exampleComponents/types.ts';
import CellPieExample from '../../exampleComponents/Cell/CellPieExample.tsx';
import CellPieExampleSource from '../../exampleComponents/Cell/CellPieExample.tsx?raw';
import CellBarExample from '../../exampleComponents/Cell/CellBarExample.tsx';
import CellBarExampleSource from '../../exampleComponents/Cell/CellBarExample.tsx?raw';

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
