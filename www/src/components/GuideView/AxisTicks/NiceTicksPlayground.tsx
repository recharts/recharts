import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, NiceTicksAlgorithm } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { x: 0, y: 12 },
  { x: 117, y: 45 },
  { x: 234, y: 23 },
  { x: 351, y: 78 },
  { x: 468, y: 156 },
];

export type AxisTicksControlsType = {
  niceTicks: NiceTicksAlgorithm;
  tickCount: number;
  scale: 'linear' | 'symlog';
};

const defaultState: AxisTicksControlsType = {
  niceTicks: 'auto',
  tickCount: 5,
  scale: 'linear',
};

const niceTicksOptions: ReadonlyArray<NiceTicksAlgorithm> = ['none', 'auto', 'adaptive', 'snap125'];

function isNiceTicks(value: string): value is NiceTicksAlgorithm {
  return value === 'none' || value === 'auto' || value === 'adaptive' || value === 'snap125';
}

export default function AxisTicksPlayground(props: Partial<AxisTicksControlsType>) {
  const niceTicks = props.niceTicks ?? defaultState.niceTicks;
  const tickCount = props.tickCount ?? defaultState.tickCount;
  const scale = props.scale ?? defaultState.scale;

  return (
    <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 700 }} responsive data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="x" tickCount={tickCount} niceTicks={niceTicks} scale={scale} />
      <YAxis width="auto" tickCount={tickCount} niceTicks={niceTicks} scale={scale} />
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
              <label htmlFor="axis-ticks-algorithm">niceTicks</label>
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
              <label htmlFor="axis-ticks-scale">scale</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id="axis-ticks-scale"
                value={state.scale}
                onChange={event => updateState({ scale: event.target.value as AxisTicksControlsType['scale'] })}
              >
                <option value="linear">linear</option>
                <option value="symlog">symlog</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="axis-ticks-count">tickCount</label>
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
