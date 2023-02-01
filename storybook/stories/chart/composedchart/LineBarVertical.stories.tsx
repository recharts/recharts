import React from 'react';
import { pageData, timeData } from '../../data';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from '../../../..';

export default {
  title: 'Recharts/Chart/Composed Chart/Line + Bar (Vertical)',
  component: ComposedChart,
  parameters: {
    docs: {
      page: null,
    },
  },
};

export const Vertical = {
  render: (args: any) => {
    return (
      <>
        <p>A vertical ComposedChart of Line, Bar</p>
        <div className="composed-chart-wrapper">
          <ComposedChart
            width={800}
            height={400}
            data={args.data}
            layout="vertical"
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line dataKey="uv" stroke="#ff7300" />
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
