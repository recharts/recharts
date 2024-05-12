/**
 * @fileOverview Area
 */
import React, { PureComponent, SVGProps, useEffect } from 'react';
import clsx from 'clsx';
import Animate from 'react-smooth';
import isFunction from 'lodash/isFunction';
import max from 'lodash/max';
import isNil from 'lodash/isNil';
import isNan from 'lodash/isNaN';
import isEqual from 'lodash/isEqual';
import { Curve, CurveType, Point as CurvePoint } from '../shape/Curve';
import { Dot } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { LabelList } from '../component/LabelList';
import { Global } from '../util/Global';
import { isNumber, uniqueId, interpolateNumber } from '../util/DataUtils';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import {
  D3Scale,
  LegendType,
  TooltipType,
  AnimationTiming,
  ChartOffset,
  Coordinate,
  DataKey,
  TickItem,
  AnimationDuration,
  LayoutType,
  ActiveDotType,
} from '../util/types';
import { filterProps, isDotProps } from '../util/ReactUtils';
import type { Payload as LegendPayload } from '../component/DefaultLegendContent';
import { useLegendPayloadDispatch } from '../context/legendPayloadContext';
import { ActivePoints } from '../component/ActivePoints';
import {
  addTooltipEntrySettings,
  removeTooltipEntrySettings,
  TooltipPayloadConfiguration,
} from '../state/tooltipSlice';
import { useAppDispatch } from '../state/hooks';

interface AreaPointItem extends CurvePoint {
  value?: number | number[];
  payload?: any;
}

interface InternalAreaProps {
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  points?: AreaPointItem[];
  baseLine?: number | Coordinate[];
}

interface AreaProps extends InternalAreaProps {
  className?: string;
  dataKey: DataKey<any>;
  data?: any[];
  type?: CurveType;
  unit?: string | number;
  name?: string | number;
  xAxisId?: string | number;
  yAxisId?: string | number;

  stackId?: string | number;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  connectNulls?: boolean;
  // whether have dot in line
  activeDot?: ActiveDotType;
  dot?: ActiveDotType;

  label?: any;
  layout?: 'horizontal' | 'vertical';
  hide?: boolean;
  baseValue?: number | 'dataMin' | 'dataMax';
  isRange?: boolean;

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  isAnimationActive?: boolean;
  animateNewValues?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  animationId?: number;
  id?: string;
}

export type Props = Omit<SVGProps<SVGElement>, 'type' | 'points'> & AreaProps;

interface State {
  prevAnimationId?: number;
  prevPoints?: AreaPointItem[];
  prevBaseLine?: number | Coordinate[];
  curPoints?: AreaPointItem[];
  curBaseLine?: number | Coordinate[];
  isAnimationFinished?: boolean;
  totalLength?: number;
}

type AreaComposedData = ChartOffset & {
  points?: AreaPointItem[];
  baseLine?: number | Coordinate[];
  layout: LayoutType;
  isRange: boolean;
};

function getLegendItemColor(stroke: string | undefined, fill: string): string {
  return stroke && stroke !== 'none' ? stroke : fill;
}

const computeLegendPayloadFromAreaData = (props: Props): Array<LegendPayload> => {
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

function SetAreaLegend(props: Props): null {
  useLegendPayloadDispatch(computeLegendPayloadFromAreaData, props);
  return null;
}

function getTooltipEntrySettings(props: Props): TooltipPayloadConfiguration {
  const { dataKey, data, stroke, strokeWidth, fill, name, hide } = props;
  return {
    dataDefinedOnItem: data,
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: props.tooltipType,
      color: getLegendItemColor(stroke, fill),
    },
  };
}

function SetTooltipEntrySettings(props: Props): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = getTooltipEntrySettings(props);
    dispatch(addTooltipEntrySettings(tooltipEntrySettings));
    return () => {
      dispatch(removeTooltipEntrySettings(tooltipEntrySettings));
    };
  }, [props, dispatch]);
  return null;
}

export class Area extends PureComponent<Props, State> {
  static displayName = 'Area';

