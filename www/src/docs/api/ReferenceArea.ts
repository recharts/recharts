export default {
  name: 'ReferenceArea',
  props: [
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of x-axis which is corresponding to the data.',
        'zh-CN': '参考区域对应的 x 轴的 id。',
      },
    },
    {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of y-axis which is corresponding to the data.',
        'zh-CN': '参考区域对应的 y 轴的 id。',
      },
    },
    {
      name: 'x1',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'A boundary value of the area. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categorys. If one of x1 or x2 is invalidate, the area will cover along x-axis.',
        'zh-CN':
          '用来描述参考区域 x 坐标的一个边界值，当 x 轴是数值类型的坐标轴时，这个值必须为数值类型。当 x 轴为类目轴时， 这个值必须为 x 轴 domain 中的一个元素。',
      },
    },
    {
      name: 'x2',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'A boundary value of the area. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categorys. If one of x1 or x2 is invalidate, the area will cover along x-axis.',
        'zh-CN':
          '用来描述参考区域 x 坐标的一个边界值，当 x 轴是数值类型的坐标轴时，这个值必须为数值类型。当 x 轴为类目轴时， 这个值必须为 x 轴 domain 中的一个元素。',
      },
    },
    {
      name: 'y1',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'A boundary value of the area. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categorys. If one of y1 or y2 is invalidate, the area will cover along y-axis.',
        'zh-CN':
          '用来描述参考区域 y 坐标的一个边界值，当 y 轴是数值类型的坐标轴时，这个值必须为数值类型。当 y 轴为类目轴时， 这个值必须为 y 轴 domain 中的一个元素。',
      },
    },
    {
      name: 'y2',
      type: 'Number | String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'A boundary value of the area. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categorys. If one of y1 or y2 is invalidate, the area will cover along y-axis.',
        'zh-CN':
          '用来描述参考区域 y 坐标的一个边界值，当 y 轴是数值类型的坐标轴时，这个值必须为数值类型。当 y 轴为类目轴时， 这个值必须为 y 轴 domain 中的一个元素。',
      },
    },
    {
      name: 'alwaysShow',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      deprecated: true,
      desc: {
        'en-US': "Use 'ifOverflow' instead.",
      },
    },
    {
      name: 'ifOverflow',
      type: "'discard' | 'hidden' | 'visible' | 'extendDomain'",
      defaultVal: "'discard'",
      isOptional: false,
      desc: {
        'en-US': `Defines how to draw the reference area if it falls partly outside the canvas.
          If set to 'discard', the reference area will not be drawn at all.
          If set to 'hidden', the reference area will be clipped to the canvas.
          If set to 'visible', the reference area will be drawn completely.
          If set to 'extendDomain', the domain of the overflown axis will be extended such that the reference area fits into the canvas.`,
        'zh-CN': `定義如果參考區域部分落在畫布之外，如何繪製參考區域
          如果設置為“discard“，則根本不會繪製參考區域
          如果設置為“hidden”，參考區域將被裁剪到畫布上
          如果設置為“visible“，參考區域將被完全繪製
          如果設置為“extendDomain”，溢出軸的域將被擴展，以便參考區域適合畫布`,
      },
      examples: [
        {
          name: 'A LineChart with domain extending ReferenceArea',
          url: 'https://codesandbox.io/s/reference-area-ifoverflow-extenddomain-hdo35m',
          isExternal: true,
        },
      ],
    },
    {
      name: 'viewBox',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US':
          'The box of viewing area, which has the shape of {x: someVal, y: someVal, width: someVal, height: someVal}, usually calculated internally.',
        'zh-CN': '图表的可视区域。',
      },
    },
    {
      name: 'xAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The configuration of the corresponding x-axis, usually calculated internally.',
        'zh-CN': 'x 轴配置。',
      },
    },
    {
      name: 'yAxis',
      type: 'Object',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The configuration of the corresponding y-axis, usually calculated internally.',
        'zh-CN': 'y 轴配置。',
      },
    },
    {
      name: 'label',
      type: 'String | Number | ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.',
        'zh-CN':
          '当值为简单类型的数值或者字符串时，这个值会被渲染成文字标签。当值为 React element，会克隆这个元素来渲染文字标签。',
      },
      format: [
        '<ReferenceArea x1="01" x2="08" label="MAX"/>',
        '<ReferenceArea y1={100} y2={500} label={<CustomizedLabel />}/>',
      ],
      examples: [
        {
          name: 'ReferenceLines with label',
          url: '/examples/LineChartWithReferenceLines',
        },
      ],
    },
    {
      name: 'shape',
      type: 'ReactElement | Function',
      isOptional: true,
      desc: {
        'en-US': 'Renders a svg returned by the react element or function.',
      },
      format: ['<ReferenceArea shape={<CustomSvgShape/>}/>'],
      examples: [
        {
          name: 'ReferenceArea with shape',
          url: 'https://codesandbox.io/s/reference-area-shape-502rx',
          isExternal: true,
        },
      ],
    },
    {
      name: 'isFront',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US': 'If set true, the line will be rendered in front of bars in BarChart, etc.',
        'zh-CN': '是否展示在图表的最上层。',
      },
    },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'LineChart', 'ComposedChart', 'ScatterChart'],
  childrenComponents: ['Label'],
};
