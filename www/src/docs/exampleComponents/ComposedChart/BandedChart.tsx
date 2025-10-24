import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  DefaultLegendContent,
  DefaultLegendContentProps,
  DefaultTooltipContent,
} from 'recharts';
import { TooltipContentProps } from 'recharts/types/component/Tooltip';

// #region Sample data
const data = [
  {
    name: 'Page A',
    a: [0, 0],
    b: 0,
  },
  {
    name: 'Page B',
    a: [50, 300],
    b: 106,
  },
  {
    name: 'Page C',
    a: [150, 423],
    b: 229,
  },
  {
    name: 'Page D',
    b: 312,
  },
  {
    name: 'Page E',
    a: [367, 678],
    b: 451,
  },
  {
    name: 'Page F',
    a: [305, 821],
    b: 623,
  },
];

// #endregion
const renderTooltipWithoutRange = ({ payload, content, ...rest }: TooltipContentProps<string | number, string>) => {
  const newPayload = payload.filter(x => x.dataKey !== 'a');
  return <DefaultTooltipContent payload={newPayload} {...rest} />;
};

const renderLegendWithoutRange = ({ payload, content, ref, ...rest }: DefaultLegendContentProps) => {
  const newPayload = payload?.filter(x => x.dataKey !== 'a');
  return <DefaultLegendContent payload={newPayload} {...rest} />;
};

export default function BandedChart() {
  return (
    <ComposedChart
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip content={renderTooltipWithoutRange} />
      <Area type="monotone" dataKey="a" stroke="none" fill="#cccccc" connectNulls dot={false} activeDot={false} />
      <Line type="natural" dataKey="b" stroke="#ff00ff" connectNulls />
      <Legend content={renderLegendWithoutRange} />
    </ComposedChart>
  );
}