  static defaultProps = {
    stroke: '#3182bd',
    fill: '#3182bd',
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'line',
    connectNulls: false,
    // points of area
    points: [] as AreaPointItem[],
    dot: false,
    activeDot: true,
    hide: false,

    isAnimationActive: !Global.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  static getBaseValue = (props: Props, item: Area, xAxis: Props['xAxis'], yAxis: Props['yAxis']): number => {
    const { layout, baseValue: chartBaseValue } = props;
    const { baseValue: itemBaseValue } = item.props;

    // The baseValue can be defined both on the AreaChart as well as on the Area.
    // The value for the item takes precedence.
    const baseValue = itemBaseValue ?? chartBaseValue;

    if (isNumber(baseValue) && typeof baseValue === 'number') {
      return baseValue;
    }

    const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
    const domain = numericAxis.scale.domain();

    if (numericAxis.type === 'number') {
      const domainMax = Math.max(domain[0], domain[1]);
      const domainMin = Math.min(domain[0], domain[1]);

      if (baseValue === 'dataMin') {
        return domainMin;
      }
      if (baseValue === 'dataMax') {
        return domainMax;
      }

      return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
    }

    if (baseValue === 'dataMin') {
      return domain[0];
    }
    if (baseValue === 'dataMax') {
      return domain[1];
    }

    return domain[0];
  };

  static getComposedData = ({
    props,
    item,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    bandSize,
    dataKey,
    stackedData,
    dataStartIndex,
    displayedData,
    offset,
  }: {
    props: Props;
    item: Area;
    bandSize: number;
    xAxis: InternalAreaProps['xAxis'];
    yAxis: InternalAreaProps['yAxis'];
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    stackedData: number[][];
    dataStartIndex: number;
    offset: ChartOffset;
    displayedData: any[];
    dataKey: Props['dataKey'];
  }): AreaComposedData => {
    const { layout } = props;
    const hasStack = stackedData && stackedData.length;
    const baseValue = Area.getBaseValue(props, item, xAxis, yAxis);
    const isHorizontalLayout = layout === 'horizontal';
    let isRange = false;

    const points = displayedData.map((entry, index) => {
      let value;

      if (hasStack) {
        value = stackedData[dataStartIndex + index];
      } else {
        value = getValueByDataKey(entry, dataKey);

        if (!Array.isArray(value)) {
          value = [baseValue, value];
        } else {
          isRange = true;
        }
      }

      const isBreakPoint = value[1] == null || (hasStack && getValueByDataKey(entry, dataKey) == null);

      if (isHorizontalLayout) {
        return {
          x: getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
          y: isBreakPoint ? null : yAxis.scale(value[1]),
          value,
          payload: entry,
        };
      }

      return {
        x: isBreakPoint ? null : xAxis.scale(value[1]),
        y: getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index }),
        value,
        payload: entry,
      };
    });

    let baseLine;
    if (hasStack || isRange) {
      baseLine = points.map((entry: AreaPointItem) => {
        const x = Array.isArray(entry.value) ? entry.value[0] : null;
        if (isHorizontalLayout) {
          return {
            x: entry.x,
            y: x != null && entry.y != null ? yAxis.scale(x) : null,
          };
        }
        return {
          x: x != null ? xAxis.scale(x) : null,
          y: entry.y,
        };
      });
    } else {
      baseLine = isHorizontalLayout ? yAxis.scale(baseValue) : xAxis.scale(baseValue);
    }

