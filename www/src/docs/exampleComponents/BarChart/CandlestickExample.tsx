import { generateMockMarketData, RechartsDevtools } from '@recharts/devtools';
import {
  Bar,
  BarChart,
  BarProps,
  CartesianGrid,
  DefaultZIndexes,
  ErrorBar,
  Rectangle,
  Tooltip,
  TooltipContentProps,
  TooltipIndex,
  XAxis,
  YAxis,
} from 'recharts';
import { MarketCandle } from '@recharts/devtools/dist/generateMockMarketData';

const data: ReadonlyArray<MarketCandle> = generateMockMarketData(100, 1337, 100, 1768145757834);

const barDataKey: (entry: MarketCandle) => [number, number] = entry => [
  Math.min(entry.close, entry.open),
  Math.max(entry.close, entry.open),
];

const whiskerDataKey: (entry: MarketCandle) => [number, number] = entry => {
  const highEnd = Math.max(entry.close, entry.open);
  return [highEnd - entry.low, entry.high - highEnd];
};

const timestampToMinutes = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getUTCHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const formatDollars = (value: number) => `$${value.toFixed(2)}`;

const Candlestick = (props: BarProps) => {
  // @ts-expect-error Recharts does spread MarketCandle on the props but the types don't reflect that
  const color = props.open < props.close ? 'green' : 'red';
  // @ts-expect-error Recharts own types are incompatible with itself, we should fix this
  return <Rectangle {...props} fill={color} />;
};

const TooltipContent = (props: TooltipContentProps<number, string>) => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    const entry: MarketCandle = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          padding: '0 1em',
        }}
      >
        <p style={{ margin: 0 }}>{`Time: ${timestampToMinutes(entry.time)}`}</p>
        <p style={{ margin: 0 }}>{`Open: ${formatDollars(entry.open)}`}</p>
        <p style={{ margin: 0 }}>{`Close: ${formatDollars(entry.close)}`}</p>
        <p style={{ margin: 0 }}>{`Low: ${formatDollars(entry.low)}`}</p>
        <p style={{ margin: 0 }}>{`High: ${formatDollars(entry.high)}`}</p>
      </div>
    );
  }
  return null;
};

export default function CandlestickExample({ defaultIndex }: { defaultIndex?: TooltipIndex }) {
  return (
    <BarChart
      data={data}
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
    >
      <XAxis dataKey="time" tickFormatter={timestampToMinutes} />
      <YAxis domain={['dataMin - 1', 'dataMax + 1']} tickFormatter={formatDollars} />
      <CartesianGrid vertical={false} />
      <Bar dataKey={barDataKey} shape={Candlestick}>
        <ErrorBar dataKey={whiskerDataKey} width={0} zIndex={DefaultZIndexes.bar - 1} />
      </Bar>
      <Tooltip content={TooltipContent} defaultIndex={defaultIndex} />
      <RechartsDevtools />
    </BarChart>
  );
}
