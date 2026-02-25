import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { x: 0, y: 12 },
  { x: 117, y: 45 },
  { x: 234, y: 23 },
  { x: 351, y: 78 },
  { x: 468, y: 56 },
];

type DomainMode = 'auto' | 'fixed';
type NiceTicksMode = 'none' | 'auto' | 'equidistant' | 'nice';

export type AxisTicksControlsType = {
  niceTicks: NiceTicksMode;
  tickCount: number;
  minMode: DomainMode;
  maxMode: DomainMode;
  minValue: number;
  maxValue: number;
};

const defaultState: AxisTicksControlsType = {
  // niceTicks: 'auto',
  niceTicks: 'none',
  tickCount: 5,
  minMode: 'auto',
  maxMode: 'auto',
  minValue: 0,
  maxValue: 500,
};

const niceTicksOptions: ReadonlyArray<NiceTicksMode> = ['none', 'auto', 'equidistant', 'nice'];

function isNiceTicks(value: string): value is NiceTicksMode {
  return value === 'none' || value === 'auto' || value === 'equidistant' || value === 'nice';
}

export default function AxisTicksPlayground(props: Partial<AxisTicksControlsType>) {
  const niceTicks = props.niceTicks ?? defaultState.niceTicks;
  const tickCount = props.tickCount ?? defaultState.tickCount;

  return (
    <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 700 }} responsive data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="x" tickCount={tickCount} niceTicks={niceTicks} />
      <YAxis width="auto" tickCount={tickCount} niceTicks={niceTicks} />
      <Tooltip />
      <Line type="monotone" dataKey="y" stroke="#12978f" isAnimationActive={false} />
      <RechartsDevtools />
    </LineChart>
  );
}

export function AxisTicksControls({ onChange }: { onChange: (values: AxisTicksControlsType) => void }) {
  const [state, setState] = React.useState<AxisTicksControlsType>(defaultState);

  const updateState = (nextValues: Partial<AxisTicksControlsType>) => {
    const nextState = { ...state, ...nextValues };
    setState(nextState);
    onChange(nextState);
  };

  React.useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* eslint-disable jsx-a11y/control-has-associated-label */
  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="axis-ticks-algorithm">XAxis.niceTicks</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id="axis-ticks-algorithm"
                value={state.niceTicks}
                onChange={event => {
                  const { value } = event.target;
                  if (isNiceTicks(value)) {
                    updateState({ niceTicks: value });
                  }
                }}
              >
                {niceTicksOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="axis-ticks-count">XAxis.tickCount</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="axis-ticks-count"
                type="range"
                min="2"
                max="12"
                step="1"
                value={state.tickCount}
                onChange={event => updateState({ tickCount: Number(event.target.value) })}
              />
            </td>
            <td>{state.tickCount}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
  /* eslint-enable jsx-a11y/control-has-associated-label */
}
