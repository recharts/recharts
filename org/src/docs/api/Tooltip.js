export default {
  name: 'Tooltip',
  desc: {
    'en-US': 'Tooltip is rendered by html nodes.',
    'zh-CN': 'Tooltip 是基于 HTML 实现的。',
  },
  props: [
    {
      name: 'separator',
      type: 'String',
      defaultVal: "' : '",
      isOptional: false,
      desc: {
        'en-US': 'The separator between name and value.',
        'zh-CN': 'name 和 value 之间的分隔符。',
      },
    },
    {
      name: 'offset',
      type: 'Number',
      defaultVal: '10',
      isOptional: false,
      desc: {
        'en-US': 'The offset size between the position of tooltip and the active position.',
        'zh-CN': 'Tooltip 与当前“游标”的偏移量。',
      },
    },
    {
      name: 'filterNull',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US': "When an item of the payload has value null or undefined, this item won't be displayed.",
        'zh-CN': '当tooltip内容中的某条数据的值为 null 或者 undefined 时，不展示该条数据',
      },
    },
    {
      name: 'itemStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: {
        'en-US': 'The style of default tooltip content item which is a li element.',
        'zh-CN': 'Tooltip 中每个项目（使用 li 节点渲染的）的样式。',
      },
      examples: [
        {
          name: 'React Inline style',
          url: 'https://reactjs.org/docs/dom-elements.html#style',
          isExternal: true,
        },
      ],
    },
    {
      name: 'wrapperStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: {
        'en-US': 'The style of tooltip wrapper which is a dom element.',
        'zh-CN': 'Tooltip 最外层节点（div）的样式。',
      },
      examples: [
        {
          name: 'React Inline style',
          url: 'https://reactjs.org/docs/dom-elements.html#style',
          isExternal: true,
        },
      ],
    },
    {
      name: 'contentStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: {
        'en-US': 'The style of tooltip content which is a dom element.',
        'zh-CN': 'Tooltip 内部展示的内容 (div) 的样式。',
      },
      examples: [
        {
          name: 'React Inline style',
          url: 'https://reactjs.org/docs/dom-elements.html#style',
          isExternal: true,
        },
      ],
    },
    {
      name: 'labelStyle',
      type: 'Object',
      defaultVal: '{}',
      isOptional: false,
      desc: {
        'en-US': 'The style of default tooltip label which is a p element.',
        'zh-CN': '类目文字标签（使用 <p /> 渲染）的样式。',
      },
      examples: [
        {
          name: 'React Inline style',
          url: 'https://reactjs.org/docs/dom-elements.html#style',
          isExternal: true,
        },
      ],
    },
    {
      name: 'cursor',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'true',
      isOptional: false,
      desc: {
        'en-US':
          'If set false, no cursor will be drawn when tooltip is active. If set a object, the option is the configuration of cursor. If set a React element, the option is the custom react element of drawing cursor.',
        'zh-CN':
          '游标相关配置，一般在类目图表展示 Tooltip 的时候，会渲染游标来标识相应的类目。如果值为 false，不渲染游标。当值为对象类型，会被解析为游标的属性，注意游标也是用 svg 元素渲染的。如果值为 React element，会克隆这个元素来展示自定义的游标。',
      },
      format: [
        '<Tooltip cursor={false} />',
        "<Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />",
        '<Tooltip cursor={<CustomizedCursor />} />',
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
        'zh-CN': '图表的可视区域。通常通过 x、y、width、height 来描述。',
      },
      format: ['{ x: 0, y: 0, width: 400, height: 400 }'],
    },
    {
      name: 'allowEscapeViewBox',
      type: 'Object',
      defaultVal: '{ x: false, y: false }',
      isOptional: true,
      desc: {
        'en-US': 'This option allows the tooltip to extend beyond the viewBox of the chart itself.',
        'zh-CN': '此选项允许工具提示扩展到图表本身的viewBox之外。',
      },
      format: ['{ x: true }', '{ y: true }', '{ x: true, y: true }'],
    },
    {
      name: 'active',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If set true, the tooltip is displayed. If set false, the tooltip is hidden, usually calculated internally.',
        'zh-CN':
          '是否处于激活状态。如果值为 true, tooltip 会显示出来。如果值为 false, tooltip 会被隐藏，这个值一般是图表内部控制的。',
      },
    },
    {
      name: 'position',
      type: 'Object',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'If this field is set, the tooltip position will be fixed and will not move anymore.',
        'zh-CN': '如果设置了此字段，则工具提示位置将固定不变，并且将不再移动。',
      },
      format: ['{ x: 100, y: 140 }'],
    },
    {
      name: 'coordinate',
      type: 'Object',
      defaultVal: '{ x: 0, y: 0 }',
      isOptional: false,
      desc: {
        'en-US': 'The coordinate of tooltip position, usually calculated internally.',
        'zh-CN': '用来描述位置的坐标，也是图表内部计算的值。',
      },
      format: ['{ x: 100, y: 140 }'],
    },
    {
      name: 'payload',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: {
        'en-US': 'The source data of the content to be displayed in the tooltip, usually calculated internally.',
        'zh-CN': 'Tooltip 展示内容的源数据，通常是图表内部计算的。',
      },
      format: ["[{ name: '05-01', value: 12, unit: 'kg' }]"],
    },
    {
      name: 'label',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The label value which is active now, usually calculated internally.',
        'zh-CN': '当 Tooltip 显示出来的时候，表示类目文字标签。',
      },
    },
    {
      name: 'content',
      type: 'ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'If set a React element, the option is the custom react element of rendering tooltip.  If set a function, the function will be called to render tooltip content.',
        'zh-CN':
          '定制 Tooltip 展示的内容。如果值为 React element，会克隆这个元素来渲染 Tooltip 的内容。如果值为函数，会调用这个函数来生成 Tooltip 的内容。',
      },
      format: [
        '<Tooltip content={<CustomizedTooltip external={external} />} />',
        '<Tooltip content={renderTooltip} />',
      ],
      examples: [
        {
          name: 'Customize tooltip content',
          url: '/examples/CustomContentOfTooltip',
        },
      ],
    },
    {
      name: 'formatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The formatter function of value in tooltip. If you return an array, the first entry will be the formatted "value", and the second entry will be the formatted "name"',
        'zh-CN':
          '每个项目中“数值”的格式化函数。 如果函数返回值为数组格式，第一个元素是格式化后的“数值”，第二个元素是格式化后的“名称”',
      },
      format: [
        '(value, name, props) => "formatted value"',
        '(value, name, props) => ["formatted value", "formatted name"]',
      ],
    },
    {
      name: 'labelFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The formatter function of label in tooltip.',
        'zh-CN': '类目文字标签的格式化函数。',
      },
    },
    {
      name: 'itemSorter',
      type: 'Function',
      defaultVal: '() => -1',
      isOptional: false,
      desc: {
        'en-US': 'Sort function of payload',
        'zh-CN': '项目排序函数。',
      },
    },
    {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of tooltip will be disabled.',
        'zh-CN': '当值为 false，不开启动画。',
      },
    },
    {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: {
        'en-US': 'Specifies when the animation should begin, the unit of this option is ms.',
        'zh-CN': '声明组件挂载或更新后，开始运行动画的间隔时长，单位为毫秒。',
      },
    },
    {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: {
        'en-US': 'Specifies the duration of animation, the unit of this option is ms.',
        'zh-CN': '声明动画的运行时长，单位为毫秒。',
      },
    },
    {
      name: 'animationEasing',
      type: "'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'",
      defaultVal: "'ease'",
      isOptional: false,
      desc: {
        'en-US': 'The type of easing function.',
        'zh-CN': '动画缓动函数的类型。',
      },
    },
  ],
  parentComponents: [
    'AreaChart',
    'BarChart',
    'LineChart',
    'ComposedChart',
    'PieChart',
    'RadarChart',
    'RadialBarChart',
    'ScatterChart',
    'Treemap',
  ],
};
