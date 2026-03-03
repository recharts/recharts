import * as React from 'react';
import { forwardRef } from 'react';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { defaultPolarChartProps, PolarChart } from './PolarChart';
import { PolarChartProps, TooltipEventType } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['item'];

export const defaultPieChartProps = {
  ...defaultPolarChartProps,
  layout: 'centric',
  startAngle: 0,
  endAngle: 360,
} as const satisfies Partial<PolarChartProps<never>>;

/**
 * @consumes ResponsiveContainerContext
 * @provides PolarViewBoxContext
 * @provides PolarChartContext
 */
export const PieChart = forwardRef<SVGSVGElement, PolarChartProps<unknown>>((props: PolarChartProps<unknown>, ref) => {
  const propsWithDefaults = resolveDefaultProps(props, defaultPieChartProps);
  return (
    <PolarChart
      chartName="PieChart"
      defaultTooltipEventType="item"
      validateTooltipEventTypes={allowedTooltipTypes}
      tooltipPayloadSearcher={arrayTooltipSearcher}
      categoricalChartProps={propsWithDefaults}
      ref={ref}
    />
  );
}) as <DataPointType = any>(
  props: PolarChartProps<DataPointType> & { ref?: React.Ref<SVGSVGElement> },
) => React.ReactElement;
