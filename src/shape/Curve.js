/**
 * @fileOverview Curve
 */
import React, { Component, PropTypes } from 'react';
import { line as shapeLine, curveBasisClosed, curveBasisOpen, curveBasis,
  curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural,
  curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';
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

@pureRender
class Curve extends Component {

  static displayName = 'Curve';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOfType([PropTypes.oneOf([
      'basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural',
      'monotone', 'step', 'stepBefore', 'stepAfter',
    ]), PropTypes.func]),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    baseLine: PropTypes.oneOfType([
      PropTypes.number, PropTypes.array,
    ]),
    points: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    type: 'linear',
    stroke: '#000',
    fill: 'none',
    strokeWidth: 1,
    strokeDasharray: 'none',
    points: [],
  };

  getCurveFactory(type, layout) {
    if (_.isFunction(type)) { return type; }

    const name = `curve${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

    if (name === 'curveMonotone' && layout) {
      return CURVE_FACTORIES[`${name}${layout === 'vertical' ? 'Y' : 'X'}`];
    }
    return CURVE_FACTORIES[name] || curveLinear;
  }

  /**
   * Calculate the path of curve
   * @return {String} path
   */
  getPath() {
    const { type, points, baseLine, layout } = this.props;
    const l = shapeLine().x(p => p.x)
                    .y(p => p.y)
                    .defined(p => p.x === +p.x && p.y === + p.y)
                    .curve(this.getCurveFactory(type, layout));
    const len = points.length;
    let curvePath = l(points);

    if (!curvePath) { return ''; }

    if (layout === 'horizontal' && _.isNumber(baseLine)) {
      curvePath += `L${points[len - 1].x} ${baseLine}L${points[0].x} ${baseLine}Z`;
    } else if (layout === 'vertical' && _.isNumber(baseLine)) {
      curvePath += `L${baseLine} ${points[len - 1].y}L${baseLine} ${points[0].y}Z`;
    } else if (_.isArray(baseLine) && baseLine.length) {
      const revese = baseLine.reduce((result, entry) => [entry, ...result], []);
      const revesePath = this.fliterMouseToSeg(l(revese) || '');

      curvePath += `L${revese[0].x} ${revese[0].y}${revesePath}Z`;
    }

    return curvePath;
  }

  fliterMouseToSeg(path) {
    const reg = /[CSLHVcslhv]/;
    const res = reg.exec(path);

    if (res && res.length) {
      const index = path.indexOf(res[0]);

      return path.slice(index);
    }

    return path;
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
