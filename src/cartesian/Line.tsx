import * as React from 'react';
import { Component, MutableRefObject, ReactElement, ReactNode, Ref, useCallback, useMemo, useRef } from 'react';

import { clsx } from 'clsx';
import { CurveType, Props as CurveProps } from '../shape/Curve';
import { Layer } from '../container/Layer';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelListFromLabelProp,
} from '../component/LabelList';
import { Dots } from '../component/Dots';
import { ErrorBarDataItem, ErrorBarDataPointFormatter } from './ErrorBar';
import { interpolate, isNullish, noop } from '../util/DataUtils';
import { useAnimatedLineLength } from './useAnimatedLineLength';
import { isClipDot } from '../util/ReactUtils';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveDotType,
  ActiveShape,
  AnimationDuration,
  EasingInput,
  CartesianLayout,
  DataConsumer,
  DataKey,
  DataProvider,
  DotType,
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
import { AnimationMatchByProp } from '../animation/matchBy';
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
  shape?: ActiveShape<CurveProps, SVGPathElement>;

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
   * - `'index'` (default): match by array position with proportional stretching
   * - `matchByDataKey('someKey')`: match by a data key from the payload
   * - Custom function `(item, index) => key`: match by the returned key
   *
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

/**
 * Generates a simple stroke-dasharray string for animating a line draw effect.
 *
 * Uses `totalLength` as the gap (instead of `totalLength - length`) to prevent a floating-point
 * precision artifact: when fractional dash and gap values are serialized to a string attribute
 * and re-parsed by the SVG renderer, their sum can differ from the actual path length by a ULP,
 * causing the dasharray pattern to repeat and render a phantom dot at the path endpoint
 * with round or square strokeLinecap.
 *
 * @param totalLength The total length of the SVG path
 * @param length The currently visible portion of the path
 * @returns A stroke-dasharray string like "50px 200px"
 */
const generateSimpleStrokeDasharray = (totalLength: number, length: number): string => {
  return `${length}px ${totalLength}px`;
};

/**
 * Repeats a dash pattern array a given number of times.
 *
 * If the input array has an odd length, a trailing `0` is appended to make it even
 * before repeating, because SVG stroke-dasharray patterns must have an even number
 * of values to cycle correctly between dash and gap segments.
 *
 * @param lines Array of dash/gap lengths to repeat
 * @param count Number of times to repeat the pattern
 * @returns A new array with the pattern repeated `count` times
 */
function repeat(lines: number[], count: number): number[] {
  const linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
  const result: number[] = [];
  for (let i = 0; i < count; ++i) {
    result.push(...linesUnit);
  }
  return result;
}

/**
 * Computes a stroke-dasharray string for animating a custom-dashed line draw effect.
 *
 * Given a user-specified dash pattern (e.g. `"7,3"`), this function builds a dasharray
 * that reveals exactly `length` pixels of that pattern, followed by a gap of `totalLength`
 * to hide the remainder of the path.
 *
 * Like {@link generateSimpleStrokeDasharray}, the trailing gap uses `totalLength` rather than
 * `totalLength - length` to avoid floating-point precision artifacts with round/square strokeLinecap.
 *
 * @param length The currently visible portion of the path
 * @param totalLength The total length of the SVG path
 * @param lines The user-specified dash pattern as an array of numbers (e.g. [7, 3])
 * @returns A stroke-dasharray string incorporating the custom dash pattern
 */
