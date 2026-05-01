import React from 'react';
import { Args } from '@storybook/react-vite';
import { HeatMap, HeatMapChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { contributionHeatMapData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { HeatMapChartArgs } from '../arg-types/HeatMapChartArgs';

export default {
  component: HeatMapChart,
  argTypes: HeatMapChartArgs,
};

export const API = {
  name: 'Simple',
  render: (args: Args) => {
    const { data, ...rest } = args;

    return (
      <ResponsiveContainer width="100%" height={360}>
        <HeatMapChart {...rest} data={data}>
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
          <HeatMap dataKey="commits" isAnimationActive={false} name="Commits" cellGap={4} radius={3} />
          <RechartsHookInspector />
        </HeatMapChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(HeatMapChartArgs),
    data: contributionHeatMapData,
    margin: {
      top: 12,
      right: 16,
      bottom: 8,
      left: 8,
    },
  },
};
