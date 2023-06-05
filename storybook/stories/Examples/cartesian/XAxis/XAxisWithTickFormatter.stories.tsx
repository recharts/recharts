import React from 'react';
import { ComposedChart, Line, XAxis, ResponsiveContainer } from '../../../../../src';
import { dateWithValueData } from '../../../data';

export default {
  title: 'Examples/cartesian/XAxis/WithTickFormatter',
};

export const WithTickFormatter = {
  render: () => {
    const tickFormatter = (value: number) =>
      new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });

    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={600} height={50} data={dateWithValueData}>
          <XAxis dataKey="time" type="number" scale="time" domain={['auto', 'auto']} tickFormatter={tickFormatter} />
          <Line dataKey="value" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};
