import * as React from 'react';
import { forwardRef } from 'react';
import { validateWidthHeight } from '../util/ReactUtils';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { ReportMainChartProps } from '../state/ReportMainChartProps';
import { ReportChartProps } from '../state/ReportChartProps';
import { CategoricalChartProps, Margin, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
import { CategoricalChart } from './CategoricalChart';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

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
} as const satisfies Partial<CategoricalChartProps>;

export type CartesianChartProps = {
  chartName: string;
  defaultTooltipEventType: TooltipEventType;
  validateTooltipEventTypes: ReadonlyArray<TooltipEventType>;
  tooltipPayloadSearcher: TooltipPayloadSearcher;
  categoricalChartProps: CategoricalChartProps;
};

export const CartesianChart = forwardRef<SVGSVGElement, CartesianChartProps>(function CartesianChart(
  props: CartesianChartProps,
  ref,
) {
  const rootChartProps = resolveDefaultProps(props.categoricalChartProps, defaultProps);

  const { width, height } = rootChartProps;

  if (!validateWidthHeight({ width, height })) {
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
      <CategoricalChart {...rootChartProps} ref={ref} />
    </RechartsStoreProvider>
  );
});
