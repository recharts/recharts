/**
 * @fileOverview Curve
 */
import React, { Component, PropTypes } from 'react';
import { line as shapeLine, area as shapeArea, curveBasisClosed, curveBasisOpen,
  curveBasis, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY,
  curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import _ from 'lodash';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';

const CURVE_FACTORIES = {
  curveBasisClosed, curveBasisOpen, curveBasis, curveLinearClosed, curveLinear,
  curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter,
  curveStepBefore,
};

const defined = p => p.x === +p.x && p.y === + p.y;
const getX = p => p.x;
const getY = p => p.y;

const getCurveFactory = (type, layout) => {
  if (_.isFunction(type)) { return type; }

  const name = `curve${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

  if (name === 'curveMonotone' && layout) {
    return CURVE_FACTORIES[`${name}${layout === 'vertical' ? 'Y' : 'X'}`];
  }
  return CURVE_FACTORIES[name] || curveLinear;
};

@pureRender
class Curve extends Component {

  static displayName = 'Curve';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.oneOf([
      'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural',
      'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter',
    ]), PropTypes.func]),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    baseLine: PropTypes.oneOfType([
      PropTypes.number, PropTypes.array,
    ]),
    points: PropTypes.arrayOf(PropTypes.object),
    connectNulls: PropTypes.bool,
  };

  static defaultProps = {
    type: 'linear',
    stroke: '#000',
    fill: 'none',
    strokeWidth: 1,
    strokeDasharray: 'none',
    points: [],
    connectNulls: false,
  };
  /**
   * Calculate the path of curve
   * @return {String} path
   */
  getPath() {
    const { type, points, baseLine, layout, connectNulls } = this.props;
    const curveFactory = getCurveFactory(type, layout);
    const formatPoints = connectNulls ? points.filter(entry => defined(entry)) : points;
    let lineFunction;

    if (_.isArray(baseLine)) {
      const areaPoints = formatPoints.map((entry, index) => (
        { ...entry, base: baseLine[index] }
      ));
      if (layout === 'vertical') {
        lineFunction = shapeArea().y(getY)
                                  .x1(getX)
                                  .x0(d => d.base.x);
      } else {
        lineFunction = shapeArea().x(getX)
                                  .y1(getY)
                                  .y0(d => d.base.y);
      }
      lineFunction.defined(defined)
                  .curve(curveFactory);

      return lineFunction(areaPoints);
    } else if (layout === 'vertical' && _.isNumber(baseLine)) {
      lineFunction = shapeArea().y(getY)
                                .x1(getX)
                                .x0(baseLine);
    } else if (_.isNumber(baseLine)) {
      lineFunction = shapeArea().x(getX)
                                .y1(getY)
                                .y0(baseLine);
    } else {
      lineFunction = shapeLine().x(getX)
                                .y(getY);
    }

    lineFunction.defined(defined)
                .curve(curveFactory);

    return lineFunction(formatPoints);
  }

  render() {
    const { className, points, type } = this.props;

    if (!points || !points.length) { return null; }

    return (
      <path
        {...getPresentationAttributes(this.props)}
        {...filterEventAttributes(this.props)}
        className={classNames('recharts-curve', className)}
        d={this.getPath()}
      />
    );
  }
}

export default Curve;
