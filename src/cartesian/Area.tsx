// eslint-disable-next-line max-classes-per-file
import * as React from 'react';
import { MutableRefObject, PureComponent, useCallback, useMemo, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Curve, CurveType, NullablePoint, Point as CurvePoint, Props as CurveProps } from '../shape/Curve';
import { Dot } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { LabelList } from '../component/LabelList';
import { Global } from '../util/Global';
import { interpolate, isNan, isNullish, isNumber, uniqueId } from '../util/DataUtils';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey, StackId } from '../util/ChartUtils';
import {
  ActiveDotType,
  AnimationDuration,
  AnimationTiming,
  DataKey,
  LegendType,
  NullableCoordinate,
  TickItem,
  TooltipType,
} from '../util/types';
import { filterProps, isClipDot } from '../util/ReactUtils';
import type { LegendPayload } from '../component/DefaultLegendContent';
import { ActivePoints } from '../component/ActivePoints';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { CartesianGraphicalItemContext } from '../context/CartesianGraphicalItemContext';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { ChartData } from '../state/chartDataSlice';
import { AreaPointItem, AreaSettings, ComputedArea, selectArea } from '../state/selectors/areaSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { useChartLayout, useOffset } from '../context/chartLayoutContext';
import { useChartName } from '../state/selectors/selectors';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { useAppSelector } from '../state/hooks';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { isWellBehavedNumber } from '../util/isWellBehavedNumber';
import { Animate } from '../animation/Animate';

export type BaseValue = number | 'dataMin' | 'dataMax';

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalAreaProps {
  activeDot: ActiveDotType;
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;
  baseLine: number | ReadonlyArray<NullableCoordinate> | undefined;

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
  needClip: boolean;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;

  points: ReadonlyArray<AreaPointItem>;
  stackId?: StackId;

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
type AreaSvgProps = Omit<CurveProps, 'type' | 'points' | 'ref'>;

type InternalProps = AreaSvgProps & InternalAreaProps;

export type Props = AreaSvgProps & AreaProps;

function getLegendItemColor(stroke: string | undefined, fill: string | undefined): string | undefined {
  return stroke && stroke !== 'none' ? stroke : fill;
}

const computeLegendPayloadFromAreaData = (props: Props): ReadonlyArray<LegendPayload> => {
  const { dataKey, name, stroke, fill, legendType, hide } = props;
  return [
    {
      inactive: hide,
      dataKey,
      type: legendType,
      color: getLegendItemColor(stroke, fill),
      value: getTooltipNameProp(name, dataKey),
      payload: props,
    },
  ];
};

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

function shouldRenderDots(points: ReadonlyArray<AreaPointItem>, dot: InternalProps['dot']): boolean {
  if (points == null) {
    return false;
  }
  if (dot) {
    return true;
  }
  return points.length === 1;
}

function Dots({
  clipPathId,
  points,
  props,
}: {
  clipPathId: string;
  points: ReadonlyArray<AreaPointItem>;
  props: InternalProps;
}) {
  const { needClip, dot, dataKey } = props;

  if (!shouldRenderDots(points, dot)) {
    return null;
  }

  const clipDot = isClipDot(dot);
  const areaProps = filterProps(props, false);
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
    clipPath: needClip ? `url(#clipPath-${clipDot ? '' : 'dots-'}${clipPathId})` : undefined,
  };
  return (
    <Layer className="recharts-area-dots" {...dotsProps}>
      {dots}
    </Layer>
  );
}

function StaticArea({
  points,
  baseLine,
  needClip,
  clipPathId,
  props,
  showLabels,
}: {
  points: ReadonlyArray<AreaPointItem>;
  baseLine: Props['baseLine'];
  needClip: boolean;
  clipPathId: string;
  props: InternalProps;
  showLabels: boolean;
}) {
  const { layout, type, stroke, connectNulls, isRange, ...others } = props;

  return (
    <>
      {points?.length > 1 && (
        <Layer clipPath={needClip ? `url(#clipPath-${clipPathId})` : undefined}>
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
              {...filterProps(props, false)}
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
              {...filterProps(props, false)}
              className="recharts-area-curve"
              layout={layout}
              type={type}
              connectNulls={connectNulls}
              fill="none"
              points={baseLine as CurvePoint[]}
            />
          )}
        </Layer>
      )}
      <Dots points={points} props={props} clipPathId={clipPathId} />
      {showLabels && LabelList.renderCallByParent(props, points)}
    </>
  );
}

