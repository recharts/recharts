import {
  AnimationInterpolateFn,
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  usePlotArea,
  XAxis,
  YAxis,
  AreaRevealShape,
  AreaPointItem,
  interpolate,
  CartesianLayout,
  AreaRevealShapeProps,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import type { Lever } from '../../../../components/Shared/levers/Levers.tsx';
import { createCheckboxLever } from '../../../../components/Shared/levers/Levers.tsx';
import { animationDurationLever } from '../../../../components/Shared/levers/gallery/animationDurationLever.tsx';
import { replayAnimationLever } from '../../../../components/Shared/levers/gallery/replayAnimationLever.tsx';
import { swapDataSetLever } from '../../../../components/Shared/levers/gallery/swapDataLever.tsx';

const dataA = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const dataB = [
  { name: 'Page A', uv: 1800, pv: 2500, amt: 2100 },
  { name: 'Page B', uv: 4600, pv: 1900, amt: 2400 },
  { name: 'Page C', uv: 3200, pv: 7000, amt: 2600 },
  { name: 'Page D', uv: 1100, pv: 3400, amt: 2300 },
  { name: 'Page E', pv: 5200, amt: 2000 },
  { name: 'Page F', uv: 2900, pv: 2700, amt: 2400 },
  { name: 'Page G', uv: 4100, pv: 3900, amt: 2200 },
];

type ControlsType = {
  animationDuration: number;
  replayKey: number;
  useCustomInterpolation: boolean;
  useCustomShape: boolean;
  dataSet: 'a' | 'b';
};

export const areaChartCustomAnimationDefaultState: ControlsType = {
  animationDuration: 900,
  replayKey: 0,
  useCustomInterpolation: true,
  useCustomShape: true,
  dataSet: 'a',
};

/**
 * Custom animation: grow from the bottom of the chart.
 * Uses animationInterpolateFn to move points from the chart bottom upwards.
 * Combined with a custom shape (no clipPath) so the reveal animation doesn't interfere.
 */
const useAnimateFromBottom = (): AnimationInterpolateFn<AreaPointItem, CartesianLayout> => {
  const plotArea = usePlotArea();
  const zero = plotArea ? plotArea.y + plotArea.height : 0;

  return (items, animationElapsedTime) => {
    if (items == null) return [];
    if (animationElapsedTime === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
    return items.flatMap(item => {
      if (item.status === 'removed') return [];
      const { next } = item;
      return [{ ...next, y: interpolate(zero, next.y, animationElapsedTime) }];
    });
  };
};

function GrowFromBottomShape(props: AreaRevealShapeProps) {
  return <AreaRevealShape {...props} isEntrance={false} />;
}

function MyAnimatedArea({
  animationDuration,
  useCustomInterpolation,
  useCustomShape,
}: Pick<ControlsType, 'animationDuration' | 'useCustomInterpolation' | 'useCustomShape'>) {
  const growFromBottom = useAnimateFromBottom();
  return (
    <Area
      type="monotone"
      dataKey="uv"
      stroke="#8884d8"
      fillOpacity={1}
      fill="url(#colorUv)"
      animationDuration={animationDuration}
      animationInterpolateFn={useCustomInterpolation ? growFromBottom : undefined}
      shape={useCustomShape ? GrowFromBottomShape : undefined}
    />
  );
}

export const areaChartCustomAnimationLevers = [
  replayAnimationLever<ControlsType>({
    buttonLabel: 'Replay entrance animation',
  }),
  swapDataSetLever<ControlsType>({
    buttonLabel: '⇄ Swap dataset (Shows update animation)',
  }),
  animationDurationLever<ControlsType>(),
  createCheckboxLever<ControlsType>({
    key: 'useCustomInterpolation',
    label: 'animationInterpolateFn',
    getValue: state => state.useCustomInterpolation,
    onChange: (useCustomInterpolation, state) => ({ ...state, useCustomInterpolation }),
  }),
  createCheckboxLever<ControlsType>({
    key: 'useCustomShape',
    label: 'shape={GrowFromBottomShape}',
    getValue: state => state.useCustomShape,
    onChange: (useCustomShape, state) => ({ ...state, useCustomShape }),
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

export default function AreaChartCustomAnimationExample(props: Partial<ControlsType>) {
  const { animationDuration, replayKey, useCustomInterpolation, useCustomShape, dataSet } = {
    ...areaChartCustomAnimationDefaultState,
    ...props,
  };

  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={dataSet === 'a' ? dataA : dataB}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <MyAnimatedArea
        key={replayKey}
        animationDuration={animationDuration}
        useCustomInterpolation={useCustomInterpolation}
        useCustomShape={useCustomShape}
      />
      <RechartsDevtools />
    </AreaChart>
  );
}
