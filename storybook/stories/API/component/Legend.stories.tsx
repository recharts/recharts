import React from 'react';
import { ResponsiveContainer, LineChart, Line, Legend } from '../../../../src';
import { pageData } from '../../data';
import { LegendProps } from '../props/Legend';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: { ...LegendProps },
  component: Legend,
};

export const API = {
  render: () => {
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
          <Legend />
          <Line dataKey="uv" stroke="#8884d8" />
          <Line dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LegendProps),
  },
};
