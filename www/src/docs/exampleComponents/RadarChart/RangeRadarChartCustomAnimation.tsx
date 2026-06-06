import type { AnimationInterpolateFn, PolarLayout, RadarPoint } from 'recharts';
import { interpolate, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import type { Lever } from '../../../components/Shared/levers/Levers.tsx';
import { createSelectLever } from '../../../components/Shared/levers/Levers.tsx';
import { animationDurationLever } from '../../../components/Shared/levers/gallery/animationDurationLever.tsx';
import { replayAnimationLever } from '../../../components/Shared/levers/gallery/replayAnimationLever.tsx';
import { swapDataSetLever } from '../../../components/Shared/levers/gallery/swapDataLever.tsx';

const animationOptions = {
  pointToPoint: { label: 'Point to point (default)' },
  centerOut: { label: 'Always from center (custom)' },
} as const;

type AnimationStyle = keyof typeof animationOptions;

type ControlsType = {
  animationStyle: AnimationStyle;
  animationDuration: number;
  replayKey: number;
  dataSet: 'a' | 'b';
};

export const rangeRadarChartCustomAnimationDefaultState: ControlsType = {
  animationStyle: 'centerOut',
  animationDuration: 1600,
  replayKey: 0,
  dataSet: 'a',
};

const dataA = [
  { subject: 'Math', range: [30, 110] },
  { subject: 'Art', range: [55, 120] },
  { subject: 'Music', range: [40, 95] },
  { subject: 'Physics', range: [65, 135] },
  { subject: 'History', range: [50, 105] },
  { subject: 'Sports', range: [70, 125] },
];

const dataB = [
  { subject: 'Math', range: [20, 80] },
  { subject: 'Art', range: [70, 140] },
  { subject: 'Music', range: [35, 75] },
  { subject: 'Physics', range: [80, 145] },
  { subject: 'History', range: [45, 90] },
  { subject: 'Sports', range: [95, 150] },
];

const animateFromCenter: AnimationInterpolateFn<RadarPoint, PolarLayout> = (items, animationElapsedTime) => {
  if (items == null) {
    return [];
  }
  if (animationElapsedTime === 1) {
    return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  }

  return items.flatMap(item => {
    if (item.status === 'removed') {
      return [];
    }

    return [
      {
        ...item.next,
        x: interpolate(item.next.cx, item.next.x, animationElapsedTime),
        y: interpolate(item.next.cy, item.next.y, animationElapsedTime),
        radius: interpolate(0, item.next.radius, animationElapsedTime),
      },
    ];
  });
};

export const rangeRadarChartCustomAnimationLevers = [
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
    min: 300,
    max: 3000,
    step: 100,
    formatValue: value => `${value}ms`,
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

export default function RangeRadarChartCustomAnimation(props: Partial<ControlsType>) {
  const { animationStyle, animationDuration, replayKey, dataSet } = {
    ...rangeRadarChartCustomAnimationDefaultState,
    ...props,
  };
  const animationInterpolateFn = animationStyle === 'centerOut' ? animateFromCenter : undefined;

  return (
    <RadarChart
      key={replayKey}
      style={{ width: '100%', maxWidth: 560, aspectRatio: 1 }}
      responsive
      data={dataSet === 'a' ? dataA : dataB}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis domain={[0, 150]} />
      <Tooltip />
      <Legend />
      <Radar
        name="Range"
        dataKey="range"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.35}
        isAnimationActive
        animationDuration={animationDuration}
        animationInterpolateFn={animationInterpolateFn}
      />
    </RadarChart>
  );
}
