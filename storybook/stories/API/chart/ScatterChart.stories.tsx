import React from 'react';
import { Args } from '@storybook/react';
import { coordinateData } from '../../data';
import { ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from '../../../../src';

const GeneralProps: Args = {
  width: {
    description: 'The width of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
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
    description: 'The customized event handler of click in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseDown: {
    description: 'The customized event handler of mousedown in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseUp: {
    description: 'The customized event handler of mouseup in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseMove: {
    description: 'The customized event handler of mousemove in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseOver: {
    description: 'The customized event handler of mouseover in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseOut: {
    description: 'The customized event handler of mouseout in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: 'The customized event handler of mouseenter in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: 'The customized event handler of mouseleave in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: ScatterChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: coordinateData,
  },
};
