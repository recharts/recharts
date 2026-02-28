import React, { PureComponent } from 'react';
import {
  createHorizontalChart,
  CartesianGrid,
  Tooltip,
  XAxis as OriginalXAxis,
  YAxis as OriginalYAxis,
  Area as OriginalArea,
} from 'recharts';

// 1. Define your data type
type MyData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

// 2. Pass in the required data and axis types to the helper (TData, TCategorical, TNumerical)
// 3. Unbundle what you need into specifically-typed wrapper components
const {
  AreaChart, // AreaChart is strongly-typed to CartesianChartProps<MyData> and enforces layout="horizontal"
  XAxis, // XAxis is strongly-typed to expect a string dataKey from MyData (e.g. "name")
  YAxis, // YAxis is strongly-typed to expect a number dataKey from MyData (e.g. "uv", "pv", "amt")
  Area, // Area is strongly-typed to expect a number dataKey from MyData
} = createHorizontalChart<MyData, string, number>()({
  XAxis: OriginalXAxis,
  YAxis: OriginalYAxis,
  Area: OriginalArea,
});

const data: MyData[] = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* dataKey is automatically restricted to numbers on MyData without redeclaring! */}
        <Area type="monotone" dataKey="uv" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    );
  }
}
