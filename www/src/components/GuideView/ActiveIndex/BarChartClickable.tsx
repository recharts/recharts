import { Bar, BarChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

export default function BarChartClickable() {
  return (
    <BarChart
      width={550}
      height={240}
      data={[
        { name: 'Page A', uv: 590 },
        { name: 'Page B', uv: 290 },
        { name: 'Page C', uv: 868 },
      ]}
    >
      <Tooltip trigger="click" content={() => null} cursor={false} shared={false} />
      <Bar dataKey="uv" stackId="a" fill="green" activeBar={{ stroke: 'black', strokeWidth: 7 }} />
      <RechartsDevtools />
    </BarChart>
  );
}
