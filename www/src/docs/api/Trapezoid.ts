export default {
  name: 'Trapezoid',
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of top left point of the trapezoid.',
        'zh-CN': '矩形左上角的 x 坐标',
      },
    },
    {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of top left point of the trapezoid.',
        'zh-CN': '矩形左上角的 y 坐标',
      },
    },
    {
      name: 'upperWidth',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The width of the upper horizontal side of the trapezoid.',
      },
    },
    {
      name: 'lowerWidth',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The width of the lower horizontal side of the trapezoid.',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The height of trapezoid.',
        'zh-CN': '矩形的高度。',
      },
    },
    {
      name: 'isUpdateAnimationActive',
      type: 'Boolean',
      defaultVal: 'false',
      desc: {
        'en-US':
          'If set to true, trapezoid will update and render with a gradual fade-in animation from left to right.',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the trapezoid',
        'zh-CN': '矩形 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the trapezoid',
        'zh-CN': '矩形 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the trapezoid',
        'zh-CN': '矩形 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the trapezoid',
        'zh-CN': '矩形 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the trapezoid',
        'zh-CN': '矩形 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the trapezoid',
        'zh-CN': '矩形 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter on the trapezoid',
        'zh-CN': '矩形 mouseenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the trapezoid',
        'zh-CN': '矩形 mouseleave 事件的回调函数。',
      },
    },
  ],
};
