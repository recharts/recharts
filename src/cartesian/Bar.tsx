import * as React from 'react';
import {
  ComponentType,
  Key,
  MutableRefObject,
  PureComponent,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { Series } from 'victory-vendor/d3-shape';
import { Props as RectangleProps, RectRadius } from '../shape/Rectangle';
import { Layer } from '../container/Layer';
import { ErrorBarDataItem, ErrorBarDataPointFormatter } from './ErrorBar';
import { Cell } from '../component/Cell';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelListFromLabelProp,
} from '../component/LabelList';
import { interpolate, isNan, mathSign, noop } from '../util/DataUtils';
import { findAllByType } from '../util/ReactUtils';
import {
  BarPositionPosition,
  getBaseValueOfBar,
  getCateCoordinateOfBar,
  getTooltipNameProp,
  getValueByDataKey,
  StackId,
  truncateByDomain,
} from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  CartesianViewBoxRequired,
  ChartOffsetInternal,
  Coordinate,
  DataConsumer,
  DataKey,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  TickItem,
  TooltipType,
  TrapezoidViewBox,
} from '../util/types';
import { BarRectangle, BarRectangleProps, MinPointSize, minPointSizeCallback } from '../util/BarUtils';
import type { LegendPayload } from '../component/DefaultLegendContent';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { SetErrorBarContext } from '../context/ErrorBarContext';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { useChartLayout } from '../context/chartLayoutContext';
import { selectBarRectangles } from '../state/selectors/barSelectors';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { useAppSelector } from '../state/hooks';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectActiveTooltipDataKey, selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { BarSettings } from '../state/types/BarSettings';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import {
  svgPropertiesNoEvents,
  svgPropertiesNoEventsFromUnknown,
  SVGPropsNoEvents,
} from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { EasingInput } from '../animation/easing';
import { WithoutId } from '../util/useUniqueId';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { getZIndexFromUnknown } from '../zIndex/getZIndexFromUnknown';
import { propsAreEqual } from '../util/propsAreEqual';
import { AxisId } from '../state/cartesianAxisSlice';
import { BarStackClipLayer, useStackId } from './BarStack';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { ChartData } from '../state/chartDataSlice';

type BarRectangleType = {
  x: number | null;
  y: number | null;
  width: number;
  height: number;
};

export interface BarRectangleItem extends RectangleProps {
  value: number | [number, number];
  /** the coordinate of background rectangle */
  background?: BarRectangleType;
  tooltipPosition: Coordinate;
  readonly payload?: any;
  parentViewBox: CartesianViewBoxRequired;
  // These are inherited from RectangleProps, but we need to redefine them here and make non-nullable
  x: number;
  y: number;
  width: number;
  height: number;
  /**
   * Chart range coordinate of the baseValue of the first bar in a stack.
   */
  stackedBarStart: number;
  /**
   * The index in the original data array before filtering null values.
   * Used for matching with activeIndex from tooltip.
   */
  originalDataIndex: number;
}

export type BarShapeProps = BarRectangleItem & {
  isActive: boolean;
  index: number;
  option?: ActiveShape<BarShapeProps, SVGPathElement> | undefined;
};

