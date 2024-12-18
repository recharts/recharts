// eslint-disable-next-line max-classes-per-file
import React, { PureComponent } from 'react';
import clsx from 'clsx';
import Animate from 'react-smooth';
import max from 'lodash/max';
import isEqual from 'lodash/isEqual';
import { Curve, CurveType, Point as CurvePoint, Props as CurveProps } from '../shape/Curve';
import { Dot } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { LabelList } from '../component/LabelList';
import { Global } from '../util/Global';
import { interpolateNumber, isNan, isNullish, isNumber, uniqueId } from '../util/DataUtils';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveDotType,
  AnimationDuration,
  AnimationTiming,
  Coordinate,
  DataKey,
  LegendType,
  TickItem,
  TooltipType,
} from '../util/types';
import { filterProps, hasClipDot } from '../util/ReactUtils';
import type { Payload as LegendPayload } from '../component/DefaultLegendContent';
import { useLegendPayloadDispatch } from '../context/legendPayloadContext';
import { ActivePoints } from '../component/ActivePoints';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { CartesianGraphicalItemContext } from '../context/CartesianGraphicalItemContext';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { ChartData } from '../state/chartDataSlice';
import { AreaPointItem, AreaSettings, ComputedArea, selectArea } from '../state/selectors/areaSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { useAppSelector } from '../state/hooks';
import { UpdateId, useChartLayout, useOffset, useUpdateId } from '../context/chartLayoutContext';
import { useChartName } from '../state/selectors/selectors';

export type BaseValue = number | 'dataMin' | 'dataMax';

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalAreaProps {
  activeDot: ActiveDotType;
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;
  animationId: UpdateId;
  baseLine?: number | Coordinate[];

  baseValue?: BaseValue;
  className?: string;
  connectNulls: boolean;
  data?: any[];
  dataKey: DataKey<any>;
  dot: ActiveDotType;
  height?: number;
  hide: boolean;

  id?: string;
  isAnimationActive: boolean;
  isRange?: boolean;
  label?: any;
  layout: 'horizontal' | 'vertical';
  left: number;

  legendType: LegendType;
  name?: string | number;
  needClip?: boolean;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;

  points?: ReadonlyArray<AreaPointItem>;
  stackId?: string | number;

  tooltipType?: TooltipType;
  top: number;
  type?: CurveType;
  unit?: string | number;
  width?: number;
  xAxisId: string | number;
  yAxisId: string | number;
}

/**
 * External props, intended for end users to fill in
 */
interface AreaProps {
  activeDot?: ActiveDotType;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  animationId?: number;
  baseValue?: BaseValue;
  className?: string;

  connectNulls?: boolean;
  data?: any[];
  dataKey: DataKey<any>;
  dot?: ActiveDotType;
  hide?: boolean;
  id?: string;

  isAnimationActive?: boolean;
  isRange?: boolean;
  label?: any;
  layout?: 'horizontal' | 'vertical';
  legendType?: LegendType;

  name?: string | number;
  onAnimationEnd?: () => void;

  onAnimationStart?: () => void;
  stackId?: string | number;
  tooltipType?: TooltipType;
  type?: CurveType;
  unit?: string | number;
  xAxisId?: string | number;
  yAxisId?: string | number;
}

/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type AreaSvgProps = Omit<CurveProps, 'type' | 'points'>;

type InternalProps = AreaSvgProps & InternalAreaProps;

export type Props = AreaSvgProps & AreaProps;

interface State {
  prevAnimationId?: UpdateId;
  prevPoints?: ReadonlyArray<AreaPointItem>;
  prevBaseLine?: number | Coordinate[];
  curPoints?: ReadonlyArray<AreaPointItem>;
  curBaseLine?: number | Coordinate[];
  isAnimationFinished?: boolean;
  totalLength?: number;
}

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
  const { dataKey, data, stroke, strokeWidth, fill, name, hide, unit } = props;
  return {
    dataDefinedOnItem: data,
    positions: undefined,
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      nameKey: undefined,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: props.tooltipType,
      color: getLegendItemColor(stroke, fill),
      unit,
    },
  };
}

