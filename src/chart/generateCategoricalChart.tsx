import React, { Component, forwardRef } from 'react';
import get from 'lodash/get';
import { LegendPortalContext } from '../context/legendPortalContext';
import { Surface } from '../container/Surface';

import {
  filterProps,
  findChildByType,
  getReactEventByType,
  isChildrenEqual,
  validateWidthHeight,
} from '../util/ReactUtils';

import { Brush } from '../cartesian/Brush';
import { isNullish, uniqueId } from '../util/DataUtils';
import { shallowEqual } from '../util/ShallowEqual';
import { eventCenter, GENERATOR_SYNC_EVENT } from '../util/Events';
import {
  adaptEventHandlers,
  CategoricalChartOptions,
  DataKey,
  LayoutType,
  Margin,
  StackOffsetType,
} from '../util/types';
import { ChartLayoutContextProvider } from '../context/chartLayoutContext';
import { CategoricalChartState } from './types';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { BrushStartEndIndex, BrushUpdateDispatchContext } from '../context/brushUpdateContext';
import { ClipPath } from '../container/ClipPath';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { CursorPortalContext, TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import { ReportChartProps } from '../state/ReportChartProps';
import { PolarChartOptions } from '../state/polarOptionsSlice';
import { ReportPolarOptions } from '../state/ReportPolarOptions';
import { SyncMethod } from '../synchronisation/types';

export interface MousePointer {
  pageX: number;
  pageY: number;
}

export interface ChartPointer {
  chartX: number;
  chartY: number;
}

const FULL_WIDTH_AND_HEIGHT = { width: '100%', height: '100%' };

/**
 * Returns default, reset state for the categorical chart.
 * @param {Object} props Props object to use when creating the default state
 * @return {Object} Whole new state
 */
export const createDefaultState = (props: CategoricalChartProps): CategoricalChartState => {
  const { children } = props;
  const brushItem = findChildByType(children, Brush);
  let startIndex = 0;
  let endIndex = 0;
  if (props.data && props.data.length !== 0) {
    endIndex = props.data.length - 1;
  }

  if (brushItem && brushItem.props) {
    if (brushItem.props.startIndex >= 0) {
      startIndex = brushItem.props.startIndex;
    }
    if (brushItem.props.endIndex >= 0) {
      endIndex = brushItem.props.endIndex;
    }
  }

  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
  };
};

export type CategoricalChartFunc = (nextState: CategoricalChartState, event: any) => void;

export interface CategoricalChartProps {
  syncId?: number | string;
  syncMethod?: SyncMethod;
  compact?: boolean;
  width?: number;
  height?: number;
  dataKey?: DataKey<any>;
  data?: any[];
  layout?: LayoutType;
  stackOffset?: StackOffsetType;
  throttleDelay?: number;
  margin?: Margin;
  barCategoryGap?: number | string;
  barGap?: number | string;
  barSize?: number | string;
  maxBarSize?: number;
  style?: any;
  className?: string;
  children?: any;
  onClick?: CategoricalChartFunc;
  onMouseLeave?: CategoricalChartFunc;
  onMouseEnter?: CategoricalChartFunc;
  onMouseMove?: CategoricalChartFunc;
  onMouseDown?: CategoricalChartFunc;
  onMouseUp?: CategoricalChartFunc;
  onContextMenu?: CategoricalChartFunc;
  onDoubleClick?: CategoricalChartFunc;
  reverseStackOrder?: boolean;
  id?: string;

  startAngle?: number;
  endAngle?: number;
  cx?: number | string;
  cy?: number | string;
  innerRadius?: number | string;
  outerRadius?: number | string;
  title?: string;
  desc?: string;
  accessibilityLayer?: boolean;
  role?: string;
  tabIndex?: number;
}

