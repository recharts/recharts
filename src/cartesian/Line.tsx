import * as React from 'react';
import { Component, MutableRefObject, Ref, useCallback, useRef, useState } from 'react';

import { clsx } from 'clsx';
import { Curve, CurveType, Props as CurveProps } from '../shape/Curve';
import { Dot } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { ImplicitLabelType } from '../component/Label';
import { LabelList } from '../component/LabelList';
import { ErrorBarDataItem, ErrorBarDataPointFormatter } from './ErrorBar';
import { interpolate, isNullish } from '../util/DataUtils';
import { filterProps, isClipDot } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveDotType,
  AnimationDuration,
  AnimationTiming,
  DataKey,
  LegendType,
  TickItem,
  TooltipType,
} from '../util/types';
import type { LegendPayload } from '../component/DefaultLegendContent';
import { ActivePoints } from '../component/ActivePoints';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { SetErrorBarContext } from '../context/ErrorBarContext';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { useChartLayout } from '../context/chartLayoutContext';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectLinePoints } from '../state/selectors/lineSelectors';
import { useAppSelector } from '../state/hooks';
import { AxisId } from '../state/cartesianAxisSlice';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { AreaPointItem } from '../state/selectors/areaSelectors';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { usePlotArea } from '../hooks';
import { WithIdRequired } from '../util/useUniqueId';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';

export interface LinePointItem {
  readonly value: number;
  readonly payload?: any;
  /**
   * Line coordinates can have gaps in them. We have `connectNulls` prop that allows to connect those gaps anyway.
   * What it means is that some points can have `null` x or y coordinates.
   */
  x: number | null;
  y: number | null;
}

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalLineProps {
  activeDot: ActiveDotType;
  animateNewValues: boolean;
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;

  className?: string;
  connectNulls: boolean;
  data?: any;
  dataKey?: DataKey<any>;
  dot: ActiveDotType;
  height: number;
  hide: boolean;
  id: string;
  isAnimationActive: boolean;
  label: ImplicitLabelType;
  layout: 'horizontal' | 'vertical';
  left: number;
  legendType: LegendType;

  name?: string | number;
  needClip?: boolean;

  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;

  points: ReadonlyArray<LinePointItem>;
  tooltipType?: TooltipType;
  top: number;
  type?: CurveType;
  unit?: string | number;
  width: number;
  xAxisId: AxisId;
  yAxisId: AxisId;
}

/**
 * External props, intended for end users to fill in
 */
interface LineProps {
  activeDot?: ActiveDotType;
  animateNewValues?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  className?: string;
  connectNulls?: boolean;
  data?: any;
  dataKey?: DataKey<any>;
  dot?: ActiveDotType;
  hide?: boolean;

  id?: string;
  isAnimationActive?: boolean;

  label?: ImplicitLabelType;
  legendType?: LegendType;

  name?: string | number;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
  tooltipType?: TooltipType;
  type?: CurveType;
  unit?: string | number;
  xAxisId?: AxisId;
  yAxisId?: AxisId;
}

/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type LineSvgProps = Omit<CurveProps, 'points' | 'pathRef' | 'ref'>;

type InternalProps = LineSvgProps & InternalLineProps;

export type Props = LineSvgProps & LineProps;

const computeLegendPayloadFromAreaData = (props: Props): ReadonlyArray<LegendPayload> => {
  const { dataKey, name, stroke, legendType, hide } = props;
  return [
    {
      inactive: hide,
      dataKey,
      type: legendType,
      color: stroke,
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
      color: props.stroke,
      unit,
    },
  };
}

const generateSimpleStrokeDasharray = (totalLength: number, length: number): string => {
  return `${length}px ${totalLength - length}px`;
};

function repeat(lines: number[], count: number) {
  const linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
  let result: number[] = [];

  for (let i = 0; i < count; ++i) {
    result = [...result, ...linesUnit];
  }

  return result;
}

const getStrokeDasharray = (length: number, totalLength: number, lines: number[]) => {
  const lineLength = lines.reduce((pre, next) => pre + next);

  // if lineLength is 0 return the default when no strokeDasharray is provided
  if (!lineLength) {
    return generateSimpleStrokeDasharray(totalLength, length);
  }

  const count = Math.floor(length / lineLength);
  const remainLength = length % lineLength;
  const restLength = totalLength - length;

  let remainLines: number[] = [];
  for (let i = 0, sum = 0; i < lines.length; sum += lines[i], ++i) {
    if (sum + lines[i] > remainLength) {
      remainLines = [...lines.slice(0, i), remainLength - sum];
      break;
    }
  }

  const emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];

  return [...repeat(lines, count), ...remainLines, ...emptyLines].map(line => `${line}px`).join(', ');
};

