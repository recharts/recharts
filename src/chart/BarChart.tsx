import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { CartesianChartProps, TooltipEventType } from '../util/types';
import { CartesianChart } from './CartesianChart';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis', 'item'];

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
export const BarChart = forwardRef<SVGSVGElement, CartesianChartProps<unknown>>(
  (props: CartesianChartProps<unknown>, ref) => {
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
  },
) as <DataPointType = any>(
  props: CartesianChartProps<DataPointType> & { ref?: React.Ref<SVGSVGElement> },
) => React.ReactElement;
