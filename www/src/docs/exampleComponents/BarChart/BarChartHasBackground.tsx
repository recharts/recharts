import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data: ReadonlyArray<MockDataType> = generateMockData(6, 2387);

const Typed = createHorizontalChart<MockDataType, string, number>()({
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
});

// #endregion
const BarChartHasBackground = ({ defaultIndex }: { defaultIndex?: number }) => {
  return (
    <Typed.BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 25,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Typed.CartesianGrid />
      <Typed.XAxis dataKey="label" />
      <Typed.YAxis width="auto" />
      <Typed.Tooltip defaultIndex={defaultIndex} />
      <Typed.Legend />
      <Typed.Bar dataKey="x" background />
      <Typed.Bar dataKey="z" />
      <RechartsDevtools />
    </Typed.BarChart>
  );
};

export default BarChartHasBackground;
