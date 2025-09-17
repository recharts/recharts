import { ApiDoc } from './types.ts';

const SankeyChart: ApiDoc = {
  name: 'SankeyChart',
  props: [
    {
      name: 'nameKey',
      type: 'String',
      defaultVal: 'name',
      isOptional: true,
      desc: {
        'en-US': "The key of each sector's name.",
        'zh-CN': '"name" 属性对应的 key 。',
      },
    },
    {
      name: 'dataKey',
      type: 'String | Number | Function',
      defaultVal: 'value',
      isOptional: true,
      desc: {
        'en-US': 'The key of a group of data which should be unique in a SankeyChart.',
      },
    },
    {
      name: 'width',
      type: 'Percentage | Number',
      defaultVal: "'100%'",
      isOptional: false,
      desc: {
        'en-US': "The percentage value of the chart's width or a fixed width.",
      },
    },
    {
      name: 'height',
      type: 'Percentage | Number',
      defaultVal: "'100%'",
      isOptional: false,
      desc: {
        'en-US': "The percentage value of the chart's width or a fixed height.",
      },
    },
    {
      name: 'data',
      type: 'Object',
      defaultVal: 'undefined',
      isOptional: false,
      desc: {
        'en-US': 'The source data, including the array of nodes, and the relationships, represented by links.',
      },
      format: [
        'nodes: [',
        "  { name: 'Visit' },",
        "  { name: 'Direct-Favourite' },",
        "  { name: 'Page-Click' },",
        "  { name: 'Detail-Favourite' },",
        "  { name: 'Lost' },",
        '],',
        'links: [',
        '  { source: 0, target: 1, value: 3728.3 },',
        '  { source: 0, target: 2, value: 354170 },',
        '  { source: 2, target: 3, value: 62429 },',
        '  { source: 2, target: 4, value: 291741 },',
        '],',
      ],
    },
    {
      name: 'sort',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: true,
      desc: {
        'en-US': 'Whether to sort the nodes on th y axis, or to display them as user-defined.',
      },
    },
    {
      name: 'nodePadding',
      type: 'Number',
      defaultVal: '10',
      isOptional: true,
      desc: {
        'en-US': 'The padding between the nodes',
      },
    },
    {
      name: 'nodeWidth',
      type: 'Number',
      defaultVal: '10',
      isOptional: false,
      desc: {
        'en-US': 'The width of node',
      },
    },
    {
      name: 'linkWidth',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The width of link',
      },
    },
    {
      name: 'linkCurvature',
      type: 'Number',
      defaultVal: '0.5',
      isOptional: false,
      desc: {
        'en-US': 'The curvature of width',
      },
    },
    {
      name: 'iterations',
      type: 'Number',
      defaultVal: '32',
      isOptional: false,
      desc: {
        'en-US': 'The number of the iterations between the links',
      },
    },
    {
      name: 'node',
      type: 'Object | ReactElement',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'If set a object, the option is the configuration of nodes. If set a React element, the option is the custom react element of drawing the nodes.',
      },
      format: ['<Sankey node={<MyCustomComponent />} />', '<Sankey node={{stroke: #77c878, strokeWidth: 2}} />'],
    },
    {
      name: 'link',
      type: 'Object | ReactElement',
      defaultVal: 'undefined',
      isOptional: true,
      desc: {
        'en-US':
          'If set a object, the option is the configuration of links. If set a React element, the option is the custom react element of drawing the links.',
      },
      format: ['<Sankey link={<MyCustomComponent />} />', '<Sankey link={{fill: #77c878 }} />'],
    },
    {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: false,
      desc: {
        'en-US': 'The sizes of whitespace around the container.',
      },
      format: ['{ top: 5, right: 5, bottom: 5, left: 5 }'],
    },
    {
      name: 'onClick',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of click on the area in this group',
      },
    },
    {
      name: 'onMouseEnter',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseenter on the area in this group',
      },
    },
    {
      name: 'onMouseLeave',
      type: 'Function',
      isOptional: true,
      desc: {
        'en-US': 'The customized event handler of mouseleave on the area in this group',
      },
    },
    {
      name: 'sourceX',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The source number of X-axis',
      },
    },
    {
      name: 'sourceY',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The source number of Y-axis',
      },
    },
    {
      name: 'sourceControlX',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The source control of X-axis',
      },
    },
    {
      name: 'targetControlX',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The target control of X-axis',
      },
    },
    {
      name: 'targetX',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The target of X-axis',
      },
    },
    {
      name: 'targetY',
      type: 'Number',
      isOptional: false,
      desc: {
        'en-US': 'The target of Y-axis',
      },
    },
  ],
  childrenComponents: ['Tooltip'],
};
export default SankeyChart;
