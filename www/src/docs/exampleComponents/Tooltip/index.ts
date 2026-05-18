import CustomContentOfTooltip from './CustomContentOfTooltip';
import customContentOfTooltipSource from './CustomContentOfTooltip?raw';
import { ChartExample } from '../types.ts';

export const tooltipExamples = {
  CustomContentOfTooltip: {
    Component: CustomContentOfTooltip,
    sourceCode: customContentOfTooltipSource,
    name: 'Custom Content Of Tooltip',
  },
} satisfies Record<string, ChartExample>;
