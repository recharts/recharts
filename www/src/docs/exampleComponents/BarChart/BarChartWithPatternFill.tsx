import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, autoPalette } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
  { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
  { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
  { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
  { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
  { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
];

// #endregion
const chartStyle = { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 };
const chartMargin = { top: 20, right: 0, left: 0, bottom: 5 };

const BarChartWithPatternFill = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart style={chartStyle} responsive data={data} margin={chartMargin}>
    {/* Gradients and patterns live in <defs>, and the bars reference them with fill="url(#id)" */}
    <defs>
      <linearGradient id="bar-fill-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" style={{ stopColor: autoPalette[0], stopOpacity: 0.9 }} />
        <stop offset="95%" style={{ stopColor: autoPalette[0], stopOpacity: 0.1 }} />
      </linearGradient>
      <pattern id="bar-fill-stripes" width="6" height="6" patternUnits="userSpaceOnUse">
        <path d="M-1,1 l2,-2 M0,6 l6,-6 M5,7 l2,-2" style={{ stroke: autoPalette[1], strokeWidth: 2 }} />
      </pattern>
      <pattern id="bar-fill-stars" width="10" height="10" patternUnits="userSpaceOnUse">
        <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" style={{ fill: autoPalette[2] }} />
      </pattern>
    </defs>
    <CartesianGrid />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Legend />
    <Bar
      dataKey="uv"
      fill="url(#bar-fill-gradient)"
      stroke={autoPalette[0]}
      fillOpacity={1}
      isAnimationActive={isAnimationActive}
    />
    <Bar
      dataKey="pv"
      fill="url(#bar-fill-stripes)"
      stroke={autoPalette[1]}
      fillOpacity={1}
      isAnimationActive={isAnimationActive}
    />
    <Bar
      dataKey="amt"
      fill="url(#bar-fill-stars)"
      stroke={autoPalette[2]}
      fillOpacity={1}
      isAnimationActive={isAnimationActive}
    />
    <RechartsDevtools />
  </BarChart>
);

export default BarChartWithPatternFill;
