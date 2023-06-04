import React from 'react';
import { ComposedChart, XAxis, ResponsiveContainer } from '../../../../../src';
import { coordinateWithValueData, dateWithValueData, pageData, timeData } from '../../../data';

export default {
  title: 'Examples/cartesian/XAxis/WithDifferentDataTypes',
};

export const WithDifferentDataTypes = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <>
          <ComposedChart width={600} height={50} data={pageData}>
            <XAxis dataKey="name" />
          </ComposedChart>
          <ComposedChart width={600} height={50} data={coordinateWithValueData}>
            <XAxis dataKey="x" domain={['auto', 'auto']} type="number" />
          </ComposedChart>
          <ComposedChart width={600} height={50} data={dateWithValueData}>
            <XAxis dataKey="time" domain={['auto', 'auto']} type="number" scale="time" />
          </ComposedChart>
          <ComposedChart width={600} height={50} data={timeData}>
            <XAxis dataKey="x" />
          </ComposedChart>
        </>
      </ResponsiveContainer>
    );
  },
};
