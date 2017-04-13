import _ from 'lodash';
import { getValueByDataKey, findPositionOfBar, truncateByDomain, isNumOrStr,
  isNumber } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';
import { findAllByType, getDisplayName } from '../util/ReactUtils';
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

  const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  const domain = numericAxis.scale.domain();

  if (numericAxis.type === 'number') {
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

const getComposedDataOfArea = ({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, bandSize,
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
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
        y: _.isNil(value[1]) ? null : yAxis.scale(value[1]),
        value,
        payload: entry,
      };
    }

    return {
      x: _.isNil(value[1]) ? null : xAxis.scale(value[1]),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index }),
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
  const value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);

  return !_.isNil(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};

const getBaseValueOfBar = ({ props, numericAxis }) => {
  const domain = numericAxis.scale.domain();

  if (numericAxis.type === 'number') {
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
  xAxisTicks, yAxisTicks, stackedData, dataStartIndex, displayedData }) => {
  const pos = findPositionOfBar(barPosition, item);
  if (!pos) { return []; }

  const { layout } = props;
  const { dataKey, children, minPointSize } = item.props;
  const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  const stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  const baseValue = getBaseValueOfBar({ props, numericAxis });
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
        ticks: xAxisTicks,
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
        ticks: yAxisTicks,
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
const getComposedDataOfLine = ({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey,
  bandSize, displayedData }) => {
  const { layout } = props;

  return displayedData.map((entry, index) => {
    const value = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
        y: _.isNil(value) ? null : yAxis.scale(value),
        value,
        payload: entry,
      };
    }

    return {
      x: _.isNil(value) ? null : xAxis.scale(value),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index }),
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

const getComposedDataOfRadar = ({ item, props, radiusAxis, angleAxis, displayedData,
  dataKey }) => {
  const { cx, cy } = angleAxis;

  return displayedData.map((entry, i) => {
    const name = getValueByDataKey(entry, angleAxis.dataKey, i);
    const value = getValueByDataKey(entry, dataKey, 0);
    const angle = angleAxis.scale(name);
    const radius = radiusAxis.scale(value);

    return {
      ...polarToCartesian(cx, cy, radius, angle),
      name, value, cx, cy, radius, angle,
      payload: entry,
    };
  });
};

const getComposedDataOfRadialBar = ({ item, props, radiusAxis, radiusAxisTicks,
  angleAxis, angleAxisTicks, displayedData,
  dataKey, stackedData, barPosition, bandSize }) => {
  const pos = findPositionOfBar(barPosition, item);
  if (!pos) { return []; }

  const { cx, cy } = angleAxis;
  const { layout } = props;
  const { children, minPointSize } = item.props;
  const numericAxis = layout === 'radial' ? angleAxis : radiusAxis;
  const stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  const baseValue = getBaseValueOfBar({ props, numericAxis });
  const cells = findAllByType(children, Cell);

  return displayedData.map((entry, index) => {
    let value, innerRadius, outerRadius, startAngle, endAngle, backgroundSector;

    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!_.isArray(value)) { value = [baseValue, value]; }
    }

    if (layout === 'radial') {
      innerRadius = getCategoryAxisCoordinateOfBar({
        axis: radiusAxis,
        ticks: radiusAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      endAngle = angleAxis.scale(value[1]);
      startAngle = angleAxis.scale(value[0]);
      outerRadius = innerRadius + pos.size;
      const deltaAngle = endAngle - startAngle;

      if (Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
        const delta = Math.sign(deltaAngle || minPointSize) *
          (Math.abs(minPointSize) - Math.abs(deltaAngle));

        endAngle += delta;
      }
      backgroundSector = {
        background: {
          cx, cy, innerRadius, outerRadius, startAngle: props.startAngle, endAngle: props.endAngle,
        },
      };
    } else {
      innerRadius = radiusAxis.scale(value[0]);
      outerRadius = xAxis.scale(value[1]);
      startAngle = getCategoryAxisCoordinateOfBar({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index,
      });
      endAngle = startAngle + pos.size;
      const deltaRadius = outerRadius - innerRadius;

      if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
        const delta = Math.sign(deltaRadius || minPointSize) *
          (Math.abs(minPointSize) - Math.abs(deltaRadius));
        outerRadius += delta;
      }
    }

    return {
      ...entry,
      ...backgroundSector,
      payload: entry,
      value: stackedData ? value : value[1],
      cx, cy, innerRadius, outerRadius, startAngle, endAngle,
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

const getCalculatedPropsOfRadar = input => ({
  points: getComposedDataOfRadar(input),
  layout: input.layout,
});

const getCalculatedPropsOfRadialBar = input => ({
  data: getComposedDataOfRadialBar(input),
  layout: input.layout,
});

export const getComposeFnOfItem = (item) => {
  if (!item) { return null; }

  const type = getDisplayName(item && item.type);

  if (!type) { return null; }

  if (type.indexOf('RadialBar') >= 0) {
    return getCalculatedPropsOfRadialBar;
  }

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

  if (type.indexOf('Radar') >= 0) {
    return getCalculatedPropsOfRadar;
  }

  return null;
};
