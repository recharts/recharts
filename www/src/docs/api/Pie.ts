export default {
  name: 'Pie',
  props: [
    {
      name: 'cx',
      type: 'Percentage | Number',
      defaultVal: "'50%'",
      isOptional: false,
      desc: {
        'en-US':
          'The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container width.',
        'zh-CN': '圆心的x坐标，如果值为百分比，会根据图表的宽度来计算最后的值。',
      },
    },
    {
      name: 'cy',
      type: 'Percentage | Number',
      defaultVal: "'50%'",
      isOptional: false,
      desc: {
        'en-US':
          'The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container height.',
        'zh-CN': '圆心的y坐标，如果值为百分比，会根据图表的高度来计算最后的值。',
      },
    },
    {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US':
          'The inner radius of all the sectors. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
        'zh-CN':
          '饼图的内径。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
      },
    },
    {
      name: 'outerRadius',
      type: 'Percentage | Number | Function',
      defaultVal: "'80%'",
      isOptional: false,
      desc: {
        'en-US':
          'The outer radius of all the sectors. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy. Function should return a string percentage or number',
        'zh-CN':
          '饼图的外径。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
      },
    },
    {
      name: 'startAngle',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: {
        'en-US': 'The start angle of first sector.',
        'zh-CN': '楔子的起始角度，默认为 0 度，0 度为圆心的正右方。',
      },
    },
    {
      name: 'endAngle',
      type: 'Number',
      defaultVal: 360,
      isOptional: false,
      desc: {
        'en-US': 'The end angle of last sector, which should be unequal to startAngle.',
        'zh-CN':
          '楔子的结束角度，默认为 360 度，360 度为圆心的正右方。结束角度必须和起始角度不同，当结束角度大于起始角度，楔子按照逆时针排列。当结束角度小于起始角度，楔子按照顺时针排列。',
      },
    },
    {
      name: 'minAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The minimum angle of each unzero data.',
        'zh-CN': '非零数值对应楔子的最小角度。',
      },
    },
    {
      name: 'paddingAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The angle between two sectors.',
        'zh-CN': '两个楔子之前的预留的夹角。',
      },
      examples: [
        {
          name: 'Pie with nozero padding angle',
          url: '/examples/PieChartWithPaddingAngle',
        },
      ],
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
      name: 'dataKey',
      type: 'String | Number | Function',
      isOptional: false,
      desc: {
        'en-US': "The key of each sector's value.",
        'zh-CN': '"value" 属性对应的 key。',
      },
    },
    {
      name: 'valueKey',
      type: 'String',
      defaultVal: "'value'",
      isOptional: false,
      deprecated: true,
      desc: {
        'en-US': "Use 'dataKey' alternatively, The key of each sector's value.",
        'zh-CN': '"value" 属性对应的 key。',
      },
    },
    {
      name: 'legendType',
      type: "'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none'",
      defaultVal: "'rect'",
      isOptional: false,
      desc: {
        'en-US': "The type of icon in legend.  If set to 'none', no legend item will be rendered.",
        'zh-CN': '对应的图例 icon 的类型。',
      },
    },
    {
      name: 'label',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: true,
      desc: {
        'en-US':
          'If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
        'zh-CN':
          '图形上的文本标签。当值为 false ，不展示文本标签。当值为 true，会根据 Bar 的属性配置来展示文本标签。当值为一个对象的时候，会把这个对象解析为 文本标签 的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“文本标签”。当值是一个 函数 时，会调用这个函数去渲染自定义的“文本标签”。',
      },
      examples: [
        {
          name: 'A pie chart with customized label',
          url: '/examples/PieChartWithCustomizedLabel',
        },
      ],
    },
    {
      name: 'labelLine',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, label lines will not be drawn. If true set, label lines will be drawn which have the props calculated internally. If object set, label lines will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom label line element. If set a function, the function will be called to render customized label line.',
        'zh-CN':
          '文本标签与楔子的连线。当值为 false ，不展示连线。当值为 true，会根据 Bar 的属性配置来展示连线。当值为一个对象的时候，会把这个对象解析为 连线 的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“连线”。当值是一个 函数 时，会调用这个函数去渲染自定义的“连线”。',
      },
      examples: [
        {
          name: 'A pie chart with customized label',
          url: '/examples/PieChartWithCustomizedLabel',
        },
      ],
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
      name: 'activeShape',
      type: 'Object | ReactElement | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The shape of active sector.',
        'zh-CN': '激活楔子的形状。',
      },
      examples: [
        {
          name: 'A pie chart with customized active shape',
          url: '/examples/CustomActiveShapePieChart',
        },
      ],
    },
    {
      name: 'inactiveShape',
      type: 'Object | ReactElement | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The shape of inactive sector.',
        'zh-CN': '未激活楔子的形状。',
      },
    },
    {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of pie will be disabled.',
        'zh-CN': '当值为 false，不开启动画。',
      },
    },
    {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: '400',
      isOptional: false,
      desc: {
        'en-US': 'Specifies when the animation should begin, the unit of this option is ms.',
        'zh-CN': '声明组件挂载或更新后，开始运行动画的间隔时长，单位为毫秒。',
      },
    },
    {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: '1500',
      isOptional: false,
      desc: {
        'en-US': 'Specifies the duration of animation, the unit of this option is ms.',
        'zh-CN': '声明动画的运行时长，单位为毫秒。',
      },
    },
    {
      name: 'animationEasing',
      type: "'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | Function",
      defaultVal: "'ease'",
      isOptional: false,
      desc: {
        'en-US': 'The type of easing function.',
        'zh-CN': '动画缓动函数的类型。',
      },
    },
    {
      name: 'rootTabIndex',
      type: 'Number',
      defaultVal: '0',
      isOptional: true,
      desc: {
        'en-US': 'The tabindex of wrapper surrounding the cells.',
        'zh-CN': 'soon',
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
        'zh-CN': '楔子 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the sectors in this group',
        'zh-CN': '楔子 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the sectors in this group',
        'zh-CN': '楔子 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the sectors in this group',
        'zh-CN': '楔子 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the sectors in this group',
        'zh-CN': '楔子 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the sectors in this group',
        'zh-CN': '楔子 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter on the sectors in this group',
        'zh-CN': '楔子 mouseenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the sectors in this group',
        'zh-CN': '楔子 mouseleave 事件的回调函数。',
      },
    },
  ],
  parentComponents: ['PieChart'],
  childrenComponents: ['Cell', 'LabelList'],
};
