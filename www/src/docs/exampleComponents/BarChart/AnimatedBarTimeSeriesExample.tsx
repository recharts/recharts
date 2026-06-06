import {
  AnimationInterpolateFn,
  AnimationItem,
  AnimationMatchBy,
  Bar,
  BarChart,
  BarRectangleItem,
  CartesianGrid,
  CartesianLayout,
  interpolate,
  matchByDataKey,
  matchByIndex,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import type { Lever } from '../../../components/Shared/levers/Levers.tsx';
import { createSelectLever } from '../../../components/Shared/levers/Levers.tsx';
import { animationDurationLever } from '../../../components/Shared/levers/gallery/animationDurationLever.tsx';
import { animationMatchByLever } from '../../../components/Shared/levers/gallery/animationMatchByLever.tsx';
import { streamWindowLever } from '../../../components/Shared/levers/gallery/streamWindowLever.tsx';
import { cartesianLayoutLever } from '../../../components/Shared/levers/gallery/cartesianLayoutLever.tsx';

const WINDOW = 6;
const DATA_LENGTH = 30;

const allData = generateMockData(DATA_LENGTH, 90).map((o, i) => ({ ...o, i }));

function getCircularWindowData(windowStart: number) {
  return Array.from({ length: WINDOW }, (_, index) => allData[(windowStart + index) % DATA_LENGTH]!);
}

type AnimationVariant = 'default' | 'custom';

type ControlsType = {
  animationMatchBy: 'index' | 'dataKey';
  windowStart: number;
  layout: CartesianLayout;
  animationDuration: number;
  animationVariant: AnimationVariant;
};

const swipeLeftAnimateItems: AnimationInterpolateFn<BarRectangleItem, CartesianLayout> = (
  items: ReadonlyArray<AnimationItem<BarRectangleItem>> | null,
  animationElapsedTime: number,
) => {
  if (items == null) return [];
  return items.flatMap((item): ReadonlyArray<BarRectangleItem> => {
    if (!item) return [];
    if (item.status === 'removed') {
      return [
        {
          ...item.prev,
          x: interpolate(item.prev.x, item.prev.x - item.prev.width * 2, animationElapsedTime),
        },
      ];
    }
    if (item.status === 'matched') {
      return [
        {
          ...item.next,
          x: interpolate(item.prev.x, item.next.x, animationElapsedTime),
          y: interpolate(item.prev.y, item.next.y, animationElapsedTime),
          width: interpolate(item.prev.width, item.next.width, animationElapsedTime),
          height: interpolate(item.prev.height, item.next.height, animationElapsedTime),
        },
      ];
    }
    const { next } = item;
    return [{ ...next, x: interpolate(item.next.x + item.next.width * 2, item.next.x, animationElapsedTime) }];
  });
};

const swipeBottomAnimateItems: AnimationInterpolateFn<BarRectangleItem, CartesianLayout> = (
  items: ReadonlyArray<AnimationItem<BarRectangleItem>> | null,
  animationElapsedTime: number,
) => {
  if (items == null) return [];
  return items.flatMap((item): ReadonlyArray<BarRectangleItem> => {
    if (!item) return [];
    if (item.status === 'removed') {
      return [
        {
          ...item.prev,
          y: interpolate(item.prev.y, item.prev.y - item.prev.height * 2, animationElapsedTime),
        },
      ];
    }
    if (item.status === 'matched') {
      return [
        {
          ...item.next,
          y: interpolate(item.prev.y, item.next.y, animationElapsedTime),
        },
      ];
    }
    const { next } = item;
    return [{ ...next, y: interpolate(next.y + next.height * 2, next.y, animationElapsedTime) }];
  });
};

const animationInterpolateFn: AnimationInterpolateFn<BarRectangleItem, CartesianLayout> = (
  items,
  animationElapsedTime,
  layout,
) => {
  if (layout === 'horizontal') {
    return swipeLeftAnimateItems(items, animationElapsedTime, layout);
  }
  return swipeBottomAnimateItems(items, animationElapsedTime, layout);
};

export const animatedBarTimeSeriesDefaultState: ControlsType = {
  animationMatchBy: 'dataKey',
  windowStart: 0,
  layout: 'horizontal',
  animationDuration: 1200,
  animationVariant: 'default',
};

export const animatedBarTimeSeriesLevers: ReadonlyArray<Lever<ControlsType>> = [
  streamWindowLever<ControlsType>({
    wrapAt: DATA_LENGTH,
  }),
  cartesianLayoutLever(),
  animationMatchByLever<ControlsType>({
    options: [
      { value: 'index', label: 'matchByIndex (default)' },
      { value: 'dataKey', label: "matchByDataKey('time')" },
    ],
  }),
  createSelectLever<ControlsType, AnimationVariant>({
    key: 'animationVariant',
    label: 'animationInterpolateFn',
    options: [
      { value: 'default', label: 'default' },
      { value: 'custom', label: 'custom (swipe)' },
    ],
    getValue: state => state.animationVariant,
    onChange: (animationVariant, state) => ({ ...state, animationVariant }),
  }),
  animationDurationLever<ControlsType>(),
];

export default function AnimatedBarTimeSeriesExample(props: Partial<ControlsType>) {
  const { animationMatchBy, windowStart, layout, animationDuration, animationVariant } = {
    ...animatedBarTimeSeriesDefaultState,
    ...props,
  };

  const data = getCircularWindowData(windowStart);

  const matchProp: typeof matchByIndex | AnimationMatchBy<{ payload?: unknown }> =
    animationMatchBy === 'dataKey' ? matchByDataKey('label') : matchByIndex;

  return (
    <BarChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      layout={layout}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis allowDataOverflow type="auto" />
      <YAxis type="auto" />
      <Tooltip />
      <Bar
        dataKey="y"
        stroke="#8884d8"
        strokeWidth={2}
        fill="#9995e9"
        fillOpacity={0.6}
        animationDuration={animationDuration}
        animationMatchBy={matchProp}
        animationInterpolateFn={animationVariant === 'custom' ? animationInterpolateFn : undefined}
      />
      <RechartsDevtools />
    </BarChart>
  );
}
