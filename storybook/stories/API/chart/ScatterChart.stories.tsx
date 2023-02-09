import React from 'react';
import { coordinateData } from '../../data';
import { Scatter, ScatterChart, XAxis, YAxis } from '../../../../src';

export default {
  component: ScatterChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ScatterChart width={500} height={400}>
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <Scatter data={args.data} />
      </ScatterChart>
    );
  },
  args: {
    data: coordinateData,
  },
};
