export const BrushAPI = {
  name: 'Brush',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      isOptional: false,
      desc: {
        'en-US':
          'Decides how to extract the value of this Brush from the data: ' +
          '- `string`: the name of the field in the data object; ' +
          '- `number`: the index of the field in the data; ' +
          '- `function`: a function that receives the data object and returns the value of this Brush.',
        'zh-CN': '指定展示的数据维度。',
      },
    },
    {
      name: 'x',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of brush. If undefined, the x-coordinate is calculated using chart offset.',
        'zh-CN': 'x 坐标。',
      },
    },
    {
      name: 'y',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of brush. If undefined, the y-coordinate is calculated using chart offset.',
        'zh-CN': 'y 坐标。',
      },
    },
    {
      name: 'width',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The width of brush. If undefined, defaults to the chart width.',
        'zh-CN': '指定宽度。',
      },
    },
    {
      name: 'height',
      type: 'Number',
      defaultVal: 40,
      isOptional: false,
      desc: {
        'en-US': 'The height of brush in pixels.',
        'zh-CN': '指定高度。',
      },
    },
    {
      name: 'travellerWidth',
      type: 'Number',
      defaultVal: 5,
      isOptional: false,
      desc: {
        'en-US': 'The width of each traveller.',
        'zh-CN': '游标的宽度。',
      },
    },
    {
      name: 'gap',
      type: 'Number',
      defaultVal: 1,
      isOptional: true,
      desc: {
        'en-US':
          'The data with gap of refreshing chart. If the option is not set, the chart will be refreshed every time.',
        'zh-CN': '数据刷新间隔，如果没有指定，则取 1 ，每次刷新',
      },
    },
    {
      name: 'startIndex',
      type: 'Number',
      isOptional: true,
      desc: {
        'en-US': 'The default start index of brush. If the option is not set, the start index will be 0.',
        'zh-CN': '默认的起始序号，如果没有指定，则取 0 。',
      },
    },
    {
      name: 'endIndex',
      type: 'Number',
      isOptional: true,
      desc: {
        'en-US':
          'The default end index of brush. If the option is not set, the end index will be calculated by the length of data.',
        'zh-CN': '默认的结束序号，如果没有指定，则取 data.length - 1。',
      },
    },
    {
      name: 'tickFormatter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The formatter function of ticks.',
        'zh-CN': '刻度的格式化函数',
      },
    },
    {
      name: 'onChange',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The handler of changing the active scope of brush.',
        'zh-CN': '起始序号或者结束序号改变时触发事件。',
      },
    },
  ],
  parentComponents: ['AreaChart', 'BarChart', 'LineChart', 'ComposedChart', 'ScatterChart'],
  childrenComponents: ['AreaChart', 'BarChart', 'LineChart', 'ComposedChart', 'ScatterChart'],
};
