import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknown',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

// #endregion
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const SimpleRadialBarChart = () => {
  return (
    <RadialBarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }}
      responsive
      cx="30%"
      barSize={14}
      data={data}
    >
      <RadialBar
        label={{ position: 'insideStart', fill: 'var(--color-text-1)' }}
        background={{
          fill: 'var(--color-border-4)',
        }}
        dataKey="uv"
      />
      <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      <Tooltip
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
        itemStyle={{
          color: 'var(--color-text-1)',
        }}
        cursor={{ stroke: 'var(--color-border-2)' }}
      />
      <RechartsDevtools />
    </RadialBarChart>
  );
};

export default SimpleRadialBarChart;
