/**
 * @fileOverview Render a group of bar
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate, { translateStyle } from 'react-smooth';
import _ from 'lodash';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import ErrorBar from './ErrorBar';
import Cell from '../component/Cell';
import LabelList from '../component/LabelList';
import pureRender from '../util/PureRender';
import { getValueByDataKey, uniqueId, getCateCoordinateOfBar,
  truncateByDomain, getBaseValueOfBar, findPositionOfBar } from '../util/DataUtils';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES, LEGEND_TYPES, findChildByType,
  findAllByType, getPresentationAttributes, filterEventsOfChild, isSsr } from '../util/ReactUtils';

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
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    })),
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,

    animationId: PropTypes.number,
    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
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
   * @param {Array} barPosition The offset and size of each bar
   * @param {Object} xAxis       The configuration of x-axis
   * @param {Object} yAxis       The configuration of y-axis
   * @param {Array} stackedData  The stacked data of a bar item
   * @return{Array} Composed data
   */
  static getComposedData = ({ props, item, barPosition, bandSize, xAxis, yAxis,
    xAxisTicks, yAxisTicks, stackedData, dataStartIndex, displayedData }) => {
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
          const delta = Math.sign(height || minPointSize) *
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

    return { data: rects, layout };
  };

  state = { isAnimationFinished: false };
  id = uniqueId('recharts-bar-');

  componentWillReceiveProps(nextProps) {
    const { animationId, data } = this.props;

    if (nextProps.animationId !== animationId) {
      this.cachePrevData(data);
    }
  }

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

  renderRectangles() {
    const { data, shape, layout, isAnimationActive, animationBegin,
      animationDuration, animationEasing, animationId } = this.props;
    const baseProps = getPresentationAttributes(this.props);
    const { prevData } = this.state;
    const getStyle = isBegin => ({
      transform: `scale${layout === 'vertical' ? 'X' : 'Y'}(${isBegin ? 0 : 1})`,
    });

    return data.map((entry, i) => {
      const { x, y, width, height } = entry;
      const props = { ...baseProps, ...entry, index: i };
      const isUpdate = animationId >= 1 && prevData[i];
      let from, to;

      if (layout === 'horizontal') {
        from = isUpdate ? {
          x: prevData[i].x, y: prevData[i].y, width: prevData[i].width, height: prevData[i].height,
        } : { y: entry.y + entry.height, height: 0 };
        to = isUpdate ? {
          x: entry.x, y: entry.y, width: entry.width, height: entry.height,
        } : { y: entry.y, height: entry.height };
      } else {
        from = isUpdate ? {
          x: prevData[i].x, y: prevData[i].y, width: prevData[i].width, height: prevData[i].height,
        } : { width: 0 };
        to = isUpdate ? {
          x: entry.x, y: entry.y, width: entry.x, height: entry.height,
        } : { width: entry.width };
      }

      if (_.isNil(entry.value) || !isAnimationActive) {
        return (
          <Layer
            className="recharts-bar-rectangle"
            {...filterEventsOfChild(this.props, entry, i)}
            key={`rectangle-${i}`}
          >
            {this.renderRectangle(shape, props)}
          </Layer>
        );
      }

      if (i === 0) {
        console.log(from, to);
      }

      return (
        <Animate
          begin={animationBegin}
          duration={animationDuration}
          isActive={isAnimationActive}
          easing={animationEasing}
          from={from}
          to={to}
          key={`rectangle-${i}-${animationId}`}
          onAnimationEnd={this.handleAnimationEnd}
          onAnimationStart={this.handleAnimationStart}
        >
          {
            stepProps => {
              if (i === 0) { console.log(stepProps); }
              return (
                <Layer
                  className="recharts-bar-rectangle"
                  {...filterEventsOfChild(this.props, entry, i)}
                  key={`rectangle-${i}`}
                >
                  {this.renderRectangle(shape, { ...props, ...stepProps })}
                </Layer>
              );
            }
          }
        </Animate>
      );
    });
  }

  renderErrorBar() {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) { return null; }

    const { data, xAxis, yAxis, layout, children } = this.props;
    const errorBarItem = findChildByType(children, ErrorBar);

    if (!errorBarItem) { return null; }

    const offset = (layout === 'vertical') ? data[0].height / 2 : data[0].width / 2;

    function dataPointFormatter(dataPoint, dataKey) {
      return {
        x: dataPoint.x,
        y: dataPoint.y,
        value: dataPoint.value,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    }

    return React.cloneElement(errorBarItem, {
      data,
      xAxis,
      yAxis,
      layout,
      offset,
      dataPointFormatter,
    });
  }

  render() {
    const { hide, data, className, xAxis, yAxis, left, top,
      width, height, isAnimationActive } = this.props;
    if (hide || !data || !data.length) { return null; }

    const { isAnimationFinished } = this.state;
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
        {(!isAnimationActive || isAnimationFinished) &&
          LabelList.renderCallByParent(this.props, data)}
      </Layer>
    );
  }
}

export default Bar;
