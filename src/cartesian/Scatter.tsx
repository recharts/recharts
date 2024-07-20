/**
 * @fileOverview Render a group of scatters
 */
import React, { PureComponent, ReactElement } from 'react';
import Animate from 'react-smooth';

import isNil from 'lodash/isNil';
import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { ImplicitLabelListType, LabelList } from '../component/LabelList';
import { findAllByType, filterProps } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { ZAxis, Props as ZAxisProps } from './ZAxis';
import { Curve, Props as CurveProps, CurveType } from '../shape/Curve';
import { ErrorBar, Props as ErrorBarProps } from './ErrorBar';
import { Cell } from '../component/Cell';
import { uniqueId, interpolateNumber, getLinearRegression } from '../util/DataUtils';
import { getValueByDataKey, getCateCoordinateOfLine, getTooltipNameProp, RechartsScale } from '../util/ChartUtils';
import {
  LegendType,
  AnimationTiming,
  D3Scale,
  ChartOffset,
  DataKey,
  TickItem,
  adaptEventsOfChild,
  PresentationAttributesAdaptChildEvent,
  AnimationDuration,
  ActiveShape,
  SymbolType,
} from '../util/types';
import { TooltipType } from '../component/DefaultTooltipContent';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { ScatterSymbol } from '../util/ScatterUtils';
import { InnerSymbolsProp } from '../shape/Symbols';
import type { Payload as LegendPayload } from '../component/DefaultLegendContent';
import { useLegendPayloadDispatch } from '../context/legendPayloadContext';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
  useTooltipContext,
} from '../context/tooltipContext';
import { TooltipPayload, TooltipPayloadConfiguration, TooltipPayloadEntry } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { SetCartesianGraphicalItem } from '../state/SetCartesianGraphicalItem';
import { CartesianGraphicalItemContext } from '../context/CartesianGraphicalItemContext';
import { AxisSettings, ZAxisSettings } from '../state/axisMapSlice';

interface ScatterPointNode {
  x?: number | string;
  y?: number | string;
  z?: number | string;
}

export interface ScatterPointItem {
  cx?: number;
  cy?: number;
  size?: number;
  node?: ScatterPointNode;
  payload?: any;
  tooltipPayload?: ReadonlyArray<TooltipPayload>;
}

export type ScatterCustomizedShape = ActiveShape<ScatterPointItem, SVGPathElement & InnerSymbolsProp> | SymbolType;

interface ScatterProps {
  data?: any[];
  xAxisId?: string | number;
  yAxisId?: string | number;
  zAxisId?: string | number;

  left?: number;
  top?: number;
  width?: number;
  height?: number;

  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  zAxis?: Omit<ZAxisProps, 'scale'> & { scale: D3Scale<string | number> };

  dataKey?: DataKey<any>;

  line?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | CurveProps | boolean;
  lineType?: 'fitting' | 'joint';
  lineJointType?: CurveType;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  className?: string;
  name?: string | number;

  activeShape?: ScatterCustomizedShape;
  shape?: ScatterCustomizedShape;
  points?: ScatterPointItem[];
  hide?: boolean;
  label?: ImplicitLabelListType<any>;

  isAnimationActive?: boolean;
  animationId?: number;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}

export type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & ScatterProps;

interface State {
  isAnimationFinished?: boolean;
  prevPoints?: ReadonlyArray<ScatterPointItem>;
  curPoints?: ReadonlyArray<ScatterPointItem>;
  prevAnimationId?: number;
}

type ScatterComposedData = ChartOffset & {
  points: ReadonlyArray<ScatterPointItem>;
};

