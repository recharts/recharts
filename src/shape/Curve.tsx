/**
 * @fileOverview Curve
 */
import React, { PureComponent } from 'react';
import { line as shapeLine, area as shapeArea, CurveFactory, curveBasisClosed, curveBasisOpen,
  curveBasis, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY,
  curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';
import classNames from 'classnames';
import _ from 'lodash';
import { LayoutType, PresentationAttributesWithProps, adaptEventHandlers, filterProps } from '../util/types';
import { isNumber } from '../util/DataUtils';

interface CurveFactories {
  [index: string] : CurveFactory;
}

const CURVE_FACTORIES: CurveFactories = {
  curveBasisClosed, curveBasisOpen, curveBasis, curveLinearClosed, curveLinear,
  curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter,
  curveStepBefore,
};

export type CurveType = 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' |
  'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | CurveFactory;

export interface Point {
  x: number;
  y: number;
}

const defined = (p: Point) => p.x === +p.x && p.y === +p.y;
const getX = (p: Point) => p.x;
const getY = (p: Point) => p.y;

const getCurveFactory = (type: CurveType, layout: LayoutType) => {
  if (_.isFunction(type)) { return type; }

  const name = `curve${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

  if (name === 'curveMonotone' && layout) {
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

class Curve extends PureComponent<Props> {
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
        lineFunction = shapeArea<Point & { base: Point; }>().y(getY).x1(getX).x0(d => d.base.x);
      } else {
        lineFunction = shapeArea<Point & { base: Point; }>().x(getX).y1(getY).y0(d => d.base.y);
      }
      lineFunction.defined(defined).curve(curveFactory);

      return lineFunction(areaPoints);
    } if (layout === 'vertical' && isNumber(baseLine)) {
      lineFunction = shapeArea<Point>().y(getY).x1(getX).x0(baseLine);
    } else if (isNumber(baseLine)) {
      lineFunction = shapeArea<Point>().x(getX).y1(getY).y0(baseLine);
    } else {
      lineFunction = shapeLine<Point>().x(getX).y(getY);
    }

    lineFunction.defined(defined)
      .curve(curveFactory);

    return lineFunction(formatPoints);
  }

  render() {
    const { className, points, path, pathRef } = this.props;

    if ((!points || !points.length) && !path) { return null; }

    const realPath = (points && points.length) ?
      this.getPath() : path;

    return (
      <path
        {...filterProps(this.props)}
        {...adaptEventHandlers(this.props)}
        className={classNames('recharts-curve', className)}
        d={realPath}
        ref={pathRef}
      />
    );
  }
}

export default Curve;
