import FunnelChartExample from './FunnelChartExample';
import funnelChartExampleSource from './FunnelChartExample?raw';
import { ChartExample } from '../types.ts';

export const funnelChartExamples = {
  FunnelChartExample: {
    Component: FunnelChartExample,
    sourceCode: funnelChartExampleSource,
    name: 'Funnel Chart Example',
  },
} satisfies Record<string, ChartExample>;
