import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  CartesianPosition,
  LegendProps,
} from 'recharts';
// #region data and controls
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import type { Lever } from '../../../components/Shared/levers/Levers.tsx';
import { createSelectLever, createNumberLever } from '../../../components/Shared/levers/Levers.tsx';

const data = generateMockData(4, 12);

type LegendLayout = Exclude<LegendProps['layout'], null | undefined>;

type ControlsState = {
  position: LegendPosition;
  layout: LegendLayout;
  offset: number;
};

export type LegendPosition = Extract<CartesianPosition, string>;

export const defaultControlsState: ControlsState = {
  position: 'bottom',
  layout: 'horizontal',
  offset: 0,
};

const positionOptions: ReadonlyArray<{ value: LegendPosition; label: string }> = (
  [
    'top',
    'left',
    'right',
    'bottom',
    'center',
    'insideLeft',
    'insideRight',
    'insideTop',
    'insideBottom',
    'insideTopLeft',
    'insideBottomLeft',
    'insideTopRight',
    'insideBottomRight',
  ] as const
).map(pos => ({ value: pos, label: pos }));

const layoutOptions: ReadonlyArray<{ value: LegendLayout; label: string }> = [
  { value: 'horizontal', label: 'horizontal' },
  { value: 'vertical', label: 'vertical' },
  { value: 'auto', label: 'auto (default)' },
];

export const levers = [
  createSelectLever<ControlsState, LegendLayout>({
    key: 'layout',
    label: 'Legend layout',
    options: layoutOptions,
    getValue: state => state.layout ?? defaultControlsState.layout,
    onChange: (layout, state) => ({ ...state, layout }),
  }),
  createSelectLever<ControlsState, LegendPosition>({
    key: 'position',
    label: 'Legend position',
    options: positionOptions,
    getValue: state => state.position ?? defaultControlsState.position,
    onChange: (position, state) => ({ ...state, position }),
  }),
  createNumberLever<ControlsState>({
    key: 'offset',
    label: 'Legend offset',
    min: 0,
    max: 100,
    step: 1,
    getValue: state => state.offset ?? defaultControlsState.offset,
    onChange: (offset, state) => ({ ...state, offset }),
  }),
] satisfies ReadonlyArray<Lever<ControlsState>>;
// #endregion

export default function LegendPositionExample(props: Partial<ControlsState>) {
  const { position, layout, offset } = { ...defaultControlsState, ...props };

  return (
    <LineChart style={{ width: '600px', height: '300px', outline: '2px solid gray' }} responsive={false} data={data}>
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Legend
        layout={layout}
        position={position}
        offset={offset}
        wrapperStyle={{
          border: '2px solid black',
          borderRadius: 4,
          backgroundColor: 'white',
        }}
      />
      <Line name="Line 1" type="monotone" dataKey="x" />
      <Line name="Line 2" type="monotone" dataKey="y" />
      <RechartsDevtools />
    </LineChart>
  );
}
