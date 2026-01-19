import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, LabelProps } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 8,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const renderCustomizedLabel = (props: LabelProps) => {
  const { x, y, width, value } = props;

  if (x == null || y == null || width == null) {
    return null;
  }
  const radius = 10;

  return (
    <g>
      <circle cx={Number(x) + Number(width) / 2} cy={Number(y) - radius} r={radius} fill="#8884d8" />
      <text
        x={Number(x) + Number(width) / 2}
        y={Number(y) - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {String(value).split(' ')[1]}
      </text>
    </g>
  );
};

const BarChartWithMinHeight = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 25,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis width="auto" stroke="var(--color-text-3)" />
      <Tooltip
        cursor={{ fill: 'var(--color-solid-7a)' }}
        contentStyle={{ backgroundColor: 'var(--color-surface-raised)', borderColor: 'var(--color-border-2)' }}
      />
      <Legend />
      <Bar dataKey="pv" fill="var(--color-chart-1)" minPointSize={5}>
        <LabelList dataKey="name" content={renderCustomizedLabel} />
      </Bar>
      <Bar dataKey="uv" fill="var(--color-chart-2)" minPointSize={10} />
      <RechartsDevtools />
    </BarChart>
  );
};

export default BarChartWithMinHeight;
