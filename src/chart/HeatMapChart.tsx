import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { CartesianChart } from './CartesianChart';
import { CartesianChartProps, TooltipEventType } from '../util/types';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['item'];

type HeatMapChartComponent = <DataPointType = unknown>(
  props: CartesianChartProps<DataPointType> & { ref?: React.Ref<SVGSVGElement> },
) => React.ReactNode;

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
export const HeatMapChart: HeatMapChartComponent = forwardRef<SVGSVGElement, CartesianChartProps<unknown>>(
  (props: CartesianChartProps<unknown>, ref) => {
    return (
      <CartesianChart
        chartName="HeatMapChart"
        defaultTooltipEventType="item"
        validateTooltipEventTypes={allowedTooltipTypes}
        tooltipPayloadSearcher={arrayTooltipSearcher}
        categoricalChartProps={props}
        ref={ref}
      />
    );
  },
);
