import CellPieExample from './CellPieExample';
import cellPieExampleSource from './CellPieExample?raw';
import CellBarExample from './CellBarExample';
import cellBarExampleSource from './CellBarExample?raw';
import { ChartExample } from '../types.ts';

export const cellExamples = {
  CellPieExample: {
    Component: CellPieExample,
    sourceCode: cellPieExampleSource,
    name: 'Cell Pie Example',
  },
  CellBarExample: {
    Component: CellBarExample,
    sourceCode: cellBarExampleSource,
    name: 'Cell Bar Example',
  },
} satisfies Record<string, ChartExample>;