export interface BarProps<DataPointType = any, DataValueType = any>
  extends DataConsumer<DataPointType, DataValueType>, ZIndexable {
  className?: string;
  index?: Key;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   *
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   *
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  /**
   * When two Bars have the same axisId and same stackId, then the two Bars are stacked in the chart.
   *
   * @see {@link https://recharts.github.io/en-US/examples/StackedBarChart/ Stacked bar chart example}
   * @see {@link https://recharts.github.io/en-US/examples/MixBarChart/ Chart with both stacked and non-stacked bars}
   * @see {@link BarStack}
   */
  stackId?: StackId;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: string | number;
  /**
   * The unit of data. This option will be used in tooltip.
   */
  unit?: string | number;
  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent a bar.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string | number;
  tooltipType?: TooltipType;
  /**
   * The type of icon in legend. If set to 'none', no legend item will be rendered.
   *
   * @defaultValue rect
   */
  legendType?: LegendType;
  /**
   * The minimal height of a bar in a horizontal chart, or the minimal width of a bar in a vertical chart.
   *
   * By default, 0 values are not shown.
   * To visualize a 0 (or close to zero) point, set the minimal point size to a pixel value like 3.
   *
   * In stacked bar charts, minPointSize might not be respected for tightly packed values.
   * So we strongly recommend not using this props in stacked BarChart.
   *
   * You may provide a function to conditionally change this prop based on Bar value.
   *
   * @defaultValue 0
   *
   * @see {@link https://recharts.github.io/en-US/examples/BarChartWithMinHeight/ Chart with min bar height}
   */
  minPointSize?: MinPointSize;
  /**
   * The maximum width of bar in a horizontal chart, or maximum height in a vertical chart.
   */
  maxBarSize?: number;
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
   * If set a ReactElement, the shape of bar can be customized.
   * If set a function, the function will be called to render customized shape.
   * By default, renders a rectangle.
   *
   * @see {@link https://recharts.github.io/en-US/examples/CustomShapeBarChart/ Custom shape bar chart example}
   */
  shape?: ActiveShape<BarShapeProps, SVGPathElement>;

  /**
   * The active bar is shown when a user enters a bar chart and this chart has tooltip. Options:
   * - `false`: all bars are passive, nothing happens on mouse events;
   * - `true`: active bar is rendered separately but the default props are the same as others: so mouse events do not change its appearance. className and zIndex are different though;
   * - `object`: the props of active bar;
   * - `function`: the render function of active bar;
   * - `ReactElement`: the active bar element.
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/SimpleBarChart/ activeBar example}
   *
   * @example <Bar activeBar={{ fill: 'red' }} />
   * @example <Bar activeBar={CustomActiveBarFn} />
   */
  activeBar?: ActiveShape<BarShapeProps, SVGPathElement>;
  /**
   * Renders a background for each bar. Options:
   *  - `false`: no background;
   *  - `true`: renders default background;
   *  - `object`: the props of background rectangle;
   *  - `ReactElement`: a custom background element;
   *  - `function`: a render function of custom background.
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/BarChartHasBackground/ BarChart with background example}
   */
  background?: ActiveShape<BarShapeProps, SVGPathElement> & ZIndexable;
  /**
   * The radius of corners.
   *
   * If you provide a single number, it applies to all four corners.
   * If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
   *
   * @see {@link https://recharts.github.io/en-US/guide/roundedBars/ Guide: Rounded bar corners}
   */
  radius?: RectRadius;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;

  /**
   * If set false, animation of bar will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   *
   * @defaultValue auto
   */
  isAnimationActive?: boolean | 'auto';
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @defaultValue 400
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   *
   * @defaultValue 'ease'
   */
  animationEasing?: EasingInput;
  /**
   * The unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
  /**
   * Renders one label for each bar. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   *
   * @example <Bar label />
   * @example <Bar label={{ position: 'top', fontSize: 20 }} />
   * @example <Bar label={CustomizedLabelFn} />
   */
  label?: ImplicitLabelListType;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 300
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}

type BarMouseEvent = (
  data: BarRectangleItem,
  index: number,
  event: React.MouseEvent<SVGPathElement, MouseEvent>,
) => void;

interface BarEvents {
  /**
   * The customized event handler of click on the bars in this group
   *
   * @see {@link https://recharts.github.io/en-US/examples/BarChartWithCustomizedEvent/ Chart with customized event example}
   */
  onClick: BarMouseEvent;
  /**
   * The customized event handler of mouseenter on the bars in this group
   */
  onMouseEnter: BarMouseEvent;
  /**
   * The customized event handler of mouseleave on the bars in this group
   */
  onMouseLeave: BarMouseEvent;
  /**
   * The customized event handler of mousemove on the bars in this group
   */
  onMouseMove: BarMouseEvent;
  /**
   * The customized event handler of mousedown on the bars in this group
   */
  onMouseDown: BarMouseEvent;
  /**
   * The customized event handler of mouseup on the bars in this group
   */
  onMouseUp: BarMouseEvent;
  /**
   * The customized event handler of mouseover on the bars in this group
   */
  onMouseOver: BarMouseEvent;
  /**
   * The customized event handler of mouseout on the bars in this group
   */
  onMouseOut: BarMouseEvent;
}

type InternalBarProps = {
  /*
   * Injected from Redux store
   */
  layout: 'horizontal' | 'vertical';
  data: ReadonlyArray<BarRectangleItem> | undefined;

  /*
   * Provided by user, has defaults
   */
  xAxisId: string | number;
  yAxisId: string | number;
  hide: boolean;
  legendType: LegendType;
  minPointSize: MinPointSize;
  activeBar: ActiveShape<BarShapeProps, SVGPathElement>;
  isAnimationActive: boolean | 'auto';
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: EasingInput;

  /*
   * Provided by user
   */
  needClip?: boolean;
  className?: string;
  index?: Key;
  stackId?: string | number;
  barSize?: string | number;
  unit?: string | number;
  name?: string | number;
  dataKey?: DataKey<any>;
  tooltipType?: TooltipType;
  maxBarSize?: number;
  shape?: ActiveShape<BarShapeProps, SVGPathElement>;
  background?: ActiveShape<BarShapeProps, SVGPathElement>;
  radius?: number | [number, number, number, number];

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  /**
   * Internally, ID is required, either from outside or autogenerated.
   */
  id: GraphicalItemId;
  label?: ImplicitLabelListType;
};

type BarSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<BarRectangleItem, SVGPathElement>,
  'radius' | 'name' | 'ref'
>;

export type Props = Partial<BarEvents> & BarProps & Omit<BarSvgProps, keyof BarEvents>;

type InternalProps = BarSvgProps & InternalBarProps;

const computeLegendPayloadFromBarData = (props: Props): ReadonlyArray<LegendPayload> => {
  const { dataKey, name, fill, legendType, hide } = props;
  return [
    {
      inactive: hide,
      dataKey,
      type: legendType,
      color: fill,
      value: getTooltipNameProp(name, dataKey),
      payload: props,
    },
  ];
};

const SetBarTooltipEntrySettings = React.memo(
  ({
    dataKey,
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
    'dataKey' | 'stroke' | 'strokeWidth' | 'fill' | 'name' | 'hide' | 'unit' | 'tooltipType' | 'id'
  >) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: undefined,
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
        color: fill,
        unit,
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

type BarBackgroundProps = {
  background?: ActiveShape<BarShapeProps, SVGPathElement>;
  data: ReadonlyArray<BarRectangleItem> | undefined;
  dataKey: DataKey<any> | undefined;
  allOtherBarProps: InternalProps;
};

function BarBackground(props: BarBackgroundProps) {
  const activeIndex = useAppSelector(selectActiveTooltipIndex);

  const { data, dataKey, background: backgroundFromProps, allOtherBarProps } = props;

  const {
    onMouseEnter: onMouseEnterFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    onClick: onItemClickFromProps,
    ...restOfAllOtherProps
  } = allOtherBarProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, allOtherBarProps.id);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, allOtherBarProps.id);
  if (!backgroundFromProps || data == null) {
    return null;
  }

  const backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);

  return (
    <ZIndexLayer zIndex={getZIndexFromUnknown(backgroundFromProps, DefaultZIndexes.barBackground)}>
      {data.map((entry: BarRectangleItem, i: number) => {
        const { value, background: backgroundFromDataEntry, tooltipPosition, ...rest } = entry;

        if (!backgroundFromDataEntry) {
          return null;
        }

        const onMouseEnter = onMouseEnterFromContext(entry, i);
        const onMouseLeave = onMouseLeaveFromContext(entry, i);
        const onClick = onClickFromContext(entry, i);

        const barRectangleProps: BarRectangleProps = {
          option: backgroundFromProps,
          isActive: String(i) === activeIndex,
          ...rest,
          // @ts-expect-error backgroundProps is contributing unknown props
          fill: '#eee',
          ...backgroundFromDataEntry,
          ...backgroundProps,
          ...adaptEventsOfChild(restOfAllOtherProps, entry, i),
          onMouseEnter,
          onMouseLeave,
          onClick,
          dataKey,
          index: i,
          className: 'recharts-bar-background-rectangle',
        };

        return <BarRectangle key={`background-bar-${i}`} {...barRectangleProps} />;
      })}
    </ZIndexLayer>
  );
}

