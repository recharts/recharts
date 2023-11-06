import React, { Component, cloneElement, isValidElement, createElement, ReactElement } from 'react';
import classNames from 'classnames';
import _, { isArray, isBoolean } from 'lodash';
import invariant from 'tiny-invariant';
import { getRadialCursorPoints } from '../util/cursor/getRadialCursorPoints';
import { getTicks } from '../cartesian/getTicks';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Tooltip } from '../component/Tooltip';
import { Legend } from '../component/Legend';
import { Curve } from '../shape/Curve';
import { Cross } from '../shape/Cross';
import { Sector } from '../shape/Sector';
import { Dot } from '../shape/Dot';
import { isInRectangle, Rectangle } from '../shape/Rectangle';

import {
  findAllByType,
  findChildByType,
  getDisplayName,
  parseChildIndex,
  validateWidthHeight,
  isChildrenEqual,
  renderByOrder,
  getReactEventByType,
  filterProps,
} from '../util/ReactUtils';

import { CartesianAxis } from '../cartesian/CartesianAxis';
import { Brush } from '../cartesian/Brush';
import { getOffset, calculateChartCoordinate } from '../util/DOMUtils';
import { getAnyElementOfObject, hasDuplicate, uniqueId, isNumber, findEntryInArray } from '../util/DataUtils';
import {
  calculateActiveTickIndex,
  getMainColorOfGraphicItem,
  getBarSizeList,
  getBarPosition,
  appendOffsetOfLegend,
  getLegendProps,
  combineEventHandlers,
  getTicksOfAxis,
  getCoordinatesOfGrid,
  getStackedDataOfItem,
  parseErrorBarsOfAxis,
  getBandSizeOfAxis,
  getStackGroupsByAxisId,
  isCategoricalAxis,
  getDomainOfItemsWithSameAxis,
  getDomainOfStackGroups,
  getDomainOfDataByKey,
  parseSpecifiedDomain,
  parseDomainOfCategoryAxis,
  getTooltipItem,
  BarPosition,
  AxisStackGroups,
} from '../util/ChartUtils';
import { detectReferenceElementsDomain } from '../util/DetectReferenceElementsDomain';
import { inRangeOfSector, polarToCartesian } from '../util/PolarUtils';
import { shallowEqual } from '../util/ShallowEqual';
import { eventCenter, SYNC_EVENT } from '../util/Events';
import {
  LayoutType,
  StackOffsetType,
  CategoricalChartOptions,
  Margin,
  CartesianViewBox,
  ChartOffset,
  BaseAxisProps,
  Coordinate,
  ChartCoordinate,
  TickItem,
  adaptEventHandlers,
  GeometrySector,
  AxisType,
} from '../util/types';
import { AccessibilityManager } from './AccessibilityManager';
import { isDomainSpecifiedByUser } from '../util/isDomainSpecifiedByUser';
import { deferer, CancelFunction } from '../util/deferer';
import { getActiveShapeIndexForTooltip, isFunnel, isPie, isScatter } from '../util/ActiveShapeUtils';
import { Props as YAxisProps } from '../cartesian/YAxis';
import { Props as XAxisProps } from '../cartesian/XAxis';
import { getCursorPoints } from '../util/cursor/getCursorPoints';
import { getCursorRectangle } from '../util/cursor/getCursorRectangle';

export type GraphicalItem<Props = Record<string, any>> = ReactElement<
  Props,
  string | React.JSXElementConstructor<Props>
> & {
  item: ReactElement<Props, string | React.JSXElementConstructor<Props>>;
};

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right'],
};

const originCoordinate: Coordinate = { x: 0, y: 0 };

// use legacy isFinite only if there is a problem (aka IE)
// eslint-disable-next-line no-restricted-globals
const isFinit = Number.isFinite ? Number.isFinite : isFinite;

const calculateTooltipPos = (rangeObj: any, layout: LayoutType): any => {
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
  rangeObj: any,
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
  item?: ReactElement,
): any[] => {
  const itemsData = (graphicalItems || []).reduce((result, child) => {
    const itemData = child.props.data;

    if (itemData && itemData.length) {
      return [...result, ...itemData];
    }

    return result;
  }, []);
  if (itemsData && itemsData.length > 0) {
    return itemsData;
  }

  if (item && item.props && item.props.data && item.props.data.length > 0) {
    return item.props.data;
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
    const { hide } = child.props;

    if (hide) {
      return result;
    }

    /**
     * Fixes: https://github.com/recharts/recharts/issues/3669
     * Defaulting to chartData below to fix an edge case where the tooltip does not include data from all charts
     * when a separate dataset is passed to chart prop data and specified on Line/Area/etc prop data
     */
    const data = (child.props.data ?? chartData).slice(state.dataStartIndex, state.dataEndIndex + 1);

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

    return [...result, getTooltipItem(child, payload)];
  }, []);
};

/**
 * Returns tooltip data based on a mouse position (as a parameter or in state)
 * @param  {Object} state     current state
 * @param  {Array}  chartData the data defined in chart
 * @param  {String} layout     The layout type of chart
 * @param  {Object} rangeObj  { x, y } coordinates
 * @return {Object}           Tooltip data data
 */
