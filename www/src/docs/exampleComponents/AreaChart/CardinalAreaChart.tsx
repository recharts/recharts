import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';
import { curveCardinal } from 'd3-shape';

const data = generateMockData(6, 9823);

const Typed = createHorizontalChart<MockDataType, string, number>()({
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
});

const cardinal = curveCardinal.tension(0.8);

const CardinalAreaChart = () => {
  return (
    <Typed.AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid />
      <Typed.XAxis dataKey="label" />
      <Typed.YAxis width="auto" />
      <Tooltip />
      <Typed.Area type="monotone" dataKey="x" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
      <Typed.Area type={cardinal} dataKey="x" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
      <RechartsDevtools />
    </Typed.AreaChart>
  );
};

export default CardinalAreaChart;
