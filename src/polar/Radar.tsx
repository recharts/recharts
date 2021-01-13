/**
 * @fileOverview Radar
 */
import React, { PureComponent, ReactElement, MouseEvent, SVGProps } from 'react';
import Animate from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import { interpolateNumber } from '../util/DataUtils';
import { Global } from '../util/Global';
import { polarToCartesian } from '../util/PolarUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { Polygon } from '../shape/Polygon';
import { Dot, Props as DotProps } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { LabelList } from '../component/LabelList';
import { LegendType, TooltipType, AnimationTiming, filterProps, DataKey } from '../util/types';
import { Props as PolarAngleAxisProps } from './PolarAngleAxis';
import { Props as PolarRadiusAxisProps } from './PolarRadiusAxis';

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
  animationDuration?: number;
  isAnimationActive?: boolean;
  animationId?: number;
  animationEasing?: AnimationTiming;

  onMouseEnter?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
  onMouseLeave?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
}

export type Props = Omit<SVGProps<SVGElement>, 'onMouseEnter' | 'onMouseLeave'> & RadarProps;

interface State {
  isAnimationFinished?: boolean;
  prevPoints?: RadarPoint[];
  curPoints?: RadarPoint[];
  prevAnimationId?: number;
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
    radiusAxis: PolarRadiusAxisProps & { scale: (value: any) => number };
    angleAxis: PolarAngleAxisProps & { scale: (value: any) => number };
    displayedData: any[];
    dataKey: RadarProps['dataKey'];
    bandSize: number;
  }) => {
    const { cx, cy } = angleAxis;
    let isRange = false;
    const points: RadarPoint[] = [];

    displayedData.forEach((entry, i) => {
      const name = getValueByDataKey(entry, angleAxis.dataKey, i);
      const value = getValueByDataKey(entry, dataKey);
      const angle = angleAxis.scale(name) + (bandSize || 0);
      const pointValue = _.isArray(value) ? _.last(value) : value;
      const radius = _.isNil(pointValue) ? undefined : radiusAxis.scale(pointValue);

      if (_.isArray(value) && value.length >= 2) {
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
        if (_.isArray(point.value)) {
          const baseValue = _.first(point.value);
          const radius = _.isNil(baseValue) ? undefined : radiusAxis.scale(baseValue);

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

    if (_.isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;

    this.setState({ isAnimationFinished: false });

    if (_.isFunction(onAnimationStart)) {
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
    } else if (_.isFunction(option)) {
      dotItem = option(props);
    } else {
      dotItem = <Dot {...props} className="recharts-radar-dot" />;
    }

    return dotItem;
  }

  renderDots(points: RadarPoint[]) {
    const { dot, dataKey } = this.props;
    const baseProps = filterProps(this.props);
    const customDotProps = filterProps(dot);

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
    } else if (_.isFunction(shape)) {
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

    if (isAnimationActive && points && points.length && !isRange && (!prevPoints || !_.isEqual(prevPoints, points))) {
      return this.renderPolygonWithAnimation();
    }

    return this.renderPolygonStatically(points);
  }

  render() {
    const { hide, className, points, isAnimationActive } = this.props;

    if (hide || !points || !points.length) {
      return null;
    }

    const { isAnimationFinished } = this.state;
    const layerClass = classNames('recharts-radar', className);

    return (
      <Layer className={layerClass}>
        {this.renderPolygon()}
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}
