import React, { Component, forwardRef, ReactElement } from 'react';
import range from 'lodash/range';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import { LegendPortalContext } from '../context/legendPortalContext';
import { Surface } from '../container/Surface';
import { Tooltip } from '../component/Tooltip';
import { Legend } from '../component/Legend';

import {
  filterProps,
  findAllByType,
  findChildByType,
  getReactEventByType,
  isChildrenEqual,
  validateWidthHeight,
} from '../util/ReactUtils';

import { Brush } from '../cartesian/Brush';
import { getAnyElementOfObject, hasDuplicate, isNullish, isNumber, uniqueId } from '../util/DataUtils';
import {
  appendOffsetOfLegend,
  AxisPropsNeededForTicksGenerator,
  AxisStackGroups,
  getDomainOfDataByKey,
  getDomainOfStackGroups,
  getStackGroupsByAxisId,
  getTicksOfAxis,
  isCategoricalAxis,
  parseDomainOfCategoryAxis,
  parseSpecifiedDomain,
} from '../util/ChartUtils';
import { detectReferenceElementsDomain } from '../util/DetectReferenceElementsDomain';
import { shallowEqual } from '../util/ShallowEqual';
import { eventCenter, GENERATOR_SYNC_EVENT } from '../util/Events';
import {
  adaptEventHandlers,
  AxisType,
  CategoricalChartOptions,
  ChartOffset,
  DataKey,
  LayoutType,
  Margin,
  StackOffsetType,
  TooltipEventType,
  XAxisMap,
  YAxisMap,
} from '../util/types';
import { isDomainSpecifiedByUser } from '../util/isDomainSpecifiedByUser';
import { ChartLayoutContextProvider } from '../context/chartLayoutContext';
import { AxisMap, CategoricalChartState, TooltipTrigger, XAxisWithExtraData, YAxisWithExtraData } from './types';
import { BoundingBox } from '../util/useGetBoundingClientRect';
import { LegendBoundingBoxContext } from '../context/legendBoundingBoxContext';
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
import { getDefaultDomainByAxisType } from '../state/selectors/axisSelectors';
import { getDomainOfItemsWithSameAxis, parseErrorBarsOfAxis } from '../util/getDomainOfErrorBars';
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

const getDisplayedData = (
  data: any[],
  {
    graphicalItems,
    dataStartIndex,
    dataEndIndex,
  }: Pick<CategoricalChartState, 'graphicalItems' | 'dataStartIndex' | 'dataEndIndex'>,
): any[] => {
  const itemsData = (graphicalItems ?? []).reduce<any[]>((result, child) => {
    const itemData = child.props.data;

    if (itemData && itemData.length) {
      return [...result, ...itemData];
    }

    return result;
  }, []);
  if (itemsData.length > 0) {
    return itemsData;
  }

  if (data && data.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
    return data.slice(dataStartIndex, dataEndIndex + 1);
  }

  return [];
};

/**
 * @deprecated this indirectly depends on the list of all children read from DOM. Use Redux instead.
 * Get the configuration of axis by the options of axis instance
 * @param  {Object} props         Latest props
 * @param {Array}  axes           The instance of axes
 * @param  {Array} graphicalItems The instances of item
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}      Configuration
 */
