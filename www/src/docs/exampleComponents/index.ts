import { lineChartExamples, LineChartNavExample } from './LineChart';
import { areaChartExamples, AreaChartNavExample } from './AreaChart';
import { barChartExamples, BarChartNavExample } from './BarChart';
import { composedChartExamples, ComposedChartNavExample } from './ComposedChart';
import { scatterChartExamples, ScatterChartNavExample } from './ScatterChart';
import { pieChartExamples, PieChartNavExample } from './PieChart';
import { radarChartExamples, RadarChartNavExample } from './RadarChart';
import { radialBarChartExamples, RadialBarChartNavExample } from './RadialBarChart';
import { treeMapExamples, TreeMapNavExample } from './TreeMap';
import { tooltipExamples } from './Tooltip';
import { legendExamples as LegendExamples } from './Legend';
import { responsiveContainerExamples as ResponsiveContainerExamples } from './ResponsiveContainer';
import { xAxisExamples } from './XAxis';
import { AllExamples } from './types';

export const allExamples: AllExamples = {
  LineChart: { examples: lineChartExamples, order: 1, NavPreview: LineChartNavExample },
  AreaChart: { examples: areaChartExamples, order: 2, NavPreview: AreaChartNavExample },
  BarChart: { examples: barChartExamples, order: 3, NavPreview: BarChartNavExample },
  ComposedChart: { examples: composedChartExamples, order: 4, NavPreview: ComposedChartNavExample },
  ScatterChart: { examples: scatterChartExamples, order: 5, NavPreview: ScatterChartNavExample },
  PieChart: { examples: pieChartExamples, order: 6, NavPreview: PieChartNavExample },
  RadarChart: { examples: radarChartExamples, order: 7, NavPreview: RadarChartNavExample },
  RadialBarChart: { examples: radialBarChartExamples, order: 8, NavPreview: RadialBarChartNavExample },
  TreeMap: { examples: treeMapExamples, order: 9, NavPreview: TreeMapNavExample },
  Tooltip: { examples: tooltipExamples, order: 10, NavPreview: null },
  Legend: { examples: LegendExamples, order: 11, NavPreview: null },
  ResponsiveContainer: { examples: ResponsiveContainerExamples, order: 12, NavPreview: null },
  XAxis: { examples: xAxisExamples, order: 13, NavPreview: null },
};
