/**
 * @fileOverview Polygon
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes,
  filterEventAttributes } from '../util/ReactUtils';

const getPolygonPoints = points => (
  points.reduce((result, entry) => {
    if (entry.x === +entry.x && entry.y === +entry.y) {
      result.push([entry.x, entry.y]);
    }

    return result;
  }, []).join(' ')
);

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

  render() {
    const { points, className } = this.props;

    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-polygon', className);

    return (
      <polygon
        {...getPresentationAttributes(this.props)}
        {...filterEventAttributes(this.props)}
        className={layerClass}
        points={getPolygonPoints(points)}
      />
    );
  }
}

export default Polygon;