const renderDotItem = (option: ActiveDotType, props: any) => {
  let dotItem;

  if (React.isValidElement(option)) {
    dotItem = React.cloneElement(option, props);
  } else if (typeof option === 'function') {
    dotItem = option(props);
  } else {
    const className = clsx('recharts-area-dot', typeof option !== 'boolean' ? option.className : '');
    dotItem = <Dot {...props} className={className} />;
  }

  return dotItem;
};

class AreaWithState extends PureComponent<InternalProps, State> {
  state: State = {
    isAnimationFinished: true,
  };

  static getDerivedStateFromProps(nextProps: InternalProps, prevState: State): State {
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

    if (typeof onAnimationEnd === 'function') {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;
    this.setState({ isAnimationFinished: false });

    if (typeof onAnimationStart === 'function') {
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

      return renderDotItem(dot, dotProps);
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

    if (isNumber(baseLine)) {
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

    if (isNumber(baseLine)) {
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

  renderAreaStatically(
    points: ReadonlyArray<AreaPointItem>,
    baseLine: Props['baseLine'],
    needClip: boolean,
    clipPathId: string,
  ) {
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
    // const clipPathId = isNullish(id) ? this.id : id;

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

            if (isNumber(baseLine)) {
              const interpolator = interpolateNumber(prevBaseLine as number, baseLine);
              stepBaseLine = interpolator(t);
            } else if (isNullish(baseLine) || isNan(baseLine)) {
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
    const {
      hide,
      dot,
      points,
      className,
      top,
      left,
      needClip,
      xAxisId,
      yAxisId,
      width,
      height,
      isAnimationActive,
      id,
      baseLine,
    } = this.props;

    if (hide || !points || !points.length) {
      return null;
    }

    const { isAnimationFinished } = this.state;
    const hasSinglePoint = points.length === 1;
    const layerClass = clsx('recharts-area', className);
    const clipPathId = isNullish(id) ? this.id : id;
    const { r = 3, strokeWidth = 2 } = filterProps(dot, false) ?? { r: 3, strokeWidth: 2 };
    const { clipDot = true } = hasClipDot(dot) ? dot : {};
    const dotSize = r * 2 + strokeWidth;

    return (
      <>
        <Layer className={layerClass}>
          {needClip && (
            <defs>
              <GraphicalItemClipPath clipPathId={clipPathId} xAxisId={xAxisId} yAxisId={yAxisId} />
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
          )}
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

const defaultAreaProps: Partial<Props> = {
  activeDot: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  connectNulls: false,
  dot: false,
  fill: '#3182bd',
  fillOpacity: 0.6,
  hide: false,
  isAnimationActive: !Global.isSsr,
  legendType: 'line',
  stroke: '#3182bd',
  xAxisId: 0,
  yAxisId: 0,
};

function AreaImpl(props: Props) {
  const layout = useChartLayout();
  const chartName = useChartName();
  const { needClip } = useNeedsClip(props.xAxisId, props.yAxisId);
  const {
    activeDot = defaultAreaProps.activeDot,
    animationBegin = defaultAreaProps.animationBegin,
    animationDuration = defaultAreaProps.animationDuration,
    animationEasing = defaultAreaProps.animationEasing,
    connectNulls = defaultAreaProps.connectNulls,
    dot = defaultAreaProps.dot,
    fill = defaultAreaProps.fill,
    fillOpacity = defaultAreaProps.fillOpacity,
    hide = defaultAreaProps.hide,
    isAnimationActive = defaultAreaProps.isAnimationActive,
    legendType = defaultAreaProps.legendType,
    ref,
    stroke = defaultAreaProps.stroke,
    xAxisId = defaultAreaProps.xAxisId,
    yAxisId = defaultAreaProps.yAxisId,
    ...everythingElse
  } = props;
  const isPanorama = useIsPanorama();
  const { points, isRange, baseLine } =
    useAppSelector(state =>
      selectArea(state, props.xAxisId, props.yAxisId, isPanorama, {
        baseValue: props.baseValue,
        stackId: props.stackId,
        connectNulls: props.connectNulls,
        data: props.data,
        dataKey: props.dataKey,
      }),
    ) ?? {};
  const { height, width, left, top } = useOffset();
  const updateId = useUpdateId();

  if (layout !== 'horizontal' && layout !== 'vertical') {
    // Can't render Area in an unsupported layout
    return null;
  }

  if (chartName !== 'AreaChart' && chartName !== 'ComposedChart') {
    // There is nothing stopping us from rendering Area in other charts, except for historical reasons. Do we want to allow that?
    return null;
  }

  return (
    <AreaWithState
      {...everythingElse}
      activeDot={activeDot}
      animationBegin={animationBegin}
      animationDuration={animationDuration}
      animationEasing={animationEasing}
      animationId={updateId}
      baseLine={baseLine}
      connectNulls={connectNulls}
      dot={dot}
      fill={fill}
      fillOpacity={fillOpacity}
      height={height}
      hide={hide}
      layout={layout}
      isAnimationActive={isAnimationActive}
      isRange={isRange}
      legendType={legendType}
      needClip={needClip}
      points={points}
      stroke={stroke}
      width={width}
      left={left}
      top={top}
      xAxisId={xAxisId}
      yAxisId={yAxisId}
    />
  );
}

export const getBaseValue = (
  layout: 'horizontal' | 'vertical',
  chartBaseValue: BaseValue | undefined,
  itemBaseValue: BaseValue | undefined,
  xAxis: BaseAxisWithScale,
  yAxis: BaseAxisWithScale,
): number => {
  // The baseValue can be defined both on the AreaChart, and on the Area.
  // The value for the item takes precedence.
  const baseValue = itemBaseValue ?? chartBaseValue;

  if (isNumber(baseValue)) {
    return baseValue;
  }

  const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  // @ts-expect-error d3scale .domain() returns unknown, Math.max expects number
  const domain: [number, number] = numericAxis.scale.domain();

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

export function computeArea({
  areaSettings: { connectNulls, baseValue: itemBaseValue, dataKey },
  stackedData,
  layout,
  chartBaseValue,
  xAxis,
  yAxis,
  displayedData,
  dataStartIndex,
  xAxisTicks,
  yAxisTicks,
  bandSize,
}: {
  areaSettings: AreaSettings;
  stackedData: number[][];
  layout: 'horizontal' | 'vertical';
  chartBaseValue: BaseValue | undefined;
  xAxis: BaseAxisWithScale;
  yAxis: BaseAxisWithScale;
  displayedData: ChartData;
  dataStartIndex: number;
  xAxisTicks: TickItem[];
  yAxisTicks: TickItem[];
  bandSize: number;
}): ComputedArea {
  const hasStack = stackedData && stackedData.length;
  const baseValue = getBaseValue(layout, chartBaseValue, itemBaseValue, xAxis, yAxis);
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

    const isBreakPoint = value[1] == null || (hasStack && !connectNulls && getValueByDataKey(entry, dataKey) == null);

    if (isHorizontalLayout) {
      return {
        // @ts-expect-error getCateCoordinateOfLine expects chart data to be an object, we allow unknown
        x: getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
        y: isBreakPoint ? null : yAxis.scale(value[1]),
        value,
        payload: entry,
      };
    }

    return {
      x: isBreakPoint ? null : xAxis.scale(value[1]),
      // @ts-expect-error getCateCoordinateOfLine expects chart data to be an object, we allow unknown
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

  return {
    points,
    baseLine,
    isRange,
  };
}

export class Area extends PureComponent<Props, State> {
  static displayName = 'Area';

  static defaultProps = defaultAreaProps;

  render() {
    // Report all props to Redux store first, before calling any hooks, to avoid circular dependencies.
    return (
      <CartesianGraphicalItemContext
        type="area"
        data={this.props.data}
        dataKey={this.props.dataKey}
        xAxisId={this.props.xAxisId}
        yAxisId={this.props.yAxisId}
        zAxisId={0}
        stackId={this.props.stackId}
        hide={this.props.hide}
        barSize={undefined}
      >
        <SetAreaLegend {...this.props} />
        <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        <AreaImpl {...this.props} />
      </CartesianGraphicalItemContext>
    );
  }
}
