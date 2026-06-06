import type { AnimationMatchBy } from 'recharts';
import { CartesianGrid, Line, LineChart, matchByDataKey, matchByIndex, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData } from '@recharts/devtools';
import type { Lever } from '../../../components/Shared/levers/Levers.tsx';
import { animationMatchByLever } from '../../../components/Shared/levers/gallery/animationMatchByLever.tsx';
import { streamWindowLever } from '../../../components/Shared/levers/gallery/streamWindowLever.tsx';
import { animationDurationLever } from '../../../components/Shared/levers/gallery/animationDurationLever.tsx';

const WINDOW = 6;
const DATA_LENGTH = 30;

const allData = generateMockData(DATA_LENGTH, 90).map((o, i) => ({ ...o, i }));

function getCircularWindowData(windowStart: number) {
  return Array.from({ length: WINDOW }, (_, index) => allData[(windowStart + index) % DATA_LENGTH]!);
}

type ControlsType = {
  animationDuration: number;
  animationMatchBy: 'index' | 'dataKey';
  windowStart: number;
};

export const animatedTimeSeriesDefaultState: ControlsType = {
  animationDuration: 800,
  animationMatchBy: 'dataKey',
  windowStart: 0,
};

export const animatedTimeSeriesLevers = [
  streamWindowLever<ControlsType>({
    wrapAt: DATA_LENGTH,
  }),
  animationDurationLever(),
  animationMatchByLever<ControlsType>({
    options: [
      { value: 'index', label: 'matchByIndex (default)' },
      { value: 'dataKey', label: "matchByDataKey('time')" },
    ],
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

export default function AnimatedTimeSeriesExample(props: Partial<ControlsType>) {
  const { animationMatchBy, windowStart } = { ...animatedTimeSeriesDefaultState, ...props };

  const data = getCircularWindowData(windowStart);

  const matchProp: typeof matchByIndex | AnimationMatchBy<{ payload?: unknown }> =
    animationMatchBy === 'dataKey' ? matchByDataKey('label') : matchByIndex;

  return (
    <LineChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" allowDataOverflow />
      <YAxis />
      <Tooltip />
      <Line dataKey="y" stroke="#8884d8" strokeWidth={2} animationDuration={600} animationMatchBy={matchProp} />
    </LineChart>
  );
}
