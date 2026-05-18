import { ChartExample } from '../exampleComponents/types';
import { radarChartExamples } from '../exampleComponents/RadarChart';

const usePolarChartLayoutExamples: ReadonlyArray<ChartExample> = [
  {
    ...radarChartExamples.SimpleRadarChart,
    name: 'usePolarChartLayout',
    defaultTool: 'devtools',
    defaultToolTab: 'usePolarChartLayout',
  },
];
export default usePolarChartLayoutExamples;
