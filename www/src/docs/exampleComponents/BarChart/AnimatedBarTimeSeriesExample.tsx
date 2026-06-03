import { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { AnimationItem, AnimationMatchBy, BarRectangleItem } from 'recharts';
import {
  AnimationInterpolateFn,
  Bar,
  BarChart,
  CartesianGrid,
  CartesianLayout,
  matchByDataKey,
  matchByIndex,
  Tooltip,
  XAxis,
  YAxis,
  interpolate,
} from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const WINDOW = 6;
const DATA_LENGTH = 30;

const allData = generateMockData(DATA_LENGTH, 90).map((o, i) => ({ ...o, i }));

function normalizeWindowStart(windowStart: number): number {
  return ((windowStart % DATA_LENGTH) + DATA_LENGTH) % DATA_LENGTH;
}

function getCircularWindowData(windowStart: number) {
  const normalizedWindowStart = normalizeWindowStart(windowStart);

  return Array.from({ length: WINDOW }, (_, index) => allData[(normalizedWindowStart + index) % DATA_LENGTH]!);
}

type MatchStrategy = 'index' | 'dataKey';
type AnimationVariant = 'default' | 'custom';

type ControlsType = {
  matchStrategy: MatchStrategy;
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
      // animate removed items to the left, out of the chart
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
    // added
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
      // animate removed items upward, out of the chart
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
    // added items animate from the bottom
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

export default function AnimatedBarTimeSeriesExample(props: Partial<ControlsType>) {
  const matchStrategy = props.matchStrategy ?? 'index';
  const windowStart = normalizeWindowStart(props.windowStart ?? 0);
  const animationVariant = props.animationVariant ?? 'default';
  const layout = props.layout ?? 'horizontal';

  const data = getCircularWindowData(windowStart);

  const matchProp: typeof matchByIndex | AnimationMatchBy<{ payload?: unknown }> =
    matchStrategy === 'dataKey' ? matchByDataKey('label') : matchByIndex;

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
        animationDuration={props.animationDuration}
        animationMatchBy={matchProp}
        animationInterpolateFn={animationVariant === 'custom' ? animationInterpolateFn : undefined}
      />
      <RechartsDevtools />
    </BarChart>
  );
}

export function AnimatedBarTimeSeriesExampleControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = useState<ControlsType>({
    matchStrategy: 'dataKey',
    windowStart: 0,
    layout: 'horizontal',
    animationDuration: 1200,
    animationVariant: 'default',
  });

  const [isStreaming, setIsStreaming] = useState(false);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const handleChange = useCallback((next: Partial<ControlsType>) => {
    setState(prev => {
      const newState = { ...prev, ...next };
      onChangeRef.current(newState);
      return newState;
    });
  }, []);

  useEffect(() => {
    onChangeRef.current(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isStreaming) {
      return undefined;
    }

    const interval = setInterval(() => {
      setState(prev => {
        const next = { ...prev, windowStart: (prev.windowStart + 1) % DATA_LENGTH };
        onChangeRef.current(next);
        return next;
      });
    }, state.animationDuration * 1.1);

    return () => clearInterval(interval);
  }, [isStreaming, state.animationDuration]);

  const matchStrategyId = useId();
  const streamingToggleId = useId();
  const layoutId = useId();
  const animationDurationId = useId();
  const animationVariantId = useId();

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor={layoutId}>layout</label>
            </td>
            <td>
              <select
                id={layoutId}
                value={state.layout}
                onChange={e => handleChange({ layout: e.target.value as CartesianLayout })}
              >
                <option value="horizontal">horizontal</option>
                <option value="vertical">vertical</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor={matchStrategyId}>animationMatchBy</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id={matchStrategyId}
                value={state.matchStrategy}
                onChange={e => handleChange({ matchStrategy: e.target.value as MatchStrategy })}
              >
                <option value="index">matchByIndex (default)</option>
                <option value="dataKey">matchByDataKey(&apos;time&apos;)</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor={animationVariantId}>animationInterpolateFn</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id={animationVariantId}
                value={state.animationVariant}
                onChange={e => handleChange({ animationVariant: e.target.value as AnimationVariant })}
              >
                <option value="default">default</option>
                <option value="custom">custom (swipe)</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button id={streamingToggleId} type="button" onClick={() => setIsStreaming(s => !s)}>
                {isStreaming ? 'Stop streaming' : 'Start streaming'}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor={animationDurationId}>animationDuration</label>
            </td>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <td style={{ padding: '0 1ex' }}>
              <input
                id={animationDurationId}
                type="range"
                value={state.animationDuration}
                min={100}
                max={2000}
                step={100}
                onChange={e => handleChange({ animationDuration: parseInt(e.target.value, 10) })}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85em', opacity: 0.8, marginTop: '0.5em' }}>
        Start streaming to move the window forward and observe how the two matching strategies differ.
      </p>
    </form>
  );
}
