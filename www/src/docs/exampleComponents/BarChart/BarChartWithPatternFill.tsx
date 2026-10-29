import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  RechartsFill,
  RechartsFillDefinitionProps,
  RechartsPattern,
  XAxis,
  YAxis,
  gradients,
  patterns,
  useRechartsTheme,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Page A', uv: 590, pv: 800, amt: 1400, cnt: 490 },
  { name: 'Page B', uv: 868, pv: 967, amt: 1506, cnt: 590 },
  { name: 'Page C', uv: 1397, pv: 1098, amt: 989, cnt: 350 },
];

// #endregion
const chartStyle = { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 };
const chartMargin = { top: 20, right: 0, left: 0, bottom: 5 };

// A custom pattern is a plain object: the tile size, and the texture drawn in each tile.
const hearts: RechartsPattern = {
  width: 12,
  height: 12,
  path: 'M6 10.5L1.8 6.3a2.4 2.4 0 0 1 3.4-3.4L6 3.7l.8-.8a2.4 2.4 0 0 1 3.4 3.4z',
};

// Without a `color`, a fill keeps the theme color of the Bar and draws the gradient or pattern with it
const gradientFill: RechartsFill = { gradient: gradients.fadeDown };
const builtInPatternFill: RechartsFill = { pattern: patterns.diagonal };
const customPatternFill: RechartsFill = { pattern: hearts };

// A custom definition is a component that renders any SVG paint server with the given id.
// Recharts renders it in <defs>, and again in the Legend icon. Tooltip shows the solid `color`.
const FadeToWhite = ({ id, color }: RechartsFillDefinitionProps) => {
  const theme = useRechartsTheme();
  return (
    <linearGradient id={id} x1={0} y1={0} x2={0.4} y2={0.8} spreadMethod="pad">
      <stop offset={0} stopColor={color} />
      <stop offset={1} stopColor={theme?.pageBackground ?? '#fff'} />
    </linearGradient>
  );
};
const customDefinitionFill: RechartsFill = { color: '#ff7300', definition: FadeToWhite };

const BarChartWithPatternFill = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart style={chartStyle} responsive data={data} margin={chartMargin}>
    <CartesianGrid />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Legend iconSize={32} />
    <Bar dataKey="uv" fill={gradientFill} isAnimationActive={isAnimationActive} />
    <Bar dataKey="pv" fill={builtInPatternFill} isAnimationActive={isAnimationActive} />
    <Bar dataKey="amt" fill={customPatternFill} isAnimationActive={isAnimationActive} />
    <Bar dataKey="cnt" fill={customDefinitionFill} isAnimationActive={isAnimationActive} />
    <RechartsDevtools />
  </BarChart>
);

export default BarChartWithPatternFill;
