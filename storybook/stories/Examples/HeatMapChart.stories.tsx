import { Args, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { HeatMap, HeatMapChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../src';
import { contributionHeatMapData } from '../data';

export default {
  component: HeatMapChart,
  docs: {
    autodocs: false,
  },
};

export const Basic: StoryObj = {
  render: (_args: Args) => (
    <ResponsiveContainer width="100%" height={360}>
      <HeatMapChart data={contributionHeatMapData} margin={{ top: 12, right: 16, bottom: 8, left: 8 }}>
        <XAxis
          type="category"
          dataKey="month"
          name="Month"
          allowDuplicatedCategory={false}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="weekday"
          name="Weekday"
          allowDuplicatedCategory={false}
          axisLine={false}
          tickLine={false}
          reversed
          width={48}
        />
        <Tooltip cursor={false} />
        <HeatMap dataKey="commits" name="Commits" cellGap={4} radius={3} isAnimationActive={false} />
      </HeatMapChart>
    </ResponsiveContainer>
  ),
};
