import { Bar, BarChart } from 'recharts';

const BarChartNavExample = () => {
  return (
    <BarChart style={{ aspectRatio: 2 * 1.618 }} responsive data={[{ val: 1 }, { val: 3 }, { val: 2 }, { val: 4 }]}>
      <Bar dataKey="val" />
    </BarChart>
  );
};

export default BarChartNavExample;
