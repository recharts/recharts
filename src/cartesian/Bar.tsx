/**
 * @fileOverview Render a group of bar
 */
// eslint-disable-next-line max-classes-per-file
import * as React from 'react';
import { Key, MutableRefObject, PureComponent, ReactElement, useCallback, useMemo, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Series } from 'victory-vendor/d3-shape';
import { Props as RectangleProps } from '../shape/Rectangle';
import { Layer } from '../container/Layer';
import { ErrorBarDataItem, ErrorBarDataPointFormatter, SetErrorBarPreferredDirection } from './ErrorBar';
import { Cell } from '../component/Cell';
import { LabelList } from '../component/LabelList';
import { interpolateNumber, isNan, isNullish, mathSign, uniqueId } from '../util/DataUtils';
import { filterProps, findAllByType } from '../util/ReactUtils';
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
  AnimationTiming,
  ChartOffset,
  Coordinate,
  DataKey,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  TickItem,
  TooltipType,
} from '../util/types';
import { ImplicitLabelType } from '../component/Label';
import { BarRectangle, BarRectangleProps, MinPointSize, minPointSizeCallback } from '../util/BarUtils';
import type { LegendPayload } from '../component/DefaultLegendContent';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ReportBar } from '../state/ReportBar';
import { CartesianGraphicalItemContext, SetErrorBarContext } from '../context/CartesianGraphicalItemContext';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { useChartLayout } from '../context/chartLayoutContext';
import { BarSettings, selectBarRectangles } from '../state/selectors/barSelectors';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { useAppSelector } from '../state/hooks';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectActiveTooltipDataKey, selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { Animate } from '../animation/Animate';

export interface BarRectangleItem extends RectangleProps {
  value?: number | [number, number];
  /** the coordinate of background rectangle */
  background?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  tooltipPosition: Coordinate;
  readonly payload?: any;
}

export interface BarProps {
  className?: string;
  index?: Key;
  xAxisId?: string | number;
  yAxisId?: string | number;
  stackId?: StackId;
  barSize?: string | number;
  unit?: string | number;
  name?: string | number;
  dataKey: DataKey<any>;
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
  animationEasing?: AnimationTiming;
  id?: string;
  label?: ImplicitLabelType;
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
  data: ReadonlyArray<BarRectangleItem>;

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
  animationEasing: AnimationTiming;

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
  dataKey: DataKey<any>;
  tooltipType?: TooltipType;
  maxBarSize?: number;
  shape?: ActiveShape<BarProps, SVGPathElement>;
  background?: ActiveShape<BarProps, SVGPathElement>;
  radius?: number | [number, number, number, number];

  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;

  id?: string;
  label?: ImplicitLabelType;
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
  data: ReadonlyArray<BarRectangleItem>;
  dataKey: DataKey<any>;
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

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);
  if (!backgroundFromProps || data == null) {
    return null;
  }

  const backgroundProps = filterProps(backgroundFromProps, false);

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
          // @ts-expect-error BarRectangle props do not accept `fill` property.
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

type BarRectanglesProps = Props & {
  data: ReadonlyArray<BarRectangleItem>;
};

function BarRectangles({
  data,
  props,
  showLabels,
}: {
  data: ReadonlyArray<BarRectangleItem>;
  props: BarRectanglesProps;
  showLabels: boolean;
}) {
  const baseProps = filterProps(props, false);
  const { shape, dataKey, activeBar } = props;

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const activeDataKey = useAppSelector(selectActiveTooltipDataKey);

  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = props;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((entry: BarRectangleItem, i: number) => {
        /*
         * Bars support stacking, meaning that there can be multiple bars at the same x value.
         * With Tooltip shared=false we only want to highlight the currently active Bar, not all.
         *
         * Also, if the tooltip is shared, we want to highlight all bars at the same x value
         * regardless of the dataKey.
         *
         * With shared Tooltip, the activeDataKey is undefined.
         */
        const isActive = activeBar && String(i) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
        const option = isActive ? activeBar : shape;
        const barRectangleProps: BarRectangleProps = {
          ...baseProps,
          ...entry,
          isActive,
          option,
          index: i,
          dataKey,
        };

        return (
          <Layer
            className="recharts-bar-rectangle"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
            onMouseEnter={onMouseEnterFromContext(entry, i)}
            // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
            onMouseLeave={onMouseLeaveFromContext(entry, i)}
            // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
            onClick={onClickFromContext(entry, i)}
            // https://github.com/recharts/recharts/issues/5415
            // eslint-disable-next-line react/no-array-index-key
            key={`rectangle-${entry?.x}-${entry?.y}-${entry?.value}-${i}`}
          >
            <BarRectangle {...barRectangleProps} />
          </Layer>
        );
      })}
      {showLabels && LabelList.renderCallByParent(props, data)}
    </>
  );
}

