import { generateCategoricalChart } from './generateCategoricalChart';
import { Radar } from '../polar/Radar';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const RadarChart = generateCategoricalChart({
  chartName: 'RadarChart',
  GraphicalChild: Radar,
  defaultProps: {
    layout: 'centric',
    startAngle: 90,
    endAngle: -270,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%',
  },
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
