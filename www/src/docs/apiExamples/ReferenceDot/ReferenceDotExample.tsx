import { ScatterChart, XAxis, YAxis, Scatter, CartesianGrid, Tooltip, ReferenceDot } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

type DataEntry = {
  x: number;
  y: number;
  z?: number;
};

// #region Sample data
const data: DataEntry[] = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const getMeanValue = (o: ReadonlyArray<DataEntry>) => {
  const len = o.length;

  if (!len) {
    return null;
  }

  return o.reduce(
    (result: DataEntry, entry: DataEntry) => ({
      x: result.x + (entry.x || 0) / len,
      y: result.y + (entry.y || 0) / len,
    }),
    { x: 0, y: 0 },
  );
};

// #endregion
export const ReferenceDotExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  const mean = getMeanValue(data);

  return (
    <ScatterChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      margin={{
        top: 20,
        right: 0,
        bottom: 20,
        left: 0,
      }}
    >
      <CartesianGrid stroke="var(--color-border-3)" />
      <XAxis dataKey="x" type="number" name="stature" unit="cm" stroke="var(--color-text-3)" />
      <YAxis dataKey="y" type="number" name="weight" unit="kg" width="auto" stroke="var(--color-text-3)" />
      <Scatter name="A school" data={data} fill="var(--color-chart-1)" isAnimationActive={isAnimationActive} />
      {mean && <ReferenceDot {...mean} r={20} fill="red" stroke="none" />}
      <Tooltip
        cursor={{ strokeDasharray: '3 3', stroke: 'var(--color-border-2)' }}
        contentStyle={{ backgroundColor: 'var(--color-surface-base)', borderColor: 'var(--color-border-2)' }}
        itemStyle={{
          color: 'var(--color-text-3)',
        }}
      />
      <RechartsDevtools />
    </ScatterChart>
  );
};

export default ReferenceDotExample;
