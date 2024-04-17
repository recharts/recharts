import React, { cloneElement, Component, ReactElement } from 'react';
import isNil from 'lodash/isNil';
import isFunction from 'lodash/isFunction';
import range from 'lodash/range';
import get from 'lodash/get';
import sortBy from 'lodash/sortBy';
import throttle from 'lodash/throttle';

import clsx from 'clsx';
// eslint-disable-next-line no-restricted-imports
import type { DebouncedFunc } from 'lodash';
import invariant from 'tiny-invariant';
import { Surface } from '../container/Surface';
import { Tooltip } from '../component/Tooltip';
import { Legend } from '../component/Legend';

import {
  filterProps,
  findAllByType,
  findChildByType,
  getDisplayName,
  getReactEventByType,
  isChildrenEqual,
  parseChildIndex,
  renderByOrder,
  validateWidthHeight,
} from '../util/ReactUtils';

import { Brush } from '../cartesian/Brush';
import { getOffset } from '../util/DOMUtils';
import { findEntryInArray, getAnyElementOfObject, hasDuplicate, isNumber, uniqueId } from '../util/DataUtils';
import {
  appendOffsetOfLegend,
  AxisStackGroups,
  BarPosition,
  calculateActiveTickIndex,
  combineEventHandlers,
  getBandSizeOfAxis,
  getBarPosition,
  getBarSizeList,
  getDomainOfDataByKey,
  getDomainOfItemsWithSameAxis,
  getDomainOfStackGroups,
  getStackedDataOfItem,
  getStackGroupsByAxisId,
  getTicksOfAxis,
  getTooltipItem,
  isAxisLTR,
  isCategoricalAxis,
  parseDomainOfCategoryAxis,
  parseErrorBarsOfAxis,
  parseSpecifiedDomain,
} from '../util/ChartUtils';
import { detectReferenceElementsDomain } from '../util/DetectReferenceElementsDomain';
import { inRangeOfSector, polarToCartesian } from '../util/PolarUtils';
import { shallowEqual } from '../util/ShallowEqual';
import { eventCenter, SYNC_EVENT } from '../util/Events';
import {
  adaptEventHandlers,
  AxisType,
  BaseAxisProps,
  CartesianViewBox,
  CategoricalChartOptions,
  ChartCoordinate,
  ChartOffset,
  Coordinate,
  DataKey,
  LayoutType,
  Margin,
  MouseInfo,
  RangeObj,
  StackOffsetType,
  TickItem,
  TooltipData,
  TooltipEventType,
  XAxisMap,
  YAxisMap,
} from '../util/types';
import { AccessibilityManager } from './AccessibilityManager';
import { isDomainSpecifiedByUser } from '../util/isDomainSpecifiedByUser';
import { ChartLayoutContextProvider } from '../context/chartLayoutContext';
import { AxisMap, CategoricalChartState } from './types';
import { AccessibilityContextProvider } from '../context/accessibilityContext';
import { BoundingBox } from '../util/useGetBoundingClientRect';
import { LegendBoundingBoxContext } from '../context/legendBoundingBoxContext';
import { XAxisProps, YAxisProps, ZAxisProps } from '../index';
import { AngleAxisProps, RadiusAxisProps } from '../polar/types';
import { ChartDataContextProvider } from '../context/chartDataContext';
import { BrushStartEndIndex, BrushUpdateDispatchContext } from '../context/brushUpdateContext';
import { ClipPath } from '../container/ClipPath';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { TooltipPortalContext } from '../context/tooltipPortalContext';

export interface MousePointer {
  pageX: number;
  pageY: number;
}

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right'],
};

const FULL_WIDTH_AND_HEIGHT = { width: '100%', height: '100%' };

const originCoordinate: Coordinate = { x: 0, y: 0 };

/**
 * This function exists as a temporary workaround.
 *
 * Why? generateCategoricalChart does not render `{children}` directly;
 * instead it passes them through `renderByOrder` function which reads their handlers.
 *
 * So, this is a handler that does nothing.
 * Once we get rid of `renderByOrder` and switch to JSX only, we can get rid of this handler too.
 *
 * @param {JSX} element as is in JSX
 * @returns {JSX} the same element
 */
function renderAsIs(element: React.ReactElement): React.ReactElement {
  return element;
}

const calculateTooltipPos = (rangeObj: RangeObj, layout: LayoutType): number | undefined => {
  if (layout === 'horizontal') {
    return rangeObj.x;
  }
  if (layout === 'vertical') {
    return rangeObj.y;
  }
  if (layout === 'centric') {
    return rangeObj.angle;
  }

  return rangeObj.radius;
};

const getActiveCoordinate = (
  layout: LayoutType,
  tooltipTicks: TickItem[],
  activeIndex: number,
  rangeObj: RangeObj,
): ChartCoordinate => {
  const entry = tooltipTicks.find(tick => tick && tick.index === activeIndex);

  if (entry) {
    if (layout === 'horizontal') {
      return { x: entry.coordinate, y: rangeObj.y };
    }
    if (layout === 'vertical') {
      return { x: rangeObj.x, y: entry.coordinate };
    }
    if (layout === 'centric') {
      const angle = entry.coordinate;
      const { radius } = rangeObj;

      return {
        ...rangeObj,
        ...polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle),
        angle,
        radius,
      };
    }

    const radius = entry.coordinate;
    const { angle } = rangeObj;

    return {
      ...rangeObj,
      ...polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle),
      angle,
      radius,
    };
  }

  return originCoordinate;
};

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

