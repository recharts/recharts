import React, { PureComponent, Ref, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Animate from 'react-smooth';
import isFunction from 'lodash/isFunction';
import isNil from 'lodash/isNil';
import clsx from 'clsx';
import { Curve, CurveType, Point as CurvePoint, Props as CurveProps } from '../shape/Curve';
import { Dot } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { ImplicitLabelType } from '../component/Label';
import { LabelList } from '../component/LabelList';
import { ErrorBarDataItem, ErrorBarDataPointFormatter, SetErrorBarPreferredDirection } from './ErrorBar';
import { interpolateNumber, uniqueId } from '../util/DataUtils';
import { filterProps, hasClipDot } from '../util/ReactUtils';
import { Global } from '../util/Global';
import {
  getBandSizeOfAxis,
  getCateCoordinateOfLine,
  getTicksOfAxis,
  getTooltipNameProp,
  getValueByDataKey,
} from '../util/ChartUtils';
import { ActiveDotType, AnimationDuration, AnimationTiming, DataKey, LegendType, TooltipType } from '../util/types';
import type { Payload as LegendPayload } from '../component/DefaultLegendContent';
import { useLegendPayloadDispatch } from '../context/legendPayloadContext';
import { ActivePoints } from '../component/ActivePoints';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { CartesianGraphicalItemContext } from '../context/CartesianGraphicalItemContext';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { useAppSelector } from '../state/hooks';
import { selectChartLayout } from '../context/chartLayoutContext';
import { selectChartOffset } from '../state/selectors/selectChartOffset';
import { BaseAxisWithScale, selectDisplayedData } from '../state/selectors/axisSelectors';
import { useXAxis, useYAxis } from '../hooks';

export interface LinePointItem extends CurvePoint {
  value?: number;
  payload?: any;
}

interface InternalLineProps {
  needClip?: boolean;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  points?: LinePointItem[];
}

interface LineProps extends InternalLineProps {
  className?: string;
  data?: any;
  type?: CurveType;
  unit?: string | number;
  name?: string | number;
  yAxisId?: string | number;
  xAxisId?: string | number;
  dataKey?: DataKey<any>;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  layout?: 'horizontal' | 'vertical';
  connectNulls?: boolean;
  hide?: boolean;

  activeDot?: ActiveDotType;
  dot?: ActiveDotType;

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  isAnimationActive?: boolean;
  animateNewValues?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  animationId?: number;
  id?: string;
  label?: ImplicitLabelType;
}

export type Props = Omit<CurveProps, 'points' | 'pathRef'> & LineProps;

const computeLegendPayloadFromAreaData = (props: Props): Array<LegendPayload> => {
  const { dataKey, name, stroke, legendType, hide } = props;
  const { needClip, ...otherPayload } = props;
  return [
    {
      inactive: hide,
      dataKey,
      type: legendType,
      color: stroke,
      value: name || dataKey,
      payload: otherPayload,
    },
  ];
};

function SetLineLegend(props: Props): null {
  useLegendPayloadDispatch(computeLegendPayloadFromAreaData, props);
  return null;
}

function getTooltipEntrySettings(props: Props): TooltipPayloadConfiguration {
  const { dataKey, data, stroke, strokeWidth, fill, name, hide, unit } = props;
  return {
    dataDefinedOnItem: data,
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
  } else if (isFunction(option)) {
    dotItem = option(props);
  } else {
    const className = clsx('recharts-line-dot', typeof option !== 'boolean' ? option.className : '');
    dotItem = <Dot {...props} className={className} />;
  }

  return dotItem;
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

const StaticCurve = ({
  lineProps,
  points,
  needClip,
  clipPathId,
  pathRef,
  curveOptions,
}: {
  lineProps: Props;
  points: LinePointItem[];
  needClip: boolean;
  clipPathId: string;
  pathRef: Ref<SVGPathElement>;
  curveOptions?: { strokeDasharray: string };
}) => {
  const layout = useAppSelector(selectChartLayout);
  const { type, connectNulls, ref, ...others } = lineProps;
  const curveProps = {
    ...filterProps(others, true),
    fill: 'none',
    className: 'recharts-line-curve',
    clipPath: needClip ? `url(#clipPath-${clipPathId})` : null,
    points,
    ...curveOptions,
    type,
    layout,
    connectNulls,
  };

  return <Curve {...curveProps} pathRef={pathRef} />;
};

const AnimatedCurve = ({
  lineProps,
  prevPoints,
  currentPoints,
  needClip,
  clipPathId,
  totalLength,
  pathRef,
  handleAnimationStart,
  handleAnimationEnd,
}: {
  lineProps: Props;
  currentPoints: LinePointItem[];
  prevPoints: LinePointItem[] | null;
  totalLength: number;
  needClip: boolean;
  clipPathId: string;
  pathRef: Ref<SVGPathElement>;
  handleAnimationStart: () => void;
  handleAnimationEnd: () => void;
}) => {
  const { height, width } = useAppSelector(selectChartOffset);
  const {
    strokeDasharray,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    // TODO: animationId is now always undefined - previously it was always updateId from generateCategoricalChart
    // Determine if this is needed or if we can just remove `key` altogether.
    animationId,
    animateNewValues,
  } = lineProps;

  return (
    <Animate
      begin={animationBegin}
      duration={animationDuration}
      isActive={isAnimationActive}
      easing={animationEasing}
      from={{ t: 0 }}
      to={{ t: 1 }}
      key={`line-${animationId}`}
      onAnimationEnd={handleAnimationEnd}
      onAnimationStart={handleAnimationStart}
    >
      {({ t }: { t: number }) => {
        // this breaks animation. Do we even need to store previous state? Seems to animate fine without doing so.
        // do we need anything in the if statement? Seems to be a lot there for no usage...
        // if (prevPoints)
        if (undefined) {
          const prevPointsDiffFactor = prevPoints.length / currentPoints.length;
          const stepData = currentPoints.map((entry, index) => {
            const prevPointIndex = Math.floor(index * prevPointsDiffFactor);
            if (prevPoints[prevPointIndex]) {
              const prev = prevPoints[prevPointIndex];
              const interpolatorX = interpolateNumber(prev.x, entry.x);
              const interpolatorY = interpolateNumber(prev.y, entry.y);

              return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
            }

            // magic number of faking previous x and y location
            if (animateNewValues) {
              const interpolatorX = interpolateNumber(width * 2, entry.x);
              const interpolatorY = interpolateNumber(height / 2, entry.y);
              return { ...entry, x: interpolatorX(t), y: interpolatorY(t) };
            }
            return { ...entry, x: entry.x, y: entry.y };
          });
          return (
            <StaticCurve
              lineProps={lineProps}
              points={stepData}
              needClip={needClip}
              clipPathId={clipPathId}
              pathRef={pathRef}
            />
          );
        }
        const interpolator = interpolateNumber(0, totalLength);
        const curLength = interpolator(t);
        let currentStrokeDasharray;

        // when a strokeDasharry is set there is sometimes issues when animating where you can see the end of the line before it finishes
        // TODO: investigate and fix
        if (strokeDasharray) {
          const lines = `${strokeDasharray}`.split(/[,\s]+/gim).map(num => parseFloat(num));
          currentStrokeDasharray = getStrokeDasharray(curLength, totalLength, lines);
        } else {
          currentStrokeDasharray = generateSimpleStrokeDasharray(totalLength, curLength);
        }

        return (
          <StaticCurve
            lineProps={lineProps}
            points={currentPoints}
            needClip={needClip}
            clipPathId={clipPathId}
            curveOptions={{
              strokeDasharray: currentStrokeDasharray,
            }}
            pathRef={pathRef}
          />
        );
      }}
    </Animate>
  );
};

// do we need this? Animation doesn't work with it...
const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useComposedLineData = (
  dataKey: DataKey<any>,
  xAxisId: string | number,
  yAxisId: string | number,
): { points: LinePointItem[]; prevPoints: LinePointItem[]; xAxis: BaseAxisWithScale; yAxis: BaseAxisWithScale } => {
  const layout = useAppSelector(selectChartLayout);

  // we should use matching axes rather than arbirary ones since we know the Line's axisIds.
  const matchingXAxis = useXAxis(xAxisId);
  const matchingYAxis = useYAxis(yAxisId);

  // if we don't throw we know the axisIds are good.
  const { tooltipAxis, tooltipAxisId, axisType } =
    layout === 'horizontal'
      ? { tooltipAxis: matchingXAxis, tooltipAxisId: xAxisId, axisType: 'xAxis' as const }
      : { tooltipAxis: matchingYAxis, tooltipAxisId: yAxisId, axisType: 'yAxis' as const };

  // we could select this from redux, but should we? Having matching axisIds is important in the graphical item.
  const tooltipTicks = getTicksOfAxis(tooltipAxis, false, true);

  // TODO: does Line even need this?
  const bandSize = getBandSizeOfAxis(tooltipAxis, tooltipTicks, false);

  const displayedData = useAppSelector(state => selectDisplayedData(state, axisType, tooltipAxisId));

  const points = displayedData.map((entry: Record<string, unknown>, index): LinePointItem => {
    const value = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCateCoordinateOfLine({ axis: tooltipAxis, ticks: tooltipTicks, bandSize, entry, index }),
        y: isNil(value) ? null : matchingYAxis?.scale(value),
        // @ts-expect-error unknown is not assignable to type number
        value,
        payload: entry,
      };
    }

    return {
      x: isNil(value) ? null : matchingXAxis?.scale(value),
      y: getCateCoordinateOfLine({ axis: tooltipAxis, ticks: tooltipTicks, bandSize, entry, index }),
      // @ts-expect-error unknown is not assignable to type number
      value,
      payload: entry,
    };
  });
  const prevPoints = usePrevious(points);

  return { points, prevPoints, xAxis: matchingXAxis, yAxis: matchingYAxis };
};

