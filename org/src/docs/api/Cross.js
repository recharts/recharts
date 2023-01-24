export default {
  name: 'Cross',
  props: [
    {
      name: 'x',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of the vertical line of the cross.',
        'zh-CN': '竖直线的 x 坐标。',
      },
    },
    {
      name: 'y',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of the horizontal line of the cross.',
        'zh-CN': '水平线的 y 坐标。',
      },
    },
    {
      name: 'top',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of the top left point in the boundary box of the cross.',
        'zh-CN': '左上角的 y 坐标。',
      },
    },
    {
      name: 'left',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of the top left point in the boundary box of the cross.',
        'zh-CN': '左上角的 x 坐标。',
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The width of the horizontal line of the cross.',
        'zh-CN': '十字架的宽度，即水平线的宽度。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The height of the vertical line of the cross.',
        'zh-CN': '十字架的高度，即竖直线的高度。',
      },
    },
  ],
};
