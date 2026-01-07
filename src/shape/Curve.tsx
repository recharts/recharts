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
  Area as D3AreaCurve,
  Line as D3LineCurve,
} from 'victory-vendor/d3-shape';

import { clsx } from 'clsx';
import {
  LayoutType,
  PresentationAttributesWithProps,
  adaptEventHandlers,
  NullableCoordinate,
  Coordinate,
  RechartsMouseEventHandler,
} from '../util/types';
import { isNumber, upperFirst } from '../util/DataUtils';
import { isWellBehavedNumber } from '../util/isWellBehavedNumber';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { useChartLayout } from '../context/chartLayoutContext';

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

/**
 * @inline
 */
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

const getCurveFactory = (type: CurveType, layout: LayoutType | undefined): CurveFactory => {
  if (typeof type === 'function') {
    return type;
  }

  const name = `curve${upperFirst(type)}`;

  if ((name === 'curveMonotone' || name === 'curveBump') && layout) {
    const factory = CURVE_FACTORIES[`${name}${layout === 'vertical' ? 'Y' : 'X'}`];
    if (factory) {
      return factory;
    }
  }
  return CURVE_FACTORIES[name] || curveLinear;
};

interface CurveProps {
  className?: string;
  /**
   * The interpolation type of curve. Allows custom interpolation function.
   *
   * @defaultValue linear
   * @link https://d3js.org/d3-shape/curve
   * @see {@link https://recharts.github.io/en-US/examples/CardinalAreaChart/ An AreaChart which has two area with different interpolation.}
   */
  type?: CurveType;
  /**
   * This option affects the interpolation algorithm when the `type` prop is set to 'monotone'.
   * It also specifies the type of baseline when the curve is closed.
   */
  layout?: LayoutType;
  /**
   * Baseline of the area:
   * - number: uses the corresponding axis value as a flat baseline;
   * - an array of coordinates: describes a custom baseline path.
   */
  baseLine?: number | ReadonlyArray<NullableCoordinate>;
  /**
   * The coordinates of all the points in the curve, like an array of objects with x and y coordinates.
   */
  points?: ReadonlyArray<NullableCoordinate>;
  /**
   * Whether to connect the curve across null points.
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/LineChartConnectNulls/ LineChart with connectNull true and false}
   * @see {@link https://recharts.github.io/en-US/examples/AreaChartConnectNulls/ AreaChart with connectNull true and false}
   */
  connectNulls?: boolean;
  path?: string;
  pathRef?: Ref<SVGPathElement>;
  /**
   * The pattern of dashes and gaps used to paint the line.
   *
   * @example strokeDasharray="5 5"
   * @example strokeDasharray={10}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray}
   */
  strokeDasharray?: string | number;
}

export type CurveMouseEventHandler = RechartsMouseEventHandler<Props, SVGPathElement>;

type CurveMouseEvents = {
  /**
   * The customized event handler of click on the curve
   */
  onClick?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseenter on the curve
   */
  onMouseEnter?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseleave on the curve
   */
  onMouseLeave?: CurveMouseEventHandler;
  /**
   * The customized event handler of mousedown on the curve
   */
  onMouseDown?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseup on the curve
   */
  onMouseUp?: CurveMouseEventHandler;
  /**
   * The customized event handler of mousemove on the curve
   */
  onMouseMove?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseover on the curve
   */
  onMouseOver?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseout on the curve
   */
  onMouseOut?: CurveMouseEventHandler;
};

// Mouse event handlers receive the full Props, including the event handlers themselves.
export type Props = Omit<
  PresentationAttributesWithProps<CurveProps, SVGPathElement>,
  | 'type'
  | 'points'
  | 'onClick'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onMouseMove'
  | 'onMouseOver'
  | 'onMouseOut'
> &
  CurveMouseEvents &
  CurveProps;

type GetPathProps = Pick<Props, 'type' | 'points' | 'baseLine' | 'layout' | 'connectNulls'>;

export const defaultCurveProps = {
  connectNulls: false,
  type: 'linear',
} as const satisfies Partial<Props>;

/**
 * Calculate the path of curve. Returns null if points is an empty array.
 * @return path or null
 */
export const getPath = ({
  type = defaultCurveProps.type,
  points = [],
  baseLine,
  layout,
  connectNulls = defaultCurveProps.connectNulls,
}: GetPathProps): string | null => {
  const curveFactory = getCurveFactory(type, layout);
  const formatPoints: ReadonlyArray<NullableCoordinate> = connectNulls ? points.filter(defined) : points;

  // When dealing with an area chart (where `baseLine` is an array),
  // we need to pair points with their corresponding `baseLine` points first.
  // This is to ensure that we filter points and their baseline counterparts together,
  // preventing errors from mismatched array lengths and ensuring `defined` checks both.
  if (Array.isArray(baseLine)) {
    let lineFunction: D3AreaCurve<AreaPoint>;

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
     * However. d3 types are mutable, but we can pretend that they are not, and we can pretend
     * that calling defined() returns a new function with a different generic type.
     */
    // @ts-expect-error the defined call changes the generic type internally but d3 types don't reflect that
    const nullableLineFunction: D3AreaCurve<NullableAreaPoint> = lineFunction.defined(areaDefined).curve(curveFactory);

    const finalPoints: ReadonlyArray<NullableAreaPoint> = connectNulls ? areaPoints.filter(areaDefined) : areaPoints;

    return nullableLineFunction(finalPoints);
  }

  let lineFunction: D3LineCurve<Coordinate> | D3AreaCurve<Coordinate>;
  if (layout === 'vertical' && isNumber(baseLine)) {
    lineFunction = shapeArea<Coordinate>().y(getY).x1(getX).x0(baseLine);
  } else if (isNumber(baseLine)) {
    lineFunction = shapeArea<Coordinate>().x(getX).y1(getY).y0(baseLine);
  } else {
    lineFunction = shapeLine<Coordinate>().x(getX).y(getY);
  }

  // @ts-expect-error the defined call changes the generic type internally but d3 types don't reflect that
  const nullableLineFunction: D3LineCurve<NullableCoordinate> = lineFunction.defined(defined).curve(curveFactory);

  return nullableLineFunction(formatPoints);
};

export const Curve: React.FC<Props> = props => {
  const { className, points, path, pathRef } = props;
  const layout = useChartLayout();

  if ((!points || !points.length) && !path) {
    return null;
  }

  const getPathInput: GetPathProps = {
    type: props.type,
    points: props.points,
    baseLine: props.baseLine,
    layout: props.layout || layout,
    connectNulls: props.connectNulls,
  };

  const realPath: string | null | undefined = points && points.length ? getPath(getPathInput) : path;

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
