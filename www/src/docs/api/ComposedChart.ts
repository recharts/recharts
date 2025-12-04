import { ApiDoc } from './types.ts';
import { baseCartesianChartAPIProps, stackedChartAPIProps } from './CartesianChartAPI.ts';

export const ComposedChartAPI: ApiDoc = {
  name: 'ComposedChart',
  desc: 'A chart composed of line, area, and bar charts. When you just want to draw a chart of a single type like line, then LineChart is recommended.',
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
      type: 'Number',
      defaultVal: 4,
      isOptional: false,
      desc: {
        'en-US': 'The gap between two bars in the same category.',
        'zh-CN': '某一个类目下，相邻的两个柱条的间隔大小。如果值为百分比，会根据类目宽度来计算实际值。',
      },
    },
    {
      name: 'barSize',
      type: 'Number',
      isOptional: true,
      desc: {
        'en-US':
          'The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.',
        'zh-CN':
          '柱条的宽度。如果指定这个值，会根据 barCategoryGap 和 barGap 来计算柱条的宽度，每组柱条的宽度是一样的。',
      },
    },
    {
      name: 'baseValue',
      type: "Number | 'dataMin' | 'dataMax'",
      isOptional: true,
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
    'Line',
    'Bar',
    'Customized',
    'validate svg elements...',
  ],
};
