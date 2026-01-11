import type { ApiDoc } from './types';

import { AreaChartAPI } from './AreaChartAPI';
import { BarChartAPI } from './BarChartAPI';
import { ComposedChartAPI } from './ComposedChartAPI';
import { FunnelChartAPI } from './FunnelChartAPI';
import { LineChartAPI } from './LineChartAPI';
import { PieChartAPI } from './PieChartAPI';
import { ScatterChartAPI } from './ScatterChartAPI';
import { RadarChartAPI } from './RadarChartAPI';
import { SankeyAPI } from './SankeyAPI';
import { RadialBarChartAPI } from './RadialBarChartAPI';
import { TreemapAPI } from './TreemapAPI';
import { SunburstChartAPI } from './SunburstChartAPI';

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
import { CartesianAxisAPI } from './CartesianAxisAPI';
import { CartesianGridAPI } from './CartesianGridAPI';
import { FunnelAPI } from './FunnelAPI';

import { ResponsiveContainerAPI } from './ResponsiveContainerAPI';
import { LegendAPI } from './LegendAPI';
import { TooltipAPI } from './TooltipAPI';
import { CellAPI } from './CellAPI';
import { TextAPI } from './TextAPI';

import { PieAPI } from './PieAPI';
import { RadarAPI } from './RadarAPI';
import { RadialBarAPI } from './RadialBarAPI';
import { PolarAngleAxisAPI } from './PolarAngleAxisAPI';
import { PolarGridAPI } from './PolarGridAPI';
import { PolarRadiusAxisAPI } from './PolarRadiusAxisAPI';

import { CurveAPI } from './CurveAPI';
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
import { DefaultLegendContentAPI } from './DefaultLegendContentAPI';
import { DefaultTooltipContentAPI } from './DefaultTooltipContentAPI';
import { LayerAPI } from './LayerAPI';
import { SurfaceAPI } from './SurfaceAPI';
import { SymbolsAPI } from './SymbolsAPI';
import { DefaultZIndexesAPI } from './DefaultZIndexesAPI';
import { useActiveTooltipDataPointsAPI } from './useActiveTooltipDataPointsAPI';
import { useActiveTooltipLabelAPI } from './useActiveTooltipLabelAPI';
import { useMarginAPI } from './useMarginAPI';
import { useOffsetAPI } from './useOffsetAPI';
import { usePlotAreaAPI } from './usePlotAreaAPI';
import { useChartWidthAPI } from './useChartWidthAPI';
import { useChartHeightAPI } from './useChartHeightAPI';
import { getNiceTickValuesAPI } from './getNiceTickValuesAPI';
import { GlobalAPI } from './GlobalAPI';
import { useXAxisDomainAPI } from './useXAxisDomainAPI';
import { useYAxisDomainAPI } from './useYAxisDomainAPI';

export const allApiDocs: Record<string, ApiDoc> = {
  AreaChart: AreaChartAPI,
  BarChart: BarChartAPI,
  LineChart: LineChartAPI,
  ComposedChart: ComposedChartAPI,
  PieChart: PieChartAPI,
  RadarChart: RadarChartAPI,
  ScatterChart: ScatterChartAPI,
  RadialBarChart: RadialBarChartAPI,
  FunnelChart: FunnelChartAPI,
  Sankey: SankeyAPI,
  Treemap: TreemapAPI,
  SunburstChart: SunburstChartAPI,

  Area: AreaAPI,
  Bar: BarAPI,
  BarStack: BarStackAPI,
  Line: LineAPI,
  Scatter: ScatterAPI,
  XAxis: XAxisAPI,
  useXAxisDomain: useXAxisDomainAPI,
  YAxis: YAxisAPI,
  useYAxisDomain: useYAxisDomainAPI,
  ZAxis: ZAxisAPI,
  Brush: BrushAPI,
  CartesianAxis: CartesianAxisAPI,
  CartesianGrid: CartesianGridAPI,
  Funnel: FunnelAPI,

  ResponsiveContainer: ResponsiveContainerAPI,
  Legend: LegendAPI,
  DefaultLegendContent: DefaultLegendContentAPI,
  Tooltip: TooltipAPI,
  useActiveTooltipDataPoints: useActiveTooltipDataPointsAPI,
  useActiveTooltipLabel: useActiveTooltipLabelAPI,
  DefaultTooltipContent: DefaultTooltipContentAPI,
  Cell: CellAPI,
  Text: TextAPI,
  Label: LabelAPI,
  LabelList: LabelListAPI,
  Customized: CustomizedAPI,
  Layer: LayerAPI,
  Surface: SurfaceAPI,

  useMargin: useMarginAPI,
  useOffset: useOffsetAPI,
  usePlotArea: usePlotAreaAPI,
  useChartWidth: useChartWidthAPI,
  useChartHeight: useChartHeightAPI,
  getNiceTickValues: getNiceTickValuesAPI,
  Global: GlobalAPI,

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
  Curve: CurveAPI,
  Dot: DotAPI,
  Polygon: PolygonAPI,
  Rectangle: RectangleAPI,
  Sector: SectorAPI,
  Trapezoid: TrapezoidAPI,
  Symbols: SymbolsAPI,

  ZIndexLayer: ZIndexLayerAPI,
  DefaultZIndexes: DefaultZIndexesAPI,
};
