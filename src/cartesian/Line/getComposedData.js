import _ from 'lodash';
import { getCateCoordinateOfLine, getValueByDataKey } from '../../util/ChartUtils';

/**
 * Compose the data of each group
 * @param {Object} props The props from the component
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */
const getComposedData = ({
  props, xAxis, yAxis, xAxisTicks, yAxisTicks,
  dataKey, bandSize, displayedData, offset,
}) => {
  const { layout } = props;

  const points = displayedData.map((entry, index) => {
    const value = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis, ticks: xAxisTicks, bandSize, entry, index,
        }),
        y: _.isNil(value) ? null : yAxis.scale(value),
        value,
        payload: entry,
      };
    }

    return {
      x: _.isNil(value) ? null : xAxis.scale(value),
      y: getCateCoordinateOfLine({
        axis: yAxis, ticks: yAxisTicks, bandSize, entry, index,
      }),
      value,
      payload: entry,
    };
  });

  return { points, layout, ...offset };
};

export default getComposedData;
