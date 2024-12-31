// eslint-disable-next-line max-classes-per-file
import React, { Component, PureComponent } from 'react';
import Animate from 'react-smooth';
import isEqual from 'lodash/isEqual';

import clsx from 'clsx';
import { Curve, CurveType, Point as CurvePoint, Props as CurveProps } from '../shape/Curve';
import { Dot } from '../shape/Dot';
import { Layer } from '../container/Layer';
import { ImplicitLabelType } from '../component/Label';
import { LabelList } from '../component/LabelList';
import { ErrorBarDataItem, ErrorBarDataPointFormatter, SetErrorBarPreferredDirection } from './ErrorBar';
import { interpolateNumber, isNullish, uniqueId } from '../util/DataUtils';
import { filterProps, hasClipDot } from '../util/ReactUtils';
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
import { useLegendPayloadDispatch } from '../context/legendPayloadContext';
import { ActivePoints } from '../component/ActivePoints';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { CartesianGraphicalItemContext, SetErrorBarContext } from '../context/CartesianGraphicalItemContext';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { UpdateId, useChartLayout, useOffset, useUpdateId } from '../context/chartLayoutContext';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectLinePoints } from '../state/selectors/lineSelectors';
import { useAppSelector } from '../state/hooks';
import { AxisId } from '../state/cartesianAxisSlice';

export interface LinePointItem extends CurvePoint {
  readonly value?: number;
  readonly payload?: any;
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
  animationId: UpdateId;

  className?: string;
  connectNulls: boolean;
  data?: any;
  dataKey?: DataKey<any>;
  dot: ActiveDotType;
  height?: number;
  hide: boolean;
  id?: string;
  isAnimationActive: boolean;
  label: ImplicitLabelType;
  layout: 'horizontal' | 'vertical';
  left?: number;
  legendType: LegendType;

  name?: string | number;
  needClip?: boolean;

  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;

  points: ReadonlyArray<LinePointItem>;
  tooltipType?: TooltipType;
  top?: number;
  type?: CurveType;
  unit?: string | number;
  width?: number;
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
type LineSvgProps = Omit<CurveProps, 'points' | 'pathRef'>;

type InternalProps = LineSvgProps & InternalLineProps;

export type Props = LineSvgProps & LineProps;

interface State {
  isAnimationFinished?: boolean;
  totalLength?: number;
  prevPoints?: ReadonlyArray<LinePointItem>;
  curPoints?: ReadonlyArray<LinePointItem>;
  prevAnimationId?: UpdateId;
}

const computeLegendPayloadFromAreaData = (props: Props): Array<LegendPayload> => {
  const { dataKey, name, stroke, legendType, hide } = props;
  return [
    {
      inactive: hide,
      dataKey,
      type: legendType,
      color: stroke,
      value: name || dataKey,
      payload: props,
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

class LineWithState extends Component<InternalProps, State> {
  mainCurve?: SVGPathElement;

  state: State = {
    isAnimationFinished: true,
    totalLength: 0,
  };

  componentDidMount() {
    if (!this.props.isAnimationActive) {
      return;
    }

    const totalLength = this.getTotalLength();
    this.setState({ totalLength });
  }

  componentDidUpdate(): void {
    if (!this.props.isAnimationActive) {
      return;
    }

    const totalLength = this.getTotalLength();
    if (totalLength !== this.state.totalLength) {
      this.setState({ totalLength });
    }
  }

  static getDerivedStateFromProps(nextProps: InternalProps, prevState: State): State {
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

  getTotalLength() {
    const curveDom = this.mainCurve;

    try {
      return (curveDom && curveDom.getTotalLength && curveDom.getTotalLength()) || 0;
    } catch {
      return 0;
    }
  }

  id = uniqueId('recharts-line-');

  pathRef = (node: SVGPathElement): void => {
    this.mainCurve = node;
  };

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });

    if (this.props.onAnimationEnd) {
      this.props.onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });

    if (this.props.onAnimationStart) {
      this.props.onAnimationStart();
    }
  };

  renderDots(needClip: boolean, clipDot: boolean, clipPathId: string) {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }
    const { dot, points, dataKey } = this.props;
    const lineProps = filterProps(this.props, false);
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
  }

  renderCurveStatically(
    points: ReadonlyArray<LinePointItem>,
    needClip: boolean,
    clipPathId: string,
    props?: { strokeDasharray: string },
  ) {
    const { type, layout, connectNulls, ref, ...others } = this.props;
    const curveProps = {
      ...filterProps(others, true),
      fill: 'none',
      className: 'recharts-line-curve',
      clipPath: needClip ? `url(#clipPath-${clipPathId})` : null,
      points,
      ...props,
      type,
      layout,
      connectNulls,
    };

    return <Curve {...curveProps} pathRef={this.pathRef} />;
  }

