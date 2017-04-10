import _ from 'lodash';
import { getValueByDataKey,
  findPositionOfBar, truncateByDomain, isNumOrStr, isNumber } from '../util/DataUtils';
import { findAllByType,
  getDisplayName } from '../util/ReactUtils';
import Cell from '../component/Cell';
import ZAxis from '../cartesian/ZAxis';

const getCategoryAxisCoordinate = ({ axis, ticks, bandSize, entry, index }) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const value = getValueByDataKey(entry, axis.dataKey);

  return !_.isNil(value) ? axis.scale(value) : null;
};

const getBaseValueOfArea = (props, xAxis, yAxis) => {
  const { layout, baseValue } = props;

  if (isNumber(baseValue)) { return baseValue; }

  const numberAxis = layout === 'horizontal' ? yAxis : xAxis;
  const domain = numberAxis.scale.domain();

  if (numberAxis.type === 'number') {
    const max = Math.max(domain[0], domain[1]);
    const min = Math.min(domain[0], domain[1]);

    if (baseValue === 'dataMin') { return min; }
    if (baseValue === 'dataMax') { return max; }

    return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
  }

  if (baseValue === 'dataMin') { return domain[0]; }
  if (baseValue === 'dataMax') { return domain[1]; }

  return domain[0];
};

const getComposedDataOfArea = ({ props, xAxis, yAxis, xTicks, yTicks, bandSize,
  dataKey, stackedData, dataStartIndex, displayedData }) => {
  const { layout } = props;
  const hasStack = stackedData && stackedData.length;
  const baseValue = getBaseValueOfArea(props, xAxis, yAxis);
  let isRange = false;

  const points = displayedData.map((entry, index) => {
    let value;

    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = getValueByDataKey(entry, dataKey);

      if (!_.isArray(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize, entry, index }),
        y: _.isNil(value[1]) ? null : yAxis.scale(value[1]),
        value,
        payload: entry,
      };
    }

    return {
      x: _.isNil(value[1]) ? null : xAxis.scale(value[1]),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yTicks, bandSize, entry, index }),
      value,
      payload: entry,
    };
  });

  let baseLine;
  if (hasStack || isRange) {
    baseLine = points.map(entry => ({
      x: layout === 'horizontal' ? entry.x : xAxis.scale(entry && entry.value[0]),
      y: layout === 'horizontal' ? yAxis.scale(entry && entry.value[0]) : entry.y,
    }));
  } else if (layout === 'horizontal') {
    baseLine = yAxis.scale(baseValue);
  } else {
    baseLine = xAxis.scale(baseValue);
  }

  return { points, baseLine, layout, isRange };
};


const getCategoryAxisCoordinateOfBar = ({ axis, ticks, offset, bandSize, entry, index }) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }

  const value = getValueByDataKey(entry, axis.dataKey);

  return !_.isNil(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};

const getBaseValueOfBar = ({ props, xAxis, yAxis }) => {
  const { layout } = props;
  const numberAxis = layout === 'horizontal' ? yAxis : xAxis;
  const domain = numberAxis.scale.domain();

  if (numberAxis.type === 'number') {
    const min = Math.min(domain[0], domain[1]);
    const max = Math.max(domain[0], domain[1]);

    if (min <= 0 && max >= 0) { return 0; }
    if (max < 0) { return max; }

    return min;
  }

  return domain[0];
};

/**
 * Compose the data of each group
 * @param {Object} props Props for the component
 * @param {Object} item        An instance of Bar
 * @param {Array} barPosition The offset and size of each bar
 * @param {Object} xAxis       The configuration of x-axis
 * @param {Object} yAxis       The configuration of y-axis
 * @param {Array} stackedData  The stacked data of a bar item
 * @return{Array} Composed data
 */
