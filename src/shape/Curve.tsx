/**
 * @fileOverview Curve
 */
import * as React from 'react';
import { Ref } from 'react';
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

import { clsx } from 'clsx';
import { LayoutType, PresentationAttributesWithProps, adaptEventHandlers } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { isNumber, upperFirst } from '../util/DataUtils';
import { isWellBehavedNumber } from '../util/isWellBehavedNumber';

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

/**
 * @deprecated use {@link Coordinate} instead
 * Duplicated with `Coordinate` in `util/types.ts`
 */
export interface Point {
  readonly x: number;
  readonly y: number;
}

/**
 * @deprecated use {@link NullableCoordinate} instead
 * Duplicated with `NullableCoordinate` in `util/types.ts`
 */
export interface NullablePoint {
  readonly x: number | null;
  readonly y: number | null;
}

const defined = (p: NullablePoint): p is Point => isWellBehavedNumber(p.x) && isWellBehavedNumber(p.y);
const getX = (p: Point) => p.x;
const getY = (p: Point) => p.y;

const getCurveFactory = (type: CurveType, layout: LayoutType | undefined) => {
  if (typeof type === 'function') {
    return type;
  }

  const name = `curve${upperFirst(type)}`;

  if ((name === 'curveMonotone' || name === 'curveBump') && layout) {
    return CURVE_FACTORIES[`${name}${layout === 'vertical' ? 'Y' : 'X'}`];
  }
  return CURVE_FACTORIES[name] || curveLinear;
};

interface CurveProps {
  className?: string;
  type?: CurveType;
  layout?: LayoutType;
  baseLine?: number | ReadonlyArray<NullablePoint>;
  points?: ReadonlyArray<NullablePoint>;
  connectNulls?: boolean;
  path?: string;
  pathRef?: Ref<SVGPathElement>;
}

export type Props = Omit<PresentationAttributesWithProps<CurveProps, SVGPathElement>, 'type' | 'points'> & CurveProps;

type GetPathProps = Pick<Props, 'type' | 'points' | 'baseLine' | 'layout' | 'connectNulls'>;

/**
 * Calculate the path of curve. Returns null if points is an empty array.
 * @return path or null
 */
export const getPath = ({
  type = 'linear',
  points = [],
  baseLine,
  layout,
  connectNulls = false,
}: GetPathProps): string | null => {
  const curveFactory = getCurveFactory(type, layout);
  const formatPoints: ReadonlyArray<NullablePoint> = connectNulls ? points.filter(defined) : points;
  let lineFunction;

  if (Array.isArray(baseLine)) {
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

  const realPath: string | null | undefined = points && points.length ? getPath(props) : path;

  return (
    <path
      {...filterProps(props, false)}
      {...adaptEventHandlers(props)}
      className={clsx('recharts-curve', className)}
      d={realPath === null ? undefined : realPath}
      ref={pathRef}
    />
  );
};