    return { points, baseLine, layout, isRange, ...offset };
  };

  static renderDotItem = (option: ActiveDotType, props: any) => {
    let dotItem;

    if (React.isValidElement(option)) {
      dotItem = React.cloneElement(option, props);
    } else if (isFunction(option)) {
      dotItem = option(props);
    } else {
      const className = clsx('recharts-area-dot', typeof option !== 'boolean' ? option.className : '');
      dotItem = <Dot {...props} className={className} />;
    }

    return dotItem;
  };

  state: State = {
    isAnimationFinished: true,
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    if (nextProps.animationId !== prevState.prevAnimationId) {
      return {
        prevAnimationId: nextProps.animationId,
        curPoints: nextProps.points,
        curBaseLine: nextProps.baseLine,
        prevPoints: prevState.curPoints,
        prevBaseLine: prevState.curBaseLine,
      };
    }
    if (nextProps.points !== prevState.curPoints || nextProps.baseLine !== prevState.curBaseLine) {
      return {
        curPoints: nextProps.points,
        curBaseLine: nextProps.baseLine,
      };
    }

    return null;
  }

  id = uniqueId('recharts-area-');

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

  renderDots(needClip: boolean, clipDot: boolean, clipPathId: string) {
    const { isAnimationActive } = this.props;
    const { isAnimationFinished } = this.state;

    if (isAnimationActive && !isAnimationFinished) {
      return null;
    }

    const { dot, points, dataKey } = this.props;
    const areaProps = filterProps(this.props, false);
    const customDotProps = filterProps(dot, true);

    const dots = points.map((entry: AreaPointItem, i: number) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...areaProps,
        ...customDotProps,
        index: i,
        cx: entry.x,
        cy: entry.y,
        dataKey,
        value: entry.value,
        payload: entry.payload,
        points,
      };

      return Area.renderDotItem(dot, dotProps);
    });
    const dotsProps = {
      clipPath: needClip ? `url(#clipPath-${clipDot ? '' : 'dots-'}${clipPathId})` : null,
    };
    return (
      <Layer className="recharts-area-dots" {...dotsProps}>
        {dots}
      </Layer>
    );
  }

  renderHorizontalRect(alpha: number) {
    const { baseLine, points, strokeWidth } = this.props;
    const startX = points[0].x;
    const endX = points[points.length - 1].x;
    const width = alpha * Math.abs(startX - endX);
    let maxY = max(points.map(entry => entry.y || 0));

    if (isNumber(baseLine) && typeof baseLine === 'number') {
      maxY = Math.max(baseLine, maxY);
    } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
      maxY = Math.max(max(baseLine.map(entry => entry.y || 0)), maxY);
    }

    if (isNumber(maxY)) {
      return (
        <rect
          x={startX < endX ? startX : startX - width}
          y={0}
          width={width}
          height={Math.floor(maxY + (strokeWidth ? parseInt(`${strokeWidth}`, 10) : 1))}
        />
      );
    }

    return null;
  }

  renderVerticalRect(alpha: number) {
    const { baseLine, points, strokeWidth } = this.props;
    const startY = points[0].y;
    const endY = points[points.length - 1].y;
    const height = alpha * Math.abs(startY - endY);
    let maxX = max(points.map(entry => entry.x || 0));

    if (isNumber(baseLine) && typeof baseLine === 'number') {
      maxX = Math.max(baseLine, maxX);
    } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
      maxX = Math.max(max(baseLine.map(entry => entry.x || 0)), maxX);
    }

    if (isNumber(maxX)) {
      return (
        <rect
          x={0}
          y={startY < endY ? startY : startY - height}
          width={maxX + (strokeWidth ? parseInt(`${strokeWidth}`, 10) : 1)}
          height={Math.floor(height)}
        />
      );
    }

    return null;
  }

  renderClipRect(alpha: number) {
    const { layout } = this.props;

    if (layout === 'vertical') {
      return this.renderVerticalRect(alpha);
    }

    return this.renderHorizontalRect(alpha);
  }

  renderAreaStatically(points: AreaPointItem[], baseLine: Props['baseLine'], needClip: boolean, clipPathId: string) {
    const { layout, type, stroke, connectNulls, isRange, ref, ...others } = this.props;

    return (
      <Layer clipPath={needClip ? `url(#clipPath-${clipPathId})` : null}>
        <Curve
          {...filterProps(others, true)}
          points={points}
          connectNulls={connectNulls}
          type={type}
          baseLine={baseLine}
          layout={layout}
          stroke="none"
          className="recharts-area-area"
        />
        {stroke !== 'none' && (
          <Curve
            {...filterProps(this.props, false)}
            className="recharts-area-curve"
            layout={layout}
            type={type}
            connectNulls={connectNulls}
            fill="none"
            points={points}
          />
        )}
        {stroke !== 'none' && isRange && (
          <Curve
            {...filterProps(this.props, false)}
            className="recharts-area-curve"
            layout={layout}
            type={type}
            connectNulls={connectNulls}
            fill="none"
            points={baseLine as CurvePoint[]}
          />
        )}
      </Layer>
    );
  }

  renderAreaWithAnimation(needClip: boolean, clipPathId: string) {
    const { points, baseLine, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } =
      this.props;
    const { prevPoints, prevBaseLine } = this.state;
    // const clipPathId = isNil(id) ? this.id : id;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`area-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {({ t }: { t: number }) => {
          if (prevPoints) {
            const prevPointsDiffFactor = prevPoints.length / points.length;
            // update animation
            const stepPoints = points.map((entry, index) => {
              const prevPointIndex = Math.floor(index * prevPointsDiffFactor);
              if (prevPoints[prevPointIndex]) {
                const prev = prevPoints[prevPointIndex];
                const interpolatorX = interpolateNumber(prev.x, entry.x);
                const interpolatorY = interpolateNumber(prev.y, entry.y);

                return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
              }

              return entry;
            });
            let stepBaseLine;

            if (isNumber(baseLine) && typeof baseLine === 'number') {
              const interpolator = interpolateNumber(prevBaseLine as number, baseLine);
              stepBaseLine = interpolator(t);
            } else if (isNil(baseLine) || isNan(baseLine)) {
              const interpolator = interpolateNumber(prevBaseLine as number, 0);
              stepBaseLine = interpolator(t);
            } else {
              stepBaseLine = (baseLine as Coordinate[]).map((entry, index) => {
                const prevPointIndex = Math.floor(index * prevPointsDiffFactor);
                if ((prevBaseLine as Coordinate[])[prevPointIndex]) {
                  const prev = (prevBaseLine as Coordinate[])[prevPointIndex];
                  const interpolatorX = interpolateNumber(prev.x, entry.x);
                  const interpolatorY = interpolateNumber(prev.y, entry.y);

                  return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
                }

                return entry;
              });
            }

            return this.renderAreaStatically(stepPoints, stepBaseLine, needClip, clipPathId);
          }

          return (
            <Layer>
              <defs>
                <clipPath id={`animationClipPath-${clipPathId}`}>{this.renderClipRect(t)}</clipPath>
              </defs>
              <Layer clipPath={`url(#animationClipPath-${clipPathId})`}>
                {this.renderAreaStatically(points, baseLine, needClip, clipPathId)}
              </Layer>
            </Layer>
          );
        }}
      </Animate>
    );
  }

  renderArea(needClip: boolean, clipPathId: string) {
    const { points, baseLine, isAnimationActive } = this.props;
    const { prevPoints, prevBaseLine, totalLength } = this.state;

    if (
      isAnimationActive &&
      points &&
      points.length &&
      ((!prevPoints && totalLength > 0) || !isEqual(prevPoints, points) || !isEqual(prevBaseLine, baseLine))
    ) {
      return this.renderAreaWithAnimation(needClip, clipPathId);
    }

    return this.renderAreaStatically(points, baseLine, needClip, clipPathId);
  }

  render() {
    const { hide, dot, points, className, top, left, xAxis, yAxis, width, height, isAnimationActive, id, baseLine } =
      this.props;

    if (hide || !points || !points.length) {
      return (
        <>
          <SetAreaLegend {...this.props} />
          <SetTooltipEntrySettings {...this.props} />
        </>
      );
    }

    const { isAnimationFinished } = this.state;
    const hasSinglePoint = points.length === 1;
    const layerClass = clsx('recharts-area', className);
    const needClipX = xAxis && xAxis.allowDataOverflow;
    const needClipY = yAxis && yAxis.allowDataOverflow;
    const needClip = needClipX || needClipY;
    const clipPathId = isNil(id) ? this.id : id;
    const { r = 3, strokeWidth = 2 } = filterProps(dot, false) ?? { r: 3, strokeWidth: 2 };
    const { clipDot = true } = isDotProps(dot) ? dot : {};
    const dotSize = r * 2 + strokeWidth;

    return (
      <>
        <Layer className={layerClass}>
          <SetAreaLegend {...this.props} />
          <SetTooltipEntrySettings {...this.props} />
          {needClipX || needClipY ? (
            <defs>
              <clipPath id={`clipPath-${clipPathId}`}>
                <rect
                  x={needClipX ? left : left - width / 2}
                  y={needClipY ? top : top - height / 2}
                  width={needClipX ? width : width * 2}
                  height={needClipY ? height : height * 2}
                />
              </clipPath>
              {!clipDot && (
                <clipPath id={`clipPath-dots-${clipPathId}`}>
                  <rect
                    x={left - dotSize / 2}
                    y={top - dotSize / 2}
                    width={width + dotSize}
                    height={height + dotSize}
                  />
                </clipPath>
              )}
            </defs>
          ) : null}
          {!hasSinglePoint ? this.renderArea(needClip, clipPathId) : null}
          {(dot || hasSinglePoint) && this.renderDots(needClip, clipDot, clipPathId)}
          {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)}
        </Layer>
        <ActivePoints
          points={points}
          mainColor={getLegendItemColor(this.props.stroke, this.props.fill)}
          itemDataKey={this.props.dataKey}
          activeDot={this.props.activeDot}
        />
        {this.props.isRange && Array.isArray(baseLine) && (
          <ActivePoints
            points={baseLine}
            mainColor={getLegendItemColor(this.props.stroke, this.props.fill)}
            itemDataKey={this.props.dataKey}
            activeDot={this.props.activeDot}
          />
        )}
      </>
    );
  }
}
