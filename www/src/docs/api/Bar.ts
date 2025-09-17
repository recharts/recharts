export default {
  name: 'Bar',
  props: [
    {
      name: 'layout',
      type: "'horizontal' | 'vertical'",
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US': 'The layout of bar in the chart, usually inherited from parent.',
        'zh-CN': '布局类型，通常继承父组件的布局类型。',
      },
    },
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The key of a group of data which should be unique in an area chart.',
        'zh-CN': '每组柱图对应一个唯一的 key，需要在 BarChart 中保证唯一。',
      },
    },
    {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of x-axis which is corresponding to the data.',
        'zh-CN': '柱图对应的 x 轴的 id 。',
      },
    },
    {
      name: 'yAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The id of y-axis which is corresponding to the data.',
        'zh-CN': '柱图对应的 y 轴的 id 。',
      },
    },
    {
      name: 'legendType',
      type: "'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none'",
      defaultVal: "'rect'",
      isOptional: true,
      desc: {
        'en-US': "The type of icon in legend.  If set to 'none', no legend item will be rendered.",
        'zh-CN': '对应的图例 icon 的类型。',
      },
    },
    {
      name: 'label',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label.',
        'zh-CN':
          '图形上的文本标签。当值为 false ，不展示文本标签。当值为 true，会根据 Bar 的属性配置来展示文本标签。当值为一个对象的时候，会把这个对象解析为 文本标签 的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“文本标签”。当值是一个 函数 时，会调用这个函数去渲染自定义的“文本标签”。',
      },
      format: [
        '<Bar dataKey="value" label />',
        '<Bar dataKey="value" label={{ fill: \'red\', fontSize: 20 }} />',
        '<Bar dataKey="value" label={<CustomizedLabel />} />',
      ],
    },
    {
      name: 'data',
      type: 'Array',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US':
          'The position information of all the rectangles, usually calculated internally. Will only take effect if `data` is also present on `BarChart`.',
        'zh-CN': '描述所有柱条的坐标、尺寸数据。',
      },
    },
    {
      name: 'barSize',
      type: 'Number | Percentage',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'The width or height of each bar. If the barSize is not specified, the size of bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.',
        'zh-CN':
          '柱条的宽度。如果指定这个值，会根据 barCategoryGap 和 barGap 来计算柱条的宽度，每组柱条的宽度是一样的。',
      },
    },
    {
      name: 'maxBarSize',
      type: 'Number',
      defaultVal: '',
      desc: {
        'en-US': 'The maximum width of bar in a horizontal BarChart, or maximum height in a vertical BarChart.',
        'zh-CN':
          '当柱图的 layout 是 "horizontal" 时，表示柱子的最大宽度。当柱图的 layout 是 "vertical" 时，表示柱子的最大高度。',
      },
    },
    {
      name: 'minPointSize',
      type: 'Number | Function',
      defaultVal: 0,
      isOptional: false,
      desc: {
        'en-US': `The minimal height of a bar in a horizontal BarChart, or the minimal width of a bar in a vertical BarChart.
        By default, 0 values are not shown. To visualize a 0 (or close to zero) point, set the minimal point size to a pixel
        value like 3. In stacked bar charts, minPointSize might not be respected for tightly packed values. So we strongly recommend not using this props in stacked BarChart. You may provide a function to conditionally change this prop based on Bar value.`,
        'zh-CN':
          '当柱图的 layout 是 "horizontal" 时，表示柱子的最小高度。当柱图的 layout 是 "vertical" 时，表示柱子的最小高度。默认情况下，如果数值为 0，那么相应的柱条的高度（宽度）也会为0，为了让这种高度（宽度）为0或者高度（宽度）非常小的柱条能够展示更加明显，我们会设置一个最小高度（宽度），比如说 3。在堆积柱图中，不推荐设置这个值。',
      },
      examples: [
        {
          name: 'A BarChart with non-zero minPointSize',
          url: '/examples/BarChartWithMinHeight',
        },
      ],
    },
    {
      name: 'background',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'false',
      isOptional: false,
      desc: {
        'en-US':
          'If false set, background of bars will not be drawn. If true set, background of bars will be drawn which have the props calculated internally. If object set, background of bars will be drawn which have the props merged by the internal calculated props and the option. If ReactElement set, the option can be the custom background element. If set a function, the function will be called to render customized background.',
        'zh-CN':
          '是否显示背景柱条。当值为 false ，不展示背景柱条。当值为 true，会根据 RadialBar 的属性配置来展示背景柱条。当值为一个对象的时候，会把这个对象解析为 背景柱条 的属性，来覆盖默认属性。当值是一个 React Element ，会克隆这个 React Element 来渲染“背景柱条”。当值是一个 函数 时，会调用这个函数去渲染自定义的“背景柱条”。',
      },
      examples: [
        {
          name: 'BarChart has background',
          url: '/examples/BarChartHasBackground',
        },
      ],
    },
    {
      name: 'shape',
      type: 'ReactElement | Function',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'If set a ReactElement, the shape of bar can be customized. If set a function, the function will be called to render customized shape.',
        'zh-CN':
          '柱条的图形配置，接收多种配置。当值是一个 React Element ，会克隆这个 React Element 来渲染“柱条”。当值是函数时，会调用这个函数去渲染自定义的“柱条”。',
      },
      format: ['<Bar dataKey="value" shape={<CustomizedShape/>}/>', '<Bar dataKey="value" shape={renderShape}/>'],
      examples: [
        {
          name: 'A bar chart with customized shape',
          url: '/examples/CustomShapeBarChart',
        },
      ],
    },
    {
      name: 'activeBar',
      type: 'Boolean | Object | ReactElement | Function',
      defaultVal: 'true',
      isOptional: true,
      desc: {
        'en-US':
          'The active bar is shown when a user enters a bar chart and this chart has tooltip. If set to false, no active bar will be drawn. If set to true, active bar will be drawn with the props calculated internally. If passed an object, active bar will be drawn, and the internally calculated props will be merged with the key value pairs of the passed object. If passed a ReactElement, the option can be the custom active bar element. If passed a function, the function will be called to render a customized active bar.',
        'zh-CN':
          '当用户输入柱形图且该图表有工具提示时，将显示活动柱形图。如果设置为 false，则不会绘制活动条形图。如果设置为 true，将使用内部计算的道具绘制活动条形图。如果传递的是一个对象，则将绘制活动条形图，并将内部计算的道具与传递对象的键值对合并。如果传递的是 ReactElement，该选项可以是自定义的活动条元素。如果传递的是函数，则将调用该函数来渲染自定义的活动条。',
      },
      format: [
        '<Bar dataKey="value" activeBar={false} />',
        '<Bar dataKey="value" activeBar={{ stroke: \'red\', strokeWidth: 2 }} />',
        '<Bar dataKey="value" activeBar={<CustomizedBar />} />',
        '<Bar dataKey="value" activeBar={renderBar} />',
      ],
      examples: [
        {
          name: 'A bar chart with active bar',
          url: '/examples/SimpleBarChart',
        },
      ],
    },
    {
      name: 'stackId',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'The stack id of bar, when two bars have the same value axis and same stackId, then the two bars are stacked in order.',
        'zh-CN': '堆积id，当两组及以上的柱图有相同的数值轴以及相同的 stackId 时，这些柱图会按照顺序堆积展示。',
      },
      format: [
        `<BarChart data={data} width={400} height={300}>
  <Bar stackId="pv" dataKey="pv01" />
  <Bar stackId="pv" dataKey="pv02" />
  <Bar stackId="uv" dataKey="uv01" />
  <Bar stackId="uv" dataKey="uv02" />
</BarChart>`,
      ],
      examples: [
        {
          name: 'A stacked bar chart',
          url: '/examples/StackedBarChart',
        },
        {
          name: 'A bar chart with stacked bars and unstacked bars',
          url: '/examples/MixBarChart',
        },
      ],
    },
    {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US': 'The unit of data. This option will be used in tooltip.',
        'zh-CN': '对应数据的单位，这个单位会展示在 Tooltip 的数值后面。',
      },
    },
    {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'The name of data. This option will be used in tooltip and legend to represent a bar. If no value was set to this option, the value of dataKey will be used alternatively.',
        'zh-CN':
          '对应数据的名称，这个名称会展示在 Tooltip 以及 Legend 中用来表示这个区域图。如果名称为空，我们会使用 dataKey 替代。',
      },
    },
    {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true in CSR, and false in SSR',
      isOptional: false,
      desc: {
        'en-US': 'If set false, animation of bar will be disabled.',
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
        'zh-CN': '声明组件挂载或更新���，开始运行动画的间隔时长，单位为毫秒。',
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
    {
      name: 'id',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The unique id of this component, which will be used to generate unique clip path id internally. This props is suggested to be set in SSR.',
        'zh-CN': '唯一的id，会用于生成内部的clip path id 等，建议使用SSR的时候设置这个属性。',
      },
    },
    {
      name: 'onAnimationStart',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of animation start',
        'zh-CN': '区域图动画 start 事件的回调函数。',
      },
    },
    {
      name: 'onAnimationEnd',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of animation end',
        'zh-CN': '区域图动画 end 事件的回调函数。',
      },
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the bars in this group',
        'zh-CN': '柱条 click 事件的回调函数。',
      },
      examples: [
        {
          name: 'A BarChart with customized click event handler',
          url: '/examples/BarChartWithCustomizedEvent',
        },
      ],
    },
    {
      name: 'onMouseDown',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousedown on the bars in this group',
        'zh-CN': '柱条 mousedown 事件的回调函数。',
      },
    },
    {
      name: 'onMouseUp',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseup on the bars in this group',
        'zh-CN': '柱条 mouseup 事件的回调函数。',
      },
    },
    {
      name: 'onMouseMove',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mousemove on the bars in this group',
        'zh-CN': '柱条 mousemove 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOver',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseover on the bars in this group',
        'zh-CN': '柱条 mouseover 事件的回调函数。',
      },
    },
    {
      name: 'onMouseOut',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseout on the bars in this group',
        'zh-CN': '柱条 mouseout 事件的回调函数。',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter on the bars in this group',
        'zh-CN': '柱条 mouseenter 事件的回调函数。',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the bars in this group',
        'zh-CN': '柱条 mouseleave 事件的回调函数。',
      },
    },
  ],
  parentComponents: ['BarChart', 'ComposedChart'],
  childrenComponents: ['Cell', 'LabelList', 'ErrorBar'],
};
