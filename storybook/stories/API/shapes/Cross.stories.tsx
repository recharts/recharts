import React from 'react';
import { Args } from '@storybook/react-vite';
import { Cross, ComposedChart, ResponsiveContainer } from '../../../../src';
import { GeneralStyle } from '../props/Styles';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  component: Cross,
  argTypes: {
    y: {
      description: 'The y-coordinate of the horizontal line of the cross.',
      table: {
        type: { summary: 'number' },
      },
    },
    x: {
      description: 'The x-coordinate of the vertical line of the cross.',
      table: {
        type: { summary: 'number' },
      },
    },
    top: {
      description: 'The y-coordinate of the top left point in the boundary box of the cross.',
      table: {
        type: { summary: 'number' },
      },
    },
    left: {
      description: 'The x-coordinate of the top left point in the boundary box of the cross.',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      description: 'The height of the vertical line of the cross.',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      description: 'The width of the horizontal line of the cross.',
      table: {
        type: { summary: 'number' },
      },
    },
    // TODO: Document further SVGProps as well.
    ...GeneralStyle,
  },
};

export const API = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Cross {...args} />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    y: 100,
    x: 500,
    top: 0,
    left: 0,
    height: 1000,
    width: 1000,
    stroke: '#000',
    fill: 'none',
    strokeDasharray: '3 3',
    strokeWidth: 10,
    strokeOpacity: 0.5,
  },
};
