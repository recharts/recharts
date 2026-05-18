import ComposedResponsiveContainer from './ComposedResponsiveContainer';
import PieResponsiveContainer from './PieResponsiveContainer';
import composedResponsiveContainerSource from './ComposedResponsiveContainer?raw';
import pieResponsiveContainerSource from './PieResponsiveContainer?raw';
import { ChartExample } from '../types.ts';
import ResponsiveContainerExample from './ResponsiveContainerExample';
import responsiveContainerExampleSource from './ResponsiveContainerExample?raw';

export const responsiveContainerExamples = {
  AreaResponsiveContainer: {
    Component: ResponsiveContainerExample,
    sourceCode: responsiveContainerExampleSource,
    name: 'Area Responsive Container',
  },
  ComposedResponsiveContainer: {
    Component: ComposedResponsiveContainer,
    sourceCode: composedResponsiveContainerSource,
    name: 'Composed Responsive Container',
  },
  PieResponsiveContainer: {
    Component: PieResponsiveContainer,
    sourceCode: pieResponsiveContainerSource,
    name: 'Pie Responsive Container',
  },
} satisfies Record<string, ChartExample>;