const computeLegendPayloadFromScatterProps = (props: Props): Array<LegendPayload> => {
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

function SetScatterLegend(props: Props): null {
  useLegendPayloadDispatch(computeLegendPayloadFromScatterProps, props);
  return null;
}

type ScatterSymbolsProps = {
  points: ScatterPointItem[];
  allOtherScatterProps: Props;
};

function ScatterSymbols(props: ScatterSymbolsProps) {
  const { points, allOtherScatterProps } = props;
  const { shape, activeShape } = allOtherScatterProps;
  const baseProps = filterProps(allOtherScatterProps, false);

  const { index: activeIndex, active: isTooltipActive } = useTooltipContext();
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherScatterProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherScatterProps.dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherScatterProps.dataKey);

  return (
    <>
      {points.map((entry, i) => {
        const isActive = isTooltipActive && activeShape && activeIndex === i;
        const option = isActive ? activeShape : shape;
        const symbolProps = { key: `symbol-${i}`, ...baseProps, ...entry };

        const onMouseEnter = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error the types need a bit of attention
          onMouseEnterFromContext(entry, i, e);
        };
        const onMouseLeave = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error the types need a bit of attention
          onMouseLeaveFromContext(entry, i, e);
        };
        const onClick = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
          // @ts-expect-error the types need a bit of attention
          onClickFromContext(entry, i, e);
        };

        return (
          <Layer
            className="recharts-scatter-symbol"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            // eslint-disable-next-line react/no-array-index-key
            key={`symbol-${entry?.cx}-${entry?.cy}-${entry?.size}-${i}`}
            role="img"
          >
            <ScatterSymbol option={option} isActive={isActive} {...symbolProps} />
          </Layer>
        );
      })}
    </>
  );
}

function getTooltipEntrySettings(props: Props): TooltipPayloadConfiguration {
  const { dataKey, points, stroke, strokeWidth, fill, name, hide, tooltipType } = props;
  return {
    dataDefinedOnItem: points.map((p: ScatterPointItem) => p.tooltipPayload),
    settings: {
      stroke,
      strokeWidth,
      fill,
      nameKey: undefined,
      dataKey,
      name: getTooltipNameProp(name, dataKey),
      hide,
      type: tooltipType,
      color: fill,
      unit: '', // why doesn't Scatter support unit?
    },
  };
}

const noErrorBars: never[] = [];

type AxisWithScale = Omit<AxisSettings, 'scale'> & { scale: RechartsScale };

function computeScatterPoints({
  displayedData,
  xAxis,
  yAxis,
  zAxis,
  scatterSettings,
  xAxisTicks,
  yAxisTicks,
  cells,
}: {
  displayedData: ReadonlyArray<any>;
  xAxis: AxisWithScale;
  yAxis: AxisWithScale;
  zAxis: ZAxisSettings;
  scatterSettings: {
    dataKey: DataKey<any> | undefined;
    tooltipType: TooltipType;
    name: string | number;
  };
  xAxisTicks: TickItem[];
  yAxisTicks: TickItem[];
  cells: ReadonlyArray<ReactElement> | undefined;
}): ReadonlyArray<ScatterPointItem> {
  const xAxisDataKey = isNil(xAxis.dataKey) ? scatterSettings.dataKey : xAxis.dataKey;
  const yAxisDataKey = isNil(yAxis.dataKey) ? scatterSettings.dataKey : yAxis.dataKey;
  const zAxisDataKey = zAxis && zAxis.dataKey;
  const defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
  const defaultZ = defaultRangeZ && defaultRangeZ[0];
  const xBandSize = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
  const yBandSize = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
  return displayedData.map((entry, index): ScatterPointItem => {
    const x = getValueByDataKey(entry, xAxisDataKey);
    const y = getValueByDataKey(entry, yAxisDataKey);
    const z = (!isNil(zAxisDataKey) && getValueByDataKey(entry, zAxisDataKey)) || '-';

    const tooltipPayload: Array<TooltipPayloadEntry> = [
      {
        // @ts-expect-error name prop should not have dataKey in it
        name: isNil(xAxis.dataKey) ? scatterSettings.name : xAxis.name || xAxis.dataKey,
        unit: xAxis.unit || '',
        // @ts-expect-error getValueByDataKey does not validate the output type
        value: x,
        payload: entry,
        dataKey: xAxisDataKey,
        type: scatterSettings.tooltipType,
      },
      {
        // @ts-expect-error name prop should not have dataKey in it
        name: isNil(yAxis.dataKey) ? scatterSettings.name : yAxis.name || yAxis.dataKey,
        unit: yAxis.unit || '',
        // @ts-expect-error getValueByDataKey does not validate the output type
        value: y,
        payload: entry,
        dataKey: yAxisDataKey,
        type: scatterSettings.tooltipType,
      },
    ];

    if (z !== '-') {
      tooltipPayload.push({
        // @ts-expect-error name prop should not have dataKey in it
        name: zAxis.name || zAxis.dataKey,
        unit: zAxis.unit || '',
        // @ts-expect-error getValueByDataKey does not validate the output type
        value: z,
        payload: entry,
        dataKey: zAxisDataKey,
        type: scatterSettings.tooltipType,
      });
    }

    const cx = getCateCoordinateOfLine({
      axis: xAxis,
      ticks: xAxisTicks,
      bandSize: xBandSize,
      entry,
      index,
      dataKey: xAxisDataKey,
    });
    const cy = getCateCoordinateOfLine({
      axis: yAxis,
      ticks: yAxisTicks,
      bandSize: yBandSize,
      entry,
      index,
      dataKey: yAxisDataKey,
    });
    // @ts-expect-error getValueByDataKey does not validate the output type
    const size = z !== '-' ? zAxis.scale(z) : defaultZ;
    const radius = Math.sqrt(Math.max(size, 0) / Math.PI);

    return {
      ...entry,
      cx,
      cy,
      x: cx - radius,
      y: cy - radius,
      xAxis,
      yAxis,
      zAxis,
      width: 2 * radius,
      height: 2 * radius,
      size,
      node: { x, y, z },
      tooltipPayload,
      tooltipPosition: { x: cx, y: cy },
      payload: entry,
      ...(cells && cells[index] && cells[index].props),
    };
  });
}

