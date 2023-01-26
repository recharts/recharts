export default {
  name: 'Text',
  props: [
    {
      name: 'scaleToFit',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'Scale the text to fit the width or not.',
        'zh-CN': '是否通过缩放比例还适应宽度。',
      },
    },
    {
      name: 'angle',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The rotate angle of Text.',
        'zh-CN': '文本的旋转角度。',
      },
    },
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The width of Text. When the width is specified to be a number, the text will warp auto by calculating the width of text.',
        'zh-CN': '文本的宽度。当宽度被指定为一个数值时，会通过计算宽度自动换行。',
      },
    },
    {
      name: 'textAnchor',
      type: "'start' | 'middle' | 'end' | 'inherit'",
      defaultVal: 'start',
      isOptional: false,
    },
    {
      name: 'verticalAnchor',
      type: "'start' | 'middle' | 'end'",
      defaultVal: 'end',
      isOptional: false,
    },
  ],
};
