import { ChartExample } from '../../exampleComponents/types.ts';
import RangedStackedBarChart from '../../exampleComponents/BarChart/RangedStackedBarChart';
import rangedStackedBarChartSource from '../../exampleComponents/BarChart/RangedStackedBarChart?raw';

export const barStackApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: RangedStackedBarChart,
    sourceCode: rangedStackedBarChartSource,
    name: 'Ranged Stacked Bar Chart',
  },
];
