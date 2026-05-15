import LegendEffectOpacity from './LegendEffectOpacity';
import sourceCode from './LegendEffectOpacity?raw';
import { ChartExample } from '../types.ts';
import LegendExample from './LegendExample';
import legendExampleSource from './LegendExample?raw';

export const legendExamples: Record<string, ChartExample> = {
  LegendEffectOpacity: {
    Component: LegendEffectOpacity,
    sourceCode,
    name: 'Legend with Opacity',
  },
  LegendExample: {
    Component: LegendExample,
    sourceCode: legendExampleSource,
    name: 'Legend Example',
  },
};
