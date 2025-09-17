import LineChartExamples from './LineChart';
import AreaChartExamples from './AreaChart';
import BarChartExamples from './BarChart';
import ComposedChartExamples from './ComposedChart';
import ScatterChartExamples from './ScatterChart';
import PieChartExamples from './PieChart';
import RadarChartExamples from './RadarChart';
import RadialBarChartExamples from './RadialBarChart';
import TreeMapExamples from './TreeMap';
import TooltipExamples from './Tooltip';
import LegendExamples from './Legend';
import ResponsiveContainerExamples from './ResponsiveContainer';
import { AllExamples } from './types.ts';

export const allExamples: AllExamples = {
  LineChart: { examples: LineChartExamples, order: 1 },
  AreaChart: { examples: AreaChartExamples, order: 2 },
  BarChart: { examples: BarChartExamples, order: 3 },
  ComposedChart: { examples: ComposedChartExamples, order: 4 },
  ScatterChart: { examples: ScatterChartExamples, order: 5 },
  PieChart: { examples: PieChartExamples, order: 6 },
  RadarChart: { examples: RadarChartExamples, order: 7 },
  RadialBarChart: { examples: RadialBarChartExamples, order: 8 },
  TreeMap: { examples: TreeMapExamples, order: 9 },
  Tooltip: { examples: TooltipExamples, order: 10 },
  Legend: { examples: LegendExamples, order: 11 },
  ResponsiveContainer: { examples: ResponsiveContainerExamples, order: 12 },
};
