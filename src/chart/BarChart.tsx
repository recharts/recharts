import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { CartesianChartProps, TooltipEventType } from '../util/types';
import { CartesianChart } from './CartesianChart';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis', 'item'];

export const BarChart = forwardRef<SVGSVGElement, CartesianChartProps>((props: CartesianChartProps, ref) => {
  return (
    <CartesianChart
      chartName="BarChart"
      defaultTooltipEventType="axis"
      validateTooltipEventTypes={allowedTooltipTypes}
      tooltipPayloadSearcher={arrayTooltipSearcher}
      categoricalChartProps={props}
      ref={ref}
    />
  );
});
