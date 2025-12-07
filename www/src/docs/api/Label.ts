export const LabelAPI = {
  name: 'Label',
  props: [
    {
      name: 'position',
      type: '"top" | "left" | "right" | "bottom" | "inside" | "outside" | "insideLeft" | "insideRight" | "insideTop" | "insideBottom" | "insideTopLeft" | "insideBottomLeft" | "insideTopRight" | "insideBottomRight" | "insideStart" | "insideEnd" | "end" | "center"',
      defaultVal: 'middle',
      isOptional: true,
      desc: {
        'en-US': 'The position of label relative to the view box.',
        'zh-CN': 'label相对于可视区域的位置',
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
      name: 'value',
      type: 'String | Number',
      isOptional: true,
      desc: {
        'en-US': 'The value of label can be set as children or as the `value` prop',
        'zh-CN': '标注值',
      },
      format: ['<Label value="foo" />'],
    },
    {
      name: 'children',
      type: 'String | Number',
      isOptional: true,
      desc: {
        'en-US': 'The value of label can be set as children or as the `value` prop',
        'zh-CN': '标注值',
      },
      format: [
        `<Label>
  any string or number
</Label>
        `,
      ],
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
      name: 'content',
      type: 'ReactElement | Function',
      isOptional: true,
      desc: {
        'en-US':
          'If set a React element, the option is the custom react element of rendering label. If set a function, the function will be called to render label content.',
        'zh-CN':
          '定制 Label 展示的内容。如果值为 React element，会克隆这个元素来渲染 Label 的内容。如果值为函数，会调用这个函数来生成 Label 的内容。',
      },
      format: ['<Label content={<CustomizedLabel external={external} />} />', '<Label content={renderLabel} />'],
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
    {
      name: 'viewBox',
      type: 'String | Number',
      isOptional: false,
      desc: {
        'en-US':
          'The box of viewing area. Used for positioning. If undefined, viewBox will be calculated based on surrounding context.',
        'zh-CN': '图表的可视区域。',
      },
    },
  ],
  parentComponents: ['XAxis', 'YAxis', 'ReferenceArea', 'ReferenceDot', 'ReferenceLine', 'Pie', 'PolarRadiusAxis'],
};
