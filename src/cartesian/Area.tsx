import * as React from 'react';
import {
  MutableRefObject,
  PureComponent,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { BaseLineType, Curve, CurveType, Props as CurveProps } from '../shape/Curve';
import { Layer } from '../container/Layer';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelListFromLabelProp,
} from '../component/LabelList';
import { Dots, DotsDotProps } from '../component/Dots';
import { interpolate, isNan, isNullish, isNumber, noop } from '../util/DataUtils';
import {
  getCateCoordinateOfLine,
  getNormalizedStackId,
  getTooltipNameProp,
  getValueByDataKey,
  StackId,
} from '../util/ChartUtils';
import {
  ActiveDotType,
  AnimationDuration,
  AnimationTiming,
  CartesianLayout,
  DataConsumer,
  DataKey,
  DataProvider,
  DotType,
  LegendType,
  NullableCoordinate,
  TickItem,
  TooltipType,
  TrapezoidViewBox,
} from '../util/types';
import { isClipDot } from '../util/ReactUtils';
import type { LegendPayload } from '../component/DefaultLegendContent';
import { ActivePoints } from '../component/ActivePoints';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { ChartData } from '../state/chartDataSlice';
import { AreaPointItem, ComputedArea, selectArea } from '../state/selectors/areaSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { useCartesianChartLayout, useChartLayout } from '../context/chartLayoutContext';
import { useChartName } from '../state/selectors/selectors';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { useAppSelector } from '../state/hooks';
import { useAnimationId } from '../util/useAnimationId';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { isWellBehavedNumber } from '../util/isWellBehavedNumber';
import { usePlotArea } from '../hooks';
import { WithIdRequired, WithoutId } from '../util/useUniqueId';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { AreaSettings } from '../state/types/AreaSettings';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { getRadiusAndStrokeWidthFromDot } from '../util/getRadiusAndStrokeWidthFromDot';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { propsAreEqual } from '../util/propsAreEqual';
import { AxisId } from '../state/cartesianAxisSlice';
import { StackDataPoint } from '../util/stacks/stackTypes';

/**
 * @inline
 */
export type BaseValue = number | 'dataMin' | 'dataMax';

/**
 * Our base value array has payload in it, and we expose it externally too.
 */
type BaseValueCoordinate<DataPointType = any> = NullableCoordinate & { payload: DataPointType | undefined };

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface InternalAreaProps extends ZIndexable {
  activeDot: ActiveDotType;
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;
  baseLine: BaseLineType | undefined;

  baseValue?: BaseValue;
  className?: string;
  connectNulls: boolean;
  data?: ChartData;
  dataKey: DataKey<any>;
  dot: DotType;
  height: number;
  hide: boolean;

  /**
   * ID is mandatory internally, but optional externally.
   */
  id: string;
  isAnimationActive: boolean | 'auto';
  isRange?: boolean;
  label?: ImplicitLabelListType;
  layout: CartesianLayout;
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
  width: number;
  xAxisId: string | number;
  yAxisId: string | number;
}

/**
 * External props, intended for end users to fill in
 */
interface AreaProps<DataPointType = any, DataValueType = any>
  extends DataProvider<DataPointType>, Required<DataConsumer<DataPointType, DataValueType>>, ZIndexable {
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
   * @example <Area dataKey="value" activeDot={false} />
   * @example <Area dataKey="value" activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} />
   * @example <Area dataKey="value" activeDot={CustomizedActiveDot} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/SimpleLineChart/ A line chart with customized active dot}
   */
  activeDot?: ActiveDotType;
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
   * @defaultValue 'ease'
   */
  animationEasing?: AnimationTiming;
  /**
   * Baseline of the area:
   * - number: uses the corresponding axis value as a flat baseline;
   * - an array of coordinates: describes a custom baseline path.
   */
  baseLine?: BaseLineType;
  baseValue?: BaseValue;
  className?: string;

  /**
   * Whether to connect the area across null points.
   *
   * @defaultValue false
   * @see {@link https://recharts.github.io/en-US/examples/AreaChartConnectNulls/ AreaChart with connectNull true and false}
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
   * @defaultValue false
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
   * If set false, animation of area will be disabled.
   * If set "auto", will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue 'auto'
   */
  isAnimationActive?: boolean | 'auto';
  isRange?: boolean;
  /**
   * Renders one label for each data point. Options:
   *
   * - `true`: renders default labels
   * - `false`: no labels are rendered
   * - `object`: the props of LabelList component
   * - `ReactElement`: a custom label element
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   */
  label?: ImplicitLabelListType;
  /**
   * The type of icon in legend.
   * If set to 'none', no legend item will be rendered.
   * @defaultValue 'line'
   */
  legendType?: LegendType;

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
  /**
   * When two Areas have the same axisId and same stackId, then the two Areas are stacked in the chart.
   */
  stackId?: StackId;
  /**
   * The stroke color. If "none", no line will be drawn.
   * @defaultValue '#3182bd'
   */
  stroke?: string;
  /**
   * The width of the stroke
   * @defaultValue 1
   */
  strokeWidth?: string | number;
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
  unit?: string | number;
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
   * @defaultValue 100
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}

