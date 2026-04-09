import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { PolarChartProps, PolarLayout, TooltipEventType } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { defaultPolarChartProps, PolarChart } from './PolarChart';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['item'];

export const defaultPolarScatterChartProps = {
  ...defaultPolarChartProps,
  layout: 'centric',
  startAngle: 0,
  endAngle: 360,
} as const satisfies Partial<PolarChartProps<never>>;

type PolarScatterChartProps<DataPointType> = Omit<
  PolarChartProps<DataPointType>,
  'layout' | 'startAngle' | 'endAngle'
> & {
  /**
   * The layout of chart defines the orientation of axes and how `type="auto"` is resolved on polar axes.
   *
   * @defaultValue centric
   */
  layout?: PolarLayout;
  /**
   * Angle in degrees from which the chart should start.
   * @defaultValue 0
   */
  startAngle?: number;
  /**
   * Angle, in degrees, at which the chart should end.
   * @defaultValue 360
   */
  endAngle?: number;
};

/**
 * @consumes ResponsiveContainerContext
 * @provides PolarViewBoxContext
 * @provides PolarChartContext
 */
export const PolarScatterChart = forwardRef<SVGSVGElement, PolarScatterChartProps<unknown>>(
  (props: PolarScatterChartProps<unknown>, ref) => {
    const propsWithDefaults = resolveDefaultProps(props, defaultPolarScatterChartProps);
    return (
      <PolarChart
        chartName="PolarScatterChart"
        defaultTooltipEventType="item"
        validateTooltipEventTypes={allowedTooltipTypes}
        tooltipPayloadSearcher={arrayTooltipSearcher}
        categoricalChartProps={propsWithDefaults}
        ref={ref}
      />
    );
  },
) as <DataPointType = any>(
  props: PolarChartProps<DataPointType> & { ref?: React.Ref<SVGSVGElement> },
) => React.ReactElement;
