/**
 * @fileOverview Pie Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const PieChart = generateCategoricalChart({
  chartName: 'PieChart',
  validateTooltipEventTypes: ['item'],
  defaultTooltipEventType: 'item',
  defaultProps: {
    layout: 'centric',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%',
  },
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
