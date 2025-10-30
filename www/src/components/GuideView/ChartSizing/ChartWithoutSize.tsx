import { Line, LineChart } from 'recharts';

export default function ChartWithoutSize() {
  return (
    <LineChart
      data={[
        { x: 1, y: 1 },
        { x: 2, y: 4 },
      ]}
    >
      <Line dataKey="y" />
    </LineChart>
  );
}
