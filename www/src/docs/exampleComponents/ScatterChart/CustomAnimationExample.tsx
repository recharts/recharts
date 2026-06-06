import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { Scatter, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, ZAxis, CartesianLayout } from 'recharts';
import type { AnimationInterpolateFn, ScatterPointItem } from 'recharts';
import type { Lever } from '../../../components/Shared/levers/Levers.tsx';
import { createSelectLever } from '../../../components/Shared/levers/Levers.tsx';
import { animationDurationLever } from '../../../components/Shared/levers/gallery/animationDurationLever.tsx';
import { replayAnimationLever } from '../../../components/Shared/levers/gallery/replayAnimationLever.tsx';
import { swapDataSetLever } from '../../../components/Shared/levers/gallery/swapDataLever.tsx';

const dataA = generateMockData(10, 42);
const dataB = generateMockData(10, 99);

type AnimatedScatterPoint = ScatterPointItem & { opacity?: number };

const crossfade: AnimationInterpolateFn<ScatterPointItem, CartesianLayout> = (items, animationElapsedTime) => {
  if (items == null) return [];
  if (animationElapsedTime === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  const result: AnimatedScatterPoint[] = [];
  for (const item of items) {
    if (item.status === 'matched') {
      result.push({ ...item.prev, opacity: 1 - animationElapsedTime });
      result.push({ ...item.next, opacity: animationElapsedTime });
    } else if (item.status === 'added') {
      result.push({ ...item.next, opacity: animationElapsedTime });
    } else {
      result.push({ ...item.prev, opacity: 1 - animationElapsedTime });
    }
  }
  return result;
};

const staggeredCrossfade: AnimationInterpolateFn<ScatterPointItem, CartesianLayout> = (items, animationElapsedTime) => {
  if (items == null) return [];
  if (animationElapsedTime === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  const count = items.length;
  const result: AnimatedScatterPoint[] = [];
  items.forEach((item, index) => {
    if (item.status === 'matched' || item.status === 'added') {
      const delay = index / count;
      const progress = Math.max(0, Math.min(1, (animationElapsedTime - delay) / (1 - delay)));
      result.push({ ...item.next, opacity: progress });
    }
    if (item.status === 'matched' || item.status === 'removed') {
      const reverseIndex = count - 1 - index;
      const delay = reverseIndex / count;
      const progress = Math.max(0, Math.min(1, (animationElapsedTime - delay) / (1 - delay)));
      result.push({ ...item.prev, opacity: 1 - progress });
    }
  });
  return result;
};

const popCrossfade: AnimationInterpolateFn<ScatterPointItem, CartesianLayout> = (items, animationElapsedTime) => {
  if (items == null) return [];
  if (animationElapsedTime === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  const result: AnimatedScatterPoint[] = [];
  for (const item of items) {
    if (item.status === 'matched' || item.status === 'added') {
      const { next } = item;
      result.push({
        ...next,
        opacity: animationElapsedTime,
        size: next.size * animationElapsedTime * animationElapsedTime,
      });
    }
    if (item.status === 'matched' || item.status === 'removed') {
      const { prev } = item;
      result.push({
        ...prev,
        opacity: 1 - animationElapsedTime,
        size: prev.size * (1 - animationElapsedTime) * (1 - animationElapsedTime),
      });
    }
  }
  return result;
};

const animationOptions = {
  crossfade: { label: 'Crossfade', fn: crossfade },
  staggered: { label: 'Staggered crossfade', fn: staggeredCrossfade },
  pop: { label: 'Pop crossfade (scale + fade)', fn: popCrossfade },
} as const;

type AnimationStyle = keyof typeof animationOptions;

type ControlsType = {
  animationStyle: AnimationStyle;
  animationDuration: number;
  replayKey: number;
  dataSet: 'a' | 'b';
};

export const customAnimationDefaultState: ControlsType = {
  animationStyle: 'crossfade',
  animationDuration: 1500,
  replayKey: 0,
  dataSet: 'a',
};

export const customAnimationLevers = [
  replayAnimationLever<ControlsType>({
    buttonLabel: '▶ Replay initial animation',
  }),
  swapDataSetLever<ControlsType>(),
  createSelectLever<ControlsType, AnimationStyle>({
    key: 'animationStyle',
    label: 'Animation style',
    options: Object.entries(animationOptions).map(([value, option]) => ({
      value: value as AnimationStyle,
      label: option.label,
    })),
    getValue: state => state.animationStyle,
    onChange: (animationStyle, state) => ({ ...state, animationStyle }),
  }),
  animationDurationLever<ControlsType>({
    label: 'Duration (ms)',
    min: 300,
    max: 3000,
    step: 100,
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

export default function CustomAnimationExample(props: Partial<ControlsType>) {
  const { animationStyle, animationDuration, replayKey, dataSet } = { ...customAnimationDefaultState, ...props };

  const animationInterpolateFn = animationOptions[animationStyle].fn;

  return (
    <ScatterChart
      key={replayKey}
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" name="x" type="number" />
      <YAxis dataKey="y" name="y" type="number" />
      <ZAxis dataKey="z" range={[1, 1000]} domain={['dataMin', 'dataMax']} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter
        name="Data"
        data={dataSet === 'a' ? dataA : dataB}
        fill="#8884d8"
        fillOpacity={0.85}
        animationDuration={animationDuration}
        animationInterpolateFn={animationInterpolateFn}
      />
      <RechartsDevtools />
    </ScatterChart>
  );
}
