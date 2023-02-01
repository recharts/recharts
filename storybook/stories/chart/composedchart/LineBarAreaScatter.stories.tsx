import React from 'react';
import { pageData, timeData } from '../../data';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../../src';

export default {
  title: 'Recharts/Chart/Composed Chart/Line + Bar + Area + Scatter',
  component: ComposedChart,
};

export const LineBarAreaScatter = {
  render: (args: any) => {
    return (
      <>
        <p>A ComposedChart of Line, Bar, Area, Scatter</p>
        <div className="composed-chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              width={800}
              height={400}
              data={args.data}
              margin={{
                top: 20,
                right: 20,
                bottom: 5,
                left: 20,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
              <CartesianGrid stroke="#f5f5f5" />
              <Tooltip />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Scatter dataKey="pv" fill="red" />
              <Brush />
            </ComposedChart>
          </ResponsiveContainer>
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
