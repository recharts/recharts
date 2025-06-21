import * as React from 'react';
import { Component, MutableRefObject, ReactElement, useCallback, useMemo, useRef, useState } from 'react';

import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { ImplicitLabelListType, LabelList } from '../component/LabelList';
import { filterProps, findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { ZAxis } from './ZAxis';
import { Curve, CurveType, Props as CurveProps } from '../shape/Curve';
import type { ErrorBarDataItem, ErrorBarDirection } from './ErrorBar';
import { Cell } from '../component/Cell';
import { getLinearRegression, interpolateNumber, isNullish, uniqueId } from '../util/DataUtils';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  Coordinate,
  DataKey,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  SymbolType,
  TickItem,
} from '../util/types';
import { TooltipType } from '../component/DefaultTooltipContent';
import { ScatterSymbol } from '../util/ScatterUtils';
import { InnerSymbolsProp } from '../shape/Symbols';
import type { LegendPayload } from '../component/DefaultLegendContent';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayload, TooltipPayloadConfiguration, TooltipPayloadEntry } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { CartesianGraphicalItemContext, SetErrorBarContext } from '../context/CartesianGraphicalItemContext';
import { AxisId } from '../state/cartesianAxisSlice';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { ResolvedScatterSettings, selectScatterPoints } from '../state/selectors/scatterSelectors';
import { useAppSelector } from '../state/hooks';
import { BaseAxisWithScale, ZAxisWithScale } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { Animate } from '../animation/Animate';

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
  tooltipPosition: Coordinate;
}

export type ScatterCustomizedShape = ActiveShape<ScatterPointItem, SVGPathElement & InnerSymbolsProp> | SymbolType;

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface ScatterInternalProps {
  data?: any[];
  xAxisId: string | number;
  yAxisId: string | number;
  zAxisId: string | number;

  dataKey?: DataKey<any>;

  line?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | CurveProps | boolean;
  lineType: 'fitting' | 'joint';
  lineJointType: CurveType;
  legendType: LegendType;
  tooltipType?: TooltipType;
  className?: string;
  name?: string;

  activeShape?: ScatterCustomizedShape;
  shape: ScatterCustomizedShape;
  points: ReadonlyArray<ScatterPointItem>;
  hide: boolean;
  label?: ImplicitLabelListType<any>;

  isAnimationActive: boolean;
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;

  needClip: boolean;
}

/**
 * External props, intended for end users to fill in
 */
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
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}

/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type BaseScatterSvgProps = Omit<PresentationAttributesAdaptChildEvent<any, SVGElement>, 'points' | 'ref'>;

type InternalProps = BaseScatterSvgProps & ScatterInternalProps;

export type Props = BaseScatterSvgProps & ScatterProps;

