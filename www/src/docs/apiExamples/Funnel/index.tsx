import { ChartExample } from '../../exampleComponents/types.ts';
import FunnelExample from './FunnelExample.tsx';
import FunnelExampleSource from './FunnelExample.tsx?raw';

export const funnelApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: FunnelExample,
    sourceCode: FunnelExampleSource,
    name: 'Funnel Example',
  },
];
