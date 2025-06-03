import * as React from 'react';
import { forwardRef } from 'react';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { ReportMainChartProps } from '../state/ReportMainChartProps';
import { ReportChartProps } from '../state/ReportChartProps';
import { CartesianChartProps, Margin, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
import { CategoricalChart } from './CategoricalChart';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { isPositiveNumber } from '../util/isWellBehavedNumber';

const defaultMargin: Margin = { top: 5, right: 5, bottom: 5, left: 5 };

const defaultProps = {
  accessibilityLayer: true,
  layout: 'horizontal',
  stackOffset: 'none',
  barCategoryGap: '10%',
  barGap: 4,
  margin: defaultMargin,
  reverseStackOrder: false,
  syncMethod: 'index',
} as const satisfies Partial<CartesianChartProps>;

/**
 * These are one-time, immutable options that decide the chart's behavior.
 * Users who wish to call CartesianChart may decide to pass these options explicitly,
 * but usually we would expect that they use one of the convenience components like BarChart, LineChart, etc.
 */
export type CartesianChartOptions = {
  chartName: string;
  defaultTooltipEventType: TooltipEventType;
  validateTooltipEventTypes: ReadonlyArray<TooltipEventType>;
  tooltipPayloadSearcher: TooltipPayloadSearcher;
  categoricalChartProps: CartesianChartProps;
};

export const CartesianChart = forwardRef<SVGSVGElement, CartesianChartOptions>(function CartesianChart(
  props: CartesianChartOptions,
  ref,
) {
  const rootChartProps = resolveDefaultProps(props.categoricalChartProps, defaultProps);

  const { width, height, ...otherCategoricalProps } = rootChartProps;

  if (!isPositiveNumber(width) || !isPositiveNumber(height)) {
    return null;
  }

  const {
    chartName,
    defaultTooltipEventType,
    validateTooltipEventTypes,
    tooltipPayloadSearcher,
    categoricalChartProps,
  } = props;

  const options: ChartOptions = {
    chartName,
    defaultTooltipEventType,
    validateTooltipEventTypes,
    tooltipPayloadSearcher,
    eventEmitter: undefined,
  };

  return (
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={categoricalChartProps.id ?? chartName}>
      <ChartDataContextProvider chartData={categoricalChartProps.data} />
      <ReportMainChartProps
        width={width}
        height={height}
        layout={rootChartProps.layout}
        margin={rootChartProps.margin}
      />
      <ReportChartProps
        accessibilityLayer={rootChartProps.accessibilityLayer}
        barCategoryGap={rootChartProps.barCategoryGap}
        maxBarSize={rootChartProps.maxBarSize}
        stackOffset={rootChartProps.stackOffset}
        barGap={rootChartProps.barGap}
        barSize={rootChartProps.barSize}
        syncId={rootChartProps.syncId}
        syncMethod={rootChartProps.syncMethod}
        className={rootChartProps.className}
      />
      <CategoricalChart {...otherCategoricalProps} width={width} height={height} ref={ref} />
    </RechartsStoreProvider>
  );
});
