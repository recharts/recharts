import React from 'react';
import { coordinateData } from '../../data';
import { ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from '../../../../src';

export default {
  component: ScatterChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={args.data} />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: coordinateData,
  },
};
