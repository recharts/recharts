import React from 'react';
import { StoryContext } from '@storybook/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from '../../../src';
import { pageData } from '../data';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';

export default {
  title: 'Examples/Zoom Pan',
  component: LineChart,
  docs: { autodocs: false },
};

export const BasicZoomPan = {
  render: (_: Record<string, any>, context: StoryContext) => (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={pageData} zoom={{ mode: 'xy' }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </LineChart>
    </ResponsiveContainer>
  ),
};
