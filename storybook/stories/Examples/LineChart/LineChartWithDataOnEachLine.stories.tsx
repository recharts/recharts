// Reproducing https://github.com/recharts/recharts/issues/4687

import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from '../../../../src';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];

// Every Line brings its own data, and each of them has a point at every month.
const pageViews = months.map(month => ({ month, views: months.indexOf(month) + 2 }));
const visitors = months.map(month => ({ month, visitors: 2 * (months.indexOf(month) + 2) }));
const clicks = months.map(month => ({ month, clicks: 3 * (months.indexOf(month) + 2) }));

export const LineChartWithDataOnEachLine = {
  render: () => {
    return (
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name="Page views" dataKey="views" data={pageViews} />
        <Line name="Visitors" dataKey="visitors" data={visitors} />
        <Line name="Clicks" dataKey="clicks" data={clicks} />
      </LineChart>
    );
  },
};
