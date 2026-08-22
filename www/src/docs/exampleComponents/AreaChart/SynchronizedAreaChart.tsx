import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(6, 298905);

const Typed = createHorizontalChart<MockDataType, string, number>()({ Area, AreaChart, XAxis, YAxis, Tooltip });

const SynchronizedAreaChart = () => {
  return (
    <div
      style={{ width: '100%', display: 'grid', gridTemplateColumns: '30% 70%', gridTemplateRows: 'repeat(2, 20vh)' }}
    >
      <Typed.AreaChart
        responsive
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <Typed.XAxis dataKey="label" />
        <Typed.YAxis width="auto" />
        <Typed.Tooltip />
        <Typed.Area type="monotone" dataKey="x" />
        <RechartsDevtools />
      </Typed.AreaChart>

      <Typed.AreaChart
        responsive
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <Typed.XAxis dataKey="label" />
        <Typed.YAxis width="auto" />
        <Typed.Tooltip />
        <Typed.Area type="monotone" dataKey="y" animationBegin={200} animationDuration={1300} />
      </Typed.AreaChart>

      <Typed.AreaChart
        style={{ gridColumn: '1/span 2' }}
        responsive
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <Typed.XAxis dataKey="label" />
        <Typed.YAxis width="auto" />
        <Typed.Tooltip />
        <Typed.Area
          type="monotone"
          dataKey="z"
          strokeWidth={4}
          strokeDasharray="16 16"
          animationBegin={400}
          animationDuration={1100}
        />
      </Typed.AreaChart>
    </div>
  );
};

export default SynchronizedAreaChart;
