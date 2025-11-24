import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TooltipIndex } from 'recharts/types/state/tooltipSlice';

// #region Sample data
const data01 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];
const data02 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

// #endregion
const JointLineScatterChart = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
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
      <ZAxis type="number" range={[100, 100]} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
      <Legend />
      <Scatter name="A school" data={data01} fill="#8884d8" line shape="cross" />
      <Scatter name="B school" data={data02} fill="#82ca9d" line shape="diamond" />
    </ScatterChart>
  );
};

export default JointLineScatterChart;
