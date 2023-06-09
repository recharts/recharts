/**
 * @fileOverview Curve
 */
import React from 'react';
import {
  line as shapeLine,
  area as shapeArea,
  CurveFactory,
  curveBasisClosed,
  curveBasisOpen,
  curveBasis,
  curveBumpX,
  curveBumpY,
  curveLinearClosed,
  curveLinear,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural,
  curveStep,
  curveStepAfter,
  curveStepBefore,
} from 'victory-vendor/d3-shape';
import classNames from 'classnames';
import _ from 'lodash';
import { LayoutType, PresentationAttributesWithProps, adaptEventHandlers } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { isNumber } from '../util/DataUtils';

interface CurveFactories {
  [index: string]: CurveFactory;
}

const CURVE_FACTORIES: CurveFactories = {
  curveBasisClosed,
  curveBasisOpen,
  curveBasis,
  curveBumpX,
  curveBumpY,
  curveLinearClosed,
  curveLinear,
  curveMonotoneX,
  curveMonotoneY,
  curveNatural,
  curveStep,
  curveStepAfter,
  curveStepBefore,
};

export type CurveType =
  | 'basis'
  | 'basisClosed'
  | 'basisOpen'
  | 'bumpX'
  | 'bumpY'
  | 'bump'
  | 'linear'
  | 'linearClosed'
  | 'natural'
  | 'monotoneX'
  | 'monotoneY'
  | 'monotone'
  | 'step'
  | 'stepBefore'
  | 'stepAfter'
  | CurveFactory;

export interface Point {
  x: number;
  y: number;
}

const defined = (p: Point) => p.x === +p.x && p.y === +p.y;
const getX = (p: Point) => p.x;
const getY = (p: Point) => p.y;

const getCurveFactory = (type: CurveType, layout: LayoutType) => {
  if (_.isFunction(type)) {
    return type;
  }

  const name = `curve${_.upperFirst(type)}`;

  if ((name === 'curveMonotone' || name === 'curveBump') && layout) {
    return CURVE_FACTORIES[`${name}${layout === 'vertical' ? 'Y' : 'X'}`];
  }
  return CURVE_FACTORIES[name] || curveLinear;
};

interface CurveProps {
  className?: string;
  type?: CurveType;
  layout?: LayoutType;
  baseLine?: number | Array<Point>;
  points?: Array<Point>;
  connectNulls?: boolean;
  path?: string;
  pathRef?: (ref: SVGPathElement) => void;
}

export type Props = Omit<PresentationAttributesWithProps<CurveProps, SVGPathElement>, 'type' | 'points'> & CurveProps;

type GetPathProps = Pick<Props, 'type' | 'points' | 'baseLine' | 'layout' | 'connectNulls'>;

/**
 * Calculate the path of curve
 * @return {String} path
 */
const getPath = ({ type, points, baseLine, layout, connectNulls }: GetPathProps): string => {
  const curveFactory = getCurveFactory(type, layout);
  const formatPoints = connectNulls ? points.filter(entry => defined(entry)) : points;
  let lineFunction;

  if (_.isArray(baseLine)) {
    const formatBaseLine = connectNulls ? baseLine.filter(base => defined(base)) : baseLine;
    const areaPoints = formatPoints.map((entry, index) => ({ ...entry, base: formatBaseLine[index] }));
    if (layout === 'vertical') {
      lineFunction = shapeArea<Point & { base: Point }>()
        .y(getY)
        .x1(getX)
        .x0(d => d.base.x);
    } else {
      lineFunction = shapeArea<Point & { base: Point }>()
        .x(getX)
        .y1(getY)
        .y0(d => d.base.y);
    }
    lineFunction.defined(defined).curve(curveFactory);

    return lineFunction(areaPoints);
  }
  if (layout === 'vertical' && isNumber(baseLine)) {
    lineFunction = shapeArea<Point>().y(getY).x1(getX).x0(baseLine);
  } else if (isNumber(baseLine)) {
    lineFunction = shapeArea<Point>().x(getX).y1(getY).y0(baseLine);
  } else {
    lineFunction = shapeLine<Point>().x(getX).y(getY);
  }

  lineFunction.defined(defined).curve(curveFactory);

  return lineFunction(formatPoints);
};

export const Curve: React.FC<Props> = props => {
  const { className, points, path, pathRef } = props;

  if ((!points || !points.length) && !path) {
    return null;
  }

  const realPath = points && points.length ? getPath(props) : path;

  return (
    <path
      {...filterProps(props)}
      {...adaptEventHandlers(props)}
      className={classNames('recharts-curve', className)}
      d={realPath}
      ref={pathRef}
    />
  );
};

Curve.defaultProps = { type: 'linear', points: [], connectNulls: false };
