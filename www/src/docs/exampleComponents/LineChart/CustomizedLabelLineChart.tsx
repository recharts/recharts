import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelProps,
  XAxisTickContentProps,
  createHorizontalChart,
} from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 2213);

const Typed = createHorizontalChart<MockDataType, string, number>()({ XAxis, YAxis, Tooltip, Line });

// #endregion
const CustomizedLabel = ({ x, y, stroke, value }: LabelProps) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = ({ x, y, payload, fill }: XAxisTickContentProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill={fill} transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

const CustomizedLabelLineChart = () => {
  return (
    <Typed.LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 10,
      }}
    >
      <CartesianGrid />
      <Typed.XAxis dataKey="label" height={60} tick={CustomizedAxisTick} />
      <Typed.YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Typed.Line type="monotone" dataKey="x" label={CustomizedLabel} />
      <Typed.Line type="monotone" dataKey="y" />
      <RechartsDevtools />
    </Typed.LineChart>
  );
};

export default CustomizedLabelLineChart;
