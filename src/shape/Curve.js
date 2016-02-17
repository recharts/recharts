/**
 * @fileOverview Curve
 */
import React, { Component, PropTypes } from 'react';
import d3Shape from 'd3-shape';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import _ from 'lodash';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

@pureRender
class Curve extends Component {

  static displayName = 'Curve';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
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
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
  };

  getCurveFactory(type, layout) {
    const name = `curve${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

    if (name === 'curveMonotone') {
      return d3Shape[`${name}${layout === 'vertical' ? 'Y' : 'X'}`];
    }
    return d3Shape[name];
  }

  /**
   * Calculate the path of curve
   * @return {String} path
   */
  getPath() {
    const { type, points, baseLine, layout } = this.props;
    const l = d3Shape.line().x(p => p.x)
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
    const { className, points, type, onClick,
        onMouseEnter, onMouseLeave } = this.props;

    if (!points || !points.length) { return null; }

    return (
      <path
        {...getPresentationAttributes(this.props)}
        className={classNames('recharts-curve', className)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        d={this.getPath()}
      />
    );
  }
}

export default Curve;
