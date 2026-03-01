// 1. Import the components you would like to use in your chart from Recharts as usual
import { Area, CartesianGrid, createHorizontalChart, Tooltip, XAxis, YAxis } from 'recharts';

// 2. Define your data type
type MyData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

// 3. Pass in the required data and axis types to the helper (TData, TCategorical, TNumerical). Unbundle what you need into specifically-typed wrapper components
// Chart wrappers are included for all Cartesian charts (AreaChart, BarChart, ComposedChart, LineChart, ScatterChart) by default.
const Typed = createHorizontalChart<MyData, string, number>()({
  // XAxis is strongly-typed to expect a string dataKey from MyData (e.g. "name")
  XAxis,
  // YAxis is strongly-typed to expect a number dataKey from MyData (e.g. "uv", "pv", "amt")
  YAxis,
  // Area is strongly-typed to expect a number dataKey from MyData
  Area,
  // Typed.AreaChart is included automatically. AreaChart is strongly-typed to CartesianChartProps<MyData> and enforces layout="horizontal"
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

export default function Example() {
  // 4. Use the typed components in place of the original Recharts components. TypeScript will enforce correct prop types based on your data type!
  return (
    // layout="vertical" would correctly trigger a TypeScript error below as createHorizontalChart enforces layout="horizontal"
    <Typed.AreaChart
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
      <Typed.XAxis dataKey="name" />
      <Typed.YAxis />
      <Tooltip />
      {/* dataKey is automatically restricted to numbers on MyData without redeclaring! */}
      <Typed.Area type="monotone" dataKey="uv" stroke="#ffc658" fill="#ffc658" />
    </Typed.AreaChart>
  );
}
