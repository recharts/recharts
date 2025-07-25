import React from 'react';
import { Args } from '@storybook/react-vite';
import { YAxis, XAxis, Line, ResponsiveContainer, LineChart, CartesianGrid, Tooltip, Legend } from '../../../../src';
import { coordinateWithValueData } from '../../data';
import { YAxisProps } from '../props/YAxisProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  component: YAxis,
  argTypes: YAxisProps,
};

const getWidth = (width: string | number) => {
  if (width === 'auto' || typeof width === 'number') {
    return width;
  }

  const num = parseInt(width, 10);
  return Number.isNaN(num) ? 120 : num;
};

export const API = {
  render: (args: Args, context: RechartsStoryContext) => {
    const width = getWidth(args.width);

    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisProps),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: { value: 'The Axis Label', position: 'center', angle: 90 },
  },
};
