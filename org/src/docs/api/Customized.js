export default {
  name: 'Customized',
  desc: {
    'en-US':
      'Cell can be wrapped by Pie, Bar, or RadialBar to specify attributes of each child. In Pie , for example, we can specify the attributes of each child node through data, but the props of Cell have higher priority',
    'zh-CN':
      'Cell 可以作为很多组件（包括 Pie, Bar, RadialBar）的子组件来指定每个子节点的属性配置。例如，在 Pie 组件中，我们虽然可以通过 data 来指定每个数据项对应的子节点的属性配置，但是这样会造成数据与配置混乱的问题，所以我们提供了这种方式来设置子节点的属性。',
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
