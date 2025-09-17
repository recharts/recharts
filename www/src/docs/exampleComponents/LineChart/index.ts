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

const lineChartExamples: Record<string, ChartExample> = {
  SimpleLineChart: {
    Component: SimpleLineChart,
    sourceCode: simpleLineChartSource,
    name: 'Simple Line Chart',
  },
  TinyLineChart: {
    Component: TinyLineChart,
    sourceCode: tinyLineChartSource,
    name: 'Tiny Line Chart',
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
  HighlightAndZoomLineChart: {
    Component: HighlightAndZoomLineChart,
    sourceCode: highlightAndZoomLineChartSource,
    name: 'Highlight And Zoom Line Chart',
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
};

export default lineChartExamples;
