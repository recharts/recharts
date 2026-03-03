import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { PolarChartProps, PolarLayout, TooltipEventType } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { defaultPolarChartProps, PolarChart } from './PolarChart';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis'];

export const defaultRadarChartProps = {
  ...defaultPolarChartProps,
  layout: 'centric',
  startAngle: 90,
  endAngle: -270,
} as const satisfies Partial<PolarChartProps<never>>;

type RadarChartProps<DataPointType> = Omit<PolarChartProps<DataPointType>, 'layout' | 'startAngle' | 'endAngle'> & {
  /**
   * The layout of chart defines the orientation of axes, graphical items, and tooltip.
   *
   * @defaultValue centric
   */
  layout?: PolarLayout;
  /**
   * Angle in degrees from which the chart should start.
   * @defaultValue 90
   *
   */
  startAngle?: number;
  /**
   * Angle, in degrees, at which the chart should end.
   *
   * @defaultValue -270
   */
  endAngle?: number;
};

/**
 * @consumes ResponsiveContainerContext
 * @provides PolarViewBoxContext
 * @provides PolarChartContext
 */
export const RadarChart = forwardRef<SVGSVGElement, RadarChartProps<unknown>>(
  (props: RadarChartProps<unknown>, ref) => {
    const propsWithDefaults = resolveDefaultProps(props, defaultRadarChartProps);
    return (
      <PolarChart
        chartName="RadarChart"
        defaultTooltipEventType="axis"
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