export const getAxisMapByAxes = (
  props: CategoricalChartProps,
  {
    axes,
    graphicalItems,
    axisType,
    axisIdKey,
    stackGroups,
    dataStartIndex,
    dataEndIndex,
  }: {
    axes: ReadonlyArray<ReactElement>;
    graphicalItems: ReadonlyArray<ReactElement>;
    axisType: AxisType;
    axisIdKey: string;
    stackGroups: AxisStackGroups;
    dataStartIndex: number;
    dataEndIndex: number;
  },
): AxisMap => {
  const { layout, children, stackOffset } = props;
  const isCategorical = isCategoricalAxis(layout, axisType);

  return axes.reduce((result: AxisMap, child: ReactElement): AxisMap => {
    const { type, dataKey, allowDataOverflow, allowDuplicatedCategory, scale, ticks, includeHidden } = child.props;
    const axisId = child.props[axisIdKey];

    // Eliminate duplicated axes
    if (result[axisId]) {
      return result;
    }

    const displayedData = getDisplayedData(props.data, {
      graphicalItems: graphicalItems.filter(item => item.props[axisIdKey] === axisId),
      dataStartIndex,
      dataEndIndex,
    });
    const len = displayedData.length;

    let domain, duplicateDomain, categoricalDomain;

    /*
     * This is a hack to short-circuit the domain creation here to enhance performance.
     * Usually, the data is used to determine the domain, but when the user specifies
     * a domain upfront (via props), there is no need to calculate the domain start and end,
     * which is very expensive for a larger amount of data.
     * The only thing that would prohibit short-circuiting is when the user doesn't allow data overflow,
     * because the axis is supposed to ignore the specified domain that way.
     */
    if (isDomainSpecifiedByUser(child.props.domain, allowDataOverflow, type)) {
      domain = parseSpecifiedDomain(child.props.domain, null, allowDataOverflow);
      /* The chart can be categorical and have the domain specified in numbers
       * we still need to calculate the categorical domain
       * TODO: refactor this more
       */
      if (isCategorical && (type === 'number' || scale !== 'auto')) {
        categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
      }
    }

    // if the domain is defaulted we need this for `originalDomain` as well
    const defaultDomain = getDefaultDomainByAxisType(type);

    // we didn't create the domain from user's props above, so we need to calculate it
    if (!domain || domain.length === 0) {
      const childDomain = child.props.domain ?? defaultDomain;

      if (dataKey) {
        // has dataKey in <Axis />
        domain = getDomainOfDataByKey(displayedData, dataKey, type);

        if (type === 'category' && isCategorical) {
          // the field type is category data and this axis is categorical axis
          const duplicate = hasDuplicate(domain);

          if (allowDuplicatedCategory && duplicate) {
            duplicateDomain = domain;
            // When category axis has duplicated text, serial numbers are used to generate scale
            domain = range(0, len);
          } else if (!allowDuplicatedCategory) {
            // remove duplicated category
            domain = parseDomainOfCategoryAxis(childDomain, domain, child).reduce(
              (finalDomain: any, entry: any) =>
                finalDomain.indexOf(entry) >= 0 ? finalDomain : [...finalDomain, entry],
              [],
            );
          }
        } else if (type === 'category') {
          // the field type is category data and this axis is numerical axis
          if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(childDomain, domain, child).reduce(
              (finalDomain: any, entry: any) =>
                finalDomain.indexOf(entry) >= 0 || entry === '' || isNullish(entry)
                  ? finalDomain
                  : [...finalDomain, entry],
              [],
            );
          } else {
            // eliminate undefined or null or empty string
            domain = domain.filter((entry: any) => entry !== '' && !isNullish(entry));
          }
        } else if (type === 'number') {
          // the field type is numerical
          const errorBarsDomain = parseErrorBarsOfAxis(
            displayedData,
            graphicalItems.filter(item => item.props[axisIdKey] === axisId && (includeHidden || !item.props.hide)),
            dataKey,
            axisType,
            layout,
          );

          if (errorBarsDomain) {
            domain = errorBarsDomain;
          }
        }

        if (isCategorical && (type === 'number' || scale !== 'auto')) {
          categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
        }
      } else if (isCategorical) {
        // the axis is a categorical axis
        domain = range(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
        // when stackOffset is 'expand', the domain may be calculated as [0, 1.000000000002]
        domain =
          stackOffset === 'expand'
            ? [0, 1]
            : getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
      } else {
        domain = getDomainOfItemsWithSameAxis(
          displayedData,
          graphicalItems.filter(item => item.props[axisIdKey] === axisId && (includeHidden || !item.props.hide)),
          type,
          layout,
          true,
        );
      }

      if (type === 'number') {
        // To detect wether there is any reference lines whose props ifOverflow is extendDomain
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);

        if (childDomain) {
          domain = parseSpecifiedDomain(childDomain, domain, allowDataOverflow);
        }
      } else if (type === 'category' && childDomain) {
        const axisDomain = childDomain;
        const isDomainValid = domain.every((entry: string | number) => axisDomain.indexOf(entry) >= 0);

        if (isDomainValid) {
          domain = axisDomain;
        }
      }
    }

    return {
      ...result,
      [axisId]: {
        ...child.props,
        axisType,
        domain,
        categoricalDomain,
        duplicateDomain,
        originalDomain: child.props.domain ?? defaultDomain,
        isCategorical,
        layout,
      },
    };
  }, {});
};

