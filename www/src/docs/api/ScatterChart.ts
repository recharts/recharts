import { baseCartesianChartAPIProps } from './CartesianChartAPI.ts';

export const ScatterChartAPI = {
  name: 'ScatterChart',
  props: baseCartesianChartAPIProps,
  parentComponents: ['ResponsiveContainer'],
  childrenComponents: [
    'XAxis',
    'YAxis',
    'ZAxis',
    'ReferenceArea',
    'ReferenceDot',
    'ReferenceLine',
    'Brush',
    'CartesianGrid',
    'Legend',
    'Tooltip',
    'Scatter',
    'Customized',
    'validate svg elements...',
  ],
};
