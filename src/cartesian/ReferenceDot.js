/**
 * @fileOverview Reference Dot
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import Layer from '../container/Layer';
import Dot from '../shape/Dot';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES,
  getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';
import Label from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { validateCoordinateInRange } from '../util/ChartUtils';

@pureRender
class ReferenceDot extends Component {

  static displayName = 'ReferenceDot';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    r: PropTypes.number,

    xAxis: PropTypes.shape({ scale: PropTypes.func }),
    yAxis: PropTypes.shape({ scale: PropTypes.func }),

    isFront: PropTypes.bool,
    alwaysShow: PropTypes.bool,
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

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
    const { x, y, r } = this.props;
    const isX = isNumOrStr(x);
    const isY = isNumOrStr(y);

    if (!isX || !isY) { return null; }

    const coordinate = this.getCoordinate();

    if (!coordinate) { return null; }

    const { shape, className } = this.props;

    const dotProps = {
      ...getPresentationAttributes(this.props),
      ...filterEventAttributes(this.props),
      ...coordinate,
    };

    return (
      <Layer className={classNames('recharts-reference-dot', className)}>
        {this.renderDot(shape, dotProps)}
        {Label.renderCallByParent(this.props, {
          x: coordinate.cx - r,
          y: coordinate.cy - r,
          width: 2 * r,
          height: 2 * r,
        })}
      </Layer>
    );
  }
}

export default ReferenceDot;
