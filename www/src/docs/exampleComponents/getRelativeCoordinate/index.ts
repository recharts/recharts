import CrosshairExample from './CrosshairExample';
import crosshairExampleSource from './CrosshairExample?raw';
import { ChartExample } from '../types.ts';

export const getRelativeCoordinateExamples = {
  CrosshairExample: {
    Component: CrosshairExample,
    sourceCode: crosshairExampleSource,
    name: 'Render crosshair at mouse position',
  },
} satisfies Record<string, ChartExample>;
