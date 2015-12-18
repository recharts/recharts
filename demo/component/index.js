import Pie from './Pie';
import Radar from './Radar';

import CartesianAxis from './CartesianAxis';
import CartesianGrid from './CartesianGrid';
import Legend from './Legend';
import PolarGrid from './PolarGrid';
import PolarRadiusAxis from './PolarRadiusAxis';
import PolarAngleAxis from './PolarAngleAxis';
import Brush from './BrushDemo';

import Curve from './Curve';
import Rectangle from './Rectangle';
import Sector from './Sector';
import Triangle from './Triangle';

import LineChart from './LineChart';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';
import RadialBarChart from './RadialBarChart';
import TreemapChart from './TreemapChart';

import ColorPick from './ColorPick';

export default {
  chart: {
    Pie,
    Radar
  },

  component: {
    Brush,
    CartesianAxis,
    CartesianGrid,
    Legend,
    PolarGrid,
    PolarRadiusAxis,
    PolarAngleAxis,
  },

  shape: {
    Curve,
    Rectangle,
    Sector,
    Triangle
  },

  chartWrapper: {
    LineChart,
    AreaChart,
    BarChart,
    ScatterChart,
    PieChart,
<<<<<<< HEAD
    RadialBarChart
=======
    TreemapChart
>>>>>>> init Treemap
  },

  Util: {
    ColorPick
  }
};
