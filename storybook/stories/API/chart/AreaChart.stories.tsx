import React from 'react';
import { curveCardinal } from 'victory-vendor/d3-shape';
import { Args } from '@storybook/react-vite';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from '../../../../src';
import { pageData, subjectData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { AreaChartArgs } from '../arg-types/AreaChartArgs';

export default {
  argTypes: AreaChartArgs,
  component: AreaChart,
};

export const API = {
  name: 'Simple',
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          {...args}
          margin={{
            top: 0,
            bottom: 0,
            left: 50,
            right: 50,
          }}
        >
          <Area dataKey="pv" strokeWidth={3} stroke="#2451B7" fill="#5376C4" />
          <CartesianGrid opacity={0.1} vertical={false} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: pageData,
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50,
    },
  },
};

const stepAround = curveCardinal.tension(0.5);

export const CustomType = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: pageData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50,
    },
  },
};

export const CategoricalAreaChart = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart {...args}>
          <Area dataKey="A" stroke="green" fill="green" fillOpacity={0.5} />
          <XAxis dataKey="subject" type="category" allowDuplicatedCategory={false} />
          <Tooltip />
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    data: subjectData,
    layout: 'horizontal',
    margin: {
      top: 0,
      bottom: 0,
      left: 50,
      right: 50,
    },
  },
};
