import { Area, AreaChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const AreaChartNavExample = () => {
  return (
    <AreaChart style={{ aspectRatio: 2 * 1.618 }} responsive data={[{ val: 1 }, { val: 3 }, { val: 2 }, { val: 4 }]}>
      <Area type="monotone" dataKey="val" stroke="#8884d8" strokeWidth={2} dot={false} />
      <RechartsDevtools />
    </AreaChart>
  );
};

export default AreaChartNavExample;
