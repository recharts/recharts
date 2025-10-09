import CustomActiveShapePieChart from './CustomActiveShapePieChart';
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel';
import PieChartWithPaddingAngle from './PieChartWithPaddingAngle';
import StraightAnglePieChart from './StraightAnglePieChart';
import TwoLevelPieChart from './TwoLevelPieChart';
import PieChartWithNeedle from './PieChartWithNeedle';
import customActiveShapePieChartSource from './CustomActiveShapePieChart?raw';
import pieChartWithCustomizedLabelSource from './PieChartWithCustomizedLabel?raw';
import pieChartWithPaddingAngleSource from './PieChartWithPaddingAngle?raw';
import straightAnglePieChartSource from './StraightAnglePieChart?raw';
import twoLevelPieChartSource from './TwoLevelPieChart?raw';
import pieChartWithNeedleSource from './PieChartWithNeedle?raw';
import { ChartExample } from '../types.ts';
import PieChartInFlexbox from './PieChartInFlexbox.tsx';
import pieChartInFlexboxSource from './PieChartInFlexbox?raw';
import PieChartInGrid from './PieChartInGrid.tsx';
import pieChartInGridSource from './PieChartInGrid?raw';

export const pieChartExamples: Record<string, ChartExample> = {
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
    name: 'Pie Chart with gap and rounded corners',
  },
  PieChartWithNeedle: {
    Component: PieChartWithNeedle,
    sourceCode: pieChartWithNeedleSource,
    name: 'Pie Chart With Needle',
  },
  PieChartInFlexbox: {
    Component: PieChartInFlexbox,
    sourceCode: pieChartInFlexboxSource,
    name: 'Pie Chart in Flexbox',
  },
  PieChartInGrid: {
    Component: PieChartInGrid,
    sourceCode: pieChartInGridSource,
    name: 'Pie Chart in Grid',
  },
};
