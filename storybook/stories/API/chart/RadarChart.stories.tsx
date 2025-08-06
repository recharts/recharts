import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RadarChartProps } from '../props/RadarChartProps';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

export default {
  argTypes: RadarChartProps,
  component: RadarChart,
};

export const Simple = {
  render: (args: Args) => {
    return (
      <RadarChart {...args}>
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <PolarGrid />
        <Tooltip defaultIndex={1} />
        <Radar dataKey="uv" stroke="green" strokeOpacity={0.7} fill="green" fillOpacity={0.5} strokeWidth={3} />
        <RechartsHookInspector />
      </RadarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarChartProps),
    data: pageData,
    width: 800,
    height: 300,
  },
};
