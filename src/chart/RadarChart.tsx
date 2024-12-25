import { generateCategoricalChart } from './generateCategoricalChart';
import { Radar } from '../polar/Radar';
import { PolarAngleAxis } from '../polar/PolarAngleAxis';
import { PolarRadiusAxis } from '../polar/PolarRadiusAxis';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const RadarChart = generateCategoricalChart({
  chartName: 'RadarChart',
  GraphicalChild: Radar,
  axisComponents: [
    { axisType: 'angleAxis', AxisComp: PolarAngleAxis },
    { axisType: 'radiusAxis', AxisComp: PolarRadiusAxis },
  ],
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
