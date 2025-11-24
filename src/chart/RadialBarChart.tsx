import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { PolarChartProps, TooltipEventType } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { defaultPolarChartProps, PolarChart } from './PolarChart';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis', 'item'];

export const defaultRadialBarChartProps = {
  ...defaultPolarChartProps,
  layout: 'radial',
  startAngle: 0,
  endAngle: 360,
} as const satisfies Partial<PolarChartProps>;

export const RadialBarChart = forwardRef<SVGSVGElement, PolarChartProps>((props: PolarChartProps, ref) => {
  const propsWithDefaults = resolveDefaultProps(props, defaultRadialBarChartProps);
  return (
    <PolarChart
      chartName="RadialBarChart"
      defaultTooltipEventType="axis"
      validateTooltipEventTypes={allowedTooltipTypes}
      tooltipPayloadSearcher={arrayTooltipSearcher}
      categoricalChartProps={propsWithDefaults}
      ref={ref}
    />
  );
});
