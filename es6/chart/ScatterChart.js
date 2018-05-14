/**
 * @fileOverview Scatter Chart
 */
import generateCategoricalChart from './generateCategoricalChart';
import Scatter from '../cartesian/Scatter';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import ZAxis from '../cartesian/ZAxis';
import { formatAxisMap } from '../util/CartesianUtils';

export default generateCategoricalChart({
  chartName: 'ScatterChart',
  GraphicalChild: Scatter,
  eventType: 'single',
  axisComponents: [{ axisType: 'xAxis', AxisComp: XAxis }, { axisType: 'yAxis', AxisComp: YAxis }, { axisType: 'zAxis', AxisComp: ZAxis }],
  formatAxisMap: formatAxisMap
});