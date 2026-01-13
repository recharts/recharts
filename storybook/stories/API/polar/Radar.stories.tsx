import React from 'react';
import { Args } from '@storybook/react-vite';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from '../../../../src';
import { subjectData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { RadarArgs } from '../arg-types/RadarArgs';

export default {
  argTypes: RadarArgs,
  component: Radar,
};

export const General = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={subjectData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar {...args} />
          <RechartsHookInspector />
        </RadarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(RadarArgs),
    dataKey: 'A',
    name: 'Mike',
    stroke: '#8884d8',
    fill: '#8884d8',
    fillOpacity: 0.6,
    dot: true,
  },
};
