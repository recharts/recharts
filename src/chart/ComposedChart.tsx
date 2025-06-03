import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { CartesianChart } from './CartesianChart';
import { CartesianChartProps, TooltipEventType } from '../util/types';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis'];

export const ComposedChart = forwardRef<SVGSVGElement, CartesianChartProps>((props: CartesianChartProps, ref) => {
  return (
    <CartesianChart
      chartName="ComposedChart"
      defaultTooltipEventType="axis"
      validateTooltipEventTypes={allowedTooltipTypes}
      tooltipPayloadSearcher={arrayTooltipSearcher}
      categoricalChartProps={props}
      ref={ref}
    />
  );
});
