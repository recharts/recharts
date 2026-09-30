import BundleSizeSunburst from './BundleSizeSunburst';
import SunburstChartExample from './SunburstChartExample';
import SunburstChartThemeColors from './SunburstChartThemeColors';
import bundleSizeSunburstSource from './BundleSizeSunburst?raw';
import sunburstChartExampleSource from './SunburstChartExample?raw';
import sunburstChartThemeColorsSource from './SunburstChartThemeColors?raw';
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
  SunburstChartThemeColors: {
    Component: SunburstChartThemeColors,
    sourceCode: sunburstChartThemeColorsSource,
    name: 'Sunburst Chart Theme Colors',
    description:
      'The data has no colors, so the chart takes them from the theme. Each first-ring sector gets the next theme color, and its descendants inherit it.',
  },
} satisfies Record<string, ChartExample>;
