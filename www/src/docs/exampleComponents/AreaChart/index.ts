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

const areaChartExamples: Record<string, ChartExample> = {
  SimpleAreaChart: {
    Component: SimpleAreaChart,
    sourceCode: simpleAreaChartSource,
    name: 'Simple Area Chart',
  },
  StackedAreaChart: {
    Component: StackedAreaChart,
    sourceCode: stackedAreaChartSource,
    name: 'Stacked Area Chart',
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
};

export default areaChartExamples;
