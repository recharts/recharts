import { ChartExample } from '../exampleComponents/types';
import { radarChartExamples } from '../exampleComponents/RadarChart';

const usePolarChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    ...radarChartExamples.RadarChartExample,
    name: 'useChartLayout API Example',
    defaultTool: 'devtools',
    defaultToolTab: 'usePolarChartLayoutExamples',
  },
];
export default usePolarChartLayoutExamples;