function getDefaultDomainByAxisType(axisType: 'number' | string) {
  return axisType === 'number' ? [0, 'auto'] : undefined;
}

/**
 * Get the content to be displayed in the tooltip
 * @param  {Object} state          Current state
 * @param  {Array}  chartData      The data defined in chart
 * @param  {Number} activeIndex    Active index of data
 * @param  {String} activeLabel    Active label of data
 * @return {Array}                 The content of tooltip
 */
const getTooltipContent = (
  state: CategoricalChartState,
  chartData: any[],
  activeIndex: number,
  activeLabel?: string,
): any[] => {
  const { graphicalItems, tooltipAxis } = state;
  const displayedData = getDisplayedData(chartData, state);

  if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
    return null;
  }
  // get data by activeIndex when the axis don't allow duplicated category
  return graphicalItems.reduce((result, child) => {
    /**
     * Fixes: https://github.com/recharts/recharts/issues/3669
     * Defaulting to chartData below to fix an edge case where the tooltip does not include data from all charts
     * when a separate dataset is passed to chart prop data and specified on Line/Area/etc prop data
     */
    let data = child.props.data ?? chartData;

    if (data && state.dataStartIndex + state.dataEndIndex !== 0) {
      data = data.slice(state.dataStartIndex, state.dataEndIndex + 1);
    }

    let payload;

    if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
      // graphic child has data props
      const entries = data === undefined ? displayedData : data;
      payload = findEntryInArray(entries, tooltipAxis.dataKey, activeLabel);
    } else {
      payload = (data && data[activeIndex]) || displayedData[activeIndex];
    }

    if (!payload) {
      return result;
    }

    // @ts-expect-error missing types
    return [...result, getTooltipItem(child, payload)];
  }, []);
};

/**
 * Returns tooltip data based on a mouse position (as a parameter or in state)
 * @param  state      current state
 * @param  chartData  the data defined in chart
 * @param  layout     The layout type of chart
 * @param  rangeObj   coordinates
 * @return            Tooltip data
 */
const getTooltipData = (
  state: CategoricalChartState,
  chartData: any[],
  layout: LayoutType,
  rangeObj?: RangeObj,
): TooltipData | null => {
  const rangeData: RangeObj = rangeObj || { x: state.chartX, y: state.chartY };

  const pos: number | undefined = calculateTooltipPos(rangeData, layout);
  const { orderedTooltipTicks: ticks, tooltipAxis: axis, tooltipTicks } = state;

  const activeIndex = calculateActiveTickIndex(pos, ticks, tooltipTicks, axis);

  if (activeIndex >= 0 && tooltipTicks) {
    const activeLabel: TickItem['value'] | undefined = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
    const activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
    const activeCoordinate = getActiveCoordinate(layout, ticks, activeIndex, rangeData);

    return {
      activeTooltipIndex: activeIndex,
      activeLabel,
      activePayload,
      activeCoordinate,
    };
  }

  return null;
};

/**
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

  // Eliminate duplicated axes
  return axes.reduce((result: AxisMap, child: ReactElement): AxisMap => {
    const { type, dataKey, allowDataOverflow, allowDuplicatedCategory, scale, ticks, includeHidden } = child.props;
    const axisId = child.props[axisIdKey];

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
                finalDomain.indexOf(entry) >= 0 || entry === '' || isNil(entry) ? finalDomain : [...finalDomain, entry],
              [],
            );
          } else {
            // eliminate undefined or null or empty string
            domain = domain.filter((entry: any) => entry !== '' && !isNil(entry));
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

/**
 * Get the configuration of axis by the options of item,
 * this kind of axis does not display in chart
 * @param  {Object} props         Latest props
 * @param  {Array} graphicalItems The instances of item
 * @param  {ReactElement} Axis    Axis Component
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}               Configuration
 */
