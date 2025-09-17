export default {
  name: 'CartesianAxis',
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of axis.',
        'zh-CN': 'x 坐标',
      },
    },
    {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of axis.',
        'zh-CN': 'y 坐标',
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The width of axis.',
        'zh-CN': '坐标轴的宽度。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The height of axis.',
        'zh-CN': '坐标轴的高度。',
      },
    },
    {
      name: 'orientation',
      type: "'top' | 'bottom' | 'left' | 'right'",
      defaultVal: "'bottom'",
      isOptional: false,
      desc: {
        'en-US': 'The orientation of axis.',
        'zh-CN': '坐标轴的位置。',
      },
    },
    {
      name: 'viewBox',
      type: 'Object',
      defaultVal: '{ x: 0, y: 0, width: 0, height: 0 }',
      isOptional: false,
      desc: {
        'en-US': 'The box of viewing area.',
        'zh-CN': '图表的可视区域。',
      },
    },
    {
      name: 'axisLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.',
        'zh-CN': '轴线配置。当值为 false 时，不绘制轴线。当值为对象类型时，会把这个对象解析成 轴线 的属性配置。',
      },
    },
    {
      name: 'tickLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If set false, no axis tick lines will be drawn. If set a object, the option is the configuration of tick lines.',
        'zh-CN': '刻度线配置。当值为 false 时，不绘制刻度线。当值为对象类型时，会把这个对象解析成刻度线的属性配置。',
      },
    },
    {
      name: 'minTickGap',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: {
        'en-US': 'The minimum gap between two adjacent labels.',
        'zh-CN': '两个刻度之前最小间隔宽度。',
      },
    },
    {
      name: 'tickSize',
      type: 'Number',
      defaultVal: '6',
      isOptional: false,
      desc: {
        'en-US': 'The length of tick line.',
        'zh-CN': '刻度线的长度。',
      },
    },
    {
      name: 'interval',
      type: '"preserveStart" | "preserveEnd" | "preserveStartEnd" | Number',
      defaultVal: "'preserveEnd'",
      isOptional: false,
      desc: {
        'en-US':
          'If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd", the ticks which is to be shown or hidden will be calculated automatically.',
        'zh-CN':
          '当值为0时，所有的刻度都会展示。如果值为1，则会间隔1个刻度来展示相应的刻度。当值为 "preserveStart" 时，根据刻度的宽度自动计算间隔，在有足够的空间的情况下，会从头部的刻度开始计算。当值为 "preserveEnd" 时，会从尾部的刻度开始计算是否展示。当值为"preserveStartEnd"，会从头部、尾部的刻度开始计算向中间计算是否展示。',
      },
    },
    {
      name: 'tick',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks. If set a React element, the option is the custom react element of drawing ticks. If set a function, the function will be called to render customized tick.',
        'zh-CN':
          '刻度配置。当值为 false 时，不绘制刻度。当值为对象类型时，会把这个对象解析成 刻度 的属性配置。当值为 React element，会克隆这个元素来渲染刻度。',
      },
      examples: [
        {
          name: 'A line chart with customized x-axis tick',
          url: '/examples/CustomizedLabelLineChart',
        },
      ],
    },
    {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
        'zh-CN':
          '当值为简单类型的数值或者字符串时，这个值会被渲染成文字标签。当值为 React element，会克隆这个元素来渲染文字标签。',
      },
    },
    {
      name: 'mirror',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.',
        'zh-CN': '如果值为 true , 将刻度展示在轴的内侧，而不是外侧。',
      },
    },
    {
      name: 'tickMargin',
      type: 'Number',
      isOptional: true,
      desc: {
        'en-US': 'The margin between tick line and tick.',
        'zh-CN': '刻度线和刻度之间的间隔。',
      },
    },
  ],
};
