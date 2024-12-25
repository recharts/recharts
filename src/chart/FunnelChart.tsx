import { generateCategoricalChart } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const FunnelChart = generateCategoricalChart({
  chartName: 'FunnelChart',
  validateTooltipEventTypes: ['item'],
  defaultTooltipEventType: 'item',
  defaultProps: {
    layout: 'centric',
  },
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
