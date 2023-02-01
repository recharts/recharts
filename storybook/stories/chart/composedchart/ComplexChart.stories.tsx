import React from 'react';
import { pageData, timeData } from '../../data';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart as Composed,
  Legend,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../..';

export default {
  title: 'Recharts/Chart/Composed Chart/Complex Chart',
  component: Composed,
};

export const ComposedChart = {
  render: (args: any) => {
    return (
      <>
        <p>A simple ComposedChart of Line, Bar, Area</p>
        <div className="composed-chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <Composed
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
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Legend layout="vertical" align="right" verticalAlign="middle" />
              <CartesianGrid stroke="#f5f5f5" />
              <Tooltip />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="uv" fill="#ff7300" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
              <ReferenceDot x="Page C" y={1300} stroke="red" />
              <Brush>
                <LineChart>
                  <Line dataKey="uv" stroke="#ff7300" dot={false} />
                </LineChart>
              </Brush>
            </Composed>
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
