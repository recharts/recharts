import React from 'react';
import { Args } from '@storybook/react-vite';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBarChart,
  ResponsiveContainer,
} from '../../../../src';
import { pageData, subjectData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { PolarAngleAxisArgs } from '../arg-types/PolarAngleAxisArgs';

export default {
  argTypes: PolarAngleAxisArgs,
  component: PolarAngleAxis,
};

const [surfaceWidth, surfaceHeight] = [600, 300];

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <RadarChart width={surfaceWidth} height={surfaceHeight} cx="50%" cy="50%" outerRadius="80%" data={subjectData}>
          {/* All components are added to show the interaction with the PolarAngleAxis properties */}
          <PolarGrid />
          {/* The target component */}
          <PolarAngleAxis dataKey="subject" {...args} />
          <PolarRadiusAxis />
          <Radar name="Student A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    // This API story should have explicit values for all props
    ...getStoryArgsFromArgsTypesObject(PolarAngleAxisArgs),
    dataKey: 'subject',
    axisLineType: 'polygon',
    orientation: 'outer',
    tick: true,
    tickLine: true,
    tickSize: 8,
    stroke: '#666',
    type: 'category',
  },
};

export const InRadialBarChart = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <RadialBarChart
          width={surfaceWidth}
          height={surfaceHeight}
          cx="50%"
          cy="50%"
          innerRadius={20}
          outerRadius={140}
          data={pageData}
        >
          {/* The target component */}
          <PolarAngleAxis {...args} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarAngleAxisArgs),
    axisLineType: 'circle',
    stroke: '#888',
    dataKey: 'uv',
    type: 'number',
  },
};
