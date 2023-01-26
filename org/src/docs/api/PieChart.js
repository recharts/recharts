export default {
  name: 'PieChart',
  props: [
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
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 0, right: 0, bottom: 0, left: 0 }',
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
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The function will be called when click sectors of a pie chart.',
        'zh-CN':
          '饼图每个楔子的 click 事件的回调函数，如果当子组件 Pie 上也绑定了同样的事件，子组件的事件回调函数才会被绑定。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The function will be called when mouse enter sectors of a pie chart.',
        'zh-CN':
          '饼图每个楔子的 mouseenter 事件的回调函数，如果当子组件 Pie 上也绑定了同样的事件，子组件的事件回调函数才会被绑定。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The function will be called when mouse leave sectors of a pie chart.',
        'zh-CN':
          '饼图每个楔子的 mouseleave 事件的回调函数，如果当子组件 Pie 上也绑定了同样的事件，子组件的事件回调函数才会被绑定。',
      },
    },
  ],
  parentComponents: ['ResponsiveContainer'],
  childrenComponents: [
    'PolarAngleAxis',
    'PolarRadiusAxis',
    'PolarGrid',
    'Legend',
    'Tooltip',
    'Pie',
    'Customized',
    'validate svg elements...',
  ],
};
