import { Line, LineChart } from 'recharts';

const LineChartNavExample = () => {
  return (
    <LineChart style={{ aspectRatio: 2 * 1.618 }} responsive data={[{ val: 1 }, { val: 3 }, { val: 2 }, { val: 4 }]}>
      <Line type="monotone" dataKey="val" stroke="#8884d8" strokeWidth={2} dot={false} />
    </LineChart>
  );
};

export default LineChartNavExample;
