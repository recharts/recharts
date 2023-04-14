import React from 'react';
import { Args } from '@storybook/react';
import { nodeLinkData } from '../../data';
import { ResponsiveContainer, Sankey } from '../../../../src';

const GeneralProps: Args = {
  nameKey: {
    description: "The key of each sector's name.",
    table: {
      type: {
        summary: 'String',
        defaultValue: 'name',
      },
      category: 'General',
    },
  },
  dataKey: {
    description: 'The key of a group of data which should be unique in a SankeyChart.',
    table: {
      type: {
        summary: 'String | Number | Function',
        defaultValue: 'value',
      },
      category: 'General',
    },
  },
  width: {
    description: "The percentage value of the chart's width or a fixed width.",
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '100%',
      },
      category: 'General',
    },
  },
  height: {
    description: "The percentage value of the chart's width or a fixed height.",
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '100%',
      },
      category: 'General',
    },
  },
  data: {
    description: 'The source data, including the array of nodes, and the relationships, represented by links.',
    table: {
      type: {
        summary: 'Object',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  nodePadding: {
    description: 'The padding between the nodes',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 10,
      },
      category: 'General',
    },
  },
  nodeWidth: {
    description: 'The width of node',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 10,
      },
      category: 'General',
    },
  },
  linkWidth: {
    description: 'The width of link',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  linkCurvature: {
    description: 'The curvature of width',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0.5,
      },
      category: 'General',
    },
  },
  iterations: {
    description: 'The number of the iterations between the links',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 32,
      },
      category: 'General',
    },
  },
  node: {
    description: `If set a object, the option is the configuration of nodes. If set a React element, 
      the option is the custom react element of drawing the nodes.`,
    table: {
      type: {
        summary: 'Object | ReactElement',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  link: {
    description: `If set a object, the option is the configuration of links. If set a React element, 
      the option is the custom react element of drawing the links.`,
    table: {
      type: {
        summary: 'Object | ReactElement',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  margin: {
    description: 'The sizes of whitespace around the container.',
    table: {
      type: {
        summary: 'Object',
        defaultValue: { top: 5, right: 5, bottom: 5, left: 5 },
      },
      category: 'General',
    },
  },
  onClick: {
    description: 'The customized event handler of click on the area in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: 'The customized event handler of mouseenter on the area in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: 'The customized event handler of mouseleave on the area in this group',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  sourceX: {
    description: 'The source number of X-axis',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  sourceY: {
    description: 'The source number of Y-axis',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  sourceControlX: {
    description: 'The source control of X-axis',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  targetControlX: {
    description: 'The target control of X-axis',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  targetX: {
    description: 'The target of X-axis',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  targetY: {
    description: 'The target of Y-axis',
    table: {
      type: {
        summary: 'Number',
      },
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: Sankey,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={data} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: nodeLinkData,
  },
};

export const Customized = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <Sankey data={data} width={960} height={500} nodeWidth={10} nodePadding={60} />
      </ResponsiveContainer>
    );
  },
  args: {
    data: nodeLinkData,
  },
};
