export default {
  name: 'PolarGrid',
  props: [
    {
      name: 'cx',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The x-coordinate of center.',
        'zh-CN': '圆心的 x 坐标',
      },
    },
    {
      name: 'cy',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The y-coordinate of center.',
        'zh-CN': '圆心的 y 坐标。',
      },
    },
    {
      name: 'innerRadius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The radius of the inner polar grid.',
        'zh-CN': '径向网格最内侧网格线的半径。',
      },
    },
    {
      name: 'outerRadius',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': 'The radius of the outer polar grid.',
        'zh-CN': '径向网格最外侧网格线的半径。',
      },
    },
    {
      name: 'polarAngles',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': "The array of every line grid's angle.",
        'zh-CN': '径向网格所有径向网格线的角度。',
      },
    },
    {
      name: 'polarRadius',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: {
        'en-US': "The array of every circle grid's radius.",
        'zh-CN': '径向网格所有同心网格线的半径。',
      },
    },
    {
      name: 'gridType',
      type: "'polygon' | 'circle'",
      defaultVal: 'polygon',
      isOptional: false,
      desc: {
        'en-US': 'The type of polar grids.',
        'zh-CN': '同心网格线的类型：圆、多边形。',
      },
    },
  ],
  parentComponents: ['RadarChart', 'RadialBarChart'],
};
