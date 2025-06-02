import * as React from 'react';
import { forwardRef } from 'react';
import { CategoricalChartProps } from './generateCategoricalChart';
import { arrayTooltipSearcher } from '../state/optionsSlice';
import { TooltipEventType } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { PolarChart } from './PolarChart';

const allowedTooltipTypes: ReadonlyArray<TooltipEventType> = ['axis'];

const defaultProps = {
  layout: 'centric',
  startAngle: 90,
  endAngle: -270,
  cx: '50%',
  cy: '50%',
  innerRadius: 0,
  outerRadius: '80%',
} as const satisfies Partial<CategoricalChartProps>;

export const RadarChart = forwardRef<SVGSVGElement, CategoricalChartProps>((props: CategoricalChartProps, ref) => {
  const propsWithDefaults = resolveDefaultProps(props, defaultProps);
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
