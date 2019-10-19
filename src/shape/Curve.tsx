/**
 * @fileOverview Curve
 */
import React, { PureComponent, SVGProps } from 'react';
import { line as shapeLine, area as shapeArea, CurveFactory, curveBasisClosed, curveBasisOpen,
  curveBasis, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY,
  curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';
import classNames from 'classnames';
import _ from 'lodash';
import { LayoutType, PresentationAttributesWithProps, adaptEventHandlers } from '../util/types';
// @ts-ignore
import { isNumber } from '../util/DataUtils';

interface CurveFactories {
  [index: string] : CurveFactory;
}

const CURVE_FACTORIES: CurveFactories = {
  curveBasisClosed, curveBasisOpen, curveBasis, curveLinearClosed, curveLinear,
  curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter,
  curveStepBefore,
};

type CurveType = 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' |
  'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | CurveFactory;

interface Point<T> {
  base?: Point<T>
  x: number;
  y: number;
  value: number;
  payload: T;
}

const defined = <T extends {}>(p: Point<T>) => p.x === +p.x && p.y === +p.y;
const getX = <T extends {}>(p: Point<T>) => p.x;
const getY = <T extends {}>(p: Point<T>) => p.y;

const getCurveFactory = (type: CurveType, layout: LayoutType) => {
  if (_.isFunction(type)) { return type; }

  const name = `curve${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

  if (name === 'curveMonotone' && layout) {
    return CURVE_FACTORIES[`${name}${layout === 'vertical' ? 'Y' : 'X'}`];
  }
  return CURVE_FACTORIES[name] || curveLinear;
};

interface CurveProps<T> {
  className?: string;
  type?: CurveType;
  layout?: LayoutType;
  baseLine?: number | Array<Point<T>>;
  points?: Array<Point<T>>;
  connectNulls?: boolean;
  path?: string;
  pathRef?: (ref: SVGPathElement) => void;
}

type Props<T> = PresentationAttributesWithProps<CurveProps<T>, SVGPathElement> & CurveProps<T>;

class Curve<T> extends PureComponent<Props<T>> {
  static defaultProps = {
    type: 'linear',
    points: [] as any[],
    connectNulls: false,
  };

  /**
   * Calculate the path of curve
   * @return {String} path
   */
  getPath() {
    const { type, points, baseLine, layout, connectNulls } = this.props;
    const curveFactory = getCurveFactory(type, layout);
    const formatPoints = connectNulls ? points.filter(entry => defined(entry)) : points;
    let lineFunction;

    if (_.isArray(baseLine)) {
      const formatBaseLine = connectNulls ? baseLine.filter(base => defined(base)) : baseLine;
      const areaPoints = formatPoints.map((entry, index) => (
        { ...entry, base: formatBaseLine[index] }
      ));
      if (layout === 'vertical') {
        lineFunction = shapeArea<Point<T>>().y(getY).x1(getX).x0(d => d.base.x);
      } else {
        lineFunction = shapeArea<Point<T>>().x(getX).y1(getY).y0(d => d.base.y);
      }
      lineFunction.defined(defined).curve(curveFactory);

      return lineFunction(areaPoints);
    } if (layout === 'vertical' && isNumber(baseLine)) {
      lineFunction = shapeArea<Point<T>>().y(getY).x1(getX).x0(baseLine);
    } else if (isNumber(baseLine)) {
      lineFunction = shapeArea<Point<T>>().x(getX).y1(getY).y0(baseLine);
    } else {
      lineFunction = shapeLine<Point<T>>().x(getX).y(getY);
    }

    lineFunction.defined(defined)
      .curve(curveFactory);

    return lineFunction(formatPoints);
  }

  render() {
    const { className, points, path, pathRef, ...rest } = this.props;

    if ((!points || !points.length) && !path) { return null; }

    const realPath = (points && points.length) ?
      this.getPath() : path;

    return (
      <path
        {...rest}
        {...adaptEventHandlers(this.props)}
        className={classNames('recharts-curve', className)}
        d={realPath}
        ref={pathRef}
      />
    );
  }
}

export default Curve;
