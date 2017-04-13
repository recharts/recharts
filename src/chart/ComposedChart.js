/**
 * @fileOverview Composed Chart
 */
import generateCategoricalChart from './generateCategoricalChart';
import Area from '../cartesian/Area';
import Bar from '../cartesian/Bar';
import Line from '../cartesian/Line';
import Scatter from '../cartesian/Scatter';
import XAxis from '../cartesian/XAxis';
import YAxis from '../cartesian/YAxis';
import ZAxis from '../cartesian/ZAxis';
import { formatAxisMap } from '../util/CartesianUtils';

export default generateCategoricalChart({
  chartName: 'ComposedChart',
  GraphicalChild: [Line, Area, Bar, Scatter],
  axisComponents: [
    { axisType: 'xAxis', AxisComp: XAxis },
    { axisType: 'yAxis', AxisComp: YAxis },
    { axisType: 'zAxis', AxisComp: ZAxis },
  ],
  formatAxisMap,
});
