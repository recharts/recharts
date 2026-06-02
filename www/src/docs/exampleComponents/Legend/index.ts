import LegendEffectOpacity from './LegendEffectOpacity';
import sourceCode from './LegendEffectOpacity?raw';
import { ChartExample } from '../types.ts';

export const legendExamples = {
  LegendEffectOpacity: {
    Component: LegendEffectOpacity,
    sourceCode,
    name: 'Legend with Opacity',
  },
} satisfies Record<string, ChartExample>;