const getComposedDataOfBar = ({ props, item, barPosition, bandSize, xAxis, yAxis,
  xTicks, yTicks, stackedData, dataStartIndex, displayedData }) => {
  const { layout } = props;
  const { dataKey, children, minPointSize } = item.props;
  const pos = findPositionOfBar(barPosition, item);
  const stackedDomain = stackedData && layout === 'horizontal' ?
    yAxis.scale.domain() : xAxis.scale.domain();

  if (!pos) { return []; }

  const baseValue = getBaseValueOfBar({ props, xAxis, yAxis });
  const cells = findAllByType(children, Cell);

  return displayedData.map((entry, index) => {
    let value, x, y, width, height;

    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);

      if (!_.isArray(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'horizontal') {
      x = getCategoryAxisCoordinateOfBar({
        axis: xAxis,
        ticks: xTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      y = yAxis.scale(value[1]);
      width = pos.size;
      height = yAxis.scale(value[0]) - yAxis.scale(value[1]);

      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        const delta = Math.sign(height || minPointSize) *
          (Math.abs(minPointSize) - Math.abs(height));

        y -= delta;
        height += delta;
      }
    } else {
      x = xAxis.scale(value[0]);
      y = getCategoryAxisCoordinateOfBar({
        axis: yAxis,
        ticks: yTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      width = xAxis.scale(value[1]) - xAxis.scale(value[0]);
      height = pos.size;

      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        const delta = Math.sign(width || minPointSize) *
          (Math.abs(minPointSize) - Math.abs(width));
        width += delta;
      }
    }

    return {
      ...entry,
      x, y, width, height, value: stackedData ? value : value[1],
      payload: entry,
      ...(cells && cells[index] && cells[index].props),
    };
  });
};


/**
 * Compose the data of each group
 * @param {Object} props The props from the component
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */
const getComposedDataOfLine = ({ props, xAxis, yAxis, xTicks, yTicks, dataKey,
  bandSize, displayedData }) => {
  const { layout } = props;

  return displayedData.map((entry, index) => {
    const value = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize, entry, index }),
        y: _.isNil(value) ? null : yAxis.scale(value),
        value,
        payload: entry,
      };
    }

    return {
      x: _.isNil(value) ? null : xAxis.scale(value),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yTicks, bandSize, entry, index }),
      value,
      payload: entry,
    };
  });
};


/**
 * Compose the data of each group
 * @param {Object} props The props from the component
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */
const getComposedDataOfScatter = ({ props, xAxis, yAxis, zAxis,
  item, displayedData }) => {
  const cells = findAllByType(item.props.children, Cell);
  const xAxisDataKey = _.isNil(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
  const yAxisDataKey = _.isNil(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
  const zAxisDataKey = zAxis && zAxis.dataKey;
  const defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
  const defaultZ = defaultRangeZ && defaultRangeZ[0];
  const xOffset = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() / 2 : 0;
  const yOffset = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() / 2 : 0;

  return displayedData.map((entry, index) => {
    const x = entry[xAxisDataKey];
    const y = entry[yAxisDataKey];
    const z = (!_.isNil(zAxisDataKey) && entry[zAxisDataKey]) || '-';
    const tooltipPayload = [
      { name: xAxis.name || xAxis.dataKey, unit: xAxis.unit || '', value: x, payload: entry },
      { name: yAxis.name || yAxis.dataKey, unit: yAxis.unit || '', value: y, payload: entry },
    ];

    if (z !== '-') {
      tooltipPayload.push({
        name: zAxis.name || zAxis.dataKey, unit: zAxis.unit || '', value: z, payload: entry,
      });
    }

    return {
      ...entry,
      cx: isNumOrStr(x) ? xAxis.scale(x) + xOffset : null,
      cy: isNumOrStr(y) ? yAxis.scale(y) + yOffset : null,
      size: z !== '-' ? zAxis.scale(z) : defaultZ,
      node: { x, y, z },
      tooltipPayload,
      payload: entry,
      ...(cells && cells[index] && cells[index].props),
    };
  });
};

const getCalculatedPropsOfScatter = input => ({
  onMouseLeave: input.onItemMouseLeave,
  onMouseEnter: input.onItemMouseEnter,
  points: getComposedDataOfScatter(input),
});

const getCalculatedPropsOfLine = input => ({
  layout: input.layout,
  points: getComposedDataOfLine(input),
});

const getCalculatedPropsOfBar = input => ({
  data: getComposedDataOfBar(input),
  layout: input.layout,
});

const getCalculatedPropsOfArea = input => ({
  ...getComposedDataOfArea(input),
  layout: input.layout,
});

export const getComposeFnOfItem = (item) => {
  if (!item) { return null; }

  const type = getDisplayName(item && item.type);

  if (!type) { return null; }

  if (type.indexOf('Scatter') >= 0) {
    return getCalculatedPropsOfScatter;
  }

  if (type.indexOf('Line') >= 0) {
    return getCalculatedPropsOfLine;
  }

  if (type.indexOf('Area') >= 0) {
    return getCalculatedPropsOfArea;
  }

  if (type.indexOf('Bar') >= 0) {
    return getCalculatedPropsOfBar;
  }

  return null;
};
