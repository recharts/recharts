import * as React from 'react';
import { Component, forwardRef } from 'react';

import { filterProps, validateWidthHeight } from '../util/ReactUtils';
import { CategoricalChartOptions, DataKey, LayoutType, Margin, StackOffsetType } from '../util/types';
import { ExternalMouseEvents } from './types';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { RechartsWrapper } from './RechartsWrapper';
import { ReportChartProps } from '../state/ReportChartProps';
import { PolarChartOptions } from '../state/polarOptionsSlice';
import { ReportPolarOptions } from '../state/ReportPolarOptions';
import { SyncMethod } from '../synchronisation/types';
import { ReportMainChartProps } from '../state/ReportMainChartProps';
import { ClipPathProvider } from '../container/ClipPathProvider';
import { RootSurface } from '../container/RootSurface';

/**
 * Simplified version of the MouseEvent so that we don't have to mock the whole thing in tests.
 *
 * This is meant to represent the React.MouseEvent
 * which is a wrapper on top of https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
 */
export interface MousePointer {
  clientX: number;
  clientY: number;
  currentTarget: Pick<HTMLElement, 'getBoundingClientRect' | 'offsetWidth' | 'offsetHeight'>;
}

/**
 * Coordinates relative to the top-left corner of the chart.
 * Also include scale which means that a chart that's scaled will return the same coordinates as a chart that's not scaled.
 */
export interface ChartPointer {
  chartX: number;
  chartY: number;
}

export interface CategoricalChartProps extends Partial<ExternalMouseEvents> {
  accessibilityLayer?: boolean;
  barCategoryGap?: number | string;
  barGap?: number | string;
  barSize?: number | string;
  children?: any;
  className?: string;
  compact?: boolean;
  cx?: number | string;
  cy?: number | string;
  data?: any[];
  dataKey?: DataKey<any>;
  desc?: string;
  endAngle?: number;
  height?: number;
  id?: string;
  innerRadius?: number | string;
  layout?: LayoutType;
  margin?: Margin;
  maxBarSize?: number;
  outerRadius?: number | string;
  reverseStackOrder?: boolean;
  role?: string;
  stackOffset?: StackOffsetType;
  startAngle?: number;
  style?: any;
  syncId?: number | string;
  syncMethod?: SyncMethod;
  tabIndex?: number;
  throttleDelay?: number;
  title?: string;
  width?: number;
}

const defaultMargin: Margin = { top: 5, right: 5, bottom: 5, left: 5 };

const defaultLayout: LayoutType = 'horizontal';

export const generateCategoricalChart = ({
  chartName,
  defaultTooltipEventType = 'axis',
  validateTooltipEventTypes = ['axis'],
  defaultProps = {},
  tooltipPayloadSearcher,
}: CategoricalChartOptions) => {
  // Refactor this to a functional component is coming next PR
  // eslint-disable-next-line react/prefer-stateless-function
  class CategoricalChartWrapper extends Component<CategoricalChartProps> {
    static displayName = chartName;

    static defaultProps: CategoricalChartProps = {
      accessibilityLayer: true,
      layout: defaultLayout,
      stackOffset: 'none',
      barCategoryGap: '10%',
      barGap: 4,
      margin: defaultMargin,
      reverseStackOrder: false,
      syncMethod: 'index',
      ...defaultProps,
    };

    render() {
      const { children, className, width, height, style, compact, title, desc, ...others } = this.props;
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
          onClick={this.props.onClick}
          onMouseLeave={this.props.onMouseLeave}
          onMouseEnter={this.props.onMouseEnter}
          onMouseMove={this.props.onMouseMove}
          onMouseDown={this.props.onMouseDown}
          onMouseUp={this.props.onMouseUp}
          onContextMenu={this.props.onContextMenu}
          onDoubleClick={this.props.onDoubleClick}
          onTouchStart={this.props.onTouchStart}
          onTouchMove={this.props.onTouchMove}
          onTouchEnd={this.props.onTouchEnd}
        >
          <RootSurface otherAttributes={attrs} title={title} desc={desc}>
            <ClipPathProvider>{children}</ClipPathProvider>
          </RootSurface>
        </RechartsWrapper>
      );
    }
  }

  const CategoricalChart = forwardRef<CategoricalChartWrapper, CategoricalChartProps>(function CategoricalChart(
    props: CategoricalChartProps,
    ref,
  ) {
    if (!validateWidthHeight({ width: props.width, height: props.height })) {
      return null;
    }

    const options: ChartOptions = {
      chartName,
      defaultTooltipEventType,
      validateTooltipEventTypes,
      tooltipPayloadSearcher,
      eventEmitter: undefined,
    };
    let polarOptions: PolarChartOptions;
    const { innerRadius = defaultProps.innerRadius, outerRadius = defaultProps.outerRadius } = props;
    if (defaultProps.startAngle != null) {
      polarOptions = {
        cx: props.cx,
        cy: props.cy,
        startAngle: defaultProps.startAngle,
        endAngle: defaultProps.endAngle,
        innerRadius,
        outerRadius,
      };
    }
    return (
      <RechartsStoreProvider preloadedState={{ options, polarOptions }} reduxStoreName={props.id ?? chartName}>
        <ChartDataContextProvider chartData={props.data} />
        <ReportMainChartProps
          width={props.width}
          height={props.height}
          layout={props.layout ?? defaultProps.layout ?? defaultLayout}
          margin={props.margin ?? defaultMargin}
        />
        <ReportChartProps
          accessibilityLayer={props.accessibilityLayer ?? true}
          barCategoryGap={props.barCategoryGap ?? '10%'}
          maxBarSize={props.maxBarSize}
          stackOffset={props.stackOffset ?? 'none'}
          barGap={props.barGap}
          barSize={props.barSize}
          syncId={props.syncId}
          syncMethod={props.syncMethod ?? 'index'}
          className={props.className}
        />
        <ReportPolarOptions
          cx={props.cx}
          cy={props.cy}
          startAngle={props.startAngle ?? defaultProps.startAngle}
          endAngle={props.endAngle ?? defaultProps.endAngle}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        />
        <CategoricalChartWrapper {...props} ref={ref} />
      </RechartsStoreProvider>
    );
  });

  // in recharts 2.x the returned component has the displayName of the chart itself
  // set that here so it isn't lost (until we know we don't need it anymore)
  CategoricalChart.displayName = CategoricalChartWrapper.displayName;

  return CategoricalChart;
};
