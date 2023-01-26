export default {
  name: 'Treemap',
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
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: "'value'",
      isOptional: false,
      desc: {
        'en-US': 'The key of a group of data which should be unique in a treemap.',
        'zh-CN': '指定 Treemap 展示的数值所对应的 key。',
      },
    },
    {
      name: 'aspectRatio',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': "The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given.",
        'zh-CN': '宽高比。在生成 Treemap 的过程中，每个矩形都会尽量按照这个宽高比来生成。',
      },
    },
    {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of area will be disabled.',
        'zh-CN': '当值为 false，不开启动画。',
      },
    },
    {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: {
        'en-US': 'Specifies when the animation should begin, the unit of this option is ms.',
        'zh-CN': '声明组件挂载后，开始运行动画的间隔时长，单位为毫秒。',
      },
    },
    {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: {
        'en-US': 'Specifies the duration of animation, the unit of this option is ms.',
        'zh-CN': '声明动画的运行时长，单位为毫秒。',
      },
    },
    {
      name: 'animationEasing',
      type: "'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'",
      defaultVal: "'ease'",
      isOptional: false,
      desc: {
        'en-US': 'The type of easing function.',
        'zh-CN': '动画缓动函数的类型。',
      },
    },
    {
      name: 'onAnimationStart',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of animation start',
        'zh-CN': '区域图动画 start 事件的回调函数。',
      },
    },
    {
      name: 'onAnimationEnd',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of animation end',
        'zh-CN': '区域图动画 end 事件的回调函数。',
      },
    },
  ],
  parentComponents: ['ResponsiveContainer'],
};
