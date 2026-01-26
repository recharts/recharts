import { StoryObj } from '@storybook/react-vite';
import React from 'react';
import { pageData } from '../../data';
import { RadialBar, RadialBarChart, Tooltip } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { StorybookArgs } from '../../../StorybookArgs';
import { RadialBarChartArgs } from '../arg-types/RadialBarChartArgs';

export default {
  argTypes: RadialBarChartArgs,
  component: RadialBarChart,
};

export const API: StoryObj = {
  name: 'Simple',
  render: (args: StorybookArgs) => {
    return (
      <RadialBarChart {...args}>
        <RadialBar dataKey="uv" activeShape={{ fill: 'red' }} label={{ position: 'insideStart', fill: 'white' }} />
        <Tooltip defaultIndex={3} />
        <RechartsHookInspector />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadialBarChartArgs),
    data: pageData,
    width: 800,
    height: 400,
  },
};
