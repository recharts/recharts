import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { index: 10000, red: 1643, blue: 790 },
  { index: 1666, red: 182, blue: 42 },
  { index: 625, red: 56, blue: 11 },
  // Calculation of line of best fit is not included in this demo
  { index: 300, redLine: 0 },
  { index: 10000, redLine: 1522 },
  { index: 600, blueLine: 0 },
  { index: 10000, blueLine: 678 },
];

// #endregion
const ScatterAndLineOfBestFit = () => {
  return (
    <ComposedChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />

      <XAxis
        dataKey="index"
        type="number"
        label={{ value: 'Index', position: 'insideBottomRight', offset: 0 }}
        niceTicks
      />
      <YAxis
        unit="ms"
        type="number"
        label={{ value: 'Time', angle: -90, position: 'insideLeft' }}
        width="auto"
        niceTicks
      />
      <Scatter name="red" dataKey="red" fill="red" />
      <Scatter name="blue" dataKey="blue" fill="blue" />
      <Line dataKey="blueLine" stroke="blue" dot={false} activeDot={false} legendType="none" />
      <Line dataKey="redLine" stroke="red" dot={false} activeDot={false} legendType="none" />
      <RechartsDevtools />
    </ComposedChart>
  );
};

export default ScatterAndLineOfBestFit;
