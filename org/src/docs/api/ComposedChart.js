export default {
  name: 'ComposedChart',
  desc:
    'A chart composed of line, area, and bar charts. When you just want to draw a chart of a single type like line, then LineChart is recommended.',
  props: [
    {
      name: 'layout',
      type: "'horizontal' | 'vertical'",
      defaultVal: "'horizontal'",
      isOptional: false,
      desc: {
        'en-US': 'The layout of areas, bars, lines in the chart.',
        'zh-CN': '布局类型，是横向的还是纵向的。',
      },
    },
    {
      name: 'syncId',
      type: 'String',
      isOptional: true,
      desc: {
        'en-US':
          'If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the same syncId, these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.',
        'zh-CN':
          '如果任何两个或者多个类目型图表（LineChart, AreaChart, BarChart, ComposedChart）具有相同的 syncId，这两个图表可以联动，包括 Tooltip 以及 Brush 的联动。',
      },
      examples: [
        {
          name: 'Two synchronized AreaChart',
          url: '/examples/SynchronizedAreaChart',
        },
      ],
    },
    {
      name: 'syncMethod',
      type: "'index' | 'value' | function",
      defaultVal: "'index'",
      isOptional: true,
      desc: {
        'en-US':
          "When syncId is provided, allows customisation of how the charts will synchronize tooltips and brushes. Using 'index' (default setting), other charts will reuse current datum's index within the data array. In cases where data does not have the same length, this might yield unexpected results. In that case use 'value' which will try to match other charts values, or a fully custom function which will receive tick, data as argument and should return an index."
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The width of chart container.',
        'zh-CN': '图表的宽度',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The height of chart container.',
        'zh-CN': '图表的高度',
      },
    },
    {
      name: 'data',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The source data, in which each element is an object.',
        'zh-CN': '输入数据，现在支持的类型是对象数组。',
      },
      format: ["[{name: 'a', value: 12}]"],
    },
    {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: {
        'en-US': 'The sizes of whitespace around the container.',
        'zh-CN': '图表四周的留白大小，支持传入部分值（如： { top: 5 }）。',
      },
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    },
    {
      name: 'barCategoryGap',
      type: 'Percentage | Number',
      defaultVal: "'10%'",
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
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.',
        'zh-CN':
          '柱条的宽度。如果指定这个值，会根据 barCategoryGap 和 barGap 来计算柱条的宽度，每组柱条的宽度是一样的。',
      },
    },
    {
      name: 'reverseStackOrder',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: true,
      desc: {
        'en-US':
          'If false set, stacked items will be rendered left to right. If true set, stacked items will be rendered right to left. (Render direction affects SVG layering, not x position.)',
        'zh-CN':
          '如果设置为false，堆叠的项目将从左到右呈现。如果真正设置，堆叠的项目将从右到左呈现。 （渲染方向影响SVG分层，而不影响x位置。）',
      },
    },
    {
      name: 'baseValue',
      type: "Number | 'dataMin' | 'dataMax' | 'auto'",
      defaultVal: 'auto',
      isOptional: true,
      desc: {
        'en-US': 'The base value of area.',
        'zh-CN': '区域图的基准值。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click in this chart.',
        'zh-CN': '鼠标在图表图形区域 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter in this chart.',
        'zh-CN': '鼠标在图表图形区域 mouseenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove in this chart.',
        'zh-CN': '鼠标在图表图形区域 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave in this chart.',
        'zh-CN': '鼠标在图表图形区域 mouseleave 事件的回调函数。',
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
