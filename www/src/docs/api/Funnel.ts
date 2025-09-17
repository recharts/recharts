export default {
  name: 'Funnel',
  props: [
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
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The key or getter of a group of data which should be unique in a LineChart.',
        'zh-CN': '每个区域图对应一个唯一的 key，需要在 FunnelChart 中保证唯一。',
      },
    },
    {
      name: 'nameKey',
      type: 'String',
      defaultVal: "'name'",
      isOptional: false,
      desc: {
        'en-US': "The key of each sector's name.",
        'zh-CN': '"name" 属性对应的 key 。',
      },
    },
    {
      name: 'legendType',
      type: "'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none'",
      defaultVal: "'line'",
      isOptional: true,
      desc: {
        'en-US': "The type of icon in legend.  If set to 'none', no legend item will be rendered.",
        'zh-CN': '对应的图例 icon 的类型。',
      },
    },
    {
      name: 'activeShape',
      type: 'Object | ReactElement | Function | boolean',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US': 'The customized shape to be rendered if shape is active via Tooltip, or active index prop is set.',
        'zh-CN': '如果形状通过工具提示处于活动状态，或设置了活动索引道具，则将渲染自定义形状。',
      },
    },
    {
      name: 'shape',
      type: 'Object | ReactElement | Function | boolean',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US': 'The customized shape to be rendered.',
        'zh-CN': '要渲染的自定义形状。',
      },
    },
    {
      name: 'trapezoids',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The coordinates of all the trapezoids in the funnel, usually calculated internally.',
        'zh-CN': '梯形的坐标点。当使用 FunnelChart 作为父组件的时候，不需要自己计算，父组件会计算好。',
      },
      format: ['[{x: 12, y: 12, upperWidth: 240, lowerWidth: 22, height: 80,}]'],
    },
    {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of line will be disabled.',
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
      name: 'id',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The unique id of this component, which will be used to generate unique clip path id internally. This props is suggested to be set in SSR.',
        'zh-CN': '唯一的id，会用于生成内部的clip path id 等，建议使用SSR的时候设置这个属性。',
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
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the area in this group',
        'zh-CN': '曲线 click 事件的回调函数。',
      },
      examples: [
        {
          name: 'A BarChart with customized click event handler',
          url: '/examples/BarChartWithCustomizedEvent',
        },
      ],
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the area in this group',
        'zh-CN': '曲线 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the area in this group',
        'zh-CN': '曲线 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the area in this group',
        'zh-CN': '曲线 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the area in this group',
        'zh-CN': '曲线 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the area in this group',
        'zh-CN': '曲线 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter on the area in this group',
        'zh-CN': '曲线 mouseenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the area in this group',
        'zh-CN': '曲线 mouseleave 事件的回调函数。',
      },
    },
  ],
  parentComponents: ['FunnelChart'],
  childrenComponents: ['LabelList', 'Cell'],
};
