import { forwardRef } from 'react';
import * as React from 'react';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { ReportMainChartProps } from '../state/ReportMainChartProps';
import { ReportChartProps } from '../state/ReportChartProps';
import { ReportPolarOptions } from '../state/ReportPolarOptions';
import { Margin, PolarChartProps, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
import { CategoricalChart } from './CategoricalChart';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { isPositiveNumber } from '../util/isWellBehavedNumber';

const defaultMargin: Margin = { top: 5, right: 5, bottom: 5, left: 5 };

const defaultProps = {
  accessibilityLayer: true,
  stackOffset: 'none',
  barCategoryGap: '10%',
  barGap: 4,
  margin: defaultMargin,
  reverseStackOrder: false,
  syncMethod: 'index',
  layout: 'radial',
} as const satisfies Partial<PolarChartProps>;

/**
 * These are one-time, immutable options that decide the chart's behavior.
 * Users who wish to call CartesianChart may decide to pass these options explicitly,
 * but usually we would expect that they use one of the convenience components like PieChart, RadarChart, etc.
 */
export type PolarChartOptions = {
  chartName: string;
  defaultTooltipEventType: TooltipEventType;
  validateTooltipEventTypes: ReadonlyArray<TooltipEventType>;
  tooltipPayloadSearcher: TooltipPayloadSearcher;
  categoricalChartProps: PolarChartProps;
};

export const PolarChart = forwardRef<SVGSVGElement, PolarChartOptions>(function PolarChart(
  props: PolarChartOptions,
  ref,
) {
  const polarChartProps = resolveDefaultProps(props.categoricalChartProps, defaultProps);

  const { width, height } = polarChartProps;

  if (!isPositiveNumber(width) || !isPositiveNumber(height)) {
    return null;
  }

  const { chartName, defaultTooltipEventType, validateTooltipEventTypes, tooltipPayloadSearcher } = props;

  const options: ChartOptions = {
    chartName,
    defaultTooltipEventType,
    validateTooltipEventTypes,
    tooltipPayloadSearcher,
    eventEmitter: undefined,
  };

  return (
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={polarChartProps.id ?? chartName}>
      <ChartDataContextProvider chartData={polarChartProps.data} />
      <ReportMainChartProps
        width={width}
        height={height}
        layout={polarChartProps.layout}
        margin={polarChartProps.margin}
      />
      <ReportChartProps
        accessibilityLayer={polarChartProps.accessibilityLayer}
        barCategoryGap={polarChartProps.barCategoryGap}
        maxBarSize={polarChartProps.maxBarSize}
        stackOffset={polarChartProps.stackOffset}
        barGap={polarChartProps.barGap}
        barSize={polarChartProps.barSize}
        syncId={polarChartProps.syncId}
        syncMethod={polarChartProps.syncMethod}
        className={polarChartProps.className}
      />
      <ReportPolarOptions
        cx={polarChartProps.cx}
        cy={polarChartProps.cy}
        startAngle={polarChartProps.startAngle}
        endAngle={polarChartProps.endAngle}
        innerRadius={polarChartProps.innerRadius}
        outerRadius={polarChartProps.outerRadius}
      />
      <CategoricalChart {...polarChartProps} ref={ref} />
    </RechartsStoreProvider>
  );
});
