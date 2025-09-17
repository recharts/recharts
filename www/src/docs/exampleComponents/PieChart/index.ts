import CustomActiveShapePieChart from './CustomActiveShapePieChart';
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel';
import PieChartWithPaddingAngle from './PieChartWithPaddingAngle';
import StraightAnglePieChart from './StraightAnglePieChart';
import TwoLevelPieChart from './TwoLevelPieChart';
import TwoSimplePieChart from './TwoSimplePieChart';
import PieChartWithNeedle from './PieChartWithNeedle';
import customActiveShapePieChartSource from './CustomActiveShapePieChart?raw';
import pieChartWithCustomizedLabelSource from './PieChartWithCustomizedLabel?raw';
import pieChartWithPaddingAngleSource from './PieChartWithPaddingAngle?raw';
import straightAnglePieChartSource from './StraightAnglePieChart?raw';
import twoLevelPieChartSource from './TwoLevelPieChart?raw';
import twoSimplePieChartSource from './TwoSimplePieChart?raw';
import pieChartWithNeedleSource from './PieChartWithNeedle?raw';
import { ChartExample } from '../types.ts';

const pieChartExamples: Record<string, ChartExample> = {
  TwoLevelPieChart: {
    Component: TwoLevelPieChart,
    sourceCode: twoLevelPieChartSource,
    name: 'Two Level Pie Chart',
  },
  StraightAnglePieChart: {
    Component: StraightAnglePieChart,
    sourceCode: straightAnglePieChartSource,
    name: 'Straight Angle Pie Chart',
  },
  TwoSimplePieChart: {
    Component: TwoSimplePieChart,
    sourceCode: twoSimplePieChartSource,
    name: 'Two Simple Pie Chart',
  },
  CustomActiveShapePieChart: {
    Component: CustomActiveShapePieChart,
    sourceCode: customActiveShapePieChartSource,
    name: 'Custom Active Shape Pie Chart',
  },
  PieChartWithCustomizedLabel: {
    Component: PieChartWithCustomizedLabel,
    sourceCode: pieChartWithCustomizedLabelSource,
    name: 'Pie Chart With Customized Label',
  },
  PieChartWithPaddingAngle: {
    Component: PieChartWithPaddingAngle,
    sourceCode: pieChartWithPaddingAngleSource,
    name: 'Pie Chart With Padding Angle',
  },
  PieChartWithNeedle: {
    Component: PieChartWithNeedle,
    sourceCode: pieChartWithNeedleSource,
    name: 'Pie Chart With Needle',
  },
};

export default pieChartExamples;
