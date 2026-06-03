import { useCallback, useEffect, useId, useState } from 'react';
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

// #region Sample data
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
// #endregion

type ControlsType = {
  animationDuration: number;
  renderKey: number;
  useCustomInterpolation: boolean;
  useCustomShape: boolean;
  useDataA: boolean;
};

const initialState: ControlsType = {
  animationDuration: 900,
  renderKey: 0,
  useCustomInterpolation: true,
  useCustomShape: true,
  useDataA: true,
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

/**
 * Custom shape that wraps AreaRevealShape but can also be used
 * to demonstrate that custom shapes skip the built-in clipPath animation.
 * By using AreaRevealShape here, we get the same default animation,
 * but we could also customize it.
 */
function GrowFromBottomShape(props: AreaRevealShapeProps) {
  // Skip the clip-path reveal — we're using animationInterpolateFn for the entrance instead
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

export default function AreaChartCustomAnimationExample(props: Partial<ControlsType>) {
  const { animationDuration, renderKey, useCustomInterpolation, useCustomShape, useDataA } = {
    ...initialState,
    ...props,
  };

  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={useDataA ? dataA : dataB}
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
        key={renderKey}
        animationDuration={animationDuration}
        useCustomInterpolation={useCustomInterpolation}
        useCustomShape={useCustomShape}
      />
      <RechartsDevtools />
    </AreaChart>
  );
}

export function AreaChartCustomAnimationControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = useState<ControlsType>(initialState);

  const handleChange = useCallback(
    (next: Partial<ControlsType>) => {
      const newState = { ...state, ...next };
      setState(newState);
      onChange(newState);
    },
    [state, onChange],
  );

  useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animationDurationId = useId();
  const interpolationId = useId();
  const shapeId = useId();

  return (
    <form>
      <p>
        <button type="button" onClick={() => handleChange({ renderKey: state.renderKey + 1 })}>
          Replay entrance animation
        </button>
      </p>
      <p>
        <button type="button" onClick={() => handleChange({ useDataA: !state.useDataA })}>
          ⇄ Swap dataset (Shows update animation)
        </button>
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor={animationDurationId}>animationDuration</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id={animationDurationId}
                aria-label="animationDuration"
                type="range"
                min="200"
                max="2500"
                step="100"
                value={state.animationDuration}
                onChange={e => handleChange({ animationDuration: parseInt(e.target.value, 10) })}
              />
            </td>
            <td>{state.animationDuration}ms</td>
          </tr>
          <tr>
            <td>
              <label htmlFor={interpolationId}>animationInterpolateFn</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id={interpolationId}
                aria-label="animationInterpolateFn"
                type="checkbox"
                checked={state.useCustomInterpolation}
                onChange={e => handleChange({ useCustomInterpolation: e.target.checked })}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor={shapeId}>shape={'{GrowFromBottomShape}'}</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id={shapeId}
                aria-label="shape"
                type="checkbox"
                checked={state.useCustomShape}
                onChange={e => handleChange({ useCustomShape: e.target.checked })}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85em', opacity: 0.8, marginTop: '0.5em' }}>
        Disable the custom shape to see the default clip-path reveal hide most of the grow-from-bottom interpolation.
      </p>
    </form>
  );
}
