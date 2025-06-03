import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { PolarChart } from './PolarChart';
import { PolarChartProps, TooltipEventType } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['item'];

const defaultProps = {
  layout: 'centric',
  startAngle: 0,
  endAngle: 360,
  cx: '50%',
  cy: '50%',
  innerRadius: 0,
  outerRadius: '80%',
} as const satisfies Partial<PolarChartProps>;

export const PieChart = forwardRef<SVGSVGElement, PolarChartProps>((props: PolarChartProps, ref) => {
  const propsWithDefaults = resolveDefaultProps(props, defaultProps);
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
