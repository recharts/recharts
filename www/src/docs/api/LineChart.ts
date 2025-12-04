import { baseCartesianChartAPIProps } from './CartesianChartAPI.ts';

export const LineChartAPI = {
  name: 'LineChart',
  props: baseCartesianChartAPIProps,
  parentComponents: ['ResponsiveContainer'],
  childrenComponents: [
    'XAxis',
    'YAxis',
    'ReferenceArea',
    'ReferenceDot',
    'ReferenceLine',
    'Brush',
    'CartesianGrid',
    'Legend',
    'Tooltip',
    'Line',
    'Customized',
    'validate svg elements...',
  ],
};
