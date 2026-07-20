import LegendEffectOpacity from './LegendEffectOpacity';
import sourceCode from './LegendEffectOpacity?raw';
import LegendPositionExample, { defaultControlsState, levers as legendPositionLevers } from './LegendPositionExample';
import legendPositionSource from './LegendPositionExample?raw';
import { ChartExample } from '../types.ts';
import { LinkToApi } from '../../../components/Shared/LinkToApi.tsx';
import LegendStylesExample from './LegendStylesExample.tsx';
import legendStylesSourceCode from './LegendStylesExample?raw';

export const legendExamples = {
  LegendEffectOpacity: {
    Component: LegendEffectOpacity,
    sourceCode,
    name: 'Legend with Opacity',
    description: (
      <>
        Uses event listeners so that when you hover over the Legend items, graphical items in the chart change opacity.
      </>
    ),
  },
  LegendPosition: {
    Component: LegendPositionExample,
    sourceCode: legendPositionSource,
    defaultControlsState,
    levers: legendPositionLevers,
    name: 'Legend Position',
    description: (
      <>
        This example demonstrates the <code>position</code> prop on the <LinkToApi>Legend</LinkToApi> component. Use the
        controls to change the legend position relative to the chart.
      </>
    ),
    defaultTool: 'controls',
  },
  LegendStylesExample: {
    Component: LegendStylesExample,
    sourceCode: legendStylesSourceCode,
    name: 'Custom Legend Styles',
  },
} satisfies Record<string, ChartExample>;
