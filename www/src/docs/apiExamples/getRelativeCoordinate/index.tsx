import { ChartExample } from '../../exampleComponents/types.ts';
import CrosshairExample from './CrosshairExample.tsx';
import CrosshairExampleSource from './CrosshairExample.tsx?raw';

export const getRelativeCoordinateExamples: ReadonlyArray<ChartExample> = [
  {
    Component: CrosshairExample,
    sourceCode: CrosshairExampleSource,
    name: 'Render crosshair at mouse position',
  },
];
