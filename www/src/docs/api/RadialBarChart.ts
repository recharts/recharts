import { ApiDoc } from './types.ts';

const RadialBarChart: ApiDoc = {
  name: 'RadialBarChart',
  props: [
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
      name: 'data',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: 'The source data which each element is an object.',
      format: ["[{name: 'a', value: 12}]"],
    },
    {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: {
        'en-US': 'The sizes of whitespace around the container.',
        'zh-CN': '图表四周的留白大小，支持传入部分值（如： { top: 5 }）。',
      },
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    },
    {
      name: 'barCategoryGap',
      type: 'Percentage| Number',
      defaultVal: "'10%'",
      isOptional: false,
      desc: {
        'en-US': 'The gap between two bar categories, which can be a percent value or a fixed value.',
        'zh-CN': '两个类目之间的间隔距离，如果值为百分比，会根据类目宽度来计算实际值。',
      },
    },
    {
      name: 'barGap',
      type: 'Number',
      defaultVal: 4,
      isOptional: false,
      desc: {
        'en-US': 'The gap between two bars in the same category.',
        'zh-CN': '某一个类目下，相邻的两个柱条的间隔大小。如果值为百分比，会根据类目宽度来计算实际值。',
      },
    },
    {
      name: 'cx',
      type: 'Percentage | Number',
      defaultVal: "'50%'",
      isOptional: false,
      desc: {
        'en-US':
          'The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of width.',
        'zh-CN': '圆心的 x 坐标，如果值为百分比，会根据图表的宽度来计算最后的值。',
      },
    },
    {
      name: 'cy',
      type: 'Percentage | Number',
      defaultVal: "'50%'",
      isOptional: false,
      desc: {
        'en-US':
          'The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of height.',
        'zh-CN': '圆心的 y 坐标，如果值为百分比，会根据图表的高度来计算最后的值。',
      },
    },
    {
      name: 'startAngle',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: {
        'en-US': 'The start angle of all the bars.',
        'zh-CN': '柱条的起始角度。',
      },
    },
    {
      name: 'endAngle',
      type: 'Number',
      defaultVal: 360,
      isOptional: false,
      desc: {
        'en-US': 'The end angle of all the bars.',
        'zh-CN': '柱条的结束角度。',
      },
    },
    {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: "'30%'",
      isOptional: false,
      desc: {
        'en-US':
          'The innerRadius of the radial bar which is most close to the center. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
        'zh-CN':
          '径向柱图最内侧柱条的内径。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
      },
    },
    {
      name: 'outerRadius',
      type: 'Percentage | Number',
      defaultVal: "'100%'",
      isOptional: false,
      desc: {
        'en-US':
          'The outerRadius of the radial bar which is most far away from the center. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
        'zh-CN':
          '径向柱图最外侧柱条的外径。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
      },
    },
    {
      name: 'barSize',
      type: 'Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'The size of each bar. If the barSize is not specified, the size of bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.',
        'zh-CN':
          '柱条的宽度。如果指定这个值，会根据 barCategoryGap 和 barGap 来计算柱条的宽度，每组柱条的宽度是一样的。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The function will be called when mouse enter bars.',
        'zh-CN':
          '每个柱条的 mouseenter 事件的回调函数，如果当子组件 RadialBar 上也绑定了同样的事件，子组件的事件回调函数才会被绑定。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The function will be called when mouse leave bars.',
        'zh-CN':
          '每个柱条的 mouseleave 事件的回调函数，如果当子组件 RadialBar 上也绑定了同样的事件，子组件的事件回调函数才会被绑定。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The function will be called when click bars.',
        'zh-CN':
          '每个柱条的 click 事件的回调函数，如果当子组件 RadialBar 上也绑定了同样的事件，子组件的事件回调函数才会被绑定。',
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
  childrenComponents: [
    'PolarAngleAxis',
    'PolarRadiusAxis',
    'PolarGrid',
    'Legend',
    'Tooltip',
    'RadialBar',
    'Customized',
    'validate svg elements...',
  ],
};
export default RadialBarChart;
