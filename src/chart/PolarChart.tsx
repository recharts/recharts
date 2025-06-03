import { forwardRef } from 'react';
import * as React from 'react';
import { validateWidthHeight } from '../util/ReactUtils';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { ReportMainChartProps } from '../state/ReportMainChartProps';
import { ReportChartProps } from '../state/ReportChartProps';
import { ReportPolarOptions } from '../state/ReportPolarOptions';
import { CategoricalChartProps, Margin, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
import { CategoricalChart } from './CategoricalChart';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

const defaultMargin: Margin = { top: 5, right: 5, bottom: 5, left: 5 };

const defaultProps = {
  accessibilityLayer: true,
  stackOffset: 'none',
  barCategoryGap: '10%',
  barGap: 4,
  margin: defaultMargin,
  reverseStackOrder: false,
  syncMethod: 'index',
} as const satisfies Partial<CategoricalChartProps>;

export type PolarChartProps = {
  chartName: string;
  defaultTooltipEventType: TooltipEventType;
  validateTooltipEventTypes: ReadonlyArray<TooltipEventType>;
  tooltipPayloadSearcher: TooltipPayloadSearcher;
  categoricalChartProps: CategoricalChartProps;
};

export const PolarChart = forwardRef<SVGSVGElement, PolarChartProps>(function PolarChart(props: PolarChartProps, ref) {
  const rootChartProps = resolveDefaultProps(props.categoricalChartProps, defaultProps);

  const { width, height } = rootChartProps;

  if (!validateWidthHeight({ width, height })) {
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
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={rootChartProps.id ?? chartName}>
      <ChartDataContextProvider chartData={rootChartProps.data} />
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
      <ReportPolarOptions
        cx={rootChartProps.cx}
        cy={rootChartProps.cy}
        startAngle={rootChartProps.startAngle}
        endAngle={rootChartProps.endAngle}
        innerRadius={rootChartProps.innerRadius}
        outerRadius={rootChartProps.outerRadius}
      />
      <CategoricalChart {...rootChartProps} ref={ref} />
    </RechartsStoreProvider>
  );
});
