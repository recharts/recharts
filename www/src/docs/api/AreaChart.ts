import { ApiDoc } from './types.ts';

export const AreaChartAPI: ApiDoc = {
  name: 'AreaChart',
  desc: {
    'en-US': 'All svg elements can be added into the AreaChart component, such as defs, linearGradient, etc.',
    'zh-CN': 'AreaChart 支持添加任何类型的 svg 元素作为子节点，包括 defs、linearGradient 等等。',
  },
  props: [
    {
      name: 'layout',
      type: "'horizontal' | 'vertical'",
      defaultVal: 'horizontal',
      isOptional: false,
      desc: {
        'en-US': 'The layout of chart defines the orientation of axes, graphical items, and tooltip.',
        'zh-CN': '图表的布局决定了坐标轴、图形元素以及提示信息的方向。',
      },
    },
    {
      name: 'syncId',
      type: 'String',
      isOptional: true,
      desc: {
        'en-US': 'Charts with the same syncId will synchronize Tooltip and Brush events.',
        'zh-CN': '具有相同 syncId 的图表会同步显示提示信息和刷选区域。',
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
      defaultVal: 'index',
      isOptional: true,
      desc: {
        'en-US':
          'Customize how the charts will synchronize tooltips and brushes. ' +
          '`index`: synchronize using the data index in the data array. Index expects that all data has the same length. ' +
          '`value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout). ' +
          'function: a custom sync method which receives tick and data as argument and returns an index.',
        'zh-CN':
          '自定义图表同步提示信息和刷选区域的方式。' +
          '`index`：通过数据在数据数组中的索引进行同步。使用索引时，要求所有图表的数据长度相同。' +
          '`value`：通过类目轴上的数据值进行同步（类目轴指的是水平布局下的 X 轴，或垂直布局下的 Y 轴）。' +
          'function：自定义同步方法，该方法会接收刻度值和数据作为参数，并返回一个索引值。',
      },
    },
    {
      name: 'width',
      type: 'Percent | Number',
      isOptional: false,
      desc: {
        'en-US': 'The width of chart container. Can be a number or a percent string like "100%".',
        'zh-CN': '图表的宽度。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The height of chart container. Can be a number or a percent string like "100%".',
        'zh-CN': '图表的高度。',
      },
    },
    {
      name: 'data',
      type: 'Array',
      isOptional: false,
      desc: {
        'en-US': 'The source data. Each element should be an object.',
        'zh-CN': '输入数据，现在支持的类型是对象数组。',
      },
      format: ["[{ name: 'a', value: 12 }]", "[{ name: 'a', value: [5, 12] }]"],
    },
    {
      name: 'margin',
      type: 'Object',
      defaultVal: '{"top":5,"right":5,"bottom":5,"left":5}',
      isOptional: false,
      desc: {
        'en-US': 'Empty space around the container.',
        'zh-CN': '图表四周的留白大小，支持传入部分值（如： { top: 5 }）',
      },
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    },
    {
      name: 'stackOffset',
      type: "'expand' | 'none' | 'wiggle' | 'silhouette'",
      defaultVal: 'none',
      isOptional: false,
      desc: {
        'en-US':
          'The type of offset function used to generate the lower and upper values in the series array. The types are built-in offsets in d3-shape. Only applicable for stacked Area or Bar charts. Has no effect when the stackId prop is not set on Area or Bar components.',
        'zh-CN':
          '用于生成系列数组中上下值的偏移函数类型。四种类型均为 d3-shape 内置的偏移方式。仅适用于堆叠区域图或堆叠柱状图。当 Area 或 Bar 组件上未设置 stackId 属性时，该属性不生效。',
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
      type: "Number | 'dataMin' | 'dataMax'",
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
