import { Area, AreaChart, createHorizontalChart, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(6, 905);

const Typed = createHorizontalChart<MockDataType, string, number>()({ Area, AreaChart, XAxis, YAxis, Tooltip });

const TinyAreaChart = () => {
  return (
    <Typed.AreaChart
      style={{ width: '100%', maxWidth: '200px', maxHeight: '50px', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Typed.Area type="monotone" dataKey="y" />
      <RechartsDevtools />
    </Typed.AreaChart>
  );
};

export default TinyAreaChart;
