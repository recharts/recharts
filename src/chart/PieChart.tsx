import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { defaultPolarChartProps, PolarChart } from './PolarChart';
import { PolarChartProps, TooltipEventType } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['item'];

export const defaultPieChartProps = {
  ...defaultPolarChartProps,
  layout: 'centric',
  startAngle: 0,
  endAngle: 360,
} as const satisfies Partial<PolarChartProps>;

export const PieChart = forwardRef<SVGSVGElement, PolarChartProps>((props: PolarChartProps, ref) => {
  const propsWithDefaults = resolveDefaultProps(props, defaultPieChartProps);
  return (
    <PolarChart
      chartName="PieChart"
      defaultTooltipEventType="item"
      validateTooltipEventTypes={allowedTooltipTypes}
      tooltipPayloadSearcher={arrayTooltipSearcher}
      categoricalChartProps={propsWithDefaults}
      ref={ref}
    />
  );
});
