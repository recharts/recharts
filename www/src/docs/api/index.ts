import AreaChart from './AreaChart';
import BarChart from './BarChart';
import ComposedChart from './ComposedChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';
import RadarChart from './RadarChart';
import SankeyChart from './SankeyChart';
import RadialBarChart from './RadialBarChart';
import FunnelChart from './FunnelChart';
import Treemap from './Treemap';

import Area from './Area';
import Bar from './Bar';
import Line from './Line';
import Scatter from './Scatter';
import XAxis from './XAxis';
import YAxis from './YAxis';
import ZAxis from './ZAxis';
import ReferenceLine from './ReferenceLine';
import ReferenceDot from './ReferenceDot';
import ReferenceArea from './ReferenceArea';
import ErrorBar from './ErrorBar';
import Brush from './Brush';
import CartesianAxis from './CartesianAxis';
import CartesianGrid from './CartesianGrid';
import Funnel from './Funnel';

import ResponsiveContainer from './ResponsiveContainer';
import Legend from './Legend';
import Tooltip from './Tooltip';
import Cell from './Cell';
import Text from './Text';
import Label from './Label';
import LabelList from './LabelList';
import Customized from './Customized';

import Pie from './Pie';
import Radar from './Radar';
import RadialBar from './RadialBar';
import PolarAngleAxis from './PolarAngleAxis';
import PolarGrid from './PolarGrid';
import PolarRadiusAxis from './PolarRadiusAxis';

import Cross from './Cross';
import Curve from './Curve';
import Dot from './Dot';
import Polygon from './Polygon';
import Rectangle from './Rectangle';
import Sector from './Sector';
import Trapezoid from './Trapezoid';
import { ApiDoc } from './types.ts';

const allExamples: Record<string, ApiDoc> = {
  AreaChart,
  BarChart,
  LineChart,
  ComposedChart,
  PieChart,
  RadarChart,
  ScatterChart,
  RadialBarChart,
  FunnelChart,
  SankeyChart,
  Treemap,

  Area,
  Bar,
  Line,
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
  Text,
  Label,
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
};

export default allExamples;
