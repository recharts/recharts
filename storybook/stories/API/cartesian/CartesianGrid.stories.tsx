import React from 'react';
import { Args } from '@storybook/react';
import { CartesianGrid, ResponsiveContainer, ComposedChart } from '../../../../src';

const GeneralProps: Args = {
  x: {
    description: 'The x-coordinate of grid.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  y: {
    description: 'The y-coordinate of grid.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  width: {
    description: 'The width of grid.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of grid.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: 0,
      },
      category: 'General',
    },
  },
  horizontal: {
    description: 'If set false, no horizontal grid lines will be drawn.',
    table: {
      type: {
        summary: 'Boolean',
        defaultValue: true,
      },
      category: 'General',
    },
  },
  vertical: {
    description: 'If set false, no vertical grid lines will be drawn.',
    table: {
      type: {
        summary: 'Boolean',
        defaultValue: true,
      },
      category: 'General',
    },
  },
  horizontalPoints: {
    description: 'The y-coordinates of all horizontal lines.',
    table: {
      type: {
        summary: 'Array',
        defaultValue: [],
      },
      category: 'General',
    },
  },
  verticalPoints: {
    description: 'The x-coordinates of all vertical lines.',
    table: {
      type: {
        summary: 'Array',
        defaultValue: [],
      },
      category: 'General',
    },
  },
  strokeDasharray: {
    description: 'The pattern of dashes and gaps used to paint the lines of the grid',
    table: {
      type: {
        summary: 'String',
        defaultValue: null,
      },
      category: 'General',
    },
  },
};

export default {
  component: CartesianGrid,
  argTypes: {
    ...GeneralProps,
  },
};

export const API = {
  render: (args: Record<string, any>) => {
    const [surfaceWidth, surfaceHeight] = [500, 500];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight}>
          <CartesianGrid {...args} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    y: 0,
    x: 0,
    width: 500,
    height: 500,
    fillOpacity: 0.4,
    horizontalPoints: [10, 20, 30, 100, 400],
    verticalPoints: [100, 200, 300, 400],
    verticalFill: ['red', '#eee'],
    horizontalFill: ['#eee', 'yellow'],
    strokeDasharray: '10 10',
  },
};
