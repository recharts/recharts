import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import type { EasingInput } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 7200 },
  { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 8900 },
  { month: 'Jun', revenue: 7400 },
  { month: 'Jul', revenue: 9200 },
  { month: 'Aug', revenue: 8600 },
];

type AnimationEasing = Extract<EasingInput, string>;

type ControlsType = {
  isAnimationActive: boolean;
  animationBegin: number;
  animationDuration: number;
  animationEasing: AnimationEasing;
  replayKey: number;
};

export default function AnimationsExample(props: Partial<ControlsType>) {
  const isAnimationActive = props.isAnimationActive ?? true;
  const animationBegin = props.animationBegin ?? 0;
  const animationDuration = props.animationDuration ?? 400;
  const animationEasing = props.animationEasing ?? 'ease';
  const replayKey = props.replayKey ?? 0;

  return (
    <BarChart
      key={replayKey}
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="revenue"
        fill="#8884d8"
        isAnimationActive={isAnimationActive}
        animationBegin={animationBegin}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
      />
      <RechartsDevtools />
    </BarChart>
  );
}

const easingOptions: ReadonlyArray<AnimationEasing> = [
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'linear',
  'spring',
  'cubic-bezier(.32,1.75,0,.94)',
];

const defaultState: ControlsType = {
  isAnimationActive: true,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
  replayKey: 0,
};

export function AnimationsControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = React.useState<ControlsType>(defaultState);

  const handleChange = (nextValues: Partial<ControlsType>) => {
    const newState = { ...state, ...nextValues };
    setState(newState);
    onChange(newState);
  };

  // Emit initial state only on mount so the chart renders correctly
  React.useEffect(() => {
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* eslint-disable jsx-a11y/control-has-associated-label */
  return (
    <form>
      <button type="button" onClick={() => handleChange({ replayKey: state.replayKey + 1 })}>
        ▶ Replay animation
      </button>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="animation-active">isAnimationActive</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="animation-active"
                type="checkbox"
                checked={state.isAnimationActive}
                onChange={e => handleChange({ isAnimationActive: e.target.checked })}
              />
            </td>
            <td>{state.isAnimationActive ? 'true' : 'false'}</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="animation-begin">animationBegin (ms)</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="animation-begin"
                type="range"
                min="0"
                max="2000"
                step="100"
                value={state.animationBegin}
                onChange={e => handleChange({ animationBegin: parseInt(e.target.value, 10) })}
              />
            </td>
            <td>{state.animationBegin}</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="animation-duration">animationDuration (ms)</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id="animation-duration"
                type="range"
                min="100"
                max="3000"
                step="100"
                value={state.animationDuration}
                onChange={e => handleChange({ animationDuration: parseInt(e.target.value, 10) })}
              />
            </td>
            <td>{state.animationDuration}</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="animation-easing">animationEasing</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <select
                id="animation-easing"
                value={state.animationEasing}
                onChange={e => handleChange({ animationEasing: e.target.value as AnimationEasing })}
              >
                {easingOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
