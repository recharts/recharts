import { ApiDoc } from './types';

import { AreaAPI } from './AreaAPI';
import { AreaChartAPI } from './AreaChartAPI';
import { BarAPI } from './BarAPI';
import { BarChartAPI } from './BarChartAPI';
import { BarStackAPI } from './BarStackAPI';
import { BrushAPI } from './BrushAPI';
import { CartesianAxisAPI } from './CartesianAxisAPI';
import { CartesianGridAPI } from './CartesianGridAPI';
import { CellAPI } from './CellAPI';
import { ComposedChartAPI } from './ComposedChartAPI';
import { CrossAPI } from './CrossAPI';
import { CurveAPI } from './CurveAPI';
import { CustomizedAPI } from './CustomizedAPI';
import { DefaultLegendContentAPI } from './DefaultLegendContentAPI';
import { DefaultTooltipContentAPI } from './DefaultTooltipContentAPI';
import { DefaultZIndexesAPI } from './DefaultZIndexesAPI';
import { DotAPI } from './DotAPI';
import { ErrorBarAPI } from './ErrorBarAPI';
import { FunnelAPI } from './FunnelAPI';
import { FunnelChartAPI } from './FunnelChartAPI';
import { GlobalAPI } from './GlobalAPI';
import { LabelAPI } from './LabelAPI';
import { LabelListAPI } from './LabelListAPI';
import { LayerAPI } from './LayerAPI';
import { LegendAPI } from './LegendAPI';
import { LineAPI } from './LineAPI';
import { LineChartAPI } from './LineChartAPI';
import { PieAPI } from './PieAPI';
import { PieChartAPI } from './PieChartAPI';
import { PolarAngleAxisAPI } from './PolarAngleAxisAPI';
import { PolarGridAPI } from './PolarGridAPI';
import { PolarRadiusAxisAPI } from './PolarRadiusAxisAPI';
import { PolygonAPI } from './PolygonAPI';
import { RadarAPI } from './RadarAPI';
import { RadarChartAPI } from './RadarChartAPI';
import { RadialBarAPI } from './RadialBarAPI';
import { RadialBarChartAPI } from './RadialBarChartAPI';
import { RectangleAPI } from './RectangleAPI';
import { ReferenceAreaAPI } from './ReferenceAreaAPI';
import { ReferenceDotAPI } from './ReferenceDotAPI';
import { ReferenceLineAPI } from './ReferenceLineAPI';
import { ResponsiveContainerAPI } from './ResponsiveContainerAPI';
import { SankeyAPI } from './SankeyAPI';
import { ScatterAPI } from './ScatterAPI';
import { ScatterChartAPI } from './ScatterChartAPI';
import { SectorAPI } from './SectorAPI';
import { SunburstChartAPI } from './SunburstChartAPI';
import { SurfaceAPI } from './SurfaceAPI';
import { SymbolsAPI } from './SymbolsAPI';
import { TextAPI } from './TextAPI';
import { TooltipAPI } from './TooltipAPI';
import { TrapezoidAPI } from './TrapezoidAPI';
import { TreemapAPI } from './TreemapAPI';
import { XAxisAPI } from './XAxisAPI';
import { YAxisAPI } from './YAxisAPI';
import { ZAxisAPI } from './ZAxisAPI';
import { ZIndexLayerAPI } from './ZIndexLayerAPI';
import { getNiceTickValuesAPI } from './getNiceTickValuesAPI';
import { useActiveTooltipCoordinateAPI } from './useActiveTooltipCoordinateAPI';
import { useActiveTooltipDataPointsAPI } from './useActiveTooltipDataPointsAPI';
import { useActiveTooltipLabelAPI } from './useActiveTooltipLabelAPI';
import { useChartHeightAPI } from './useChartHeightAPI';
import { useChartWidthAPI } from './useChartWidthAPI';
import { useIsTooltipActiveAPI } from './useIsTooltipActiveAPI';
import { useMarginAPI } from './useMarginAPI';
import { useOffsetAPI } from './useOffsetAPI';
import { usePlotAreaAPI } from './usePlotAreaAPI';
import { useXAxisDomainAPI } from './useXAxisDomainAPI';
import { useYAxisDomainAPI } from './useYAxisDomainAPI';

export const allApiDocs: Record<string, ApiDoc> = {
  Area: AreaAPI,
  AreaChart: AreaChartAPI,
  Bar: BarAPI,
  BarChart: BarChartAPI,
  BarStack: BarStackAPI,
  Brush: BrushAPI,
  CartesianAxis: CartesianAxisAPI,
  CartesianGrid: CartesianGridAPI,
  Cell: CellAPI,
  ComposedChart: ComposedChartAPI,
  Cross: CrossAPI,
  Curve: CurveAPI,
  Customized: CustomizedAPI,
  DefaultLegendContent: DefaultLegendContentAPI,
  DefaultTooltipContent: DefaultTooltipContentAPI,
  DefaultZIndexes: DefaultZIndexesAPI,
  Dot: DotAPI,
  ErrorBar: ErrorBarAPI,
  Funnel: FunnelAPI,
  FunnelChart: FunnelChartAPI,
  Global: GlobalAPI,
  Label: LabelAPI,
  LabelList: LabelListAPI,
  Layer: LayerAPI,
  Legend: LegendAPI,
  Line: LineAPI,
  LineChart: LineChartAPI,
  Pie: PieAPI,
  PieChart: PieChartAPI,
  PolarAngleAxis: PolarAngleAxisAPI,
  PolarGrid: PolarGridAPI,
  PolarRadiusAxis: PolarRadiusAxisAPI,
  Polygon: PolygonAPI,
  Radar: RadarAPI,
  RadarChart: RadarChartAPI,
  RadialBar: RadialBarAPI,
  RadialBarChart: RadialBarChartAPI,
  Rectangle: RectangleAPI,
  ReferenceArea: ReferenceAreaAPI,
  ReferenceDot: ReferenceDotAPI,
  ReferenceLine: ReferenceLineAPI,
  ResponsiveContainer: ResponsiveContainerAPI,
  Sankey: SankeyAPI,
  Scatter: ScatterAPI,
  ScatterChart: ScatterChartAPI,
  Sector: SectorAPI,
  SunburstChart: SunburstChartAPI,
  Surface: SurfaceAPI,
  Symbols: SymbolsAPI,
  Text: TextAPI,
  Tooltip: TooltipAPI,
  Trapezoid: TrapezoidAPI,
  Treemap: TreemapAPI,
  XAxis: XAxisAPI,
  YAxis: YAxisAPI,
  ZAxis: ZAxisAPI,
  ZIndexLayer: ZIndexLayerAPI,
  getNiceTickValues: getNiceTickValuesAPI,
  useActiveTooltipCoordinate: useActiveTooltipCoordinateAPI,
  useActiveTooltipDataPoints: useActiveTooltipDataPointsAPI,
  useActiveTooltipLabel: useActiveTooltipLabelAPI,
  useChartHeight: useChartHeightAPI,
  useChartWidth: useChartWidthAPI,
  useIsTooltipActive: useIsTooltipActiveAPI,
  useMargin: useMarginAPI,
  useOffset: useOffsetAPI,
  usePlotArea: usePlotAreaAPI,
  useXAxisDomain: useXAxisDomainAPI,
  useYAxisDomain: useYAxisDomainAPI,
};
