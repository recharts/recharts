import React, { useState, useCallback, useId } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, matchByDataKey, matchByIndex } from 'recharts';
import type { AnimationMatchBy } from 'recharts';

// Simulates a sliding window of time-series data
const allData = [
  { time: '10:00', value: 42 },
  { time: '10:01', value: 58 },
  { time: '10:02', value: 72 },
  { time: '10:03', value: 61 },
  { time: '10:04', value: 89 },
  { time: '10:05', value: 74 },
  { time: '10:06', value: 92 },
  { time: '10:07', value: 86 },
  { time: '10:08', value: 95 },
  { time: '10:09', value: 78 },
  { time: '10:10', value: 83 },
  { time: '10:11', value: 67 },
];

const WINDOW = 6;

type MatchStrategy = 'index' | 'dataKey';

type ControlsType = {
  matchStrategy: MatchStrategy;
  windowStart: number;
};

export default function MatchingExample(props: Partial<ControlsType>) {
  const matchStrategy = props.matchStrategy ?? 'index';
  const windowStart = props.windowStart ?? 0;

  const data = allData.slice(windowStart, windowStart + WINDOW);

  const matchProp: typeof matchByIndex | AnimationMatchBy<{ payload?: unknown }> =
    matchStrategy === 'dataKey' ? matchByDataKey('time') : matchByIndex;

  return (
    <LineChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis domain={[30, 100]} />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        strokeWidth={2}
        animationDuration={600}
        animationMatchBy={matchProp}
      />
    </LineChart>
  );
}

export function MatchingControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = useState<ControlsType>({
    matchStrategy: 'index',
    windowStart: 0,
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

  const maxStart = allData.length - WINDOW;

  const matchStrategyId = useId();
  const windowStartId = useId();

  return (
    <form>
      <table>
        <tbody>
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
              <label htmlFor={windowStartId}>Window start</label>
            </td>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <td style={{ padding: '0 1ex' }}>
              <input
                id={windowStartId}
                type="range"
                min="0"
                max={maxStart}
                step="1"
                value={state.windowStart}
                onChange={e => handleChange({ windowStart: parseInt(e.target.value, 10) })}
              />
            </td>
            <td>
              {allData[state.windowStart]?.time} –{' '}
              {allData[Math.min(state.windowStart + WINDOW - 1, allData.length - 1)]?.time}
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85em', opacity: 0.8, marginTop: '0.5em' }}>
        Slide the window to add/remove data points and observe how the two matching strategies differ.
      </p>
    </form>
  );
}
