import Pie from './Pie';

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
import ComposedChart from './ComposedChart';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';
import RadarChart from './RadarChart';
import RadialBarChart from './RadialBarChart';
import TreemapChart from './TreemapChart';

export default {
  chart: {
    Pie,
  },

  component: {
    Brush,
    CartesianAxis,
    CartesianGrid,
    Legend,
    PolarRadiusAxis,
    PolarAngleAxis,
    PolarGrid,
  },

  shape: {
    Curve,
    Rectangle,
    Sector,
    Triangle,
  },

  chartWrapper: {
    LineChart,
    AreaChart,
    BarChart,
    ComposedChart,
    ScatterChart,
    PieChart,
    RadarChart,
    RadialBarChart,
    TreemapChart,
  },
};
