/**
 * @fileOverview Render a group of scatters
 */
// eslint-disable-next-line max-classes-per-file
import React, { Component, PureComponent, ReactElement, useMemo } from 'react';
import Animate from 'react-smooth';

import isNil from 'lodash/isNil';
import isEqual from 'lodash/isEqual';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { ImplicitLabelListType, LabelList } from '../component/LabelList';
import { filterProps, findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { ZAxis } from './ZAxis';
import { Curve, CurveType, Props as CurveProps } from '../shape/Curve';
import type { ErrorBarDataItem, ErrorBarDirection } from './ErrorBar';
import { Cell } from '../component/Cell';
import { getLinearRegression, interpolateNumber, uniqueId } from '../util/DataUtils';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  DataKey,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  SymbolType,
  TickItem,
} from '../util/types';
import { TooltipType } from '../component/DefaultTooltipContent';
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
import { CartesianGraphicalItemContext, SetErrorBarContext } from '../context/CartesianGraphicalItemContext';
import { AxisId } from '../state/axisMapSlice';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { ResolvedScatterSettings, selectScatterPoints } from '../state/selectors/scatterSelectors';
import { useAppSelector } from '../state/hooks';
import { BaseAxisWithScale, ZAxisWithScale } from '../state/selectors/axisSelectors';

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
  tooltipPayload?: TooltipPayload;
}

export type ScatterCustomizedShape = ActiveShape<ScatterPointItem, SVGPathElement & InnerSymbolsProp> | SymbolType;

interface ScatterInternalProps {
  data?: any[];
  xAxisId?: string | number;
  yAxisId?: string | number;
  zAxisId?: string | number;

  dataKey?: DataKey<any>;

  line?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | CurveProps | boolean;
  lineType?: 'fitting' | 'joint';
  lineJointType?: CurveType;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  className?: string;
  name?: string;

  activeShape?: ScatterCustomizedShape;
  shape?: ScatterCustomizedShape;
  points?: ReadonlyArray<ScatterPointItem>;
  hide?: boolean;
  label?: ImplicitLabelListType<any>;

  isAnimationActive?: boolean;
  animationId?: number;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;

  needClip?: boolean;
}

interface ScatterProps {
  data?: any[];
  xAxisId?: AxisId;
  yAxisId?: string | number;
  zAxisId?: string | number;

  dataKey?: DataKey<any>;

  line?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | CurveProps | boolean;
  lineType?: 'fitting' | 'joint';
  lineJointType?: CurveType;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  className?: string;
  name?: string;

  activeShape?: ScatterCustomizedShape;
  shape?: ScatterCustomizedShape;
  hide?: boolean;
  label?: ImplicitLabelListType<any>;

  isAnimationActive?: boolean;
  animationId?: number;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}

type InternalProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'points'> & ScatterInternalProps;

export type Props = PresentationAttributesAdaptChildEvent<any, SVGElement> & ScatterProps;

interface State {
  isAnimationFinished?: boolean;
  prevPoints?: ReadonlyArray<ScatterPointItem>;
  curPoints?: ReadonlyArray<ScatterPointItem>;
  prevAnimationId?: number;
}

type ScatterComposedData = {
  points: ReadonlyArray<ScatterPointItem>;
};