function RectanglesWithAnimation({
  props,
  previousRectanglesRef,
}: {
  props: InternalProps;
  previousRectanglesRef: MutableRefObject<ReadonlyArray<BarRectangleItem>>;
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
        const stepData =
          t === 1
            ? data
            : data.map((entry, index) => {
                const prev = prevData && prevData[index];

                if (prev) {
                  const interpolatorX = interpolateNumber(prev.x, entry.x);
                  const interpolatorY = interpolateNumber(prev.y, entry.y);
                  const interpolatorWidth = interpolateNumber(prev.width, entry.width);
                  const interpolatorHeight = interpolateNumber(prev.height, entry.height);

                  return {
                    ...entry,
                    x: interpolatorX(t),
                    y: interpolatorY(t),
                    width: interpolatorWidth(t),
                    height: interpolatorHeight(t),
                  };
                }

                if (layout === 'horizontal') {
                  const interpolatorHeight = interpolateNumber(0, entry.height);
                  const h = interpolatorHeight(t);

                  return {
                    ...entry,
                    y: entry.y + entry.height - h,
                    height: h,
                  };
                }

                const interpolator = interpolateNumber(0, entry.width);
                const w = interpolator(t);

                return { ...entry, width: w };
              });

        if (t > 0) {
          // eslint-disable-next-line no-param-reassign
          previousRectanglesRef.current = stepData;
        }
        return (
          <Layer>
            <BarRectangles props={props} data={stepData} showLabels={!isAnimating} />
          </Layer>
        );
      }}
    </Animate>
  );
}

function RenderRectangles(props: InternalProps) {
  const { data, isAnimationActive } = props;
  const previousRectanglesRef = useRef<ReadonlyArray<BarRectangleItem> | null>(null);

  if (
    isAnimationActive &&
    data &&
    data.length &&
    (previousRectanglesRef.current == null || previousRectanglesRef.current !== data)
  ) {
    return <RectanglesWithAnimation previousRectanglesRef={previousRectanglesRef} props={props} />;
  }

  return <BarRectangles props={props} data={data} showLabels />;
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
  id = uniqueId('recharts-bar-');

  render() {
    const { hide, data, dataKey, className, xAxisId, yAxisId, needClip, background, id, layout } = this.props;
    if (hide) {
      return null;
    }

    const layerClass = clsx('recharts-bar', className);
    const clipPathId = isNullish(id) ? this.id : id;

    return (
      <Layer className={layerClass}>
        {needClip && (
          <defs>
            <GraphicalItemClipPath clipPathId={clipPathId} xAxisId={xAxisId} yAxisId={yAxisId} />
          </defs>
        )}
        <Layer className="recharts-bar-rectangles" clipPath={needClip ? `url(#clipPath-${clipPathId})` : null}>
          <BarBackground data={data} dataKey={dataKey} background={background} allOtherBarProps={this.props} />
          <RenderRectangles {...this.props} />
        </Layer>
        <SetErrorBarPreferredDirection direction={layout === 'horizontal' ? 'y' : 'x'}>
          {this.props.children}
        </SetErrorBarPreferredDirection>
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
} as const satisfies Partial<Props>;

function BarImpl(props: Props) {
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
  } = resolveDefaultProps(props, defaultBarProps);

  const { needClip } = useNeedsClip(xAxisId, yAxisId);
  const layout = useChartLayout();

  const isPanorama = useIsPanorama();

  const barSettings: BarSettings = useMemo(
    (): BarSettings => ({
      barSize: props.barSize,
      data: undefined,
      dataKey: props.dataKey,
      maxBarSize: props.maxBarSize,
      minPointSize,
      stackId: getNormalizedStackId(props.stackId),
    }),
    [props.barSize, props.dataKey, props.maxBarSize, minPointSize, props.stackId],
  );

  const cells = findAllByType(props.children, Cell);

  const rects = useAppSelector(state => selectBarRectangles(state, xAxisId, yAxisId, isPanorama, barSettings, cells));

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
}: {
  layout: 'horizontal' | 'vertical';
  barSettings: BarSettings;
  pos: BarPositionPosition;
  bandSize: number;
  xAxis?: BaseAxisWithScale;
  yAxis?: BaseAxisWithScale;
  xAxisTicks: TickItem[];
  yAxisTicks: TickItem[];
  stackedData: Series<Record<number, number>, DataKey<any>> | undefined;
  offset: ChartOffset;
  displayedData: any[];
  cells: ReadonlyArray<ReactElement> | undefined;
}): ReadonlyArray<BarRectangleItem> | undefined {
  const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  // @ts-expect-error this assumes that the domain is always numeric, but doesn't check for it
  const stackedDomain: ReadonlyArray<number> = stackedData ? numericAxis.scale.domain() : null;
  const baseValue = getBaseValueOfBar({ numericAxis });

  return displayedData.map((entry, index): BarRectangleItem => {
    let value, x, y, width, height, background;

    if (stackedData) {
      // we don't need to use dataStartIndex here, because stackedData is already sliced from the selector
      value = truncateByDomain(stackedData[index], stackedDomain);
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

    const barRectangleItem = {
      ...entry,
      x,
      y,
      width,
      height,
      value: stackedData ? value : value[1],
      payload: entry,
      background,
      tooltipPosition: { x: x + width / 2, y: y + height / 2 },
      ...(cells && cells[index] && cells[index].props),
    } satisfies BarRectangleItem;

    return barRectangleItem;
  });
}

export class Bar extends PureComponent<Props> {
  static displayName = 'Bar';

  static defaultProps: Partial<Props> = defaultBarProps;

  render() {
    // Report all props to Redux store first, before calling any hooks, to avoid circular dependencies.
    return (
      <CartesianGraphicalItemContext
        type="bar"
        // Bar does not allow setting data directly on the graphical item (why?)
        data={null}
        xAxisId={this.props.xAxisId}
        yAxisId={this.props.yAxisId}
        zAxisId={0}
        dataKey={this.props.dataKey}
        stackId={this.props.stackId}
        hide={this.props.hide}
        barSize={this.props.barSize}
      >
        <ReportBar />
        <SetLegendPayload legendPayload={computeLegendPayloadFromBarData(this.props)} />
        <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        <BarImpl {...this.props} />
      </CartesianGraphicalItemContext>
    );
  }
}
