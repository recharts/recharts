/**
 * @fileOverview Composed Chart
 */
import generateCategoricalChart from './generateCategoricalChart';
import Area from '../cartesian/Area';
import Bar from '../cartesian/Bar';
import Line from '../cartesian/Line';
import Scatter from '../cartesian/Scatter';

export default generateCategoricalChart('ComposedChart', [Line, Area, Bar, Scatter]);