type BarRectanglesProps = InternalProps & {
  data: ReadonlyArray<BarRectangleItem> | undefined;
};

function BarLabelListProvider({
  showLabels,
  children,
  rects,
}: {
  showLabels: boolean;
  children: ReactNode;
  rects: ReadonlyArray<BarRectangleItem> | undefined;
}) {
  const labelListEntries: ReadonlyArray<CartesianLabelListEntry> | undefined = rects?.map(
    (entry: BarRectangleItem): CartesianLabelListEntry => {
      const viewBox: TrapezoidViewBox = {
        x: entry.x,
        y: entry.y,
        width: entry.width,
        lowerWidth: entry.width,
        upperWidth: entry.width,
        height: entry.height,
      };
      return {
        ...viewBox,
        value: entry.value,
        payload: entry.payload,
        parentViewBox: entry.parentViewBox,
        viewBox,
        fill: entry.fill,
      };
    },
  );

  return (
    <CartesianLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      {children}
    </CartesianLabelListContextProvider>
  );
}

function BarRectangleWithActiveState(props: {
  shape: ActiveShape<BarShapeProps, SVGPathElement> | undefined;
  activeBar: ActiveShape<BarShapeProps, SVGPathElement>;
  baseProps: WithoutId<SVGPropsNoEvents<BarRectanglesProps>>;
  entry: BarRectangleItem;
  index: number;
  dataKey: DataKey<any> | undefined;
}) {
  const { shape, activeBar, baseProps, entry, index, dataKey } = props;
  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const activeDataKey = useAppSelector(selectActiveTooltipDataKey);
  /*
   * Bars support stacking, meaning that there can be multiple bars at the same x value.
   * With Tooltip shared=false we only want to highlight the currently active Bar, not all.
   *
   * Also, if the tooltip is shared, we want to highlight all bars at the same x value
   * regardless of the dataKey.
   *
   * With shared Tooltip, the activeDataKey is undefined.
   *
   * We use entry.originalDataIndex to match against activeIndex because the index parameter
   * is based on the filtered array, but activeIndex is based on the original data array.
   * When there are null values in the data, these indices can differ.
   */
  const isActive: boolean =
    activeBar &&
    String(entry.originalDataIndex) === activeIndex &&
    (activeDataKey == null || dataKey === activeDataKey);

  const [stayInLayer, setStayInLayer] = useState(false);
  const [hasMountedActive, setHasMountedActive] = useState(false);

  useEffect(() => {
    let rafId: number;
    if (isActive) {
      // 1. Enter the layer immediately
      setStayInLayer(true);

      // 2. Wait for the browser to paint the "inactive" state in the new layer,
      // then switch to active to trigger the CSS transition (width grow).
      rafId = requestAnimationFrame(() => {
        setHasMountedActive(true);
      });
    } else {
      setHasMountedActive(false);
    }

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isActive]);

  const handleTransitionEnd = useCallback(() => {
    // 4. Leave the layer only when the exit transition finishes
    if (!isActive) {
      setStayInLayer(false);
    }
  }, [isActive]);

  // Determine props:
  // - If entering (isActive=true) but not mounted yet (hasMountedActive=false), pass isActive=false (inactive size).
  // - If exiting (isActive=false), pass isActive=false (inactive size).
  const isVisuallyActive = isActive && hasMountedActive;

  // Render in ZIndexLayer if active OR if we are waiting for exit transition
  const shouldRenderInLayer = isActive || stayInLayer;

  let option: ActiveShape<BarShapeProps, SVGPathElement> | undefined;
  if (isActive) {
    if (activeBar === true) {
      option = shape;
    } else {
      option = activeBar;
    }
  } else {
    option = shape;
  }

  const content = (
    <BarRectangle
      {...baseProps}
      name={String(baseProps.name)}
      {...entry}
      isActive={isVisuallyActive}
      option={option}
      index={index}
      dataKey={dataKey}
      onTransitionEnd={handleTransitionEnd}
    />
  );

  if (shouldRenderInLayer) {
    return (
      <ZIndexLayer zIndex={DefaultZIndexes.activeBar}>
        <BarStackClipLayer index={index}>{content}</BarStackClipLayer>
      </ZIndexLayer>
    );
  }
  return content;
}

