export default {
  name: 'Radar',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The key of a group of data which should be unique in a radar chart.',
        'zh-CN': '“雷达”对应数据属性的 key ，在雷达图中是唯一的。',
      },
    },
    {
      name: 'points',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The coordinates of all the vertexes of the radar shape, like [{ x, y }].',
        'zh-CN': '雷达所有顶点的坐标，格式如：[{ x, y }]。',
      },
    },
    {
      name: 'shape',
      type: 'Element | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The custom shape element. If set a function, the function will be called to render customized shape.',
        'zh-CN':
          '“雷达”的图形配置，接收多种配置。当值是一个 React Element ，会克隆这个 React Element 来渲染“雷达”。当值是一个 函数 时，会调用这个函数去渲染自定义的“雷达”。',
      },
    },
    {
      name: 'dot',
      type: 'Bool | Object | Element | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, dots will not be drawn. If true set, dots will be drawn which have the props calculated internally. If object set, dots will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element. If set a function, the function will be called to render customized dot.',
        'zh-CN':
          '“雷达”多边形上的点，接收多种配置。当值为 false，不渲染点。当值为 true，点会继承 Radar 的属性配置，例如配置了 Radar 的 stroke 为 "red"， 点会继承这个属性。当值为一个对象的时候，会把这个对象解析为点的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“点”。当值是函数时，会调用这个函数去渲染自定义的“点”。',
      },
    },
    {
      name: 'legendType',
      type: "'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none'",
      defaultVal: "'rect'",
      isOptional: true,
      desc: {
        'en-US': "The type of icon in legend.  If set to 'none', no legend item will be rendered.",
        'zh-CN': '对应的图例 icon 的类型。',
      },
    },
    {
      name: 'label',
      type: 'Bool | Object | Element | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
        'zh-CN':
          '图形上的文本标签。当值为 false，不展示文本标签。当值为 true，会根据 Bar 的属性配置来展示文本标签。当值为一个对象的时候，会把这个对象解析为文本标签的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“文本标签”。当值是函数时，会调用这个函数去渲染自定义的“文本标签”。',
      },
    },
    {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of polygon will be disabled.',
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
        'zh-CN': '声明组件挂载或更新后，开始运行动画的间隔时长，单位为毫秒。',
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
  parentComponents: ['RadarChart'],
  childrenComponents: ['LabelList'],
};
