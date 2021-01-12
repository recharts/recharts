/**
 * @fileOverview Polygon
 */
import React, { PureComponent, SVGProps } from 'react';
import classNames from 'classnames';
import { filterProps, Coordinate } from '../util/types';

const isValidatePoint = (point: Coordinate) => {
  return point && point.x === +point.x && point.y === +point.y;
};

const getParsedPoints = (points: Coordinate[] = []) => {
  let segmentPoints: Coordinate[][] = [[]];

  points.forEach(entry => {
    if (isValidatePoint(entry)) {
      segmentPoints[segmentPoints.length - 1].push(entry);
    } else if (segmentPoints[segmentPoints.length - 1].length > 0) {
      // add another path
      segmentPoints.push([]);
    }
  });

  if (isValidatePoint(points[0])) {
    segmentPoints[segmentPoints.length - 1].push(points[0]);
  }

  if (segmentPoints[segmentPoints.length - 1].length <= 0) {
    segmentPoints = segmentPoints.slice(0, -1);
  }

  return segmentPoints;
};

const getSinglePolygonPath = (points: Coordinate[], connectNulls?: boolean) => {
  let segmentPoints = getParsedPoints(points);

  if (connectNulls) {
    segmentPoints = [
      segmentPoints.reduce((res: Coordinate[], segPoints: Coordinate[]) => {
        return [...res, ...segPoints];
      }, []),
    ];
  }

  const polygonPath = segmentPoints
    .map(segPoints => {
      return segPoints.reduce((path: string, point: Coordinate, index: number) => {
        return `${path}${index === 0 ? 'M' : 'L'}${point.x},${point.y}`;
      }, '');
    })
    .join('');

  return segmentPoints.length === 1 ? `${polygonPath}Z` : polygonPath;
};

const getRanglePath = (points: Coordinate[], baseLinePoints: Coordinate[], connectNulls?: boolean) => {
  const outerPath = getSinglePolygonPath(points, connectNulls);

  return `${outerPath.slice(-1) === 'Z' ? outerPath.slice(0, -1) : outerPath}L${getSinglePolygonPath(
    baseLinePoints.reverse(),
    connectNulls,
  ).slice(1)}`;
};

interface PolygonProps {
  className?: string;
  points?: Coordinate[];
  baseLinePoints?: Coordinate[];
  connectNulls?: boolean;
}

export type Props = Omit<SVGProps<SVGPolygonElement>, 'points'> & PolygonProps;

export class Polygon extends PureComponent<Props> {
  render() {
    const { points, className, baseLinePoints, connectNulls, ...others } = this.props;

    if (!points || !points.length) {
      return null;
    }

    const layerClass = classNames('recharts-polygon', className);

    if (baseLinePoints && baseLinePoints.length) {
      const hasStroke = others.stroke && others.stroke !== 'none';
      const rangePath = getRanglePath(points, baseLinePoints, connectNulls);

      return (
        <g className={layerClass}>
          <path
            {...filterProps(others, true)}
            fill={rangePath.slice(-1) === 'Z' ? others.fill : 'none'}
            stroke="none"
            d={rangePath}
          />
          {hasStroke ? (
            <path {...filterProps(others, true)} fill="none" d={getSinglePolygonPath(points, connectNulls)} />
          ) : null}
          {hasStroke ? (
            <path {...filterProps(others, true)} fill="none" d={getSinglePolygonPath(baseLinePoints, connectNulls)} />
          ) : null}
        </g>
      );
    }

    const singlePath = getSinglePolygonPath(points, connectNulls);

    return (
      <path
        {...filterProps(others, true)}
        fill={singlePath.slice(-1) === 'Z' ? others.fill : 'none'}
        className={layerClass}
        d={singlePath}
      />
    );
  }
}