const computeLegendPayloadFromScatterProps = (props: Props): ReadonlyArray<LegendPayload> => {
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

type ScatterSymbolsProps = {
  points: ReadonlyArray<ScatterPointItem>;
  showLabels: boolean;
  allOtherScatterProps: InternalProps;
};

function ScatterLine({ points, props }: { points: ReadonlyArray<ScatterPointItem>; props: InternalProps }) {
  const { line, lineType, lineJointType } = props;

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
  } else if (typeof line === 'function') {
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

function ScatterSymbols(props: ScatterSymbolsProps) {
  const { points, showLabels, allOtherScatterProps } = props;
  const { shape, activeShape, dataKey } = allOtherScatterProps;
  const baseProps = filterProps(allOtherScatterProps, false);

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherScatterProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, allOtherScatterProps.dataKey);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, allOtherScatterProps.dataKey);
  if (points == null) {
    return null;
  }
  return (
    <>
      <ScatterLine points={points} props={allOtherScatterProps} />
      {points.map((entry, i) => {
        const isActive = activeShape && activeIndex === String(i);
        const option = isActive ? activeShape : shape;
        const symbolProps = {
          key: `symbol-${i}`,
          ...baseProps,
          ...entry,
          [DATA_ITEM_INDEX_ATTRIBUTE_NAME]: i,
          [DATA_ITEM_DATAKEY_ATTRIBUTE_NAME]: String(dataKey),
        };

        return (
          <Layer
            className="recharts-scatter-symbol"
            {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
            // @ts-expect-error the types need a bit of attention
            onMouseEnter={onMouseEnterFromContext(entry, i)}
            // @ts-expect-error the types need a bit of attention
            onMouseLeave={onMouseLeaveFromContext(entry, i)}
            // @ts-expect-error the types need a bit of attention
            onClick={onClickFromContext(entry, i)}
            // eslint-disable-next-line react/no-array-index-key
            key={`symbol-${entry?.cx}-${entry?.cy}-${entry?.size}-${i}`}
          >
            <ScatterSymbol option={option} isActive={isActive} {...symbolProps} />
          </Layer>
        );
      })}
      {showLabels && LabelList.renderCallByParent(allOtherScatterProps, points)}
    </>
  );
}

function SymbolsWithAnimation({
  previousPointsRef,
  props,
}: {
  previousPointsRef: MutableRefObject<ReadonlyArray<ScatterPointItem>>;
  props: InternalProps;
}) {
  const { points, isAnimationActive, animationBegin, animationDuration, animationEasing } = props;
  const prevPoints = previousPointsRef.current;
  const animationId = useAnimationId(props, 'recharts-scatter-');

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationEnd = useCallback(() => {
    // Scatter doesn't have onAnimationEnd prop, and if we want to add it we do it here
    // if (typeof onAnimationEnd === 'function') {
    //   onAnimationEnd();
    // }
    setIsAnimating(false);
  }, []);

  const handleAnimationStart = useCallback(() => {
    // Scatter doesn't have onAnimationStart prop, and if we want to add it we do it here
    // if (typeof onAnimationStart === 'function') {
    //   onAnimationStart();
    // }
    setIsAnimating(true);
  }, []);
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
            ? points
            : points.map((entry, index) => {
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

        if (t > 0) {
          // eslint-disable-next-line no-param-reassign
          previousPointsRef.current = stepData;
        }
        return (
          <Layer>
            <ScatterSymbols points={stepData} allOtherScatterProps={props} showLabels={!isAnimating} />
          </Layer>
        );
      }}
    </Animate>
  );
}

function RenderSymbols(props: InternalProps) {
  const { points, isAnimationActive } = props;
  const previousPointsRef = useRef<ReadonlyArray<ScatterPointItem> | null>(null);

  const prevPoints = previousPointsRef.current;

  if (isAnimationActive && points && points.length && (!prevPoints || prevPoints !== points)) {
    return <SymbolsWithAnimation props={props} previousPointsRef={previousPointsRef} />;
  }

  return <ScatterSymbols points={points} allOtherScatterProps={props} showLabels />;
}

type InputRequiredToComputeTooltipEntrySettings = {
  dataKey?: DataKey<any> | undefined;
  points?: ReadonlyArray<ScatterPointItem>;
  stroke?: string;
  strokeWidth?: number | string;
  fill?: string;
  name?: string;
  hide?: boolean;
  tooltipType?: TooltipType;
};

