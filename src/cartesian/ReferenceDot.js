/**
 * @fileOverview Reference Line
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Dot from '../shape/Dot';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';
import _ from 'lodash';
import invariant from 'invariant';

@pureRender
class ReferenceDot extends Component {

  static displayName = 'ReferenceDot';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    r: PropTypes.number,

    label: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.element,
    ]),

    xAxisMap: PropTypes.object,
    yAxisMap: PropTypes.object,

    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    yAxisId: PropTypes.number,
    xAxisId: PropTypes.number,
  };

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    r: 20,
    fill: '#fff',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
  };

  validateCoordinate(value, coord, scale, type) {
    const range = scale.range();
    const first = range[0];
    const last = range[range.length - 1];
    const isValidate = first <= last ?
      (coord >= first && coord <= last) :
      (coord >= last && coord <= first);

    invariant(isValidate,
      `The reference Dot will get rendered out side the domain.
        Please check the domain of ${type.toUpperCase()}Axis,
        or ${type}(${value}) of ReferenceDot.
      `
    );

    return isValidate;
  }

  getCoordinate() {
    const { x, y, xAxisMap, yAxisMap, xAxisId, yAxisId } = this.props;
    const xScale = xAxisMap[xAxisId].scale;
    const yScale = yAxisMap[yAxisId].scale;
    const result = {
      cx: xScale(x),
      cy: yScale(y),
    };

    if (this.validateCoordinate(x, result.cx, xScale, 'x') &&
      this.validateCoordinate(y, result.cy, yScale, 'y')) {
      return result;
    }

    return null;
  }

  renderLabel(coordinate) {
    const { label } = this.props;

    if (React.isValidElement(label)) {
      return React.cloneElement(label, this.props);
    } else if (_.isString(label) || _.isNumber(label)) {
      const { stroke } = this.props;
      const props = {
        ...getPresentationAttributes(this.props),
        stroke: 'none',
        fill: stroke,
        x: coordinate.cx,
        y: coordinate.cy,
        textAnchor: 'middle',
      };

      return (
        <g className="recharts-reference-dot-label">
          <text {...props}>{label}</text>
        </g>
      );
    }

    return null;
  }

  render() {
    const { x, y } = this.props;
    const isX = _.isNumber(x) || _.isString(x);
    const isY = _.isNumber(y) || _.isString(y);

    if (!isX || !isY) { return null; }

    const coordinate = this.getCoordinate();

    if (!coordinate) {return null;}

    const props = getPresentationAttributes(this.props);

    return (
      <Layer className="recharts-reference-dot">
        <Dot
          {...props}
          r={this.props.r}
          className="recharts-reference-dot-dot"
          {...coordinate}
        />
        {this.renderLabel(coordinate)}
      </Layer>
    );
  }
}

export default ReferenceDot;
