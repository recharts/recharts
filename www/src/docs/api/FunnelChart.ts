export default {
  name: 'BarChart',
  props: [
    {
      name: 'layout',
      type: '"centric"',
      defaultVal: '"centric"',
      isOptional: false,
      desc: {
        'en-US': 'The layout of bars in the chart.',
        'zh-CN': '布局类型，是横向的还是纵向的。',
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
  childrenComponents: ['Funnel', 'Legend', 'Tooltip', 'Customized', 'validate svg elements...'],
};
