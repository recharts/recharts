import { ChartExample } from '../../exampleComponents/types.ts';
import FunnelExample from '../../exampleComponents/Funnel/FunnelExample.tsx';
import FunnelExampleSource from '../../exampleComponents/Funnel/FunnelExample.tsx?raw';

export const funnelApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: FunnelExample,
    sourceCode: FunnelExampleSource,
    name: 'Funnel Example',
  },
];
