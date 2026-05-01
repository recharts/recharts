import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, HeatMap, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { contributionHeatMapData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { HeatMapArgs } from '../arg-types/HeatMapArgs';

const [surfaceWidth, surfaceHeight] = [600, 360];

export default {
  component: HeatMap,
  argTypes: HeatMapArgs,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 12,
            right: 16,
            bottom: 8,
            left: 8,
          }}
          data={contributionHeatMapData}
        >
          <XAxis type="category" dataKey="month" allowDuplicatedCategory={false} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="weekday"
            allowDuplicatedCategory={false}
            axisLine={false}
            tickLine={false}
            reversed
            width={48}
          />
          <Tooltip cursor={false} />
          <HeatMap {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(HeatMapArgs),
    dataKey: 'commits',
    isAnimationActive: false,
    radius: 3,
    cellGap: 4,
    name: 'Commits',
  },
};
