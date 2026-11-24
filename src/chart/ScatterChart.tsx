import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { CartesianChart } from './CartesianChart';
import { crossCursor, CursorShapeContext } from '../util/cursor/cursorShapes';
import { CartesianChartProps, TooltipEventType } from '../util/types';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['item'];

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 * @public
 */
export const ScatterChart = forwardRef<SVGSVGElement, CartesianChartProps<unknown>>(
  (props: CartesianChartProps<unknown>, ref) => {
    return (
      <CursorShapeContext.Provider value={crossCursor}>
        <CartesianChart
          chartName="ScatterChart"
          defaultTooltipEventType="item"
          validateTooltipEventTypes={allowedTooltipTypes}
          tooltipPayloadSearcher={arrayTooltipSearcher}
          categoricalChartProps={props}
          ref={ref}
        />
      </CursorShapeContext.Provider>
    );
  },
) as <DataPointType = any>(
  props: CartesianChartProps<DataPointType> & { ref?: React.Ref<SVGSVGElement> },
) => React.ReactElement;
