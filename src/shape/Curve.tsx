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
  Area,
  Line,
} from 'victory-vendor/d3-shape';

import { clsx } from 'clsx';
import {
  LayoutType,
  PresentationAttributesWithProps,
  adaptEventHandlers,
  NullableCoordinate,
  Coordinate,
} from '../util/types';
import { isNumber, upperFirst } from '../util/DataUtils';
import { isWellBehavedNumber } from '../util/isWellBehavedNumber';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';

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

type AreaPoint = Coordinate & { base: Coordinate };

type NullableAreaPoint = NullableCoordinate & { base?: NullableCoordinate };

const defined = (p: NullableCoordinate): p is Coordinate => isWellBehavedNumber(p.x) && isWellBehavedNumber(p.y);
const areaDefined = (d: NullableAreaPoint): d is AreaPoint => d.base != null && defined(d.base) && defined(d);
const getX = (p: Coordinate) => p.x;
const getY = (p: Coordinate) => p.y;

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
  /**
   * @defaultValue linear
   */
  type?: CurveType;
  layout?: LayoutType;
  baseLine?: number | ReadonlyArray<NullableCoordinate>;
  points?: ReadonlyArray<NullableCoordinate>;
  /**
   * @defaultValue false
   */
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
  const formatPoints: ReadonlyArray<NullableCoordinate> = connectNulls ? points.filter(defined) : points;
  let lineFunction: Area<Coordinate> | Line<Coordinate>;

  // When dealing with an area chart (where `baseLine` is an array),
  // we need to pair points with their corresponding `baseLine` points first.
  // This is to ensure that we filter points and their baseline counterparts together,
  // preventing errors from mismatched array lengths and ensuring `defined` checks both.
  if (Array.isArray(baseLine)) {
    const areaPoints: ReadonlyArray<NullableAreaPoint> = points.map((entry, index) => ({
      ...entry,
      base: baseLine[index],
    }));

    if (layout === 'vertical') {
      lineFunction = shapeArea<AreaPoint>()
        .y(getY)
        .x1(getX)
        .x0(d => d.base.x);
    } else {
      lineFunction = shapeArea<AreaPoint>()
        .x(getX)
        .y1(getY)
        .y0(d => d.base.y);
    }
    /*
     * What happens here is that the `.defined()` call will make it so that this function can accept
     * nullable points, and internally it will filter them out and skip when generating the path.
     * So on the input it accepts NullableCoordinate, but it never calls getX/getY on null points because of the defined() filter.
     *
     * The d3 type definition has only one generic so it doesn't allow to describe this properly.
     * However. d3 types are mutable, but we can pretend that they are not and we can pretend
     * that calling defined() returns a new function with a different generic type.
     */
    const nullableLineFunction: Area<NullableCoordinate> | Line<NullableCoordinate> = lineFunction
      .defined(areaDefined)
      .curve(curveFactory);

    const finalPoints: ReadonlyArray<NullableAreaPoint> = connectNulls ? areaPoints.filter(areaDefined) : areaPoints;

    return nullableLineFunction(finalPoints);
  }
  if (layout === 'vertical' && isNumber(baseLine)) {
    lineFunction = shapeArea<Coordinate>().y(getY).x1(getX).x0(baseLine);
  } else if (isNumber(baseLine)) {
    lineFunction = shapeArea<Coordinate>().x(getX).y1(getY).y0(baseLine);
  } else {
    lineFunction = shapeLine<Coordinate>().x(getX).y(getY);
  }

  const nullableLineFunction: Area<NullableCoordinate> | Line<NullableCoordinate> = lineFunction
    .defined(defined)
    .curve(curveFactory);

  return nullableLineFunction(formatPoints);
};

export const Curve: React.FC<Props> = props => {
  const { className, points, path, pathRef } = props;

  if ((!points || !points.length) && !path) {
    return null;
  }

  const realPath: string | null | undefined = points && points.length ? getPath(props) : path;

  return (
    <path
      {...svgPropertiesNoEvents(props)}
      {...adaptEventHandlers(props)}
      className={clsx('recharts-curve', className)}
      d={realPath === null ? undefined : realPath}
      ref={pathRef}
    />
  );
};
