import BundleSizeSunburst from './BundleSizeSunburst';
import SunburstChartExample from './SunburstChartExample';
import bundleSizeSunburstSource from './BundleSizeSunburst?raw';
import sunburstChartExampleSource from './SunburstChartExample?raw';
import { ChartExample } from '../types.ts';
import SunburstChartNavExample from './SunburstChartNavExample';

export { SunburstChartNavExample };

export const sunburstChartExamples = {
  BundleSizeSunburst: {
    Component: BundleSizeSunburst,
    sourceCode: bundleSizeSunburstSource,
    name: 'Bundle Size Sunburst',
    description: 'This chart shows actual bundle size of tree-shaken Recharts app.',
  },
  SunburstChartExample: {
    Component: SunburstChartExample,
    sourceCode: sunburstChartExampleSource,
    name: 'Sunburst Chart Example',
  },
} satisfies Record<string, ChartExample>;
