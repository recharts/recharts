import React from 'react';
import { Args } from '@storybook/react-vite';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { ResponsiveContainer, LabelList, LineChart, Line } from '../../../../src';
import { pageData } from '../../data';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { LabelListArgs } from '../arg-types/LabelListArgs';

export default {
  argTypes: LabelListArgs,
  component: LabelList,
};

export const API = {
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          {/* The target component */}
          <Line dataKey="uv">
            <LabelList {...args} />
          </Line>
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    // This API story should have explicit values for all props
    dataKey: 'uv',
    position: 'top',
  },
};
