import { forwardRef } from 'react';
import * as React from 'react';
import { filterProps, validateWidthHeight } from '../util/ReactUtils';
import { ChartOptions } from '../state/optionsSlice';
import { PolarChartOptions } from '../state/polarOptionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { ReportMainChartProps } from '../state/ReportMainChartProps';
import { ReportChartProps } from '../state/ReportChartProps';
import { ReportPolarOptions } from '../state/ReportPolarOptions';
import { CategoricalChartProps } from './generateCategoricalChart';
import { Margin, TooltipEventType } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
import { RootSurface } from '../container/RootSurface';
import { RechartsWrapper } from './RechartsWrapper';
import { ClipPathProvider } from '../container/ClipPathProvider';

const defaultMargin: Margin = { top: 5, right: 5, bottom: 5, left: 5 };

const defaultProps: Partial<CategoricalChartProps> = {
  accessibilityLayer: true,
  layout: 'horizontal',
  stackOffset: 'none',
  barCategoryGap: '10%',
  barGap: 4,
  margin: defaultMargin,
  reverseStackOrder: false,
  syncMethod: 'index',
};

const CategoricalChart = forwardRef<SVGSVGElement, CategoricalChartProps>((props: CategoricalChartProps, ref) => {
  const { children, className, width, height, style, compact, title, desc, ...others } = props;
  const attrs = filterProps(others, false);

  // The "compact" mode is used as the panorama within Brush
  if (compact) {
    return (
      <RootSurface otherAttributes={attrs} title={title} desc={desc}>
        {children}
      </RootSurface>
    );
  }

  return (
    <RechartsWrapper
      className={className}
      style={style}
      width={width}
      height={height}
      onClick={props.onClick}
      onMouseLeave={props.onMouseLeave}
      onMouseEnter={props.onMouseEnter}
      onMouseMove={props.onMouseMove}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onContextMenu={props.onContextMenu}
      onDoubleClick={props.onDoubleClick}
      onTouchStart={props.onTouchStart}
      onTouchMove={props.onTouchMove}
      onTouchEnd={props.onTouchEnd}
    >
      <RootSurface otherAttributes={attrs} title={title} desc={desc} ref={ref}>
        <ClipPathProvider>{children}</ClipPathProvider>
      </RootSurface>
    </RechartsWrapper>
  );
});

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
  if (!validateWidthHeight({ width: props.categoricalChartProps.width, height: props.categoricalChartProps.height })) {
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
  let polarOptions: PolarChartOptions;
  const { innerRadius = defaultProps.innerRadius, outerRadius = defaultProps.outerRadius } = categoricalChartProps;
  if (defaultProps.startAngle != null) {
    polarOptions = {
      cx: categoricalChartProps.cx,
      cy: categoricalChartProps.cy,
      startAngle: defaultProps.startAngle,
      endAngle: defaultProps.endAngle,
      innerRadius,
      outerRadius,
    };
  }
  return (
    <RechartsStoreProvider
      preloadedState={{ options, polarOptions }}
      reduxStoreName={categoricalChartProps.id ?? chartName}
    >
      <ChartDataContextProvider chartData={categoricalChartProps.data} />
      <ReportMainChartProps
        width={categoricalChartProps.width}
        height={categoricalChartProps.height}
        layout={categoricalChartProps.layout ?? defaultProps.layout}
        margin={categoricalChartProps.margin ?? defaultMargin}
      />
      <ReportChartProps
        accessibilityLayer={categoricalChartProps.accessibilityLayer ?? true}
        barCategoryGap={categoricalChartProps.barCategoryGap ?? '10%'}
        maxBarSize={categoricalChartProps.maxBarSize}
        stackOffset={categoricalChartProps.stackOffset ?? 'none'}
        barGap={categoricalChartProps.barGap}
        barSize={categoricalChartProps.barSize}
        syncId={categoricalChartProps.syncId}
        syncMethod={categoricalChartProps.syncMethod ?? 'index'}
        className={categoricalChartProps.className}
      />
      <ReportPolarOptions
        cx={categoricalChartProps.cx}
        cy={categoricalChartProps.cy}
        startAngle={categoricalChartProps.startAngle ?? defaultProps.startAngle}
        endAngle={categoricalChartProps.endAngle ?? defaultProps.endAngle}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
      />
      <CategoricalChart {...categoricalChartProps} ref={ref} />
    </RechartsStoreProvider>
  );
});
