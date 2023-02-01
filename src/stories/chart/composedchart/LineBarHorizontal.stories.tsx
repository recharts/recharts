import React from 'react';
import { pageData, timeData } from '../../data';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from '../../..';

export default {
  title: 'Recharts/Chart/Composed Chart/Line + Bar (Horizontal)',
  component: ComposedChart,
};

export const Horizontal = {
  render: (args: any) => {
    return (
      <>
        <p>A simple ComposedChart of Line, Bar</p>
        <div className="composed-chart-wrapper">
          <ComposedChart
            width={800}
            height={400}
            data={args.data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="pv" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </>
    );
  },
  args: {
    from: new Date('2019-07-04T00:00:00.000Z'),
    to: new Date('2019-07-10T00:00:00.000Z'),
    timeData,
    data: pageData,
  },
};
