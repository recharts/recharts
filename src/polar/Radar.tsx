/**
 * @fileOverview Radar
 */
import React, { PureComponent, ReactElement, MouseEvent, SVGProps } from 'react';
import Animate from 'react-smooth';
import isNil from 'lodash/isNil';
import last from 'lodash/last';
import first from 'lodash/first';
import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';

import clsx from 'clsx';
import { interpolateNumber } from '../util/DataUtils';
import { Global } from '../util/Global';
import { polarToCartesian } from '../util/PolarUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { Polygon } from '../shape/Polygon';
import { Dot, Props as DotProps } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { LabelList } from '../component/LabelList';
import { LegendType, TooltipType, AnimationTiming, DataKey, AnimationDuration } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { Props as PolarAngleAxisProps } from './PolarAngleAxis';
import { Props as PolarRadiusAxisProps } from './PolarRadiusAxis';
import { useLegendPayloadDispatch } from '../context/legendPayloadContext';
import type { Payload as LegendPayload } from '../component/DefaultLegendContent';

interface RadarPoint {
  x: number;
  y: number;
  cx?: number;
  cy?: number;
  angle?: number;
  radius?: number;
  value?: number;
  payload?: any;
  name?: string;
}

type RadarDot = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | DotProps | boolean;

interface RadarProps {
  className?: string;
  dataKey: DataKey<any>;
  angleAxisId?: string | number;
  radiusAxisId?: string | number;
  points?: RadarPoint[];
  baseLinePoints?: RadarPoint[];
  isRange?: boolean;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  activeDot?: RadarDot;
  dot?: RadarDot;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  hide?: boolean;
  connectNulls?: boolean;

  label?: any;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  isAnimationActive?: boolean;
  animationId?: number;
  animationEasing?: AnimationTiming;

  onMouseEnter?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
  onMouseLeave?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
}

type RadiusAxis = PolarRadiusAxisProps & { scale: (value: any) => number };
type AngleAxis = PolarAngleAxisProps & { scale: (value: any) => number };

export type Props = Omit<SVGProps<SVGElement>, 'onMouseEnter' | 'onMouseLeave' | 'points'> & RadarProps;

interface State {
  isAnimationFinished?: boolean;
  prevPoints?: RadarPoint[];
  curPoints?: RadarPoint[];
  prevAnimationId?: number;
}

type RadarComposedData = {
  points: RadarPoint[];
  baseLinePoints: RadarPoint[];
  isRange: boolean;
};

function getLegendItemColor(stroke: string | undefined, fill: string): string {
  return stroke && stroke !== 'none' ? stroke : fill;
}

const computeLegendPayloadFromRadarSectors = (props: Props): Array<LegendPayload> => {
  const { dataKey, name, stroke, fill, legendType, hide } = props;
  return [
    {
      inactive: hide,
      dataKey,
      type: legendType,
      color: getLegendItemColor(stroke, fill),
      value: name || dataKey,
      payload: props,
    },
  ];
};

function SetRadarPayloadLegend(props: RadarProps): null {
  useLegendPayloadDispatch(computeLegendPayloadFromRadarSectors, props);
  return null;
}

export class Radar extends PureComponent<Props, State> {
  static displayName = 'Radar';

  static defaultProps = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: false,
    activeDot: true,
    dot: false,
    legendType: 'rect',
    isAnimationActive: !Global.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  static getComposedData = ({
    radiusAxis,
    angleAxis,
    displayedData,
    dataKey,
    bandSize,
  }: {
    radiusAxis: RadiusAxis;
    angleAxis: AngleAxis;
    displayedData: any[];
    dataKey: RadarProps['dataKey'];
    bandSize: number;
  }): RadarComposedData => {
    const { cx, cy } = angleAxis;
    let isRange = false;
    const points: RadarPoint[] = [];
    const angleBandSize = angleAxis.type !== 'number' ? bandSize ?? 0 : 0;

    displayedData.forEach((entry, i) => {
      const name = getValueByDataKey(entry, angleAxis.dataKey, i);
      const value = getValueByDataKey(entry, dataKey);
      const angle = angleAxis.scale(name) + angleBandSize;
      const pointValue = Array.isArray(value) ? last(value) : value;
      const radius = isNil(pointValue) ? undefined : radiusAxis.scale(pointValue);

      if (Array.isArray(value) && value.length >= 2) {
        isRange = true;
      }

      points.push({
        ...polarToCartesian(cx, cy, radius, angle),
        name,
        value,
        cx,
        cy,
        radius,
        angle,
        payload: entry,
      });
    });
    const baseLinePoints: RadarPoint[] = [];

    if (isRange) {
      points.forEach(point => {
        if (Array.isArray(point.value)) {
          const baseValue = first(point.value);
          const radius = isNil(baseValue) ? undefined : radiusAxis.scale(baseValue);

          baseLinePoints.push({
            ...point,
            radius,
            ...polarToCartesian(cx, cy, radius, point.angle),
          });
        } else {
          baseLinePoints.push(point);
        }
      });
    }

    return { points, isRange, baseLinePoints };
  };

