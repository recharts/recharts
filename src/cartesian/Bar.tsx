/**
 * @fileOverview Render a group of bar
 */
// eslint-disable-next-line max-classes-per-file
import React, { Key, PureComponent, ReactElement } from 'react';
import clsx from 'clsx';
import Animate from 'react-smooth';
import isEqual from 'lodash/isEqual';
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
  getTooltipNameProp,
  getValueByDataKey,
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
import type { Payload as LegendPayload } from '../component/DefaultLegendContent';
import { useLegendPayloadDispatch } from '../context/legendPayloadContext';
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
}

export interface BarProps {
  className?: string;
  index?: Key;
  xAxisId?: string | number;
  yAxisId?: string | number;
  stackId?: string | number;
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
  animationId?: number;
  id?: string;
  label?: ImplicitLabelType;
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

  animationId?: number;
  id?: string;
  label?: ImplicitLabelType;
};

type BarSvgProps = Omit<PresentationAttributesAdaptChildEvent<BarRectangleItem, SVGPathElement>, 'radius' | 'name'>;

export type Props = BarSvgProps & BarProps;

type InternalProps = BarSvgProps & InternalBarProps;

interface State {
  readonly isAnimationFinished?: boolean;
  readonly prevData?: ReadonlyArray<BarRectangleItem>;
  readonly curData?: ReadonlyArray<BarRectangleItem>;
  readonly prevAnimationId?: number;
}

const computeLegendPayloadFromBarData = (props: Props): Array<LegendPayload> => {
  const { dataKey, name, fill, legendType, hide } = props;
  return [
    {
      inactive: hide,
      dataKey,
      type: legendType,
      color: fill,
      value: name || dataKey,
      payload: props,
    },
  ];
};

function SetBarLegend(props: Props): null {
  useLegendPayloadDispatch(computeLegendPayloadFromBarData, props);
  return null;
}

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
  onAnimationStart: () => void;
  onAnimationEnd: () => void;
  allOtherBarProps: Props;
};

function BarBackground(props: BarBackgroundProps) {
  const activeIndex = useAppSelector(selectActiveTooltipIndex);

  const { data, dataKey, background: backgroundFromProps, onAnimationStart, onAnimationEnd, allOtherBarProps } = props;

  const {
    onMouseEnter: onMouseEnterFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    onClick: onItemClickFromProps,
    ...restOfAllOtherProps
  } = allOtherBarProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey);
  if (!backgroundFromProps) {
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
          onAnimationStart,
          onAnimationEnd,
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
  onAnimationStart: () => void;
  onAnimationEnd: () => void;
};

function BarRectangles(props: BarRectanglesProps) {
  const { onAnimationStart, onAnimationEnd, ...rest } = props;
  const baseProps = filterProps(rest, false);
  const { data, shape, dataKey, activeBar } = props;

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const activeDataKey = useAppSelector(selectActiveTooltipDataKey);

  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = rest;

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
        const barRectangleProps = {
          ...baseProps,
          ...entry,
          isActive,
          option,
          index: i,
          dataKey,
          onAnimationStart,
          onAnimationEnd,
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
            key={`rectangle-${entry?.x}-${entry?.y}-${entry?.value}`}
          >
            <BarRectangle {...barRectangleProps} />
          </Layer>
        );
      })}
    </>
  );
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

class BarWithState extends PureComponent<InternalProps, State> {
  state: State = { isAnimationFinished: false };

  static getDerivedStateFromProps(nextProps: InternalProps, prevState: State): State {
    if (nextProps.animationId !== prevState.prevAnimationId) {
      return {
        prevAnimationId: nextProps.animationId,
        curData: nextProps.data,
        prevData: prevState.curData,
      };
    }
    if (nextProps.data !== prevState.curData) {
      return {
        curData: nextProps.data,
      };
    }

    return null;
  }

  id = uniqueId('recharts-bar-');

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (onAnimationEnd) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;
    this.setState({ isAnimationFinished: false });

