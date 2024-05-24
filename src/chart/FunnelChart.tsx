import { generateCategoricalChart } from './generateCategoricalChart';
import { Funnel } from '../numberAxis/Funnel';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const FunnelChart = generateCategoricalChart({
  chartName: 'FunnelChart',
  GraphicalChild: Funnel,
  validateTooltipEventTypes: ['item'],
  defaultTooltipEventType: 'item',
  axisComponents: [],
  defaultProps: {
    layout: 'centric',
  },
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
