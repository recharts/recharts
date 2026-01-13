import React from 'react';
import { Args } from '@storybook/react-vite';
import { Label, PolarRadiusAxis, RadarChart, ResponsiveContainer } from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { pageData } from '../../data';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { PolarRadiusAxisArgs } from '../arg-types/PolarRadiusAxisArgs';

export default {
  argTypes: PolarRadiusAxisArgs,
  component: PolarRadiusAxis,
};
const [surfaceWidth, surfaceHeight] = [600, 300];

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <RadarChart width={surfaceWidth} height={surfaceHeight} data={pageData}>
          <PolarRadiusAxis {...args}>
            <Label position="outside" offset={20}>
              PolarRadiusAxis
            </Label>
          </PolarRadiusAxis>
          <RechartsHookInspector />
        </RadarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarRadiusAxisArgs),
    angle: 30,
    dataKey: 'uv',
    type: 'category',
  },
};