    if (onAnimationStart) {
      onAnimationStart();
    }
  };

  renderRectanglesStatically(data: ReadonlyArray<BarRectangleItem>) {
    return (
      <BarRectangles
        {...this.props}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
        data={data}
      />
    );
  }

  renderRectanglesWithAnimation() {
    const { data, layout, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } =
      this.props;
    const { prevData } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`bar-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {({ t }: { t: number }) => {
          const stepData = data.map((entry, index) => {
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

          return <Layer>{this.renderRectanglesStatically(stepData)}</Layer>;
        }}
      </Animate>
    );
  }

  renderRectangles() {
    const { data, isAnimationActive } = this.props;
    const { prevData } = this.state;

    if (isAnimationActive && data && data.length && (!prevData || !isEqual(prevData, data))) {
      return this.renderRectanglesWithAnimation();
    }

    return this.renderRectanglesStatically(data);
  }

  render() {
    const { hide, data, dataKey, className, xAxisId, yAxisId, needClip, isAnimationActive, background, id, layout } =
      this.props;
    if (hide || !data || !data.length) {
      return null;
    }

    const { isAnimationFinished } = this.state;
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
          <BarBackground
            data={data}
            dataKey={dataKey}
            background={background}
            onAnimationStart={this.handleAnimationStart}
            onAnimationEnd={this.handleAnimationEnd}
            allOtherBarProps={this.props}
          />
          {this.renderRectangles()}
        </Layer>
        <SetErrorBarPreferredDirection direction={layout === 'horizontal' ? 'y' : 'x'}>
          {this.props.children}
        </SetErrorBarPreferredDirection>
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, data)}
      </Layer>
    );
  }
}

const defaultBarProps: Partial<Props> = {
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
};

function BarImpl(props: Props) {
  const { needClip } = useNeedsClip(props.xAxisId, props.yAxisId);
  const layout = useChartLayout();

  const isPanorama = useIsPanorama();

  const barSettings: BarSettings = {
    barSize: props.barSize,
    data: undefined,
    dataKey: props.dataKey,
    maxBarSize: props.maxBarSize,
    minPointSize: props.minPointSize,
    stackId: props.stackId,
  };

  const cells = findAllByType(props.children, Cell);

  const rects = useAppSelector(state =>
    selectBarRectangles(state, props.xAxisId, props.yAxisId, isPanorama, barSettings, cells),
  );

  if (layout !== 'vertical' && layout !== 'horizontal') {
    return null;
  }

  let errorBarOffset: number;
  const firstDataPoint = rects?.[0];
  if (firstDataPoint == null) {
    errorBarOffset = 0;
  } else {
    errorBarOffset = layout === 'vertical' ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
  }

  const {
    xAxisId = defaultBarProps.xAxisId,
    yAxisId = defaultBarProps.yAxisId,
    hide = defaultBarProps.hide,
    legendType = defaultBarProps.legendType,
    minPointSize = defaultBarProps.minPointSize,
    activeBar = defaultBarProps.activeBar,
    animationBegin = defaultBarProps.animationBegin,
    animationDuration = defaultBarProps.animationDuration,
    animationEasing = defaultBarProps.animationEasing,
    isAnimationActive = defaultBarProps.isAnimationActive,
  } = props;

  const { ref, ...everythingElse } = props;
  return (
    <SetErrorBarContext
      xAxisId={xAxisId}
      yAxisId={yAxisId}
      data={rects}
      dataPointFormatter={errorBarDataPointFormatter}
      errorBarOffset={errorBarOffset}
    >
      <BarWithState
        {...everythingElse}
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
  dataStartIndex,
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
  dataStartIndex: number;
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
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
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

    return {
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
    };
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
        <SetBarLegend {...this.props} />
        <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        <BarImpl {...this.props} />
      </CartesianGraphicalItemContext>
    );
  }
}
