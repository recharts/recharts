import { CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import { between, random, RechartsDevtools } from '@recharts/devtools';

const gen = random(42);

const countOfScatterElements = 100;
const pointsPerScatter = 10;

const datasets = Array.from({ length: countOfScatterElements }, (_1, i) => {
  const passed = between(gen, 0, 10) > 5;
  return {
    name: `line-${i}`,
    passed,
    points: Array.from({ length: pointsPerScatter }, _2 => ({
      x: between(gen, 0, 100),
      y: between(gen, 0, 100),
      z: between(gen, 0, 100),
    })),
  };
});

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
      <ZAxis dataKey="z" range={[0, 100]} />
      <Tooltip />

      {datasets.map(line => (
        <Scatter
          key={line.name}
          data={line.points}
          fill={line.passed ? '#22c55e' : '#ef4444'}
          isAnimationActive={false}
          name={line.name}
          strokeWidth={4}
        />
      ))}
      <RechartsDevtools />
    </ScatterChart>
  );
}
