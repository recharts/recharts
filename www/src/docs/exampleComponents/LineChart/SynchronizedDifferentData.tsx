import { CartesianGrid, createHorizontalChart, Line, SyncMethod, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

type DailyPoint = { date: string; value: number };

/*
 * Two charts that share a syncId but do NOT share the same data:
 * - the first chart has a reading for every day
 * - the second chart only has a reading every fifth day
 *
 * With syncMethod="value" the second chart would only show a tooltip when the hovered
 * date exactly matches one of its own dates. With syncMethod="index" the charts would
 * line up by array position, which is wrong because the arrays have different lengths.
 *
 * A custom syncMethod function solves this: it receives the receiving chart's ticks and
 * the hovered label from the source chart, and returns the index of the tick to activate.
 */
function isoDate(dayOffset: number): string {
  const d = new Date(Date.UTC(2024, 0, 1 + dayOffset));
  return d.toISOString().slice(0, 10);
}

const dailyData: DailyPoint[] = Array.from({ length: 30 }, (_, i) => ({
  date: isoDate(i),
  value: Math.round(50 + 30 * Math.sin(i / 3) + (i % 7) * 2),
}));

const weeklyData: DailyPoint[] = dailyData.filter((_, i) => i % 5 === 0);

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const MAX_DISTANCE_MS = 2 * ONE_DAY_MS;

/**
 * Snap to the nearest date in this chart, but only if it is within two days.
 * Returning an index outside the ticks array hides the tooltip in the receiving chart,
 * which is what we want when there is no nearby data point.
 */
export const closestDate: SyncMethod = (ticks, data) => {
  const hovered = Date.parse(String(data.activeLabel));
  if (Number.isNaN(hovered)) {
    return -1;
  }
  let bestIndex = -1;
  let bestDistance = Infinity;
  ticks.forEach((tick, index) => {
    const distance = Math.abs(Date.parse(String(tick.value)) - hovered);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });
  return bestDistance <= MAX_DISTANCE_MS ? bestIndex : -1;
};

const Typed = createHorizontalChart<DailyPoint, string, number>()({ XAxis, YAxis, Tooltip, Line });

const chartStyle = { width: '100%', maxWidth: '700px', maxHeight: '25vh', aspectRatio: 1.618 };
const margin = { top: 10, right: 30, left: 0, bottom: 0 };

// #endregion
export default function Example() {
  return (
    <>
      <Typed.LineChart
        style={chartStyle}
        responsive
        data={dailyData}
        syncId="differentData"
        syncMethod={closestDate}
        margin={margin}
      >
        <CartesianGrid />
        <Typed.XAxis dataKey="date" />
        <Typed.YAxis />
        <Tooltip />
        <Typed.Line type="monotone" dataKey="value" name="Daily reading" dot={false} />
        <RechartsDevtools />
      </Typed.LineChart>

      <Typed.LineChart
        style={chartStyle}
        responsive
        data={weeklyData}
        syncId="differentData"
        syncMethod={closestDate}
        margin={margin}
      >
        <CartesianGrid />
        <Typed.XAxis dataKey="date" />
        <Typed.YAxis />
        <Tooltip />
        <Typed.Line type="monotone" dataKey="value" name="Every fifth day" />
        <RechartsDevtools />
      </Typed.LineChart>
    </>
  );
}
