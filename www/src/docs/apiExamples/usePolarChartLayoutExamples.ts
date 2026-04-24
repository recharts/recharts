import { ChartExample } from '../exampleComponents/types';
import RadarChartExample from './RadarChart/RadarChartExample.tsx';
import RadarChartExampleSource from './RadarChart/RadarChartExample.tsx?raw';

const usePolarChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    Component: RadarChartExample,
    sourceCode: RadarChartExampleSource,
    name: 'useChartLayout API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'usePolarChartLayoutExamples',
  },
];
export default usePolarChartLayoutExamples;
