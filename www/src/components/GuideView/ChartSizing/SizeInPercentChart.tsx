import { Line, LineChart } from 'recharts';

export default function SizeInPercentChart() {
  return (
    <LineChart
      width="20%"
      height={100}
      data={[
        { x: 1, y: 1 },
        { x: 2, y: 4 },
      ]}
    >
      <Line dataKey="y" />
    </LineChart>
  );
}
