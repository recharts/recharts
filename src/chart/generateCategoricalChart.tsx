import * as React from 'react';
import { Component, forwardRef } from 'react';
import { LegendPortalContext } from '../context/legendPortalContext';
import { Surface } from '../container/Surface';

import { filterProps, validateWidthHeight } from '../util/ReactUtils';
import { uniqueId } from '../util/DataUtils';
import { CategoricalChartOptions, DataKey, LayoutType, Margin, StackOffsetType } from '../util/types';
import { ChartLayoutContextProvider } from '../context/chartLayoutContext';
import { CategoricalChartState, ExternalMouseEvents } from './types';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { ClipPath } from '../container/ClipPath';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import { ReportChartProps } from '../state/ReportChartProps';
import { PolarChartOptions } from '../state/polarOptionsSlice';
import { ReportPolarOptions } from '../state/ReportPolarOptions';
import { SyncMethod } from '../synchronisation/types';
import { ReportMainChartProps } from '../state/ReportMainChartProps';

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

const FULL_WIDTH_AND_HEIGHT = { width: '100%', height: '100%' };

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
  class CategoricalChartWrapper extends Component<CategoricalChartProps, CategoricalChartState> {
    static displayName = chartName;

    clipPathId: string;

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

    constructor(props: CategoricalChartProps) {
      super(props);

      this.clipPathId = `${props.id ?? uniqueId('recharts')}-clip`;

      this.state = {};
    }

    render() {
      if (!validateWidthHeight({ width: this.props.width, height: this.props.height })) {
        return null;
      }

      const { children, className, width, height, style, compact, title, desc, ...others } = this.props;
      const attrs = filterProps(others, false);

      // The "compact" mode is mainly used as the panorama within Brush
      if (compact) {
        return (
          <ChartLayoutContextProvider clipPathId={this.clipPathId}>
            <Surface {...attrs} width={width} height={height} title={title} desc={desc}>
              <ClipPath clipPathId={this.clipPathId} />
              {children}
            </Surface>
          </ChartLayoutContextProvider>
        );
      }

      if (this.props.accessibilityLayer) {
        // Set tabIndex to 0 by default (can be overwritten)
        attrs.tabIndex = this.props.tabIndex ?? 0;
        // Set role to application by default (can be overwritten)
        attrs.role = this.props.role ?? 'application';
      }

      return (
        <>
          <ChartDataContextProvider chartData={this.props.data} />
          <TooltipPortalContext.Provider value={this.state.tooltipPortal}>
            <LegendPortalContext.Provider value={this.state.legendPortal}>
              <ChartLayoutContextProvider clipPathId={this.clipPathId}>
                <RechartsWrapper
                  className={className}
                  style={style}
                  width={width}
                  height={height}
                  ref={(node: HTMLDivElement) => {
                    if (this.state.tooltipPortal == null) {
                      this.setState({ tooltipPortal: node });
                    }
                    if (this.state.legendPortal == null) {
                      this.setState({ legendPortal: node });
                    }
                  }}
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
                  <Surface
                    {...attrs}
                    width={width}
                    height={height}
                    title={title}
                    desc={desc}
                    style={FULL_WIDTH_AND_HEIGHT}
                  >
                    <ClipPath clipPathId={this.clipPathId} />
                    {children}
                  </Surface>
                </RechartsWrapper>
              </ChartLayoutContextProvider>
            </LegendPortalContext.Provider>
          </TooltipPortalContext.Provider>
        </>
      );
    }
  }

  const CategoricalChart = forwardRef<CategoricalChartWrapper, CategoricalChartProps>(function CategoricalChart(
    props: CategoricalChartProps,
    ref,
  ) {
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
        <ReportMainChartProps
          width={props.width}
          height={props.height}
          layout={props.layout ?? defaultProps.layout ?? defaultLayout}
          margin={props.margin ?? defaultMargin}
        />
        <ReportChartProps
          accessibilityLayer={props.accessibilityLayer}
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
