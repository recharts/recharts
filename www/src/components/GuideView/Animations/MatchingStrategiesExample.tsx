import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import type { AnimationMatchByProp, LinePointItem } from 'recharts';
import {
  Area,
  AreaPointItem,
  Bar,
  BarRectangleItem,
  CartesianGrid,
  ComposedChart,
  Line,
  matchAppend,
  matchByIndex,
  Scatter,
  ScatterPointItem,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { animationMatchByLever, AnimationMatchByValue } from '../../Shared/levers/gallery/animationMatchByLever.tsx';
import { swapDataSetLever } from '../../Shared/levers/gallery/swapDataLever.tsx';

const dataSmall = generateMockData(5, 42);
const dataLarge = generateMockData(15, 99);

type MatchingStrategiesControlsState = {
  animationMatchBy: AnimationMatchByValue;
  dataSet: 'a' | 'b';
};

/*
 * In your chart you will typically animate one of these but in this example we throw everything at the same chart.
 */
type AcceptedAnimationItems = AreaPointItem | BarRectangleItem | LinePointItem | ScatterPointItem;

export const matchingStrategiesDefaultState: MatchingStrategiesControlsState = {
  animationMatchBy: 'index',
  dataSet: 'a',
};

export const matchingStrategiesLevers = [
  swapDataSetLever<MatchingStrategiesControlsState>({
    buttonLabel: state => `⇄ Swap dataset (${state.dataSet === 'a' ? '5 → 15 items' : '15 → 5 items'})`,
  }),
  animationMatchByLever<MatchingStrategiesControlsState>({
    options: [
      { value: 'index', label: 'matchByIndex — stretch (default)' },
      { value: 'append', label: 'matchAppend — sequential' },
    ],
  }),
] satisfies ReadonlyArray<Lever<MatchingStrategiesControlsState>>;

function getMatchProp(strategy: AnimationMatchByValue): AnimationMatchByProp<AcceptedAnimationItems> {
  switch (strategy) {
    case 'append':
      return matchAppend;
    case 'index':
    default:
      return matchByIndex;
  }
}

export default function MatchingStrategiesExample(props: Partial<MatchingStrategiesControlsState>) {
  const { animationMatchBy, dataSet } = { ...matchingStrategiesDefaultState, ...props };
  const useLargeData = dataSet === 'b';

  const data = useLargeData ? dataLarge : dataSmall;
  const matchProp = getMatchProp(animationMatchBy);

  return (
    <ComposedChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="x"
        stroke="#8884d8"
        strokeWidth={2}
        animationDuration={1500}
        animationMatchBy={matchProp}
      />
      <Area
        dot
        type="monotone"
        dataKey={entry => entry.y * 2}
        stroke="#84d888"
        fill="#84d888"
        fillOpacity={0.6}
        animationDuration={1500}
        animationMatchBy={matchProp}
      />
      <Bar dataKey="y" animationMatchBy={matchProp} fill="salmon" animationDuration={1500} />
      <Scatter dataKey="z" animationMatchBy={matchProp} fill="gold" animationDuration={1500} />
      <RechartsDevtools />
    </ComposedChart>
  );
}
