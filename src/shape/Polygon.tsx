/**
 * @fileOverview Polygon
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { PresentationAttributes, filterProps, Coordinate } from '../util/types';

const getPolygonPoints = (points: Array<Coordinate>) => (
  points.reduce((result, entry) => {
    if (entry.x === +entry.x && entry.y === +entry.y) {
      result.push([entry.x, entry.y]);
    }

    return result;
  }, []).join(' ')
);

interface PolygonProps {
  className?: string;
  points?: Array<Coordinate>
}

type Props = Omit<PresentationAttributes<SVGPolygonElement>, 'points'> & PolygonProps;

class Polygon extends PureComponent<Props> {
  render() {
    const { points, className } = this.props;

    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-polygon', className);

    return (
      <polygon
        {...filterProps(this.props, true)}
        className={layerClass}
        points={getPolygonPoints(points)}
      />
    );
  }
}

export default Polygon;