function BarRectangleNeverActive(props: {
  shape: ActiveShape<BarShapeProps, SVGPathElement> | undefined;
  baseProps: WithoutId<SVGPropsNoEvents<BarRectanglesProps>>;
  entry: BarRectangleItem;
  index: number;
  dataKey: DataKey<any> | undefined;
}) {
  const { shape, baseProps, entry, index, dataKey } = props;
  return (
    <BarRectangle
      {...baseProps}
      name={String(baseProps.name)}
      {...entry}
      isActive={false}
      option={shape}
      index={index}
      dataKey={dataKey}
    />
  );
}

function BarRectangles({
  data,
  props,
}: {
  data: ReadonlyArray<BarRectangleItem> | undefined;
  props: BarRectanglesProps;
}) {
  const { id, ...baseProps } = svgPropertiesNoEvents(props) ?? {};
  const { shape, dataKey, activeBar } = props;

  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = props;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((entry: BarRectangleItem, i: number) => {
        return (
          <BarStackClipLayer
            index={i}
            // https://github.com/recharts/recharts/issues/5415
            key={`rectangle-${entry?.x}-${entry?.y}-${entry?.value}-${i}`}
            className="recharts-bar-rectangle"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            onMouseEnter={onMouseEnterFromContext(entry, i)}
            onMouseLeave={onMouseLeaveFromContext(entry, i)}
            onClick={onClickFromContext(entry, i)}
          >
            {activeBar ? (
              <BarRectangleWithActiveState
                shape={shape}
                activeBar={activeBar}
                baseProps={baseProps}
                entry={entry}
                index={i}
                dataKey={dataKey}
              />
            ) : (
              /*
               * If the `activeBar` prop is falsy, then let's call the variant without hooks.
               * Using the `selectActiveTooltipIndex` selector is usually fast
               * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
               * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
               * So let's just skip the hooks altogether. That way, React can skip rendering the component,
               * and can skip the tree reconciliation for its children too.
               * Because we can't call hooks conditionally, we need to have a separate component for that.
               */
              <BarRectangleNeverActive shape={shape} baseProps={baseProps} entry={entry} index={i} dataKey={dataKey} />
            )}
          </BarStackClipLayer>
        );
      })}
    </>
  );
}

