import React from 'react';
import { ComposedChart, XAxis, ResponsiveContainer } from '../../../../../src';

export default {
  title: 'Examples/cartesian/XAxis/WithCalculatedPadding',
};

const data = [0, 2, 4, 6, 8, 10].map(value => {
  return { x: value };
});

export const WithCalculatedPadding = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <>
          <h4>default:</h4>
          <ComposedChart width={600} height={50} data={data}>
            <XAxis dataKey="x" type="number" />
          </ComposedChart>

          <h4>no-gap:</h4>
          <ComposedChart width={600} height={50} data={data}>
            <XAxis dataKey="x" type="number" padding="no-gap" />
          </ComposedChart>

          <h4>gap:</h4>
          <ComposedChart width={600} height={50} data={data}>
            <XAxis dataKey="x" type="number" padding="gap" />
          </ComposedChart>
        </>
      </ResponsiveContainer>
    );
  },
};