const computeLegendPayloadFromScatterProps = (props: InternalProps): Array<LegendPayload> => {
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

function SetScatterLegend(props: InternalProps): null {
  useLegendPayloadDispatch(computeLegendPayloadFromScatterProps, props);
  return null;
}

type ScatterSymbolsProps = {
  points: ReadonlyArray<ScatterPointItem>;
  allOtherScatterProps: InternalProps;
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

function getTooltipEntrySettings(props: InternalProps): TooltipPayloadConfiguration {
  const { dataKey, points, stroke, strokeWidth, fill, name, hide, tooltipType } = props;
  return {
    dataDefinedOnItem: points?.map((p: ScatterPointItem) => p.tooltipPayload),
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

export function computeScatterPoints({
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
  xAxis: BaseAxisWithScale;
  yAxis: BaseAxisWithScale;
  zAxis: ZAxisWithScale;
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
    const size = z !== '-' ? zAxis.scale(z) : defaultZ;
    const radius = Math.sqrt(Math.max(size, 0) / Math.PI);

    return {
      ...entry,
      cx,
      cy,
      x: cx - radius,
      y: cy - radius,
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

function ScatterLine(props: InternalProps) {
  const { points, line, lineType, lineJointType } = props;

  if (!line) {
    return null;
  }

  const scatterProps = filterProps(props, false);
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

const errorBarDataPointFormatter = (
  dataPoint: ScatterPointItem,
  dataKey: Props['dataKey'],
  direction: ErrorBarDirection,
): ErrorBarDataItem => {
  return {
    x: dataPoint.cx,
    y: dataPoint.cy,
    value: direction === 'x' ? +dataPoint.node.x : +dataPoint.node.y,
    // @ts-expect-error getValueByDataKey does not validate the output type
    errorVal: getValueByDataKey(dataPoint, dataKey),
  };
};

class ScatterWithState extends PureComponent<InternalProps, State> {
  state: State = { isAnimationFinished: false };

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

  handleAnimationEnd = () => {
    this.setState({ isAnimationFinished: true });
  };

  handleAnimationStart = () => {
    this.setState({ isAnimationFinished: false });
  };

  id = uniqueId('recharts-scatter-');

  renderSymbolsStatically(points: ReadonlyArray<ScatterPointItem>) {
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

  render() {
    const { hide, points, className, needClip, xAxisId, yAxisId, id, isAnimationActive } = this.props;
    if (hide || !points || !points.length) {
      return null;
    }
    const { isAnimationFinished } = this.state;
    const layerClass = clsx('recharts-scatter', className);
    const clipPathId = isNil(id) ? this.id : id;
    return (
      <Layer className={layerClass} clipPath={needClip ? `url(#clipPath-${clipPathId})` : null}>
        {needClip && (
          <defs>
            <GraphicalItemClipPath clipPathId={clipPathId} xAxisId={xAxisId} yAxisId={yAxisId} />
          </defs>
        )}
        <ScatterLine {...this.props} />
        <SetErrorBarContext
          xAxisId={xAxisId}
          yAxisId={yAxisId}
          data={points}
          dataPointFormatter={errorBarDataPointFormatter}
          errorBarOffset={0}
        >
          {this.props.children}
        </SetErrorBarContext>
        <Layer key="recharts-scatter-symbols">{this.renderSymbols()}</Layer>
        {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)}
      </Layer>
    );
  }
}

function ScatterImpl(props: InternalProps) {
  const { needClip } = useNeedsClip(props.xAxisId, props.yAxisId);
  const cells = useMemo(() => findAllByType(props.children, Cell), [props.children]);
  const scatterSettings: ResolvedScatterSettings = useMemo(
    () => ({
      name: props.name,
      tooltipType: props.tooltipType,
      data: props.data,
      dataKey: props.dataKey,
    }),
    [props.data, props.dataKey, props.name, props.tooltipType],
  );
  const points = useAppSelector(state => {
    return selectScatterPoints(state, props.xAxisId, props.yAxisId, props.zAxisId, scatterSettings, cells);
  });
  const { ref, points: _pointsFromClonedProps, ...everythingElse } = props;

  return (
    <>
      <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={{ ...props, points }} />
      <ScatterWithState {...everythingElse} points={points} needClip={needClip} />
    </>
  );
}

export class Scatter extends Component<InternalProps> {
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
  }: {
    props: InternalProps;
    xAxis?: BaseAxisWithScale;
    yAxis?: BaseAxisWithScale;
    zAxis?: ZAxisWithScale;
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    item: ScatterWithState;
    bandSize: number;
    displayedData: any[];
  }): ScatterComposedData => {
    const cells = findAllByType(item.props.children, Cell);
    const points: ReadonlyArray<ScatterPointItem> = computeScatterPoints({
      displayedData,
      xAxis,
      yAxis,
      zAxis,
      // @ts-expect-error getComposedData types are not matching, TODO switch this to redux
      scatterSettings: item.props,
      xAxisTicks,
      yAxisTicks,
      cells,
    });

    return {
      points,
    };
  };

  render() {
    // Report all props to Redux store first, before calling any hooks, to avoid circular dependencies.
    return (
      <CartesianGraphicalItemContext
        data={this.props.data}
        xAxisId={this.props.xAxisId}
        yAxisId={this.props.yAxisId}
        zAxisId={this.props.zAxisId}
        dataKey={this.props.dataKey}
        // scatter doesn't stack
        stackId={undefined}
        hide={this.props.hide}
      >
        <SetScatterLegend {...this.props} />
        <ScatterImpl {...this.props} />
      </CartesianGraphicalItemContext>
    );
  }
}