/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type AreaSvgProps = Omit<
  CurveProps,
  'points' | 'ref' | 'layout' | 'path' | 'pathRef' | 'baseLine' | 'dangerouslySetInnerHTML'
>;

type InternalProps = AreaSvgProps & InternalAreaProps;

export type Props<DataPointType, ValueAxisType> = AreaSvgProps & AreaProps<DataPointType, ValueAxisType>;

type PropsWithDefaults<DataPointType, ValueAxisType> = WithIdRequired<
  RequiresDefaultProps<Props<DataPointType, ValueAxisType>, typeof defaultAreaProps>
>;

function getLegendItemColor(stroke: string | undefined, fill: string | undefined): string | undefined {
  return stroke && stroke !== 'none' ? stroke : fill;
}

const computeLegendPayloadFromAreaData = <DataPointType, ValueAxisType>(
  props: Props<DataPointType, ValueAxisType>,
): ReadonlyArray<LegendPayload> => {
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

const SetAreaTooltipEntrySettings = React.memo(
  <DataPointType, ValueAxisType>({
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
    WithIdRequired<Props<DataPointType, ValueAxisType>>,
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
        color: getLegendItemColor(stroke, fill),
        unit,
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
) as <DataPointType, ValueAxisType>(
  props: Pick<
    WithIdRequired<Props<DataPointType, ValueAxisType>>,
    'dataKey' | 'data' | 'stroke' | 'strokeWidth' | 'fill' | 'name' | 'hide' | 'unit' | 'tooltipType' | 'id'
  >,
) => ReactElement;

function AreaDotsWrapper({
  clipPathId,
  points,
  props,
}: {
  clipPathId: string;
  points: ReadonlyArray<AreaPointItem>;
  props: WithoutId<InternalProps>;
}) {
  const { needClip, dot, dataKey } = props;
  const areaProps: DotsDotProps = svgPropertiesNoEvents(props);

  return (
    <Dots
      points={points}
      dot={dot}
      className="recharts-area-dots"
      dotClassName="recharts-area-dot"
      dataKey={dataKey}
      baseProps={areaProps}
      needClip={needClip}
      clipPathId={clipPathId}
    />
  );
}

function AreaLabelListProvider({
  showLabels,
  children,
  points,
}: {
  showLabels: boolean;
  children: ReactNode;
  points: ReadonlyArray<AreaPointItem>;
}) {
  const labelListEntries: ReadonlyArray<CartesianLabelListEntry> = points.map((point): CartesianLabelListEntry => {
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
      parentViewBox: undefined,
      viewBox,
      fill: undefined,
    };
  });

  return (
    <CartesianLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      {children}
    </CartesianLabelListContextProvider>
  );
}

function StaticArea({
  points,
  baseLine,
  needClip,
  clipPathId,
  props,
}: {
  points: ReadonlyArray<AreaPointItem>;
  baseLine: BaseLineType | undefined;
  needClip: boolean;
  clipPathId: string;
  props: InternalProps;
}) {
  const { layout, type, stroke, connectNulls, isRange } = props;

  const { id, ...propsWithoutId } = props;
  const allOtherProps = svgPropertiesNoEvents(propsWithoutId);
  const propsWithEvents = svgPropertiesAndEvents(propsWithoutId);

  return (
    <>
      {points?.length > 1 && (
        <Layer clipPath={needClip ? `url(#clipPath-${clipPathId})` : undefined}>
          <Curve
            {...propsWithEvents}
            id={id}
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
              {...allOtherProps}
              className="recharts-area-curve"
              layout={layout}
              type={type}
              connectNulls={connectNulls}
              fill="none"
              points={points}
            />
          )}
          {stroke !== 'none' && isRange && Array.isArray(baseLine) && (
            <Curve
              {...allOtherProps}
              className="recharts-area-curve"
              layout={layout}
              type={type}
              connectNulls={connectNulls}
              fill="none"
              points={baseLine}
            />
          )}
        </Layer>
      )}
      <AreaDotsWrapper points={points} props={propsWithoutId} clipPathId={clipPathId} />
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
  baseLine: BaseLineType | undefined;
  strokeWidth: string | number | undefined;
}) {
  const startY = points[0]?.y;
  const endY = points[points.length - 1]?.y;
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
  baseLine: BaseLineType | undefined;
  strokeWidth: string | number | undefined;
}) {
  const startX = points[0]?.x;
  const endX = points[points.length - 1]?.x;
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
  layout: CartesianLayout;
  points: ReadonlyArray<AreaPointItem>;
  baseLine: BaseLineType | undefined;
  strokeWidth: string | number | undefined;
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
  previousBaselineRef: MutableRefObject<BaseLineType | undefined>;
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
  const animationInput = useMemo(() => ({ points, baseLine }), [points, baseLine]);
  const animationId = useAnimationId(animationInput, 'recharts-area-');
  const layout = useCartesianChartLayout();

  const [isAnimating, setIsAnimating] = useState(false);
  const showLabels = !isAnimating;

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

  if (layout == null) {
    return null;
  }

  const prevPoints = previousPointsRef.current;
  const prevBaseLine = previousBaselineRef.current;
  return (
    <AreaLabelListProvider showLabels={showLabels} points={points}>
      {props.children}
      <JavascriptAnimate
        animationId={animationId}
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        onAnimationEnd={handleAnimationEnd}
        onAnimationStart={handleAnimationStart}
        key={animationId}
      >
        {(t: number) => {
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
            let stepBaseLine: BaseLineType;

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
              {isAnimationActive && (
                <defs>
                  <clipPath id={`animationClipPath-${clipPathId}`}>
                    <ClipRect
                      alpha={t}
                      points={points}
                      baseLine={baseLine}
                      layout={layout}
                      strokeWidth={props.strokeWidth}
                    />
                  </clipPath>
                </defs>
              )}
              <Layer clipPath={`url(#animationClipPath-${clipPathId})`}>
                <StaticArea
                  points={points}
                  baseLine={baseLine}
                  needClip={needClip}
                  clipPathId={clipPathId}
                  props={props}
                />
              </Layer>
            </Layer>
          );
        }}
      </JavascriptAnimate>
      <LabelListFromLabelProp label={props.label} />
    </AreaLabelListProvider>
  );
}

