import ComposedChartWithAxisLabels from './ComposedChartWithAxisLabels';
import LineBarAreaComposedChart from './LineBarAreaComposedChart';
import SameDataComposedChart from './SameDataComposedChart';
import VerticalComposedChart from './VerticalComposedChart';
import ScatterAndLineOfBestFit from './ScatterAndLineOfBestFit';
import BandedChart from './BandedChart';
import composedChartWithAxisLabelsSource from './ComposedChartWithAxisLabels?raw';
import lineBarAreaComposedChartSource from './LineBarAreaComposedChart?raw';
import sameDataComposedChartSource from './SameDataComposedChart?raw';
import verticalComposedChartSource from './VerticalComposedChart?raw';
import scatterAndLineOfBestFitSource from './ScatterAndLineOfBestFit?raw';
import bandedChartSource from './BandedChart?raw';
import { ChartExample } from '../types.ts';

const composedChartExamples: Record<string, ChartExample> = {
  LineBarAreaComposedChart: {
    Component: LineBarAreaComposedChart,
    sourceCode: lineBarAreaComposedChartSource,
    name: 'Line Bar Area Composed Chart',
  },
  SameDataComposedChart: {
    Component: SameDataComposedChart,
    sourceCode: sameDataComposedChartSource,
    name: 'Same Data Composed Chart',
  },
  VerticalComposedChart: {
    Component: VerticalComposedChart,
    sourceCode: verticalComposedChartSource,
    name: 'Vertical Composed Chart',
  },
  ComposedChartWithAxisLabels: {
    Component: ComposedChartWithAxisLabels,
    sourceCode: composedChartWithAxisLabelsSource,
    name: 'Composed Chart With Axis Labels',
  },
  ScatterAndLineOfBestFit: {
    Component: ScatterAndLineOfBestFit,
    sourceCode: scatterAndLineOfBestFitSource,
    name: 'Scatter And Line Of Best Fit',
  },
  BandedChart: {
    Component: BandedChart,
    sourceCode: bandedChartSource,
    name: 'Banded Chart',
  },
};

export default composedChartExamples;
