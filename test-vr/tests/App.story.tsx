import * as React from 'react';
import { pageData } from '../../storybook/stories/data';
import { CartesianGrid, Legend, Line, LineChart as RechartsLineChart, XAxis, YAxis } from '../../src';

export const LineChart = () => {
  return (
    <RechartsLineChart width={800} height={500} data={pageData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" interval="preserveEnd" />
      <YAxis interval="preserveEnd" />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </RechartsLineChart>
  );
};
