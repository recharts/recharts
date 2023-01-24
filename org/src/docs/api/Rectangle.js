export default {
  name: 'Rectangle',
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of top left point of the rectangle.',
        'zh-CN': '矩形左上角的 x 坐标',
      },
    },
    {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of top left point of the rectangle.',
        'zh-CN': '矩形左上角的 y 坐标',
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The width of rectangle.',
        'zh-CN': '矩形的宽度。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The height of rectangle.',
        'zh-CN': '矩形的高度。',
      },
    },
    {
      name: 'radius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US':
          'If set a value, the option is the radius of all the rounderd corners. If set a array, the option are in turn the radiuses of top-left corner, top-right corner, bottom-right corner, bottom-left corner.',
        'zh-CN':
          '圆角半径配置。当值为数值类型时，表示四个圆角的半径。当值为数组时，可以分别设置左上、右上、右下、左下四个圆角的半径。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the rectangle',
        'zh-CN': '矩形 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the rectangle',
        'zh-CN': '矩形 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the rectangle',
        'zh-CN': '矩形 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the rectangle',
        'zh-CN': '矩形 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the rectangle',
        'zh-CN': '矩形 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the rectangle',
        'zh-CN': '矩形 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of moustenter on the rectangle',
        'zh-CN': '矩形 moustenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the rectangle',
        'zh-CN': '矩形 mouseleave 事件的回调函数。',
      },
    },
  ],
};
