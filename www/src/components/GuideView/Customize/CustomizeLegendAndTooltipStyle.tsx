import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', revenue: 4200, profit: 1100 },
  { month: 'Feb', revenue: 5800, profit: 1500 },
  { month: 'Mar', revenue: 7200, profit: 2400 },
  { month: 'Apr', revenue: 6100, profit: 1800 },
  { month: 'May', revenue: 8900, profit: 3100 },
  { month: 'Jun', revenue: 7400, profit: 2600 },
];

export default function CustomizeLegendAndTooltipStyle() {
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
      {/*
       * Tooltip has three style slots:
       * wrapperStyle positions the floating box, contentStyle paints it,
       * labelStyle is the header and itemStyle is one data row.
       */}
      <Tooltip
        defaultIndex={3}
        contentStyle={{ backgroundColor: '#f8fafc', border: '2px solid #64748b', borderRadius: 8, padding: 10 }}
        labelStyle={{ margin: 0, fontWeight: 700, color: '#0f172a' }}
        itemStyle={{ display: 'block', paddingTop: 2, paddingBottom: 2 }}
      />
      {/*
       * Legend uses wrapperStyle for the box and labelStyle for the individual
       * entries - note that `labelStyle` means the opposite thing here than it
       * does on Tooltip.
       */}
      <Legend
        wrapperStyle={{
          backgroundColor: '#f1f5f9',
          border: '1px solid #cbd5e1',
          borderRadius: 4,
          paddingTop: 4,
          paddingBottom: 4,
        }}
        labelStyle={{ color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em' }}
        iconType="circle"
      />
      <Bar dataKey="revenue" barSize={20} />
      <Bar dataKey="profit" barSize={20} />
      <RechartsDevtools />
    </BarChart>
  );
}