/*
 * This components decides if the area should be animated or not.
 * It also holds the state of the animation.
 */
function RenderArea({ needClip, clipPathId, props }: { needClip: boolean; clipPathId: string; props: InternalProps }) {
  /*
   * These two must be refs, not state!
   * Because we want to store the most recent shape of the animation in case we have to interrupt the animation;
   * that happens when user initiates another animation before the current one finishes.
   *
   * If this was a useState, then every step in the animation would trigger a re-render.
   * So, useRef it is.
   */
  const previousPointsRef = useRef<ReadonlyArray<AreaPointItem> | null>(null);
  const previousBaselineRef = useRef<BaseLineType | undefined>();

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

class AreaWithState extends PureComponent<InternalProps> {
  render() {
    const { hide, dot, points, className, top, left, needClip, xAxisId, yAxisId, width, height, id, baseLine, zIndex } =
      this.props;

    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-area', className);
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
          <RenderArea needClip={needClip} clipPathId={clipPathId} props={this.props} />
        </Layer>
        <ActivePoints
          points={points}
          mainColor={getLegendItemColor(this.props.stroke, this.props.fill)}
          itemDataKey={this.props.dataKey}
          activeDot={this.props.activeDot}
          clipPath={activePointsClipPath}
        />
        {this.props.isRange && Array.isArray(baseLine) && (
          <ActivePoints
            points={baseLine}
            mainColor={getLegendItemColor(this.props.stroke, this.props.fill)}
            itemDataKey={this.props.dataKey}
            activeDot={this.props.activeDot}
            clipPath={activePointsClipPath}
          />
        )}
      </ZIndexLayer>
    );
  }
}

export const defaultAreaProps = {
  activeDot: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  connectNulls: false,
  dot: false,
  fill: '#3182bd',
  fillOpacity: 0.6,
  hide: false,
  isAnimationActive: 'auto',
  legendType: 'line',
  stroke: '#3182bd',
  strokeWidth: 1,
  type: 'linear',
  label: false,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.area,
} as const satisfies Partial<Props<never, never>>;