  renderCurveWithAnimation(needClip: boolean, clipPathId: string) {
    const {
      points,
      strokeDasharray,
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
      animationId,
      animateNewValues,
      width,
      height,
    } = this.props;
    const { prevPoints, totalLength } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`line-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {({ t }: { t: number }) => {
          if (prevPoints) {
            const prevPointsDiffFactor = prevPoints.length / points.length;
            const stepData = points.map((entry, index) => {
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
            return this.renderCurveStatically(stepData, needClip, clipPathId);
          }
          const interpolator = interpolateNumber(0, totalLength);
          const curLength = interpolator(t);
          let currentStrokeDasharray;

          if (strokeDasharray) {
            const lines = `${strokeDasharray}`.split(/[,\s]+/gim).map(num => parseFloat(num));
            currentStrokeDasharray = getStrokeDasharray(curLength, totalLength, lines);
          } else {
            currentStrokeDasharray = generateSimpleStrokeDasharray(totalLength, curLength);
          }

          return this.renderCurveStatically(points, needClip, clipPathId, {
            strokeDasharray: currentStrokeDasharray,
          });
        }}
      </Animate>
    );
  }

  renderCurve(needClip: boolean, clipPathId: string) {
    const { points, isAnimationActive } = this.props;
    const { prevPoints, totalLength } = this.state;

    if (
      isAnimationActive &&
      points &&
      points.length &&
      ((!prevPoints && totalLength > 0) || !isEqual(prevPoints, points))
    ) {
      return this.renderCurveWithAnimation(needClip, clipPathId);
    }

    return this.renderCurveStatically(points, needClip, clipPathId);
  }

  render() {
    const {
      hide,
      dot,
      points,
      className,
      xAxisId,
      yAxisId,
      top,
      left,
      width,
      height,
      isAnimationActive,
      id,
      needClip,
      layout,
    } = this.props;

    if (hide || !points || !points.length) {
      return null;
    }

    const { isAnimationFinished } = this.state;
    const hasSinglePoint = points.length === 1;
    const layerClass = clsx('recharts-line', className);
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
          {!hasSinglePoint && this.renderCurve(needClip, clipPathId)}
          <SetErrorBarPreferredDirection direction={layout === 'horizontal' ? 'y' : 'x'}>
            <SetErrorBarContext
              xAxisId={xAxisId}
              yAxisId={yAxisId}
              data={points}
              dataPointFormatter={errorBarDataPointFormatter}
              errorBarOffset={0}
            >
              {this.props.children}
            </SetErrorBarContext>
          </SetErrorBarPreferredDirection>
          {(hasSinglePoint || dot) && this.renderDots(needClip, clipDot, clipPathId)}
          {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)}
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

const defaultLineProps: Partial<Props> = {
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
};

function LineImpl(props: Props) {
  const { needClip } = useNeedsClip(props.xAxisId, props.yAxisId);
  const { height, width, left, top } = useOffset();
  const layout = useChartLayout();
  const isPanorama = useIsPanorama();
  const points: ReadonlyArray<LinePointItem> = useAppSelector(state =>
    selectLinePoints(state, props.xAxisId, props.yAxisId, isPanorama, { dataKey: props.dataKey, data: props.data }),
  );
  const updateId = useUpdateId();
  if (layout !== 'horizontal' && layout !== 'vertical') {
    // Cannot render Line in an unsupported layout
    return null;
  }

  const {
    ref,
    activeDot = defaultLineProps.activeDot,
    animateNewValues = defaultLineProps.animateNewValues,
    animationBegin = defaultLineProps.animationBegin,
    animationDuration = defaultLineProps.animationDuration,
    animationEasing = defaultLineProps.animationEasing,
    connectNulls = defaultLineProps.connectNulls,
    dot = defaultLineProps.dot,
    hide = defaultLineProps.hide,
    isAnimationActive = defaultLineProps.isAnimationActive,
    label = defaultLineProps.label,
    legendType = defaultLineProps.legendType,
    xAxisId = defaultLineProps.xAxisId,
    yAxisId = defaultLineProps.yAxisId,
    ...everythingElse
  } = props;

  return (
    <LineWithState
      {...everythingElse}
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
      animationId={updateId}
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
  return displayedData.map((entry, index): LinePointItem => {
    // @ts-expect-error getValueByDataKey does not validate the output type
    const value: number = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
        y: isNullish(value) ? null : yAxis.scale(value),
        value,
        payload: entry,
      };
    }

    return {
      x: isNullish(value) ? null : xAxis.scale(value),
      y: getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index }),
      value,
      payload: entry,
    };
  });
}

export class Line extends PureComponent<Props> {
  static displayName = 'Line';

  static defaultProps = defaultLineProps;

  render() {
    // Report all props to Redux store first, before calling any hooks, to avoid circular dependencies.
    return (
      <CartesianGraphicalItemContext
        type="line"
        data={this.props.data}
        xAxisId={this.props.xAxisId}
        yAxisId={this.props.yAxisId}
        zAxisId={0}
        dataKey={this.props.dataKey}
        // line doesn't stack
        stackId={undefined}
        hide={this.props.hide}
        barSize={undefined}
      >
        <SetLineLegend {...this.props} />
        <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        <LineImpl {...this.props} />
      </CartesianGraphicalItemContext>
    );
  }
}