function renderDotItem(option: ActiveDotType, props: any) {
  let dotItem;

  if (React.isValidElement(option)) {
    dotItem = React.cloneElement(option, props);
  } else if (typeof option === 'function') {
    dotItem = option(props);
  } else {
    const className = clsx('recharts-line-dot', typeof option !== 'boolean' ? option.className : '');
    dotItem = <Dot {...props} className={className} />;
  }

  return dotItem;
}

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
  points: ReadonlyArray<LinePointItem>;
  clipPathId: string;
  props: InternalProps;
}) {
  const { dot, dataKey, needClip } = props;

  if (!shouldRenderDots(points, dot)) {
    return null;
  }

  /*
   * Exclude ID from the props passed to the Dots component
   * because then the ID would be applied to multiple dots and it would no longer be unique.
   */
  const { id, ...propsWithoutId } = props;

  const clipDot = isClipDot(dot);
  const lineProps = svgPropertiesNoEvents(propsWithoutId);
  const customDotProps = filterProps(dot, true);

  const dots = points.map((entry, i) => {
    const dotProps = {
      key: `dot-${i}`,
      r: 3,
      ...lineProps,
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
    <Layer className="recharts-line-dots" key="dots" {...dotsProps}>
      {dots}
    </Layer>
  );
}

function StaticCurve({
  clipPathId,
  pathRef,
  points,
  strokeDasharray,
  props,
  showLabels,
}: {
  clipPathId: string;
  pathRef: Ref<SVGPathElement>;
  points: ReadonlyArray<LinePointItem>;
  props: InternalProps;
  strokeDasharray?: string;
  showLabels: boolean;
}) {
  const { type, layout, connectNulls, needClip, ...others } = props;
  const curveProps = {
    ...filterProps(others, true),
    fill: 'none',
    className: 'recharts-line-curve',
    clipPath: needClip ? `url(#clipPath-${clipPathId})` : undefined,
    points,
    type,
    layout,
    connectNulls,
    strokeDasharray: strokeDasharray ?? props.strokeDasharray,
  };

  return (
    <>
      {points?.length > 1 && <Curve {...curveProps} pathRef={pathRef} />}
      <Dots points={points} clipPathId={clipPathId} props={props} />
      {showLabels && LabelList.renderCallByParent(props, points)}
    </>
  );
}

function getTotalLength(mainCurve: SVGPathElement | null): number {
  try {
    return (mainCurve && mainCurve.getTotalLength && mainCurve.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}

function CurveWithAnimation({
  clipPathId,
  props,
  pathRef,
  previousPointsRef,
  longestAnimatedLengthRef,
}: {
  clipPathId: string;
  props: InternalProps;
  pathRef: MutableRefObject<SVGPathElement | null>;
  longestAnimatedLengthRef: MutableRefObject<number>;
  previousPointsRef: MutableRefObject<ReadonlyArray<LinePointItem> | null>;
}) {
  const {
    points,
    strokeDasharray,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    animateNewValues,
    width,
    height,
    onAnimationEnd,
    onAnimationStart,
  } = props;

  const prevPoints = previousPointsRef.current;
  const animationId = useAnimationId(props, 'recharts-line-');

  const [isAnimating, setIsAnimating] = useState(false);

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
  const totalLength = getTotalLength(pathRef.current);
  /*
   * Here we want to detect if the length animation has been interrupted.
   * For that we keep a reference to the furthest length that has been animated.
   *
   * And then, to keep things smooth, we add to it the current length that is being animated right now.
   *
   * If we did Math.max then it makes the length animation "pause" but we want to keep it smooth
   * so in case we have some "leftover" length from the previous animation we add it to the current length.
   *
   * This is not perfect because the animation changes speed due to easing. The default easing is 'ease' which is not linear
   * and makes it stand out. But it's good enough I suppose.
   * If we want to fix it then we need to keep track of multiple animations and their easing and timings.
   *
   * If you want to see this in action, try to change the dataKey of the line chart while the initial animation is running.
   * The Line begins with zero length and slowly grows to the full length. While this growth is in progress,
   * change the dataKey and the Line will continue growing from where it has grown so far.
   */
  const startingPoint = longestAnimatedLengthRef.current;

  return (
    <JavascriptAnimate
      begin={animationBegin}
      duration={animationDuration}
      isActive={isAnimationActive}
      easing={animationEasing}
      onAnimationEnd={handleAnimationEnd}
      onAnimationStart={handleAnimationStart}
      key={animationId}
    >
      {(t: number) => {
        const lengthInterpolated = interpolate(startingPoint, totalLength + startingPoint, t);
        const curLength = Math.min(lengthInterpolated, totalLength);
        let currentStrokeDasharray;

        if (strokeDasharray) {
          const lines = `${strokeDasharray}`.split(/[,\s]+/gim).map(num => parseFloat(num));
          currentStrokeDasharray = getStrokeDasharray(curLength, totalLength, lines);
        } else {
          currentStrokeDasharray = generateSimpleStrokeDasharray(totalLength, curLength);
        }

        if (prevPoints) {
          const prevPointsDiffFactor = prevPoints.length / points.length;
          const stepData =
            t === 1
              ? points
              : points.map((entry, index): LinePointItem => {
                  const prevPointIndex = Math.floor(index * prevPointsDiffFactor);
                  if (prevPoints[prevPointIndex]) {
                    const prev = prevPoints[prevPointIndex];
                    return {
                      ...entry,
                      x: interpolate(prev.x, entry.x, t),
                      y: interpolate(prev.y, entry.y, t),
                    };
                  }

                  // magic number of faking previous x and y location
                  if (animateNewValues) {
                    return {
                      ...entry,
                      x: interpolate(width * 2, entry.x, t),
                      y: interpolate(height / 2, entry.y, t),
                    };
                  }
                  return {
                    ...entry,
                    x: entry.x,
                    y: entry.y,
                  };
                });
          // eslint-disable-next-line no-param-reassign
          previousPointsRef.current = stepData;
          return (
            <StaticCurve
              props={props}
              points={stepData}
              clipPathId={clipPathId}
              pathRef={pathRef}
              showLabels={!isAnimating}
              strokeDasharray={currentStrokeDasharray}
            />
          );
        }

        /*
         * Here it is important to wait a little bit with updating the previousPointsRef
         * before the animation has a time to initialize.
         * If we set the previous pointsRef immediately, we set it before the Legend height it calculated
         * and before pathRef is set.
         * If that happens, the Line will re-render again after Legend had reported its height
         * which will start a new animation with the previous points as the starting point
         * which gives the effect of the Line animating slightly upwards (where the animation distance equals the Legend height).
         * Waiting for t > 0 is indirect but good enough to ensure that the Legend height is calculated and animation works properly.
         *
         * Total length similarly is calculated from the pathRef. We should not update the previousPointsRef
         * before the pathRef is set, otherwise we will have a wrong total length.
         */
        if (t > 0 && totalLength > 0) {
          // eslint-disable-next-line no-param-reassign
          previousPointsRef.current = points;
          /*
           * totalLength is set from a ref and is not updated in the first tick of the animation.
           * It defaults to zero which is exactly what we want here because we want to grow from zero,
           * however the same happens when the data change.
           *
           * In that case we want to remember the previous length and continue from there, and only animate the shape.
           *
           * Therefore the totalLength > 0 check.
           *
           * The Animate is about to fire handleAnimationStart which will update the state
           * and cause a re-render and read a new proper totalLength which will be used in the next tick
           * and update the longestAnimatedLengthRef.
           */
          // eslint-disable-next-line no-param-reassign
          longestAnimatedLengthRef.current = curLength;
        }
        return (
          <StaticCurve
            props={props}
            points={points}
            clipPathId={clipPathId}
            pathRef={pathRef}
            showLabels={!isAnimating}
            strokeDasharray={currentStrokeDasharray}
          />
        );
      }}
    </JavascriptAnimate>
  );
}

function RenderCurve({ clipPathId, props }: { clipPathId: string; props: InternalProps }) {
  const { points, isAnimationActive } = props;
  const previousPointsRef = useRef<ReadonlyArray<LinePointItem> | null>(null);
  const longestAnimatedLengthRef = useRef<number>(0);
  const pathRef = useRef<SVGPathElement | null>(null);

  const prevPoints = previousPointsRef.current;

  if (isAnimationActive && points && points.length && prevPoints !== points) {
    return (
      <CurveWithAnimation
        props={props}
        clipPathId={clipPathId}
        previousPointsRef={previousPointsRef}
        longestAnimatedLengthRef={longestAnimatedLengthRef}
        pathRef={pathRef}
      />
    );
  }

  return <StaticCurve props={props} points={points} clipPathId={clipPathId} pathRef={pathRef} showLabels />;
}

const errorBarDataPointFormatter: ErrorBarDataPointFormatter = (
  dataPoint: LinePointItem,
  dataKey,
): ErrorBarDataItem => {
  return {
    x: dataPoint.x,
    y: dataPoint.y,
    value: dataPoint.value,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: getValueByDataKey(dataPoint.payload, dataKey),
  };
};

// eslint-disable-next-line react/prefer-stateless-function
class LineWithState extends Component<InternalProps> {
  render() {
    const { hide, dot, points, className, xAxisId, yAxisId, top, left, width, height, id, needClip } = this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-line', className);
    const clipPathId = id;
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
          <RenderCurve props={this.props} clipPathId={clipPathId} />
          <SetErrorBarContext
            xAxisId={xAxisId}
            yAxisId={yAxisId}
            data={points}
            dataPointFormatter={errorBarDataPointFormatter}
            errorBarOffset={0}
          >
            {this.props.children}
          </SetErrorBarContext>
        </Layer>
        <ActivePoints
          activeDot={this.props.activeDot}
          points={points}
          mainColor={this.props.stroke}
          itemDataKey={this.props.dataKey}
        />
      </>
    );
  }
}

const defaultLineProps = {
  activeDot: true,
  animateNewValues: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  connectNulls: false,
  dot: true,
  fill: '#fff',
  hide: false,
  isAnimationActive: !Global.isSsr,
  label: false,
  legendType: 'line',
  stroke: '#3182bd',
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
} as const satisfies Partial<Props>;

function LineImpl(props: WithIdRequired<Props>) {
  const {
    activeDot,
    animateNewValues,
    animationBegin,
    animationDuration,
    animationEasing,
    connectNulls,
    dot,
    hide,
    isAnimationActive,
    label,
    legendType,
    xAxisId,
    yAxisId,
    id,
    ...everythingElse
  } = resolveDefaultProps(props, defaultLineProps);

  const { needClip } = useNeedsClip(xAxisId, yAxisId);
  const plotArea = usePlotArea();
  const layout = useChartLayout();
  const isPanorama = useIsPanorama();
  const points: ReadonlyArray<LinePointItem> | undefined = useAppSelector(state =>
    selectLinePoints(state, xAxisId, yAxisId, isPanorama, id),
  );
  if ((layout !== 'horizontal' && layout !== 'vertical') || points == null || plotArea == null) {
    // Cannot render Line in an unsupported layout
    return null;
  }

  const { height, width, x: left, y: top } = plotArea;

  return (
    <LineWithState
      {...everythingElse}
      id={id}
      connectNulls={connectNulls}
      dot={dot}
      activeDot={activeDot}
      animateNewValues={animateNewValues}
      animationBegin={animationBegin}
      animationDuration={animationDuration}
      animationEasing={animationEasing}
      isAnimationActive={isAnimationActive}
      hide={hide}
      label={label}
      legendType={legendType}
      xAxisId={xAxisId}
      yAxisId={yAxisId}
      points={points}
      layout={layout}
      height={height}
      width={width}
      left={left}
      top={top}
      needClip={needClip}
    />
  );
}

export function computeLinePoints({
  layout,
  xAxis,
  yAxis,
  xAxisTicks,
  yAxisTicks,
  dataKey,
  bandSize,
  displayedData,
}: {
  layout: Props['layout'];
  xAxis: BaseAxisWithScale;
  yAxis: BaseAxisWithScale;
  xAxisTicks: TickItem[];
  yAxisTicks: TickItem[];
  dataKey: Props['dataKey'];
  bandSize: number;
  displayedData: any[];
}): ReadonlyArray<LinePointItem> {
  return displayedData
    .map((entry, index): LinePointItem | null => {
      // @ts-expect-error getValueByDataKey does not validate the output type
      const value: number = getValueByDataKey(entry, dataKey);

      if (layout === 'horizontal') {
        const x = getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index });
        const y = isNullish(value) ? null : yAxis.scale(value);
        return {
          x,
          y,
          value,
          payload: entry,
        };
      }

      const x = isNullish(value) ? null : xAxis.scale(value);
      const y = getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index });
      if (x == null || y == null) {
        return null;
      }
      return {
        x,
        y,
        value,
        payload: entry,
      };
    })
    .filter(Boolean);
}

export function Line(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, defaultLineProps);
  const isPanorama = useIsPanorama();
  return (
    <RegisterGraphicalItemId id={props.id} type="line">
      {id => (
        <>
          <SetLegendPayload legendPayload={computeLegendPayloadFromAreaData(props)} />
          <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={props} />
          <SetCartesianGraphicalItem
            type="line"
            id={id}
            data={props.data}
            xAxisId={props.xAxisId}
            yAxisId={props.yAxisId}
            zAxisId={0}
            dataKey={props.dataKey}
            hide={props.hide}
            isPanorama={isPanorama}
          />
          <LineImpl {...props} id={id} />
        </>
      )}
    </RegisterGraphicalItemId>
  );
}
Line.displayName = 'Line';
