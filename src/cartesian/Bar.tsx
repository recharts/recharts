/**
 * @fileOverview Render a group of bar
 */
import React, { Key, PureComponent, ReactElement } from 'react';
import clsx from 'clsx';
import Animate from 'react-smooth';
import isEqual from 'lodash/isEqual';
import isNil from 'lodash/isNil';
import { Props as RectangleProps } from '../shape/Rectangle';
import { Layer } from '../container/Layer';
import { ErrorBar, ErrorBarDataPointFormatter, Props as ErrorBarProps } from './ErrorBar';
import { Cell } from '../component/Cell';
import { LabelList } from '../component/LabelList';
import { interpolateNumber, mathSign, uniqueId } from '../util/DataUtils';
import { filterProps, findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import {
  BarPosition,
  BarPositionPosition,
  findPositionOfBar,
  getBaseValueOfBar,
  getCateCoordinateOfBar,
  getTooltipItem,
  getTooltipNameProp,
  getValueByDataKey,
  truncateByDomain,
} from '../util/ChartUtils';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  ChartOffset,
  D3Scale,
  DataKey,
  LayoutType,
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
  useTooltipContext,
} from '../context/tooltipContext';
import { TooltipPayloadConfiguration } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ReportBar } from '../state/ReportBar';
import { CartesianGraphicalItemContext } from '../context/CartesianGraphicalItemContext';

export interface BarRectangleItem extends RectangleProps {
  value?: number | [number, number];
  /** the coordinate of background rectangle */
  background?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
}

interface InternalBarProps {
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number>; x?: number; width?: number };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number>; y?: number; height?: number };
  data?: BarRectangleItem[];
  top?: number;
  left?: number;
  width?: number;
  height?: number;
}

export interface BarProps extends InternalBarProps {
  className?: string;
  index?: Key;
  layout?: 'horizontal' | 'vertical';
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

export type Props = Omit<PresentationAttributesAdaptChildEvent<BarRectangleItem, SVGPathElement>, 'radius' | 'name'> &
  BarProps;

interface State {
  readonly isAnimationFinished?: boolean;
  readonly prevData?: BarRectangleItem[];
  readonly curData?: BarRectangleItem[];
  readonly prevAnimationId?: number;
}

type BarComposedData = ChartOffset & {
  layout: LayoutType;
  data: BarRectangleItem[];
};

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
      color: props.fill,
      unit,
    },
  };
}

type BarBackgroundProps = {
  background?: ActiveShape<BarProps, SVGPathElement>;
  data: BarRectangleItem[];
  dataKey: DataKey<any>;
  onAnimationStart: () => void;
  onAnimationEnd: () => void;
  allOtherBarProps: Props;
};

function BarBackground(props: BarBackgroundProps) {
  const { index: activeIndex } = useTooltipContext();

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
        const { value, background: backgroundFromDataEntry, ...rest } = entry;

        if (!backgroundFromDataEntry) {
          return null;
        }

        const onMouseEnter = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
          onMouseEnterFromContext(entry, i, e);
        };
        const onMouseLeave = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
          onMouseLeaveFromContext(entry, i, e);
        };
        const onClick = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
          onClickFromContext(entry, i, e);
        };
        const barRectangleProps: BarRectangleProps = {
          option: backgroundFromProps,
          isActive: i === activeIndex,
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
  data: BarRectangleItem[];
  onAnimationStart: () => void;
  onAnimationEnd: () => void;
};

