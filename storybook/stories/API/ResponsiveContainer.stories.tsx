import React from 'react';
import { Args, StoryObj } from '@storybook/react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../src';
import { pageData } from '../data/Page';
import { RechartsHookInspector, RechartsStoryContext } from '../../storybook-addon-recharts';
import { Props } from '../../../src/component/ResponsiveContainer';

export default {
  component: ResponsiveContainer,
  docs: {
    autodocs: false,
  },
};

export const API: StoryObj<Props> = {
  render: (args: Args, context: RechartsStoryContext<Props>) => {
    return (
      <ResponsiveContainer {...args}>
        <AreaChart
          width={500}
          height={400}
          data={pageData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: '100%',
    height: 400,
  },
};
