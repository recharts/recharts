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
  pattern,
  useRechartsTheme,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { quarter: 'Q1', north: 590, south: 800 },
  { quarter: 'Q2', north: 868, south: 967 },
  { quarter: 'Q3', north: 1397, south: 1098 },
];

// A custom pattern: the tile size, and SVG path data drawn in each tile.
const hearts: RechartsPattern = {
  width: 12,
  height: 12,
  path: 'M6 10.5L1.8 6.3a2.4 2.4 0 0 1 3.4-3.4L6 3.7l.8-.8a2.4 2.4 0 0 1 3.4 3.4z',
};

/*
 * A custom definition: any component that renders an SVG paint server with the `id` it receives.
 * It gets the base color of the fill, and it can call hooks, like useRechartsTheme here.
 */
function FadeToBackground({ id, color }: RechartsFillDefinitionProps) {
  const theme = useRechartsTheme();
  return (
    <linearGradient id={id} x1={0} y1={0} x2={0} y2={1}>
      <stop offset={0} stopColor={color} />
      <stop offset={1} stopColor={theme?.pageBackground ?? '#fff'} />
    </linearGradient>
  );
}

const heartsFill: RechartsFill = { definition: pattern(hearts) };
const fadeFill: RechartsFill = { definition: FadeToBackground };

const chartStyle = { width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 };
const margin = { top: 10, right: 20, left: 0, bottom: 0 };

export default function CustomFillsExample({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <BarChart style={chartStyle} responsive data={data} margin={margin}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="quarter" />
      <YAxis width="auto" />
      <Legend iconSize={24} />
      <Bar dataKey="north" fill={heartsFill} isAnimationActive={isAnimationActive} />
      <Bar dataKey="south" fill={fadeFill} isAnimationActive={isAnimationActive} />
      <RechartsDevtools />
    </BarChart>
  );
}
