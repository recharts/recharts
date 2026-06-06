import SimpleAreaChart from './SimpleAreaChart';
import StackedAreaChart from './StackedAreaChart';
import AreaChartConnectNulls from './AreaChartConnectNulls';
import CardinalAreaChart from './CardinalAreaChart';
import PercentAreaChart from './PercentAreaChart';
import SynchronizedAreaChart from './SynchronizedAreaChart';
import TinyAreaChart from './TinyAreaChart';
import AreaChartFillByValue from './AreaChartFillByValue';
import simpleAreaChartSource from './SimpleAreaChart?raw';
import stackedAreaChartSource from './StackedAreaChart?raw';
import areaChartConnectNullsSource from './AreaChartConnectNulls?raw';
import cardinalAreaChartSource from './CardinalAreaChart?raw';
import percentAreaChartSource from './PercentAreaChart?raw';
import synchronizedAreaChartSource from './SynchronizedAreaChart?raw';
import tinyAreaChartSource from './TinyAreaChart?raw';
import areaChartFillByValueSource from './AreaChartFillByValue?raw';
import { ChartExample } from '../types.ts';
import AreaChartNavExample from './AreaChartNavExample';
import AreaChartWithCustomEvents from './AreaChartWithCustomEvents';
import areaChartWithCustomEventsSource from './AreaChartWithCustomEvents?raw';
import AreaChartExample from './AreaChartExample';
import areaChartExampleSource from './AreaChartExample?raw';
import AreaChartRangeExample from './AreaChartRangeExample';
import areaChartRangeExampleSource from './AreaChartRangeExample?raw';
import AreaChartCustomAnimationExample, {
  areaChartCustomAnimationDefaultState,
  areaChartCustomAnimationLevers,
} from './AreaChartCustomAnimationExample';
import AreaChartCustomAnimationExampleSource from './AreaChartCustomAnimationExample/index.tsx?raw';
import RangeAreaChartCustomAnimation, {
  rangeAreaChartCustomAnimationDefaultState,
  rangeAreaChartCustomAnimationLevers,
} from './RangeAreaChartCustomAnimation';
import rangeAreaChartCustomAnimationSource from './RangeAreaChartCustomAnimation?raw';

export { AreaChartNavExample };

export const areaChartExamples = {
  AreaChartExample: {
    Component: AreaChartExample,
    sourceCode: areaChartExampleSource,
    name: 'Simple Area Chart',
  },
  StackedAreaChart: {
    Component: StackedAreaChart,
    sourceCode: stackedAreaChartSource,
    name: 'Stacked Area Chart',
  },
  AreaChartRangeExample: {
    Component: AreaChartRangeExample,
    sourceCode: areaChartRangeExampleSource,
    name: 'Ranged Area Chart',
  },
  AreaChartConnectNulls: {
    Component: AreaChartConnectNulls,
    sourceCode: areaChartConnectNullsSource,
    name: 'Area Chart Connect Nulls',
  },
  CardinalAreaChart: {
    Component: CardinalAreaChart,
    sourceCode: cardinalAreaChartSource,
    name: 'Cardinal Area Chart',
  },
  PercentAreaChart: {
    Component: PercentAreaChart,
    sourceCode: percentAreaChartSource,
    name: 'Percent Area Chart',
  },
  SynchronizedAreaChart: {
    Component: SynchronizedAreaChart,
    sourceCode: synchronizedAreaChartSource,
    name: 'Synchronized Area Chart',
  },
  TinyAreaChart: {
    Component: TinyAreaChart,
    sourceCode: tinyAreaChartSource,
    name: 'Tiny Area Chart',
  },
  AreaChartFillByValue: {
    Component: AreaChartFillByValue,
    sourceCode: areaChartFillByValueSource,
    name: 'Area Chart Fill By Value',
  },
  AreaChartCustomAnimation: {
    Component: AreaChartCustomAnimationExample,
    sourceCode: AreaChartCustomAnimationExampleSource,
    defaultControlsState: areaChartCustomAnimationDefaultState,
    levers: areaChartCustomAnimationLevers,
    name: 'Custom Animation Example',
    description:
      'Disable the custom shape to see the default clip-path reveal hide most of the grow-from-bottom interpolation.',
    defaultTool: 'controls',
  },
  RangeAreaChartCustomAnimation: {
    Component: RangeAreaChartCustomAnimation,
    sourceCode: rangeAreaChartCustomAnimationSource,
    defaultControlsState: rangeAreaChartCustomAnimationDefaultState,
    levers: rangeAreaChartCustomAnimationLevers,
    name: 'Range Area Custom Animation',
    description:
      'Uses range data ([low, high]) so the area has an internal baseline path. Swap datasets with animationInterpolateFn enabled to compare the point animation with the baseline animation.',
    defaultTool: 'controls',
  },
  AreaChartWithCustomEvents: {
    Component: AreaChartWithCustomEvents,
    sourceCode: areaChartWithCustomEventsSource,
    name: 'Area Chart With Custom Events',
    description:
      'The example demonstrates how to add custom event handlers to an Area Chart and how to write proper types.',
  },
  PreventRightClickExample: {
    Component: SimpleAreaChart,
    sourceCode: simpleAreaChartSource,
    name: 'Prevent right click menu',
    description: 'This chart also demonstrates preventing the context menu on right mouse click.',
  },
} satisfies Record<string, ChartExample>;
