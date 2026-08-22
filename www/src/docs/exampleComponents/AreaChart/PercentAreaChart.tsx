import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipContentProps,
  TooltipValueType,
  createHorizontalChart,
  useRechartsTheme,
} from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

// #region Sample data and helper functions
const data = generateMockData(6, 198905);

const Typed = createHorizontalChart<MockDataType, string, number>()({ Area, XAxis, YAxis, Tooltip });

const toPercent = (decimal: number): string => `${(decimal * 100).toFixed(0)}%`;

const toNumber = (value: TooltipValueType | undefined): number => {
  if (typeof value === 'number') {
    return value;
  }
  let v;
  if (typeof value === 'string') {
    v = value;
  }
  if (Array.isArray(value)) {
    [, v] = value;
  }
  if (v == null) {
    return 0;
  }
  const parsed = parseFloat(String(v));
  if (!Number.isNaN(parsed)) {
    return parsed;
  }
  return 0;
};

const getPercent = (value: TooltipValueType | undefined, total: number): string => {
  const ratio = total > 0 ? toNumber(value) / total : 0;

  return toPercent(ratio);
};

// #endregion
const RenderTooltipContent = (o: TooltipContentProps<number, keyof MockDataType>) => {
  const theme = useRechartsTheme();
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + Number(entry.value), 0);

  return (
    <div
      className="customized-tooltip-content"
      style={{
        ...theme?.typography,
        ...theme?.tooltip?.contentStyle,
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      }}
    >
      <h3 className="total">{`${label} (Total: ${total})`}</h3>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PercentAreaChart = () => {
  return (
    <Typed.AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      stackOffset="expand"
      margin={{
        top: 10,
        right: 20,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid />
      <Typed.XAxis dataKey="label" />
      <Typed.YAxis tickFormatter={toPercent} width="auto" />
      <Typed.Tooltip content={RenderTooltipContent} />
      <Typed.Area type="monotone" dataKey="x" stackId="1" />
      <Typed.Area type="monotone" dataKey="y" stackId="1" />
      <Typed.Area type="monotone" dataKey="z" stackId="1" />
      <RechartsDevtools />
    </Typed.AreaChart>
  );
};

export default PercentAreaChart;
