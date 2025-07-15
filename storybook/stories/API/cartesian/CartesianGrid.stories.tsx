import React from 'react';
import { Args, ArgTypes } from '@storybook/react-vite';
import { CartesianGrid, ResponsiveContainer, ComposedChart, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

const GeneralProps: ArgTypes = {
  x: {
    description: 'The x-coordinate of grid.',
    table: {
      type: {
        summary: 'Number',
      },
      defaultValue: { summary: '0' },
      category: 'Position',
    },
  },
  y: {
    description: 'The y-coordinate of grid.',
    table: {
      type: {
        summary: 'Number',
      },
      defaultValue: { summary: '0' },
      category: 'Position',
    },
  },
  width: {
    description: 'The width of grid.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'Position',
    },
  },
  height: {
    description: 'The height of grid.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'Position',
    },
  },
  horizontal: {
    description: 'If set false, no horizontal grid lines will be drawn.',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'true',
      },
      category: 'General',
    },
  },
  vertical: {
    description: 'If set false, no vertical grid lines will be drawn.',
    control: {
      type: 'boolean',
    },
    table: {
      type: {
        summary: 'Boolean',
      },
      defaultValue: {
        summary: 'true',
      },
      category: 'General',
    },
  },
  horizontalPoints: {
    description: 'The y-coordinates of all horizontal lines.',
    table: {
      type: {
        summary: 'Array',
      },
      category: 'General',
    },
  },
  verticalPoints: {
    description: 'The x-coordinates of all vertical lines.',
    table: {
      type: {
        summary: 'Array',
      },
      category: 'General',
    },
  },
  strokeDasharray: {
    description: 'The pattern of dashes and gaps used to paint the lines of the grid',
    table: {
      type: {
        summary: 'String',
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
  args: {
    horizontal: true,
    vertical: true,
  },
};

export const API = {
  render: (args: Args, context: RechartsStoryContext) => {
    const [surfaceWidth, surfaceHeight] = [500, 500];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight}>
          <CartesianGrid {...args} />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
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

export const MultipleGrids = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={500} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          {args.displayGridA && <CartesianGrid verticalFill={['#aaeeee', '#eeeeaa']} stroke="trasparent" />}
          {args.displayGridB && <CartesianGrid stroke="silver" strokeDasharray="3 3" strokeWidth={3} />}
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    displayGridA: true,
    displayGridB: true,
  },
};
