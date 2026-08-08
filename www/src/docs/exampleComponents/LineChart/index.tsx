import { Link } from 'react-router';
import BiaxialLineChart from './BiaxialLineChart';
import CustomizedDotLineChart from './CustomizedDotLineChart';
import CustomizedLabelLineChart from './CustomizedLabelLineChart';
import DashedLineChart from './DashedLineChart';
import LineChartConnectNulls from './LineChartConnectNulls';
import LineChartWithReferenceLines from './LineChartWithReferenceLines';
import LineChartWithXAxisPadding from './LineChartWithXAxisPadding';
import SimpleLineChart from './SimpleLineChart';
import SynchronizedLineChart from './SynchronizedLineChart';
import TinyLineChart from './TinyLineChart';
import VerticalLineChart from './VerticalLineChart';
import VerticalLineChartWithSpecifiedDomain from './VerticalLineChartWithSpecifiedDomain';
import HighlightAndZoomLineChart from './HighlightAndZoomLineChart';
import LineChartHasMultiSeries from './LineChartHasMultiSeries';
import LineChartAxisInterval from './LineChartAxisInterval';
import LineChartNegativeValuesWithReferenceLines from './LineChartNegativeValuesWithReferenceLines';
import biaxialLineChartSource from './BiaxialLineChart?raw';
import customizedDotLineChartSource from './CustomizedDotLineChart?raw';
import customizedLabelLineChartSource from './CustomizedLabelLineChart?raw';
import dashedLineChartSource from './DashedLineChart?raw';
import lineChartConnectNullsSource from './LineChartConnectNulls?raw';
import lineChartWithReferenceLinesSource from './LineChartWithReferenceLines?raw';
import lineChartWithXAxisPaddingSource from './LineChartWithXAxisPadding?raw';
import simpleLineChartSource from './SimpleLineChart?raw';
import synchronizedLineChartSource from './SynchronizedLineChart?raw';
import tinyLineChartSource from './TinyLineChart?raw';
import verticalLineChartSource from './VerticalLineChart?raw';
import verticalLineChartWithSpecifiedDomainSource from './VerticalLineChartWithSpecifiedDomain?raw';
import highlightAndZoomLineChartSource from './HighlightAndZoomLineChart?raw';
import lineChartHasMultiSeriesSource from './LineChartHasMultiSeries?raw';
import lineChartAxisIntervalSource from './LineChartAxisInterval?raw';
import lineChartNegativeValuesWithReferenceLinesSource from './LineChartNegativeValuesWithReferenceLines?raw';
import { ChartExample } from '../types.ts';
import CompareTwoLines from './CompareTwoLines.tsx';
import CompareTwoLinesSource from './CompareTwoLines.tsx?raw';
import DynamicZIndexLineChart from './DynamicZIndexLineChart.tsx';
import DynamicZIndexLineChartSource from './DynamicZIndexLineChart.tsx?raw';
import LineChartCustomShapeExample, {
  lineChartCustomShapeDefaultState,
  lineChartCustomShapeLevers,
} from './LineChartCustomShapeExample';
import LineChartCustomShapeExampleSource from './LineChartCustomShapeExample/index.tsx?raw';
import { LinkToApi } from '../../../components/Shared/LinkToApi.tsx';
import AnimatedTimeSeriesExample, {
  animatedTimeSeriesDefaultState,
  animatedTimeSeriesLevers,
} from './AnimatedTimeSeriesExample.tsx';
import AnimatedTimeSeriesExampleSource from './AnimatedTimeSeriesExample.tsx?raw';

