import TinyBarChart from './TinyBarChart';
import SimpleBarChart from './SimpleBarChart';
import StackedBarChart from './StackedBarChart';
import MixBarChart from './MixBarChart';
import CustomShapeBarChart from './CustomShapeBarChart';
import PositiveAndNegativeBarChart from './PositiveAndNegativeBarChart';
import BrushBarChart from './BrushBarChart';
import BarChartWithCustomizedEvent from './BarChartWithCustomizedEvent';
import BarChartWithMinHeight from './BarChartWithMinHeight';
import BarChartStackedBySign from './BarChartStackedBySign';
import BiaxialBarChart from './BiaxialBarChart';
import BarChartHasBackground from './BarChartHasBackground';
import BarChartWithMultiXAxis from './BarChartWithMultiXAxis';
import BarChartNoPadding from './BarChartNoPadding';
import tinyBarChartSource from './TinyBarChart?raw';
import simpleBarChartSource from './SimpleBarChart?raw';
import stackedBarChartSource from './StackedBarChart?raw';
import mixBarChartSource from './MixBarChart?raw';
import customShapeBarChartSource from './CustomShapeBarChart?raw';
import positiveAndNegativeBarChartSource from './PositiveAndNegativeBarChart?raw';
import brushBarChartSource from './BrushBarChart?raw';
import barChartWithCustomizedEventSource from './BarChartWithCustomizedEvent?raw';
import barChartWithMinHeightSource from './BarChartWithMinHeight?raw';
import barChartStackedBySignSource from './BarChartStackedBySign?raw';
import biaxialBarChartSource from './BiaxialBarChart?raw';
import barChartHasBackgroundSource from './BarChartHasBackground?raw';
import barChartWithMultiXAxisSource from './BarChartWithMultiXAxis?raw';
import barChartNoPaddingSource from './BarChartNoPadding?raw';
import { ChartExample } from '../types.ts';

const barChartExamples: Record<string, ChartExample> = {
  TinyBarChart: {
    Component: TinyBarChart,
    sourceCode: tinyBarChartSource,
    name: 'Tiny Bar Chart',
  },
  SimpleBarChart: {
    Component: SimpleBarChart,
    sourceCode: simpleBarChartSource,
    name: 'Simple Bar Chart',
  },
  StackedBarChart: {
    Component: StackedBarChart,
    sourceCode: stackedBarChartSource,
    name: 'Stacked Bar Chart',
  },
  MixBarChart: {
    Component: MixBarChart,
    sourceCode: mixBarChartSource,
    name: 'Mix Bar Chart',
  },
  CustomShapeBarChart: {
    Component: CustomShapeBarChart,
    sourceCode: customShapeBarChartSource,
    name: 'Custom Shape Bar Chart',
  },
  PositiveAndNegativeBarChart: {
    Component: PositiveAndNegativeBarChart,
    sourceCode: positiveAndNegativeBarChartSource,
    name: 'Positive and Negative Bar Chart',
  },
  BrushBarChart: {
    Component: BrushBarChart,
    sourceCode: brushBarChartSource,
    name: 'Brush Bar Chart',
  },
  BarChartWithCustomizedEvent: {
    Component: BarChartWithCustomizedEvent,
    sourceCode: barChartWithCustomizedEventSource,
    name: 'Bar Chart With Customized Event',
  },
  BarChartWithMinHeight: {
    Component: BarChartWithMinHeight,
    sourceCode: barChartWithMinHeightSource,
    name: 'Bar Chart With Min Height',
  },
  BarChartStackedBySign: {
    Component: BarChartStackedBySign,
    sourceCode: barChartStackedBySignSource,
    name: 'Bar Chart Stacked By Sign',
  },
  BiaxialBarChart: {
    Component: BiaxialBarChart,
    sourceCode: biaxialBarChartSource,
    name: 'Biaxial Bar Chart',
  },
  BarChartHasBackground: {
    Component: BarChartHasBackground,
    sourceCode: barChartHasBackgroundSource,
    name: 'Bar Chart Has Background',
  },
  BarChartWithMultiXAxis: {
    Component: BarChartWithMultiXAxis,
    sourceCode: barChartWithMultiXAxisSource,
    name: 'Bar Chart With Multi X Axis',
  },
  BarChartNoPadding: {
    Component: BarChartNoPadding,
    sourceCode: barChartNoPaddingSource,
    name: 'Bar Chart No Padding',
  },
};

export default barChartExamples;
