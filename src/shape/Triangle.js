/**
 * @fileOverview Triangle
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

@pureRender
class Rectangle extends Component {

  static displayName = 'Rectangle';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })),
    radius: PropTypes.number,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    radius: 0,
    stroke: 'none',
    strokeWidth: 1,
    strokeDasharray: 'none',
    fill: '#000',
    onMouseEnter() {},
    onMouseLeave() {},
    onClick() {},
  };

  getPath(points) {
    if (!points || !points.length) {return '';}

    const ary = points.map(entry => `${entry.x} ${entry.y}`);

    return `M${ary.join('L')}Z`;
  }

  render() {
    const { points, radius, onClick, className, onMouseEnter, onMouseLeave } = this.props;
    const layerClass = classNames('recharts-triangle', className);

    return (
      <path
        {...getPresentationAttributes(this.props)}
        className={layerClass}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        d={this.getPath(points, radius)}
      />
    );
  }
}

export default Rectangle;
