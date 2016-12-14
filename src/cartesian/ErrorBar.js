/**
 * @fileOverview Render a group of error bar
*/
import React, { Component, PropTypes } from 'react';
import Layer from '../container/Layer';

class ErrorBars extends Component {

  static propTypes = {
    xAxis: PropTypes.object.isRequired,
    yAxis: PropTypes.object.isRequired,
    layout: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    errorVal: PropTypes.number.isRequired,
    fill: PropTypes.string,
    strokeWidth: PropTypes.number,
    width: PropTypes.number,
    offset: PropTypes.number,
  };

  static defaultProps = {
    fill: 'black',
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
  };

  render() {
    const { offset, layout, fill, strokeWidth, width, x, y, value, errorVal } = this.props;

    if (!errorVal) { return null; }

    let xMid, yMid, xMin, yMin, xMax, yMax, scale, coordsTop, coordsMid, coordsBot;

    if (layout === 'vertical') {
      scale = this.props.xAxis.scale;
      xMid = value;
      yMid = y + offset;
      xMin = scale(xMid - errorVal / 2);
      yMin = yMid + width;
      xMax = scale(xMid + errorVal / 2);
      yMax = yMid - width;
      coordsTop = { x1: xMax, y1: yMin, x2: xMax, y2: yMax };
      coordsMid = { x1: xMin, y1: yMid, x2: xMax, y2: yMid };
      coordsBot = { x1: xMin, y1: yMin, x2: xMin, y2: yMax };
    } else if (layout === 'horizontal') {
      scale = this.props.yAxis.scale;
      xMid = x + offset;
      yMid = value;
      xMin = xMid - width;
      xMax = xMid + width;
      yMin = scale(yMid + errorVal / 2);
      yMax = scale(yMid - errorVal / 2);
      coordsTop = { x1: xMin, y1: yMax, x2: xMax, y2: yMax };
      coordsMid = { x1: xMid, y1: yMin, x2: xMid, y2: yMax };
      coordsBot = { x1: xMin, y1: yMin, x2: xMax, y2: yMin };
    }

    return (
      <Layer className="recharts-errorBar">
        <line {...coordsTop} stroke={fill} strokeWidth={strokeWidth} />;
        <line {...coordsMid} stroke={fill} strokeWidth={strokeWidth} />;
        <line {...coordsBot} stroke={fill} strokeWidth={strokeWidth} />;
      </Layer>
    );
  }

}

export default ErrorBars;
