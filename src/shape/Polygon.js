/**
 * @fileOverview Polygon
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from '../util/ReactUtils';

@pureRender
class Polygon extends Component {

  static displayName = 'Polygon';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
    shape: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })),
  };

  static defaultProps = {
    fill: 'none',
    stroke: '#333',
    strokeWidth: 1,
  };

  getPolygonPoints(points) {
    return points.reduce((result, entry) => {
      if (entry.x === +entry.x && entry.y === +entry.y) {
        result.push([entry.x, entry.y]);
      }

      return result;
    }, []).join(' ');
  }

  renderCustomizedShape() {
    const { shape } = this.props;

    if (React.isValidElement(shape)) {
      return React.cloneElement(shape, this.props);
    } else if (_.isFunction(shape)) {
      return shape(this.props);
    }

    return null;
  }

  render() {
    const { points, className, shape } = this.props;

    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-polygon', className);

    return shape ? this.renderCustomizedShape :t (
      <polygon
        {...getPresentationAttributes(this.props)}
        className={layerClass}
        points={this.getPolygonPoints(points)}
      />
    );
  }
}

export default Polygon;
