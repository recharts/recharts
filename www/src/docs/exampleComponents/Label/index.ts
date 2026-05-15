import LabelCartesianPositions from './LabelCartesianPositions';
import labelCartesianPositionsSource from './LabelCartesianPositions?raw';
import LabelPiePositions from './LabelPiePositions';
import labelPiePositionsSource from './LabelPiePositions?raw';
import LabelRadialBarPositions from './LabelRadialBarPositions';
import labelRadialBarPositionsSource from './LabelRadialBarPositions?raw';
import LabelFunnelPositions from './LabelFunnelPositions';
import labelFunnelPositionsSource from './LabelFunnelPositions?raw';
import LabelBarChartExample from './LabelBarChartExample';
import labelBarChartExampleSource from './LabelBarChartExample?raw';
import { ChartExample } from '../types.ts';

export const labelExamples = {
  LabelCartesianPositions: {
    Component: LabelCartesianPositions,
    sourceCode: labelCartesianPositionsSource,
    name: 'Label Cartesian Positions Example',
  },
  LabelPiePositions: {
    Component: LabelPiePositions,
    sourceCode: labelPiePositionsSource,
    name: 'Label Pie Positions Example',
  },
  LabelRadialBarPositions: {
    Component: LabelRadialBarPositions,
    sourceCode: labelRadialBarPositionsSource,
    name: 'Label Radial Bar Positions Example',
  },
  LabelFunnelPositions: {
    Component: LabelFunnelPositions,
    sourceCode: labelFunnelPositionsSource,
    name: 'Label Funnel Positions Example',
  },
  LabelBarChartExample: {
    Component: LabelBarChartExample,
    sourceCode: labelBarChartExampleSource,
    name: 'Label Bar Chart Example',
  },
} satisfies Record<string, ChartExample>;
