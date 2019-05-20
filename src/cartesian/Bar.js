/**
 * @fileOverview Render a group of bar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from 'react-smooth';
import _ from 'lodash';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import ErrorBar from './ErrorBar';
import Cell from '../component/Cell';
import LabelList from '../component/LabelList';
import pureRender from '../util/PureRender';
import { uniqueId, mathSign, interpolateNumber } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, TOOLTIP_TYPES,
  findAllByType, getPresentationAttributes, filterEventsOfChild, isSsr } from '../util/ReactUtils';
import { getCateCoordinateOfBar, getValueByDataKey, truncateByDomain, getBaseValueOfBar,
  findPositionOfBar } from '../util/ChartUtils';

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
    tooltipType: PropTypes.oneOf(TOOLTIP_TYPES),
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
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,

    animationId: PropTypes.number,
    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
    id: PropTypes.string,
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
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'ease',

    onAnimationStart: () => {},
    onAnimationEnd: () => {},
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
      let value, x, y, width, height, background;

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
        background = { x, y: yAxis.y, width, height: yAxis.height };

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
        background = { x: xAxis.x, y, width: xAxis.width, height };

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
        background,
        ...(cells && cells[index] && cells[index].props),
      };
    });

    return { data: rects, layout, ...offset };
  };

  state = { isAnimationFinished: false };

  componentWillReceiveProps(nextProps) {
    const { animationId, data } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevData(data);
    }
  }

  id = uniqueId('recharts-bar-');

  cachePrevData = (data) => {
    this.setState({ prevData: data });
  };

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
    this.props.onAnimationEnd();
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
    this.props.onAnimationStart();
  };

  static renderRectangle(option, props) {
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
          {this.constructor.renderRectangle(shape, props)}
        </Layer>
      );
    });
  }

  renderRectanglesWithAnimation() {
    const { data, layout, isAnimationActive, animationBegin,
      animationDuration, animationEasing, animationId,
    } = this.props;
    const { prevData } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`bar-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {
          ({ t }) => {
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
                const interpolatorHeight = interpolateNumber(0, entry.height);
                const h = interpolatorHeight(t);

                return {
                  ...entry,
                  y: entry.y + entry.height - h,
                  height: h,
                };
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
        }
      </Animate>
    );
  }

  renderRectangles() {
    const { data, isAnimationActive } = this.props;
    const { prevData } = this.state;

    if (isAnimationActive && data && data.length &&
      (!prevData || !_.isEqual(prevData, data))) {
      return this.renderRectanglesWithAnimation();
    }

    return this.renderRectanglesStatically(data);
  }

  renderBackground() {
    const { data } = this.props;
    const backgroundProps = getPresentationAttributes(this.props.background);

    return data.map((entry, i) => {
      // eslint-disable-next-line no-unused-vars
      const { value, background, ...rest } = entry;

      if (!background) { return null; }

      const props = {
        ...rest,
        fill: '#eee',
        ...background,
        ...backgroundProps,
        ...filterEventsOfChild(this.props, entry, i),
        index: i,
        key: `background-bar-${i}`,
        className: 'recharts-bar-background-rectangle',
      };

      return this.constructor.renderRectangle(this.props.background, props);
    });
  }

  renderErrorBar() {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) { return null; }

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
      key: `error-bar-${i}`,
      data,
      xAxis,
      yAxis,
      layout,
      offset,
      dataPointFormatter,
    }));
  }

  render() {
    const { hide, data, className, xAxis, yAxis, left, top,
      width, height, isAnimationActive, background, id } = this.props;
    if (hide || !data || !data.length) { return null; }

    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-bar', className);
    const needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);
    const clipPathId = _.isNil(id) ? this.id : id;

    return (
      <Layer className={layerClass}>
        {needClip ? (
          <defs>
            <clipPath id={`clipPath-${clipPathId}`}>
              <rect x={left} y={top} width={width} height={height} />
            </clipPath>
          </defs>
        ) : null}
        <Layer
          className="recharts-bar-rectangles"
          clipPath={needClip ? `url(#clipPath-${clipPathId})` : null}
        >
          {background ? this.renderBackground() : null}
          {this.renderRectangles()}
        </Layer>
        {this.renderErrorBar()}
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, data)}
      </Layer>
    );
  }
}

export default Bar;
