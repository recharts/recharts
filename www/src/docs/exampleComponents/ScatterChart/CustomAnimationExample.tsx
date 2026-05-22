import React, { useState, useCallback, useId } from 'react';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { Scatter, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, ZAxis } from 'recharts';
import type { AnimationInterpolateFn, ScatterPointItem } from 'recharts';

// Two distinct datasets to swap between
const dataA = generateMockData(10, 42);
const dataB = generateMockData(10, 99);

// Extended type to support opacity and size modifications in custom animations
type AnimatedScatterPoint = ScatterPointItem & { opacity?: number };

/**
 * Crossfade: previous points fade out while new points fade in.
 * Returns both sets combined — prev with decreasing opacity, next with increasing.
 */
const crossfade: AnimationInterpolateFn<ScatterPointItem> = (items, t) => {
  if (items == null) return [];
  if (t === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  const result: AnimatedScatterPoint[] = [];
  for (const item of items) {
    if (item.status === 'matched') {
      result.push({ ...item.prev, opacity: 1 - t });
      result.push({ ...item.next, opacity: t });
    } else if (item.status === 'added') {
      result.push({ ...item.next, opacity: t });
    } else {
      result.push({ ...item.prev, opacity: 1 - t });
    }
  }
  return result;
};

/**
 * Staggered crossfade: points fade out and in one by one in a wave.
 */
const staggeredCrossfade: AnimationInterpolateFn<ScatterPointItem> = (items, t) => {
  if (items == null) return [];
  if (t === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  const count = items.length;
  const result: AnimatedScatterPoint[] = [];
  items.forEach((item, index) => {
    if (item.status === 'matched' || item.status === 'added') {
      const delay = index / count;
      const progress = Math.max(0, Math.min(1, (t - delay) / (1 - delay)));
      result.push({ ...item.next, opacity: progress });
    }
    if (item.status === 'matched' || item.status === 'removed') {
      const reverseIndex = count - 1 - index;
      const delay = reverseIndex / count;
      const progress = Math.max(0, Math.min(1, (t - delay) / (1 - delay)));
      result.push({ ...item.prev, opacity: 1 - progress });
    }
  });
  return result;
};

/**
 * Pop crossfade: old points shrink and fade out, new points grow and fade in.
 */
const popCrossfade: AnimationInterpolateFn<ScatterPointItem> = (items, t) => {
  if (items == null) return [];
  if (t === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  const result: AnimatedScatterPoint[] = [];
  for (const item of items) {
    if (item.status === 'matched' || item.status === 'added') {
      const { next } = item;
      result.push({ ...next, opacity: t, size: next.size * t * t });
    }
    if (item.status === 'matched' || item.status === 'removed') {
      const { prev } = item;
      result.push({ ...prev, opacity: 1 - t, size: prev.size * (1 - t) * (1 - t) });
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
  useDataA: boolean;
};

export default function CustomAnimationExample(props: Partial<ControlsType>) {
  const animationStyle = props.animationStyle ?? 'crossfade';
  const animationDuration = props.animationDuration ?? 1500;
  const replayKey = props.replayKey ?? 0;
  const useDataA = props.useDataA ?? true;

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
        data={useDataA ? dataA : dataB}
        fill="#8884d8"
        fillOpacity={0.85}
        animationDuration={animationDuration}
        animationInterpolateFn={animationInterpolateFn}
      />
      <RechartsDevtools />
    </ScatterChart>
  );
}

export function CustomAnimationControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = useState<ControlsType>({
    animationStyle: 'crossfade',
    animationDuration: 1500,
    replayKey: 0,
    useDataA: true,
  });

  const handleChange = useCallback(
    (next: Partial<ControlsType>) => {
      const newState = { ...state, ...next };
      setState(newState);
      onChange(newState);
    },
    [state, onChange],
  );

  React.useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animationStyleId = useId();
  const animationDurationId = useId();

  return (
    <form>
      <button type="button" onClick={() => handleChange({ replayKey: state.replayKey + 1 })}>
        ▶ Replay initial animation
      </button>
      <br />
      <button type="button" onClick={() => handleChange({ useDataA: !state.useDataA })}>
        ⇄ Swap dataset ({state.useDataA ? 'A → B' : 'B → A'})
      </button>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor={animationStyleId}>Animation style</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id={animationStyleId}
                value={state.animationStyle}
                onChange={e => handleChange({ animationStyle: e.target.value as AnimationStyle })}
              >
                {Object.entries(animationOptions).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor={animationDurationId}>Duration (ms)</label>
            </td>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <td style={{ padding: '0 1ex' }}>
              <input
                id={animationDurationId}
                type="range"
                min="300"
                max="3000"
                step="100"
                value={state.animationDuration}
                onChange={e => handleChange({ animationDuration: parseInt(e.target.value, 10) })}
              />
            </td>
            <td>{state.animationDuration}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
