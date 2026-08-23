import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 7200 },
  { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 8900 },
  { month: 'Jun', revenue: 7400 },
];

export default function CustomizeSizeAndStroke() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      {/* Every SVG presentation attribute is available as a prop. */}
      <CartesianGrid stroke="#94a3b8" strokeDasharray="5 5" strokeOpacity={0.5} />
      <XAxis dataKey="month" stroke="#e11d48" />
      <YAxis stroke="#e11d48" strokeWidth={2} />
      {/* Tooltip is HTML, so it takes `style` and `className` rather than SVG attributes. */}
      <Tooltip defaultIndex={2} />
      <Bar
        dataKey="revenue"
        fill="#0ea5e9"
        fillOpacity={0.85}
        stroke="#0369a1"
        strokeWidth={2}
        radius={4}
        barSize={30}
      />
      <RechartsDevtools />
    </BarChart>
  );
}
