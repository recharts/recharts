export default {
  name: 'Customized - Deprecated, to be removed in 3.0',
  desc: {
    'en-US': '',
    'zh-CN': '',
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
