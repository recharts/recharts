import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
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

export default function CustomizeSizeAndStroke() {
  return (
    <BarChart width={600} height={300} data={data} margin={margin}>
      <XAxis dataKey="name" stroke="red" />
      <YAxis stroke="red" />
      <Tooltip
        cursor={{ fill: 'var(--color-solid-7a)' }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
      />
      <CartesianGrid stroke="var(--color-border-3)" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="green" barSize={30} />
      <RechartsDevtools />
    </BarChart>
  );
}
