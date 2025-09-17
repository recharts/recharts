export default {
  name: 'RadarChart',
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
      name: 'data',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The source data, in which each element is an object.',
        'zh-CN': '输入数据，现在支持的类型是对象数组。',
      },
      format: [
        "[{ 'subject': 'a', 'key': 120, 'fullMark': 150 }]",
        "[{ 'subject': 'a', 'key': 100, 'secondKey': 50, 'fullMark': 150 }]",
      ],
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
      defaultVal: '90',
      isOptional: false,
      desc: {
        'en-US': 'The angle of first radial direction line.',
        'zh-CN': '起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。',
      },
    },
    {
      name: 'endAngle',
      type: 'Number',
      defaultVal: '-270',
      isOptional: false,
      desc: {
        'en-US':
          "The angle of last point in the circle which should be startAngle - 360 or startAngle + 360. We'll calculate the direction of chart by 'startAngle' and 'endAngle'.",
        'zh-CN':
          '圆周最后一个点的角度，默认为 -270 度，必须为 startAngle - 360 或者 startAngle + 360。0 度为圆心的正右方。',
      },
    },
    {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US':
          'The inner radius of first circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
        'zh-CN':
          '雷达图最内侧网格的半径，一般为 0。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
      },
    },
    {
      name: 'outerRadius',
      type: 'Percentage | Number',
      defaultVal: "'80%'",
      isOptional: false,
      desc: {
        'en-US':
          'The outer radius of last circle grid. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
        'zh-CN':
          '雷达图最外侧网格的半径，一般为 0。如果值为百分比，我们首先会根据圆心的坐标、图表的宽度、图表的高度计算一个最大半径，然后根据这个最大半径来计算真实的半径。',
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
      name: 'clockWise',
      type: 'Bool',
      deprecated: true,
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': 'The direction of clockwise.',
        'zh-CN': '是否顺时针',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': "The function will be called when mouse enter the 'Radar'.",
        'zh-CN': '雷达图 mouseenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': "The function will be called when mouse leave the 'Radar'.",
        'zh-CN': '雷达图 mouseleave 事件的回调函数。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': "The function will be called when click the 'Radar'.",
        'zh-CN': '雷达图 click 事件的回调函数。',
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
    'Radar',
    'Customized',
    'validate svg elements...',
  ],
};
