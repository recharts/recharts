import * as React from 'react';
import { forwardRef } from 'react';
import { CategoricalChartProps } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { TooltipEventType } from '../util/types';
import { CartesianChart } from './CartesianChart';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis', 'item'];

export const BarChart = forwardRef<SVGSVGElement, CategoricalChartProps>((props: CategoricalChartProps, ref) => {
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
