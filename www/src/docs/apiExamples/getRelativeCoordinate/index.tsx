import { ChartExample } from '../../exampleComponents/types.ts';
import CrosshairExample from '../../exampleComponents/getRelativeCoordinate/CrosshairExample.tsx';
import CrosshairExampleSource from '../../exampleComponents/getRelativeCoordinate/CrosshairExample.tsx?raw';

export const getRelativeCoordinateExamples: ReadonlyArray<ChartExample> = [
  {
    Component: CrosshairExample,
    sourceCode: CrosshairExampleSource,
    name: 'Render crosshair at mouse position',
  },
];
