import { ApiDoc } from './types.ts';

export const baseCartesianChartAPIProps: ApiDoc['props'] = [
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
];

export const stackedChartAPIProps: ApiDoc['props'] = [
  {
    name: 'stackOffset',
    type: "'sign' | 'expand' | 'none' | 'wiggle' | 'silhouette' | 'positive'",
    defaultVal: 'none',
    isOptional: false,
    desc: {
      'en-US': `The type of offset function used to generate the lower and upper values in the series array.
        The types are built-in offsets in d3-shape.
        Only applicable for stacked Area or Bar charts.
        Has no effect when the stackId prop is not set on Area or Bar components.`,
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
    defaultVal: false,
    isOptional: true,
    desc: {
      'en-US': `If false set, stacked items will be rendered left to right. If true set, stacked items
          will be rendered right to left. Render direction affects SVG layering, not x position.`,
      'zh-CN':
        '如果设置为false，堆叠的项目将从左到右呈现。如果真正设置，堆叠的项目将从右到左呈现。 （渲染方向影响SVG分层，而不影响x位置。）',
    },
  },
];
