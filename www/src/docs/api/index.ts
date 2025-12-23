import { AreaChartAPI as AreaChart } from './AreaChart';
import { BarChartAPI } from './BarChart';
import { ComposedChartAPI } from './ComposedChart';
import { LineChartAPI as LineChart } from './LineChart';
import { PieChartAPI } from './PieChartAPI';
import { ScatterChartAPI as ScatterChart } from './ScatterChart';
import { RadarChartAPI as RadarChart } from './RadarChart';
import { SankeyAPI } from './Sankey';
import { RadialBarChartAPI } from './RadialBarChart';
import { FunnelChartAPI as FunnelChart } from './FunnelChart';
import { TreemapAPI } from './Treemap';

import { BarAPI as Bar } from './Bar';
import { LineAPI } from './LineAPI';
import { ScatterAPI } from './ScatterAPI';
import { XAxisAPI } from './XAxisAPI';
import { YAxisAPI } from './YAxisAPI';
import { ZAxisAPI } from './ZAxisAPI';
import { ReferenceLineAPI as ReferenceLine } from './ReferenceLine';
import { ReferenceDotAPI as ReferenceDot } from './ReferenceDot';
import { ReferenceAreaAPI as ReferenceArea } from './ReferenceArea';
import { ErrorBarAPI } from './ErrorBarAPI';
import { BrushAPI as Brush } from './Brush';
import { CartesianAxisAPI as CartesianAxis } from './CartesianAxis';
import { CartesianGridAPI as CartesianGrid } from './CartesianGrid';
import { FunnelAPI } from './FunnelAPI';

import { ResponsiveContainerAPI as ResponsiveContainer } from './ResponsiveContainer';
import { LegendAPI } from './LegendAPI';
import { TooltipAPI as Tooltip } from './Tooltip';
import { CellAPI as Cell } from './Cell';
import { TextAPI } from './TextAPI';

import { PieAPI } from './PieAPI';
import { RadarAPI as Radar } from './Radar';
import { RadialBarAPI as RadialBar } from './RadialBar';
import { PolarAngleAxisAPI } from './PolarAngleAxisAPI';
import { PolarGridAPI } from './PolarGridAPI';
import { PolarRadiusAxisAPI } from './PolarRadiusAxisAPI';

import { CrossAPI as Cross } from './Cross';
import { CurveAPI as Curve } from './Curve';
import { DotAPI as Dot } from './Dot';
import { PolygonAPI as Polygon } from './Polygon';
import { RectangleAPI as Rectangle } from './Rectangle';
import { SectorAPI as Sector } from './Sector';
import { TrapezoidAPI as Trapezoid } from './Trapezoid';
import type { ApiDoc } from './types';
import { BarStackAPI } from './BarStackAPI';
import { LabelAPI } from './LabelAPI';
import { ZIndexLayerAPI } from './ZIndexLayerAPI';
import { AreaAPI } from './AreaAPI';
import { CustomizedAPI } from './CustomizedAPI';
import { LabelListAPI } from './LabelListAPI';

export const allApiDocs: Record<string, ApiDoc> = {
  AreaChart,
  BarChart: BarChartAPI,
  LineChart,
  ComposedChart: ComposedChartAPI,
  PieChart: PieChartAPI,
  RadarChart,
  ScatterChart,
  RadialBarChart: RadialBarChartAPI,
  FunnelChart,
  Sankey: SankeyAPI,
  Treemap: TreemapAPI,

  Area: AreaAPI,
  Bar,
  BarStack: BarStackAPI,
  Line: LineAPI,
  Scatter: ScatterAPI,
  XAxis: XAxisAPI,
  YAxis: YAxisAPI,
  ZAxis: ZAxisAPI,
  Brush,
  CartesianAxis,
  CartesianGrid,
  Funnel: FunnelAPI,

  ResponsiveContainer,
  Legend: LegendAPI,
  Tooltip,
  Cell,
  Text: TextAPI,
  Label: LabelAPI,
  LabelList: LabelListAPI,
  Customized: CustomizedAPI,

  Pie: PieAPI,
  RadialBar,
  Radar,
  PolarAngleAxis: PolarAngleAxisAPI,
  PolarGrid: PolarGridAPI,
  PolarRadiusAxis: PolarRadiusAxisAPI,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
  ErrorBar: ErrorBarAPI,

  Cross,
  Curve,
  Dot,
  Polygon,
  Rectangle,
  Sector,
  Trapezoid,

  ZIndexLayer: ZIndexLayerAPI,
};
