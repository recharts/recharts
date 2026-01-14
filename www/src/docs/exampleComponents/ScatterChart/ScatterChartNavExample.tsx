import { Scatter, ScatterChart, ZAxis } from 'recharts';

const ScatterChartNavExample = () => {
  return (
    <ScatterChart
      style={{ aspectRatio: 2 * 1.618 }}
      responsive
      data={[
        { x: 100, y: 200, z: 20 },
        { x: 120, y: 100, z: 60 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 600 },
        { x: 110, y: 280, z: 200 },
      ]}
    >
      <Scatter dataKey="x" fill="var(--color-chart-1)" />
      <ZAxis range={[20, 60]} dataKey="z" />
    </ScatterChart>
  );
};

export default ScatterChartNavExample;
