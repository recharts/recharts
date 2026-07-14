import CustomContentOfTooltip from './CustomContentOfTooltip';
import customContentOfTooltipSource from './CustomContentOfTooltip?raw';
import TooltipStylesExample from './TooltipStylesExample.tsx';
import tooltipStylesDemoSource from './TooltipStylesExample.tsx?raw';
import { ChartExample } from '../types.ts';

export const tooltipExamples = {
  CustomContentOfTooltip: {
    Component: CustomContentOfTooltip,
    sourceCode: customContentOfTooltipSource,
    name: 'Custom Content Of Tooltip',
  },
  TooltipStylesDemo: {
    Component: TooltipStylesExample,
    sourceCode: tooltipStylesDemoSource,
    name: 'Tooltip Style',
    description:
      'Demonstrates the three Tooltip style props: contentStyle (the tooltip box), itemStyle (each data row), and labelStyle (the title).',
    defaultTool: 'source',
  },
} satisfies Record<string, ChartExample>;
