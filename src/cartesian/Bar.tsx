import * as React from 'react';
import {
  ComponentType,
  Key,
  MutableRefObject,
  PureComponent,
  ReactElement,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { Series } from 'victory-vendor/d3-shape';
import { Props as RectangleProps } from '../shape/Rectangle';
import { Layer } from '../container/Layer';
import { ErrorBarDataItem, ErrorBarDataPointFormatter } from './ErrorBar';
import { Cell } from '../component/Cell';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  LabelListFromLabelProp,
  ImplicitLabelListType,
} from '../component/LabelList';
import { interpolate, isNan, mathSign } from '../util/DataUtils';
import { findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import {
  BarPositionPosition,
  getBaseValueOfBar,
  getCateCoordinateOfBar,
  getNormalizedStackId,
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
import { ZIndexable, ZIndexLayer } from '../zindex/ZIndexLayer';
import { DefaultZIndexes } from '../zindex/DefaultZIndexes';

type Rectangle = {
  x: number | null;
  y: number | null;
  width: number;
  height: number;
};

export interface BarRectangleItem extends RectangleProps {
  value: number | [number, number];
  /** the coordinate of background rectangle */
  background?: Rectangle;
  tooltipPosition: Coordinate;
  readonly payload?: any;
  parentViewBox: CartesianViewBoxRequired;
  // These are inherited from RectangleProps, but we need to redefine them here and make non-nullable
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BarProps extends ZIndexable {
  className?: string;
  index?: Key;
  xAxisId?: string | number;
  yAxisId?: string | number;
  stackId?: StackId;
  barSize?: string | number;
  unit?: string | number;
  name?: string | number;
  dataKey?: DataKey<any>;
  tooltipType?: TooltipType;
  legendType?: LegendType;
  minPointSize?: MinPointSize;
  maxBarSize?: number;
  hide?: boolean;
  shape?: ActiveShape<BarProps, SVGPathElement>;
  activeBar?: ActiveShape<BarProps, SVGPathElement>;
  background?: ActiveShape<BarProps, SVGPathElement>;
  radius?: number | [number, number, number, number];

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: EasingInput;
  id?: string;
  label?: ImplicitLabelListType;
}

type BarMouseEvent = (
  data: BarRectangleItem,
  index: number,
  event: React.MouseEvent<SVGPathElement, MouseEvent>,
) => void;

interface BarEvents {
  onClick: BarMouseEvent;
  onMouseEnter: BarMouseEvent;
  onMouseLeave: BarMouseEvent;
  onMouseMove: BarMouseEvent;
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
  activeBar: ActiveShape<BarProps, SVGPathElement>;
  isAnimationActive: boolean;
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
  shape?: ActiveShape<BarProps, SVGPathElement>;
  background?: ActiveShape<BarProps, SVGPathElement>;
  radius?: number | [number, number, number, number];

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  /**
   * Internally, ID is required, either from outside or autogenerated.
   */
  id: string;
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

function getTooltipEntrySettings(props: Props): TooltipPayloadConfiguration {
  const { dataKey, stroke, strokeWidth, fill, name, hide, unit } = props;
  return {
    dataDefinedOnItem: undefined,
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
      color: props.fill,
      unit,
    },
  };
}

type BarBackgroundProps = {
  background?: ActiveShape<BarProps, SVGPathElement>;
  data: ReadonlyArray<BarRectangleItem> | undefined;
  dataKey: DataKey<any> | undefined;
  allOtherBarProps: Props;
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

  // @ts-expect-error bar mouse events are not compatible with recharts mouse events
  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
  // @ts-expect-error bar mouse events are not compatible with recharts mouse events
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  // @ts-expect-error bar mouse events are not compatible with recharts mouse events
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);
  if (!backgroundFromProps || data == null) {
    return null;
  }

  const backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);

  return (
    <>
      {data.map((entry: BarRectangleItem, i: number) => {
        const { value, background: backgroundFromDataEntry, tooltipPosition, ...rest } = entry;

        if (!backgroundFromDataEntry) {
          return null;
        }

        // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
        const onMouseEnter = onMouseEnterFromContext(entry, i);
        // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
        const onMouseLeave = onMouseLeaveFromContext(entry, i);
        // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
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
    </>
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
  shape: ActiveShape<BarProps, SVGPathElement> | undefined;
  activeBar: ActiveShape<BarProps, SVGPathElement>;
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
   */
  const isActive: boolean =
    activeBar && String(index) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
  const option = isActive ? activeBar : shape;
  if (isActive) {
    return (
      <ZIndexLayer zIndex={DefaultZIndexes.activeBar}>
        <BarRectangle
          {...baseProps}
          name={String(baseProps.name)}
          {...entry}
          isActive={isActive}
          option={option}
          index={index}
          dataKey={dataKey}
        />
      </ZIndexLayer>
    );
  }
  return (
    <BarRectangle
      {...baseProps}
      name={String(baseProps.name)}
      {...entry}
      isActive={isActive}
      option={option}
      index={index}
      dataKey={dataKey}
    />
  );
}

function BarRectangleNeverActive(props: {
  shape: ActiveShape<BarProps, SVGPathElement> | undefined;
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

  // @ts-expect-error bar mouse events are not compatible with recharts mouse events
  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
  // @ts-expect-error bar mouse events are not compatible with recharts mouse events
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  // @ts-expect-error bar mouse events are not compatible with recharts mouse events
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((entry: BarRectangleItem, i: number) => {
        return (
          <Layer
            // https://github.com/recharts/recharts/issues/5415
            // eslint-disable-next-line react/no-array-index-key
            key={`rectangle-${entry?.x}-${entry?.y}-${entry?.value}-${i}`}
            className="recharts-bar-rectangle"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
            onMouseEnter={onMouseEnterFromContext(entry, i)}
            // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
            onMouseLeave={onMouseLeaveFromContext(entry, i)}
            // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
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
          </Layer>
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
                    const h = interpolate(0, entry.height, t);

                    return {
                      ...entry,
                      y: entry.y + entry.height - h,
                      height: h,
                    };
                  }

                  const w = interpolate(0, entry.width, t);

                  return { ...entry, width: w };
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

const errorBarDataPointFormatter: ErrorBarDataPointFormatter = (
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
    // @ts-expect-error getValueByDataKey does not validate the output type
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

const defaultBarProps = {
  activeBar: false,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
  hide: false,
  isAnimationActive: !Global.isSsr,
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

  const rects = useAppSelector(state => selectBarRectangles(state, xAxisId, yAxisId, isPanorama, props.id, cells));

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
  displayedData: any[];
  cells: ReadonlyArray<ReactElement> | undefined;
  parentViewBox: CartesianViewBoxRequired;
  dataStartIndex: number;
}): ReadonlyArray<BarRectangleItem> | undefined {
  const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  // @ts-expect-error this assumes that the domain is always numeric, but doesn't check for it
  const stackedDomain: ReadonlyArray<number> = stackedData ? numericAxis.scale.domain() : null;
  const baseValue = getBaseValueOfBar({ numericAxis });

  return displayedData
    .map((entry, index): BarRectangleItem | null => {
      let value, x: number | null, y, width, height, background: Rectangle;

      if (stackedData) {
        // Use dataStartIndex to access the correct element in the full stackedData array
        value = truncateByDomain(stackedData[index + dataStartIndex], stackedDomain);
      } else {
        value = getValueByDataKey(entry, dataKey);

        if (!Array.isArray(value)) {
          value = [baseValue, value];
        }
      }

      const minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);

      if (layout === 'horizontal') {
        const [baseValueScale, currentValueScale] = [yAxis.scale(value[0]), yAxis.scale(value[1])];
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
        const [baseValueScale, currentValueScale] = [xAxis.scale(value[0]), xAxis.scale(value[1])];
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
        ...entry,
        x,
        y,
        width,
        height,
        value: stackedData ? value : value[1],
        payload: entry,
        background,
        tooltipPosition: { x: x + width / 2, y: y + height / 2 },
        parentViewBox,
        ...(cells && cells[index] && cells[index].props),
      } satisfies BarRectangleItem;

      return barRectangleItem;
    })
    .filter(Boolean);
}

function BarFn(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, defaultBarProps);
  const isPanorama = useIsPanorama();
  // Report all props to Redux store first, before calling any hooks, to avoid circular dependencies.
  return (
    <RegisterGraphicalItemId id={props.id} type="bar">
      {id => (
        <>
          <SetLegendPayload legendPayload={computeLegendPayloadFromBarData(props)} />
          <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={props} />
          <SetCartesianGraphicalItem
            type="bar"
            id={id}
            // Bar does not allow setting data directly on the graphical item (why?)
            data={undefined}
            xAxisId={props.xAxisId}
            yAxisId={props.yAxisId}
            zAxisId={0}
            dataKey={props.dataKey}
            stackId={getNormalizedStackId(props.stackId)}
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

export const Bar: ComponentType<Props> = React.memo(BarFn);
Bar.displayName = 'Bar';
