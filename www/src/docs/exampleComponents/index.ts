import { lineChartExamples } from './LineChart';
import { areaChartExamples } from './AreaChart';
import { barChartExamples } from './BarChart';
import { composedChartExamples } from './ComposedChart';
import { scatterChartExamples } from './ScatterChart';
import PieChartExamples from './PieChart';
import RadarChartExamples from './RadarChart';
import RadialBarChartExamples from './RadialBarChart';
import TreeMapExamples from './TreeMap';
import TooltipExamples from './Tooltip';
import LegendExamples from './Legend';
import ResponsiveContainerExamples from './ResponsiveContainer';
import { AllExamples } from './types.ts';

export const allExamples: AllExamples = {
  LineChart: { examples: lineChartExamples, order: 1 },
  AreaChart: { examples: areaChartExamples, order: 2 },
  BarChart: { examples: barChartExamples, order: 3 },
  ComposedChart: { examples: composedChartExamples, order: 4 },
  ScatterChart: { examples: scatterChartExamples, order: 5 },
  PieChart: { examples: PieChartExamples, order: 6 },
  RadarChart: { examples: RadarChartExamples, order: 7 },
  RadialBarChart: { examples: RadialBarChartExamples, order: 8 },
  TreeMap: { examples: TreeMapExamples, order: 9 },
  Tooltip: { examples: TooltipExamples, order: 10 },
  Legend: { examples: LegendExamples, order: 11 },
  ResponsiveContainer: { examples: ResponsiveContainerExamples, order: 12 },
};