const getStrokeDasharray = (length: number, totalLength: number, lines: number[]): string => {
  const lineLength = lines.reduce((pre, next) => pre + next, 0);

  // if lineLength is 0 return the default when no strokeDasharray is provided
  if (!lineLength) {
    return generateSimpleStrokeDasharray(totalLength, length);
  }

  const count = Math.floor(length / lineLength);
  const remainLength = length % lineLength;
  let remainLines: number[] = [];
  for (let i = 0, sum = 0; i < lines.length; sum += lines[i] ?? 0, ++i) {
    const lineValue = lines[i];
    if (lineValue != null && sum + lineValue > remainLength) {
      remainLines = [...lines.slice(0, i), remainLength - sum];
      break;
    }
  }

  const emptyLines = remainLines.length % 2 === 0 ? [0, totalLength] : [totalLength];

  return [...repeat(lines, count), ...remainLines, ...emptyLines].map(line => `${line}px`).join(', ');
};

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
  strokeDasharray,
  props,
}: {
  clipPathId: string;
  pathRef: Ref<SVGPathElement>;
  points: ReadonlyArray<LinePointItem>;
  props: InternalProps;
  strokeDasharray?: string;
}) {
  const { type, layout, connectNulls, needClip, shape, ...others } = props;
  const curveProps: CurveProps = {
    ...svgPropertiesAndEvents(others),
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
      {points?.length > 1 && <Shape shapeType="curve" option={shape} {...curveProps} pathRef={pathRef} />}
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

function defaultLineAnimateItems(
  animateNewValues: boolean,
  width: number,
  height: number,
): AnimationInterpolateFn<LinePointItem> {
  return (prevItems, nextItems, t) => {
    if (t === 1) return nextItems;
    if (prevItems == null) {
      // First render: return items as-is, stroke-dasharray handles the reveal
      return nextItems;
    }
    return nextItems.map((entry, index) => {
      const prev = prevItems[index];
      if (prev) {
        return { ...entry, x: interpolate(prev.x, entry.x, t), y: interpolate(prev.y, entry.y, t) };
      }
      if (animateNewValues) {
        return { ...entry, x: interpolate(width * 2, entry.x, t), y: interpolate(height / 2, entry.y, t) };
      }
      return entry;
    });
  };
}

function toStringIfDefined(val: unknown | null | undefined): string | undefined {
  if (val == null) {
    return undefined;
  }
  return String(val);
}

function computeStrokeDasharray(
  isAnimationActive: boolean | 'auto',
  strokeDasharray: string | number | undefined,
  totalLength: number,
  curLength: number,
): string | undefined {
  if (isAnimationActive) {
    if (strokeDasharray) {
      const lines = `${strokeDasharray}`.split(/[,\s]+/gim).map(num => parseFloat(num));
      return getStrokeDasharray(curLength, totalLength, lines);
    }
    return generateSimpleStrokeDasharray(totalLength, curLength);
  }
  return toStringIfDefined(strokeDasharray);
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
  const {
    points,
    strokeDasharray,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    width,
    height,
  } = props;
  const totalLength = getTotalLength(pathRef.current);
  const animationInterpolateFn =
    props.animationInterpolateFn ?? defaultLineAnimateItems(props.animateNewValues, width, height);

  const { isAnimating, handleAnimationStart, handleAnimationEnd } = useAnimationCallbacks(
    props.onAnimationStart,
    props.onAnimationEnd,
  );
  const showLabels = !isAnimating;

  // Guard for totalLength: don't update previousPointsRef before SVG path is measured
  const shouldUpdatePreviousRef = useCallback((t: number) => t > 0 && totalLength > 0, [totalLength]);
  const getVisibleLength = useAnimatedLineLength(points);

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
        animationMatchBy={props.animationMatchBy}
        shouldUpdatePreviousRef={shouldUpdatePreviousRef}
      >
        {(stepData, t) => {
          const visibleLength = getVisibleLength(t, totalLength);
          let currentStrokeDasharray: undefined | string;
          if (visibleLength === null) {
            currentStrokeDasharray = toStringIfDefined(strokeDasharray);
          } else {
            currentStrokeDasharray = computeStrokeDasharray(
              isAnimationActive,
              strokeDasharray,
              totalLength,
              visibleLength,
            );
          }
          return (
            <StaticCurve
              props={props}
              points={stepData}
              clipPathId={clipPathId}
              pathRef={pathRef}
              strokeDasharray={currentStrokeDasharray}
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
  stroke: '#3182bd',
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.line,
  type: 'linear',
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