const tooltipTicksGenerator = (axisMap: AxisMap) => {
  const axis: AxisPropsNeededForTicksGenerator = getAnyElementOfObject(axisMap);
  const tooltipTicks = getTicksOfAxis(axis, false, true);

  return {
    tooltipTicks,
    orderedTooltipTicks: sortBy(tooltipTicks, o => o.coordinate),
    tooltipAxis: axis,
  };
};

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
    activeTooltipIndex: -1,
    isTooltipActive: Boolean(defaultShowTooltip),
  };
};

const getAxisNameByLayout = (layout: LayoutType) => {
  if (layout === 'horizontal') {
    return { numericAxisName: 'yAxis', cateAxisName: 'xAxis' } as const;
  }
  if (layout === 'vertical') {
    return { numericAxisName: 'xAxis', cateAxisName: 'yAxis' } as const;
  }
  if (layout === 'centric') {
    return { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' } as const;
  }

  return { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' } as const;
};

/**
 * @deprecated do not use; this depends on reading DOM elements directly. Instead, use {@link selectChartOffset}
 *
 * Calculate the offset of main part in the svg element
 * @param  {Object} params.props          Latest props
 * @param  {Array}  params.graphicalItems The instances of item
 * @param  {Object} params.xAxisMap       The configuration of x-axis
 * @param  {Object} params.yAxisMap       The configuration of y-axis
 * @param  {Object} prevLegendBBox        The boundary box of legend
 * @return {Object} The offset of main part in the svg element
 */
const calculateOffset = (
  {
    props,
    xAxisMap = {},
    yAxisMap = {},
  }: {
    props: { width: number; height: number; children: any; margin?: Margin };
    xAxisMap?: XAxisMap;
    yAxisMap?: YAxisMap;
  },
  prevLegendBBox?: BoundingBox | null,
): ChartOffset => {
  const { width, height, children } = props;
  const margin = props.margin || {};
  const brushItem = findChildByType(children, Brush);
  const legendItem = findChildByType(children, Legend);

  const offsetH = Object.keys(yAxisMap).reduce(
    (result, id) => {
      const entry: YAxisWithExtraData = yAxisMap[id];
      const { orientation } = entry;

      if (!entry.mirror && !entry.hide) {
        return { ...result, [orientation]: result[orientation] + entry.width };
      }

      return result;
    },
    { left: margin.left || 0, right: margin.right || 0 },
  );

  const offsetV = Object.keys(xAxisMap).reduce(
    (result, id) => {
      const entry: XAxisWithExtraData = xAxisMap[id];
      const { orientation } = entry;

      if (!entry.mirror && !entry.hide) {
        return { ...result, [orientation]: get(result, `${orientation}`) + entry.height };
      }

      return result;
    },
    { top: margin.top || 0, bottom: margin.bottom || 0 },
  );

  let offset: ChartOffset = { ...offsetV, ...offsetH };

  const brushBottom = offset.bottom;

  if (brushItem) {
    offset.bottom += brushItem.props.height || Brush.defaultProps.height;
  }

  if (legendItem && prevLegendBBox) {
    // @ts-expect-error some properties are optional but should be required
    offset = appendOffsetOfLegend(offset, { ...legendItem.props, ...prevLegendBBox });
  }

  const offsetWidth = width - offset.left - offset.right;
  const offsetHeight = height - offset.top - offset.bottom;

  return {
    brushBottom,
    ...offset,
    // never return negative values for height and width
    width: Math.max(offsetWidth, 0),
    height: Math.max(offsetHeight, 0),
  };
};

type AxisMapMap = {
  [axisMapId: string]: AxisMap;
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
  GraphicalChild,
  defaultTooltipEventType = 'axis',
  validateTooltipEventTypes = ['axis'],
  defaultProps = {},
  tooltipPayloadSearcher,
}: CategoricalChartOptions) => {
  /**
   * @deprecated this indirectly depends on the list of all children read from DOM. Use Redux instead.
   *
   * The AxisMaps are expensive to render on large data sets
   * so provide the ability to store them in state and only update them when necessary
   * they are dependent upon the start and end index of
   * the brush so it's important that this method is called _after_
   * the state is updated with any new start/end indices
   *
   * @param {Object} props          The props object to be used for updating the axismaps
   * dataStartIndex: The start index of the data series when a brush is applied
   * dataEndIndex: The end index of the data series when a brush is applied
   * updateId: The update id
   * @param {Object} prevState      Prev state
   * @return {Object} state New state to set
   */
  const updateStateOfAxisMapsOffsetAndStackGroups = (
    {
      props,
    }: {
      props: CategoricalChartProps;
    },
    prevState?: CategoricalChartState,
  ): any => {
    if (!validateWidthHeight({ width: props.width, height: props.height })) {
      return null;
    }

    const { children, layout, stackOffset, data, reverseStackOrder } = props;
    const { numericAxisName, cateAxisName } = getAxisNameByLayout(layout);
    const graphicalItems = findAllByType(children, GraphicalChild);
    const stackGroups: AxisStackGroups = getStackGroupsByAxisId(
      data,
      graphicalItems,
      `${numericAxisName}Id`,
      `${cateAxisName}Id`,
      stackOffset,
      reverseStackOrder,
    );
    const axisObj: AxisMapMap = {};

    const offset: ChartOffset = calculateOffset(
      {
        xAxisMap: {},
        yAxisMap: {},
        props: {
          width: props.width,
          height: props.height,
          margin: props.margin,
          children: props.children,
        },
      },
      prevState?.legendBBox,
    );

    const cateAxisMap = axisObj[`${cateAxisName}Map`];
    const ticksObj = tooltipTicksGenerator(cateAxisMap);

    return {
      graphicalItems,
      offset,
      stackGroups,
      ...ticksObj,
      ...axisObj,
    };
  };

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
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: nextProps,
              ...defaultState,
            },
            prevState,
          ),

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
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: nextProps,
              ...newState,
            },
            prevState,
          ),
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
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: nextProps,
              ...prevState,
            },
            prevState,
          ),
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

    handleLegendBBoxUpdate = (box: BoundingBox | null) => {
      if (box) {
        this.setState({
          legendBBox: box,
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: this.props,
            },
            { ...this.state, legendBBox: box },
          ),
        });
      }
    };

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
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: this.props,
            },
            this.state,
          ),
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
    handleItemMouseEnter: ActivateTooltipAction<TooltipPayloadType> = (el, index) => {
      this.setState(() => ({
        activeTooltipIndex: index,
        isTooltipActive: true,
        activePayload: el.tooltipPayload,
        activeCoordinate: el.tooltipPosition || { x: el.cx, y: el.cy },
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
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: this.props,
            },
            this.state,
          ),
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
                      <LegendBoundingBoxContext.Provider value={this.handleLegendBBoxUpdate}>
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
                      </LegendBoundingBoxContext.Provider>
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
