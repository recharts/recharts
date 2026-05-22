import * as React from 'react';
import { Component, MutableRefObject, ReactElement, ReactNode, Ref, useCallback, useMemo, useRef } from 'react';

import { clsx } from 'clsx';
import { CurveType, Props as CurveProps } from '../shape/Curve';
import { Layer } from '../container/Layer';
import { LineDrawShape, LineDrawShapeProps } from './LineDrawShape';
import { useAnimatedLineLength } from './useAnimatedLineLength';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelListFromLabelProp,
} from '../component/LabelList';
import { Dots } from '../component/Dots';
import { ErrorBarDataItem, ErrorBarDataPointFormatter } from './ErrorBar';
import { interpolate, isNullish, noop } from '../util/DataUtils';
import { isClipDot } from '../util/ReactUtils';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveDotType,
  ActiveShape,
  AnimationDuration,
  CartesianLayout,
  DataConsumer,
  DataKey,
  DataProvider,
  DotType,
  EasingInput,
  LegendType,
  TickItem,
  TooltipType,
  TrapezoidViewBox,
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
import { AnimatedItems, AnimationInterpolateFn, useAnimationCallbacks } from '../animation/AnimatedItems';
import { AnimationItem, AnimationMatchByProp, matchByIndex } from '../animation/matchBy';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { usePlotArea } from '../hooks';
import { WithIdRequired } from '../util/useUniqueId';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { getRadiusAndStrokeWidthFromDot } from '../util/getRadiusAndStrokeWidthFromDot';
import { Shape } from '../util/ActiveShapeUtils';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { propsAreEqual } from '../util/propsAreEqual';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { ChartData } from '../state/chartDataSlice';

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
interface InternalLineProps extends ZIndexable {
  activeDot: ActiveDotType;
  animateNewValues: boolean;
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: EasingInput;
  animationInterpolateFn?: AnimationInterpolateFn<LinePointItem>;
  animationMatchBy?: AnimationMatchByProp<LinePointItem>;

  className?: string;
  connectNulls: boolean;
  data?: any;
  dataKey?: DataKey<any>;
  dot: DotType;
  height: number;
  hide: boolean;
  id: GraphicalItemId;
  isAnimationActive: boolean | 'auto';
  label: ImplicitLabelListType;
  layout: 'horizontal' | 'vertical';
  left: number;
  legendType: LegendType;
  shape: ActiveShape<CurveProps, SVGPathElement>;

  name?: string | number;
  needClip?: boolean;

  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;

  points: ReadonlyArray<LinePointItem>;
  tooltipType?: TooltipType;
  top: number;
  type?: CurveType;
  unit?: string | number | null;
  width: number;
  xAxisId: AxisId;
  yAxisId: AxisId;
}

/**
 * External props, intended for end users to fill in
 */
