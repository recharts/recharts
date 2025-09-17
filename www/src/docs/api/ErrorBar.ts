export default {
  name: 'ErrorBar',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      isOptional: false,
      desc: {
        'en-US': `The key of a group of error values in data. The error values can be a single value for
          symmetric error bars or an array of a lower and upper error value for asymmetric error
          bars.`,
        'zh-CN':
          '展示误差线对应的数据的 key。当对应的元素是一个数值时，会用来展示对称的误差线。当对应的元素是一个二元数组时，可以用来设置非对称的误差线。',
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: '5',
      isOptional: true,
      desc: {
        'en-US': 'The width of the error bar ends.',
        'zh-CN': '误差线的宽度。',
      },
    },
    {
      name: 'strokeWidth',
      type: 'String | Number',
      defaultVal: '1.5',
      isOptional: true,
      desc: {
        'en-US': 'The width of the lines used to make the error bars.',
        'zh-CN': '误差线的宽度。',
      },
    },
    {
      name: 'stroke',
      type: 'String',
      defaultVal: 'black',
      isOptional: true,
      desc: {
        'en-US': 'The color of the error bars.',
        'zh-CN': '误差线的颜色。',
      },
    },
    {
      name: 'direction',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': `Only used for ScatterChart with error bars in two directions. Only accepts a value of
          "x" or "y" and makes the error bars lie in that direction.`,
        'zh-CN':
          '当绘制散点图的的误差线时，用来设置方向。当值为 "x" 时，表示平行于 x 轴方向的误差线。当值为 "y" 时，表示平行于 y 轴方向的误差线。',
      },
    },
  ],
  parentComponents: ['Bar', 'Line', 'Scatter'],
};
