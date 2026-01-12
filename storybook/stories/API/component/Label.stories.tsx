import React from 'react';
import { Args, Meta } from '@storybook/react-vite';
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { LabelArgs } from '../arg-types/LabelArgs';

export default {
  argTypes: LabelArgs,
  component: Label,
} satisfies Meta<typeof Label>;

export const API = {
  name: 'CartesianPositions',
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={pageData}
          margin={{
            top: 100,
            bottom: 100,
            left: 100,
            right: 100,
          }}
        >
          <CartesianGrid />
          <Line type="monotone" dataKey="uv" stroke="#111" />
          <YAxis tick={false} />
          <XAxis dataKey="name" tick={false} />
          <Label value={`Position: ${args.position}`} {...args} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelArgs), position: 'center' },
};

export const PolarPositions = {
  render: (args: Args) => {
    return (
      <RadarChart
        width={800}
        height={800}
        data={pageData}
        margin={{
          top: 30,
          bottom: 30,
          left: 100,
          right: 100,
        }}
      >
        <Radar type="monotone" dataKey="uv" fill="rgba(0, 200, 200, 0.2)" />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis tick={false} />
        <Label value={`Position: ${args.position}`} {...args} />
        <RechartsHookInspector />
      </RadarChart>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelArgs), position: 'center' },
};
