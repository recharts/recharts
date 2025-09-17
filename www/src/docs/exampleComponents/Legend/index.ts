import LegendEffectOpacity from './LegendEffectOpacity';
import sourceCode from './LegendEffectOpacity?raw';
import { ChartExample } from '../types.ts';

const legendExamples: Record<string, ChartExample> = {
  LegendEffectOpacity: {
    Component: LegendEffectOpacity,
    sourceCode,
    name: 'Legend with Opacity',
  },
};

export default legendExamples;
