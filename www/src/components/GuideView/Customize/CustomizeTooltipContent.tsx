import { Bar, BarChart, Tooltip, TooltipContentProps, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', revenue: 4200, note: 'New year promo' },
  { month: 'Feb', revenue: 5800, note: 'Referral campaign' },
  { month: 'Mar', revenue: 7200, note: 'Spring launch' },
  { month: 'Apr', revenue: 6100, note: 'Steady state' },
  { month: 'May', revenue: 8900, note: 'Conference season' },
  { month: 'Jun', revenue: 7400, note: 'Summer slowdown' },
];

/**
 * `content` hands you the whole tooltip: the active payload, the label and
 * whether the tooltip is currently visible. Return any React - it is plain HTML,
 * not SVG, so normal CSS applies.
 */
function RevenueTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || payload == null || payload.length === 0) {
    return null;
  }

  const entry = payload[0];
  const point = entry?.payload;

  return (
    <div
      style={{
        border: '1px solid #d88488',
        backgroundColor: '#fff',
        color: '#18181b',
        padding: 10,
        borderRadius: 5,
        boxShadow: '1px 1px 2px #d88488',
      }}
    >
      <p style={{ margin: 0, fontWeight: 700 }}>
        {label}: {entry?.value}
      </p>
      <p style={{ margin: 0 }}>{point?.note}</p>
      {/* The payload carries your original data point, so anything in it is available here. */}
      <p style={{ margin: 0, borderTop: '1px dashed #f5f5f5' }}>Anything you want can be displayed here.</p>
    </div>
  );
}

export default function CustomizeTooltipContent() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip content={RevenueTooltip} defaultIndex={2} active />
      <Bar dataKey="revenue" />
      <RechartsDevtools />
    </BarChart>
  );
}
