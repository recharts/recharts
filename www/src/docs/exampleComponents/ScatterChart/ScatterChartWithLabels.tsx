import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ZAxis,
  TooltipIndex,
  AxisRange,
  ScatterCustomizedShape,
  Margin,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { CSSProperties } from 'react';

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

const chartStyle: CSSProperties = { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 };
const activeShapeStyle: ScatterCustomizedShape = { fill: 'green' };
const zAxisRange: AxisRange = [900, 4000];
const chartMargin: Partial<Margin> = {
  top: 50,
};

const ScatterChartWithLabels = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
  return (
    <ScatterChart style={chartStyle} responsive margin={chartMargin}>
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" width="auto" />
      <Tooltip defaultIndex={defaultIndex} />
      <Scatter name="A school" data={data} activeShape={activeShapeStyle}>
        {/* The labels by default have the same color as Scatter.fill which makes them invisible. So let's add background! */}
        <LabelList dataKey="x" background />
      </Scatter>
      <ZAxis range={zAxisRange} dataKey="z" />
      <RechartsDevtools />
    </ScatterChart>
  );
};

export default ScatterChartWithLabels;
