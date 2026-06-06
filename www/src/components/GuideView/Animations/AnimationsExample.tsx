import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { LeverChangeHandler, Levers, LeverState } from '../../Shared/levers/Levers.tsx';
import { animationBeginLever } from '../../Shared/levers/gallery/animationBeginLever.tsx';
import { replayAnimationLever } from '../../Shared/levers/gallery/replayAnimationLever.tsx';
import { isAnimationActiveLever } from '../../Shared/levers/gallery/isAnimationActiveLever.tsx';
import { animationDurationLever } from '../../Shared/levers/gallery/animationDurationLever.tsx';
import { animationEasingLever } from '../../Shared/levers/gallery/animationEasingLever.tsx';

const data = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 7200 },
  { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 8900 },
  { month: 'Jun', revenue: 7400 },
  { month: 'Jul', revenue: 9200 },
  { month: 'Aug', revenue: 8600 },
];

export default function AnimationsExample(props: Partial<LeverState>) {
  const isAnimationActive = props.isAnimationActive ?? 'auto';
  const animationBegin = props.animationBegin ?? 0;
  const animationDuration = props.animationDuration ?? 400;
  const animationEasing = props.animationEasing ?? 'ease';
  const replayKey = props.replayKey ?? 0;

  return (
    <BarChart
      key={replayKey}
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="revenue"
        fill="#8884d8"
        isAnimationActive={isAnimationActive}
        animationBegin={animationBegin}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
      />
      <RechartsDevtools />
    </BarChart>
  );
}

const defaultState: LeverState = {
  isAnimationActive: 'auto',
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
  replayKey: 0,
};

export function AnimationsControls({ onChange }: { onChange: LeverChangeHandler }) {
  return (
    <Levers
      defaultState={defaultState}
      onChange={onChange}
      levers={[
        replayAnimationLever,
        isAnimationActiveLever,
        animationBeginLever,
        animationDurationLever,
        animationEasingLever,
      ]}
    />
  );
}