interface LineProps<DataPointType = any, DataValueType = any>
  extends DataProvider<DataPointType>, DataConsumer<DataPointType, DataValueType>, ZIndexable {
  /**
   * The active dot is rendered on the closest data point when user interacts with the chart. Options:
   *
   * - `false`: dots do not change on user activity; both active and inactive dots follow the `dot` prop (see below)
   * - `true`: renders the active dot with default settings
   * - `object`: the props of the active dot. This will be merged with the internal calculated props of the active dot
   * - `ReactElement`: the custom active dot element
   * - `function`: a render function of the custom active dot
   *
   * @defaultValue true
   * @example <Line dataKey="value" activeDot={false} />
   * @example <Line dataKey="value" activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} />
   * @example <Line dataKey="value" activeDot={CustomizedActiveDot} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/SimpleLineChart/ A line chart with customized active dot}
   */
  activeDot?: ActiveDotType;
  /**
   * @defaultValue true
   */
  animateNewValues?: boolean;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: EasingInput;
  /**
   * Custom animation function for interpolating data items.
   * When provided, this replaces the default animation interpolation.
   *
   * @param prevItems The items from the previous animation frame, or null on first render
   * @param nextItems The target items to animate towards
   * @param t A normalized time value (0 = start, 1 = end)
   * @returns The interpolated items at time t
   */
  animationInterpolateFn?: AnimationInterpolateFn<LinePointItem>;
  /**
   * Strategy for matching previous items to next items during animation.
   * Determines how Recharts pairs old data points with new data points
   * to create smooth transitions.
   *
   * - `matchByIndex` (default): match by array position with proportional stretching
   * - `matchAppend`: match sequentially by index and treat newly appended items as new
   * - `matchByDataKey('someKey')`: match by a data key from the payload
   * - Custom function `(item, index) => key`: match by the returned key
   *
   * @defaultValue index
   * @see matchByIndex
   * @see matchByDataKey
   * @see matchAppend
   */
  animationMatchBy?: AnimationMatchByProp<LinePointItem>;
  className?: string;
  /**
   * Whether to connect the line across null points.
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/LineChartConnectNulls/ LineChart with connectNull true and false}
   */
  connectNulls?: boolean;
  /**
   * Renders a circle element at each data point. Options:
   *
   * - `false`: no dots are drawn;
   * - `true`: renders the dots with default settings;
   * - `object`: the props of the dot. This will be merged with the internal calculated props of each dot;
   * - `ReactElement`: the custom dot element;
   * - `function`: a render function of the custom dot.
   *
   * @defaultValue true
   *
   * @example <Line dataKey="value" dot={false} />
   * @example <Line dataKey="value" dot={{ stroke: 'red', strokeWidth: 2 }} />
   * @example <Line dataKey="value" dot={CustomizedDot} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/CustomizedDotLineChart/ A line chart with customized dot}
   */
  dot?: DotType;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your XAxis/YAxis.
   *
   * @defaultValue false
   */
  hide?: boolean;

  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
  /**
   * If set false, animation of line will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | 'auto';

  /**
   * Renders one label for each data point. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   * @example <Line dataKey="value" label />
   * @example <Line dataKey="value" label={{ fill: 'red', fontSize: 20 }} />
   * @example <Line dataKey="value" label={CustomizedLabel} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/CustomizedLabelLineChart/ A line chart with customized label}
   */
  label?: ImplicitLabelListType;
  /**
   * The type of icon in legend.
   * If set to 'none', no legend item will be rendered.
   * @defaultValue line
   */
  legendType?: LegendType;
  /**
   * If set a ReactElement, the shape of line can be customized.
   * If set a function, the function will be called to render customized shape.
   *
   * During animations the shape receives additional props: `t`, `isAnimating`, and `isEntrance`.
   * When a custom shape is provided, the built-in stroke-dasharray entrance animation is skipped.
   *
   * @example <Line dataKey="value" shape={CustomizedShapeComponent} />
   * @example <Line dataKey="value" shape={renderShapeFunction} />
   */
  shape?: ActiveShape<CurveProps, SVGPathElement>;

  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent this graphical item.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string | number;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  tooltipType?: TooltipType;
  /**
   * The interpolation type of curve. Allows custom interpolation function.
   *
   * @defaultValue linear
   * @link https://d3js.org/d3-shape/curve
   * @see {@link https://recharts.github.io/en-US/examples/CardinalAreaChart/ An AreaChart which has two area with different interpolation.}
   */
  type?: CurveType;
  /**
   * The unit of data. This option will be used in tooltip.
   */
  unit?: string | number | null;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 400
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * The stroke color. If `"none"`, no line will be drawn.
   *
   * @defaultValue #3182bd
   */
  stroke?: string;
  /**
   * The width of the stroke
   *
   * @defaultValue 1
   */
  strokeWidth?: string | number;
  /**
   * The pattern of dashes and gaps used to paint the line
   *
   * @example <Line strokeDasharray="4" />
   * @example <Line strokeDasharray="4 1" />
   * @example <Line strokeDasharray="4 1 2" />
   */
  strokeDasharray?: string | number;
}

export const defaultLineProps = {
  activeDot: true,
  animateNewValues: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  connectNulls: false,
  dot: true,
  fill: '#fff',
  hide: false,
  isAnimationActive: 'auto',
  label: false,
  legendType: 'line',
  shape: LineDrawShape,
  stroke: '#3182bd',
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.line,
  type: 'linear',
} as const satisfies Partial<Props>;

