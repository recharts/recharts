export default {
  name: 'PolarAngleAxis',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The key of a group of data which should be unique to show the meaning of angle axis.',
        'zh-CN': '“角度轴”对应数据属性的 key 。',
      },
    },
    {
      name: 'cx',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of center.',
        'zh-CN': '圆心的 x 坐标。',
      },
    },
    {
      name: 'cy',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of center.',
        'zh-CN': '圆心的 y 坐标。',
      },
    },
    {
      name: 'radius',
      type: 'Percentage | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US':
          'The outer radius of circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
        'zh-CN':
          '角度轴的半径大小。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
      },
    },
    {
      name: 'axisLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, axis line will not be drawn. If true set, axis line will be drawn which have the props calculated internally. If object set, axis line will be drawn which have the props mergered by the internal calculated props and the option.',
        'zh-CN': '轴线配置。当值为 false 时，不绘制轴线。当值为对象类型时，会把这个对象解析成 轴线 的属性配置。',
      },
    },
    {
      name: 'axisLineType',
      type: 'String',
      defaultVal: '"circle" | "polygon"',
      isOptional: false,
      desc: {
        'en-US': 'The type of axis line.',
        'zh-CN': '轴线的类型：圆、多边形。',
      },
    },
    {
      name: 'tickLine',
      type: 'Bool | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, tick lines will not be drawn. If true set, tick lines will be drawn which have the props calculated internally. If object set, tick lines will be drawn which have the props mergered by the internal calculated props and the option.',
        'zh-CN': '刻度线配置。当值为 false 时，不绘制刻度线。当值为对象类型时，会把这个对象解析成 刻度线 的属性配置。',
      },
    },
    {
      name: 'tick',
      type: 'Bool | Object | ReactElement | Function',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, ticks will not be drawn. If true set, ticks will be drawn which have the props calculated internally. If object set, ticks will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom tick element. If set a function, the function will be called to render customized ticks.',
        'zh-CN':
          '刻度配置。当值为 false 时，不绘制刻度。当值为对象类型时，会把这个对象解析成 刻度 的属性配置。当值为 React element，会克隆这个元素来渲染刻度。',
      },
    },
    {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': "The array of every tick's value and angle.",
        'zh-CN': '指定需要展示的刻度，每个元素形如：[{ value: "a", angle: 30 }]。',
      },
    },
    {
      name: 'orient',
      type: 'String',
      defaultVal: 'outer',
      isOptional: false,
      desc: {
        'en-US': 'The orientation of axis text.',
        'zh-CN': '刻度的方向：内部、外部。',
      },
    },
    {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The function to formatting tick.',
        'zh-CN': '刻度格式化函数。',
      },
    },
    {
      name: 'type',
      type: "'number' | 'category'",
      defaultVal: "'category'",
      isOptional: false,
      desc: {
        'en-US': 'The type of axis.',
        'zh-CN': '角度轴的类型：数值轴、类目轴。',
      },
    },
    {
      name: 'allowDuplicatedCategory',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'Allow the axis has duplicated categorys or not when the type of axis is "category".',
        'zh-CN': '是否允许类目轴有重复的类目。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the ticks of this axis',
        'zh-CN': '刻度 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the the ticks of this axis',
        'zh-CN': '刻度 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the ticks of this axis',
        'zh-CN': '刻度 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the ticks of this axis',
        'zh-CN': '刻度 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the ticks of this axis',
        'zh-CN': '刻度 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the ticks of this axis',
        'zh-CN': '刻度 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of moustenter on the ticks of this axis',
        'zh-CN': '刻度 moustenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the ticks of this axis',
        'zh-CN': '刻度 mouseleave 事件的回调函数。',
      },
    },
  ],
  parentComponents: ['RadarChart', 'RadialBarChart'],
  childrenComponents: ['Label'],
};