const LineWithState = (props: Props & { id: string; needClip: boolean }) => {
  const { dot, className, isAnimationActive, id, dataKey, yAxisId, xAxisId, needClip } = props;
  const [isAnimationFinished, setIsAnimationFinished] = useState(true);
  const [totalLength, setTotalLength] = useState(0);
  const { top, left, height, width } = useAppSelector(selectChartOffset);
  const layout = useAppSelector(selectChartLayout);

  const { points: calculatedPoints } = useComposedLineData(dataKey, props.xAxisId, props.yAxisId);
  const points = props.points.length > 0 ? props.points : calculatedPoints;

  const pathRef = useRef<SVGPathElement>(null);

  const getTotalLength = () => {
    const curveDom = pathRef.current;

    try {
      if (!totalLength || totalLength === 0) {
        return (curveDom && curveDom.getTotalLength && curveDom.getTotalLength()) || 0;
      }
      return totalLength;
    } catch (err) {
      return 0;
    }
  };

  const length = getTotalLength();

  /**
   * This is expensive. But if we don't use it we always stutter on first render.
   * TODO: look into other ways of preventing the extra render
   */
  useLayoutEffect(() => {
    setTotalLength(length);

    return () => {
      setTotalLength(0);
    };
  }, [length]);

  const handleAnimationEnd = () => {
    setIsAnimationFinished(true);

    if (props.onAnimationEnd) {
      props.onAnimationEnd();
    }
  };

  const handleAnimationStart = () => {
    setIsAnimationFinished(false);

    if (props.onAnimationStart) {
      props.onAnimationStart();
    }
  };

  const renderCurve = (clipPathId: string) => {
    if (
      isAnimationActive &&
      points &&
      points.length > 0
      // either of these comparisons break animation at the moment. Are these important? Not sure...
      // ((!prevPoints && totalLength > 0) || !isEqual(prevPoints, points))
    ) {
      return (
        <AnimatedCurve
          lineProps={props}
          currentPoints={points}
          prevPoints={[]}
          needClip={needClip}
          clipPathId={clipPathId}
          pathRef={pathRef}
          totalLength={totalLength}
          handleAnimationEnd={handleAnimationEnd}
          handleAnimationStart={handleAnimationStart}
        />
      );
    }

    return (
      <StaticCurve lineProps={props} points={points} needClip={needClip} clipPathId={clipPathId} pathRef={pathRef} />
    );
  };

  const renderDots = (clipDot: boolean, clipPathId: string) => {
    if (isAnimationActive && !isAnimationFinished) {
      return null;
    }
    const lineProps = filterProps(props, false);
    const customDotProps = filterProps(dot, true);
    const dots = points.map((entry, i) => {
      const dotProps = {
        key: `dot-${i}`,
        r: 3,
        ...lineProps,
        ...customDotProps,
        value: entry.value,
        dataKey,
        cx: entry.x,
        cy: entry.y,
        index: i,
        payload: entry.payload,
      };

      return renderDotItem(dot, dotProps);
    });

    const dotsProps = {
      clipPath: needClip ? `url(#clipPath-${clipDot ? '' : 'dots-'}${clipPathId})` : null,
    };
    return (
      <Layer className="recharts-line-dots" key="dots" {...dotsProps}>
        {dots}
      </Layer>
    );
  };

  const hasSinglePoint = points.length === 1;
  const layerClass = clsx('recharts-line', className);
  const clipPathId = isNil(props.id) ? id : props.id;
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
                <rect x={left - dotSize / 2} y={top - dotSize / 2} width={width + dotSize} height={height + dotSize} />
              </clipPath>
            )}
          </defs>
        )}
        {!hasSinglePoint && renderCurve(clipPathId)}
        <SetErrorBarPreferredDirection direction={layout === 'horizontal' ? 'y' : 'x'}>
          {props.children}
        </SetErrorBarPreferredDirection>
        {(hasSinglePoint || dot) && renderDots(clipDot, clipPathId)}
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(props, points)}
      </Layer>
      <ActivePoints activeDot={props.activeDot} points={points} mainColor={props.stroke} itemDataKey={props.dataKey} />
    </>
  );
};

function LineImpl(props: Props) {
  const { needClip } = useNeedsClip(props.xAxisId, props.yAxisId);
  const { ref, hide, ...everythingElse } = props;
  const id = uniqueId('recharts-line-');
  return !hide && <LineWithState {...everythingElse} needClip={needClip} id={id} />;
}

export class Line extends PureComponent<Props> {
  static displayName = 'Line';

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: false,
    activeDot: true,
    dot: true,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [] as LinePointItem[],
    isAnimationActive: !Global.isSsr,
    animateNewValues: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
    hide: false,
    label: false,
  };

  render() {
    return (
      <CartesianGraphicalItemContext
        data={this.props.data}
        xAxisId={this.props.xAxisId}
        yAxisId={this.props.yAxisId}
        zAxisId={0}
        dataKey={this.props.dataKey}
        // line doesn't stack
        stackId={undefined}
        hide={this.props.hide}
        dataPointFormatter={errorBarDataPointFormatter}
        errorBarData={this.props.points}
        errorBarOffset={0}
      >
        <SetLineLegend {...this.props} />
        <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        <LineImpl {...this.props} />
      </CartesianGraphicalItemContext>
    );
  }
}
