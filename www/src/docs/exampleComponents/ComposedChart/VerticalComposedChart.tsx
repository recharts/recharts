import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  createVerticalChart,
} from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: ReadonlyArray<MockDataType> = generateMockData(6, 324);
const Typed = createVerticalChart<MockDataType>()({ ComposedChart, XAxis, YAxis, Area, Bar, Line });

const VerticalComposedChart = () => {
  return (
    <Typed.ComposedChart
      layout="vertical"
      style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid />
      <Typed.XAxis type="number" niceTicks="snap125" />
      <Typed.YAxis dataKey="label" type="category" scale="band" width="auto" />
      <Tooltip />
      <Legend />
      <Typed.Area dataKey="x" />
      <Typed.Bar dataKey="y" barSize={20} />
      <Typed.Line dataKey="z" />
      <RechartsDevtools />
    </Typed.ComposedChart>
  );
};

export default VerticalComposedChart;
