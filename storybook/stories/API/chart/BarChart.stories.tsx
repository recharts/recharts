import React, { StrictMode } from 'react';
import { Args } from '@storybook/react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData, pageDataWithNegativeNumbers } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { BarChartProps } from '../props/BarChartProps';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

export default {
  argTypes: BarChartProps,
  component: BarChart,
};

export const Simple = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <StrictMode>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart {...args}>
            <Bar dataKey="uv" />
            <RechartsHookInspector
              position={context.rechartsInspectorPosition}
              setPosition={context.rechartsSetInspectorPosition}
            />
          </BarChart>
        </ResponsiveContainer>
      </StrictMode>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    data: pageData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const BarInBar = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <Bar dataKey="uv" fill="green" xAxisId="one" barSize={50} />
          <XAxis xAxisId="one" />
          {/* The smaller bar must be rendered in front of the larger one to be visible. */}
          <Bar dataKey="pv" fill="red" xAxisId="two" barSize={30} />
          <XAxis xAxisId="two" hide />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    data: pageData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const Stacked = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="uv" stackId="a" fill="green" barSize={50} name="UV Bar" />
          <Bar dataKey="pv" stackId="a" fill="red" barSize={30} name="PV Bar" />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    data: pageDataWithNegativeNumbers,
    stackOffset: 'none',
    id: 'BarChart-Stacked',
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const VerticalWithMultipleAxes = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <BarChart {...args}>
        <Bar dataKey="uv" xAxisId={2} fill="blue" barSize={40} />
        <Bar dataKey="pv" xAxisId={1} fill="green" barSize={30} />
        <XAxis xAxisId={1} type="number" />
        <XAxis xAxisId={2} type="number" orientation="top" />
        <YAxis type="category" />
        <RechartsHookInspector
          position={context.rechartsInspectorPosition}
          setPosition={context.rechartsSetInspectorPosition}
        />
      </BarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    data: pageData,
    width: 500,
    height: 300,
    layout: 'vertical',
  },
};