function RectanglesWithAnimation({
  props,
  previousRectanglesRef,
}: {
  props: InternalProps;
  previousRectanglesRef: MutableRefObject<null | ReadonlyArray<BarRectangleItem>>;
}) {
  const {
    data,
    layout,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    onAnimationEnd,
    onAnimationStart,
  } = props;
  const prevData = previousRectanglesRef.current;
  const animationId = useAnimationId(props, 'recharts-bar-');

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
  return (
    <BarLabelListProvider showLabels={showLabels} rects={data}>
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
          const stepData =
            t === 1
              ? data
              : data?.map((entry: BarRectangleItem, index: number): BarRectangleItem => {
                  const prev = prevData && prevData[index];

                  if (prev) {
                    return {
                      ...entry,
                      x: interpolate(prev.x, entry.x, t),
                      y: interpolate(prev.y, entry.y, t),
                      width: interpolate(prev.width, entry.width, t),
                      height: interpolate(prev.height, entry.height, t),
                    };
                  }

                  if (layout === 'horizontal') {
                    const height = interpolate(0, entry.height, t);
                    const y = interpolate(entry.stackedBarStart, entry.y, t);

                    return {
                      ...entry,
                      y,
                      height,
                    };
                  }

                  const w = interpolate(0, entry.width, t);
                  const x = interpolate(entry.stackedBarStart, entry.x, t);

                  return { ...entry, width: w, x };
                });

          if (t > 0) {
            // eslint-disable-next-line no-param-reassign
            previousRectanglesRef.current = stepData ?? null;
          }
          if (stepData == null) {
            return null;
          }
          return (
            <Layer>
              <BarRectangles props={props} data={stepData} />
            </Layer>
          );
        }}
      </JavascriptAnimate>
      <LabelListFromLabelProp label={props.label} />
      {props.children}
    </BarLabelListProvider>
  );
}

function RenderRectangles(props: InternalProps) {
  const previousRectanglesRef = useRef<ReadonlyArray<BarRectangleItem> | null>(null);

  return <RectanglesWithAnimation previousRectanglesRef={previousRectanglesRef} props={props} />;
}

const defaultMinPointSize: number = 0;

