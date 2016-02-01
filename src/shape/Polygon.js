/**
 * @fileOverview Polygon
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';

@pureRender
class Polygon extends Component {

  static displayName = 'Polygon';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: PropTypes.string,
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

  render() {
    const { points, className } = this.props;

    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-polygon', className);

    return (
      <polygon
        {...ReactUtils.getPresentationAttributes(this.props)}
        className={layerClass}
        points={this.getPolygonPoints(points)}/>
    );
  }
}

export default Polygon;