const getTooltipData = (state: CategoricalChartState, chartData: any[], layout: LayoutType, rangeObj?: any) => {
  const rangeData = rangeObj || { x: state.chartX, y: state.chartY };

  const pos = calculateTooltipPos(rangeData, layout);
  const { orderedTooltipTicks: ticks, tooltipAxis: axis, tooltipTicks } = state;

  const activeIndex = calculateActiveTickIndex(pos, ticks, tooltipTicks, axis);

  if (activeIndex >= 0 && tooltipTicks) {
    const activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
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
  const axisMap: AxisMap = axes.reduce((result: AxisMap, child: ReactElement): AxisMap => {
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
            domain = _.range(0, len);
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
                finalDomain.indexOf(entry) >= 0 || entry === '' || _.isNil(entry)
                  ? finalDomain
                  : [...finalDomain, entry],
              [],
            );
          } else {
            // eliminate undefined or null or empty string
            domain = domain.filter((entry: any) => entry !== '' && !_.isNil(entry));
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
        domain = _.range(0, len);
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
        // To detect wether there is any reference lines whose props alwaysShow is true
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
  return axisMap;
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
  const axisMap: AxisMap = graphicalItems.reduce((result: AxisMap, child: ReactElement): AxisMap => {
    const axisId = child.props[axisIdKey];

    const originalDomain = getDefaultDomainByAxisType('number');

    if (!result[axisId]) {
      index++;
      let domain;

      if (isCategorical) {
        domain = _.range(0, len);
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
          orientation: _.get(ORIENT_MAP, `${axisType}.${index % 2}`, null),
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

  return axisMap;
};

/**
 * Get the configuration of all x-axis or y-axis
 * @param  {Object} props          Latest props
 * @param  {String} axisType       The type of axis
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
    orderedTooltipTicks: _.sortBy(tooltipTicks, o => o.coordinate),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis, tooltipTicks),
  };
};

/**
 * Returns default, reset state for the categorical chart.
 * @param {Object} props Props object to use when creating the default state
 * @return {Object} Whole new state
 */
const createDefaultState = (props: CategoricalChartProps): CategoricalChartState => {
  const { children, defaultShowTooltip } = props;
  const brushItem = findChildByType(children, Brush);
  const startIndex = (brushItem && brushItem.props && brushItem.props.startIndex) || 0;
  const endIndex =
    brushItem?.props?.endIndex !== undefined ? brushItem?.props?.endIndex : (props.data && props.data.length - 1) || 0;

  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
    activeTooltipIndex: -1,
    isTooltipActive: !_.isNil(defaultShowTooltip) ? defaultShowTooltip : false,
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
    graphicalItems,
    xAxisMap = {},
    yAxisMap = {},
  }: {
    props: CategoricalChartProps;
    graphicalItems: Array<ReactElement>;
    xAxisMap?: { [axisId: string]: XAxisProps };
    yAxisMap?: { [axisId: string]: YAxisProps };
  },
  prevLegendBBox?: DOMRect | null,
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
        return { ...result, [orientation]: _.get(result, `${orientation}`) + entry.height };
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
    offset = appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
  }

  return {
    brushBottom,
    ...offset,
    width: width - offset.left - offset.right,
    height: height - offset.top - offset.bottom,
  };
};

type AxisMap = {
  [axisId: string]: BaseAxisProps;
};

type AxisMapMap = {
  [axisMapId: string]: AxisMap;
};

export interface CategoricalChartState {
  chartX?: number;

  chartY?: number;

  dataStartIndex?: number;

  dataEndIndex?: number;

  activeTooltipIndex?: number;

  isTooltipActive?: boolean;

  updateId?: number;

  xAxisMap?: AxisMap;

  yAxisMap?: AxisMap;

  zAxisMap?: AxisMap;

  orderedTooltipTicks?: any;

  tooltipAxis?: BaseAxisProps;

  tooltipTicks?: TickItem[];

  graphicalItems?: ReadonlyArray<ReactElement>;

  activeCoordinate?: ChartCoordinate;

  offset?: ChartOffset;

  angleAxisMap?: any;

  radiusAxisMap?: any;

  formattedGraphicalItems?: any;

  /** active tooltip payload */
  activePayload?: any[];

  tooltipAxisBandSize?: number;

  /** active item */
  activeItem?: any;

  /** Active label of data */
  activeLabel?: string;

  activeIndex?: number;

  xValue?: number;

  yValue?: number;

  legendBBox?: DOMRect | null;

  prevData?: any[];
  prevWidth?: number;
  prevHeight?: number;
  prevLayout?: LayoutType;
  prevStackOffset?: StackOffsetType;
  prevMargin?: Margin;
  prevChildren?: any;

  stackGroups?: AxisStackGroups;
}

export type CategoricalChartFunc = (nextState: CategoricalChartState, event: any) => void;

export interface CategoricalChartProps {
  syncId?: number | string;
  syncMethod?: 'index' | 'value' | Function;
  compact?: boolean;
  width?: number;
  height?: number;
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
  xAxis?: BaseAxisProps;
  xAxisTicks?: Array<TickItem>;

  yAxis?: BaseAxisProps;
  yAxisTicks?: Array<TickItem>;

  zAxis?: BaseAxisProps;
  zAxisTicks?: Array<TickItem>;

  angleAxis?: BaseAxisProps;
  angleAxisTicks?: Array<TickItem>;

  radiusAxis?: BaseAxisProps;
  radiusAxisTicks?: Array<TickItem>;
};

export const generateCategoricalChart = ({
  chartName,
  GraphicalChild,
  defaultTooltipEventType = 'axis',
  validateTooltipEventTypes = ['axis'],
  axisComponents,
  legendContent,
  formatAxisMap,
  defaultProps,
}: CategoricalChartOptions) => {
  const getFormatItems = (props: CategoricalChartProps, currentState: CategoricalChartState): any[] => {
    const { graphicalItems, stackGroups, offset, updateId, dataStartIndex, dataEndIndex } = currentState;
    const { barSize, layout, barGap, barCategoryGap, maxBarSize: globalMaxBarSize } = props;
    const { numericAxisName, cateAxisName } = getAxisNameByLayout(layout);
    const hasBar = hasGraphicalBarItem(graphicalItems);
    const sizeList = hasBar && getBarSizeList({ barSize, stackGroups });
    const formattedItems = [] as any[];

    graphicalItems.forEach((item: ReactElement, index: number) => {
      const displayedData = getDisplayedData(props.data, { dataStartIndex, dataEndIndex }, item);
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

      if (itemIsBar) {
        // 如果是bar，计算bar的位置
        const maxBarSize: number = _.isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
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

    const offset: ChartOffset = calculateOffset({ ...axisObj, props, graphicalItems }, prevState?.legendBBox);

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

  return class CategoricalChartWrapper extends Component<CategoricalChartProps, CategoricalChartState> {
    static displayName = chartName;

    uniqueChartId: string;

    clipPathId: string;

    cancelDefer: CancelFunction | null;

    accessibilityManager = new AccessibilityManager();

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

    constructor(props: CategoricalChartProps) {
      super(props);

      this.uniqueChartId = _.isNil(props.id) ? uniqueId('recharts') : props.id;
      this.clipPathId = `${this.uniqueChartId}-clip`;

      if (props.throttleDelay) {
        this.triggeredAfterMouseMove = _.throttle(this.triggeredAfterMouseMove, props.throttleDelay);
      }

      this.state = {};
    }

    componentDidMount() {
      if (!_.isNil(this.props.syncId)) {
        this.addListener();
      }

      this.accessibilityManager.setDetails({
        container: this.container,
        offset: {
          left: this.props.margin.left ?? 0,
          top: this.props.margin.top ?? 0,
        },
        coordinateList: this.state.tooltipTicks,
        mouseHandlerCallback: this.handleMouseMove,
        layout: this.props.layout,
      });
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
      const { data, children, width, height, layout, stackOffset, margin } = nextProps;

      if (_.isNil(prevState.updateId)) {
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
        // update configuration in children
        const hasGlobalData = !_.isNil(data);
        const newUpdateId = hasGlobalData ? prevState.updateId : prevState.updateId + 1;

        return {
          updateId: newUpdateId,
          ...updateStateOfAxisMapsOffsetAndStackGroups(
            {
              props: nextProps,
              ...prevState,
              updateId: newUpdateId,
            },
            prevState,
          ),
          prevChildren: children,
        };
      }

      return null;
    };

    componentDidUpdate(prevProps: CategoricalChartProps) {
      // add syncId
      if (_.isNil(prevProps.syncId) && !_.isNil(this.props.syncId)) {
        this.addListener();
      }
      // remove syncId
      if (!_.isNil(prevProps.syncId) && _.isNil(this.props.syncId)) {
        this.removeListener();
      }
    }

    componentWillUnmount() {
      this.clearDefer();
      if (!_.isNil(this.props.syncId)) {
        this.removeListener();
      }
      this.cancelThrottledTriggerAfterMouseMove();
    }

    cancelThrottledTriggerAfterMouseMove() {
      if (typeof (this.triggeredAfterMouseMove as any).cancel === 'function') {
        (this.triggeredAfterMouseMove as any).cancel();
      }
    }

    getTooltipEventType() {
      const tooltipItem = findChildByType(this.props.children, Tooltip);

      if (tooltipItem && isBoolean(tooltipItem.props.shared)) {
        const eventType = tooltipItem.props.shared ? 'axis' : 'item';

        return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
      }

      return defaultTooltipEventType;
    }

    /**
     * Get the information of mouse in chart, return null when the mouse is not in the chart
     * @param  {Object} event    The event object
     * @return {Object}          Mouse data
     */
    getMouseInfo(event: React.MouseEvent | React.Touch) {
      if (!this.container) {
        return null;
      }

      const containerOffset = getOffset(this.container);
      const e = calculateChartCoordinate(event, containerOffset);

      const element = this.container;
      const boundingRectWidth = element?.getBoundingClientRect()?.width;
      const { offsetWidth } = element;
      const scale = boundingRectWidth / offsetWidth || 1;

      const rangeObj = this.inRange(e.chartX, e.chartY, scale);
      if (!rangeObj) {
        return null;
      }

      const { xAxisMap, yAxisMap } = this.state;
      const tooltipEventType = this.getTooltipEventType();

      if (tooltipEventType !== 'axis' && xAxisMap && yAxisMap) {
        const xScale = getAnyElementOfObject(xAxisMap).scale;
        const yScale = getAnyElementOfObject(yAxisMap).scale;
        const xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
        const yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;

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

    inRange(x: number, y: number, scale = 1): any {
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

    /* eslint-disable  no-underscore-dangle */
    addListener() {
      eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);

      if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
        eventCenter.setMaxListeners(eventCenter._maxListeners + 1);
      }
    }

    removeListener() {
      eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);

      if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
        eventCenter.setMaxListeners(eventCenter._maxListeners - 1);
      }
    }

    clearDefer = () => {
      if (this.cancelDefer) {
        this.cancelDefer();
        this.cancelDefer = null;
      }
    };

    handleLegendBBoxUpdate = (box: DOMRect | null) => {
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

    handleReceiveSyncEvent = (cId: number | string, chartId: string, data: CategoricalChartState) => {
      const { syncId } = this.props;

      if (syncId === cId && chartId !== this.uniqueChartId) {
        this.clearDefer();
        this.cancelDefer = deferer(this.applySyncEvent.bind(this, data));
      }
    };

    handleBrushChange = ({ startIndex, endIndex }: { startIndex: number; endIndex: number }) => {
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
      const { onMouseEnter } = this.props;
      const mouse = this.getMouseInfo(e);

      if (mouse) {
        const nextState: CategoricalChartState = { ...mouse, isTooltipActive: true };
        this.setState(nextState);
        this.triggerSyncEvent(nextState);

        if (_.isFunction(onMouseEnter)) {
          onMouseEnter(nextState, e);
        }
      }
    };

    triggeredAfterMouseMove = (e: React.MouseEvent): any => {
      const { onMouseMove } = this.props;
      const mouse = this.getMouseInfo(e);
      const nextState: CategoricalChartState = mouse ? { ...mouse, isTooltipActive: true } : { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);

      if (_.isFunction(onMouseMove)) {
        onMouseMove(nextState, e);
      }
    };

    /**
     * The handler of mouse entering a scatter
     * @param {Object} el The active scatter
     * @return {Object} no return
     */
    handleItemMouseEnter = (el: any) => {
      this.setState(() => ({
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
     * @param  {Object} e        Event object
     * @return {Null} no return
     */
    handleMouseMove = (e: any) => {
      if (e && _.isFunction(e.persist)) {
        e.persist();
      }
      this.triggeredAfterMouseMove(e);
    };

    /**
     * The handler if mouse leaving chart
     * @param {Object} e Event object
     * @return {Null} no return
     */
    handleMouseLeave = (e: any) => {
      const { onMouseLeave } = this.props;
      const nextState: CategoricalChartState = { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);

      if (_.isFunction(onMouseLeave)) {
        onMouseLeave(nextState, e);
      }

      this.cancelThrottledTriggerAfterMouseMove();
    };

    handleOuterEvent = (e: React.MouseEvent | React.TouchEvent) => {
      const eventName = getReactEventByType(e);

      const event = _.get(this.props, `${eventName}`);
      if (eventName && _.isFunction(event)) {
        let mouse;
        if (/.*touch.*/i.test(eventName)) {
          mouse = this.getMouseInfo((e as React.TouchEvent).changedTouches[0]);
        } else {
          mouse = this.getMouseInfo(e as React.MouseEvent);
        }

        const handler = event;

        handler(mouse, e);
      }
    };

    handleClick = (e: React.MouseEvent) => {
      const { onClick } = this.props;
      const mouse = this.getMouseInfo(e);

      if (mouse) {
        const nextState: CategoricalChartState = { ...mouse, isTooltipActive: true };
        this.setState(nextState);
        this.triggerSyncEvent(nextState);

        if (_.isFunction(onClick)) {
          onClick(nextState, e);
        }
      }
    };

    handleMouseDown = (e: React.MouseEvent | React.Touch) => {
      const { onMouseDown } = this.props;

      if (_.isFunction(onMouseDown)) {
        const nextState: CategoricalChartState = this.getMouseInfo(e);
        onMouseDown(nextState, e);
      }
    };

    handleMouseUp = (e: React.MouseEvent | React.Touch) => {
      const { onMouseUp } = this.props;

      if (_.isFunction(onMouseUp)) {
        const nextState: CategoricalChartState = this.getMouseInfo(e);
        onMouseUp(nextState, e);
      }
    };

    handleTouchMove = (e: React.TouchEvent) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleMouseMove(e.changedTouches[0]);
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

    triggerSyncEvent(data: CategoricalChartState) {
      const { syncId } = this.props;

      if (!_.isNil(syncId)) {
        eventCenter.emit(SYNC_EVENT, syncId, this.uniqueChartId, data);
      }
    }

    applySyncEvent(data: CategoricalChartState) {
      const { layout, syncMethod } = this.props;
      const { updateId } = this.state;
      const { dataStartIndex, dataEndIndex } = data;

      if (!_.isNil(data.dataStartIndex) || !_.isNil(data.dataEndIndex)) {
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
      } else if (!_.isNil(data.activeTooltipIndex)) {
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
    }

    verticalCoordinatesGenerator = ({ xAxis, width, height, offset }: ChartCoordinate, syncWithTicks: Boolean) =>
      getCoordinatesOfGrid(
        getTicks({
          ...CartesianAxis.defaultProps,
          ...xAxis,
          ticks: getTicksOfAxis(xAxis, true),
          viewBox: { x: 0, y: 0, width, height },
        }),
        offset.left,
        offset.left + offset.width,
        syncWithTicks,
      );

    horizontalCoordinatesGenerator = ({ yAxis, width, height, offset }: ChartCoordinate, syncWithTicks: Boolean) =>
      getCoordinatesOfGrid(
        getTicks({
          ...CartesianAxis.defaultProps,
          ...yAxis,
          ticks: getTicksOfAxis(yAxis, true),
          viewBox: { x: 0, y: 0, width, height },
        }),
        offset.top,
        offset.top + offset.height,
        syncWithTicks,
      );

    axesTicksGenerator = (axis?: any) => getTicksOfAxis(axis, true);

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

    renderCursor = (element: ReactElement) => {
      const { isTooltipActive, activeCoordinate, activePayload, offset, activeTooltipIndex, tooltipAxisBandSize } =
        this.state;
      const tooltipEventType = this.getTooltipEventType();

      if (
        !element ||
        !element.props.cursor ||
        !isTooltipActive ||
        !activeCoordinate ||
        (chartName !== 'ScatterChart' && tooltipEventType !== 'axis')
      ) {
        return null;
      }
      const { layout } = this.props;
      let restProps;
      let cursorComp: React.ComponentType<any> = Curve;

      if (chartName === 'ScatterChart') {
        restProps = activeCoordinate;
        cursorComp = Cross;
      } else if (chartName === 'BarChart') {
        restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
        cursorComp = Rectangle;
      } else if (layout === 'radial') {
        const { cx, cy, radius, startAngle, endAngle } = getRadialCursorPoints(activeCoordinate);
        restProps = {
          cx,
          cy,
          startAngle,
          endAngle,
          innerRadius: radius,
          outerRadius: radius,
        };
        cursorComp = Sector;
      } else {
        restProps = { points: getCursorPoints(layout, activeCoordinate, offset) };
        cursorComp = Curve;
      }
      const key = element.key || '_recharts-cursor';
      const cursorProps = {
        stroke: '#ccc',
        pointerEvents: 'none',
        ...offset,
        ...restProps,
        ...filterProps(element.props.cursor),
        payload: activePayload,
        payloadIndex: activeTooltipIndex,
        key,
        className: 'recharts-tooltip-cursor',
      };

      return isValidElement(element.props.cursor)
        ? cloneElement(element.props.cursor, cursorProps)
        : createElement(cursorComp, cursorProps);
    };

    renderPolarAxis = (element: any, displayName: string, index: number) => {
      const axisType = _.get(element, 'type.axisType');
      const axisMap = _.get(this.state, `${axisType}Map`);
      const axisOption: BaseAxisProps | undefined = axisMap && axisMap[element.props[`${axisType}Id`]];

      return cloneElement(element, {
        ...axisOption,
        className: axisType,
        key: element.key || `${displayName}-${index}`,
        ticks: getTicksOfAxis(axisOption, true),
      });
    };

    renderXAxis = (element: any, displayName: string, index: number) => {
      const { xAxisMap } = this.state;
      const axisObj = xAxisMap[element.props.xAxisId];

      return this.renderAxis(axisObj, element, displayName, index);
    };

    renderYAxis = (element: any, displayName: string, index: number) => {
      const { yAxisMap } = this.state;
      const axisObj = yAxisMap[element.props.yAxisId];

      return this.renderAxis(axisObj, element, displayName, index);
    };

    /**
     * Draw axis
     * @param {Object} axisOptions The options of axis
     * @param {Object} element      The axis element
     * @param {String} displayName  The display name of axis
     * @param {Number} index        The index of element
     * @return {ReactElement}       The instance of x-axes
     */
    renderAxis(axisOptions: BaseAxisProps, element: any, displayName: string, index: number): React.ReactElement {
      const { width, height } = this.props;

      return (
        <CartesianAxis
          {...(axisOptions as any)}
          className={classNames(`recharts-${axisOptions.axisType} ${axisOptions.axisType}`, axisOptions.className)}
          key={element.key || `${displayName}-${index}`}
          viewBox={{ x: 0, y: 0, width, height } as any}
          ticksGenerator={this.axesTicksGenerator}
        />
      );
    }

    /**
     * Draw grid
     * @param  {ReactElement} element the grid item
     * @return {ReactElement} The instance of grid
     */
    renderGrid = (element: React.ReactElement): React.ReactElement => {
      const { xAxisMap, yAxisMap, offset } = this.state;
      const { width, height } = this.props;
      const xAxis = getAnyElementOfObject(xAxisMap);
      const yAxisWithFiniteDomain = _.find(yAxisMap, axis => _.every(axis.domain, isFinit));
      const yAxis = yAxisWithFiniteDomain || getAnyElementOfObject(yAxisMap);
      const props = element.props || {};

      return cloneElement(element, {
        key: element.key || 'grid',
        x: isNumber(props.x) ? props.x : offset.left,
        y: isNumber(props.y) ? props.y : offset.top,
        width: isNumber(props.width) ? props.width : offset.width,
        height: isNumber(props.height) ? props.height : offset.height,
        xAxis,
        yAxis,
        offset,
        chartWidth: width,
        chartHeight: height,
        verticalCoordinatesGenerator: props.verticalCoordinatesGenerator || this.verticalCoordinatesGenerator,
        horizontalCoordinatesGenerator: props.horizontalCoordinatesGenerator || this.horizontalCoordinatesGenerator,
      });
    };

    renderPolarGrid = (element: React.ReactElement): React.ReactElement => {
      const { radialLines, polarAngles, polarRadius } = element.props;
      const { radiusAxisMap, angleAxisMap } = this.state;
      const radiusAxis = getAnyElementOfObject(radiusAxisMap);
      const angleAxis = getAnyElementOfObject(angleAxisMap);
      const { cx, cy, innerRadius, outerRadius } = angleAxis;

      return cloneElement(element, {
        polarAngles: isArray(polarAngles)
          ? polarAngles
          : getTicksOfAxis(angleAxis, true).map((entry: any) => entry.coordinate),
        polarRadius: isArray(polarRadius)
          ? polarRadius
          : getTicksOfAxis(radiusAxis, true).map((entry: any) => entry.coordinate),
        cx,
        cy,
        innerRadius,
        outerRadius,
        key: element.key || 'polar-grid',
        radialLines,
      });
    };

    /**
     * Draw legend
     * @return {ReactElement}            The instance of Legend
     */
    renderLegend = (): React.ReactElement => {
      const { formattedGraphicalItems } = this.state;
      const { children, width, height } = this.props;
      const margin = this.props.margin || {};
      const legendWidth: number = width - (margin.left || 0) - (margin.right || 0);
      const props = getLegendProps({
        children,
        formattedGraphicalItems,
        legendWidth,
        legendContent,
      });

      if (!props) {
        return null;
      }

      const { item, ...otherProps } = props;

      return cloneElement(item, {
        ...otherProps,
        chartWidth: width,
        chartHeight: height,
        margin,
        onBBoxUpdate: this.handleLegendBBoxUpdate,
      });
    };

    /**
     * Draw Tooltip
     * @return {ReactElement}  The instance of Tooltip
     */
    renderTooltip = (): React.ReactElement => {
      const { children } = this.props;
      const tooltipItem = findChildByType(children, Tooltip);

      if (!tooltipItem) {
        return null;
      }

      const { isTooltipActive, activeCoordinate, activePayload, activeLabel, offset } = this.state;

      return cloneElement(tooltipItem, {
        viewBox: { ...offset, x: offset.left, y: offset.top },
        active: isTooltipActive,
        label: activeLabel,
        payload: isTooltipActive ? activePayload : [],
        coordinate: activeCoordinate,
      });
    };

    renderBrush = (element: React.ReactElement) => {
      const { margin, data } = this.props;
      const { offset, dataStartIndex, dataEndIndex, updateId } = this.state;

      // TODO: update brush when children update
      return cloneElement(element, {
        key: element.key || '_recharts-brush',
        onChange: combineEventHandlers(this.handleBrushChange, null, element.props.onChange),
        data,
        x: isNumber(element.props.x) ? element.props.x : offset.left,
        y: isNumber(element.props.y)
          ? element.props.y
          : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
        width: isNumber(element.props.width) ? element.props.width : offset.width,
        startIndex: dataStartIndex,
        endIndex: dataEndIndex,
        updateId: `brush-${updateId}`,
      });
    };

    renderReferenceElement = (element: React.ReactElement, displayName: string, index: number): React.ReactElement => {
      if (!element) {
        return null;
      }
      const { clipPathId } = this;
      const { xAxisMap, yAxisMap, offset } = this.state;
      const { xAxisId, yAxisId } = element.props;

      return cloneElement(element, {
        key: element.key || `${displayName}-${index}`,
        xAxis: xAxisMap[xAxisId],
        yAxis: yAxisMap[yAxisId],
        viewBox: {
          x: offset.left,
          y: offset.top,
          width: offset.width,
          height: offset.height,
        },
        clipPathId,
      });
    };

    static renderActiveDot = (option: any, props: any): React.ReactElement => {
      let dot;

      if (isValidElement(option)) {
        dot = cloneElement(option, props);
      } else if (_.isFunction(option)) {
        dot = option(props);
      } else {
        dot = <Dot {...props} />;
      }

      return (
        <Layer className="recharts-active-dot" key={props.key}>
          {dot}
        </Layer>
      );
    };

    renderActivePoints = ({ item, activePoint, basePoint, childIndex, isRange }: any) => {
      const result = [];
      const { key } = item.props;
      const { activeDot, dataKey } = item.item.props;
      const dotProps = {
        index: childIndex,
        dataKey,
        cx: activePoint.x,
        cy: activePoint.y,
        r: 4,
        fill: getMainColorOfGraphicItem(item.item),
        strokeWidth: 2,
        stroke: '#fff',
        payload: activePoint.payload,
        value: activePoint.value,
        key: `${key}-activePoint-${childIndex}`,
        ...filterProps(activeDot),
        ...adaptEventHandlers(activeDot),
      };

      result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps));

      if (basePoint) {
        result.push(
          CategoricalChartWrapper.renderActiveDot(activeDot, {
            ...dotProps,
            cx: basePoint.x,
            cy: basePoint.y,
            key: `${key}-basePoint-${childIndex}`,
          }),
        );
      } else if (isRange) {
        result.push(null);
      }

      return result;
    };

    renderGraphicChild = (element: React.ReactElement, displayName: string, index: number): any[] => {
      const item = this.filterFormatItem(element, displayName, index);
      if (!item) {
        return null;
      }
      const tooltipEventType = this.getTooltipEventType();
      const { isTooltipActive, tooltipAxis, activeTooltipIndex, activeLabel } = this.state;
      const { children } = this.props;
      const tooltipItem = findChildByType(children, Tooltip);
      const { points, isRange, baseLine } = item.props;
      const { activeDot, hide, activeBar, activeShape } = item.item.props;
      const hasActive = Boolean(!hide && isTooltipActive && tooltipItem && (activeDot || activeBar || activeShape));
      let itemEvents = {};

      if (tooltipEventType !== 'axis' && tooltipItem && tooltipItem.props.trigger === 'click') {
        itemEvents = {
          onClick: combineEventHandlers(this.handleItemMouseEnter, null, element.props.onCLick),
        };
      } else if (tooltipEventType !== 'axis') {
        itemEvents = {
          onMouseLeave: combineEventHandlers(this.handleItemMouseLeave, null, element.props.onMouseLeave),
          onMouseEnter: combineEventHandlers(this.handleItemMouseEnter, null, element.props.onMouseEnter),
        };
      }

      const graphicalItem = cloneElement(element, { ...item.props, ...itemEvents });

      function findWithPayload(entry: any) {
        // TODO needs to verify dataKey is Function
        return typeof tooltipAxis.dataKey === 'function' ? tooltipAxis.dataKey(entry.payload) : null;
      }

      if (hasActive) {
        if (activeTooltipIndex >= 0) {
          let activePoint, basePoint;

          if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            // number transform to string
            const specifiedKey =
              typeof tooltipAxis.dataKey === 'function'
                ? findWithPayload
                : 'payload.'.concat(tooltipAxis.dataKey.toString());
            activePoint = findEntryInArray(points, specifiedKey, activeLabel);
            basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
          } else {
            activePoint = points?.[activeTooltipIndex];
            basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
          }

          if (activeShape || activeBar) {
            const activeIndex =
              element.props.activeIndex !== undefined ? element.props.activeIndex : activeTooltipIndex;
            return [cloneElement(element, { ...item.props, ...itemEvents, activeIndex }), null, null];
          }

          if (!_.isNil(activePoint)) {
            return [
              graphicalItem,
              ...this.renderActivePoints({
                item,
                activePoint,
                basePoint,
                childIndex: activeTooltipIndex,
                isRange,
              }),
            ];
          }
        } else {
          /**
           * We hit this block if consumer uses a Tooltip without XAxis and/or YAxis.
           * In which case, this.state.activeTooltipIndex never gets set
           * because the mouse events that trigger that value getting set never get trigged without the axis components.
           *
           * An example usage case is a FunnelChart
           */
          const {
            graphicalItem: { item: xyItem = element, childIndex },
          } = this.getItemByXY(this.state.activeCoordinate) ?? { graphicalItem };

          const elementProps = { ...item.props, ...itemEvents, activeIndex: childIndex };

          return [cloneElement(xyItem, elementProps), null, null];
        }
      }

      if (isRange) {
        return [graphicalItem, null, null];
      }

      return [graphicalItem, null];
    };

    renderCustomized = (element: React.ReactElement, displayName: string, index: number): React.ReactElement =>
      cloneElement(element, {
        key: `recharts-customized-${index}`,
        ...this.props,
        ...this.state,
      });

    renderClipPath() {
      const { clipPathId } = this;
      const {
        offset: { left, top, height, width },
      } = this.state;

      return (
        <defs>
          <clipPath id={clipPathId}>
            <rect x={left} y={top} height={height} width={width} />
          </clipPath>
        </defs>
      );
    }

    public getXScales() {
      const { xAxisMap } = this.state;

      return xAxisMap
        ? Object.entries(xAxisMap).reduce(
            (res: Record<string, Function>, [axisId, axisProps]: [string, BaseAxisProps]) => {
              return { ...res, [axisId]: (axisProps as BaseAxisProps).scale };
            },
            {},
          )
        : null;
    }

    public getYScales() {
      const { yAxisMap } = this.state;

      return yAxisMap
        ? Object.entries(yAxisMap).reduce(
            (res: Record<string, Function>, [axisId, axisProps]: [string, BaseAxisProps]) => {
              return { ...res, [axisId]: (axisProps as BaseAxisProps).scale };
            },
            {},
          )
        : null;
    }

    public getXScaleByAxisId(axisId: string) {
      return this.state.xAxisMap?.[axisId]?.scale;
    }

    public getYScaleByAxisId(axisId: string) {
      return this.state.yAxisMap?.[axisId]?.scale;
    }

    public getItemByXY(chartXY: { x: number; y: number }) {
      const { formattedGraphicalItems, activeItem } = this.state;
      if (formattedGraphicalItems && formattedGraphicalItems.length) {
        for (let i = 0, len = formattedGraphicalItems.length; i < len; i++) {
          const graphicalItem = formattedGraphicalItems[i];
          const { props, item } = graphicalItem;
          const itemDisplayName = getDisplayName(item.type);

          if (itemDisplayName === 'Bar') {
            const activeBarItem = (props.data || []).find(
              (entry: { x: number; y: number; width: number; height: number }) => {
                return isInRectangle(chartXY, entry);
              },
            );

            if (activeBarItem) {
              return { graphicalItem, payload: activeBarItem };
            }
          } else if (itemDisplayName === 'RadialBar') {
            const activeBarItem = (props.data || []).find((entry: GeometrySector) => {
              return inRangeOfSector(chartXY, entry);
            });

            if (activeBarItem) {
              return { graphicalItem, payload: activeBarItem };
            }
          } else if (
            isFunnel(graphicalItem, activeItem) ||
            isPie(graphicalItem, activeItem) ||
            isScatter(graphicalItem, activeItem)
          ) {
            const activeIndex = getActiveShapeIndexForTooltip({
              graphicalItem,
              activeTooltipItem: activeItem,
              itemData: item.props.data,
            });

            const childIndex = item.props.activeIndex === undefined ? activeIndex : item.props.activeIndex;

            return {
              graphicalItem: { ...graphicalItem, childIndex },
              payload: isScatter(graphicalItem, activeItem)
                ? item.props.data[activeIndex]
                : graphicalItem.props.data[activeIndex],
            };
          }
        }
      }

      return null;
    }

    render() {
      if (!validateWidthHeight(this)) {
        return null;
      }

      const { children, className, width, height, style, compact, title, desc, ...others } = this.props;
      const attrs = filterProps(others);
      const map = {
        CartesianGrid: { handler: this.renderGrid, once: true },
        ReferenceArea: { handler: this.renderReferenceElement },
        ReferenceLine: { handler: this.renderReferenceElement },
        ReferenceDot: { handler: this.renderReferenceElement },
        XAxis: { handler: this.renderXAxis },
        YAxis: { handler: this.renderYAxis },
        Brush: { handler: this.renderBrush, once: true },
        Bar: { handler: this.renderGraphicChild },
        Line: { handler: this.renderGraphicChild },
        Area: { handler: this.renderGraphicChild },
        Radar: { handler: this.renderGraphicChild },
        RadialBar: { handler: this.renderGraphicChild },
        Scatter: { handler: this.renderGraphicChild },
        Pie: { handler: this.renderGraphicChild },
        Funnel: { handler: this.renderGraphicChild },
        Tooltip: { handler: this.renderCursor, once: true },
        PolarGrid: { handler: this.renderPolarGrid, once: true },
        PolarAngleAxis: { handler: this.renderPolarAxis },
        PolarRadiusAxis: { handler: this.renderPolarAxis },
        Customized: { handler: this.renderCustomized },
      };

      // The "compact" mode is mainly used as the panorama within Brush
      if (compact) {
        return (
          <Surface {...attrs} width={width} height={height} title={title} desc={desc}>
            {this.renderClipPath()}
            {renderByOrder(children, map)}
          </Surface>
        );
      }

      if (this.props.accessibilityLayer) {
        // Set tabIndex to 0 by default (can be overwritten)
        attrs.tabIndex = 0 ?? this.props.tabIndex;
        // Set role to img by default (can be overwritten)
        attrs.role = 'img' ?? this.props.role;
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
        <div
          className={classNames('recharts-wrapper', className)}
          style={{ position: 'relative', cursor: 'default', width, height, ...style }}
          {...events}
          ref={(node: HTMLDivElement) => {
            this.container = node;
          }}
          role="region"
        >
          <Surface {...attrs} width={width} height={height} title={title} desc={desc}>
            {this.renderClipPath()}
            {renderByOrder(children, map)}
          </Surface>
          {this.renderLegend()}
          {this.renderTooltip()}
        </div>
      );
    }
  };
};
