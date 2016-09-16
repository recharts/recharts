/**
 * @fileOverview Reference Line
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Dot from '../shape/Dot';
import Text from '../component/Text';
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

    xAxis: PropTypes.object,
    yAxis: PropTypes.object,

    isFront: PropTypes.bool,
    alwaysShow: PropTypes.bool,
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

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
    fill: '#fff',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
  };

  getCoordinate() {
    const { x, y, xAxis, yAxis } = this.props;
    const xScale = xAxis.scale;
    const yScale = yAxis.scale;
    const result = {
      cx: xScale(x) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0),
      cy: yScale(y) + (yScale.bandwidth ? yScale.bandwidth() / 2 : 0),
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
          <Text {...props}>{label}</Text>
        </g>
      );
    }

    return null;
  }

  renderDot(option, props) {
    let dot;

    if (React.isValidElement(option)) {
      dot = React.cloneElement(option, props);
    } else if (_.isFunction(option)) {
      dot = option(props);
    } else {
      dot = (
        <Dot
          {...props}
          cx={props.cx}
          cy={props.cy}
          className="recharts-reference-dot-dot"
        />
      );
    }

    return dot;
  }

  render() {
    const { x, y } = this.props;
    const isX = _.isNumber(x) || _.isString(x);
    const isY = _.isNumber(y) || _.isString(y);

    if (!isX || !isY) { return null; }

    const coordinate = this.getCoordinate();

    if (!coordinate) { return null; }

    const { shape } = this.props;

    return (
      <Layer className="recharts-reference-dot">
        {this.renderDot(shape, { ...getPresentationAttributes(this.props), ...coordinate })}
        {this.renderLabel(coordinate)}
      </Layer>
    );
  }
}

export default ReferenceDot;