export const generateCategoricalChart = ({
  chartName,
  defaultTooltipEventType = 'axis',
  validateTooltipEventTypes = ['axis'],
  defaultProps = {},
  tooltipPayloadSearcher,
}: CategoricalChartOptions) => {
  class CategoricalChartWrapper extends Component<CategoricalChartProps, CategoricalChartState> {
    static displayName = chartName;

    readonly eventEmitterSymbol = Symbol('rechartsEventEmitter');

    clipPathId: string;

    // todo join specific chart propTypes
    static defaultProps: CategoricalChartProps = {
      accessibilityLayer: true,
      layout: 'horizontal',
      stackOffset: 'none',
      barCategoryGap: '10%',
      barGap: 4,
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      reverseStackOrder: false,
      syncMethod: 'index',
      ...defaultProps,
    };

    container?: HTMLElement;

    constructor(props: CategoricalChartProps) {
      super(props);

      this.clipPathId = `${props.id ?? uniqueId('recharts')}-clip`;

      this.state = {};
    }

    componentDidMount() {
      this.addListener();
    }

    static getDerivedStateFromProps(
      nextProps: CategoricalChartProps,
      prevState: CategoricalChartState,
    ): CategoricalChartState {
      const { dataKey, data, children, width, height, layout, stackOffset, margin } = nextProps;
      const { dataStartIndex, dataEndIndex } = prevState;

      if (prevState.updateId === undefined) {
        const defaultState = createDefaultState(nextProps);
        return {
          ...defaultState,
          updateId: 0,
          ...{},

          prevDataKey: dataKey,
          prevData: data,
          prevWidth: width,
          prevHeight: height,
          prevLayout: layout,
          prevStackOffset: stackOffset,
          prevMargin: margin,
          prevChildren: children,
        };
      }
      if (
        dataKey !== prevState.prevDataKey ||
        data !== prevState.prevData ||
        width !== prevState.prevWidth ||
        height !== prevState.prevHeight ||
        layout !== prevState.prevLayout ||
        stackOffset !== prevState.prevStackOffset ||
        !shallowEqual(margin, prevState.prevMargin)
      ) {
        const defaultState = createDefaultState(nextProps);

        // Fixes https://github.com/recharts/recharts/issues/2143
        const keepFromPrevState = {
          // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
          // any flickering
          chartX: prevState.chartX,
          chartY: prevState.chartY,
        };

        const updatesToState = {
          // Update the current tooltip data (in case it changes without mouse interaction)
          updateId: prevState.updateId + 1,
        };

        const newState = {
          ...defaultState,
          ...keepFromPrevState,
          ...updatesToState,
        };

        return {
          ...newState,
          prevDataKey: dataKey,
          prevData: data,
          prevWidth: width,
          prevHeight: height,
          prevLayout: layout,
          prevStackOffset: stackOffset,
          prevMargin: margin,
          prevChildren: children,
        };
      }
      if (!isChildrenEqual(children, prevState.prevChildren)) {
        // specifically check for Brush - if it exists and the start and end indexes are different, re-render with the new ones
        const brush = findChildByType(children, Brush);

        const startIndex = brush ? (brush.props?.startIndex ?? dataStartIndex) : dataStartIndex;
        const endIndex = brush ? (brush.props?.endIndex ?? dataEndIndex) : dataEndIndex;
        const hasDifferentStartOrEndIndex = startIndex !== dataStartIndex || endIndex !== dataEndIndex;

        // update configuration in children
        const hasGlobalData = !isNullish(data);
        const newUpdateId = hasGlobalData && !hasDifferentStartOrEndIndex ? prevState.updateId : prevState.updateId + 1;

        return {
          updateId: newUpdateId,
          prevChildren: children,
          dataStartIndex: startIndex,
          dataEndIndex: endIndex,
        };
      }

      return null;
    }

    componentWillUnmount() {
      this.removeListener();
    }

    parseEventsOfWrapper() {
      // @ts-expect-error adaptEventHandlers expects DOM Event but generateCategoricalChart works with React UIEvents
      const outerEvents = adaptEventHandlers(this.props, this.handleOuterEvent);

      return {
        ...outerEvents,
      };
    }

    addListener() {
      eventCenter.on(GENERATOR_SYNC_EVENT, this.handleReceiveSyncEvent);
    }

    removeListener() {
      eventCenter.removeListener(GENERATOR_SYNC_EVENT, this.handleReceiveSyncEvent);
    }

    handleReceiveSyncEvent = (cId: number | string, data: CategoricalChartState, emitter: symbol) => {
      if (this.props.syncId === cId) {
        if (emitter === this.eventEmitterSymbol && typeof this.props.syncMethod !== 'function') {
          return;
        }

        this.applySyncEvent(data);
      }
    };

    handleBrushChange = ({ startIndex, endIndex }: BrushStartEndIndex) => {
      // Only trigger changes if the extents of the brush have actually changed
      if (startIndex !== this.state.dataStartIndex || endIndex !== this.state.dataEndIndex) {
        this.setState(() => ({
          dataStartIndex: startIndex,
          dataEndIndex: endIndex,
        }));

        this.triggerSyncEvent({
          dataStartIndex: startIndex,
          dataEndIndex: endIndex,
        });
      }
    };

    handleOuterEvent = (e: React.MouseEvent | React.TouchEvent) => {
      const eventName = getReactEventByType(e);

      const event = get(this.props, `${eventName}`);
      if (eventName && typeof event === 'function') {
        let mouse;
        if (/.*touch.*/i.test(eventName)) {
          mouse = null;
        } else {
          mouse = null;
        }

        event(mouse ?? {}, e);
      }
    };

    triggerSyncEvent = (data: CategoricalChartState) => {
      if (this.props.syncId !== undefined) {
        eventCenter.emit(GENERATOR_SYNC_EVENT, this.props.syncId, data, this.eventEmitterSymbol);
      }
    };

    applySyncEvent = (data: CategoricalChartState) => {
      const { dataStartIndex, dataEndIndex } = data;

      if (data.dataStartIndex !== undefined || data.dataEndIndex !== undefined) {
        this.setState({
          dataStartIndex,
          dataEndIndex,
          ...{},
        });
      }
    };

    render() {
      if (!validateWidthHeight({ width: this.props.width, height: this.props.height })) {
        return null;
      }

      const { children, className, width, height, style, compact, title, desc, ...others } = this.props;
      const attrs = filterProps(others, false);

      // The "compact" mode is mainly used as the panorama within Brush
      if (compact) {
        return (
          <ChartLayoutContextProvider
            state={this.state}
            width={this.props.width}
            height={this.props.height}
            clipPathId={this.clipPathId}
            margin={this.props.margin}
            layout={this.props.layout}
          >
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
        // Set role to img by default (can be overwritten)
        attrs.role = this.props.role ?? 'application';
      }

      const wrapperEvents = this.parseEventsOfWrapper();
      return (
        <>
          <ChartDataContextProvider chartData={this.props.data} />
          <CursorPortalContext.Provider value={this.state.cursorPortal}>
            <TooltipPortalContext.Provider value={this.state.tooltipPortal}>
              <LegendPortalContext.Provider value={this.state.legendPortal}>
                <BrushUpdateDispatchContext.Provider value={this.handleBrushChange}>
                  <ChartLayoutContextProvider
                    state={this.state}
                    width={this.props.width}
                    height={this.props.height}
                    clipPathId={this.clipPathId}
                    margin={this.props.margin}
                    layout={this.props.layout}
                  >
                    <RechartsWrapper
                      className={className}
                      style={style}
                      wrapperEvents={wrapperEvents}
                      width={width}
                      height={height}
                      ref={(node: HTMLDivElement) => {
                        this.container = node;
                        if (this.state.tooltipPortal == null) {
                          this.setState({ tooltipPortal: node });
                        }
                        if (this.state.legendPortal == null) {
                          this.setState({ legendPortal: node });
                        }
                      }}
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
                        <g
                          className="recharts-cursor-portal"
                          ref={(node: SVGElement) => {
                            if (this.state.cursorPortal == null) {
                              this.setState({ cursorPortal: node });
                            }
                          }}
                        />
                        {children}
                      </Surface>
                    </RechartsWrapper>
                  </ChartLayoutContextProvider>
                </BrushUpdateDispatchContext.Provider>
              </LegendPortalContext.Provider>
            </TooltipPortalContext.Provider>
          </CursorPortalContext.Provider>
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
