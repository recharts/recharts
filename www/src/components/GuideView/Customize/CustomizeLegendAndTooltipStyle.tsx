// #region Sample data
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  {
    name: 'Page A',
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: 'Page C',
    uv: 300,
    pv: 1398,
    amt: 2400,
  },
  {
    name: 'Page D',
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: 'Page E',
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: 'Page F',
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 5,
};
// #endregion

export default function CustomizeLegendAndTooltipStyle() {
  return (
    <BarChart width={600} height={300} data={data} margin={margin}>
      <XAxis dataKey="name" stroke="var(--color-chart-1)" />
      <YAxis stroke="var(--color-text-3)" />
      <Tooltip
        wrapperStyle={{ width: 100 }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
        cursor={{ fill: 'var(--color-solid-7a)' }}
      />
      <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: 'var(--color-surface-raised)',
          border: '1px solid var(--color-border-2)',
          borderRadius: 3,
          lineHeight: '40px',
        }}
      />
      <CartesianGrid stroke="var(--color-border-3)" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="var(--color-chart-1)" barSize={30} />
      <RechartsDevtools />
    </BarChart>
  );
}
