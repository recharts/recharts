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
import { LeverChangeHandler, Levers, LeverState } from '../../Shared/levers/Levers.tsx';
import { replayAnimationLever } from '../../Shared/levers/gallery/swapDataLever.tsx';
import { animationMatchByLever } from '../../Shared/levers/gallery/animationMatchByLever.tsx';

const dataSmall = generateMockData(5, 42);
const dataLarge = generateMockData(15, 99);

type MatchStrategy = 'index' | 'append';

/*
 * In your chart you will typically animate one of these but in this example we throw everything at the same chart.
 */
type AcceptedAnimationItems = AreaPointItem | BarRectangleItem | LinePointItem | ScatterPointItem;

function getMatchProp(strategy: MatchStrategy): AnimationMatchByProp<AcceptedAnimationItems> {
  switch (strategy) {
    case 'append':
      return matchAppend;
    case 'index':
    default:
      return matchByIndex;
  }
}

export default function MatchingStrategiesExample(props: Partial<LeverState>) {
  const matchStrategy = props.animationMatchBy ?? 'index';
  const useLargeData = props.dataSet === 'b';

  const data = useLargeData ? dataLarge : dataSmall;
  const matchProp = getMatchProp(matchStrategy);

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

const defaultState: LeverState = {
  animationMatchBy: 'index',
  dataSet: 'a',
};

export function MatchingStrategiesControls({ onChange }: { onChange: LeverChangeHandler }) {
  return (
    <Levers defaultState={defaultState} levers={[replayAnimationLever, animationMatchByLever]} onChange={onChange} />
  );
}
