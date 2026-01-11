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
import { ChartExample } from '../types.ts';
import BarChartNavExample from './BarChartNavExample';
import RangedStackedBarChart from './RangedStackedBarChart';
import rangedStackedBarChartSource from './RangedStackedBarChart?raw';
import PopulationPyramidExample from './PopulationPyramidExample';
import populationPyramidExampleSource from './PopulationPyramidExample?raw';
import TimelineExample from './TimelineExample';
import timelineExampleSource from './TimelineExample?raw';
import CandlestickExample from './CandlestickExample';
import candlestickExampleSource from './CandlestickExample?raw';
import { RechartsLink } from '../../../components/Shared/RechartsLink.tsx';

export { BarChartNavExample };

export const barChartExamples: Record<string, ChartExample> = {
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
    name: 'Bar Chart with background',
  },
  BarChartWithMultiXAxis: {
    Component: BarChartWithMultiXAxis,
    sourceCode: barChartWithMultiXAxisSource,
    name: 'Bar Chart With Multi X Axis',
  },
  RangedStackedBarChart: {
    Component: RangedStackedBarChart,
    sourceCode: rangedStackedBarChartSource,
    name: 'Ranged Stacked Bar Chart',
    description: (
      <article>
        <p>If you define stacked bar data as ranges, Recharts will use those ranges as-is without any calculations.</p>
        <p>
          The ranges can be connected, disconnected, or overlapping depending on your use case (e.g., timeline of
          events).
        </p>
        <p>BarStack component allows you to set radius for rounded corners on the entire stack.</p>
        <p>These features are available since Recharts 3.6.</p>
      </article>
    ),
  },
  PopulationPyramid: {
    Component: PopulationPyramidExample,
    sourceCode: populationPyramidExampleSource,
    name: 'Population Pyramid',
  },
  TimelineExample: {
    // https://github.com/recharts/recharts/issues/6034
    Component: TimelineExample,
    sourceCode: timelineExampleSource,
    name: 'Timeline',
    description: (
      <article>
        <p>
          <code>{'radius={number}'}</code> prop on a <code>Bar</code> component will round all edges of the Rectangle.
        </p>
        <p>
          Stacked ranged charts are available since Recharts 3.6. So you can provide the ranges directly as arrays of
          two numbers.
        </p>
        <p>
          This example also demonstrates the use of <code>shape</code> prop instead of <code>Cell</code>.
        </p>
      </article>
    ),
  },
  CandleStick: {
    Component: CandlestickExample,
    sourceCode: candlestickExampleSource,
    name: 'Candlestick',
    description: (
      <>
        Candlestick chart is used to represent stock price movements. This example uses <RechartsLink api="Bar" /> and{' '}
        <RechartsLink api="ErrorBar" /> to render a 15-minute interval candlestick chart with custom{' '}
        <RechartsLink api="Tooltip" />.
      </>
    ),
  },
};
