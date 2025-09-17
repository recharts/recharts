import AreaChart from './AreaChart';
import BarChart from './BarChart';
import ComposedChart from './ComposedChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';
import RadarChart from './RadarChart';
import RadialBarChart from './RadialBarChart';
import SankeyChart from './SankeyChart';
import Treemap from './Treemap';
import ResponsiveContainer from './ResponsiveContainer';
import Cell from './Cell';
import Legend from './Legend';
import ReferenceArea from './ReferenceArea';
import ReferenceDot from './ReferenceDot';
import ReferenceLine from './ReferenceLine';
import ErrorBar from './ErrorBar';
import Label from './Label';
import LabelList from './LabelList';
import FunnelChart from './FunnelChart';
import { ApiExample } from '../api/types.ts';

const allApiExamples: Record<string, ReadonlyArray<ApiExample>> = {
  AreaChart,
  BarChart,
  LineChart,
  ComposedChart,
  PieChart,
  RadarChart,
  ScatterChart,
  RadialBarChart,
  Treemap,
  ResponsiveContainer,
  Cell,
  Legend,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
  ErrorBar,
  Label,
  LabelList,
  FunnelChart,
  SankeyChart,
};
export default allApiExamples;
