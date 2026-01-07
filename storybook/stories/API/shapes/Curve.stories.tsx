import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, Curve, ResponsiveContainer } from '../../../../src';
import { coordinateData } from '../../data';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { CurveArgs } from '../arg-types/CurveArgs';

export default {
  component: Curve,
  argTypes: CurveArgs,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Curve {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CurveArgs),
    points: coordinateData,
    type: 'step',
    stroke: '#000',
    fill: 'red',
    strokeDasharray: '3 3',
    strokeWidth: 10,
    strokeOpacity: 0.5,
  },
};
