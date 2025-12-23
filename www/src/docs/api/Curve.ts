import { ApiDoc } from './types.ts';

// Area inherits these props from Curve, so we put them in a shared variable
export const sharedCurveAPIProps: ApiDoc['props'] = [
  {
    name: 'type',
    type: `'basis' | 'basisClosed' | 'basisOpen' | 'bumpX' | 'bumpY' | 'bump' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX'
        | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function`,
    defaultVal: 'linear',
    isOptional: false,
    desc: {
      'en-US': 'The interpolation type of curve. Allows custom interpolation function.',
      'zh-CN': '曲线的插值类型，可以接收自定义的函数。折线对应的 type 为 “linear” 。',
    },
    examples: [
      {
        name: 'd3-shape interpolation',
        url: 'https://github.com/d3/d3-shape#curves',
        isExternal: true,
      },
      {
        name: 'An AreaChart which has two area with different interpolation.',
        url: '/examples/CardinalAreaChart',
      },
    ],
  },
  {
    name: 'baseLine',
    type: 'Number | Array',
    isOptional: true,
    desc: {
      'en-US':
        'Baseline of the area: ' +
        '- number: uses the corresponding axis value as a flat baseline; ' +
        '- an array of coordinates: describes a custom baseline path.',
      'zh-CN': `基准线，可以是一个数值，这种情况会根据 layout 解析成 x = \${baseLine} 或者 y = \${baseLine}。当使用
           AreaChart 或者 ComposedChart 作为父组件的时候，不需要自己计算，父组件会计算好。`,
    },
  },
  {
    name: 'connectNulls',
    type: 'Boolean',
    defaultVal: false,
    isOptional: false,
    desc: {
      'en-US': 'Whether to connect the curve across null points.',
      'zh-CN': '当遇到 null、undefined 等非法输入的时候，是否跳过这个值，让前后连接起来。',
    },
    examples: [
      {
        name: 'A lineChart connect nulls and a lineChart disconnect nulls',
        url: '/examples/LineChartConnectNulls',
      },
      {
        name: 'An areaChart connect nulls and an areaChart disconnect nulls',
        url: '/examples/AreaChartConnectNulls',
      },
    ],
  },
  {
    name: 'onClick',
    type: 'Function',
    isOptional: true,
    desc: {
      'en-US': 'The customized event handler of click on the curve',
      'zh-CN': '曲线 click 事件的回调函数。',
    },
  },
  {
    name: 'onMouseDown',
    type: 'Function',
    isOptional: true,
    desc: {
      'en-US': 'The customized event handler of mousedown on the curve',
      'zh-CN': '曲线 mousedown 事件的回调函数。',
    },
  },
  {
    name: 'onMouseUp',
    type: 'Function',
    isOptional: true,
    desc: {
      'en-US': 'The customized event handler of mouseup on the curve',
      'zh-CN': '曲线 mouseup 事件的回调函数。',
    },
  },
  {
    name: 'onMouseMove',
    type: 'Function',
    isOptional: true,
    desc: {
      'en-US': 'The customized event handler of mousemove on the curve',
      'zh-CN': '曲线 mousemove 事件的回调函数。',
    },
  },
  {
    name: 'onMouseOver',
    type: 'Function',
    isOptional: true,
    desc: {
      'en-US': 'The customized event handler of mouseover on the curve',
      'zh-CN': '曲线 mouseover 事件的回调函数。',
    },
  },
  {
    name: 'onMouseOut',
    type: 'Function',
    isOptional: true,
    desc: {
      'en-US': 'The customized event handler of mouseout on the curve',
      'zh-CN': '曲线 mouseout 事件的回调函数。',
    },
  },
  {
    name: 'onMouseEnter',
    type: 'Function',
    isOptional: true,
    desc: {
      'en-US': 'The customized event handler of mouseenter on the curve',
      'zh-CN': '曲线 mouseenter 事件的回调函数。',
    },
  },
  {
    name: 'onMouseLeave',
    type: 'Function',
    isOptional: true,
    desc: {
      'en-US': 'The customized event handler of mouseleave on the curve',
      'zh-CN': '曲线 mouseleave 事件的回调函数。',
    },
  },
];

export const CurveAPI: ApiDoc = {
  name: 'Curve',
  props: [
    ...sharedCurveAPIProps,
    {
      name: 'layout',
      type: "'horizontal' | 'vertical'",
      isOptional: true,
      desc: {
        'en-US':
          "This option affects the interpolation algorithm when the `type` prop is set to 'monotone'. " +
          'It also specifies the type of baseline when the curve is closed.',
        'zh-CN': '布局类型。当值为 "horizontal" 时，如果插值类型为 "monotone"，我们会使用 "monotoneX" 的插值算法。',
      },
    },
    {
      name: 'points',
      type: 'Array',
      isOptional: false,
      desc: {
        'en-US': 'The coordinates of all the points in the curve, like an array of objects with x and y coordinates.',
        'zh-CN': '曲线上所有点的坐标。形如：[{ x, y }]。',
      },
    },
  ],
};
