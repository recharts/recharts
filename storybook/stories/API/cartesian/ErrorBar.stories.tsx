import React from 'react';
import { Args } from '@storybook/react-vite';
import { ScatterChart, ErrorBar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Scatter } from '../../../../src';
import { errorData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { ErrorBarArgs } from '../arg-types/ErrorBarArgs';

export default {
  component: ErrorBar,
  argTypes: ErrorBarArgs,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ScatterChart
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          width={730}
          height={250}
        >
          <CartesianGrid />
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <Scatter data={errorData} fill="#ff7300">
            <ErrorBar dataKey="errorY" {...args} />
          </Scatter>
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ErrorBarArgs),
    width: 4,
    strokeWidth: 2,
    stroke: 'green',
    direction: 'y',
    dataKey: 'errorY',
  },
};
