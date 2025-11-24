import { ApiDoc } from './types.ts';

export const SankeyAPI: ApiDoc = {
  name: 'Sankey',
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
      isOptional: false,
      desc: {
        'en-US': "The percentage value of the chart's width or a fixed width.",
      },
    },
    {
      name: 'height',
      type: 'Percentage | Number',
      isOptional: false,
      desc: {
        'en-US': "The percentage value of the chart's width or a fixed height.",
      },
    },
    {
      name: 'data',
      type: 'Object',
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
      defaultVal: true,
      isOptional: true,
      desc: {
        'en-US': 'Whether to sort the nodes on th y axis, or to display them as user-defined.',
      },
    },
    {
      name: 'nodePadding',
      type: 'Number',
      defaultVal: 10,
      isOptional: true,
      desc: {
        'en-US': 'The padding between the nodes',
      },
    },
    {
      name: 'nodeWidth',
      type: 'Number',
      defaultVal: 10,
      isOptional: false,
      desc: {
        'en-US': 'The width of node',
      },
    },
    {
      name: 'linkCurvature',
      type: 'Number',
      defaultVal: 0.5,
      isOptional: false,
      desc: {
        'en-US': 'The curvature of width',
      },
    },
    {
      name: 'iterations',
      type: 'Number',
      defaultVal: 32,
      isOptional: false,
      desc: {
        'en-US': 'The number of the iterations between the links',
      },
    },
    {
      name: 'node',
      type: 'Object | ReactElement',
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
      defaultVal: '{"top":5,"right":5,"bottom":5,"left":5}',
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
      name: 'align',
      type: "'left' | 'justify'",
      defaultVal: 'justify',
      isOptional: true,
      desc: {
        'en-US':
          "If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",
      },
    },
    {
      name: 'verticalAlign',
      type: "'justify' | 'top'",
      defaultVal: 'justify',
      isOptional: true,
      desc: {
        'en-US':
          "Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",
      },
    },
  ],
  childrenComponents: ['Tooltip'],
};
