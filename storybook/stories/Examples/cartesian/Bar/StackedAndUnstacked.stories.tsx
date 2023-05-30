import React from 'react';
import { ComposedChart, Bar, ResponsiveContainer } from '../../../../../src';
import { pageData } from '../../../data';

export default {
  title: 'Examples/cartesian/Bar/Stacked And Unstacked',
};
export const StackedAndUnstacked = {
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
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
          <Bar stackId="pv-uv" dataKey="uv" stroke="red" fill="red" />
          <Bar stackId="pv-uv" dataKey="pv" stroke="green" fill="green" />
          <Bar dataKey="amt" stroke="green" fill="green" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};