function getTooltipEntrySettings(props: InputRequiredToComputeTooltipEntrySettings): TooltipPayloadConfiguration {
  const { dataKey, points, stroke, strokeWidth, fill, name, hide, tooltipType } = props;
  return {
    dataDefinedOnItem: points?.map((p: ScatterPointItem) => p.tooltipPayload),
    positions: points?.map((p: ScatterPointItem) => p.tooltipPosition),
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
  scatterSettings: ResolvedScatterSettings;
  xAxisTicks: TickItem[];
  yAxisTicks: TickItem[];
  cells: ReadonlyArray<ReactElement> | undefined;
}): ReadonlyArray<ScatterPointItem> {
  const xAxisDataKey = isNullish(xAxis.dataKey) ? scatterSettings.dataKey : xAxis.dataKey;
  const yAxisDataKey = isNullish(yAxis.dataKey) ? scatterSettings.dataKey : yAxis.dataKey;
  const zAxisDataKey = zAxis && zAxis.dataKey;
  const defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
  const defaultZ = defaultRangeZ && defaultRangeZ[0];
  const xBandSize = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
  const yBandSize = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
  return displayedData.map((entry, index): ScatterPointItem => {
    const x = getValueByDataKey(entry, xAxisDataKey);
    const y = getValueByDataKey(entry, yAxisDataKey);
    const z = (!isNullish(zAxisDataKey) && getValueByDataKey(entry, zAxisDataKey)) || '-';

    const tooltipPayload: Array<TooltipPayloadEntry> = [
      {
        // @ts-expect-error name prop should not have dataKey in it
        name: isNullish(xAxis.dataKey) ? scatterSettings.name : xAxis.name || xAxis.dataKey,
        unit: xAxis.unit || '',
        // @ts-expect-error getValueByDataKey does not validate the output type
        value: x,
        payload: entry,
        dataKey: xAxisDataKey,
        type: scatterSettings.tooltipType,
      },
      {
        // @ts-expect-error name prop should not have dataKey in it
        name: isNullish(yAxis.dataKey) ? scatterSettings.name : yAxis.name || yAxis.dataKey,
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

function ScatterWithId(props: InternalProps) {
  const idRef = useRef(uniqueId('recharts-scatter-'));

  const { hide, points, className, needClip, xAxisId, yAxisId, id, children } = props;
  if (hide) {
    return null;
  }
  const layerClass = clsx('recharts-scatter', className);
  const clipPathId = isNullish(id) ? idRef.current : id;

  return (
    <Layer className={layerClass} clipPath={needClip ? `url(#clipPath-${clipPathId})` : null}>
      {needClip && (
        <defs>
          <GraphicalItemClipPath clipPathId={clipPathId} xAxisId={xAxisId} yAxisId={yAxisId} />
        </defs>
      )}
      <SetErrorBarContext
        xAxisId={xAxisId}
        yAxisId={yAxisId}
        data={points}
        dataPointFormatter={errorBarDataPointFormatter}
        errorBarOffset={0}
      >
        {children}
      </SetErrorBarContext>
      <Layer key="recharts-scatter-symbols">
        <RenderSymbols {...props} />
      </Layer>
    </Layer>
  );
}

const defaultScatterProps = {
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
} as const satisfies Partial<Props>;

function ScatterImpl(props: Props) {
  const {
    animationBegin,
    animationDuration,
    animationEasing,
    hide,
    isAnimationActive,
    legendType,
    lineJointType,
    lineType,
    shape,
    xAxisId,
    yAxisId,
    zAxisId,
    ...everythingElse
  } = resolveDefaultProps(props, defaultScatterProps);

  const { needClip } = useNeedsClip(xAxisId, yAxisId);
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

  const isPanorama = useIsPanorama();
  const points = useAppSelector(state => {
    return selectScatterPoints(state, xAxisId, yAxisId, zAxisId, scatterSettings, cells, isPanorama);
  });
  if (needClip == null) {
    return null;
  }
  /*
   * Do not check if points is null here!
   * It is important that the animation component receives `null` as points
   * so that it can reset its internal state and start animating to new positions.
   */
  // if (points == null)
  return (
    <>
      <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={{ ...props, points }} />
      <ScatterWithId
        {...everythingElse}
        xAxisId={xAxisId}
        yAxisId={yAxisId}
        zAxisId={zAxisId}
        lineType={lineType}
        lineJointType={lineJointType}
        legendType={legendType}
        shape={shape}
        hide={hide}
        isAnimationActive={isAnimationActive}
        animationBegin={animationBegin}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
        points={points}
        needClip={needClip}
      />
    </>
  );
}

// eslint-disable-next-line react/prefer-stateless-function
export class Scatter extends Component<Props> {
  static displayName = 'Scatter';

  static defaultProps = defaultScatterProps;

  render() {
    // Report all props to Redux store first, before calling any hooks, to avoid circular dependencies.
    return (
      <CartesianGraphicalItemContext
        type="scatter"
        data={this.props.data}
        xAxisId={this.props.xAxisId}
        yAxisId={this.props.yAxisId}
        zAxisId={this.props.zAxisId}
        dataKey={this.props.dataKey}
        // scatter doesn't stack
        stackId={undefined}
        hide={this.props.hide}
        barSize={undefined}
      >
        <SetLegendPayload legendPayload={computeLegendPayloadFromScatterProps(this.props)} />
        <ScatterImpl {...this.props} />
      </CartesianGraphicalItemContext>
    );
  }
}
