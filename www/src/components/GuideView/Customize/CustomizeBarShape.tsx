import { Bar, BarChart, BarShapeProps, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 7200 },
  { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 8900 },
  { month: 'Jun', revenue: 7400 },
];

const getPath = (x: number, y: number, width: number, height: number) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

/**
 * A shape component receives the resolved geometry and the resolved styles -
 * including whatever the theme supplied - and returns any SVG you like.
 *
 * `isActive` is true if this shape is currently highlighted by a mouse cursor or keyboard shortcut.
 */
export function TriangleBar(props: BarShapeProps) {
  const { fill, fillOpacity, x, y, width, height, isActive } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
      fillOpacity={isActive ? 0.4 : fillOpacity}
    />
  );
}

export default function CustomizeBarShape() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip defaultIndex={4} />
      {/*
       * `shape` replaces the normal rendering.
       *
       * Individual bars by default do not respond to mouse events (a performance optimization for large charts).
       * pass `activeBar` (a shortcut for activeBar={true}) to receive `isActive` prop inside the `shape` component.
       */}
      <Bar dataKey="revenue" shape={TriangleBar} activeBar />
      <RechartsDevtools />
    </BarChart>
  );
}
