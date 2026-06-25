import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  LabelList,
  LabelProps,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    data1: 4000,
    data2: 2400,
    data3: 1500,
    amt: 2400,
  },
  {
    name: 'Page B',
    data1: 9000,
    data2: 1398,
    data3: 2500,
    amt: 2210,
  },
  {
    name: 'Page C',
    data1: 2000,
    data2: 9800,
    data3: 4200,
    amt: 2290,
  },
  {
    name: 'Page D',
    data1: 2780,
    data2: 3908,
    data3: 1300,
    amt: 2000,
  },
  {
    name: 'Page E',
    data1: 1890,
    data2: 4800,
    data3: 5400,
    amt: 2181,
  },
  {
    name: 'Page F',
    data1: 2390,
    data2: 8800,
    data3: 1500,
    amt: 3000,
  },
  {
    name: 'Page G',
    data1: 3490,
    data2: 4300,
    data3: 2600,
    amt: 2100,
  },
];

// #endregion
const THRESHOLD = 18000;

type DataPoint = (typeof data)[number];

const StackTotalLabel = (props: LabelProps) => {
  const { x, y, width, value } = props;
  const total = Number(value);
  if (x == null || y == null || width == null || Number.isNaN(total)) {
    return null;
  }

  const label = total.toLocaleString();
  const cx = Number(x) + Number(width) / 2;
  const cy = Number(y) - 18;
  const boxWidth = label.length * 8 + 16;
  const boxHeight = 22;
  const borderRadius = 6;

  return (
    <g>
      <rect
        x={cx - boxWidth / 2}
        y={cy - boxHeight / 2}
        width={boxWidth}
        height={boxHeight}
        rx={borderRadius}
        ry={borderRadius}
        fill="#fff"
        stroke="#E2F0CB"
        strokeWidth={1.5}
      />
      <text x={cx} y={cy} fill="#333" textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight={400}>
        {label}
      </text>
    </g>
  );
};

const StackedBarChartWithHorizontalLine = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 40,
        right: 0,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" niceTicks="snap125" />
      <YAxis width="auto" niceTicks="snap125" />
      <Tooltip cursor={false} />
      <Legend />
      <ReferenceLine
        y={THRESHOLD}
        stroke="red"
        strokeWidth={2}
        label={{ value: 'Threshold', fill: 'red', position: 'left' }}
      />
      <Bar dataKey="data1" stackId="a" fill="#C7CEEA" />
      <Bar dataKey="data2" stackId="a" fill="#B5EAD7" />
      <Bar dataKey="data3" stackId="a" fill="#E2F0CB">
        <LabelList
          content={StackTotalLabel}
          position="top"
          offset={8}
          valueAccessor={entry => {
            const point = entry.payload as DataPoint;
            return point.data1 + point.data2 + point.data3;
          }}
        />
      </Bar>
      <RechartsDevtools />
    </BarChart>
  );
};

export default StackedBarChartWithHorizontalLine;
