import { ChartExample } from '../../exampleComponents/types.ts';
import CrosshairExample from './CrosshairExample.tsx';
import CrosshairExampleSource from './CrosshairExample.tsx?raw';

export const getChartPointerExamples: ReadonlyArray<ChartExample> = [
  {
    Component: CrosshairExample,
    sourceCode: CrosshairExampleSource,
    name: 'Render crosshair at chart pointer position',
  },
];
