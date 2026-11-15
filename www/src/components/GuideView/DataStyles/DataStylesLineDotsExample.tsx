import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
  { day: 'Mon', visitors: 320 },
  { day: 'Tue', visitors: 410 },
  { day: 'Wed', visitors: 980, fill: '#e11d48', r: 6 }, // highlight the outlier
  { day: 'Thu', visitors: 450 },
];

const chartStyle = { width: '100%', maxWidth: '500px', aspectRatio: 1.618 };

export default function DataStylesLineDotsExample({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <LineChart style={chartStyle} responsive data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Line dataKey="visitors" stroke="#8884d8" dot isAnimationActive={isAnimationActive} />
    </LineChart>
  );
}
