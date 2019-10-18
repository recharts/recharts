/**
 * @fileOverview Polygon
 */
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { PresentationAttributes } from '../util/types';

interface Point {
  x: number;
  y: number;
}

const getPolygonPoints = (points: Array<Point>) => (
  points.reduce((result, entry) => {
    if (entry.x === +entry.x && entry.y === +entry.y) {
      result.push([entry.x, entry.y]);
    }

    return result;
  }, []).join(' ')
);

interface PolygonProps {
  className?: string;
  points?: Array<Point>
}

type Props = PresentationAttributes<SVGPolygonElement> & PolygonProps;

class Polygon extends PureComponent<Props> {
  render() {
    const { points, className, ...rest } = this.props;

    if (!points || !points.length) { return null; }

    const layerClass = classNames('recharts-polygon', className);

    return (
      <polygon
        {...rest}
        className={layerClass}
        points={getPolygonPoints(points)}
      />
    );
  }
}

export default Polygon;