const getAxisMapByItems = (
  props: CategoricalChartProps,
  {
    graphicalItems,
    Axis,
    axisType,
    axisIdKey,
    stackGroups,
    dataStartIndex,
    dataEndIndex,
  }: {
    axisIdKey: string;
    axisType?: AxisType;
    Axis?: React.ComponentType<BaseAxisProps>;
    graphicalItems: ReadonlyArray<ReactElement>;
    stackGroups: AxisStackGroups;
    dataStartIndex: number;
    dataEndIndex: number;
  },
): AxisMap => {
  const { layout, children } = props;
  const displayedData = getDisplayedData(props.data, {
    graphicalItems,
    dataStartIndex,
    dataEndIndex,
  });
  const len = displayedData.length;
  const isCategorical = isCategoricalAxis(layout, axisType);
  let index = -1;

  // The default type of x-axis is category axis,
  // The default contents of x-axis is the serial numbers of data
  // The default type of y-axis is number axis
  // The default contents of y-axis is the domain of data
  return graphicalItems.reduce((result: AxisMap, child: ReactElement): AxisMap => {
    const axisId = child.props[axisIdKey];

    const originalDomain = getDefaultDomainByAxisType('number');

    if (!result[axisId]) {
      index++;
      let domain;

      if (isCategorical) {
        domain = range(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
        domain = getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      } else {
        domain = parseSpecifiedDomain(
          originalDomain,
          getDomainOfItemsWithSameAxis(
            displayedData,
            graphicalItems.filter((item: ReactElement) => item.props[axisIdKey] === axisId && !item.props.hide),
            'number',
            layout,
          ),
          Axis.defaultProps.allowDataOverflow,
        );
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      }

      return {
        ...result,
        [axisId]: {
          axisType,
          ...Axis.defaultProps,
          hide: true,
          orientation: get(ORIENT_MAP, `${axisType}.${index % 2}`, null),
          domain,
          originalDomain,
          isCategorical,
          layout,
          // specify scale when no Axis
          // scale: isCategorical ? 'band' : 'linear',
        },
      };
    }

    return result;
  }, {});
};

/**
 * Get the configuration of all x-axis or y-axis
 * @param  {Object} props          Latest props
 * @param  {String} axisType       The type of axis
 * @param  {React.ComponentType}  [AxisComp]      Axis Component
 * @param  {Array}  graphicalItems The instances of item
 * @param  {Object} stackGroups    The items grouped by axisId and stackId
 * @param {Number} dataStartIndex  The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex    The end index of the data series when a brush is applied
 * @return {Object}          Configuration
 */
const getAxisMap = (
  props: CategoricalChartProps,
  {
    axisType = 'xAxis',
    AxisComp,
    graphicalItems,
    stackGroups,
    dataStartIndex,
    dataEndIndex,
  }: {
    axisType?: AxisType;
    AxisComp?: React.ComponentType;
    graphicalItems: ReadonlyArray<ReactElement>;
    stackGroups: AxisStackGroups;
    dataStartIndex: number;
    dataEndIndex: number;
  },
): AxisMap => {
  const { children } = props;
  const axisIdKey = `${axisType}Id`;
  // Get all the instance of Axis
  const axes = findAllByType(children, AxisComp);

  let axisMap: AxisMap = {};

  if (axes && axes.length) {
    axisMap = getAxisMapByAxes(props, {
      axes,
      graphicalItems,
      axisType,
      axisIdKey,
      stackGroups,
      dataStartIndex,
      dataEndIndex,
    });
  } else if (graphicalItems && graphicalItems.length) {
    axisMap = getAxisMapByItems(props, {
      Axis: AxisComp,
      graphicalItems,
      axisType,
      axisIdKey,
      stackGroups,
      dataStartIndex,
      dataEndIndex,
    });
  }

  return axisMap;
};

const tooltipTicksGenerator = (axisMap: AxisMap) => {
  const axis: BaseAxisProps = getAnyElementOfObject(axisMap);
  const tooltipTicks = getTicksOfAxis(axis, false, true);

  return {
    tooltipTicks,
    orderedTooltipTicks: sortBy(tooltipTicks, o => o.coordinate),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis, tooltipTicks),
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

const hasGraphicalBarItem = (graphicalItems: ReadonlyArray<ReactElement>): boolean => {
  if (!graphicalItems || !graphicalItems.length) {
    return false;
  }

  return graphicalItems.some(item => {
    const name = getDisplayName(item && item.type);

    return name && name.indexOf('Bar') >= 0;
  });
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
    props: CategoricalChartProps;
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
      const entry = yAxisMap[id];
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
      const entry = xAxisMap[id];
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
    // @ts-expect-error margin is optional in props but required in appendOffsetOfLegend
    offset = appendOffsetOfLegend(offset, props, prevLegendBBox);
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
  syncMethod?: 'index' | 'value' | Function;
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

type AxisObj = {
  xAxis?: XAxisProps;
  xAxisTicks?: Array<TickItem>;

  yAxis?: YAxisProps;
  yAxisTicks?: Array<TickItem>;

  zAxis?: ZAxisProps;
  zAxisTicks?: Array<TickItem>;

  angleAxis?: AngleAxisProps;
  angleAxisTicks?: Array<TickItem>;

  radiusAxis?: RadiusAxisProps;
  radiusAxisTicks?: Array<TickItem>;
};

// Determine the size of the axis, used for calculation of relative bar sizes
const getCartesianAxisSize = (axisObj: AxisObj, axisName: 'xAxis' | 'yAxis' | 'angleAxis' | 'radiusAxis') => {
  if (axisName === 'xAxis') {
    return axisObj[axisName].width;
  }
  if (axisName === 'yAxis') {
    return axisObj[axisName].height;
  }
  // This is only supported for Bar charts (i.e. charts with cartesian axes), so we should never get here
  return undefined;
};

export const generateCategoricalChart = ({
  chartName,
  GraphicalChild,
  defaultTooltipEventType = 'axis',
  validateTooltipEventTypes = ['axis'],
  axisComponents,
  formatAxisMap,
  defaultProps,
}: CategoricalChartOptions) => {
  const getFormatItems = (props: CategoricalChartProps, currentState: CategoricalChartState): any[] => {
    const { graphicalItems, stackGroups, offset, updateId, dataStartIndex, dataEndIndex } = currentState;
    const { barSize, layout, barGap, barCategoryGap, maxBarSize: globalMaxBarSize } = props;
    const { numericAxisName, cateAxisName } = getAxisNameByLayout(layout);
    const hasBar = hasGraphicalBarItem(graphicalItems);

    const formattedItems = [] as any[];

    graphicalItems.forEach((item: ReactElement, index: number) => {
      const displayedData = getDisplayedData(props.data, { graphicalItems: [item], dataStartIndex, dataEndIndex });
      const { dataKey, maxBarSize: childMaxBarSize } = item.props;
      // axisId of the numerical axis
      const numericAxisId = item.props[`${numericAxisName}Id`];
      // axisId of the categorical axis
      const cateAxisId = item.props[`${cateAxisName}Id`];

      const axisObjInitialValue: AxisObj = {};

      const axisObj: AxisObj = axisComponents.reduce((result: AxisObj, entry: BaseAxisProps): AxisObj => {
        // map of axisId to axis for a specific axis type
        const axisMap: AxisMap | undefined = currentState[`${entry.axisType}Map` as const];
        // axisId of axis we are currently computing
        const id: string = item.props[`${entry.axisType}Id`];

        /**
         * tell the user in dev mode that their configuration is incorrect if we cannot find a match between
         * axisId on the chart and axisId on the axis. zAxis does not get passed in the map for ComposedChart,
         * leave it out of the check for now.
         */
        invariant(
          (axisMap && axisMap[id]) || entry.axisType === 'zAxis',
          `Specifying a(n) ${entry.axisType}Id requires a corresponding ${
            entry.axisType
            // @ts-expect-error we should stop reading data from ReactElements
          }Id on the targeted graphical component ${item?.type?.displayName ?? ''}`,
        );

        // the axis we are currently formatting
        const axis = axisMap[id];

        return {
          ...result,
          [entry.axisType]: axis,
          [`${entry.axisType}Ticks`]: getTicksOfAxis(axis),
        };
      }, axisObjInitialValue);
      const cateAxis = axisObj[cateAxisName];
      const cateTicks = axisObj[`${cateAxisName}Ticks` as const];
      const stackedData =
        stackGroups &&
        stackGroups[numericAxisId] &&
        stackGroups[numericAxisId].hasStack &&
        getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
      const itemIsBar = getDisplayName(item.type).indexOf('Bar') >= 0;
      const bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
      let barPosition: ReadonlyArray<BarPosition> = [];
      const sizeList =
        hasBar && getBarSizeList({ barSize, stackGroups, totalSize: getCartesianAxisSize(axisObj, cateAxisName) });

      if (itemIsBar) {
        // If it is bar, calculate the position of bar
        const maxBarSize: number = isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
        const barBandSize: number = getBandSizeOfAxis(cateAxis, cateTicks, true) ?? maxBarSize ?? 0;
        barPosition = getBarPosition({
          barGap,
          barCategoryGap,
          bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
          sizeList: sizeList[cateAxisId],
          maxBarSize,
        });

        if (barBandSize !== bandSize) {
          barPosition = barPosition.map(pos => ({
            ...pos,
            position: { ...pos.position, offset: pos.position.offset - barBandSize / 2 },
          }));
        }
      }
      // @ts-expect-error we should stop reading data from ReactElements
      const composedFn = item && item.type && item.type.getComposedData;

      if (composedFn) {
        formattedItems.push({
          props: {
            ...composedFn({
              ...axisObj,
              displayedData,
              props,
              dataKey,
              item,
              bandSize,
              barPosition,
              offset,
              stackedData,
              layout,
              dataStartIndex,
              dataEndIndex,
            }),
            key: item.key || `item-${index}`,
            [numericAxisName]: axisObj[numericAxisName],
            [cateAxisName]: axisObj[cateAxisName],
            animationId: updateId,
          },
          childIndex: parseChildIndex(item, props.children),
          item,
        });
      }
    });

    return formattedItems;
  };

  /**
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
    { props, dataStartIndex, dataEndIndex, updateId }: any,
    prevState?: CategoricalChartState,
  ): any => {
    if (!validateWidthHeight({ props })) {
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
    const axisObj: AxisMapMap = axisComponents.reduce((result: AxisMapMap, entry: BaseAxisProps): AxisMapMap => {
      const name = `${entry.axisType}Map`;

      return {
        ...result,
        [name]: getAxisMap(props, {
          ...entry,
          graphicalItems,
          stackGroups: entry.axisType === numericAxisName && stackGroups,
          dataStartIndex,
          dataEndIndex,
        }),
      };
    }, {});

    const offset: ChartOffset = calculateOffset({ ...axisObj, props }, prevState?.legendBBox);

    Object.keys(axisObj).forEach(key => {
      axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace('Map', ''), chartName);
    });
    const cateAxisMap = axisObj[`${cateAxisName}Map`];
    const ticksObj = tooltipTicksGenerator(cateAxisMap);

    const formattedGraphicalItems = getFormatItems(props, {
      ...axisObj,
      dataStartIndex,
      dataEndIndex,
      updateId,
      graphicalItems,
      stackGroups,
      offset,
    });

    return {
      formattedGraphicalItems,
      graphicalItems,
      offset,
      stackGroups,
      ...ticksObj,
      ...axisObj,
    };
  };

  class CategoricalChartWrapper extends Component<CategoricalChartProps, CategoricalChartState> {
    static displayName = chartName;

    readonly eventEmitterSymbol: Symbol = Symbol('rechartsEventEmitter');

    clipPathId: string;

    accessibilityManager = new AccessibilityManager();

    throttleTriggeredAfterMouseMove: DebouncedFunc<typeof CategoricalChartWrapper.prototype.triggeredAfterMouseMove>;

    // todo join specific chart propTypes
    static defaultProps: CategoricalChartProps = {
      layout: 'horizontal',
      stackOffset: 'none',
      barCategoryGap: '10%',
      barGap: 4,
      margin: { top: 5, right: 5, bottom: 5, left: 5 } as Margin,
      reverseStackOrder: false,
      syncMethod: 'index',
      ...defaultProps,
    };

    container?: HTMLElement;

    tooltipPortal: HTMLElement | null = null;

    constructor(props: CategoricalChartProps) {
      super(props);

      this.clipPathId = `${props.id ?? uniqueId('recharts')}-clip`;

      // trigger 60fps
      this.throttleTriggeredAfterMouseMove = throttle(this.triggeredAfterMouseMove, props.throttleDelay ?? 1000 / 60);

      this.state = {};
    }

    componentDidMount() {
      this.addListener();

      this.accessibilityManager.setDetails({
        container: this.container,
        offset: {
          left: this.props.margin.left ?? 0,
          top: this.props.margin.top ?? 0,
        },
        coordinateList: this.state.tooltipTicks,
        mouseHandlerCallback: this.triggeredAfterMouseMove,
        layout: this.props.layout,
        // Check all (0+) <XAxis /> elements to see if ANY have reversed={true}. If so, this will be treated as an RTL chart
        ltr: isAxisLTR(this.state.xAxisMap),
      });
      this.displayDefaultTooltip();
    }

    displayDefaultTooltip() {
      const { children, data, height, layout } = this.props;

      const tooltipElem = findChildByType(children, Tooltip);
      // If the chart doesn't include a <Tooltip /> element, there's no tooltip to display
      if (!tooltipElem) {
        return;
      }

      const { defaultIndex } = tooltipElem.props;

      // Protect against runtime errors
      if (typeof defaultIndex !== 'number' || defaultIndex < 0 || defaultIndex > this.state.tooltipTicks.length) {
        return;
      }

      const activeLabel = this.state.tooltipTicks[defaultIndex] && this.state.tooltipTicks[defaultIndex].value;
      let activePayload = getTooltipContent(this.state, data, defaultIndex, activeLabel);

      const independentAxisCoord = this.state.tooltipTicks[defaultIndex].coordinate;
      const dependentAxisCoord = (this.state.offset.top + height) / 2;

      const isHorizontal = layout === 'horizontal';
      let activeCoordinate = isHorizontal
        ? {
            x: independentAxisCoord,
            y: dependentAxisCoord,
          }
        : {
            y: independentAxisCoord,
            x: dependentAxisCoord,
          };

      // Unlike other chart types, scatter plot's tooltip positions rely on both X and Y coordinates. Only the scatter plot
      // element knows its own Y coordinates.
      // If there's a scatter plot, we'll want to grab that element for an interrogation.
      const scatterPlotElement = this.state.formattedGraphicalItems.find(
        ({ item }: { item: any }) => item.type.name === 'Scatter',
      );
      if (scatterPlotElement) {
        activeCoordinate = {
          ...activeCoordinate,
          ...scatterPlotElement.props.points[defaultIndex].tooltipPosition,
        };
        activePayload = scatterPlotElement.props.points[defaultIndex].tooltipPayload;
      }

      const nextState = {
        activeTooltipIndex: defaultIndex,
        isTooltipActive: true,
        activeLabel,
        activePayload,
        activeCoordinate,
      };

      this.setState(nextState);

      // Make sure that anyone who keyboard-only users who tab to the chart will start their
      // cursors at defaultIndex
      this.accessibilityManager.setIndex(defaultIndex);
    }

    getSnapshotBeforeUpdate(
      prevProps: Readonly<CategoricalChartProps>,
      prevState: Readonly<CategoricalChartState>,
    ): null {
      if (!this.props.accessibilityLayer) {
        return null;
      }

      if (this.state.tooltipTicks !== prevState.tooltipTicks) {
        this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks,
        });
      }

      if (this.state.xAxisMap !== prevState.xAxisMap) {
        this.accessibilityManager.setDetails({
          ltr: isAxisLTR(this.state.xAxisMap),
        });
      }

      if (this.props.layout !== prevProps.layout) {
        this.accessibilityManager.setDetails({
          layout: this.props.layout,
        });
      }

      if (this.props.margin !== prevProps.margin) {
        this.accessibilityManager.setDetails({
          offset: {
            left: this.props.margin.left ?? 0,
            top: this.props.margin.top ?? 0,
          },
        });
      }

      // Something has to be returned for getSnapshotBeforeUpdate
      return null;
    }

    static getDerivedStateFromProps = (
      nextProps: CategoricalChartProps,
      prevState: CategoricalChartState,
    ): CategoricalChartState => {
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
              updateId: 0,
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
          ...getTooltipData(prevState, data, layout),
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

        const startIndex = brush ? brush.props?.startIndex ?? dataStartIndex : dataStartIndex;
        const endIndex = brush ? brush.props?.endIndex ?? dataEndIndex : dataEndIndex;
        const hasDifferentStartOrEndIndex = startIndex !== dataStartIndex || endIndex !== dataEndIndex;

        // update configuration in children
        const hasGlobalData = !isNil(data);
        const newUpdateId = hasGlobalData && !hasDifferentStartOrEndIndex ? prevState.updateId : prevState.updateId + 1;

        return {
          updateId: newUpdateId,
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: nextProps,
              ...prevState,
              updateId: newUpdateId,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
            },
            prevState,
          ),
          prevChildren: children,
          dataStartIndex: startIndex,
          dataEndIndex: endIndex,
        };
      }

      return null;
    };

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
      this.throttleTriggeredAfterMouseMove.cancel();
    }

    getTooltipEventType(): TooltipEventType {
      const tooltipItem = findChildByType(this.props.children, Tooltip);

      if (tooltipItem && typeof tooltipItem.props.shared === 'boolean') {
        const eventType = tooltipItem.props.shared ? 'axis' : 'item';

        return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
      }

      return defaultTooltipEventType;
    }

    /**
     * Get the information of mouse in chart, return null when the mouse is not in the chart
     * @param  {MousePointer} event    The event object
     * @return Monster object with a little bit of everything in it
     */
    getMouseInfo(event: MousePointer): MouseInfo | null {
      if (!this.container) {
        return null;
      }

      const element = this.container;
      const boundingRect = element.getBoundingClientRect();
      const containerOffset = getOffset(boundingRect);
      const e = {
        chartX: Math.round(event.pageX - containerOffset.left),
        chartY: Math.round(event.pageY - containerOffset.top),
      };

      const scale = boundingRect.width / element.offsetWidth || 1;

      const rangeObj = this.inRange(e.chartX, e.chartY, scale);
      if (!rangeObj) {
        return null;
      }

      const { xAxisMap, yAxisMap } = this.state;
      const tooltipEventType = this.getTooltipEventType();

      if (tooltipEventType !== 'axis' && xAxisMap && yAxisMap) {
        const xScale = getAnyElementOfObject(xAxisMap).scale;
        const yScale = getAnyElementOfObject(yAxisMap).scale;
        const xValue: number | null = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
        const yValue: number | null = yScale && yScale.invert ? yScale.invert(e.chartY) : null;

        return { ...e, xValue, yValue };
      }

      const toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);

      if (toolTipData) {
        return {
          ...e,
          ...toolTipData,
        };
      }

      return null;
    }

    inRange(x: number, y: number, scale = 1): RangeObj {
      const { layout } = this.props;

      const [scaledX, scaledY] = [x / scale, y / scale];

      if (layout === 'horizontal' || layout === 'vertical') {
        const { offset } = this.state;

        const isInRange =
          scaledX >= offset.left &&
          scaledX <= offset.left + offset.width &&
          scaledY >= offset.top &&
          scaledY <= offset.top + offset.height;

        return isInRange ? { x: scaledX, y: scaledY } : null;
      }

      const { angleAxisMap, radiusAxisMap } = this.state;

      if (angleAxisMap && radiusAxisMap) {
        const angleAxis = getAnyElementOfObject(angleAxisMap);
        return inRangeOfSector({ x: scaledX, y: scaledY }, angleAxis);
      }

      return null;
    }

    parseEventsOfWrapper() {
      const { children } = this.props;
      const tooltipEventType = this.getTooltipEventType();
      const tooltipItem = findChildByType(children, Tooltip);
      let tooltipEvents: any = {};

      if (tooltipItem && tooltipEventType === 'axis') {
        if (tooltipItem.props.trigger === 'click') {
          tooltipEvents = {
            onClick: this.handleClick,
          };
        } else {
          tooltipEvents = {
            onMouseEnter: this.handleMouseEnter,
            onMouseMove: this.handleMouseMove,
            onMouseLeave: this.handleMouseLeave,
            onTouchMove: this.handleTouchMove,
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd,
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
      eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);
    }

    removeListener() {
      eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);
    }

    handleLegendBBoxUpdate = (box: BoundingBox | null) => {
      if (box) {
        const { dataStartIndex, dataEndIndex, updateId } = this.state;

        this.setState({
          legendBBox: box,
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: this.props,
              dataStartIndex,
              dataEndIndex,
              updateId,
            },
            { ...this.state, legendBBox: box },
          ),
        });
      }
    };

    handleReceiveSyncEvent = (cId: number | string, data: CategoricalChartState, emitter: Symbol) => {
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
        const { updateId } = this.state;

        this.setState(() => ({
          dataStartIndex: startIndex,
          dataEndIndex: endIndex,
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: this.props,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
              updateId,
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
     * The handler of mouse entering chart
     * @param  {Object} e              Event object
     * @return {Null}                  null
     */
    handleMouseEnter = (e: React.MouseEvent) => {
      const mouse = this.getMouseInfo(e);

      if (mouse) {
        const nextState: CategoricalChartState = { ...mouse, isTooltipActive: true };
        this.setState(nextState);
        this.triggerSyncEvent(nextState);

        const { onMouseEnter } = this.props;
        if (isFunction(onMouseEnter)) {
          onMouseEnter(nextState, e);
        }
      }
    };

    triggeredAfterMouseMove = (e: MousePointer): any => {
      const mouse = this.getMouseInfo(e);
      const nextState: CategoricalChartState = mouse ? { ...mouse, isTooltipActive: true } : { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);

      const { onMouseMove } = this.props;
      if (isFunction(onMouseMove)) {
        onMouseMove(nextState, e);
      }
    };

    /**
     * The handler of mouse entering a graphical item, such as bar, pie, scatter, funnel, ...
     * @param el The active graphical element
     * @param index 0-based index of the active graphical element
     * @returns undefined
     */
    handleItemMouseEnter = (el: any, index: number) => {
      this.setState(() => ({
        activeTooltipIndex: index,
        isTooltipActive: true,
        activeItem: el,
        activePayload: el.tooltipPayload,
        activeCoordinate: el.tooltipPosition || { x: el.cx, y: el.cy },
      }));
    };

    /**
     * The handler of mouse leaving a scatter
     * @return {Object} no return
     */
    handleItemMouseLeave = () => {
      this.setState(() => ({
        isTooltipActive: false,
      }));
    };

    /**
     * The handler of mouse moving in chart
     * @param  {React.MouseEvent} e        Event object
     * @return {void} no return
     */

    handleMouseMove = (e: MousePointer & Partial<Omit<React.MouseEvent, keyof MousePointer>>): void => {
      e.persist();
      this.throttleTriggeredAfterMouseMove(e);
    };

    /**
     * The handler if mouse leaving chart
     * @param {Object} e Event object
     * @return {Null} no return
     */
    handleMouseLeave = (e: any) => {
      this.throttleTriggeredAfterMouseMove.cancel();
      const nextState: CategoricalChartState = { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);

      const { onMouseLeave } = this.props;
      if (isFunction(onMouseLeave)) {
        onMouseLeave(nextState, e);
      }
    };

    handleOuterEvent = (e: React.MouseEvent | React.TouchEvent) => {
      const eventName = getReactEventByType(e);

      const event = get(this.props, `${eventName}`);
      if (eventName && isFunction(event)) {
        let mouse;
        if (/.*touch.*/i.test(eventName)) {
          mouse = this.getMouseInfo((e as React.TouchEvent).changedTouches[0]);
        } else {
          mouse = this.getMouseInfo(e as React.MouseEvent);
        }

        event(mouse ?? {}, e);
      }
    };

    handleClick = (e: React.MouseEvent) => {
      const mouse = this.getMouseInfo(e);

      if (mouse) {
        const nextState: CategoricalChartState = { ...mouse, isTooltipActive: true };
        this.setState(nextState);
        this.triggerSyncEvent(nextState);

        const { onClick } = this.props;
        if (isFunction(onClick)) {
          onClick(nextState, e);
        }
      }
    };

    handleMouseDown = (e: React.MouseEvent | React.Touch) => {
      const { onMouseDown } = this.props;

      if (isFunction(onMouseDown)) {
        const nextState: CategoricalChartState = this.getMouseInfo(e);
        onMouseDown(nextState, e);
      }
    };

    handleMouseUp = (e: React.MouseEvent | React.Touch) => {
      const { onMouseUp } = this.props;

      if (isFunction(onMouseUp)) {
        const nextState: CategoricalChartState = this.getMouseInfo(e);
        onMouseUp(nextState, e);
      }
    };

    handleTouchMove = (e: React.TouchEvent) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
      }
    };

    handleTouchStart = (e: React.TouchEvent) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleMouseDown(e.changedTouches[0]);
      }
    };

    handleTouchEnd = (e: React.TouchEvent) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleMouseUp(e.changedTouches[0]);
      }
    };

    triggerSyncEvent = (data: CategoricalChartState) => {
      if (this.props.syncId !== undefined) {
        eventCenter.emit(SYNC_EVENT, this.props.syncId, data, this.eventEmitterSymbol);
      }
    };

    applySyncEvent = (data: CategoricalChartState) => {
      const { layout, syncMethod } = this.props;
      const { updateId } = this.state;
      const { dataStartIndex, dataEndIndex } = data;

      if (data.dataStartIndex !== undefined || data.dataEndIndex !== undefined) {
        this.setState({
          dataStartIndex,
          dataEndIndex,
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: this.props,
              dataStartIndex,
              dataEndIndex,
              updateId,
            },
            this.state,
          ),
        });
      } else if (data.activeTooltipIndex !== undefined) {
        const { chartX, chartY } = data;
        let { activeTooltipIndex } = data;
        const { offset, tooltipTicks } = this.state;
        if (!offset) {
          return;
        }
        if (typeof syncMethod === 'function') {
          // Call a callback function. If there is an application specific algorithm
          activeTooltipIndex = syncMethod(tooltipTicks, data);
        } else if (syncMethod === 'value') {
          // Set activeTooltipIndex to the index with the same value as data.activeLabel
          // For loop instead of findIndex because the latter is very slow in some browsers
          activeTooltipIndex = -1; // in case we cannot find the element
          for (let i = 0; i < tooltipTicks.length; i++) {
            if (tooltipTicks[i].value === data.activeLabel) {
              activeTooltipIndex = i;
              break;
            }
          }
        }
        const viewBox: CartesianViewBox = { ...offset, x: offset.left, y: offset.top };
        // When a categorical chart is combined with another chart, the value of chartX
        // and chartY may beyond the boundaries.
        const validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
        const validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
        const activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
        const activePayload: any = getTooltipContent(this.state, this.props.data, activeTooltipIndex);
        const activeCoordinate = tooltipTicks[activeTooltipIndex]
          ? {
              x: layout === 'horizontal' ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
              y: layout === 'horizontal' ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate,
            }
          : originCoordinate;

        this.setState({
          ...data,
          activeLabel,
          activeCoordinate,
          activePayload,
          activeTooltipIndex,
        });
      } else {
        this.setState(data);
      }
    };

    /**
     * Only used by renderGraphicChild.
     * @deprecated use a Context-based approach instead
     * @param item do not use
     * @param displayName do not use
     * @param childIndex do not use
     * @returns do not use
     */
    filterFormatItem(item: any, displayName: any, childIndex: any) {
      const { formattedGraphicalItems } = this.state;

      for (let i = 0, len = formattedGraphicalItems.length; i < len; i++) {
        const entry = formattedGraphicalItems[i];

        if (
          entry.item === item ||
          entry.props.key === item.key ||
          (displayName === getDisplayName(entry.item.type) && childIndex === entry.childIndex)
        ) {
          return entry;
        }
      }

      return null;
    }

    renderGraphicChild = (element: React.ReactElement, displayName: string, index: number): any[] => {
      const item = this.filterFormatItem(element, displayName, index);
      if (!item) {
        return null;
      }
      const tooltipEventType = this.getTooltipEventType();
      const { isTooltipActive, activeTooltipIndex } = this.state;
      const { children } = this.props;
      const tooltipItem = findChildByType(children, Tooltip);
      const { hide, activeBar, activeShape } = item.item.props;
      const hasActive = Boolean(!hide && isTooltipActive && tooltipItem && (activeBar || activeShape));
      let itemEvents = {};

      if (tooltipEventType !== 'axis' && tooltipItem && tooltipItem.props.trigger === 'click') {
        itemEvents = {
          onClick: combineEventHandlers(this.handleItemMouseEnter, element.props.onClick),
        };
      } else if (tooltipEventType !== 'axis') {
        itemEvents = {
          onMouseLeave: combineEventHandlers(this.handleItemMouseLeave, element.props.onMouseLeave),
          onMouseEnter: combineEventHandlers(this.handleItemMouseEnter, element.props.onMouseEnter),
        };
      }

      const graphicalItem = cloneElement(element, { ...item.props, ...itemEvents });

      if (hasActive) {
        const activeIndex = element.props.activeIndex !== undefined ? element.props.activeIndex : activeTooltipIndex;
        return [cloneElement(element, { ...item.props, ...itemEvents, activeIndex }), null, null];
      }

      return [graphicalItem, null];
    };

    renderCustomized = (element: React.ReactElement, displayName: string, index: number): React.ReactElement =>
      cloneElement(element, {
        key: `recharts-customized-${index}`,
        ...this.props,
        ...this.state,
      });

    renderMap = {
      CartesianGrid: { handler: renderAsIs, once: true },
      ReferenceArea: { handler: renderAsIs },
      ReferenceLine: { handler: renderAsIs },
      ReferenceDot: { handler: renderAsIs },
      XAxis: { handler: renderAsIs },
      YAxis: { handler: renderAsIs },
      Brush: { handler: renderAsIs },
      Bar: { handler: this.renderGraphicChild },
      Line: { handler: this.renderGraphicChild },
      Area: { handler: this.renderGraphicChild },
      Radar: { handler: this.renderGraphicChild },
      RadialBar: { handler: this.renderGraphicChild },
      Scatter: { handler: this.renderGraphicChild },
      Pie: { handler: this.renderGraphicChild },
      Funnel: { handler: this.renderGraphicChild },
      Tooltip: { handler: renderAsIs, once: true },
      PolarGrid: { handler: renderAsIs, once: true },
      PolarAngleAxis: { handler: renderAsIs },
      PolarRadiusAxis: { handler: renderAsIs },
      Customized: { handler: this.renderCustomized },
      Legend: { handler: renderAsIs },
    };

    render() {
      if (!validateWidthHeight(this)) {
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
              <ClipPath clipPathId={this.clipPathId} offset={this.state.offset} />
              {renderByOrder(children, this.renderMap)}
            </Surface>
          </ChartLayoutContextProvider>
        );
      }

      if (this.props.accessibilityLayer) {
        // Set tabIndex to 0 by default (can be overwritten)
        attrs.tabIndex = this.props.tabIndex ?? 0;
        // Set role to img by default (can be overwritten)
        attrs.role = this.props.role ?? 'application';
        attrs.onKeyDown = (e: any) => {
          this.accessibilityManager.keyboardEvent(e);
          // 'onKeyDown' is not currently a supported prop that can be passed through
          // if it's added, this should be added: this.props.onKeyDown(e);
        };
        attrs.onFocus = () => {
          this.accessibilityManager.focus();
          // 'onFocus' is not currently a supported prop that can be passed through
          // if it's added, the focus event should be forwarded to the prop
        };
      }

      const events = this.parseEventsOfWrapper();
      return (
        <TooltipPortalContext.Provider value={this.tooltipPortal}>
          <ChartDataContextProvider value={this.props.data}>
            <LegendBoundingBoxContext.Provider value={this.handleLegendBBoxUpdate}>
              <BrushUpdateDispatchContext.Provider value={this.handleBrushChange}>
                <AccessibilityContextProvider value={this.props.accessibilityLayer}>
                  <ChartLayoutContextProvider
                    state={this.state}
                    width={this.props.width}
                    height={this.props.height}
                    clipPathId={this.clipPathId}
                    margin={this.props.margin}
                    layout={this.props.layout}
                  >
                    <div
                      className={clsx('recharts-wrapper', className)}
                      style={{ position: 'relative', cursor: 'default', width, height, ...style }}
                      {...events}
                      ref={(node: HTMLDivElement) => {
                        this.container = node;
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
                        <ClipPath clipPathId={this.clipPathId} offset={this.state.offset} />
                        {renderByOrder(children, this.renderMap)}
                      </Surface>
                      <div ref={(node: HTMLElement) => { this.tooltipPortal = node }}></div>
                    </div>
                  </ChartLayoutContextProvider>
                </AccessibilityContextProvider>
              </BrushUpdateDispatchContext.Provider>
            </LegendBoundingBoxContext.Provider>
          </ChartDataContextProvider>
        </TooltipPortalContext.Provider>
      );
    }
  }

  return function CategoricalChart(props: CategoricalChartProps) {
    const options: ChartOptions = {
      chartName,
      defaultTooltipEventType,
      validateTooltipEventTypes,
    };
    return (
      <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={props.id ?? chartName}>
        <CategoricalChartWrapper {...props} />
      </RechartsStoreProvider>
    );
  };
};
