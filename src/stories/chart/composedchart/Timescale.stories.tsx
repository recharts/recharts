import React from 'react';
import { pageData, timeData } from '../../data';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from '../../..';

export default {
  title: 'Recharts/Chart/Composed Chart/ComposedChart of time scale',
  component: ComposedChart,
};

export const LineBarAreaScatter = {
  render: (args: any) => {
    return (
      <>
        <p>A ComposedChart of time scale</p>
        <div className="composed-chart-wrapper">
          <ComposedChart
            width={600}
            height={400}
            data={args.timeData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="x"
              domain={[args.from.getTime(), args.to.getTime()]}
              scale="time"
              type="number"
              tick={{ fontSize: 10, fill: 'red' }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="y" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="y" stroke="#ff7300" />
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
