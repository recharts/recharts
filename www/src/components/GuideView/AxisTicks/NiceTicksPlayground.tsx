import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, NiceTicksAlgorithm } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { createRangeLever, createSelectLever } from '../../Shared/levers/Levers.tsx';

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

export const axisTicksDefaultState: AxisTicksControlsType = {
  niceTicks: 'auto',
  tickCount: 5,
  scale: 'linear',
};

const niceTicksOptions: ReadonlyArray<NiceTicksAlgorithm> = ['none', 'auto', 'adaptive', 'snap125'];
const scaleOptions = ['linear', 'symlog'] as const;

export const axisTicksLevers = [
  createSelectLever<AxisTicksControlsType, NiceTicksAlgorithm>({
    key: 'niceTicks',
    label: 'niceTicks',
    options: niceTicksOptions.map(option => ({ value: option, label: option })),
    getValue: state => state.niceTicks,
    onChange: (niceTicks, state) => ({ ...state, niceTicks }),
  }),
  createSelectLever<AxisTicksControlsType, (typeof scaleOptions)[number]>({
    key: 'scale',
    label: 'scale',
    options: scaleOptions.map(option => ({ value: option, label: option })),
    getValue: state => state.scale,
    onChange: (scale, state) => ({ ...state, scale }),
  }),
  createRangeLever<AxisTicksControlsType>({
    key: 'tickCount',
    label: 'tickCount',
    min: 2,
    max: 12,
    step: 1,
    getValue: state => state.tickCount,
    onChange: (tickCount, state) => ({ ...state, tickCount }),
  }),
] satisfies ReadonlyArray<Lever<AxisTicksControlsType>>;

export default function AxisTicksPlayground(props: Partial<AxisTicksControlsType>) {
  const { niceTicks, tickCount, scale } = { ...axisTicksDefaultState, ...props };

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
