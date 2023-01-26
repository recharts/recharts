export default {
  name: 'Sector',
  props: [
    {
      name: 'cx',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
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
      desc: {
        'en-US': 'The y-coordinate of center.',
        'zh-CN': '圆心的 y 坐标。',
      },
    },
    {
      name: 'innerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The inner radius of the sector.',
        'zh-CN': '楔子的内径。',
      },
    },
    {
      name: 'outerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The outer radius of the sector.',
        'zh-CN': '楔子的外径。',
      },
    },
    {
      name: 'startAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The start angle of the sector.',
        'zh-CN': '楔子的起始角度。',
      },
    },
    {
      name: 'endAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The end angle of the sector.',
        'zh-CN': '楔子的结束角度。',
      },
    },
    {
      name: 'cornerRadius',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The radius of corners.',
        'zh-CN': '拐角圆的半径。如果值为 0，不绘制拐角的圆角。',
      },
    },
    {
      name: 'forceCornerRadius',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'Whether or not force to render round corner when the angle of sector is very small',
        'zh-CN': '当角度非常小的时候，是否强制设置拐角的圆角。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the sector',
        'zh-CN': '楔子 click 事件的回调函数。',
      },
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the sector',
        'zh-CN': '楔子 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the sector',
        'zh-CN': '楔子 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the sector',
        'zh-CN': '楔子 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the sector',
        'zh-CN': '楔子 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the sector',
        'zh-CN': '楔子 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of moustenter on the sector',
        'zh-CN': '楔子 moustenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the sector',
        'zh-CN': '楔子 mouseleave 事件的回调函数。',
      },
    },
  ],
};