function BarRectangles(props: BarRectanglesProps) {
  const { onAnimationStart, onAnimationEnd, ...rest } = props;
  const baseProps = filterProps(rest, false);
  const { data, shape, dataKey, activeBar } = props;

  const { index: activeIndex, active: isTooltipActive } = useTooltipContext();
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
      {data.map((entry, i) => {
        const isActive = isTooltipActive && activeBar && i === activeIndex;
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
        const onMouseEnter = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
          onMouseEnterFromContext(entry, i, e);
        };
        const onMouseLeave = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
          onMouseLeaveFromContext(entry, i, e);
        };
        const onClick = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error BarRectangleItem type definition says it's missing properties, but I can see them present in debugger!
          onClickFromContext(entry, i, e);
        };
        return (
          <Layer
            className="recharts-bar-rectangle"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
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

const emptyArray: Array<never> = [];

export class Bar extends PureComponent<Props, State> {
  static displayName = 'Bar';

  static defaultProps: Partial<Props> = {
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    minPointSize: defaultMinPointSize,
    hide: false,
    data: null,
    layout: 'vertical',
    activeBar: false,
    isAnimationActive: !Global.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'ease',
  };

  /**
   * Compose the data of each group
   * @param {Object} props Props for the component
   * @param {Object} item        An instance of Bar
   * @param {Array} barPosition  The offset and size of each bar
   * @param {Object} xAxis       The configuration of x-axis
   * @param {Object} yAxis       The configuration of y-axis
   * @param {Array} stackedData  The stacked data of a bar item
   * @return{Array} Composed data
   */
  static getComposedData = ({
    props,
    item,
    barPosition,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    dataStartIndex,
    displayedData,
    offset,
  }: {
    props: Props;
    item: ReactElement;
    barPosition: ReadonlyArray<BarPosition>;
    bandSize: number;
    xAxis: InternalBarProps['xAxis'];
    yAxis: InternalBarProps['yAxis'];
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    stackedData: Array<[number, number]>;
    dataStartIndex: number;
    offset: ChartOffset;
    displayedData: any[];
  }): BarComposedData => {
    const pos: BarPositionPosition | null = findPositionOfBar(barPosition, item);
    if (!pos) {
      return null;
    }

    const { layout } = props;
    const { dataKey, children, minPointSize: minPointSizeProp } = item.props;
    const numericAxis = layout === 'horizontal' ? yAxis : xAxis;
    const stackedDomain = stackedData ? numericAxis.scale.domain() : null;
    const baseValue = getBaseValueOfBar({ numericAxis });
    const cells = findAllByType(children, Cell);
    const rects = displayedData.map((entry, index) => {
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
        height = Number.isNaN(computedHeight) ? 0 : computedHeight;
        background = { x, y: yAxis.y, width, height: yAxis.height };

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
        background = { x: xAxis.x, y, width: xAxis.width, height };

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
        ...(cells && cells[index] && cells[index].props),
        // @ts-expect-error missing types
        tooltipPayload: [getTooltipItem(item, entry)],
        tooltipPosition: { x: x + width / 2, y: y + height / 2 },
      };
    });

    return { data: rects, layout, ...offset };
  };

  state: State = { isAnimationFinished: false };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
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

  renderRectanglesStatically(data: BarRectangleItem[]) {
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

  renderErrorBar(needClip: boolean, clipPathId: string) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }

    const { data, xAxis, yAxis, layout, children } = this.props;
    const errorBarItems = findAllByType(children, ErrorBar);

    if (!errorBarItems) {
      return null;
    }

    const offset = layout === 'vertical' ? data[0].height / 2 : data[0].width / 2;

    // @ts-expect-error getValueByDataKey does not validate the output type
    const dataPointFormatter: ErrorBarDataPointFormatter = (dataPoint: BarRectangleItem, dataKey) => {
      /**
       * if the value coming from `getComposedData` is an array then this is a stacked bar chart.
       * arr[1] represents end value of the bar since the data is in the form of [startValue, endValue].
       * */
      const value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
      return {
        x: dataPoint.x,
        y: dataPoint.y,
        value,
        errorVal: getValueByDataKey(dataPoint, dataKey),
      };
    };

    const errorBarProps = {
      clipPath: needClip ? `url(#clipPath-${clipPathId})` : null,
    };

    return (
      <Layer {...errorBarProps}>
        {errorBarItems.map((item: ReactElement<ErrorBarProps>) =>
          React.cloneElement(item, {
            key: `error-bar-${clipPathId}-${item.props.dataKey}`,
            data,
            xAxis,
            yAxis,
            layout,
            offset,
            dataPointFormatter,
          }),
        )}
      </Layer>
    );
  }

  render() {
    const {
      hide,
      data,
      dataKey,
      className,
      xAxis,
      yAxis,
      left,
      top,
      width,
      height,
      isAnimationActive,
      background,
      id,
    } = this.props;
    if (hide || !data || !data.length) {
      return (
        <>
          <ReportBar />
          <SetBarLegend {...this.props} />
          <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        </>
      );
    }

    const { isAnimationFinished } = this.state;
    const layerClass = clsx('recharts-bar', className);
    const needClipX = xAxis && xAxis.allowDataOverflow;
    const needClipY = yAxis && yAxis.allowDataOverflow;
    const needClip = needClipX || needClipY;
    const clipPathId = isNil(id) ? this.id : id;

    return (
      <CartesianGraphicalItemContext data={emptyArray} xAxisId={this.props.xAxisId} dataKey={this.props.dataKey}>
        <Layer className={layerClass}>
          <ReportBar />
          <SetBarLegend {...this.props} />
          <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
          {needClipX || needClipY ? (
            <defs>
              <clipPath id={`clipPath-${clipPathId}`}>
                <rect
                  x={needClipX ? left : left - width / 2}
                  y={needClipY ? top : top - height / 2}
                  width={needClipX ? width : width * 2}
                  height={needClipY ? height : height * 2}
                />
              </clipPath>
            </defs>
          ) : null}
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
          {this.renderErrorBar(needClip, clipPathId)}
          {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, data)}
        </Layer>
      </CartesianGraphicalItemContext>
    );
  }
}