export const lineChartExamples = {
  SimpleLineChart: {
    Component: SimpleLineChart,
    sourceCode: simpleLineChartSource,
    name: 'Simple Line Chart',
    description: 'Basic line chart with two series, Cartesian grid, tooltip, and legend.',
  },
  DashedLineChart: {
    Component: DashedLineChart,
    sourceCode: dashedLineChartSource,
    name: 'Dashed Line Chart',
    description: 'Line chart with dashed stroke styles on the chart lines.',
  },
  VerticalLineChart: {
    Component: VerticalLineChart,
    sourceCode: verticalLineChartSource,
    name: 'Vertical Line Chart',
    description: 'Line chart with vertical layout where categories are displayed on the Y axis.',
  },
  BiaxialLineChart: {
    Component: BiaxialLineChart,
    sourceCode: biaxialLineChartSource,
    name: 'Biaxial Line Chart',
    description: 'Line chart with two Y axes (left and right) for comparing datasets with different scales.',
  },
  VerticalLineChartWithSpecifiedDomain: {
    Component: VerticalLineChartWithSpecifiedDomain,
    sourceCode: verticalLineChartWithSpecifiedDomainSource,
    name: 'Vertical Line Chart With Specified Domain',
    description: 'Vertical line chart with a custom X axis domain',
  },
  LineChartConnectNulls: {
    Component: LineChartConnectNulls,
    sourceCode: lineChartConnectNullsSource,
    name: 'Line Chart Connect Nulls',
    description:
      'Compares a line chart that skips null data points versus one that connects across them using the connectNulls prop.',
  },
  LineChartWithXAxisPadding: {
    Component: LineChartWithXAxisPadding,
    sourceCode: lineChartWithXAxisPaddingSource,
    name: 'Line Chart With X Axis Padding',
    description: 'Line chart with custom left and right padding on the X axis to add space around the data.',
  },
  LineChartWithReferenceLines: {
    Component: LineChartWithReferenceLines,
    sourceCode: lineChartWithReferenceLinesSource,
    name: 'Line Chart With Reference Lines',
    description: 'Line chart with reference lines highlighting specific X and Y values.',
  },
  CustomizedDotLineChart: {
    Component: CustomizedDotLineChart,
    sourceCode: customizedDotLineChartSource,
    name: 'Customized Dot Line Chart',
    description: 'This chart shows different dot on a Line depending on the difference to the other Line value.',
  },
  CustomizedLabelLineChart: {
    Component: CustomizedLabelLineChart,
    sourceCode: customizedLabelLineChartSource,
    name: 'Customized Label Line Chart',
    description: 'Line chart with custom data point labels and rotated X axis tick labels.',
  },
  SynchronizedLineChart: {
    Component: SynchronizedLineChart,
    sourceCode: synchronizedLineChartSource,
    name: 'Synchronized Line Chart',
    description: 'Multiple line and area charts synchronized via syncId, with a Brush component for range selection.',
  },
  LineChartCustomShapeExample: {
    Component: LineChartCustomShapeExample,
    sourceCode: LineChartCustomShapeExampleSource,
    defaultControlsState: lineChartCustomShapeDefaultState,
    levers: lineChartCustomShapeLevers,
    name: 'Line that animates opacity',
    defaultTool: 'controls',
    description: (
      <p>
        This example shows how you can override <LinkToApi>Line</LinkToApi> <code>shape</code> prop and provide custom
        entrance animation. Compare it to the update animation which remains the same as the default one.
      </p>
    ),
  },
  HighlightAndZoomLineChart: {
    Component: HighlightAndZoomLineChart,
    sourceCode: highlightAndZoomLineChartSource,
    name: 'Highlight And Zoom Line Chart',
    description:
      'Click and drag your mouse to make a selection to zoom in. Click the "Zoom Out" button to reset the zoom level.',
  },
  LineChartHasMultiSeries: {
    Component: LineChartHasMultiSeries,
    sourceCode: lineChartHasMultiSeriesSource,
    name: 'Line Chart Has Multi Series',
    description:
      'Multiple line series with non-overlapping data, using allowDuplicatedCategory={false} to merge categories across series.',
  },
  LineChartAxisInterval: {
    Component: LineChartAxisInterval,
    sourceCode: lineChartAxisIntervalSource,
    name: 'Line Chart Axis Interval',
    description:
      'Demonstrates different axis interval settings: preserveStart, preserveEnd, preserveStartEnd, equidistantPreserveStart, and a numeric interval. The charts are narrow with many data points to demonstrate the difference. Look at XAxis ticks and gaps.',
  },
  LineChartNegativeValuesWithReferenceLines: {
    Component: LineChartNegativeValuesWithReferenceLines,
    sourceCode: lineChartNegativeValuesWithReferenceLinesSource,
    name: 'Line Chart Negative Values With Reference Lines',
    description: 'Line chart with negative values and reference lines at zero to mark the axes crossing point.',
  },
  CompareTwoLines: {
    Component: CompareTwoLines,
    sourceCode: CompareTwoLinesSource,
    name: 'Compare Two Lines',
    description:
      'Interactive performance comparison of two investment lines over time, with reference ranges and mouse tracking.',
  },
  DynamicZIndexLineChart: {
    Component: DynamicZIndexLineChart,
    sourceCode: DynamicZIndexLineChartSource,
    name: 'Dynamic Z-Index Line Chart',
    description:
      'Line chart that changes z-index on legend hover to demonstrate that lines stay visible during quick hover transitions.',
  },
  TinyLineChart: {
    Component: TinyLineChart,
    sourceCode: tinyLineChartSource,
    name: 'Tiny Line Chart',
    description: 'Compact line chart suitable for sparklines or small display areas.',
  },
  AnimatedTimeSeriesExample: {
    Component: AnimatedTimeSeriesExample,
    sourceCode: AnimatedTimeSeriesExampleSource,
    defaultControlsState: animatedTimeSeriesDefaultState,
    levers: animatedTimeSeriesLevers,
    name: 'Animated Time Series',
    defaultTool: 'controls',
    description: (
      <p>
        This example shows the use of <code>animationMatchBy</code> prop to customize Line animation. Read more in{' '}
        <Link to="/guide/animations/">Animations guide</Link>. Start streaming to move the window forward and compare
        the matching strategies.
      </p>
    ),
  },
} satisfies Record<string, ChartExample>;

export { default as LineChartNavExample } from './LineChartNavExample';
