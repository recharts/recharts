export const CustomizedAPI = {
  name: 'Customized - Deprecated, will be removed in 4.0',
  desc: {
    'en-US':
      'Customized component used to be necessary to render custom elements in Recharts 2.x. Starting from Recharts 3.x, all charts are able to render arbitrary elements anywhere, and Customized is no longer needed. Before: <Customized component={<MyCustomComponent />} /> Now: <MyCustomComponent />',
    'zh-CN':
      'Customized 组件在 Recharts 2.x 版本中用于渲染自定义元素。从 Recharts 3.x 版本开始，所有图表组件均可在任意位置渲染自定义元素，因此不再需要使用 Customized 组件。',
  },
  props: [
    {
      name: 'component',
      type: 'ReactElement | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US':
          'Use react element or function to render arbitrary customized content which can use the internal state and props of chart.',
        'zh-CN': '通过自定义的element或者函数，来渲染任意的自定义内容',
      },
    },
  ],
  parentComponents: [
    'LineChart',
    'BarChart',
    'ComposedChart',
    'AreaChart',
    'PieChart',
    'RadarChart',
    'RadialBarChart',
    'ScatterChart',
    'FunnelChart',
  ],
};
