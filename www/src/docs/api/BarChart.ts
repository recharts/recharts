import { ApiDoc } from './types.ts';
import { baseCartesianChartAPIProps, stackedChartAPIProps } from './CartesianChartAPI.ts';

export const BarChartAPI: ApiDoc = {
  name: 'BarChart',
  props: [
    ...baseCartesianChartAPIProps,
    ...stackedChartAPIProps,
    {
      name: 'barCategoryGap',
      type: 'Percentage | Number',
      defaultVal: '10%',
      isOptional: false,
      desc: {
        'en-US': 'The gap between two bar categories, which can be a percent value or a fixed value.',
        'zh-CN': '两个类目之间的间隔距离，如果值为百分比，会根据类目宽度来计算实际值。',
      },
    },
    {
      name: 'barGap',
      type: 'Percentage | Number',
      defaultVal: 4,
      isOptional: false,
      desc: {
        'en-US': 'The gap between two bars in the same category.',
        'zh-CN': '某一个类目下，相邻的两个柱条的间隔大小。如果值为百分比，会根据类目宽度来计算实际值。',
      },
    },
    {
      name: 'barSize',
      type: 'Number | Percentage',
      isOptional: true,
      desc: {
        'en-US': `The width or height of each bar. If the barSize is not specified, the size of the
           bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,
        'zh-CN':
          '柱条的宽度。如果指定这个值，会根据 barCategoryGap 和 barGap 来计算柱条的宽度，每组柱条的宽度是一样的。',
      },
      examples: [
        {
          name: 'Tiny BarChart',
          url: '/examples/TinyBarChart',
        },
        {
          name: 'Mix BarChart with stacked bars and unstacked bars ',
          url: '/examples/MixBarChart',
        },
      ],
    },
    {
      name: 'maxBarSize',
      type: 'Number',
      desc: {
        'en-US':
          'The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.',
        'zh-CN':
          '当柱图的 layout 是 horizontal 时，表示柱子的最大宽度。当柱图的 layout 是 vertical 时，表示柱子的最大高度。',
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
    'Bar',
    'Customized',
    'validate svg elements...',
  ],
};
