import React from 'react';
import { pageData } from '../../data';
import { Radar, RadarChart } from '../../../../src';
import { PolarChartProps } from '../props/PolarChartProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: PolarChartProps,
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
    ...getStoryArgsFromArgsTypesObject(PolarChartProps),
    data: pageData,
    width: 800,
    height: 300,
  },
};
