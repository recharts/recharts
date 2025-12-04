import { baseCartesianChartAPIProps } from './CartesianChartAPI.ts';

export const FunnelChartAPI = {
  name: 'FunnelChart',
  props: baseCartesianChartAPIProps,
  parentComponents: ['ResponsiveContainer'],
  childrenComponents: ['Funnel', 'Legend', 'Tooltip', 'Customized', 'validate svg elements...'],
};
