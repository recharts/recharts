import {
  Bar,
  BarChart,
  BarShapeProps,
  CartesianGrid,
  Rectangle,
  Tooltip,
  TooltipContentProps,
  XAxis,
  YAxis,
} from 'recharts';

// #region Waterfall computation helper
/**
 * Waterfall charts show how sequential positive or negative values contribute
 * to a running total. Each bar starts where the previous one ended, and
 * optional "total" bars always start from zero.
 *
 * Since Recharts `<Bar>` supports range values (`[low, high]` arrays),
 * this helper transforms raw data into range values that produce correct
 * waterfall bar positions.
 */

type RawEntry = { name: string; value: number; isTotal?: boolean };

interface WaterfallDatum {
  name: string;
  value: number;
  waterfallRange: [number, number];
  isTotal: boolean;
}

function computeWaterfallData(raw: ReadonlyArray<RawEntry>): WaterfallDatum[] {
  let runningTotal = 0;

  return raw.map(entry => {
    const { value, isTotal = false } = entry;
    let barBottom: number, barTop: number;

    if (isTotal) {
      barBottom = Math.min(0, value);
      barTop = Math.max(0, value);
    } else if (value >= 0) {
      barBottom = runningTotal;
      barTop = runningTotal + value;
    } else {
      barBottom = runningTotal + value;
      barTop = runningTotal;
    }

    if (!isTotal) {
      runningTotal += value;
    }

    return {
      name: entry.name,
      value,
      waterfallRange: [barBottom, barTop],
      isTotal,
    };
  });
}
// #endregion

// #region Data
const rawData: ReadonlyArray<RawEntry> = [
  { name: 'Revenue', value: 420 },
  { name: 'Services', value: 210 },
  { name: 'Fixed costs', value: -170 },
  { name: 'Variable costs', value: -120 },
  { name: 'Taxes', value: -60 },
  { name: 'Profit', value: 280, isTotal: true },
];

const waterfallData = computeWaterfallData(rawData);

function getBarColor(entry: WaterfallDatum): string {
  if (entry.isTotal) return '#1565C0';
  return entry.value >= 0 ? '#4CAF50' : '#F44336';
}

const WaterfallBar = (props: BarShapeProps) => {
  // @ts-expect-error Recharts spreads the data entry on the shape props but the types don't reflect that
  const color = getBarColor(props);
  return <Rectangle {...props} fill={color} />;
};

const WaterfallTooltip = ({ active, payload }: TooltipContentProps) => {
  if (active && payload && payload.length) {
    const entry: WaterfallDatum = payload[0].payload;
    return (
      <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '0.5em 1em' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{entry.name}</p>
        <p style={{ margin: 0 }}>{`Value: ${entry.value >= 0 ? '+' : ''}${entry.value}`}</p>
        {entry.isTotal && <p style={{ margin: 0, fontStyle: 'italic' }}>Total</p>}
      </div>
    );
  }
  return null;
};
// #endregion

export default function WaterfallExample() {
  return (
    <BarChart
      data={waterfallData}
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      margin={{ top: 20, right: 30, bottom: 5, left: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={WaterfallTooltip} />
      <Bar dataKey="waterfallRange" shape={WaterfallBar} isAnimationActive={false} />
    </BarChart>
  );
}
