import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, Tooltip } from '../../../src';
import { pageData, pageDataWithFillColor } from '../data';
import { RadialBarChartProps } from '../API/props/RadialBarChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';

export default {
  argTypes: RadialBarChartProps,
  component: RadialBarChart,
  docs: { audotocs: false },
};

export const SimpleRadialBarChart = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 500,
    height: 500,
    data: pageData,
  },
};

export const RadialBarWithColors = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <Tooltip />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 500,
    height: 500,
    data: pageDataWithFillColor,
  },
};

export const RadialBarWithAxesAndGrid = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" stroke="red" />
        <PolarRadiusAxis dataKey="name" orientation="middle" type="category" angle={90} stroke="black" />
        <Tooltip cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 500,
    height: 500,
    data: pageDataWithFillColor,
  },
};

export const StackedRadialBar = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="pv" stackId="stack1" fill="gold" />
        <RadialBar dataKey="uv" stackId="stack1" fill="purple" />
        <Legend />
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="pv" type="number" axisLineType="circle" />
        <Tooltip defaultIndex={3} cursor={{ strokeWidth: 3, stroke: 'black', strokeDasharray: '4 4' }} />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartProps),
    width: 800,
    height: 800,
    data: pageData,
  },
};