function VerticalRect({
  alpha,
  baseLine,
  points,
  strokeWidth,
}: {
  alpha: number;
  points: ReadonlyArray<AreaPointItem>;
  baseLine: Props['baseLine'];
  strokeWidth: Props['strokeWidth'];
}) {
  const startY = points[0].y;
  const endY = points[points.length - 1].y;
  if (!isWellBehavedNumber(startY) || !isWellBehavedNumber(endY)) {
    return null;
  }
  const height = alpha * Math.abs(startY - endY);
  let maxX = Math.max(...points.map(entry => entry.x || 0));

  if (isNumber(baseLine)) {
    maxX = Math.max(baseLine, maxX);
  } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
    maxX = Math.max(...baseLine.map(entry => entry.x || 0), maxX);
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

function HorizontalRect({
  alpha,
  baseLine,
  points,
  strokeWidth,
}: {
  alpha: number;
  points: ReadonlyArray<AreaPointItem>;
  baseLine: Props['baseLine'];
  strokeWidth: Props['strokeWidth'];
}) {
  const startX = points[0].x;
  const endX = points[points.length - 1].x;
  if (!isWellBehavedNumber(startX) || !isWellBehavedNumber(endX)) {
    return null;
  }
  const width = alpha * Math.abs(startX - endX);
  let maxY = Math.max(...points.map(entry => entry.y || 0));

  if (isNumber(baseLine)) {
    maxY = Math.max(baseLine, maxY);
  } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
    maxY = Math.max(...baseLine.map(entry => entry.y || 0), maxY);
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

function ClipRect({
  alpha,
  layout,
  points,
  baseLine,
  strokeWidth,
}: {
  alpha: number;
  layout: 'horizontal' | 'vertical';
  points: ReadonlyArray<AreaPointItem>;
  baseLine: Props['baseLine'];
  strokeWidth: Props['strokeWidth'];
}) {
  if (layout === 'vertical') {
    return <VerticalRect alpha={alpha} points={points} baseLine={baseLine} strokeWidth={strokeWidth} />;
  }

  return <HorizontalRect alpha={alpha} points={points} baseLine={baseLine} strokeWidth={strokeWidth} />;
}

function AreaWithAnimation({
  needClip,
  clipPathId,
  props,
  previousPointsRef,
  previousBaselineRef,
}: {
  needClip: boolean;
  clipPathId: string;
  props: InternalProps;
  previousPointsRef: MutableRefObject<ReadonlyArray<AreaPointItem> | null>;
  previousBaselineRef: MutableRefObject<InternalProps['baseLine'] | null>;
}) {
  const {
    points,
    baseLine,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationStart,
    onAnimationEnd,
  } = props;
  const animationId = useAnimationId(props, 'recharts-area-');

  const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationEnd = useCallback(() => {
    if (typeof onAnimationEnd === 'function') {
      onAnimationEnd();
    }
    setIsAnimating(false);
  }, [onAnimationEnd]);

  const handleAnimationStart = useCallback(() => {
    if (typeof onAnimationStart === 'function') {
      onAnimationStart();
    }
    setIsAnimating(true);
  }, [onAnimationStart]);

  const prevPoints = previousPointsRef.current;
  const prevBaseLine = previousBaselineRef.current;
  return (
    <Animate
      begin={animationBegin}
      duration={animationDuration}
      isActive={isAnimationActive}
      easing={animationEasing}
      from={{ t: 0 }}
      to={{ t: 1 }}
      onAnimationEnd={handleAnimationEnd}
      onAnimationStart={handleAnimationStart}
      key={animationId}
    >
      {({ t }: { t: number }) => {
        if (prevPoints) {
          const prevPointsDiffFactor = prevPoints.length / points.length;
          const stepPoints: ReadonlyArray<AreaPointItem> =
            /*
             * Here it is important that at the very end of the animation, on the last frame,
             * we render the original points without any interpolation.
             * This is needed because the code above is checking for reference equality to decide if the animation should run
             * and if we create a new array instance (even if the numbers were the same)
             * then we would break animations.
             */
            t === 1
              ? points
              : points.map((entry, index): AreaPointItem => {
                  const prevPointIndex = Math.floor(index * prevPointsDiffFactor);
                  if (prevPoints[prevPointIndex]) {
                    const prev: AreaPointItem = prevPoints[prevPointIndex];

                    return { ...entry, x: interpolate(prev.x, entry.x, t), y: interpolate(prev.y, entry.y, t) };
                  }

                  return entry;
                });
          let stepBaseLine: number | ReadonlyArray<NullablePoint>;

          if (isNumber(baseLine)) {
            stepBaseLine = interpolate(prevBaseLine, baseLine, t);
          } else if (isNullish(baseLine) || isNan(baseLine)) {
            stepBaseLine = interpolate(prevBaseLine, 0, t);
          } else {
            stepBaseLine = baseLine.map((entry, index) => {
              const prevPointIndex = Math.floor(index * prevPointsDiffFactor);
              if (Array.isArray(prevBaseLine) && prevBaseLine[prevPointIndex]) {
                const prev = prevBaseLine[prevPointIndex];

                return { ...entry, x: interpolate(prev.x, entry.x, t), y: interpolate(prev.y, entry.y, t) };
              }

              return entry;
            });
          }

          if (t > 0) {
            /*
             * We need to keep the refs in the parent component because we need to remember the last shape of the animation
             * even if AreaWithAnimation is unmounted as that happens when changing props.
             *
             * And we need to update the refs here because here is where the interpolation is computed.
             * Eslint doesn't like changing function arguments, but we need it so here is an eslint-disable.
             */
            // eslint-disable-next-line no-param-reassign
            previousPointsRef.current = stepPoints;
            // eslint-disable-next-line no-param-reassign
            previousBaselineRef.current = stepBaseLine;
          }
          return (
            <StaticArea
              points={stepPoints}
              baseLine={stepBaseLine}
              needClip={needClip}
              clipPathId={clipPathId}
              props={props}
              showLabels={!isAnimating}
            />
          );
        }

        if (t > 0) {
          // eslint-disable-next-line no-param-reassign
          previousPointsRef.current = points;
          // eslint-disable-next-line no-param-reassign
          previousBaselineRef.current = baseLine;
        }
        return (
          <Layer>
            <defs>
              <clipPath id={`animationClipPath-${clipPathId}`}>
                <ClipRect
                  alpha={t}
                  points={points}
                  baseLine={baseLine}
                  layout={props.layout}
                  strokeWidth={props.strokeWidth}
                />
              </clipPath>
            </defs>
            <Layer clipPath={`url(#animationClipPath-${clipPathId})`}>
              <StaticArea
                points={points}
                baseLine={baseLine}
                needClip={needClip}
                clipPathId={clipPathId}
                props={props}
                showLabels
              />
            </Layer>
          </Layer>
        );
      }}
    </Animate>
  );
}

/*
 * This components decides if the area should be animated or not.
 * It also holds the state of the animation.
 */
function RenderArea({ needClip, clipPathId, props }: { needClip: boolean; clipPathId: string; props: InternalProps }) {
  const { points, baseLine, isAnimationActive } = props;

  /*
   * These two must be refs, not state!
   * Because we want to store the most recent shape of the animation in case we have to interrupt the animation;
   * that happens when user initiates another animation before the current one finishes.
   *
   * If this was a useState, then every step in the animation would trigger a re-render.
   * So, useRef it is.
   */
  const previousPointsRef = useRef<ReadonlyArray<AreaPointItem> | null>(null);
  const previousBaselineRef = useRef<InternalProps['baseLine'] | null>();

  const prevPoints = previousPointsRef.current;
  const prevBaseLine = previousBaselineRef.current;

  if (
    isAnimationActive &&
    /*
     * Here it's important that we unmount of AreaWithAnimation in case points are undefined
     * - this will make sure to interrupt the animation if it's running.
     * We still get to keep the last shape of the animation in the refs above.
     */
    points &&
    points.length &&
    (prevPoints !== points || prevBaseLine !== baseLine)
  ) {
    return (
      <AreaWithAnimation
        needClip={needClip}
        clipPathId={clipPathId}
        props={props}
        previousPointsRef={previousPointsRef}
        previousBaselineRef={previousBaselineRef}
      />
    );
  }

  return (
    <StaticArea
      points={points}
      baseLine={baseLine}
      needClip={needClip}
      clipPathId={clipPathId}
      props={props}
      showLabels
    />
  );
}

class AreaWithState extends PureComponent<InternalProps> {
  id = uniqueId('recharts-area-');

  render() {
    const { hide, dot, points, className, top, left, needClip, xAxisId, yAxisId, width, height, id, baseLine } =
      this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-area', className);
    const clipPathId = isNullish(id) ? this.id : id;
    const { r = 3, strokeWidth = 2 } = filterProps(dot, false) ?? { r: 3, strokeWidth: 2 };
    const clipDot = isClipDot(dot);
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
          <RenderArea needClip={needClip} clipPathId={clipPathId} props={this.props} />
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

const defaultAreaProps = {
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
} as const satisfies Partial<Props>;

function AreaImpl(props: Props) {
  const {
    activeDot,
    animationBegin,
    animationDuration,
    animationEasing,
    connectNulls,
    dot,
    fill,
    fillOpacity,
    hide,
    isAnimationActive,
    legendType,
    stroke,
    xAxisId,
    yAxisId,
    ...everythingElse
  } = resolveDefaultProps(props, defaultAreaProps);
  const layout = useChartLayout();
  const chartName = useChartName();
  const { needClip } = useNeedsClip(xAxisId, yAxisId);
  const isPanorama = useIsPanorama();

  const areaSettings: AreaSettings = useMemo(
    () => ({
      baseValue: props.baseValue,
      stackId: props.stackId,
      connectNulls,
      data: props.data,
      dataKey: props.dataKey,
    }),
    [props.baseValue, props.stackId, connectNulls, props.data, props.dataKey],
  );
  const { points, isRange, baseLine } =
    useAppSelector(state => selectArea(state, xAxisId, yAxisId, isPanorama, areaSettings)) ?? {};
  const { height, width, left, top } = useOffset();

  if (layout !== 'horizontal' && layout !== 'vertical') {
    // Can't render Area in an unsupported layout
    return null;
  }

  if (chartName !== 'AreaChart' && chartName !== 'ComposedChart') {
    // There is nothing stopping us from rendering Area in other charts, except for historical reasons. Do we want to allow that?
    return null;
  }

  /*
   * It is important to NOT have this condition here,
   * because we need the Animate inside to receive an empty state
   * so that it can properly reset its internal state and start a new animation.
   */
  // if (!points || !points.length) {
  //   return null;
  // }

  return (
    <AreaWithState
      {...everythingElse}
      activeDot={activeDot}
      animationBegin={animationBegin}
      animationDuration={animationDuration}
      animationEasing={animationEasing}
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
  stackedData: number[][] | undefined;
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

  const points: ReadonlyArray<AreaPointItem> = displayedData.map((entry, index): AreaPointItem => {
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

export class Area extends PureComponent<Props> {
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
        <SetLegendPayload legendPayload={computeLegendPayloadFromAreaData(this.props)} />
        <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        <AreaImpl {...this.props} />
      </CartesianGraphicalItemContext>
    );
  }
}
