/**
 * @fileOverview Reference Line
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Dot from '../shape/Dot';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import { validateCoordinateInRange } from '../util/DataUtils';
import _ from 'lodash';

@pureRender
class ReferenceDot extends Component {

  static displayName = 'ReferenceDot';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    r: PropTypes.number,

    label: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string, PropTypes.func, PropTypes.element,
    ]),

    xAxisMap: PropTypes.object,
    yAxisMap: PropTypes.object,

    isFront: PropTypes.bool,
    alwaysShow: PropTypes.bool,
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    offsetY: PropTypes.number,
    offsetX: PropTypes.number,

    showCursor: PropTypes.bool,
    showLine: PropTypes.bool,
    height: PropTypes.number,
  };

  static defaultProps = {
    isFront: false,
    alwaysShow: false,
    xAxisId: 0,
    yAxisId: 0,
    r: 20,
    fill: '#fff',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
    showCursor: false,
    showLine: false,
  };

  getCoordinate() {
    const { x, y, xAxisMap, yAxisMap, xAxisId, yAxisId } = this.props;
    if (xAxisMap === undefined || yAxisMap === undefined) {
      return null;
    }

    const xScale = xAxisMap[xAxisId].scale;
    const yScale = yAxisMap[yAxisId].scale;
    const result = {
      cx: xScale(x),
      cy: yScale(y),
    };

    if (validateCoordinateInRange(result.cx, xScale) &&
      validateCoordinateInRange(result.cy, yScale)) {
      return result;
    }

    return null;
  }

  renderLabel(coordinate) {
    const { label, stroke } = this.props;
    const props = {
      ...getPresentationAttributes(label),
      stroke: 'none',
      fill: stroke,
      x: coordinate.cx,
      y: coordinate.cy,
      textAnchor: 'middle',
    };

    if (React.isValidElement(label)) {
      return React.cloneElement(label, props);
    } else if (_.isFunction(label)) {
      return label(props);
    } else if (_.isString(label) || _.isNumber(label)) {
      return (
        <g className="recharts-reference-dot-label">
          <text {...props}>{label}</text>
        </g>
      );
    }

    return null;
  }

  renderLine(props, coordinate) {
    if (!coordinate) { return null; }

    const lineProps = {
      stroke: props.stroke === 'none' ? props.fill : props.stroke,
    };
    const height = props && props.height ||
      props && props.yAxisMap && props.yAxisMap[0] && props.yAxisMap[0].height || 10;

    return (
      <line
        {...lineProps}
        className="recharts-reference-line-line"
        x1={coordinate.cx}
        y1={0}
        x2={coordinate.cx}
        y2={height}
      />
    );
  }

  render() {
    const { x, y, showLine } = this.props;
    const isX = _.isNumber(x) || _.isString(x);
    const isY = _.isNumber(y) || _.isString(y);

    if (!isX || !isY) { return null; }

    const coordinate = this.getCoordinate();

    if (!coordinate) { return null; }

    const { offsetX, offsetY } = this.props;
    if (offsetX) { coordinate.cx += offsetX; }
    if (offsetY) { coordinate.cy += offsetY; }

    const props = getPresentationAttributes(this.props);

    return (
      <Layer className="recharts-reference-dot">
        <Dot
          {...props}
          r={this.props.r}
          className="recharts-reference-dot-dot"
          {...coordinate}
        />
        {showLine && this.renderLine(this.props, coordinate)}
        {this.renderLabel(coordinate)}
      </Layer>
    );
  }
}

export default ReferenceDot;
