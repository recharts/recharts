import { AreaChartAPI as AreaChart } from './AreaChart';
import { BarChartAPI } from './BarChart';
import { ComposedChartAPI } from './ComposedChart';
import { LineChartAPI as LineChart } from './LineChart';
import { PieChartAPI as PieChart } from './PieChart';
import { ScatterChartAPI as ScatterChart } from './ScatterChart';
import { RadarChartAPI as RadarChart } from './RadarChart';
import { SankeyAPI } from './Sankey';
import { RadialBarChartAPI } from './RadialBarChart';
import { FunnelChartAPI as FunnelChart } from './FunnelChart';
import { TreemapAPI } from './Treemap';

import { BarAPI as Bar } from './Bar';
import { LineAPI } from './Line';
import { ScatterAPI as Scatter } from './Scatter';
import { XAxisAPI as XAxis } from './XAxis';
import { YAxisAPI as YAxis } from './YAxis';
import { ZAxisAPI as ZAxis } from './ZAxis';
import { ReferenceLineAPI as ReferenceLine } from './ReferenceLine';
import { ReferenceDotAPI as ReferenceDot } from './ReferenceDot';
import { ReferenceAreaAPI as ReferenceArea } from './ReferenceArea';
import { ErrorBarAPI as ErrorBar } from './ErrorBar';
import { BrushAPI as Brush } from './Brush';
import { CartesianAxisAPI as CartesianAxis } from './CartesianAxis';
import { CartesianGridAPI as CartesianGrid } from './CartesianGrid';
import { FunnelAPI as Funnel } from './Funnel';

import { ResponsiveContainerAPI as ResponsiveContainer } from './ResponsiveContainer';
import { LegendAPI as Legend } from './Legend';
import { TooltipAPI as Tooltip } from './Tooltip';
import { CellAPI as Cell } from './Cell';
import { TextAPI } from './TextAPI';
import { LabelListAPI as LabelList } from './LabelList';
import { CustomizedAPI as Customized } from './Customized';

import { PieAPI as Pie } from './Pie';
import { RadarAPI as Radar } from './Radar';
import { RadialBarAPI as RadialBar } from './RadialBar';
import { PolarAngleAxisAPI as PolarAngleAxis } from './PolarAngleAxis';
import { PolarGridAPI as PolarGrid } from './PolarGrid';
import { PolarRadiusAxisAPI as PolarRadiusAxis } from './PolarRadiusAxis';

import { CrossAPI as Cross } from './Cross';
import { CurveAPI as Curve } from './Curve';
import { DotAPI as Dot } from './Dot';
import { PolygonAPI as Polygon } from './Polygon';
import { RectangleAPI as Rectangle } from './Rectangle';
import { SectorAPI as Sector } from './Sector';
import { TrapezoidAPI as Trapezoid } from './Trapezoid';
import { ApiDoc } from './types';
import { BarStackAPI } from './BarStackAPI';
import { LabelAPI } from './LabelAPI';
import { ZIndexLayerAPI } from './ZIndexLayerAPI';
import { AreaAPI } from './AreaAPI.tsx';

export const allExamples: Record<string, ApiDoc> = {
  AreaChart,
  BarChart: BarChartAPI,
  LineChart,
  ComposedChart: ComposedChartAPI,
  PieChart,
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
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Brush,
  CartesianAxis,
  CartesianGrid,
  Funnel,

  ResponsiveContainer,
  Legend,
  Tooltip,
  Cell,
  Text: TextAPI,
  Label: LabelAPI,
  LabelList,
  Customized,

  Pie,
  RadialBar,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
  ErrorBar,

  Cross,
  Curve,
  Dot,
  Polygon,
  Rectangle,
  Sector,
  Trapezoid,

  ZIndexLayer: ZIndexLayerAPI,
};
