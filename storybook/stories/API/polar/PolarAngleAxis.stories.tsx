import React from 'react';
import { Args } from '@storybook/react-vite';
import { PolarAngleAxis, RadialBarChart } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { PolarAngleAxisArgs } from '../arg-types/PolarAngleAxisArgs';

export default {
  argTypes: PolarAngleAxisArgs,
  component: PolarAngleAxis,
};
const [surfaceWidth, surfaceHeight] = [600, 300];

export const API = {
  render: (args: Args) => {
    return (
      <RadialBarChart width={surfaceWidth} height={surfaceHeight} data={pageData}>
        <PolarAngleAxis {...args} />
        <RechartsHookInspector />
      </RadialBarChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(PolarAngleAxisArgs),
    axisLineType: 'polygon',
    stroke: 'green',
    dataKey: 'uv',
    type: 'number',
  },
};
