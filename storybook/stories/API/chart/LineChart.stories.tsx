import React from 'react';
import { Args } from '@storybook/react-webpack5';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

export default {
  argTypes: CategoricalChartProps,
  component: LineChart,
};

export const Simple = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const SynchronizedTooltip = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>
    );
  },
  args: {
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400,
  },
};
