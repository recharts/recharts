import CustomContentOfTooltip from './CustomContentOfTooltip';
import customContentOfTooltipSource from './CustomContentOfTooltip?raw';
import { ChartExample } from '../types.ts';

const tooltipExamples: Record<string, ChartExample> = {
  CustomContentOfTooltip: {
    Component: CustomContentOfTooltip,
    sourceCode: customContentOfTooltipSource,
    name: 'Custom Content Of Tooltip',
  },
};

export default tooltipExamples;
