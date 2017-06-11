/**
 * @fileOverview Reference Line
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Label from '../component/Label';
import { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
import { isNumOrStr } from '../util/DataUtils';
import { validateCoordinateInRange } from '../util/ChartUtils';
import Rectangle from '../shape/Rectangle';

@pureRender
class ReferenceArea extends Component {

  static displayName = 'ReferenceArea';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    viewBox: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    }),

    xAxis: PropTypes.object,
    yAxis: PropTypes.object,

    isFront: PropTypes.bool,
    alwaysShow: PropTypes.bool,
    x1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    x2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  };

  static defaultProps = {
    isFront: false,
    alwaysShow: false,
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#ccc',
    fillOpacity: 0.5,
    stroke: 'none',
    strokeWidth: 1,
  };

  getRect(hasX, hasY) {
    const { x1: xValue1, x2: xValue2, y1: yValue1, y2: yValue2, xAxis,
      yAxis } = this.props;
    const xScale = xAxis.scale;
    const yScale = yAxis.scale;
    const xOffset = xScale.bandwidth ? xScale.bandwidth() / 2 : 0;
    const yOffset = yScale.bandwidth ? yScale.bandwidth() / 2 : 0;
    const xRange = xScale.range();
    const yRange = yScale.range();
    let x1, x2, y1, y2;

    if (hasX && isNumOrStr(xValue1)) {
      x1 = xScale(xValue1) + xOffset;
    } else if (hasY) {
      x1 = xRange[0];
    }
    if (hasX && isNumOrStr(xValue2)) {
      x2 = xScale(xValue2) + xOffset;
    } else if (hasY) {
      x2 = xRange[1];
    }
    if (hasY && isNumOrStr(yValue1)) {
      y1 = yScale(yValue1) + yOffset;
    } else if (hasX) {
      y1 = yRange[0];
    }
    if (hasY && isNumOrStr(yValue2)) {
      y2 = yScale(yValue2) + yOffset;
    } else if (hasX) {
      y2 = yRange[1];
    }

    if (validateCoordinateInRange(x1, xScale) && validateCoordinateInRange(x2, xScale) &&
      validateCoordinateInRange(y1, yScale) && validateCoordinateInRange(y2, yScale)) {
      return {
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1),
      };
    }

    return null;
  }

  renderRect(option, props) {
    let rect;

    if (React.isValidElement(option)) {
      rect = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      rect = option(props);
    } else {
      rect = (
        <Rectangle
          {...props}
          className="recharts-reference-area-rect"
        />
      );
    }

    return rect;
  }

  render() {
    const { x1, x2, y1, y2, className } = this.props;
    const hasX = isNumOrStr(x1) && isNumOrStr(x2);
    const hasY = isNumOrStr(y1) && isNumOrStr(y2);

    if (!hasX && !hasY) { return null; }

    const rect = this.getRect(hasX, hasY);

    if (!rect) { return null; }

    const { shape } = this.props;

    return (
      <Layer className={classNames('recharts-reference-area', className)}>
        {this.renderRect(shape, { ...this.props, ...rect })}
        {Label.renderCallByParent(this.props, rect)}
      </Layer>
    );
  }
}

export default ReferenceArea;