function AreaImpl<DataPointType, ValueAxisType>(props: PropsWithDefaults<DataPointType, ValueAxisType>) {
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
  } = props;
  const layout = useChartLayout();
  const chartName = useChartName();
  const { needClip } = useNeedsClip(xAxisId, yAxisId);
  const isPanorama = useIsPanorama();

  const { points, isRange, baseLine } = useAppSelector(state => selectArea(state, props.id, isPanorama)) ?? {};
  const plotArea = usePlotArea();

  if ((layout !== 'horizontal' && layout !== 'vertical') || plotArea == null) {
    // Can't render Area in an unsupported layout
    return null;
  }

  if (chartName !== 'AreaChart' && chartName !== 'ComposedChart') {
    // There is nothing stopping us from rendering Area in other charts, except for historical reasons. Do we want to allow that?
    return null;
  }

  const { height, width, x: left, y: top } = plotArea;

  if (!points || !points.length) {
    return null;
  }

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
  const baseValue: BaseValue | undefined = itemBaseValue ?? chartBaseValue;

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
  areaSettings: { baseValue: itemBaseValue, dataKey },
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
  stackedData: ReadonlyArray<StackDataPoint> | undefined;
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
    let valueAsArray: ReadonlyArray<unknown> | undefined;

    if (hasStack) {
      valueAsArray = stackedData[dataStartIndex + index];
    } else {
      const rawValue = getValueByDataKey(entry, dataKey);

      if (!Array.isArray(rawValue)) {
        valueAsArray = [baseValue, rawValue];
      } else {
        valueAsArray = rawValue;
        isRange = true;
      }
    }

    const value1 = valueAsArray?.[1] ?? null;

    const isBreakPoint = value1 == null || (hasStack && getValueByDataKey(entry, dataKey) == null);

    if (isHorizontalLayout) {
      return {
        x: getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize, entry, index }),
        y: isBreakPoint ? null : (yAxis.scale.map(value1) ?? null),
        value: valueAsArray,
        payload: entry,
      };
    }

    return {
      x: isBreakPoint ? null : (xAxis.scale.map(value1) ?? null),
      y: getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize, entry, index }),
      value: valueAsArray,
      payload: entry,
    };
  });

  let baseLine: number | NullableCoordinate[] | undefined;
  if (hasStack || isRange) {
    baseLine = points.map((entry: AreaPointItem): BaseValueCoordinate => {
      const x = Array.isArray(entry.value) ? entry.value[0] : null;
      if (isHorizontalLayout) {
        return {
          x: entry.x,
          y: x != null && entry.y != null ? (yAxis.scale.map(x) ?? null) : null,
          payload: entry.payload,
        };
      }
      return {
        x: x != null ? (xAxis.scale.map(x) ?? null) : null,
        y: entry.y,
        payload: entry.payload,
      };
    });
  } else {
    baseLine = isHorizontalLayout ? yAxis.scale.map(baseValue) : xAxis.scale.map(baseValue);
  }

  return {
    points,
    baseLine: baseLine ?? 0,
    isRange,
  };
}

function AreaFn<DataPointType, ValueAxisType>(outsideProps: Props<DataPointType, ValueAxisType>) {
  const props = resolveDefaultProps(outsideProps, defaultAreaProps);
  const isPanorama = useIsPanorama();
  // Report all props to Redux store first, before calling hooks, to avoid circular dependencies.
  return (
    <RegisterGraphicalItemId id={props.id} type="area">
      {id => (
        <>
          <SetLegendPayload legendPayload={computeLegendPayloadFromAreaData(props)} />
          <SetAreaTooltipEntrySettings
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
            type="area"
            id={id}
            data={props.data}
            dataKey={props.dataKey}
            xAxisId={props.xAxisId}
            yAxisId={props.yAxisId}
            zAxisId={0}
            stackId={getNormalizedStackId(props.stackId)}
            hide={props.hide}
            barSize={undefined}
            baseValue={props.baseValue}
            isPanorama={isPanorama}
            connectNulls={props.connectNulls}
          />
          <AreaImpl {...props} id={id} />
        </>
      )}
    </RegisterGraphicalItemId>
  );
}

/**
 * @provides LabelListContext
 * @consumes CartesianChartContext
 */
export const Area = React.memo(AreaFn, propsAreEqual) as <DataPointType = any, ValueAxisType = any>(
  props: Props<DataPointType, ValueAxisType>,
) => ReactElement;
// @ts-expect-error we need to set the displayName for debugging purposes
Area.displayName = 'Area';
