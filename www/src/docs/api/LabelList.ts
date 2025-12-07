export const LabelListAPI = {
  name: 'LabelList',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      isOptional: false,
      desc: {
        'en-US':
          'Decides how to extract the value of each label from the data: ' +
          '- `string`: the name of the field in the data object; ' +
          '- `number`: the index of the field in the data; ' +
          '- `function`: a function that receives the data object and returns the value of each label. ' +
          'If set, then valueAccessor will be ignored. ' +
          'Scatter requires this prop to be set. Other graphical components will show the same value as the dataKey of the component by default.',
        'zh-CN': '展示 label 值对应的数据的 key。',
      },
    },
    {
      name: 'valueAccessor',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The accessor function to get the value of each label. Is ignored if dataKey is specified.',
        'zh-CN': '获取label值的方法',
      },
    },
    {
      name: 'content',
      type: 'ReactElement | Function',
      isOptional: true,
      desc: {
        'en-US':
          'If set a React element, the option is the customized React element of rendering each label.  If set a function, the function will be called to render each label content.',
        'zh-CN':
          '定制每个 label 展示的内容。如果值为 React element，会克隆这个元素来渲染每个 label 的内容。如果值为函数，会调用这个函数来生成每个 label 的内容。',
      },
      format: [
        '<LabelList content={<CustomizedLabel external={external} />} />',
        '<LabelList content={renderLabel} />',
      ],
      examples: [
        {
          name: 'Customized content of LabelList',
          url: '/examples/BarChartWithMinHeight',
        },
      ],
    },
    {
      name: 'position',
      type: '"top" | "left" | "right" | "bottom" | "inside" | "outside" | "insideLeft" | "insideRight" | "insideTop" | "insideBottom" | "insideTopLeft" | "insideBottomLeft" | "insideTopRight" | "insideBottomRight" | "insideStart" | "insideEnd" | "end" | "center"',
      isOptional: true,
      desc: {
        'en-US': 'The position of label relative to the view box.',
        'zh-CN': '每个label相对于它的可视区域的位置',
      },
    },
    {
      name: 'offset',
      type: 'Number',
      defaultVal: 5,
      isOptional: false,
      desc: {
        'en-US': 'The offset to the specified "position". Direction of the offset depends on the position.',
        'zh-CN': '相对于"设置位置"的偏移量',
      },
    },
    {
      name: 'formatter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The formatter function of label value which has only one parameter - the value of label.',
        'zh-CN': '标注值的格式化方法，只有一个参数：标注值',
      },
    },
    {
      name: 'clockWise',
      type: 'boolean',
      defaultVal: false,
      isOptional: true,
      desc: {
        'en-US': 'The parameter to calculate the view box of label in radial charts.',
        'zh-CN': '用于极坐标系图表中判断 label 可视区域的参数',
      },
    },
    {
      name: 'id',
      type: 'String',
      isOptional: true,
      desc: {
        'en-US':
          'The unique id of this component, which will be used to generate unique clip path id internally. This props is suggested to be set in SSR.',
        'zh-CN': '唯一的id，会用于生成内部的clip path id 等，建议使用SSR的时候设置这个属性。',
      },
    },
  ],
  parentComponents: ['Area', 'Bar', 'Line', 'Scatter', 'Pie', 'Radar', 'RadialBar'],
};
