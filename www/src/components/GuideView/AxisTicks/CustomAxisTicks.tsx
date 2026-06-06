import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { createSelectLever } from '../../Shared/levers/Levers.tsx';

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

export const customAxisTicksDefaultState: AxisTicksControlsType = {
  scale: 'linear',
};
const scaleOptions = ['linear', 'symlog'] as const;

export const customAxisTicksLevers = [
  createSelectLever<AxisTicksControlsType, (typeof scaleOptions)[number]>({
    key: 'scale',
    label: 'scale',
    options: scaleOptions.map(option => ({ value: option, label: option })),
    getValue: state => state.scale,
    onChange: (scale, state) => ({ ...state, scale }),
  }),
] satisfies ReadonlyArray<Lever<AxisTicksControlsType>>;

const xTicks = [0, 110, 220, 330, 440, 550];
const yTicks = [0, 40, 80, 120, 160, 200];

export default function CustomAxisTicks(props: Partial<AxisTicksControlsType>) {
  const { scale } = { ...customAxisTicksDefaultState, ...props };

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
