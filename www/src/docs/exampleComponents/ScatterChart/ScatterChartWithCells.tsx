import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

// #region Sample data
const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
// #endregion
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

export default function ScatterChartWithCells() {
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
      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" width="auto" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A school" data={data} fill="#8884d8">
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
    </ScatterChart>
  );
}
