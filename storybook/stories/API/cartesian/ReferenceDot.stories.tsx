import React from 'react';
import { Args } from '@storybook/react-vite';
import { Bar, ComposedChart, ReferenceDot, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { ReferenceDotArgs } from '../arg-types/ReferenceDotArgs';

export default {
  argTypes: ReferenceDotArgs,
  component: ReferenceDot,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Bar type="monotone" dataKey="uv" />
          <ReferenceDot {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ReferenceDotArgs),
    x: 'Page E',
    y: 1520,
    r: 20,
    stroke: 'red',
    fill: 'teal',
    label: { fill: 'red', fontSize: 20 },
  },
};
