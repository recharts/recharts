import { useMemo } from 'react';
import { Bar, BarChart, XAxis } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { scaleBand } from 'd3-scale';
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { createRangeLever } from '../../Shared/levers/Levers.tsx';

const data = generateMockData(5, 50);

export const barAlignDefaultState: ControlsType = {
  paddingInner: 0,
  paddingOuter: 0.8,
  align: 0.7,
  barGap: 0.1,
  barCategoryGap: 0.1,
};

export const barAlignLevers = [
  createRangeLever<ControlsType>({
    key: 'barGap',
    label: 'BarChart.barGap',
    min: 0,
    max: 0.5,
    step: 0.01,
    getValue: state => state.barGap,
    onChange: (barGap, state) => ({ ...state, barGap }),
    formatValue: value => `${(value * 100).toFixed(0)}%`,
  }),
  createRangeLever<ControlsType>({
    key: 'barCategoryGap',
    label: 'BarChart.barCategoryGap',
    min: 0,
    max: 0.5,
    step: 0.01,
    getValue: state => state.barCategoryGap,
    onChange: (barCategoryGap, state) => ({ ...state, barCategoryGap }),
    formatValue: value => `${(value * 100).toFixed(0)}%`,
  }),
  createRangeLever<ControlsType>({
    key: 'paddingInner',
    label: 'bandScale.paddingInner',
    min: 0,
    max: 1,
    step: 0.01,
    getValue: state => state.paddingInner,
    onChange: (paddingInner, state) => ({ ...state, paddingInner }),
  }),
  createRangeLever<ControlsType>({
    key: 'paddingOuter',
    label: 'bandScale.paddingOuter',
    min: 0,
    max: 10,
    step: 0.01,
    getValue: state => state.paddingOuter,
    onChange: (paddingOuter, state) => ({ ...state, paddingOuter }),
  }),
  createRangeLever<ControlsType>({
    key: 'align',
    label: 'bandScale.align',
    min: 0,
    max: 1,
    step: 0.01,
    getValue: state => state.align,
    onChange: (align, state) => ({ ...state, align }),
  }),
] satisfies ReadonlyArray<Lever<ControlsType>>;

export default function CustomBandScaleExample(props: Partial<ControlsType>) {
  const { paddingInner, paddingOuter, align, barCategoryGap, barGap } = { ...barAlignDefaultState, ...props };

  // You don't need to set domain and scale, Recharts will do it for you based on the data.
  const customScale = useMemo(
    () => scaleBand().paddingInner(paddingInner).paddingOuter(paddingOuter).align(align),
    [align, paddingInner, paddingOuter],
  );

  return (
    <BarChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      barCategoryGap={`${barCategoryGap * 100}%`}
      barGap={`${barGap * 100}%`}
    >
      <Bar dataKey="x" fill="#12978f" isAnimationActive={false} />
      <Bar dataKey="y" fill="#804351" isAnimationActive={false} />
      <Bar dataKey="z" fill="#a16712" isAnimationActive={false} />
      <XAxis dataKey="label" scale={customScale} />
      <RechartsDevtools />
    </BarChart>
  );
}

type ControlsType = {
  paddingInner: number;
  paddingOuter: number;
  align: number;
  barGap: number;
  barCategoryGap: number;
};
