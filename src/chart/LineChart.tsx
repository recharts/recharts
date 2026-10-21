import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { CartesianChart } from './CartesianChart';
import { CartesianChartProps, TooltipEventType } from '../util/types';

// Line charts strictly use 'axis' type for tooltips to align data points correctly along the grid
const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis'];

/**
 * A Cartesian chart component that displays data points connected by line segments.
 * Useful for showing trends over time.
 * 
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
export const LineChart = forwardRef<SVGSVGElement, CartesianChartProps<unknown>>(
  (props: CartesianChartProps<unknown>, ref) => {
    return (
      <CartesianChart
        chartName="LineChart"
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
