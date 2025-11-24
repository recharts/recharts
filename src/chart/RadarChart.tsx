import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { PolarChartProps, TooltipEventType } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { defaultPolarChartProps, PolarChart } from './PolarChart';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis'];

export const defaultRadarChartProps = {
  ...defaultPolarChartProps,
  layout: 'centric',
  startAngle: 90,
  endAngle: -270,
} as const satisfies Partial<PolarChartProps>;

export const RadarChart = forwardRef<SVGSVGElement, PolarChartProps>((props: PolarChartProps, ref) => {
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
