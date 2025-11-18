import { Line, LineChart } from 'recharts';

export default function SizeInStyleChart() {
  return (
    <LineChart
      style={{
        width: '100%',
        maxWidth: '400px',
        maxHeight: '80vh',
        aspectRatio: 1.618,
      }}
      responsive
      data={[
        { x: 1, y: 1 },
        { x: 2, y: 4 },
      ]}
    >
      <Line dataKey="y" />
    </LineChart>
  );
}
