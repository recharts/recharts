/**
 * @fileOverview Render a group of bar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import ErrorBar from './ErrorBar';
import Cell from '../component/Cell';
import LabelList from '../component/LabelList';
import animationDecorator from '../util/AnimationDecorator/';
import pureRender from '../util/PureRender';
import { uniqueId, mathSign, interpolateNumber } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES,
  findAllByType, getPresentationAttributes, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { getCateCoordinateOfBar, getValueByDataKey, truncateByDomain, getBaseValueOfBar,
  findPositionOfBar } from '../util/ChartUtils';

@animationDecorator
@pureRender
class Bar extends Component {

  static displayName = 'Bar';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: PropTypes.string,
    layout: PropTypes.oneOf(['vertical', 'horizontal']),
    xAxisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yAxisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yAxis: PropTypes.object,
    xAxis: PropTypes.object,
    stackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    barSize: PropTypes.number,
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]).isRequired,
    legendType: PropTypes.oneOf(LEGEND_TYPES),
    minPointSize: PropTypes.number,
    maxBarSize: PropTypes.number,
    hide: PropTypes.bool,

    shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
    })),
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    minPointSize: 0,
    hide: false,
    // data of bar
    data: [],
    layout: 'vertical',
  };

  /**
   * Compose the data of each group
   * @param {Object} props Props for the component
   * @param {Object} item        An instance of Bar
   * @param {Array} barPosition  The offset and size of each bar
   * @param {Object} xAxis       The configuration of x-axis
   * @param {Object} yAxis       The configuration of y-axis
   * @param {Array} stackedData  The stacked data of a bar item
   * @return{Array} Composed data
   */
  static getComposedData = ({ props, item, barPosition, bandSize, xAxis, yAxis,
    xAxisTicks, yAxisTicks, stackedData, dataStartIndex, displayedData, offset }) => {
    const pos = findPositionOfBar(barPosition, item);
    if (!pos) { return []; }

    const { layout } = props;
    const { dataKey, children, minPointSize } = item.props;
    const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
    const stackedDomain = stackedData ? numericAxis.scale.domain() : null;
    const baseValue = getBaseValueOfBar({ props, numericAxis });
    const cells = findAllByType(children, Cell);

    const rects = displayedData.map((entry, index) => {
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
        x = getCateCoordinateOfBar({
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
          const delta = mathSign(height || minPointSize) *
            (Math.abs(minPointSize) - Math.abs(height));

          y -= delta;
          height += delta;
        }
      } else {
        x = xAxis.scale(value[0]);
        y = getCateCoordinateOfBar({
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
          const delta = mathSign(width || minPointSize) *
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

    return { data: rects, layout, ...offset };
  };

  constructor(props) {
    super(props);
    this.state = this.createDefaultState();
  }

  // eslint-disable-next-line class-methods-use-this
  createDefaultState() {}

  id = uniqueId('recharts-bar-');

  renderRectangle(option, props) {
    let rectangle;

    if (React.isValidElement(option)) {
      rectangle = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      rectangle = option(props);
    } else {
      rectangle = <Rectangle {...props} />;
    }

    return rectangle;
  }

  renderRectanglesStatically(data) {
    const { shape } = this.props;
    const baseProps = getPresentationAttributes(this.props);

    return data && data.map((entry, i) => {
      const props = { ...baseProps, ...entry, index: i };

      return (
        <Layer
          className="recharts-bar-rectangle"
          {...filterEventsOfChild(this.props, entry, i)}
          key={`rectangle-${i}`}
        >
          {this.renderRectangle(shape, props)}
        </Layer>
      );
    });
  }

  renderRectanglesWithAnimation({ t }) {
    const { data, layout } = this.props;
    const { prevData } = this.state;

    const stepData = data.map((entry, index) => {
      const prev = prevData && prevData[index];

      if (prev) {
        const interpolatorX = interpolateNumber(prev.x, entry.x);
        const interpolatorY = interpolateNumber(prev.y, entry.y);
        const interpolatorWidth = interpolateNumber(prev.width, entry.width);
        const interpolatorHeight = interpolateNumber(prev.height, entry.height);

        return {
          ...entry,
          x: interpolatorX(t),
          y: interpolatorY(t),
          width: interpolatorWidth(t),
          height: interpolatorHeight(t),
        };
      }

      if (layout === 'horizontal') {
        const interpolator = interpolateNumber(0, entry.height);
        const h = interpolator(t);

        return { ...entry, y: entry.y + entry.height - h, height: h };
      }

      const interpolator = interpolateNumber(0, entry.width);
      const w = interpolator(t);

      return { ...entry, width: w };
    });

    return (
      <Layer>
        {this.renderRectanglesStatically(stepData)}
      </Layer>
    );
  }

  renderRectangles() {
    const { data, isAnimationActive } = this.props;
    const { prevData } = this.state;

    if (isAnimationActive && data && data.length &&
      (!prevData || !_.isEqual(prevData, data))) {
      return this.renderWithAnimation(this.renderRectanglesWithAnimation);
    }

    return this.renderRectanglesStatically(data);
  }

  renderErrorBar() {
    const { data, xAxis, yAxis, layout, children } = this.props;
    const errorBarItems = findAllByType(children, ErrorBar);

    if (!errorBarItems) { return null; }

    const offset = (layout === 'vertical') ? data[0].height / 2 : data[0].width / 2;

    function dataPointFormatter(dataPoint, dataKey) {
      return {
        x: dataPoint.x,
        y: dataPoint.y,
        value: dataPoint.value,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    }

    return errorBarItems.map((item, i) => React.cloneElement(item, {
      key: i,
      data,
      xAxis,
      yAxis,
      layout,
      offset,
      dataPointFormatter,
    }));
  }

  renderLabelList() {
    const { data } = this.props;
    return LabelList.renderCallByParent(this.props, data);
  }

  render() {
    const { hide, data, className, xAxis, yAxis, left, top,
      width, height,
    } = this.props;
    if (hide || !data || !data.length) { return null; }

    const layerClass = classNames('recharts-bar', className);
    const needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);

    return (
      <Layer className={layerClass}>
        {needClip ? (
          <defs>
            <clipPath id={`clipPath-${this.id}`}>
              <rect x={left} y={top} width={width} height={height} />
            </clipPath>
          </defs>
        ) : null}
        <Layer
          className="recharts-bar-rectangles"
          clipPath={needClip ? `url(#clipPath-${this.id})` : null}
        >
          {this.renderRectangles()}
        </Layer>
        {this.renderErrorBar()}
        {this.renderLabelList()}
      </Layer>
    );
  }
}

export default Bar;
