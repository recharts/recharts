import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, ResponsiveContainer, Scatter, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { ScatterArgs } from '../arg-types/ScatterArgs';

const [surfaceWidth, surfaceHeight] = [600, 300];

export default {
  component: Scatter,
  argTypes: ScatterArgs,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
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
          <Scatter {...args} />
          <XAxis dataKey="pv" />
          <YAxis dataKey="uv" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterArgs),
    shape: 'square',
    line: { stroke: 'red', strokeWidth: 2 },
    lineJointType: 'monotoneX',
    lineType: 'fitting',
  },
};
