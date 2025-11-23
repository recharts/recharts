import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ZAxis } from 'recharts';
import { TooltipIndex } from 'recharts/types/state/tooltipSlice';

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
const ScatterChartWithLabels = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
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
      <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
      <Scatter name="A school" data={data} fill="#8884d8" activeShape={{ fill: 'green' }}>
        <LabelList dataKey="x" fill="black" />
      </Scatter>
      <ZAxis range={[900, 4000]} dataKey="z" />
    </ScatterChart>
  );
};

export default ScatterChartWithLabels;
