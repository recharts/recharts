/**
 * @fileOverview Line Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Line } from '../cartesian/Line';
import { XAxis } from '../cartesian/XAxis';
import { YAxis } from '../cartesian/YAxis';
import { formatAxisMap } from '../util/CartesianUtils';
import { arrayTooltipSearcher } from '../state/optionsSlice';

export const LineChart = generateCategoricalChart({
  chartName: 'LineChart',
  GraphicalChild: Line,
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
  ],
  formatAxisMap,
  tooltipPayloadSearcher: arrayTooltipSearcher,
});
