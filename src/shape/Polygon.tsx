/**
 * @fileOverview Polygon
 */
import * as React from 'react';
import { SVGProps } from 'react';
import { clsx } from 'clsx';
import { Coordinate } from '../util/types';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { roundTemplateLiteral } from '../util/round';

const isValidatePoint = (point: Coordinate) => {
  return point && point.x === +point.x && point.y === +point.y;
};

const getParsedPoints = (points: ReadonlyArray<Coordinate> = []) => {
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

const getSinglePolygonPath = (points: ReadonlyArray<Coordinate>, connectNulls?: boolean) => {
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
        return roundTemplateLiteral`${path}${index === 0 ? 'M' : 'L'}${point.x},${point.y}`;
      }, '');
    })
    .join('');

  return segmentPoints.length === 1 ? `${polygonPath}Z` : polygonPath;
};

const getRanglePath = (
  points: ReadonlyArray<Coordinate>,
  baseLinePoints: ReadonlyArray<Coordinate>,
  connectNulls?: boolean,
) => {
  const outerPath = getSinglePolygonPath(points, connectNulls);

  return `${outerPath.slice(-1) === 'Z' ? outerPath.slice(0, -1) : outerPath}L${getSinglePolygonPath(
    Array.from(baseLinePoints).reverse(),
    connectNulls,
  ).slice(1)}`;
};

interface PolygonProps {
  className?: string;
  /**
   * The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.
   */
  points?: ReadonlyArray<Coordinate>;
  baseLinePoints?: ReadonlyArray<Coordinate>;
  connectNulls?: boolean;

  /**
   * The customized event handler of click on the polygon
   */
  onClick?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mousedown on the polygon
   */
  onMouseDown?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseup on the polygon
   */
  onMouseUp?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mousemove on the polygon
   */
  onMouseMove?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseover on the polygon
   */
  onMouseOver?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseout on the polygon
   */
  onMouseOut?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseenter on the polygon
   */
  onMouseEnter?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseleave on the polygon
   */
  onMouseLeave?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
}

export type Props = Omit<SVGProps<SVGPolygonElement>, 'points'> & PolygonProps;

export const Polygon: React.FC<Props> = props => {
  const { points, className, baseLinePoints, connectNulls, ...others } = props;

  if (!points || !points.length) {
    return null;
  }

  const layerClass = clsx('recharts-polygon', className);

  if (baseLinePoints && baseLinePoints.length) {
    const hasStroke = others.stroke && others.stroke !== 'none';
    const rangePath = getRanglePath(points, baseLinePoints, connectNulls);

    return (
      <g className={layerClass}>
        <path
          {...svgPropertiesAndEvents(others)}
          fill={rangePath.slice(-1) === 'Z' ? others.fill : 'none'}
          stroke="none"
          d={rangePath}
        />
        {hasStroke ? (
          <path {...svgPropertiesAndEvents(others)} fill="none" d={getSinglePolygonPath(points, connectNulls)} />
        ) : null}
        {hasStroke ? (
          <path
            {...svgPropertiesAndEvents(others)}
            fill="none"
            d={getSinglePolygonPath(baseLinePoints, connectNulls)}
          />
        ) : null}
      </g>
    );
  }

  const singlePath = getSinglePolygonPath(points, connectNulls);

  return (
    <path
      {...svgPropertiesAndEvents(others)}
      fill={singlePath.slice(-1) === 'Z' ? others.fill : 'none'}
      className={layerClass}
      d={singlePath}
    />
  );
};
