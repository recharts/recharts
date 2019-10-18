/**
 * @fileOverview Curve
 */
import React, { PureComponent, SVGProps } from 'react';
import PropTypes from 'prop-types';
import { line as shapeLine, area as shapeArea, CurveFactory, curveBasisClosed, curveBasisOpen,
  curveBasis, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY,
  curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';
import classNames from 'classnames';
import _ from 'lodash';
import { LayoutType } from '../util/types';
// @ts-ignore
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';
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

type Point = [number, number];

const defined = (p: Point) => p[0] === +p[0] && p[1] === +p[1];
const getX = (p: Point) => p[0];
const getY = (p: Point) => p[1];

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
  pathRef?: Function;
}

type Props = SVGProps<SVGPathElement> & CurveProps;

class Curve extends PureComponent<Props> {
  static defaultProps = {
    type: 'linear',
    points: [] as Point[],
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
        lineFunction = shapeArea().y(getY).x1(getX).x0(d => d[0]);
      } else {
        lineFunction = shapeArea().x(getX).y1(getY).y0(d => d[1]);
      }
      lineFunction.defined(defined).curve(curveFactory);

      return lineFunction(areaPoints);
    } if (layout === 'vertical' && isNumber(baseLine)) {
      lineFunction = shapeArea().y(getY).x1(getX).x0(baseLine);
    } else if (isNumber(baseLine)) {
      lineFunction = shapeArea().x(getX).y1(getY).y0(baseLine);
    } else {
      lineFunction = shapeLine().x(getX).y(getY);
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
        {...getPresentationAttributes(this.props)}
        {...filterEventAttributes(this.props, null, true)}
        className={classNames('recharts-curve', className)}
        d={realPath}
        ref={pathRef}
      />
    );
  }
}

export default Curve;