const errorBarDataPointFormatter: ErrorBarDataPointFormatter<BarRectangleItem> = (
  dataPoint: BarRectangleItem,
  dataKey,
): ErrorBarDataItem => {
  /**
   * if the value coming from `selectBarRectangles` is an array then this is a stacked bar chart.
   * arr[1] represents end value of the bar since the data is in the form of [startValue, endValue].
   * */
  const value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
  return {
    x: dataPoint.x,
    y: dataPoint.y,
    value,
    // getValueByDataKey does not validate the output type
    errorVal: getValueByDataKey(dataPoint, dataKey),
  };
};

class BarWithState extends PureComponent<InternalProps> {
  render() {
    const { hide, data, dataKey, className, xAxisId, yAxisId, needClip, background, id } = this.props;
    if (hide || data == null) {
      return null;
    }

    const layerClass = clsx('recharts-bar', className);
    const clipPathId = id;

    return (
      <Layer className={layerClass} id={id}>
        {needClip && (
          <defs>
            <GraphicalItemClipPath clipPathId={clipPathId} xAxisId={xAxisId} yAxisId={yAxisId} />
          </defs>
        )}
        <Layer className="recharts-bar-rectangles" clipPath={needClip ? `url(#clipPath-${clipPathId})` : undefined}>
          <BarBackground data={data} dataKey={dataKey} background={background} allOtherBarProps={this.props} />
          <RenderRectangles {...this.props} />
        </Layer>
      </Layer>
    );
  }
}

export const defaultBarProps = {
  activeBar: false,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
  background: false,
  hide: false,
  isAnimationActive: 'auto',
  label: false,
  legendType: 'rect',
  minPointSize: defaultMinPointSize,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: DefaultZIndexes.bar,
} as const satisfies Partial<Props>;

type BarImplProps = Omit<InternalBarProps, 'layout' | 'data'> & { children?: ReactNode };

function BarImpl(props: BarImplProps) {
  const {
    xAxisId,
    yAxisId,
    hide,
    legendType,
    minPointSize,
    activeBar,
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive,
  } = props;

  const { needClip } = useNeedsClip(xAxisId, yAxisId);
  const layout = useChartLayout();

  const isPanorama = useIsPanorama();

  const cells = findAllByType(props.children, Cell);

  const rects: ReadonlyArray<BarRectangleItem> | undefined = useAppSelector(state =>
    selectBarRectangles(state, props.id, isPanorama, cells),
  );

  if (layout !== 'vertical' && layout !== 'horizontal') {
    return null;
  }

  let errorBarOffset: number;
  const firstDataPoint = rects?.[0];
  if (firstDataPoint == null || firstDataPoint.height == null || firstDataPoint.width == null) {
    errorBarOffset = 0;
  } else {
    errorBarOffset = layout === 'vertical' ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
  }

  return (
    <SetErrorBarContext
      xAxisId={xAxisId}
      yAxisId={yAxisId}
      data={rects}
      dataPointFormatter={errorBarDataPointFormatter}
      errorBarOffset={errorBarOffset}
    >
      <BarWithState
        {...props}
        layout={layout}
        needClip={needClip}
        data={rects}
        xAxisId={xAxisId}
        yAxisId={yAxisId}
        hide={hide}
        legendType={legendType}
        minPointSize={minPointSize}
        activeBar={activeBar}
        animationBegin={animationBegin}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
        isAnimationActive={isAnimationActive}
      />
    </SetErrorBarContext>
  );
}

