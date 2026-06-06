import { useId } from 'react';
import type { AnimationInterpolateFn, AreaPointItem, AreaRevealShapeProps, CartesianLayout } from 'recharts';
import {
  Area,
  AreaChart,
  AreaProps,
  AreaRevealShape,
  CartesianGrid,
  interpolate,
  Tooltip,
  usePlotArea,
  XAxis,
  YAxis,
} from 'recharts';
import type { Lever } from '../../../components/Shared/levers/Levers.tsx';
import { createSelectLever } from '../../../components/Shared/levers/Levers.tsx';
import { animationDurationLever } from '../../../components/Shared/levers/gallery/animationDurationLever.tsx';
import { replayAnimationLever } from '../../../components/Shared/levers/gallery/replayAnimationLever.tsx';
import { swapDataSetLever } from '../../../components/Shared/levers/gallery/swapDataLever.tsx';

const animationOptions = {
  leftToRight: { label: 'Left to right (default)' },
  topToBottom: { label: 'Top to bottom (custom)' },
} as const;

type AnimationStyle = keyof typeof animationOptions;

type ControlsType = {
  animationStyle: AnimationStyle;
  animationDuration: number;
  replayKey: number;
  dataSet: 'a' | 'b';
};

export const rangeAreaChartCustomAnimationDefaultState: ControlsType = {
  animationStyle: 'topToBottom',
  animationDuration: 1600,
  replayKey: 0,
  dataSet: 'a',
};

type MyDataType = {
  name: string;
  range: [number, number];
};

const dataA: ReadonlyArray<MyDataType> = [
  { name: 'Jan', range: [800, 2600] },
  { name: 'Feb', range: [1100, 3300] },
  { name: 'Mar', range: [900, 2800] },
  { name: 'Apr', range: [1400, 3900] },
  { name: 'May', range: [1200, 3500] },
  { name: 'Jun', range: [1600, 5000] },
];

const dataB: ReadonlyArray<MyDataType> = [
  { name: 'Jan', range: [400, 1800] },
  { name: 'Feb', range: [1500, 4200] },
  { name: 'Mar', range: [700, 2100] },
  { name: 'Apr', range: [1800, 4700] },
  { name: 'May', range: [1000, 2400] },
  { name: 'Jun', range: [2200, 5000] },
];

function useAnimateFromPlotBottom(): AnimationInterpolateFn<AreaPointItem, CartesianLayout> {
  const plotArea = usePlotArea();
  const top = plotArea?.y ?? 0;

  return (items, animationElapsedTime) => {
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

      /*
       * For demonstration here we always animate from the top, and we ignore the previous position (item.prev.y)
       * and so the chart always looks like a new animation, there is no continuity.
       * Here it depends on what exactly is your goal;
       * Customize your animations the way you want!
       */
      return [{ ...item.next, y: interpolate(top, item.next.y, animationElapsedTime) }];
    });
  };
}

function CurveWithoutEntranceAnimation(props: AreaRevealShapeProps) {
  return <AreaRevealShape {...props} isEntrance={false} />;
}

function CustomAnimationArea(
  props: AreaProps<MyDataType, number | [number, number]> & { animationStyle: AnimationStyle },
) {
  const { animationStyle } = props;
  const topToBottomAnimation = useAnimateFromPlotBottom();
  const animationInterpolateFn = animationStyle === 'topToBottom' ? topToBottomAnimation : undefined;
  const shape = animationStyle === 'topToBottom' ? CurveWithoutEntranceAnimation : AreaRevealShape;

  return <Area animationInterpolateFn={animationInterpolateFn} shape={shape} {...props} />;
}

export const rangeAreaChartCustomAnimationLevers = [
  replayAnimationLever<ControlsType>(),
  swapDataSetLever<ControlsType>(),
  createSelectLever<ControlsType, AnimationStyle>({
    key: 'animationInterpolateFn',
    label: 'animationInterpolateFn',
    options: Object.entries(animationOptions).map(([value, option]) => ({
      value: value as AnimationStyle,
      label: option.label,
    })),
    getValue: state => state.animationStyle,
    onChange: (animationStyle, state) => ({ ...state, animationStyle }),
  }),
  animationDurationLever<ControlsType>(),
] satisfies ReadonlyArray<Lever<ControlsType>>;

export default function RangeAreaChartCustomAnimation(props: Partial<ControlsType>) {
  const { animationStyle, animationDuration, replayKey, dataSet } = {
    ...rangeAreaChartCustomAnimationDefaultState,
    ...props,
  };
  const gradientId1 = useId();
  const gradientId2 = useId();
  return (
    <AreaChart<MyDataType>
      key={replayKey}
      style={{ width: '100%', maxWidth: 700, aspectRatio: 1.618 }}
      responsive
      data={dataSet === 'a' ? dataA : dataB}
      margin={{ top: 10, right: 16, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id={gradientId1} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.45} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id={gradientId2} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#84d888" stopOpacity={0.45} />
          <stop offset="95%" stopColor="#84d888" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" domain={[0, 5200]} />
      <Tooltip />
      <CustomAnimationArea
        type="linear"
        dataKey="range"
        stroke="#8884d8"
        strokeWidth={2}
        fill={`url(#${gradientId1})`}
        fillOpacity={1}
        isAnimationActive
        animationDuration={animationDuration}
        animationStyle={animationStyle}
      />
      <CustomAnimationArea
        type="linear"
        dataKey={p => p.range[1] * 2}
        baseValue="dataMax"
        stroke="#84d888"
        strokeWidth={2}
        fill={`url(#${gradientId2})`}
        fillOpacity={1}
        isAnimationActive
        animationDuration={animationDuration}
        animationStyle={animationStyle}
      />
    </AreaChart>
  );
}
