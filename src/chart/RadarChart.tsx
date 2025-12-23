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
} as const satisfies Partial<PolarChartProps>;

type RadarChartProps = Omit<PolarChartProps, 'layout' | 'startAngle' | 'endAngle'> & {
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
 * @provides PolarViewBoxContext
 * @provides PolarChartContext
 */
export const RadarChart = forwardRef<SVGSVGElement, RadarChartProps>((props: RadarChartProps, ref) => {
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
});
