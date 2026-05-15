import LabelListChartExample from './LabelListChartExample';
import labelListChartExampleSource from './LabelListChartExample?raw';
import { ChartExample } from '../types.ts';

export const labelListExamples = {
  LabelListChartExample: {
    Component: LabelListChartExample,
    sourceCode: labelListChartExampleSource,
    name: 'Label List Chart Example',
  },
} satisfies Record<string, ChartExample>;
