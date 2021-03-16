import React, { Component, cloneElement, isValidElement, createElement } from 'react';
import classNames from 'classnames';
import _, { isArray, isBoolean, isNil } from 'lodash';
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
  filterProps,
  adaptEventHandlers,
  GeometrySector,
} from '../util/types';

const ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right'],
};

const originCoordinate: Coordinate = { x: 0, y: 0 };

// use legacy isFinite only if there is a problem (aka IE)
// eslint-disable-next-line no-restricted-globals
const isFinit = Number.isFinite ? Number.isFinite : isFinite;

const defer = // eslint-disable-next-line no-nested-ternary
  typeof requestAnimationFrame === 'function'
    ? requestAnimationFrame
    : typeof setImmediate === 'function'
    ? setImmediate
    : setTimeout;
const deferClear = // eslint-disable-next-line no-nested-ternary
  typeof cancelAnimationFrame === 'function'
    ? cancelAnimationFrame
    : typeof clearImmediate === 'function'
    ? clearImmediate
    : clearTimeout;

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
  activeIndex: any,
  rangeObj: any,
): ChartCoordinate => {
  const entry = tooltipTicks.find((tick: any) => tick && tick.index === activeIndex);

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

const getDisplayedData = (data: any[], { graphicalItems, dataStartIndex, dataEndIndex }: any, item?: any): any[] => {
  const itemsData = (graphicalItems || []).reduce((result: any, child: any) => {
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
  return graphicalItems.reduce((result: any, child: any) => {
    const { hide } = child.props;

    if (hide) {
      return result;
    }

    const { data } = child.props;
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
const getAxisMapByAxes = (
  props: CategoricalChartProps,
  { axes, graphicalItems, axisType, axisIdKey, stackGroups, dataStartIndex, dataEndIndex }: any,
) => {
  const { layout, children, stackOffset } = props;
  const isCategorical = isCategoricalAxis(layout, axisType);

  // Eliminate duplicated axes
  const axisMap = axes.reduce((result: any, child: any) => {
    const { type, dataKey, allowDataOverflow, allowDuplicatedCategory, scale, ticks } = child.props;
    const axisId = child.props[axisIdKey];
    const displayedData = getDisplayedData(props.data, {
      graphicalItems: graphicalItems.filter((item: any) => item.props[axisIdKey] === axisId),
      dataStartIndex,
      dataEndIndex,
    });
    const len = displayedData.length;

    if (!result[axisId]) {
      let domain, duplicateDomain, categoricalDomain;

      if (dataKey) {
        // has dataKey in <Axis />
        domain = getDomainOfDataByKey(displayedData, dataKey, type);

        if (type === 'category' && isCategorical) {
          // the field type is category data and this axis is catrgorical axis
          const duplicate = hasDuplicate(domain);

          if (allowDuplicatedCategory && duplicate) {
            duplicateDomain = domain;
            // When category axis has duplicated text, serial numbers are used to generate scale
            domain = _.range(0, len);
          } else if (!allowDuplicatedCategory) {
            // remove duplicated category
            domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(
              (finalDomain: any, entry: any) =>
                finalDomain.indexOf(entry) >= 0 ? finalDomain : [...finalDomain, entry],
              [],
            );
          }
        } else if (type === 'category') {
          // the field type is category data and this axis is numerical axis
          if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(
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
            graphicalItems.filter((item: any) => item.props[axisIdKey] === axisId && !item.props.hide),
            dataKey,
            axisType,
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
          graphicalItems.filter((item: any) => item.props[axisIdKey] === axisId && !item.props.hide),
          type,
          true,
        );
      }

      if (type === 'number') {
        // To detect wether there is any reference lines whose props alwaysShow is true
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);

        if (child.props.domain) {
          domain = parseSpecifiedDomain(child.props.domain, domain, allowDataOverflow);
        }
      } else if (type === 'category' && child.props.domain) {
        const axisDomain = child.props.domain;
        const isDomainValidate = domain.every((entry: string | number) => axisDomain.indexOf(entry) >= 0);

        if (isDomainValidate) {
          domain = axisDomain;
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
          originalDomain: child.props.domain,
          isCategorical,
          layout,
        },
      };
    }

    return result;
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
  { graphicalItems, Axis, axisType, axisIdKey, stackGroups, dataStartIndex, dataEndIndex }: any,
) => {
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
  const axisMap = graphicalItems.reduce((result: any, child: any) => {
    const axisId = child.props[axisIdKey];

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
          Axis.defaultProps.domain,
          getDomainOfItemsWithSameAxis(
            displayedData,
            graphicalItems.filter((item: any) => item.props[axisIdKey] === axisId && !item.props.hide),
            'number',
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
          originalDomain: Axis.defaultProps.domain,
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
  { axisType = 'xAxis', AxisComp, graphicalItems, stackGroups, dataStartIndex, dataEndIndex }: any,
) => {
  const { children } = props;
  const axisIdKey = `${axisType}Id`;
  // Get all the instance of Axis
  const axes = findAllByType(children, AxisComp);

  let axisMap = {};

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

const tooltipTicksGenerator = (axisMap: any) => {
  const axis: BaseAxisProps = getAnyElementOfObject(axisMap);
  const tooltipTicks = getTicksOfAxis(axis, false, true);

  return {
    tooltipTicks,
    orderedTooltipTicks: _.sortBy(tooltipTicks, o => o.coordinate),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis),
  };
};

/**
 * Returns default, reset state for the categorical chart.
 * @param {Object} props Props object to use when creating the default state
 * @return {Object} Whole new state
 */
const createDefaultState = (props: CategoricalChartProps): CategoricalChartState => {
  const { children, defaultShowTooltip } = props;
  const brushItem = findChildByType(children, Brush.displayName);
  const startIndex = (brushItem && brushItem.props && brushItem.props.startIndex) || 0;
  const endIndex =
    (brushItem && brushItem.props && brushItem.props.endIndex) || (props.data && props.data.length - 1) || 0;

  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
    activeTooltipIndex: -1,
    isTooltipActive: !_.isNil(defaultShowTooltip) ? defaultShowTooltip : false,
  };
};

const hasGraphicalBarItem = (graphicalItems: any[]): any[] | boolean => {
  if (!graphicalItems || !graphicalItems.length) {
    return false;
  }

  return graphicalItems.some((item: any) => {
    const name = getDisplayName(item && item.type);

    return name && name.indexOf('Bar') >= 0;
  });
};

const getAxisNameByLayout = (layout: LayoutType) => {
  if (layout === 'horizontal') {
    return { numericAxisName: 'yAxis', cateAxisName: 'xAxis' };
  }
  if (layout === 'vertical') {
    return { numericAxisName: 'xAxis', cateAxisName: 'yAxis' };
  }
  if (layout === 'centric') {
    return { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' };
  }

  return { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
};

/**
 * Calculate the offset of main part in the svg element
 * @param  {Object} props          Latest props
 * graphicalItems The instances of item
 * xAxisMap       The configuration of x-axis
 * yAxisMap       The configuration of y-axis
 * @param  {Object} prevLegendBBox          the boundary box of legend
 * @return {Object} The offset of main part in the svg element
 */
const calculateOffset = (
  { props, graphicalItems, xAxisMap = {} as BaseAxisProps, yAxisMap = {} as BaseAxisProps }: any,
  prevLegendBBox?: any,
) => {
  const { width, height, children } = props;
  const margin = props.margin || {};
  const brushItem = findChildByType(children, Brush.displayName);
  const legendItem = findChildByType(children, Legend.displayName);

  const offsetH = Object.keys(yAxisMap).reduce(
    (result: any, id: any) => {
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

  let offset = { ...offsetV, ...offsetH };

  const brushBottom = offset.bottom;

  if (brushItem) {
    offset.bottom += brushItem.props.height || Brush.defaultProps.height;
  }

  if (legendItem && prevLegendBBox) {
    offset = appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
  }

  return {
    brushBottom,
    ...offset,
    width: width - offset.left - offset.right,
    height: height - offset.top - offset.bottom,
  };
};

export interface CategoricalChartState {
  chartX?: number;

  chartY?: number;

  dataStartIndex?: number;

  dataEndIndex?: number;

  activeTooltipIndex?: number;

  isTooltipActive?: boolean;

  updateId?: number;

  xAxisMap?: {
    [k: string]: BaseAxisProps;
  };

  yAxisMap?: {
    [k: string]: BaseAxisProps;
  };

  orderedTooltipTicks?: any;

  tooltipAxis?: BaseAxisProps;

  tooltipTicks?: TickItem[];

  graphicalItems?: any;

  activeCoordinate?: ChartCoordinate;

  offset?: ChartOffset;

  angleAxisMap?: any;

  radiusAxisMap?: any;

  formatedGraphicalItems?: any;

  /** active tooltip payload */
  activePayload?: any[];

  tooltipAxisBandSize?: number;

  /** active item */
  activeItem?: any;

  /** Active label of data */
  activeLabel?: string;

  xValue?: number;

  yValue?: number;

  legendBBox?: any;

  prevData?: any[];
  prevWidth?: number;
  prevHeight?: number;
  prevLayout?: LayoutType;
  prevStackOffset?: StackOffsetType;
  prevMargin?: Margin;
  prevChildren?: any;
}

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
  onClick?: any;
  onMouseLeave?: any;
  onMouseEnter?: any;
  onMouseMove?: any;
  onMouseDown?: any;
  onMouseUp?: any;
  reverseStackOrder?: boolean;
  id?: string;

  startAngle?: number;
  endAngle?: number;
  cx?: number | string;
  cy?: number | string;
  innerRadius?: number | string;
  outerRadius?: number | string;
}

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
  const getFormatItems = (props: CategoricalChartProps, currentState: any): any[] => {
    const { graphicalItems, stackGroups, offset, updateId, dataStartIndex, dataEndIndex } = currentState;
    const { barSize, layout, barGap, barCategoryGap, maxBarSize: globalMaxBarSize } = props;
    const { numericAxisName, cateAxisName } = getAxisNameByLayout(layout);
    const hasBar = hasGraphicalBarItem(graphicalItems);
    const sizeList = hasBar && getBarSizeList({ barSize, stackGroups });
    const formatedItems = [] as any[];

    graphicalItems.forEach((item: any, index: number) => {
      const displayedData = getDisplayedData(props.data, { dataStartIndex, dataEndIndex }, item);
      const { dataKey, maxBarSize: childMaxBarSize } = item.props;
      const numericAxisId = item.props[`${numericAxisName}Id`];
      const cateAxisId = item.props[`${cateAxisName}Id`];
      const axisObj = axisComponents.reduce((result: any, entry: any) => {
        const axisMap = currentState[`${entry.axisType}Map`];
        const id = item.props[`${entry.axisType}Id`];
        const axis = axisMap && axisMap[id];

        return {
          ...result,
          [entry.axisType]: axis,
          [`${entry.axisType}Ticks`]: getTicksOfAxis(axis),
        };
      }, {});
      const cateAxis = axisObj[cateAxisName];
      const cateTicks = axisObj[`${cateAxisName}Ticks`];
      const stackedData =
        stackGroups &&
        stackGroups[numericAxisId] &&
        stackGroups[numericAxisId].hasStack &&
        getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
      const itemIsBar = getDisplayName(item.type).indexOf('Bar') >= 0;
      const bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
      let barPosition = [];

      if (itemIsBar) {
        const barBandSize = getBandSizeOfAxis(cateAxis, cateTicks, true);
        // 如果是bar，计算bar的位置
        const maxBarSize = _.isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
        barPosition = getBarPosition({
          barGap,
          barCategoryGap,
          bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
          sizeList: sizeList[cateAxisId],
          maxBarSize,
        });

        if (barBandSize !== bandSize) {
          barPosition = barPosition.map((pos: { item: any; position: { offset: number; size: number } }) => ({
            ...pos,
            position: { ...pos.position, offset: pos.position.offset - barBandSize / 2 },
          }));
        }
      }
      const componsedFn = item && item.type && item.type.getComposedData;

      if (componsedFn) {
        formatedItems.push({
          props: {
            ...componsedFn({
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

    return formatedItems;
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
    const stackGroups = getStackGroupsByAxisId(
      data,
      graphicalItems,
      `${numericAxisName}Id`,
      `${cateAxisName}Id`,
      stackOffset,
      reverseStackOrder,
    );
    const axisObj = axisComponents.reduce((result: any, entry: any) => {
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

    const offset = calculateOffset({ ...axisObj, props, graphicalItems }, prevState?.legendBBox);

    Object.keys(axisObj).forEach(key => {
      axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace('Map', ''), chartName);
    });
    const cateAxisMap = axisObj[`${cateAxisName}Map`];
    const ticksObj = tooltipTicksGenerator(cateAxisMap);

    const formatedGraphicalItems = getFormatItems(props, {
      ...axisObj,
      dataStartIndex,
      dataEndIndex,
      updateId,
      graphicalItems,
      stackGroups,
      offset,
    });

    return {
      formatedGraphicalItems,
      graphicalItems,
      offset,
      stackGroups,
      ...ticksObj,
      ...axisObj,
    };
  };

  return class CategoricalChartWrapper extends Component<CategoricalChartProps, CategoricalChartState> {
    static displayName = chartName;

    uniqueChartId: any;

    clipPathId: any;

    legendInstance: any;

    deferId: any;

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

    container?: any;

    constructor(props: CategoricalChartProps) {
      super(props);

      this.uniqueChartId = _.isNil(props.id) ? uniqueId('recharts') : props.id;
      this.clipPathId = `${this.uniqueChartId}-clip`;

      if (props.throttleDelay) {
        this.triggeredAfterMouseMove = _.throttle(this.triggeredAfterMouseMove, props.throttleDelay);
      }

      this.state = {};
    }

    /* eslint-disable  react/no-did-mount-set-state */
    componentDidMount() {
      if (!_.isNil(this.props.syncId)) {
        this.addListener();
      }
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
        // update configuration in chilren
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
      this.clearDeferId();
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
      const tooltipItem = findChildByType(this.props.children, Tooltip.displayName);

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
    getMouseInfo(event: any) {
      if (!this.container) {
        return null;
      }

      const containerOffset = getOffset(this.container);
      const e = calculateChartCoordinate(event, containerOffset);
      const rangeObj = this.inRange(e.chartX, e.chartY);
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

    getCursorRectangle(): any {
      const { layout } = this.props;
      const { activeCoordinate, offset, tooltipAxisBandSize } = this.state;
      const halfSize = tooltipAxisBandSize / 2;

      return {
        stroke: 'none',
        fill: '#ccc',
        x: layout === 'horizontal' ? activeCoordinate.x - halfSize : offset.left + 0.5,
        y: layout === 'horizontal' ? offset.top + 0.5 : activeCoordinate.y - halfSize,
        width: layout === 'horizontal' ? tooltipAxisBandSize : offset.width - 1,
        height: layout === 'horizontal' ? offset.height - 1 : tooltipAxisBandSize,
      };
    }

    getCursorPoints(): any {
      const { layout } = this.props;
      const { activeCoordinate, offset } = this.state;
      let x1, y1, x2, y2;

      if (layout === 'horizontal') {
        x1 = activeCoordinate.x;
        x2 = x1;
        y1 = offset.top;
        y2 = offset.top + offset.height;
      } else if (layout === 'vertical') {
        y1 = activeCoordinate.y;
        y2 = y1;
        x1 = offset.left;
        x2 = offset.left + offset.width;
      } else if (!_.isNil(activeCoordinate.cx) || !_.isNil(activeCoordinate.cy)) {
        if (layout === 'centric') {
          const { cx, cy, innerRadius, outerRadius, angle } = activeCoordinate;
          const innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
          const outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
          x1 = innerPoint.x;
          y1 = innerPoint.y;
          x2 = outerPoint.x;
          y2 = outerPoint.y;
        } else {
          const { cx, cy, radius, startAngle, endAngle } = activeCoordinate;
          const startPoint = polarToCartesian(cx, cy, radius, startAngle);
          const endPoint = polarToCartesian(cx, cy, radius, endAngle);

          return {
            points: [startPoint, endPoint],
            cx,
            cy,
            radius,
            startAngle,
            endAngle,
          };
        }
      }

      return [
        { x: x1, y: y1 },
        { x: x2, y: y2 },
      ];
    }

    inRange(x: number, y: number): any {
      const { layout } = this.props;

      if (layout === 'horizontal' || layout === 'vertical') {
        const { offset } = this.state;
        const isInRange =
          x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;

        return isInRange ? { x, y } : null;
      }

      const { angleAxisMap, radiusAxisMap } = this.state;

      if (angleAxisMap && radiusAxisMap) {
        const angleAxis = getAnyElementOfObject(angleAxisMap);

        return inRangeOfSector({ x, y }, angleAxis);
      }

      return null;
    }

    parseEventsOfWrapper() {
      const { children } = this.props;
      const tooltipEventType = this.getTooltipEventType();
      const tooltipItem = findChildByType(children, Tooltip.displayName);
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

    clearDeferId = () => {
      if (!isNil(this.deferId) && deferClear) {
        deferClear(this.deferId);
      }
      this.deferId = null;
    };

    handleLegendBBoxUpdate = (box: any) => {
      if (box && this.legendInstance) {
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
        this.clearDeferId();
        this.deferId = defer && defer(this.applySyncEvent.bind(this, data));
      }
    };

    handleBrushChange = ({ startIndex, endIndex }: any) => {
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
    handleMouseEnter = (e: any) => {
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

    triggeredAfterMouseMove = (e: any): any => {
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
     * @param {Object} el     The active scatter
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
      const nextState = { isTooltipActive: false };

      this.setState(nextState);
      this.triggerSyncEvent(nextState);

      if (_.isFunction(onMouseLeave)) {
        onMouseLeave(nextState, e);
      }

      this.cancelThrottledTriggerAfterMouseMove();
    };

    handleOuterEvent = (e: any) => {
      const eventName = getReactEventByType(e);

      const event = _.get(this.props, `${eventName}`);
      if (eventName && _.isFunction(event)) {
        let mouse;
        if (/.*touch.*/i.test(eventName)) {
          mouse = this.getMouseInfo(e.changedTouches[0]);
        } else {
          mouse = this.getMouseInfo(e);
        }

        const handler = event;

        handler(mouse, e);
      }
    };

    handleClick = (e: any) => {
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

    handleMouseDown = (e: any) => {
      const { onMouseDown } = this.props;

      if (_.isFunction(onMouseDown)) {
        const mouse = this.getMouseInfo(e);

        onMouseDown(mouse, e);
      }
    };

    handleMouseUp = (e: any) => {
      const { onMouseUp } = this.props;

      if (_.isFunction(onMouseUp)) {
        const mouse = this.getMouseInfo(e);

        onMouseUp(mouse, e);
      }
    };

    handleTouchMove = (e: any) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleMouseMove(e.changedTouches[0]);
      }
    };

    handleTouchStart = (e: any) => {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleMouseDown(e.changedTouches[0]);
      }
    };

    handleTouchEnd = (e: any) => {
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
        // When a categotical chart is combined with another chart, the value of chartX
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

    verticalCoordinatesGenerator = ({ xAxis, width, height, offset }: ChartCoordinate) =>
      getCoordinatesOfGrid(
        CartesianAxis.getTicks({
          ...CartesianAxis.defaultProps,
          ...xAxis,
          ticks: getTicksOfAxis(xAxis, true),
          viewBox: { x: 0, y: 0, width, height },
        }),
        offset.left,
        offset.left + offset.width,
      );

    horizontalCoordinatesGenerator = ({ yAxis, width, height, offset }: ChartCoordinate) =>
      getCoordinatesOfGrid(
        CartesianAxis.getTicks({
          ...CartesianAxis.defaultProps,
          ...yAxis,
          ticks: getTicksOfAxis(yAxis, true),
          viewBox: { x: 0, y: 0, width, height },
        }),
        offset.top,
        offset.top + offset.height,
      );

    axesTicksGenerator = (axis?: any) => getTicksOfAxis(axis, true);

    filterFormatItem(item: any, displayName: any, childIndex: any) {
      const { formatedGraphicalItems } = this.state;

      for (let i = 0, len = formatedGraphicalItems.length; i < len; i++) {
        const entry = formatedGraphicalItems[i];

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

    renderCursor = (element: any) => {
      const { isTooltipActive, activeCoordinate, activePayload, offset, activeTooltipIndex } = this.state;
      const tooltipEventType = this.getTooltipEventType();

      if (!element || !element.props.cursor || !isTooltipActive || !activeCoordinate || tooltipEventType !== 'axis') {
        return null;
      }
      const { layout } = this.props;
      let restProps;
      let cursorComp: any = Curve;

      if (chartName === 'ScatterChart') {
        restProps = activeCoordinate;
        cursorComp = Cross;
      } else if (chartName === 'BarChart') {
        restProps = this.getCursorRectangle();
        cursorComp = Rectangle;
      } else if (layout === 'radial') {
        const { cx, cy, radius, startAngle, endAngle }: any = this.getCursorPoints();
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
        restProps = { points: this.getCursorPoints() };
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
      const axisOption = axisMap[element.props[`${axisType}Id`]];

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
          className={`recharts-${axisOptions.axisType} ${axisOptions.axisType}`}
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
      const props = element.props || {};

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
      const { formatedGraphicalItems } = this.state;
      const { children, width, height } = this.props;
      const margin = this.props.margin || {};
      const legendWidth: number = width - (margin.left || 0) - (margin.right || 0);
      const props = getLegendProps({
        children,
        formatedGraphicalItems,
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
        ref: (legend: any) => {
          this.legendInstance = legend;
        },
        onBBoxUpdate: this.handleLegendBBoxUpdate,
      });
    };

    /**
     * Draw Tooltip
     * @return {ReactElement}  The instance of Tooltip
     */
    renderTooltip = (): React.ReactElement => {
      const { children } = this.props;
      const tooltipItem = findChildByType(children, Tooltip.displayName);

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
      const tooltipItem = findChildByType(children, Tooltip.displayName);
      const { points, isRange, baseLine } = item.props;
      const { activeDot, hide } = item.item.props;
      const hasActive = !hide && isTooltipActive && tooltipItem && activeDot && activeTooltipIndex >= 0;
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
          activePoint = points[activeTooltipIndex];
          basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
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
      }

      if (isRange) {
        return [graphicalItem, null, null];
      }

      return [graphicalItem, null];
    };

    renderCustomized = (element: React.ReactElement): React.ReactElement =>
      cloneElement(element, {
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
      const { formatedGraphicalItems } = this.state;

      if (formatedGraphicalItems && formatedGraphicalItems.length) {
        for (let i = 0, len = formatedGraphicalItems.length; i < len; i++) {
          const graphicalItem = formatedGraphicalItems[i];
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
          }
        }
      }

      return null;
    }

    render() {
      if (!validateWidthHeight(this)) {
        return null;
      }

      const { children, className, width, height, style, compact, ...others } = this.props;
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
      } as any;

      // The "compact" mode is mainly used as the panorama within Brush
      if (compact) {
        return (
          <Surface {...attrs} width={width} height={height}>
            {this.renderClipPath()}
            {renderByOrder(children, map)}
          </Surface>
        );
      }

      const events = this.parseEventsOfWrapper();
      return (
        <div
          className={classNames('recharts-wrapper', className)}
          style={{ position: 'relative', cursor: 'default', width, height, ...style }}
          {...events}
          ref={node => {
            this.container = node;
          }}
        >
          <Surface {...attrs} width={width} height={height}>
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
