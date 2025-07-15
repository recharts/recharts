import React from 'react';
import { Args } from '@storybook/react-vite';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { coordinateWithValueData } from '../../data';
import { XAxisProps } from '../props/XAxisProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

export default {
  component: XAxis,
  argTypes: XAxisProps,
};

export const API = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...args} />
          <YAxis />
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
    ...getStoryArgsFromArgsTypesObject(XAxisProps),
    dataKey: 'x',
    domain: [100, 500],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    height: 70,
    label: { value: 'The Axis Label', position: 'insideBottomRight' },
  },
};
