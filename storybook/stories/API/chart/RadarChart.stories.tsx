import React from 'react';
import { pageData } from '../../data';
import { Radar, RadarChart } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RadarChartProps } from '../props/RadarChartProps';

export default {
  argTypes: RadarChartProps,
  component: RadarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart {...args}>
        <Radar dataKey="uv" />
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