/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type LineSvgProps = Omit<CurveProps, 'points' | 'pathRef' | 'ref' | 'layout' | 'baseLine'>;

type InternalProps = LineSvgProps & InternalLineProps;

export type Props<DataPointType = any, ValueAxisType = any> = LineSvgProps & LineProps<DataPointType, ValueAxisType>;

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

const SetLineTooltipEntrySettings = React.memo(
  ({
    dataKey,
    data,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    unit,
    tooltipType,
    id,
  }: Pick<
    InternalProps,
    'dataKey' | 'data' | 'stroke' | 'strokeWidth' | 'fill' | 'name' | 'hide' | 'unit' | 'tooltipType' | 'id'
  >) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: data,
      getPosition: noop,
      settings: {
        stroke,
        strokeWidth,
        fill,
        dataKey,
        nameKey: undefined,
        name: getTooltipNameProp(name, dataKey),
        hide,
        type: tooltipType,
        color: stroke,
        unit,
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

function LineDotsWrapper({
  clipPathId,
  points,
  props,
}: {
  points: ReadonlyArray<LinePointItem>;
  clipPathId: string;
  props: InternalProps;
}) {
  const { dot, dataKey, needClip } = props;

  /*
   * Exclude ID from the props passed to the Dots component
   * because then the ID would be applied to multiple dots, and it would no longer be unique.
   */
  const { id, ...propsWithoutId } = props;

  const lineProps = svgPropertiesNoEvents(propsWithoutId);

  return (
    <Dots
      points={points}
      dot={dot}
      className="recharts-line-dots"
      dotClassName="recharts-line-dot"
      dataKey={dataKey}
      baseProps={lineProps}
      needClip={needClip}
      clipPathId={clipPathId}
    />
  );
}

function LineLabelListProvider({
  showLabels,
  children,
  points,
}: {
  showLabels: boolean;
  children: ReactNode;
  points: ReadonlyArray<LinePointItem>;
}) {
  const labelListEntries: ReadonlyArray<CartesianLabelListEntry> = useMemo(() => {
    return points?.map((point): CartesianLabelListEntry => {
      const viewBox: TrapezoidViewBox = {
        x: point.x ?? 0,
        y: point.y ?? 0,
        width: 0,
        lowerWidth: 0,
        upperWidth: 0,
        height: 0,
      };
      return {
        ...viewBox,
        value: point.value,
        payload: point.payload,
        viewBox,
        /*
         * Line is not passing parentViewBox to the LabelList so the labels can escape - looks like a bug, should we pass parentViewBox?
         * Or should this just be the root chart viewBox?
         */
        parentViewBox: undefined,
        fill: undefined,
      };
    });
  }, [points]);
  return (
    <CartesianLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      {children}
    </CartesianLabelListContextProvider>
  );
}

function StaticCurve({
  clipPathId,
  pathRef,
  points,
  props,
  t,
  isAnimating,
  isEntrance,
  visibleLength,
}: {
  clipPathId: string;
  pathRef: Ref<SVGPathElement>;
  points: ReadonlyArray<LinePointItem>;
  props: InternalProps;
  t?: number;
  isAnimating?: boolean;
  isEntrance?: boolean;
  visibleLength?: number | null;
}) {
  const { type, layout, connectNulls, needClip, shape, strokeDasharray, ...others } = props;
  const curveProps: LineDrawShapeProps = {
    ...svgPropertiesAndEvents(others),
    fill: 'none',
    className: 'recharts-line-curve',
    clipPath: needClip ? `url(#clipPath-${clipPathId})` : undefined,
    points,
    type,
    layout,
    connectNulls,
    strokeDasharray: strokeDasharray ?? props.strokeDasharray,
    pathRef,
    t,
    isAnimating,
    isEntrance,
    visibleLength,
  };

  return (
    <>
      {points?.length > 1 && (
        <Shape<LineDrawShapeProps, SVGPathElement>
          option={shape}
          DefaultShape={defaultLineProps.shape}
          shapeProps={curveProps}
        />
      )}
      <LineDotsWrapper points={points} clipPathId={clipPathId} props={props} />
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

/**
 * Compute the average x-shift between matched pairs (prev → next).
 * This tells us the overall direction and magnitude of the data movement.
 */
function averageShift(items: ReadonlyArray<AnimationItem<LinePointItem>>): number {
  let total = 0;
  let count = 0;
  for (const item of items) {
    if (item.status === 'matched' && item.prev.x != null && item.next.x != null) {
      total += item.next.x - item.prev.x;
      count++;
    }
  }
  return count > 0 ? total / count : 0;
}

function defaultLineAnimateItems(
  animateNewValues: boolean,
  _width: number,
  _height: number,
): AnimationInterpolateFn<LinePointItem> {
  return (items, t) => {
    if (items == null) {
      // First render: return empty, stroke-dasharray handles the reveal
      return [];
    }
    // At t=1 return only the non-removed items
    if (t === 1) return items.flatMap(item => (item.status === 'removed' ? [] : [item.next]));

    const shift = averageShift(items);

    const result: LinePointItem[] = [];

    for (const item of items) {
      if (item.status === 'matched') {
        result.push({
          ...item.next,
          x: interpolate(item.prev.x, item.next.x, t),
          y: interpolate(item.prev.y, item.next.y, t),
        });
      } else if (item.status === 'added') {
        if (animateNewValues && item.next.x != null) {
          // Extrapolate entry position: the point starts where it "would have been"
          const entryX = item.next.x - shift;
          result.push({ ...item.next, x: interpolate(entryX, item.next.x, t), y: item.next.y });
        } else {
          result.push(item.next);
        }
      } else if (item.status === 'removed') {
        if (animateNewValues && item.prev.x != null) {
          const exitX = item.prev.x + shift;
          result.push({ ...item.prev, x: interpolate(item.prev.x, exitX, t), y: item.prev.y });
        }
        // else: removed items are simply dropped
      }
    }

    return result;
  };
}

function CurveWithAnimation({
  clipPathId,
  props,
  pathRef,
  previousPointsRef,
}: {
  clipPathId: string;
  props: InternalProps;
  pathRef: MutableRefObject<SVGPathElement | null>;
  previousPointsRef: MutableRefObject<ReadonlyArray<LinePointItem> | null>;
}) {
  const { points, isAnimationActive, animationBegin, animationDuration, animationEasing, width, height } = props;
  const totalLength = getTotalLength(pathRef.current);
  const animationInterpolateFn =
    props.animationInterpolateFn ?? defaultLineAnimateItems(props.animateNewValues, width, height);

  const { isAnimating, handleAnimationStart, handleAnimationEnd } = useAnimationCallbacks(
    props.onAnimationStart,
    props.onAnimationEnd,
  );
  const showLabels = !isAnimating;
  const getVisibleLength = useAnimatedLineLength(points);

  // Guard for totalLength: don't update previousPointsRef before SVG path is measured
  const shouldUpdatePreviousRef = useCallback((t: number) => t > 0 && totalLength > 0, [totalLength]);
  const matchStrategy = props.animationMatchBy ?? matchByIndex;

  return (
    <LineLabelListProvider points={points} showLabels={showLabels}>
      {props.children}
      <AnimatedItems
        animationInput={points}
        animationIdPrefix="recharts-line-"
        items={points}
        previousItemsRef={previousPointsRef}
        isAnimationActive={isAnimationActive}
        animationBegin={animationBegin}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
        animationInterpolateFn={animationInterpolateFn}
        animationMatchBy={matchStrategy}
        shouldUpdatePreviousRef={shouldUpdatePreviousRef}
      >
        {(stepData, t, isEntrance) => {
          const animationActive = isAnimating || t < 1;
          const visibleLength = animationActive ? getVisibleLength(t, totalLength) : null;
          return (
            <StaticCurve
              props={props}
              points={stepData}
              clipPathId={clipPathId}
              pathRef={pathRef}
              t={t}
              isAnimating={animationActive}
              isEntrance={isEntrance}
              visibleLength={visibleLength}
            />
          );
        }}
      </AnimatedItems>
      <LabelListFromLabelProp label={props.label} />
    </LineLabelListProvider>
  );
}

function RenderCurve({ clipPathId, props }: { clipPathId: string; props: InternalProps }) {
  const previousPointsRef = useRef<ReadonlyArray<LinePointItem> | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  return (
    <CurveWithAnimation props={props} clipPathId={clipPathId} previousPointsRef={previousPointsRef} pathRef={pathRef} />
  );
}

const errorBarDataPointFormatter: ErrorBarDataPointFormatter<LinePointItem> = (
  dataPoint: LinePointItem,
  dataKey,
): ErrorBarDataItem => {
  return {
    x: dataPoint.x ?? undefined,
    y: dataPoint.y ?? undefined,
    value: dataPoint.value,
    // getValueByDataKey does not validate the output type
    errorVal: getValueByDataKey(dataPoint.payload, dataKey),
  };
};

// eslint-disable-next-line react/prefer-stateless-function
class LineWithState extends Component<InternalProps> {
  render() {
    const { hide, dot, points, className, xAxisId, yAxisId, top, left, width, height, id, needClip, zIndex } =
      this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-line', className);
    const clipPathId = id;
    const { r, strokeWidth } = getRadiusAndStrokeWidthFromDot(dot);
    const clipDot = isClipDot(dot);
    const dotSize = r * 2 + strokeWidth;
    const activePointsClipPath = needClip ? `url(#clipPath-${clipDot ? '' : 'dots-'}${clipPathId})` : undefined;

    return (
      <ZIndexLayer zIndex={zIndex}>
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
          <SetErrorBarContext
            xAxisId={xAxisId}
            yAxisId={yAxisId}
            data={points}
            dataPointFormatter={errorBarDataPointFormatter}
            errorBarOffset={0}
          >
            <RenderCurve props={this.props} clipPathId={clipPathId} />
          </SetErrorBarContext>
        </Layer>
        <ActivePoints
          activeDot={this.props.activeDot}
          points={points}
          mainColor={this.props.stroke}
          itemDataKey={this.props.dataKey}
          clipPath={activePointsClipPath}
        />
      </ZIndexLayer>
    );
  }
}

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
  layout: CartesianLayout;
  xAxis: BaseAxisWithScale;
  yAxis: BaseAxisWithScale;
  xAxisTicks: TickItem[];
  yAxisTicks: TickItem[];
  dataKey: Props['dataKey'];
  bandSize: number;
  displayedData: ChartData;
}): ReadonlyArray<LinePointItem> {
  return displayedData
    .map((entry, index): LinePointItem | null => {
      // getValueByDataKey does not validate the output type
      const value: number = getValueByDataKey(entry, dataKey);

      if (layout === 'horizontal') {
        const x = getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index });
        const y = isNullish(value) ? null : yAxis.scale.map(value);
        return {
          x,
          y: y ?? null,
          value,
          payload: entry,
        };
      }

      const x = isNullish(value) ? null : xAxis.scale.map(value);
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

function LineFn(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, defaultLineProps);
  const isPanorama = useIsPanorama();
  return (
    <RegisterGraphicalItemId id={props.id} type="line">
      {id => (
        <>
          <SetLegendPayload legendPayload={computeLegendPayloadFromAreaData(props)} />
          <SetLineTooltipEntrySettings
            dataKey={props.dataKey}
            data={props.data}
            stroke={props.stroke}
            strokeWidth={props.strokeWidth}
            fill={props.fill}
            name={props.name}
            hide={props.hide}
            unit={props.unit}
            tooltipType={props.tooltipType}
            id={id}
          />
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

/**
 * @provides LabelListContext
 * @provides ErrorBarContext
 * @consumes CartesianChartContext
 */
export const Line = React.memo(LineFn, propsAreEqual) as {
  <DataPointType = any, ValueAxisType = any>(props: Props<DataPointType, ValueAxisType>): ReactElement;
  (props: Props<any, any>): ReactElement;
};
// @ts-expect-error we need to set the displayName for debugging purposes
Line.displayName = 'Line';
