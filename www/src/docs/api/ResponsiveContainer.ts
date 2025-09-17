export default {
  name: 'ResponsiveContainer',
  desc: {
    'en-US':
      'A container component to make charts adapt to the size of parent container. One of the props width and height should be a percentage string.',
    'zh-CN':
      'ResponsiveContainer 是一个容器型的组件，用来处理图表的宽高需要适配父节点宽高的问题。建议宽度、高度至少有一个属性是百分比，否则可以直接指定图表的宽度、高度。',
  },
  props: [
    {
      name: 'aspect',
      type: ' Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'width / height. If specified, the height will be calculated by width / aspect.',
        'zh-CN': '宽高比。如果指定了这个值，我们会根据 heihgt = width / aspect 来计算高度。',
      },
    },
    {
      name: 'width',
      type: 'Percentage | Number',
      defaultVal: "'100%'",
      isOptional: false,
      desc: {
        'en-US': "The percentage value of the chart's width or a fixed width.",
        'zh-CN': '指定容器的宽度为一个数值，或者父节点宽度的百分比值。',
      },
    },
    {
      name: 'height',
      type: 'Percentage | Number',
      defaultVal: "'100%'",
      isOptional: false,
      desc: {
        'en-US': "The percentage value of the chart's width or a fixed height.",
        'zh-CN': '指定容器的高度为一个数值，或者父节点高度的百分比值。',
      },
    },
    {
      name: 'minWidth',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The minimum width of the container.',
        'zh-CN': '指定容器的最小宽度。',
      },
    },
    {
      name: 'minHeight',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The minimum height of the container.',
        'zh-CN': '指定容器的最小高度。',
      },
    },
    {
      name: 'debounce',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'If specified a positive number, debounced function will be used to handle the resize event.',
        'zh-CN': '如果该值是一个正数，我们会用 debounce 函数来处理 resize 事件，避免 resize 事件频繁触发的问题。',
      },
    },
    {
      name: 'onResize',
      type: 'Function',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US': 'If specified provides a callback providing the updated chart width and height values.',
        'zh-CN': '如果指定，则提供一个回调，提供更新的图表宽度和高度值。',
      },
    },
  ],
  childrenComponents: [
    'AreaChart',
    'BarChart',
    'LineChart',
    'ComposedChart',
    'PieChart',
    'RadarChart',
    'RadialBarChart',
    'ScatterChart',
    'Treemap',
  ],
};
