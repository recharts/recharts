import React from 'react';
import { Args, StoryObj } from '@storybook/react-vite';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../src';
import { pageData } from '../data/Page';
import { RechartsHookInspector } from '../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../storybook-addon-recharts/RechartsStoryContext';
import { Props } from '../../../src/component/ResponsiveContainer';

export default {
  component: ResponsiveContainer,
  docs: {
    autodocs: false,
  },
};

export const API: StoryObj<Props> = {
  // https://github.com/recharts/recharts/issues/172
  render: (args: Args, context: RechartsStoryContext<Props>) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          flexGrow: 1,
        }}
      >
        <h6>Flexbox sibling</h6>
        <div style={{ flexGrow: 1 }}>
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
        </div>
      </div>
    );
  },
  args: {
    width: '80%',
    height: '80%',
  },
};
