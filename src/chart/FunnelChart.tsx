/**
 * @fileOverview Funnel Chart
 */
import generateCategoricalChart from './generateCategoricalChart';
import Funnel from '../numberAxis/Funnel';
import { CategoricalChart } from './types';

export default generateCategoricalChart({
  chartName: 'FunnelChart',
  GraphicalChild: Funnel,
  eventType: 'item',
  axisComponents: [],
  defaultProps: {
    layout: 'centric',
  },
} as CategoricalChart);
