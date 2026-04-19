import { Area, AreaChart, CartesianGrid, Tooltip, usePlotArea, XAxis, YAxis, AreaRevealShape } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import type { AnimationInterpolateFn } from 'recharts';

// We need the internal type for AreaPointItem - in practice users
// would define their own type or use `any` for the interpolation function.
// TODO: export AreaPointItem from recharts public API
type AreaPointItem = { x: number | null; y: number | null; value?: ReadonlyArray<unknown>; payload?: any };

// Helper to linearly interpolate between two numbers
function lerp(from: number | undefined | null, to: number | null, t: number): number | null {
  if (to == null) return to;
  if (from == null) return to;
  return from + (to - from) * t;
}

// #region Sample data
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
// #endregion

/**
 * Custom animation: grow from the bottom of the chart.
 * Uses animationInterpolateFn to move points from the chart bottom upwards.
 * Combined with a custom shape (no clipPath) so the reveal animation doesn't interfere.
 */
const useAnimateFromBottom = (): AnimationInterpolateFn<AreaPointItem> => {
  const plotArea = usePlotArea();
  const zero = plotArea ? plotArea.y + plotArea.height : 0;

  return (items, t) => {
    if (items == null) return [];
    if (t === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
    return items.flatMap(item => {
      if (item.status === 'removed') return [];
      const { next } = item;
      return [{ ...next, y: lerp(zero, next.y, t) }];
    });
  };
};

/**
 * Custom shape that wraps AreaRevealShape but can also be used
 * to demonstrate that custom shapes skip the built-in clipPath animation.
 * By using AreaRevealShape here, we get the same default animation
 * but we could also customize it.
 */
function GrowFromBottomShape(props: Parameters<typeof AreaRevealShape>[0]) {
  // Skip the clip-path reveal — we're using animationInterpolateFn for the entrance instead
  return <AreaRevealShape {...props} isEntrance={false} />;
}

function MyAnimatedArea() {
  const growFromBottom = useAnimateFromBottom();
  return (
    <Area
      type="monotone"
      dataKey="uv"
      stroke="#8884d8"
      fillOpacity={1}
      fill="url(#colorUv)"
      animationInterpolateFn={growFromBottom}
      shape={GrowFromBottomShape}
    />
  );
}

export default function AreaChartCustomAnimationExample() {
  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <MyAnimatedArea />
      <RechartsDevtools />
    </AreaChart>
  );
}
