import LegendEffectOpacity from './LegendEffectOpacity';
import sourceCode from './LegendEffectOpacity?raw';
import LegendStylesExample from './LegendStylesExample';
import legendStylesSourceCode from './LegendStylesExample?raw';
import { ChartExample } from '../types.ts';

export const legendExamples = {
  LegendEffectOpacity: {
    Component: LegendEffectOpacity,
    sourceCode,
    name: 'Legend with Opacity',
  },
  LegendStylesExample: {
    Component: LegendStylesExample,
    sourceCode: legendStylesSourceCode,
    name: 'Custom Legend Styles',
  },
} satisfies Record<string, ChartExample>;
