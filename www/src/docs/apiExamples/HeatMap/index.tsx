import { ChartExample } from '../../exampleComponents/types.ts';
import HeatMapExample from './HeatMapExample.tsx';
import HeatMapExampleSource from './HeatMapExample.tsx?raw';

export const heatMapApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: HeatMapExample,
    sourceCode: HeatMapExampleSource,
    name: 'Heat Map Example',
  },
];
