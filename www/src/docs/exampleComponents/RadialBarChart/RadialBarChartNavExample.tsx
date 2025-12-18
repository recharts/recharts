import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 38.22, pv: 9800, fill: '#82ca9d' },
];

// #endregion
const RadialBarChartNavExample = () => {
  return (
    <RadialBarChart responsive innerRadius="20%" outerRadius="130%" data={data} style={{ aspectRatio: 1 }}>
      <RadialBar background dataKey="uv" />
      <PolarAngleAxis domain={[0, 44]} type="number" dataKey="uv" />
      <RechartsDevtools />
    </RadialBarChart>
  );
};

export default RadialBarChartNavExample;
