import { referenceLineDefaultProps } from '../src/cartesian/ReferenceLine';
import { textDefaultProps } from '../src/component/Text';
import { defaultAreaProps } from '../src/cartesian/Area';
import { defaultLabelProps } from '../src/component/Label';
import { defaultTreeMapProps } from '../src/chart/Treemap';
import { defaultBarProps } from '../src/cartesian/Bar';
import { defaultBrushProps } from '../src/cartesian/Brush';
import { defaultLineProps } from '../src/cartesian/Line';
import { defaultScatterProps } from '../src/cartesian/Scatter';
import { defaultCartesianGridProps } from '../src/cartesian/CartesianGrid';
import { errorBarDefaultProps } from '../src/cartesian/ErrorBar';
import { referenceAreaDefaultProps } from '../src/cartesian/ReferenceArea';
import { referenceDotDefaultProps } from '../src/cartesian/ReferenceDot';
import { xAxisDefaultProps } from '../src/cartesian/XAxis';
import { yAxisDefaultProps } from '../src/cartesian/YAxis';
import { zAxisDefaultProps } from '../src/cartesian/ZAxis';
import { legendDefaultProps } from '../src/component/Legend';
import { defaultCartesianChartProps } from '../src/chart/CartesianChart';
import { defaultFunnelProps } from '../src/cartesian/Funnel';
import { defaultTooltipProps } from '../src/component/Tooltip';
import { defaultRectangleProps } from '../src/shape/Rectangle';
import { defaultSectorProps } from '../src/shape/Sector';
import { defaultTrapezoidProps } from '../src/shape/Trapezoid';
import { defaultPieProps } from '../src/polar/Pie';
import { defaultRadarProps } from '../src/polar/Radar';
import { defaultPolarAngleAxisProps } from '../src/polar/defaultPolarAngleAxisProps';
import { defaultRadialBarProps } from '../src/polar/RadialBar';
import { defaultPolarRadiusAxisProps } from '../src/polar/defaultPolarRadiusAxisProps';
import { defaultPieChartProps } from '../src/chart/PieChart';
import { defaultRadarChartProps } from '../src/chart/RadarChart';
import { defaultRadialBarChartProps } from '../src/chart/RadialBarChart';
import { sankeyDefaultProps } from '../src/chart/Sankey';
import { defaultBarStackProps } from '../src/cartesian/BarStack';
import { defaultPolarGridProps } from '../src/polar/PolarGrid';
import { defaultResponsiveContainerProps } from '../src/component/responsiveContainerUtils';
import { defaultCurveProps } from '../src/shape/Curve';
import { defaultSunburstChartProps } from '../src/chart/SunburstChart';
import { defaultDefaultTooltipContentProps } from '../src/component/DefaultTooltipContent';
import { defaultLegendContentDefaultProps } from '../src/component/DefaultLegendContent';

type ComponentMeta = {
  defaultProps: Record<string, unknown> | undefined;
};

export const componentMetaMap: Record<string, ComponentMeta> = {
  Area: { defaultProps: defaultAreaProps },
  AreaChart: { defaultProps: defaultCartesianChartProps },
  Bar: { defaultProps: defaultBarProps },
  BarChart: { defaultProps: defaultCartesianChartProps },
  BarStack: { defaultProps: defaultBarStackProps },
  Brush: { defaultProps: defaultBrushProps },
  CartesianGrid: { defaultProps: defaultCartesianGridProps },
  ComposedChart: { defaultProps: defaultCartesianChartProps },
  Curve: { defaultProps: defaultCurveProps },
  DefaultTooltipContent: { defaultProps: defaultDefaultTooltipContentProps },
  DefaultLegendContent: { defaultProps: defaultLegendContentDefaultProps },
  ErrorBar: { defaultProps: errorBarDefaultProps },
  Funnel: { defaultProps: defaultFunnelProps },
  FunnelChart: { defaultProps: defaultCartesianChartProps },
  Label: { defaultProps: defaultLabelProps },
  LabelList: { defaultProps: defaultLabelProps },
  Legend: { defaultProps: legendDefaultProps },
  Line: { defaultProps: defaultLineProps },
  LineChart: { defaultProps: defaultCartesianChartProps },
  Pie: { defaultProps: defaultPieProps },
  PieChart: { defaultProps: defaultPieChartProps },
  PolarAngleAxis: { defaultProps: defaultPolarAngleAxisProps },
  PolarGrid: { defaultProps: defaultPolarGridProps },
  PolarRadiusAxis: { defaultProps: defaultPolarRadiusAxisProps },
  Radar: { defaultProps: defaultRadarProps },
  RadarChart: { defaultProps: defaultRadarChartProps },
  RadialBar: { defaultProps: defaultRadialBarProps },
  RadialBarChart: { defaultProps: defaultRadialBarChartProps },
  Rectangle: { defaultProps: defaultRectangleProps },
  ReferenceArea: { defaultProps: referenceAreaDefaultProps },
  ReferenceDot: { defaultProps: referenceDotDefaultProps },
  ReferenceLine: { defaultProps: referenceLineDefaultProps },
  ResponsiveContainer: { defaultProps: defaultResponsiveContainerProps },
  Sankey: { defaultProps: sankeyDefaultProps },
  Scatter: { defaultProps: defaultScatterProps },
  ScatterChart: { defaultProps: defaultCartesianChartProps },
  Sector: { defaultProps: defaultSectorProps },
  SunburstChart: { defaultProps: defaultSunburstChartProps },
  Text: { defaultProps: textDefaultProps },
  Tooltip: { defaultProps: defaultTooltipProps },
  Trapezoid: { defaultProps: defaultTrapezoidProps },
  Treemap: { defaultProps: defaultTreeMapProps },
  XAxis: { defaultProps: xAxisDefaultProps },
  YAxis: { defaultProps: yAxisDefaultProps },
  ZAxis: { defaultProps: zAxisDefaultProps },
};
