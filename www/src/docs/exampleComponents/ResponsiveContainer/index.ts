import AreaResponsiveContainer from './AreaResponsiveContainer';
import ComposedResponsiveContainer from './ComposedResponsiveContainer';
import PieResponsiveContainer from './PieResponsiveContainer';
import areaResponsiveContainerSource from './AreaResponsiveContainer?raw';
import composedResponsiveContainerSource from './ComposedResponsiveContainer?raw';
import pieResponsiveContainerSource from './PieResponsiveContainer?raw';
import { ChartExample } from '../types.ts';

const responsiveContainerExamples: Record<string, ChartExample> = {
  AreaResponsiveContainer: {
    Component: AreaResponsiveContainer,
    sourceCode: areaResponsiveContainerSource,
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
};

export default responsiveContainerExamples;
