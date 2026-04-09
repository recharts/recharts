import React, { useState, useCallback, useId } from 'react';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { Line, CartesianGrid, XAxis, YAxis, Tooltip, matchByIndex, matchAppend, Area, ComposedChart } from 'recharts';
import type { AnimationMatchByProp, LinePointItem } from 'recharts';

const dataSmall = generateMockData(5, 42);
const dataLarge = generateMockData(15, 99);

type MatchStrategy = 'index' | 'append';

type ControlsType = {
  matchStrategy: MatchStrategy;
  useLargeData: boolean;
};

function getMatchProp(strategy: MatchStrategy): AnimationMatchByProp<LinePointItem> {
  switch (strategy) {
    case 'append':
      return matchAppend;
    case 'index':
    default:
      return matchByIndex;
  }
}

export default function MatchingStrategiesExample(props: Partial<ControlsType>) {
  const matchStrategy = props.matchStrategy ?? 'index';
  const useLargeData = props.useLargeData ?? false;

  const data = useLargeData ? dataLarge : dataSmall;
  const matchProp = getMatchProp(matchStrategy);

  return (
    <ComposedChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="x"
        stroke="#8884d8"
        strokeWidth={2}
        animationDuration={1500}
        animationMatchBy={matchProp}
      />
      <Area
        dot
        type="monotone"
        dataKey="y"
        stroke="#84d888"
        fill="#84d888"
        fillOpacity={0.6}
        animationDuration={1500}
        animationMatchBy={matchProp}
      />
      <RechartsDevtools />
    </ComposedChart>
  );
}

export function MatchingStrategiesControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = useState<ControlsType>({
    matchStrategy: 'index',
    useLargeData: false,
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

  const matchStrategyId = useId();

  return (
    <form>
      <button type="button" onClick={() => handleChange({ useLargeData: !state.useLargeData })}>
        ⇄ Swap dataset ({state.useLargeData ? '15 → 5 items' : '5 → 15 items'})
      </button>
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
                <option value="index">matchByIndex — stretch (default)</option>
                <option value="append">matchAppend — sequential</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.85em', opacity: 0.8, marginTop: '0.5em' }}>
        Swap between a 5-item and a 15-item dataset and compare: <strong>matchByIndex</strong> stretches old points
        across the new range, while <strong>matchAppend</strong> keeps existing points in place and new points animate
        in from the edge.
      </p>
    </form>
  );
}
