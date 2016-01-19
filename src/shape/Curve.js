import React, { PropTypes } from 'react';
import d3Shape from 'd3-shape';
import pureRender from 'pure-render-decorator';

@pureRender
class Curve extends React.Component {

  static displayName = 'Curve';

  static propTypes = {
    type: PropTypes.oneOf(['linear', 'monotone', 'step', 'stepBefore', 'stepAfter']),
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    strokeDasharray: PropTypes.string,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    baseLineType: PropTypes.oneOf(['horizontal', 'vertical', 'curve']),
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
  /**
   * Calculate the path of curve
   * @return {String} path
   */
  getPath() {
    const { type, points, baseLine, baseLineType } = this.props;
    const l = d3Shape.line().x(p => p.x)
                    .y(p => p.y)
                    .defined(p => p.x && p.x === +p.x && p.y && p.y === + p.y)
                    .curve(d3Shape[type]);
    const len = points.length;
    let curvePath = l(points);

    if (!curvePath) { return ''; }

    if (baseLineType === 'horizontal' && baseLine === +baseLine) {
      curvePath += `L${points[len - 1].x} ${baseLine}L${points[0].x} ${baseLine}Z`;
    } else if (baseLineType === 'vertical' && baseLine === +baseLine) {
      curvePath += `L${baseLine} ${points[len - 1].y}L${baseLine} ${points[0].y}Z`;
    }

    return curvePath;
  }

  render() {
    const { className, points, type, onClick,
        onMouseEnter, onMouseLeave, ...others } = this.props;

    if (!points || !points.length) {
      return null;
    }

    return (
      <path
        {...others}
        className={'recharts-curve' + (className || '')}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        d={this.getPath()}
      />
    );
  }
}

export default Curve;