  state: State = { isAnimationFinished: false };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    if (nextProps.animationId !== prevState.prevAnimationId) {
      return {
        prevAnimationId: nextProps.animationId,
        curPoints: nextProps.points,
        prevPoints: prevState.curPoints,
      };
    }
    if (nextProps.points !== prevState.curPoints) {
      return {
        curPoints: nextProps.points,
      };
    }

    return null;
  }

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;

    this.setState({ isAnimationFinished: false });

    if (isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  };

  handleMouseEnter = (e: MouseEvent<SVGPolygonElement>) => {
    const { onMouseEnter } = this.props;

    if (onMouseEnter) {
      onMouseEnter(this.props, e);
    }
  };

  handleMouseLeave = (e: MouseEvent<SVGPolygonElement>) => {
    const { onMouseLeave } = this.props;

    if (onMouseLeave) {
      onMouseLeave(this.props, e);
    }
  };

  static renderDotItem(option: RadarDot, props: any) {
    let dotItem;

    if (React.isValidElement(option)) {
      dotItem = React.cloneElement(option, props);
    } else if (isFunction(option)) {
      dotItem = option(props);
    } else {
      dotItem = (
        <Dot {...props} className={clsx('recharts-radar-dot', typeof option !== 'boolean' ? option.className : '')} />
      );
    }

    return dotItem;
  }

  renderDots(points: RadarPoint[]) {
    const { dot, dataKey } = this.props;
    const baseProps = filterProps(this.props, false);
    const customDotProps = filterProps(dot, true);

    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...baseProps,
        ...customDotProps,
        dataKey,
        cx: entry.x,
        cy: entry.y,
        index: i,
        payload: entry,
      };

      return Radar.renderDotItem(dot, dotProps);
    });

    return <Layer className="recharts-radar-dots">{dots}</Layer>;
  }

  renderPolygonStatically(points: RadarPoint[]) {
    const { shape, dot, isRange, baseLinePoints, connectNulls } = this.props;

    let radar;
    if (React.isValidElement(shape)) {
      radar = React.cloneElement(shape, { ...this.props, points } as any);
    } else if (isFunction(shape)) {
      radar = shape({ ...this.props, points });
    } else {
      radar = (
        <Polygon
          {...filterProps(this.props, true)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          points={points}
          baseLinePoints={isRange ? baseLinePoints : null}
          connectNulls={connectNulls}
        />
      );
    }

    return (
      <Layer className="recharts-radar-polygon">
        {radar}
        {dot ? this.renderDots(points) : null}
      </Layer>
    );
  }

  renderPolygonWithAnimation() {
    const { points, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = this.props;
    const { prevPoints } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`radar-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {({ t }: { t: number }) => {
          const prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
          const stepData = points.map((entry, index) => {
            const prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];

            if (prev) {
              const interpolatorX = interpolateNumber(prev.x, entry.x);
              const interpolatorY = interpolateNumber(prev.y, entry.y);

              return {
                ...entry,
                x: interpolatorX(t),
                y: interpolatorY(t),
              };
            }

            const interpolatorX = interpolateNumber(entry.cx, entry.x);
            const interpolatorY = interpolateNumber(entry.cy, entry.y);

            return {
              ...entry,
              x: interpolatorX(t),
              y: interpolatorY(t),
            };
          });

          return this.renderPolygonStatically(stepData);
        }}
      </Animate>
    );
  }

  renderPolygon() {
    const { points, isAnimationActive, isRange } = this.props;
    const { prevPoints } = this.state;

    if (isAnimationActive && points && points.length && !isRange && (!prevPoints || !isEqual(prevPoints, points))) {
      return this.renderPolygonWithAnimation();
    }

    return this.renderPolygonStatically(points);
  }

  render() {
    const { hide, className, points, isAnimationActive } = this.props;

    if (hide || !points || !points.length) {
      /*
       * This used to render `null`, but it should still set the legend because:
       * 1. Hidden Radar still renders a legend item (albeit with inactive color)
       * 2. if a dataKey does not match anything from props.data, then props.points are not defined.
       * Legend still renders though! Behaviour (2) is arguably a bug - and we should be fixing it perhaps?
       * But for now I will keep it as-is.
       */
      return <SetRadarPayloadLegend {...this.props} />;
    }

    const { isAnimationFinished } = this.state;
    const layerClass = clsx('recharts-radar', className);

    return (
      <Layer className={layerClass}>
        <SetRadarPayloadLegend {...this.props} />
        {this.renderPolygon()}
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}
