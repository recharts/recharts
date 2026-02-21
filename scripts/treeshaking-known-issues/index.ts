/**
 * Known pre-existing tree-shaking failures.
 *
 * Each file in this folder documents a component that unexpectedly pulls in other tracked
 * components when tree-shaken in isolation. The file exports:
 * - `component`: the component name being imported
 * - `expectedInBundle`: all component names expected to appear in the bundle (including
 *   the imported component itself and any that are currently pulled in as side effects)
 *
 * When a tree-shaking issue is fixed, remove the import and entry from this index.
 * When a new issue is introduced, create a new file and add it here.
 */

import * as Area from './Area';
import * as AreaChart from './AreaChart';
import * as Bar from './Bar';
import * as BarChart from './BarChart';
import * as BarStack from './BarStack';
import * as Brush from './Brush';
import * as CartesianAxis from './CartesianAxis';
import * as CartesianGrid from './CartesianGrid';
import * as ComposedChart from './ComposedChart';
import * as ErrorBar from './ErrorBar';
import * as Funnel from './Funnel';
import * as FunnelChart from './FunnelChart';
import * as Line from './Line';
import * as LineChart from './LineChart';
import * as Pie from './Pie';
import * as PieChart from './PieChart';
import * as PolarAngleAxis from './PolarAngleAxis';
import * as PolarGrid from './PolarGrid';
import * as PolarRadiusAxis from './PolarRadiusAxis';
import * as Radar from './Radar';
import * as RadarChart from './RadarChart';
import * as RadialBar from './RadialBar';
import * as RadialBarChart from './RadialBarChart';
import * as ReferenceArea from './ReferenceArea';
import * as ReferenceDot from './ReferenceDot';
import * as ReferenceLine from './ReferenceLine';
import * as Sankey from './Sankey';
import * as Scatter from './Scatter';
import * as ScatterChart from './ScatterChart';
import * as SunburstChart from './SunburstChart';
import * as Treemap from './Treemap';
import * as XAxis from './XAxis';
import * as YAxis from './YAxis';
import * as ZAxis from './ZAxis';

export type KnownIssue = {
  readonly component: string;
  readonly expectedInBundle: ReadonlyArray<string>;
};

export const knownTreeshakingIssues: ReadonlyArray<KnownIssue> = [
  Area,
  AreaChart,
  Bar,
  BarChart,
  BarStack,
  Brush,
  CartesianAxis,
  CartesianGrid,
  ComposedChart,
  ErrorBar,
  Funnel,
  FunnelChart,
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
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Sankey,
  Scatter,
  ScatterChart,
  SunburstChart,
  Treemap,
  XAxis,
  YAxis,
  ZAxis,
];
