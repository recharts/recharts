import type { ApiDoc } from './types';

import { AreaChartAPI } from './AreaChartAPI';
import { BarChartAPI } from './BarChartAPI';
import { ComposedChartAPI } from './ComposedChartAPI';
import { LineChartAPI } from './LineChartAPI';
import { PieChartAPI } from './PieChartAPI';
import { ScatterChartAPI as ScatterChart } from './ScatterChart';
import { RadarChartAPI } from './RadarChartAPI';
import { SankeyAPI } from './SankeyAPI';
import { RadialBarChartAPI } from './RadialBarChartAPI';
import { FunnelChartAPI as FunnelChart } from './FunnelChart';
import { TreemapAPI } from './TreemapAPI';

import { AreaAPI } from './AreaAPI';
import { BarAPI } from './BarAPI';
import { LineAPI } from './LineAPI';
import { ScatterAPI } from './ScatterAPI';
import { XAxisAPI } from './XAxisAPI';
import { YAxisAPI } from './YAxisAPI';
import { ZAxisAPI } from './ZAxisAPI';
import { ReferenceLineAPI } from './ReferenceLineAPI';
import { ReferenceDotAPI } from './ReferenceDotAPI';
import { ReferenceAreaAPI } from './ReferenceAreaAPI';
import { ErrorBarAPI } from './ErrorBarAPI';
import { CartesianAxisAPI as CartesianAxis } from './CartesianAxis';
import { CartesianGridAPI as CartesianGrid } from './CartesianGrid';
import { FunnelAPI } from './FunnelAPI';

import { ResponsiveContainerAPI } from './ResponsiveContainerAPI';
import { LegendAPI } from './LegendAPI';
import { TooltipAPI } from './TooltipAPI';
import { CellAPI as Cell } from './Cell';
import { TextAPI } from './TextAPI';

import { PieAPI } from './PieAPI';
import { RadarAPI } from './RadarAPI';
import { RadialBarAPI } from './RadialBarAPI';
import { PolarAngleAxisAPI } from './PolarAngleAxisAPI';
import { PolarGridAPI } from './PolarGridAPI';
import { PolarRadiusAxisAPI } from './PolarRadiusAxisAPI';

import { CurveAPI as Curve } from './Curve';
import { PolygonAPI } from './PolygonAPI';
import { RectangleAPI } from './RectangleAPI';
import { SectorAPI } from './SectorAPI';
import { TrapezoidAPI } from './TrapezoidAPI';
import { BarStackAPI } from './BarStackAPI';
import { LabelAPI } from './LabelAPI';
import { ZIndexLayerAPI } from './ZIndexLayerAPI';
import { CustomizedAPI } from './CustomizedAPI';
import { LabelListAPI } from './LabelListAPI';
import { BrushAPI } from './BrushAPI';
import { CrossAPI } from './CrossAPI';
import { DotAPI } from './DotAPI';

export const allApiDocs: Record<string, ApiDoc> = {
  AreaChart: AreaChartAPI,
  BarChart: BarChartAPI,
  LineChart: LineChartAPI,
  ComposedChart: ComposedChartAPI,
  PieChart: PieChartAPI,
  RadarChart: RadarChartAPI,
  ScatterChart,
  RadialBarChart: RadialBarChartAPI,
  FunnelChart,
  Sankey: SankeyAPI,
  Treemap: TreemapAPI,

  Area: AreaAPI,
  Bar: BarAPI,
  BarStack: BarStackAPI,
  Line: LineAPI,
  Scatter: ScatterAPI,
  XAxis: XAxisAPI,
  YAxis: YAxisAPI,
  ZAxis: ZAxisAPI,
  Brush: BrushAPI,
  CartesianAxis,
  CartesianGrid,
  Funnel: FunnelAPI,

  ResponsiveContainer: ResponsiveContainerAPI,
  Legend: LegendAPI,
  Tooltip: TooltipAPI,
  Cell,
  Text: TextAPI,
  Label: LabelAPI,
  LabelList: LabelListAPI,
  Customized: CustomizedAPI,

  Pie: PieAPI,
  RadialBar: RadialBarAPI,
  Radar: RadarAPI,
  PolarAngleAxis: PolarAngleAxisAPI,
  PolarGrid: PolarGridAPI,
  PolarRadiusAxis: PolarRadiusAxisAPI,
  ReferenceLine: ReferenceLineAPI,
  ReferenceDot: ReferenceDotAPI,
  ReferenceArea: ReferenceAreaAPI,
  ErrorBar: ErrorBarAPI,

  Cross: CrossAPI,
  Curve,
  Dot: DotAPI,
  Polygon: PolygonAPI,
  Rectangle: RectangleAPI,
  Sector: SectorAPI,
  Trapezoid: TrapezoidAPI,

  ZIndexLayer: ZIndexLayerAPI,
};
