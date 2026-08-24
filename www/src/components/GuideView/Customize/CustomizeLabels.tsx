import { Bar, BarChart, LabelList, LabelProps, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', revenue: 4200, profit: 1100 },
  { month: 'Feb', revenue: 5800, profit: 1500 },
  { month: 'Mar', revenue: 7200, profit: 2400 },
  { month: 'Apr', revenue: 6100, profit: 1800 },
  { month: 'May', revenue: 8900, profit: 3100 },
  { month: 'Jun', revenue: 7400, profit: 2600 },
];

const formatMonth = (value: string): string => value.toUpperCase();

const formatThousands = (value: number): string => `${value / 1000}k`;

/**
 * A `content` render function gets the resolved geometry of the label,
 * so you can place and shape it however you like.
 */
function ProfitLabel({ x, y, width, value }: LabelProps) {
  if (x == null || y == null || width == null) {
    return null;
  }

  return (
    <text x={Number(x) + Number(width) / 2} y={Number(y)} dy={-6} textAnchor="middle" fontSize={11}>
      ▲ {value}
    </text>
  );
}

export default function CustomizeLabels() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 25, right: 30, left: 20, bottom: 25 }}
    >
      {/* Axis titles are the `label` prop; tick text goes through `tickFormatter`. */}
      <XAxis
        dataKey="month"
        tickFormatter={formatMonth}
        label={{ position: 'insideBottomRight', value: 'Month', offset: -10 }}
      />
      <YAxis
        tickFormatter={formatThousands}
        label={{ position: 'insideTopLeft', value: 'Revenue', angle: -90, dy: 60 }}
      />
      {/* LabelList with a formatter covers the common case ... */}
      <Bar dataKey="revenue">
        <LabelList dataKey="revenue" position="top" formatter={label => `${Number(label) / 1000}k`} fontSize={11} />
      </Bar>
      {/* ... and a `content` component covers everything else. */}
      <Bar dataKey="profit">
        <LabelList dataKey="profit" content={ProfitLabel} />
      </Bar>
      <RechartsDevtools />
    </BarChart>
  );
}
