import { Bar, BarChart, CartesianGrid, Tooltip, useActiveTooltipDataPoints, usePlotArea, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

type DataPoint = { month: string; revenue: number };

const data: Array<DataPoint> = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 7200 },
  { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 8900 },
  { month: 'Jun', revenue: 7400 },
];

/**
 * `usePlotArea` reports where the drawable area sits after axes and legends
 * have taken their space, so custom elements can position themselves against it.
 */
function PlotAreaFrame() {
  const plotArea = usePlotArea();

  if (plotArea == null) {
    return null;
  }

  return <rect {...plotArea} fill="none" stroke="#64748b" strokeDasharray="4 4" />;
}

/**
 * Chart state is available to any component inside the chart, so you can render
 * your own readouts without going through Tooltip at all.
 */
function ActiveReadout() {
  const plotArea = usePlotArea();
  const activePoints = useActiveTooltipDataPoints<DataPoint>();
  const point = activePoints?.[0];

  if (plotArea == null || point == null) {
    return null;
  }

  return (
    <text x={plotArea.x + 10} y={plotArea.y + 22} fill="#0ea5e9" fontSize={16} fontWeight={700}>
      {point.month}: {point.revenue}
    </text>
  );
}

export default function CustomizeCustomElement() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip defaultIndex={4} />
      <Bar dataKey="revenue" />
      {/* Your own components are ordinary chart children - no wrapper component needed. */}
      <PlotAreaFrame />
      <ActiveReadout />
      <RechartsDevtools />
    </BarChart>
  );
}
