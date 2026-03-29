import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { chartTheme } from '../../../styles/chart';

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
    pv: 9800,
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
    uv: 1890,
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
export default function Example(props: { isAnimationActive?: boolean }) {
  return (
    <LineChart
      layout="vertical"
      style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid {...chartTheme.cartesianGrid()} />
      <XAxis type="number" domain={[0, 'dataMax + 1000']} {...chartTheme.axis()} />
      <YAxis dataKey="name" type="category" width="auto" {...chartTheme.axis()} />
      <Tooltip cursor={chartTheme.tooltipCursor()} contentStyle={chartTheme.tooltipContent()} />
      <Legend />
      <Line
        dataKey="pv"
        {...chartTheme.line({ tone: 'chart-indigo' })}
        dot={chartTheme.dot()}
        activeDot={chartTheme.activeDot()}
        isAnimationActive={props.isAnimationActive}
      />
      <Line
        dataKey="uv"
        {...chartTheme.line({ tone: 'chart-green' })}
        dot={chartTheme.dot()}
        activeDot={chartTheme.activeDot()}
        isAnimationActive={props.isAnimationActive}
      />
      <RechartsDevtools />
    </LineChart>
  );
}
