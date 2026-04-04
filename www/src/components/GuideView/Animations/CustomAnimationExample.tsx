import React, { useState, useCallback } from 'react';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { Scatter, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import type { AnimationInterpolateFn, ScatterPointItem } from 'recharts';

// Two distinct datasets to swap between
const dataA = generateMockData(10, 42);
const dataB = generateMockData(10, 99);

/**
 * Crossfade: previous points fade out while new points fade in.
 * Returns both sets combined — prev with decreasing opacity, next with increasing.
 */
const crossfade: AnimationInterpolateFn<ScatterPointItem> = (prevItems, nextItems, t) => {
  if (t === 1) return nextItems;
  const fadingIn = nextItems.map(entry => ({ ...entry, opacity: t }));
  if (!prevItems) return fadingIn;
  const fadingOut = prevItems.map(entry => ({ ...entry, opacity: 1 - t }));
  return [...fadingOut, ...fadingIn];
};

/**
 * Staggered crossfade: points fade out and in one by one in a wave.
 */
const staggeredCrossfade: AnimationInterpolateFn<ScatterPointItem> = (prevItems, nextItems, t) => {
  if (t === 1) return nextItems;
  const count = nextItems.length;
  const fadingIn = nextItems.map((entry, index) => {
    const delay = index / count;
    const progress = Math.max(0, Math.min(1, (t - delay) / (1 - delay)));
    return { ...entry, opacity: progress };
  });
  if (!prevItems) return fadingIn;
  const fadingOut = prevItems.map((entry, index) => {
    // Reverse order: last items fade out first
    const delay = (count - 1 - index) / count;
    const progress = Math.max(0, Math.min(1, (t - delay) / (1 - delay)));
    return { ...entry, opacity: 1 - progress };
  });
  return [...fadingOut, ...fadingIn];
};

/**
 * Pop crossfade: old points shrink and fade out, new points grow and fade in.
 */
const popCrossfade: AnimationInterpolateFn<ScatterPointItem> = (prevItems, nextItems, t) => {
  if (t === 1) return nextItems;
  const fadingIn = nextItems.map(entry => ({
    ...entry,
    opacity: t,
    size: entry.size * t * t,
  }));
  if (!prevItems) return fadingIn;
  const fadingOut = prevItems.map(entry => ({
    ...entry,
    opacity: 1 - t,
    size: entry.size * (1 - t) * (1 - t),
  }));
  return [...fadingOut, ...fadingIn];
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
  useDataA: boolean;
};

export default function CustomAnimationExample(props: Partial<ControlsType>) {
  const animationStyle = props.animationStyle ?? 'crossfade';
  const animationDuration = props.animationDuration ?? 1500;
  const useDataA = props.useDataA ?? true;

  const animationInterpolateFn = animationOptions[animationStyle].fn;

  return (
    <ScatterChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" name="x" type="number" />
      <YAxis dataKey="y" name="y" type="number" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter
        name="Data"
        data={useDataA ? dataA : dataB}
        fill="#8884d8"
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

  return (
    <form>
      <button type="button" onClick={() => handleChange({ useDataA: !state.useDataA })}>
        ⇄ Swap dataset ({state.useDataA ? 'A → B' : 'B → A'})
      </button>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="animation-style">Animation style</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id="animation-style"
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
              <label htmlFor="animation-duration">Duration (ms)</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="animation-duration"
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