export class Scatter extends PureComponent<Props, State> {
  static displayName = 'Scatter';

  static defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: 'circle',
    lineType: 'joint',
    lineJointType: 'linear',
    data: [] as any[],
    shape: 'circle',
    hide: false,

    isAnimationActive: !Global.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'linear',
  };

  /**
   * Compose the data of each group
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  static getComposedData = ({
    xAxis,
    yAxis,
    zAxis,
    item,
    displayedData,
    xAxisTicks,
    yAxisTicks,
    offset,
  }: {
    props: Props;
    xAxis: Props['xAxis'];
    yAxis: Props['yAxis'];
    zAxis: Props['zAxis'];
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    item: Scatter;
    bandSize: number;
    displayedData: any[];
    offset: ChartOffset;
  }): ScatterComposedData => {
    const cells = findAllByType(item.props.children, Cell);
    const points: ReadonlyArray<ScatterPointItem> = computeScatterPoints({
      displayedData,
      // @ts-expect-error getComposedData types are not matching, TODO switch this to redux
      xAxis,
      // @ts-expect-error getComposedData types are not matching, TODO switch this to redux
      yAxis,
      // @ts-expect-error getComposedData types are not matching, TODO switch this to redux
      zAxis,
      // @ts-expect-error getComposedData types are not matching, TODO switch this to redux
      scatterSettings: item.props,
      xAxisTicks,
      yAxisTicks,
      cells,
    });

    return {
      points,
      ...offset,
    };
  };

  state: State = { isAnimationFinished: false };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
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

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
  };

  id = uniqueId('recharts-scatter-');

  renderSymbolsStatically(points: ScatterPointItem[]) {
    return <ScatterSymbols points={points} allOtherScatterProps={this.props} />;
  }

  renderSymbolsWithAnimation() {
    const { points, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = this.props;
    const { prevPoints } = this.state;

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        from={{ t: 0 }}
        to={{ t: 1 }}
        key={`pie-${animationId}`}
        onAnimationEnd={this.handleAnimationEnd}
        onAnimationStart={this.handleAnimationStart}
      >
        {({ t }: { t: number }) => {
          const stepData = points.map((entry, index) => {
            const prev = prevPoints && prevPoints[index];

            if (prev) {
              const interpolatorCx = interpolateNumber(prev.cx, entry.cx);
              const interpolatorCy = interpolateNumber(prev.cy, entry.cy);
              const interpolatorSize = interpolateNumber(prev.size, entry.size);

              return {
                ...entry,
                cx: interpolatorCx(t),
                cy: interpolatorCy(t),
                size: interpolatorSize(t),
              };
            }

            const interpolator = interpolateNumber(0, entry.size);

            return { ...entry, size: interpolator(t) };
          });

          return <Layer>{this.renderSymbolsStatically(stepData)}</Layer>;
        }}
      </Animate>
    );
  }

  renderSymbols() {
    const { points, isAnimationActive } = this.props;
    const { prevPoints } = this.state;

    if (isAnimationActive && points && points.length && (!prevPoints || !isEqual(prevPoints, points))) {
      return this.renderSymbolsWithAnimation();
    }

    return this.renderSymbolsStatically(points);
  }

  renderErrorBar() {
    const { isAnimationActive } = this.props;
    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }

    const { points, xAxis, yAxis, children } = this.props;
    const errorBarItems = findAllByType(children, ErrorBar);

    if (!errorBarItems) {
      return null;
    }

    return errorBarItems.map((item: ReactElement<ErrorBarProps>, i: number) => {
      const { direction, dataKey: errorDataKey } = item.props;
      return React.cloneElement(item, {
        key: `${direction}-${errorDataKey}-${points[i]}`,
        data: points,
        xAxis,
        yAxis,
        layout: direction === 'x' ? 'vertical' : 'horizontal',
        // @ts-expect-error getValueByDataKey does not validate the output type
        dataPointFormatter: (dataPoint: ScatterPointItem, dataKey: Props['dataKey']) => {
          return {
            x: dataPoint.cx,
            y: dataPoint.cy,
            value: direction === 'x' ? +dataPoint.node.x : +dataPoint.node.y,
            errorVal: getValueByDataKey(dataPoint, dataKey),
          };
        },
      });
    });
  }

  renderLine() {
    const { points, line, lineType, lineJointType } = this.props;
    const scatterProps = filterProps(this.props, false);
    const customLineProps = filterProps(line, false);
    let linePoints, lineItem;

    if (lineType === 'joint') {
      linePoints = points.map(entry => ({ x: entry.cx, y: entry.cy }));
    } else if (lineType === 'fitting') {
      const { xmin, xmax, a, b } = getLinearRegression(points);
      const linearExp = (x: number) => a * x + b;
      linePoints = [
        { x: xmin, y: linearExp(xmin) },
        { x: xmax, y: linearExp(xmax) },
      ];
    }
    const lineProps = {
      ...scatterProps,
      fill: 'none',
      stroke: scatterProps && scatterProps.fill,
      ...customLineProps,
      points: linePoints,
    };

    if (React.isValidElement(line)) {
      lineItem = React.cloneElement(line as any, lineProps);
    } else if (isFunction(line)) {
      lineItem = line(lineProps);
    } else {
      lineItem = <Curve {...lineProps} type={lineJointType} />;
    }

    return (
      <Layer className="recharts-scatter-line" key="recharts-scatter-line">
        {lineItem}
      </Layer>
    );
  }

  render() {
    const { hide, points, line, className, xAxis, yAxis, left, top, width, height, id, isAnimationActive } = this.props;
    if (hide || !points || !points.length) {
      return (
        <>
          <SetCartesianGraphicalItem
            data={this.props.data}
            xAxisId={this.props.xAxisId}
            yAxisId={this.props.yAxisId}
            dataKey={this.props.dataKey}
            errorBars={noErrorBars}
            // scatter doesn't stack
            stackId={undefined}
            hide={this.props.hide}
          />
          <SetScatterLegend {...this.props} />
          <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={this.props} />
        </>
      );
    }
    const { isAnimationFinished } = this.state;
    const layerClass = clsx('recharts-scatter', className);
    const needClipX = xAxis && xAxis.allowDataOverflow;
    const needClipY = yAxis && yAxis.allowDataOverflow;
    const needClip = needClipX || needClipY;
    const clipPathId = isNil(id) ? this.id : id;

    return (
      <CartesianGraphicalItemContext
        data={this.props.data}
        xAxisId={this.props.xAxisId}
        yAxisId={this.props.yAxisId}
        dataKey={this.props.dataKey}
        // scatter doesn't stack
        stackId={undefined}
        hide={this.props.hide}
      >
        <Layer className={layerClass} clipPath={needClip ? `url(#clipPath-${clipPathId})` : null}>
          <SetScatterLegend {...this.props} />
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
          {line && this.renderLine()}
          {this.renderErrorBar()}
          <Layer key="recharts-scatter-symbols">{this.renderSymbols()}</Layer>
          {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)}
        </Layer>
      </CartesianGraphicalItemContext>
    );
  }
}
