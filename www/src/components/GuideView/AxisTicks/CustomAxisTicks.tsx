import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { x: 0, y: 12 },
  { x: 117, y: 45 },
  { x: 234, y: 23 },
  { x: 351, y: 78 },
  { x: 468, y: 156 },
];

export type AxisTicksControlsType = {
  scale: 'linear' | 'symlog';
};

const defaultState: AxisTicksControlsType = {
  scale: 'linear',
};

const xTicks = [0, 110, 220, 330, 440, 550];
const yTicks = [0, 40, 80, 120, 160, 200];

export default function CustomAxisTicks(props: Partial<AxisTicksControlsType>) {
  const scale = props.scale ?? defaultState.scale;

  return (
    <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 700 }} responsive data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="x" ticks={xTicks} scale={scale} />
      <YAxis width="auto" ticks={yTicks} scale={scale} />
      <Tooltip />
      <Line type="monotone" dataKey="y" stroke="#12978f" isAnimationActive={false} />
      <RechartsDevtools />
    </LineChart>
  );
}

export function CustomAxisTicksControls({ onChange }: { onChange: (values: AxisTicksControlsType) => void }) {
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

  return (
    <form>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </form>
  );
}
