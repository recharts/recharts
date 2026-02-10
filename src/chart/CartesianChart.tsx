import * as React from 'react';
import { forwardRef } from 'react';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { ReportMainChartProps } from '../state/ReportMainChartProps';
import { ReportChartProps } from '../state/ReportChartProps';
import { ReportEventSettings } from '../state/ReportEventSettings';
import { CartesianChartProps, Margin, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
import { CategoricalChart } from './CategoricalChart';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { initialEventSettingsState } from '../state/eventSettingsSlice';

const defaultMargin: Margin = { top: 5, right: 5, bottom: 5, left: 5 };

export const defaultCartesianChartProps = {
  accessibilityLayer: true,
  barCategoryGap: '10%',
  barGap: 4,
  layout: 'horizontal',
  margin: defaultMargin,
  responsive: false,
  reverseStackOrder: false,
  stackOffset: 'none',
  syncMethod: 'index',
  ...initialEventSettingsState,
} as const satisfies Partial<CartesianChartProps>;

/**
 * These are one-time, immutable options that decide the chart's behavior.
 * Users who wish to call CartesianChart may decide to pass these options explicitly,
 * but usually we would expect that they use one of the convenience components like BarChart, LineChart, etc.
 */
export type CartesianChartOptions<DataPointType = unknown> = {
  chartName: string;
  defaultTooltipEventType: TooltipEventType;
  validateTooltipEventTypes: ReadonlyArray<TooltipEventType>;
  tooltipPayloadSearcher: TooltipPayloadSearcher;
  categoricalChartProps: CartesianChartProps<DataPointType>;
};

export const CartesianChart = forwardRef(function CartesianChart(
  props: CartesianChartOptions,
  ref,
) {
  const rootChartProps = resolveDefaultProps(props.categoricalChartProps, defaultCartesianChartProps);

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
      <ReportMainChartProps layout={rootChartProps.layout} margin={rootChartProps.margin} />
      <ReportEventSettings
        throttleDelay={rootChartProps.throttleDelay}
        throttledEvents={rootChartProps.throttledEvents}
      />
      <ReportChartProps
        baseValue={rootChartProps.baseValue}
        accessibilityLayer={rootChartProps.accessibilityLayer}
        barCategoryGap={rootChartProps.barCategoryGap}
        maxBarSize={rootChartProps.maxBarSize}
        stackOffset={rootChartProps.stackOffset}
        barGap={rootChartProps.barGap}
        barSize={rootChartProps.barSize}
        syncId={rootChartProps.syncId}
        syncMethod={rootChartProps.syncMethod}
        className={rootChartProps.className}
        reverseStackOrder={rootChartProps.reverseStackOrder}
      />
      <CategoricalChart {...rootChartProps} ref={ref as any} />
    </RechartsStoreProvider>
  );
}) as <DataPointType = unknown>(
  props: CartesianChartOptions<DataPointType> & { ref?: React.Ref<SVGSVGElement> },
) => React.ReactElement;
