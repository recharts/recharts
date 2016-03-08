/**
 * @fileOverview Triangle
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';

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
  };

  static defaultProps = {
    radius: 0,
    stroke: 'none',
    strokeWidth: 1,
    strokeDasharray: 'none',
    fill: '#000',
  };

  getPath(points) {

    const ary = points.map(entry => `${entry.x} ${entry.y}`);

    return `M${ary.join('L')}Z`;
  }

  render() {
    const { points, radius, className } = this.props;
    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-triangle', className);

    return (
      <path
        {...getPresentationAttributes(this.props)}
        {...filterEventAttributes(this.props)}
        className={layerClass}
        d={this.getPath(points, radius)}
      />
    );
  }
}

export default Rectangle;
