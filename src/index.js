import 'ima.js-babel6-polyfill';
import 'core-js/es6/math';
import Surface from './container/Surface';

import Radar from './chart/Radar';

import CartesianAxis from './component/CartesianAxis';
import CartesianGrid from './component/CartesianGrid';
import Legend from './component/Legend';
import Tooltip from './component/Tooltip';
import PolarGrid from './component/PolarGrid';
import PolarRadiusAxis from './component/PolarRadiusAxis';
import PolarAngleAxis from './component/PolarAngleAxis';
import Brush from './component/Brush';
import ReferenceLine from './component/ReferenceLine';

import Sector from './shape/Sector';
import Curve from './shape/Curve';
import Rectangle from './shape/Rectangle';
import Triangle from './shape/Triangle';

import LineChart from './chartWrapper/LineChart';
import Line from './chart/Line';

import BarChart from './chartWrapper/BarChart';
import Bar from './chart/Bar';

import PieChart from './chartWrapper/PieChart';
import Pie from './chart/Pie';

import TreemapChart from './chartWrapper/TreemapChart';

import ScatterChart from './chartWrapper/ScatterChart';
import Scatter from './chart/Scatter';

import AreaChart from './chartWrapper/AreaChart';
import Area from './chart/Area';

import RadialBarChart from './chartWrapper/RadialBarChart';
import RadialBar from './chart/RadialBar';

import XAxis from './chart/XAxis';
import YAxis from './chart/YAxis';
import ZAxis from './chart/ZAxis';

export {
  // container
  Surface,

  // chart
  Radar,

  // componnet
  CartesianAxis, CartesianGrid,
  Legend, Tooltip, Brush, ReferenceLine,
  PolarGrid, PolarRadiusAxis, PolarAngleAxis,

  // shape
  Sector, Curve, Rectangle, Triangle,

  LineChart, Line,
  AreaChart, Area,
  BarChart, Bar,
  PieChart, Pie,
  ScatterChart, Scatter,
  RadialBarChart, RadialBar,
  TreemapChart,

  XAxis, YAxis, ZAxis,
};
