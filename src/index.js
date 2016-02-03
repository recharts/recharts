import 'ima.js-babel6-polyfill';
import 'core-js/es6/math';
import Surface from './container/Surface';

import Legend from './component/Legend';
import Tooltip from './component/Tooltip';
import AdaptionWrapper from './component/AdaptionWrapper';

import Sector from './shape/Sector';
import Curve from './shape/Curve';
import Rectangle from './shape/Rectangle';
import Triangle from './shape/Triangle';
import Polygon from './shape/Polygon';
import Dot from './shape/Dot';
import Cross from './shape/Cross';

import PolarGrid from './polar/PolarGrid';
import PolarRadiusAxis from './polar/PolarRadiusAxis';
import PolarAngleAxis from './polar/PolarAngleAxis';
import Pie from './polar/Pie';
import Radar from './polar/Radar';
import RadialBar from './polar/RadialBar';

import Brush from './cartesian/Brush';
import ReferenceLine from './cartesian/ReferenceLine';
import CartesianAxis from './cartesian/CartesianAxis';
import CartesianGrid from './cartesian/CartesianGrid';
import Line from './cartesian/Line';
import Area from './cartesian/Area';
import Bar from './cartesian/Bar';
import Scatter from './cartesian/Scatter';
import XAxis from './cartesian/XAxis';
import YAxis from './cartesian/YAxis';
import ZAxis from './cartesian/ZAxis';

import LineChart from './chart/LineChart';
import BarChart from './chart/BarChart';
import PieChart from './chart/PieChart';
import Treemap from './chart/Treemap';
import RadarChart from './chart/RadarChart';
import ScatterChart from './chart/ScatterChart';
import AreaChart from './chart/AreaChart';
import RadialBarChart from './chart/RadialBarChart';
import ComposedChart from './chart/ComposedChart';

export {
  // container
  Surface,
  // componnet
  Legend, Tooltip, AdaptionWrapper,
  // shape
  Sector, Curve, Rectangle, Triangle, Polygon, Dot, Cross,

  // components in cartesian system charts
  CartesianAxis, CartesianGrid,
  Brush, ReferenceLine,
  XAxis, YAxis, ZAxis,
  Line, Area, Bar, Scatter,
  // cartesian system charts
  LineChart,
  AreaChart,
  BarChart,
  ComposedChart,
  ScatterChart,

  // components in polar system charts
  PolarGrid, PolarRadiusAxis, PolarAngleAxis,
  Radar, Pie, RadialBar,
  // polar system charts
  PieChart,
  RadialBarChart,
  RadarChart,

  Treemap,
};
