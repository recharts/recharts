import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { CartesianChart } from './CartesianChart';
import { CategoricalChartProps } from './generateCategoricalChart';

export const LineChart = forwardRef<SVGSVGElement, CategoricalChartProps>((props: CategoricalChartProps, ref) => {
  return (
    <CartesianChart
      chartName="LineChart"
      defaultTooltipEventType="axis"
      validateTooltipEventTypes={['axis']}
      tooltipPayloadSearcher={arrayTooltipSearcher}
      categoricalChartProps={props}
      ref={ref}
    />
  );
});
