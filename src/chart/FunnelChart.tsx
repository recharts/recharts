/**
 * @fileOverview Funnel Chart
 */
import { generateCategoricalChart } from './generateCategoricalChart';
import { Funnel } from '../numberAxis/Funnel';
import { CategoricalChartOptions } from '../util/types';

export const FunnelChart = generateCategoricalChart({
  chartName: 'FunnelChart',
  GraphicalChild: Funnel,
  eventType: 'item',
  axisComponents: [],
  defaultProps: {
    layout: 'centric',
  },
} as CategoricalChartOptions);
