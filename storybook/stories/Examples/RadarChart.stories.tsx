import React from 'react';
import { StoryObj } from '@storybook/react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, Legend } from '../../../src';
import { PolarChartProps } from '../API/props/PolarChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';

export default {
  argTypes: PolarChartProps,
  component: RadarChart,
  docs: {
    autodocs: false,
  },
};

export const NumberAngleType: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid gridType="circle" />

        <PolarRadiusAxis type="number" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarChartProps),
    data: [
      { angle: 0, r: 11 },
      { angle: 90, r: 22 },
      { angle: 180, r: 33 },
      { angle: 270, r: 44 },
    ],
    width: 360,
    height: 360,
  },
};

export const CategoryAngleType: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid gridType="circle" />

        <PolarRadiusAxis type="category" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" type="category" />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarChartProps),
    data: [
      { angle: 0, r: 11 },
      { angle: 90, r: 22 },
      { angle: 180, r: 33 },
      { angle: 270, r: 44 },
    ],
    width: 360,
    height: 360,
  },
};

export const ShouldBeCorrectAngle: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid />
        <PolarRadiusAxis angle={90} type="number" />
        <PolarAngleAxis dataKey="angle" type="number" domain={[0, 360]} tickCount={9} />

        <Radar dataKey="value" fillOpacity={0} stroke="#000" />
        <Tooltip />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarChartProps),
    data: [
      { angle: 0, value: 5 },
      { angle: 45, value: 5 },
      { angle: 90, value: 5 },
      { angle: 125, value: 5 },
      { angle: 180, value: 5 },
      { angle: 225, value: 5 },
      { angle: 270, value: 5 },
      { angle: 315, value: 5 },
      { angle: 360, value: 5 },
    ],
    width: 600,
    height: 300,
    margin: { top: 5, right: 30, left: 20, bottom: 5 },
  },
};

export const RadarWithLegend: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <PolarGrid gridType="circle" />
        <Legend />
        <PolarRadiusAxis type="number" dataKey="r" />

        <PolarAngleAxis dataKey="angle" axisLineType="circle" type="number" domain={[0, 360]} />

        <Radar type="number" name="r" dataKey="r" fillOpacity={0} stroke="#000" />
        <Tooltip defaultIndex={2} />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarChartProps),
    data: [
      { angle: 0, r: 1 },
      { angle: 90, r: 2 },
      { angle: 180, r: 3 },
      { angle: 270, r: 4 },
    ],
    width: 360,
    height: 360,
  },
};
