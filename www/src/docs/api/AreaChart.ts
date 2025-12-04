import { ApiDoc } from './types.ts';
import { baseCartesianChartAPIProps, stackedChartAPIProps } from './CartesianChartAPI.ts';

export const AreaChartAPI: ApiDoc = {
  name: 'AreaChart',
  desc: {
    'en-US': 'All svg elements can be added into the AreaChart component, such as defs, linearGradient, etc.',
    'zh-CN': 'AreaChart 支持添加任何类型的 svg 元素作为子节点，包括 defs、linearGradient 等等。',
  },
  props: [
    ...baseCartesianChartAPIProps,
    ...stackedChartAPIProps,
    {
      name: 'baseValue',
      type: "Number | 'dataMin' | 'dataMax'",
      isOptional: false,
      desc: {
        'en-US': 'The base value of area.',
        'zh-CN': '区域图的基准值。',
      },
    },
  ],
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
    'Area',
    'Customized',
    'validate svg elements...',
  ],
};
