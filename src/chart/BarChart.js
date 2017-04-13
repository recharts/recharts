/**
 * @fileOverview Bar Chart
 */
import generateCategoricalChart from './generateCategoricalChart';
import Bar from '../cartesian/Bar';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import { formatAxisMap } from '../util/CartesianUtils';

export default generateCategoricalChart({
  chartName: 'BarChart',
  GraphicalChild: Bar,
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
  ],
  formatAxisMap,
});
