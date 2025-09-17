import { ApiDoc } from './types.ts';

const AreaChartExample: ApiDoc = {
  name: 'AreaChart',
  desc: {
    'en-US': 'All svg elements can be added into the AreaChart component, such as defs, linearGradient, etc.',
    'zh-CN': 'AreaChart 支持添加任何类型的 svg 元素作为子节点，包括 defs、linearGradient 等等。',
  },
  props: [
    {
      name: 'layout',
      type: "'horizontal' | 'vertical'",
      defaultVal: "'horizontal'",
      isOptional: false,
      desc: {
        'en-US': 'The layout of area in the chart.',
        'zh-CN': '区域图的布局类型，是横向的还是纵向的。',
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
          "When syncId is provided, allows customisation of how the charts will synchronize tooltips and brushes. Using 'index' (default setting), other charts will reuse current datum's index within the data array. In cases where data does not have the same length, this might yield unexpected results. In that case use 'value' which will try to match other charts values, or a fully custom function which will receive tick, data as argument and should return an index.",
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The width of chart container.',
        'zh-CN': '图表的宽度。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The height of chart container.',
        'zh-CN': '图表的高度。',
      },
    },
    {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
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
      name: 'stackOffset',
      type: "'expand' | 'none' | 'wiggle' | 'silhouette'",
      defaultVal: "'none'",
      isOptional: false,
      desc: {
        'en-US':
          'The type of offset function used to generate the lower and upper values in the series array. The four types are built-in offsets in d3-shape.',
        'zh-CN': '堆积区域图的偏移类型，这里提供的配置是 d3 支持的四种类型。',
      },
      examples: [
        {
          name: "An AreaChart with stackOffset specified to 'expand'",
          url: '/examples/PercentAreaChart',
        },
        {
          name: 'D3 stackOffset',
          url: 'https://github.com/d3/d3-shape#stack_offset',
          isExternal: true,
        },
      ],
    },
    {
      name: 'baseValue',
      type: "Number | 'dataMin' | 'dataMax' | 'auto'",
      defaultVal: 'auto',
      isOptional: false,
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
    'Area',
    'Customized',
    'validate svg elements...',
  ],
};

export default AreaChartExample;
