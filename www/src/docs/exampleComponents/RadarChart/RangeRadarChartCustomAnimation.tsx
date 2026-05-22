import { useCallback, useEffect, useId, useState } from 'react';
import type { AnimationInterpolateFn, PolarLayout, RadarPoint } from 'recharts';
import { interpolate, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';

const animationOptions = {
  pointToPoint: { label: 'Point to point (default)' },
  centerOut: { label: 'Always from center (custom)' },
} as const;

type AnimationStyle = keyof typeof animationOptions;

type ControlsType = {
  animationStyle: AnimationStyle;
  animationDuration: number;
  replayKey: number;
  useDataA: boolean;
};

const initialState: ControlsType = {
  animationStyle: 'centerOut',
  animationDuration: 1600,
  replayKey: 0,
  useDataA: true,
};

const dataA = [
  { subject: 'Math', range: [30, 110] },
  { subject: 'Art', range: [55, 120] },
  { subject: 'Music', range: [40, 95] },
  { subject: 'Physics', range: [65, 135] },
  { subject: 'History', range: [50, 105] },
  { subject: 'Sports', range: [70, 125] },
];

const dataB = [
  { subject: 'Math', range: [20, 80] },
  { subject: 'Art', range: [70, 140] },
  { subject: 'Music', range: [35, 75] },
  { subject: 'Physics', range: [80, 145] },
  { subject: 'History', range: [45, 90] },
  { subject: 'Sports', range: [95, 150] },
];

const animateFromCenter: AnimationInterpolateFn<RadarPoint, PolarLayout> = (items, t) => {
  if (items == null) {
    return [];
  }
  if (t === 1) {
    return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));
  }

  return items.flatMap(item => {
    if (item.status === 'removed') {
      return [];
    }

    return [
      {
        ...item.next,
        x: interpolate(item.next.cx, item.next.x, t),
        y: interpolate(item.next.cy, item.next.y, t),
        radius: interpolate(0, item.next.radius, t),
      },
    ];
  });
};

export default function RangeRadarChartCustomAnimation(props: Partial<ControlsType>) {
  const { animationStyle, animationDuration, replayKey, useDataA } = {
    ...initialState,
    ...props,
  };
  const animationInterpolateFn = animationStyle === 'centerOut' ? animateFromCenter : undefined;

  return (
    <RadarChart
      key={replayKey}
      style={{ width: '100%', maxWidth: 560, aspectRatio: 1 }}
      responsive
      data={useDataA ? dataA : dataB}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis domain={[0, 150]} />
      <Tooltip />
      <Legend />
      <Radar
        name="Range"
        dataKey="range"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.35}
        isAnimationActive
        animationDuration={animationDuration}
        animationInterpolateFn={animationInterpolateFn}
      />
    </RadarChart>
  );
}

export function RangeRadarChartCustomAnimationControls({ onChange }: { onChange: (values: ControlsType) => void }) {
  const [state, setState] = useState<ControlsType>(initialState);
  const animationStyleId = useId();
  const animationDurationId = useId();

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

  return (
    <form>
      <p>
        <button type="button" onClick={() => handleChange({ replayKey: state.replayKey + 1 })}>
          ▶ Replay initial animation
        </button>
      </p>
      <p>
        <button type="button" onClick={() => handleChange({ useDataA: !state.useDataA })}>
          ⇄ Swap dataset ({state.useDataA ? 'A -> B' : 'B -> A'})
        </button>
      </p>
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
              <label htmlFor={animationDurationId}>animationDuration</label>
            </td>
            <td style={{ padding: '0 1ex' }}>
              <input
                id={animationDurationId}
                aria-label="animationDuration"
                type="range"
                min="300"
                max="3000"
                step="100"
                value={state.animationDuration}
                onChange={e => handleChange({ animationDuration: parseInt(e.target.value, 10) })}
              />
            </td>
            <td>{state.animationDuration}ms</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
