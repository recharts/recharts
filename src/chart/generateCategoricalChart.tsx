import React, { Component, forwardRef } from 'react';
import get from 'lodash/get';
import { LegendPortalContext } from '../context/legendPortalContext';
import { Surface } from '../container/Surface';
import { Tooltip } from '../component/Tooltip';

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
  TooltipEventType,
} from '../util/types';
import { ChartLayoutContextProvider } from '../context/chartLayoutContext';
import { CategoricalChartState, TooltipTrigger } from './types';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { BrushStartEndIndex, BrushUpdateDispatchContext } from '../context/brushUpdateContext';
import { ClipPath } from '../container/ClipPath';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { CursorPortalContext, TooltipPortalContext } from '../context/tooltipPortalContext';
import {
  ActivateTooltipAction,
  MouseClickItemDispatchContext,
  MouseEnterItemDispatchContext,
  MouseLeaveItemDispatchContext,
  TooltipPayloadType,
} from '../context/tooltipContext';
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
  const { children, defaultShowTooltip } = props;
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
    isTooltipActive: Boolean(defaultShowTooltip),
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
  defaultShowTooltip?: boolean;
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

      this.displayDefaultTooltip();
    }

    displayDefaultTooltip() {
      const { children } = this.props;

      const tooltipElem = findChildByType(children, Tooltip);
      // If the chart doesn't include a <Tooltip /> element, there's no tooltip to display
      if (!tooltipElem) {
        return;
      }

      const { defaultIndex } = tooltipElem.props;

      // Protect against runtime errors
      if (
        typeof defaultIndex !== 'number' ||
        defaultIndex < 0 ||
        this.state.tooltipTicks == null ||
        defaultIndex > this.state.tooltipTicks.length - 1
      ) {
        return;
      }

      const activeLabel = this.state.tooltipTicks[defaultIndex] && this.state.tooltipTicks[defaultIndex].value;
      const nextState = {
        activeTooltipIndex: defaultIndex,
        isTooltipActive: true,
        activeLabel,
        // @ts-expect-error we're about to remove this
        activePayload: null,
      };

      this.setState(nextState);
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

          // The tooltip should stay active when it was active in the previous render. If this is not
          // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
          isTooltipActive: prevState.isTooltipActive,
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
          ...{},
          prevChildren: children,
          dataStartIndex: startIndex,
          dataEndIndex: endIndex,
        };
      }

      return null;
    }

    componentDidUpdate(prevProps: CategoricalChartProps) {
      // Check to see if the Tooltip updated. If so, re-check default tooltip position
      if (
        !isChildrenEqual(
          [findChildByType(prevProps.children, Tooltip)],
          [findChildByType(this.props.children, Tooltip)],
        )
      ) {
        this.displayDefaultTooltip();
      }
    }

    componentWillUnmount() {
      this.removeListener();
    }

    /**
     * @deprecated instead use `useTooltipEventType` hook
     *
     * @returns do not use
     */
    getTooltipEventType(): TooltipEventType {
      const tooltipItem = findChildByType(this.props.children, Tooltip);

      if (tooltipItem && typeof tooltipItem.props.shared === 'boolean') {
        const eventType = tooltipItem.props.shared ? 'axis' : 'item';

        return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
      }

      return defaultTooltipEventType;
    }

    parseEventsOfWrapper() {
      const { children } = this.props;
      const tooltipEventType = this.getTooltipEventType();
      const tooltipItem = findChildByType(children, Tooltip);
      let tooltipEvents: any = {};

      if (tooltipItem && tooltipEventType === 'axis') {
        if (tooltipItem.props.trigger !== 'click') {
          tooltipEvents = {
            onDoubleClick: this.handleDoubleClick,
            onMouseLeave: this.handleMouseLeave,
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd,
            onContextMenu: this.handleContextMenu,
          };
        }
      }

      // @ts-expect-error adaptEventHandlers expects DOM Event but generateCategoricalChart works with React UIEvents
      const outerEvents = adaptEventHandlers(this.props, this.handleOuterEvent);

      return {
        ...outerEvents,
        ...tooltipEvents,
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

    /**
     * The handler of mouse entering a graphical item, such as bar, pie, scatter, funnel, ...
     * This handler is used for `tooltipEventType: item` and both `Tooltip.trigger: hover` and `Tooltip.trigger: click`
     * @param el The active graphical element
     * @param index 0-based index of the active graphical element
     * @return undefined
     */
    handleItemMouseEnter: ActivateTooltipAction<TooltipPayloadType> = () => {
      this.setState(() => ({
        isTooltipActive: true,
      }));
    };

    /**
     * The handler of mouse leaving a graphical item.
     * This handler is used for `tooltipEventType: item` and `Tooltip.trigger: hover`
     * @return undefined
     */
    handleItemMouseLeave = () => {
      this.setState(() => ({
        isTooltipActive: false,
      }));
    };

    /**
     * The handler if mouse leaving chart
     * This handler is used for `tooltipEventType: axis` and `Tooltip.trigger: hover`
     * @param e Event object
     * @return undefined
     */
    handleMouseLeave = (e: React.MouseEvent) => {
      const nextState: CategoricalChartState = { isTooltipActive: false };

      this.setState(nextState);

      const { onMouseLeave } = this.props;
      if (typeof onMouseLeave === 'function') {
        onMouseLeave(nextState, e);
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

    handleMouseDown = (e: React.MouseEvent | React.Touch) => {
      const { onMouseDown } = this.props;

      if (typeof onMouseDown === 'function') {
        const nextState: CategoricalChartState = null;
        onMouseDown(nextState, e);
      }
    };

    handleMouseUp = (e: React.MouseEvent | React.Touch) => {
      const { onMouseUp } = this.props;

      if (typeof onMouseUp === 'function') {
        const nextState: CategoricalChartState = null;
        onMouseUp(nextState, e);
      }
    };

    /**
     * This handler is used for `tooltipEventType: axis` and `Tooltip.trigger: hover`
     * @param e touch event
     * @return undefined
     */
    handleTouchStart = (e: React.TouchEvent) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleMouseDown(e.changedTouches[0]);
      }
    };

    /**
     * This handler is used for `tooltipEventType: axis` and `Tooltip.trigger: hover`
     * @param e touch event
     * @return undefined
     */
    handleTouchEnd = (e: React.TouchEvent) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleMouseUp(e.changedTouches[0]);
      }
    };

    handleDoubleClick = (e: React.MouseEvent) => {
      const { onDoubleClick } = this.props;

      if (typeof onDoubleClick === 'function') {
        const nextState: CategoricalChartState = null;
        onDoubleClick(nextState, e);
      }
    };

    handleContextMenu = (e: React.MouseEvent) => {
      const { onContextMenu } = this.props;

      if (typeof onContextMenu === 'function') {
        const nextState: CategoricalChartState = null;
        onContextMenu(nextState, e);
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

    getGraphicalItemClickHandler(
      tooltipEventType: TooltipEventType,
      trigger: TooltipTrigger | undefined,
    ): ActivateTooltipAction<TooltipPayloadType> | null {
      if (tooltipEventType === 'axis') {
        return null;
      }

      if (trigger === 'click') {
        return this.handleItemMouseEnter;
      }
      return null;
    }

    getGraphicalItemMouseEnterHandler(
      tooltipEventType: TooltipEventType,
      trigger: TooltipTrigger | undefined,
    ): ActivateTooltipAction<TooltipPayloadType> | null {
      if (tooltipEventType === 'axis') {
        return null;
      }

      if (trigger === 'hover' || trigger == null) {
        return this.handleItemMouseEnter;
      }
      return null;
    }

    getGraphicalItemMouseLeaveHandler(
      tooltipEventType: TooltipEventType,
      trigger: TooltipTrigger | undefined,
    ): ActivateTooltipAction<TooltipPayloadType> | null {
      if (tooltipEventType === 'axis') {
        return null;
      }

      if (trigger === 'hover' || trigger == null) {
        return this.handleItemMouseLeave;
      }
      return null;
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
      const tooltipEventType = this.getTooltipEventType();
      const tooltipItem = findChildByType(this.props.children, Tooltip);
      const onItemClick = this.getGraphicalItemClickHandler(tooltipEventType, tooltipItem?.props?.trigger);
      const onItemMouseEnter = this.getGraphicalItemMouseEnterHandler(tooltipEventType, tooltipItem?.props?.trigger);
      const onItemMouseLeave = this.getGraphicalItemMouseLeaveHandler(tooltipEventType, tooltipItem?.props?.trigger);
      return (
        <>
          <ChartDataContextProvider chartData={this.props.data} />
          <MouseEnterItemDispatchContext.Provider value={onItemMouseEnter}>
            <MouseLeaveItemDispatchContext.Provider value={onItemMouseLeave}>
              <MouseClickItemDispatchContext.Provider value={onItemClick}>
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
              </MouseClickItemDispatchContext.Provider>
            </MouseLeaveItemDispatchContext.Provider>
          </MouseEnterItemDispatchContext.Provider>
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
