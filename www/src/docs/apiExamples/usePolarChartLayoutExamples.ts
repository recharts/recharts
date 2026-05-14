import { ChartExample } from '../exampleComponents/types';
import RadarChartExample from '../exampleComponents/RadarChart/RadarChartExample.tsx';
import RadarChartExampleSource from '../exampleComponents/RadarChart/RadarChartExample.tsx?raw';

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
