import { Area, Brush, CartesianGrid, createHorizontalChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 2213);

const Typed = createHorizontalChart<MockDataType, string, number>()({ Area, XAxis, YAxis, Tooltip, Line });

const common = (
  <>
    <CartesianGrid />
    <Typed.XAxis dataKey="label" />
    <Typed.YAxis />
    <Tooltip />
  </>
);

// #endregion
export default function Example() {
  return (
    <>
      <Typed.LineChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '20vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {common}
        <Typed.Line type="monotone" dataKey="x" />
        <RechartsDevtools />
      </Typed.LineChart>

      <Typed.LineChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '20vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {common}
        <Typed.Line type="monotone" dataKey="y" />
        <Brush stroke="var(--color-border-1)" fill="var(--color-surface-base)" />
        <RechartsDevtools />
      </Typed.LineChart>

      <Typed.AreaChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '20vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {common}
        <Typed.Area type="monotone" dataKey="z" />
        <RechartsDevtools />
      </Typed.AreaChart>
    </>
  );
}
