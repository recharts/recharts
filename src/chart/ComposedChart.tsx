import * as React from 'react';
import { forwardRef } from 'react';
import { CategoricalChartProps } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { CartesianChart } from './CartesianChart';
import { TooltipEventType } from '../util/types';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis'];

export const ComposedChart = forwardRef<SVGSVGElement, CategoricalChartProps>((props: CategoricalChartProps, ref) => {
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
