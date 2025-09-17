export default {
  name: 'RadialBar',
  props: [
    {
      name: 'cx',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      deprecated: true,
      desc: {
        'en-US': 'The x-coordinate of center.',
        'zh-CN': '圆心的 x 坐标。',
      },
    },
    {
      name: 'cy',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      deprecated: true,
      desc: {
        'en-US': 'The y-coordinate of center.',
        'zh-CN': '圆心的 y 坐标。',
      },
    },
    {
      name: 'startAngle',
      type: 'Number',
      defaultVal: 180,
      isOptional: false,
      deprecated: true,
      desc: {
        'en-US': 'The start angle of all the bars.',
        'zh-CN': '柱条的起始角度。',
      },
    },
    {
      name: 'endAngle',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      deprecated: true,
      desc: {
        'en-US': 'The end angle of all the bars.',
        'zh-CN': '柱条的结束角度。',
      },
    },
    {
      name: 'maxAngle',
      type: 'Number',
      defaultVal: '135',
      isOptional: false,
      deprecated: true,
      desc: {
        'en-US':
          'The angle of the value which has the max absolute value, which should be a positive number and less than Math.abs(endAngle - startAngle).',
        'zh-CN': '柱条对应的最大的角度。这个值必须小于 Math.abs(endAngle - startAngle)。',
      },
    },
    {
      name: 'minAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The minimum angle of each bar.',
        'zh-CN': '柱条的最小度数。',
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
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
        'zh-CN':
          '图形上的文本标签。当值为 false ，不展示文本标签。当值为 true，会根据 Bar 的属性配置来展示文本标签。当值为一个对象的时候，会把这个对象解析为 文本标签 的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“文本标签”。当值是一个 函数 时，会调用这个函数去渲染自定义的“文本标签”。',
      },
    },
    {
      name: 'background',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, background of bars will not be drawn. If true set, background of bars will be drawn which have the props calculated internally. If object set, background of bars will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom background element. If set a function, the function will be called to render customized background.',
        'zh-CN':
          '是否显示背景柱条。当值为 false ，不展示背景柱条。当值为 true，会根据 RadialBar 的属性配置来展示背景柱条。当值为一个对象的时候，会把这个对象解析为 背景柱条 的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“背景柱条”。当值是一个 函数 时，会调用这个函数去渲染自定义的“背景柱条”。',
      },
    },
    {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The source data which each element is an object.',
        'zh-CN': '源数据，对象数组。',
      },
    },
    {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of radial bars will be disabled.',
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
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the sectors in this group',
        'zh-CN': '柱条 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the sectors in this group',
        'zh-CN': '柱条 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the sectors in this group',
        'zh-CN': '柱条 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the sectors in this group',
        'zh-CN': '柱条 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the sectors in this group',
        'zh-CN': '柱条 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the sectors in this group',
        'zh-CN': '柱条 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter on the sectors in this group',
        'zh-CN': '柱条 mouseenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the sectors in this group',
        'zh-CN': '柱条 mouseleave 事件的回调函数。',
      },
    },
  ],
  parentComponents: ['RadialBarChart'],
  childrenComponents: ['Cell', 'LabelList'],
};