export function computeBarRectangles({
  layout,
  barSettings: { dataKey, minPointSize: minPointSizeProp },
  pos,
  bandSize,
  xAxis,
  yAxis,
  xAxisTicks,
  yAxisTicks,
  stackedData,
  displayedData,
  offset,
  cells,
  parentViewBox,
  dataStartIndex,
}: {
  layout: 'horizontal' | 'vertical';
  barSettings: BarSettings;
  pos: BarPositionPosition;
  bandSize: number;
  xAxis: BaseAxisWithScale;
  yAxis: BaseAxisWithScale;
  xAxisTicks: TickItem[];
  yAxisTicks: TickItem[];
  stackedData: Series<Record<number, number>, DataKey<any>> | undefined;
  offset: ChartOffsetInternal;
  displayedData: ChartData;
  cells: ReadonlyArray<ReactElement> | undefined;
  parentViewBox: CartesianViewBoxRequired;
  dataStartIndex: number;
}): ReadonlyArray<BarRectangleItem> | undefined {
  const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  // @ts-expect-error this assumes that the domain is always numeric, but doesn't check for it
  const stackedDomain: ReadonlyArray<number> = stackedData ? numericAxis.scale.domain() : null;
  const baseValue = getBaseValueOfBar({ numericAxis });
  const stackedBarStart: number | undefined = numericAxis.scale.map(baseValue);

  return displayedData
    .map((entry: unknown, index): BarRectangleItem | null => {
      let value, x: number | null, y, width, height, background: BarRectangleType;

      if (stackedData) {
        // Use dataStartIndex to access the correct element in the full stackedData array
        const untruncatedValue = stackedData[index + dataStartIndex];
        if (untruncatedValue == null) {
          return null;
        }
        value = truncateByDomain(untruncatedValue, stackedDomain);
      } else {
        value = getValueByDataKey(entry, dataKey);

        if (!Array.isArray(value)) {
          value = [baseValue, value];
        }
      }

      const minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);

      if (layout === 'horizontal') {
        const baseValueScale = yAxis.scale.map(value[0]);
        const currentValueScale = yAxis.scale.map(value[1]);
        if (baseValueScale == null || currentValueScale == null) {
          return null;
        }
        x = getCateCoordinateOfBar({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          offset: pos.offset,
          entry,
          index,
        });
        y = currentValueScale ?? baseValueScale ?? undefined;
        width = pos.size;
        const computedHeight = baseValueScale - currentValueScale;
        height = isNan(computedHeight) ? 0 : computedHeight;
        background = { x, y: offset.top, width, height: offset.height };

        if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
          const delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));

          y -= delta;
          height += delta;
        }
      } else {
        const baseValueScale = xAxis.scale.map(value[0]);
        const currentValueScale = xAxis.scale.map(value[1]);
        if (baseValueScale == null || currentValueScale == null) {
          return null;
        }
        x = baseValueScale;
        y = getCateCoordinateOfBar({
          axis: yAxis,
          ticks: yAxisTicks,
          bandSize,
          offset: pos.offset,
          entry,
          index,
        });
        width = currentValueScale - baseValueScale;
        height = pos.size;
        background = { x: offset.left, y, width: offset.width, height };

        if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
          const delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
          width += delta;
        }
      }

      if (x == null || y == null || width == null || height == null) {
        return null;
      }

      const barRectangleItem: BarRectangleItem = {
        // @ts-expect-error spread of unknown type
        ...entry,
        stackedBarStart,
        x,
        y,
        width,
        height,
        value: stackedData ? value : value[1],
        payload: entry,
        background,
        tooltipPosition: { x: x + width / 2, y: y + height / 2 },
        parentViewBox,
        originalDataIndex: index,
        ...(cells && cells[index] && cells[index].props),
      } satisfies BarRectangleItem;

      return barRectangleItem;
    })
    .filter(Boolean);
}

function BarFn(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, defaultBarProps);
  // stackId may arrive from props or from BarStack context
  const stackId = useStackId(props.stackId);
  const isPanorama = useIsPanorama();
  // Report all props to Redux store first, before calling any hooks, to avoid circular dependencies.
  return (
    <RegisterGraphicalItemId id={props.id} type="bar">
      {id => (
        <>
          <SetLegendPayload legendPayload={computeLegendPayloadFromBarData(props)} />
          <SetBarTooltipEntrySettings
            dataKey={props.dataKey}
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
            type="bar"
            id={id}
            // Bar does not allow setting data directly on the graphical item (why?)
            data={undefined}
            xAxisId={props.xAxisId}
            yAxisId={props.yAxisId}
            zAxisId={0}
            dataKey={props.dataKey}
            stackId={stackId}
            hide={props.hide}
            barSize={props.barSize}
            minPointSize={props.minPointSize}
            maxBarSize={props.maxBarSize}
            isPanorama={isPanorama}
          />
          <ZIndexLayer zIndex={props.zIndex}>
            <BarImpl {...props} id={id} />
          </ZIndexLayer>
        </>
      )}
    </RegisterGraphicalItemId>
  );
}

/**
 * @provides ErrorBarContext
 * @provides LabelListContext
 * @provides CellReader
 * @consumes CartesianChartContext
 * @consumes BarStackContext
 */
export const Bar: ComponentType<Props> = React.memo(BarFn, propsAreEqual);
Bar.displayName = 'Bar';
