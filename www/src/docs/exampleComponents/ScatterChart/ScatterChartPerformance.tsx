import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { between, random } from '@recharts/devtools';

const gen = random(42);

const chartData = {
  points: Array.from({ length: 100 }, (_1, i) => ({
    name: `line-${i}`,
    passed: between(gen, 0, 10) > 5,
    points: Array.from({ length: 10 }, (_2, j) => ({
      x: j * 0.1,
      y: between(gen, 0, 100),
    })),
  })),
};

export default function ScatterChartPerformance() {
  return (
    <ScatterChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="x" type="number" unit="m" domain={[0, 1]} />
      <YAxis dataKey="y" type="number" unit="m" domain={[0, 100]} />
      <Tooltip />

      {chartData.points.map(line => (
        <Scatter
          key={line.name}
          data={line.points}
          fill={line.passed ? '#22c55e' : '#ef4444'}
          isAnimationActive={false}
          line
          name={line.name}
          strokeWidth={4}
        />
      ))}
    </ScatterChart>
  );
}
