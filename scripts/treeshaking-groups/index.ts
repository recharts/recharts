/**
 * Map of tree-shaking groups.
 *
 * Each file in this folder documents a component and a list of other components
 * that are currently pulled in as side effects when the component is imported in isolation.
 * This serves as a reference and helps discover and track tree-shaking issues.
 *
 * - `component`: the component name being imported
 * - `expectedInBundle`: all component names expected to appear in the bundle (including
 *   the imported component itself and any that are currently pulled in as side effects)
 */

import { expectedInBundle as Area } from './Area';
import { expectedInBundle as AreaChart } from './AreaChart';
import { expectedInBundle as Bar } from './Bar';
import { expectedInBundle as BarChart } from './BarChart';
import { expectedInBundle as BarStack } from './BarStack';
import { expectedInBundle as Brush } from './Brush';
import { expectedInBundle as CartesianAxis } from './CartesianAxis';
import { expectedInBundle as CartesianGrid } from './CartesianGrid';
import { expectedInBundle as ComposedChart } from './ComposedChart';
import { expectedInBundle as Customized } from './Customized';
import { expectedInBundle as ErrorBar } from './ErrorBar';
import { expectedInBundle as Funnel } from './Funnel';
import { expectedInBundle as FunnelChart } from './FunnelChart';
import { expectedInBundle as Line } from './Line';
import { expectedInBundle as LineChart } from './LineChart';
import { expectedInBundle as Pie } from './Pie';
import { expectedInBundle as PieChart } from './PieChart';
import { expectedInBundle as PolarAngleAxis } from './PolarAngleAxis';
import { expectedInBundle as PolarGrid } from './PolarGrid';
import { expectedInBundle as PolarRadiusAxis } from './PolarRadiusAxis';
import { expectedInBundle as Radar } from './Radar';
import { expectedInBundle as RadarChart } from './RadarChart';
import { expectedInBundle as RadialBar } from './RadialBar';
import { expectedInBundle as RadialBarChart } from './RadialBarChart';
import { expectedInBundle as ReferenceArea } from './ReferenceArea';
import { expectedInBundle as ReferenceDot } from './ReferenceDot';
import { expectedInBundle as ReferenceLine } from './ReferenceLine';
import { expectedInBundle as Sankey } from './Sankey';
import { expectedInBundle as Scatter } from './Scatter';
import { expectedInBundle as ScatterChart } from './ScatterChart';
import { expectedInBundle as SunburstChart } from './SunburstChart';
import { expectedInBundle as Tooltip } from './Tooltip';
import { expectedInBundle as Treemap } from './Treemap';
import { expectedInBundle as XAxis } from './XAxis';
import { expectedInBundle as YAxis } from './YAxis';
import { expectedInBundle as ZAxis } from './ZAxis';

export const treeshakingGroups: Record<string, ReadonlyArray<string>> = {
  Area,
  AreaChart,
  Bar,
  BarChart,
  BarStack,
  Brush,
  CartesianAxis,
  CartesianGrid,
  ComposedChart,
  Customized,
  DefaultLegendContent: ['DefaultLegendContent', 'Surface', 'Symbols'],
  ErrorBar,
  Funnel,
  FunnelChart,
  Label: ['DefaultZIndexes', 'Global', 'Label', 'Text', 'ZIndexLayer'],
  LabelList: ['DefaultZIndexes', 'Global', 'Label', 'LabelList', 'Layer', 'Text', 'ZIndexLayer'],
  Legend: ['DefaultLegendContent', 'Legend', 'Surface', 'Symbols', 'useChartHeight', 'useChartWidth', 'useMargin'],
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Rectangle: ['Global', 'Rectangle'],
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Sankey,
  Scatter,
  ScatterChart,
  SunburstChart,
  Text: ['Global', 'Text'],
  Tooltip,
  Trapezoid: ['Global', 'Trapezoid'],
  Treemap,
  XAxis,
  YAxis,
  ZAxis,
  useXAxisDomain: ['getNiceTickValues'],
  useXAxisInverseDataSnapScale: ['getNiceTickValues'],
  useXAxisInverseScale: ['getNiceTickValues'],
  useXAxisInverseTickSnapScale: ['getNiceTickValues'],
  useXAxisTicks: ['getNiceTickValues'],
  useYAxisDomain: ['getNiceTickValues'],
  useYAxisInverseDataSnapScale: ['getNiceTickValues'],
  useYAxisInverseScale: ['getNiceTickValues'],
  useYAxisInverseTickSnapScale: ['getNiceTickValues'],
  useYAxisTicks: ['getNiceTickValues'],
  useActiveTooltipCoordinate: ['getNiceTickValues'],
  useActiveTooltipDataPoints: ['getNiceTickValues'],
  useActiveTooltipLabel: ['getNiceTickValues'],
  useCartesianScale: ['getNiceTickValues', 'useCartesianScale', 'useXAxisScale', 'useYAxisScale'],
  useIsTooltipActive: ['getNiceTickValues'],
  useXAxisScale: ['getNiceTickValues'],
  useYAxisScale: ['getNiceTickValues'],
  ZIndexLayer: ['DefaultZIndexes', 'ZIndexLayer'],
};
