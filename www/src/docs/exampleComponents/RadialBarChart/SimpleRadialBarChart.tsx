import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: '18-24', uv: 31.47 },
  { name: '25-29', uv: 26.69 },
  { name: '30-34', uv: 15.69 },
  { name: '35-39', uv: 8.22 },
  { name: '40-49', uv: 8.63 },
  { name: '50+', uv: 2.63 },
  { name: 'unknown', uv: 6.67 },
];

// #endregion
const SimpleRadialBarChart = () => {
  return (
    <RadialBarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }}
      responsive
      cx="30%"
      barSize={14}
      data={data}
    >
      <RadialBar label={{ position: 'insideStart' }} background dataKey="uv" />
      <Legend iconSize={10} position="right" />
      <Tooltip />
      <RechartsDevtools />
    </RadialBarChart>
  );
};

export default SimpleRadialBarChart;
