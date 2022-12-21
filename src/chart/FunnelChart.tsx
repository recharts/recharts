/**
 * @fileOverview Funnel Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Funnel } from '../numberAxis/Funnel';

export const FunnelChart = generateCategoricalChart({
  chartName: 'FunnelChart',
  GraphicalChild: Funnel,
  validateTooltipEventTypes: ['item'],
  defaultTooltipEventType: 'item',
  axisComponents: [],
  defaultProps: {
    layout: 'centric',
  },
});
