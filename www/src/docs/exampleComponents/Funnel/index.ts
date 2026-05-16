import FunnelExample from './FunnelExample';
import funnelExampleSource from './FunnelExample?raw';
import { ChartExample } from '../types.ts';

export const funnelExamples = {
  FunnelExample: {
    Component: FunnelExample,
    sourceCode: funnelExampleSource,
    name: 'Funnel Example',
  },
} satisfies Record<string, ChartExample>;
