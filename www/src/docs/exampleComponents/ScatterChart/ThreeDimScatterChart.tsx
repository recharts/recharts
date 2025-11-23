import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TooltipIndex } from 'recharts/types/state/tooltipSlice';

// #region Sample data
const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

// #endregion
const ThreeDimScatterChart = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
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
      <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
      <Legend />
      <Scatter name="A school" data={data01} fill="#8884d8" shape="star" />
      <Scatter name="B school" data={data02} fill="#82ca9d" shape="triangle" />
    </ScatterChart>
  );
};

export default ThreeDimScatterChart;
