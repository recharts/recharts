export default {
  name: 'ZAxis',
  props: [
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The key of data displayed in the axis.',
        'zh-CN': '指定展示的数据维度。',
      },
    },
    {
      name: 'zAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: {
        'en-US': 'The unique id of z-axis.',
        'zh-CN': 'z 轴的唯一 id。',
      },
    },
    {
      name: 'range',
      type: 'Array',
      defaultVal: '[10, 10]',
      isOptional: false,
      desc: {
        'en-US': 'The range of axis.',
        'zh-CN': 'z 轴 scale 函数的值域。',
      },
    },
    {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The unit of data displayed in the axis. This option will be used to represent an index unit in a scatter chart.',
        'zh-CN': 'z 轴展示数据的单位。这个单位会展示在 Tooltip 的数值后面。',
      },
    },
    {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US':
          'The name of data displayed in the axis. This option will be used to represent an index in a scatter chart.',
        'zh-CN': 'z 轴展示数据的名称。这个单位会展示在 Tooltip 内容中。',
      },
    },
    {
      name: 'scale',
      type: `'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' |
        'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utc' | 'sequential' |
        'threshold' | Function`,
      defaultVal: 'auto',
      isOptional: false,
      desc: {
        'en-US': "If 'auto' set, the scale function is decided by the type of chart, and the props type.",
        'zh-CN': '当值为 "auto" 时，会根据图表类型来生成 scale 函数，也可以传入自定义的函数作为 scale 函数。',
      },
      format: [
        '<ZAxis scale="log" />',
        `
import { scaleLog } from 'd3-scale';
const scale = scaleLog().base(Math.E);

...
  <ZAxis scale={scale} />
...
`,
      ],
    },
  ],
  parentComponents: ['ScatterChart'],
};
