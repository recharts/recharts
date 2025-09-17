import { ApiDoc } from './types.ts';

const BarChart: ApiDoc = {
  name: 'BarChart',
  props: [
    {
      name: 'layout',
      type: "'horizontal' | 'vertical'",
      defaultVal: "'horizontal'",
      isOptional: false,
      desc: {
        'en-US': 'The layout of bars in the chart.',
        'zh-CN': '布局类型，是横向的还是纵向的。',
      },
    },
    {
      name: 'syncId',
      type: 'String',
      isOptional: true,
      desc: {
        'en-US': `If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the same syncId,
          these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.`,
        'zh-CN': `如果任何两个或者多个类目型图表（LineChart, AreaChart, BarChart, ComposedChart）
          具有相同的 syncId，这两个图表可以联动，包括 Tooltip 以及 Brush 的联动。`,
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
          "When syncId is provided, allows customisation of how the charts will synchronize tooltips and brushes. Using 'index' (default setting), other charts will reuse current datum's index within the data array. In cases where data does not have the same length, this might yield unexpected results. In that case use 'value' which will try to match other charts values, or a fully custom function which will receive tick, data as argument and should return an index.",
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The width of chart container.',
        'zh-CN': '图表的宽度。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The height of chart container.',
        'zh-CN': '图表的高度。',
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
      format: ["[{ name: 'a', value: 12 }]", "[{ name: 'a', value: [5, 12] }]"],
    },
    {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: {
        'en-US': 'The sizes of whitespace around the container.',
        'zh-CN': '图表四周的留白大小，支持传入部分值（如： { top: 5 }）',
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
      defaultVal: 'undefined',
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
      defaultVal: '',
      desc: {
        'en-US':
          'The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.',
        'zh-CN':
          '当柱图的 layout 是 horizontal 时，表示柱子的最大宽度。当柱图的 layout 是 vertical 时，表示柱子的最大高度。',
      },
    },
    {
      name: 'stackOffset',
      type: "'expand' | 'none' | 'wiggle' | 'silhouette' | 'sign'",
      defaultVal: "'none'",
      isOptional: false,
      desc: {
        'en-US': `The type of offset function used to generate the lower and upper
          values in the series array. The four types are built-in offsets in d3-shape.`,
        'zh-CN': '堆积柱图的偏移类型，这里提供的配置是 d3 支持的四种类型。',
      },
      examples: [
        {
          name: 'A barChart stacked by sign of value',
          url: '/examples/BarChartStackedBySign',
        },
        {
          name: 'D3 stackOffset',
          url: 'https://github.com/d3/d3-shape#stack_offset',
          isExternal: true,
        },
      ],
    },
    {
      name: 'reverseStackOrder',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: true,
      desc: {
        'en-US': `If false set, stacked items will be rendered left to right. If true set, stacked items
          will be rendered right to left. (Render direction affects SVG layering, not x position.)`,
        'zh-CN':
          '如果设置为false，堆叠的项目将从左到右呈现。如果真正设置，堆叠的项目将从右到左呈现。 （渲染方向影响SVG分层，而不影响x位置。）',
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
    {
      name: 'onDoubleClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of dblclick in this chart.',
      },
    },
    {
      name: 'onContextMenu',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of contextmenu in this chart.',
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
export default BarChart;
