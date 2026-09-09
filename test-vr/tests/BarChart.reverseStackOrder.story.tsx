import * as React from 'react';
import { pageData } from '../../storybook/stories/data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '../../src';

export const StackedBarChartWithReverseStackOrderFalse = () => {
  return (
    <BarChart width={600} height={300} data={pageData} reverseStackOrder={false}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" stackId="a" />
      <Bar dataKey="pv" stackId="a" />
    </BarChart>
  );
};

export const StackedBarChartWithReverseStackOrderTrue = () => {
  return (
    <BarChart width={600} height={300} data={pageData} reverseStackOrder>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" stackId="a" />
      <Bar dataKey="pv" stackId="a" />
    </BarChart>
  );
};
