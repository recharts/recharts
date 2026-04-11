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
import LineChartCustomShapeExample, { LineChartCustomShapeControls } from './LineChartCustomShapeExample.tsx';
import LineChartCustomShapeExampleSource from './LineChartCustomShapeExample.tsx?raw';
import { LinkToApi } from '../../../components/Shared/LinkToApi.tsx';

export const lineChartExamples = {
  SimpleLineChart: {
    Component: SimpleLineChart,
    sourceCode: simpleLineChartSource,
    name: 'Simple Line Chart',
  },
  DashedLineChart: {
    Component: DashedLineChart,
    sourceCode: dashedLineChartSource,
    name: 'Dashed Line Chart',
  },
  VerticalLineChart: {
    Component: VerticalLineChart,
    sourceCode: verticalLineChartSource,
    name: 'Vertical Line Chart',
  },
  BiaxialLineChart: {
    Component: BiaxialLineChart,
    sourceCode: biaxialLineChartSource,
    name: 'Biaxial Line Chart',
  },
  VerticalLineChartWithSpecifiedDomain: {
    Component: VerticalLineChartWithSpecifiedDomain,
    sourceCode: verticalLineChartWithSpecifiedDomainSource,
    name: 'Vertical Line Chart With Specified Domain',
  },
  LineChartConnectNulls: {
    Component: LineChartConnectNulls,
    sourceCode: lineChartConnectNullsSource,
    name: 'Line Chart Connect Nulls',
  },
  LineChartWithXAxisPadding: {
    Component: LineChartWithXAxisPadding,
    sourceCode: lineChartWithXAxisPaddingSource,
    name: 'Line Chart With X Axis Padding',
  },
  LineChartWithReferenceLines: {
    Component: LineChartWithReferenceLines,
    sourceCode: lineChartWithReferenceLinesSource,
    name: 'Line Chart With Reference Lines',
  },
  CustomizedDotLineChart: {
    Component: CustomizedDotLineChart,
    sourceCode: customizedDotLineChartSource,
    name: 'Customized Dot Line Chart',
  },
  CustomizedLabelLineChart: {
    Component: CustomizedLabelLineChart,
    sourceCode: customizedLabelLineChartSource,
    name: 'Customized Label Line Chart',
  },
  SynchronizedLineChart: {
    Component: SynchronizedLineChart,
    sourceCode: synchronizedLineChartSource,
    name: 'Synchronized Line Chart',
  },
  LineChartCustomShapeExample: {
    Component: LineChartCustomShapeExample,
    sourceCode: LineChartCustomShapeExampleSource,
    Controls: LineChartCustomShapeControls,
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
  },
  LineChartAxisInterval: {
    Component: LineChartAxisInterval,
    sourceCode: lineChartAxisIntervalSource,
    name: 'Line Chart Axis Interval',
  },
  LineChartNegativeValuesWithReferenceLines: {
    Component: LineChartNegativeValuesWithReferenceLines,
    sourceCode: lineChartNegativeValuesWithReferenceLinesSource,
    name: 'Line Chart Negative Values With Reference Lines',
  },
  CompareTwoLines: {
    Component: CompareTwoLines,
    sourceCode: CompareTwoLinesSource,
    name: 'Compare Two Lines',
  },
  DynamicZIndexLineChart: {
    Component: DynamicZIndexLineChart,
    sourceCode: DynamicZIndexLineChartSource,
    name: 'Dynamic Z-Index Line Chart',
  },
  TinyLineChart: {
    Component: TinyLineChart,
    sourceCode: tinyLineChartSource,
    name: 'Tiny Line Chart',
  },
} satisfies Record<string, ChartExample>;

export { default as LineChartNavExample } from './LineChartNavExample';
