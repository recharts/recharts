import * as React from 'react';
import { MutableRefObject, ReactElement, ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  LabelListFromLabelProp,
  ImplicitLabelListType,
} from '../component/LabelList';
import { filterProps, findAllByType } from '../util/ReactUtils';
import { Global } from '../util/Global';
import { ZAxis } from './ZAxis';
import { Curve, CurveType, Props as CurveProps } from '../shape/Curve';
import type { ErrorBarDataItem, ErrorBarDirection } from './ErrorBar';
import { Cell } from '../component/Cell';
import { getLinearRegression, interpolateNumber, isNullish } from '../util/DataUtils';
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
import { SetErrorBarContext } from '../context/ErrorBarContext';
import { AxisId } from '../state/cartesianAxisSlice';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { selectScatterPoints } from '../state/selectors/scatterSelectors';
import { useAppSelector } from '../state/hooks';
import { BaseAxisWithScale, ZAxisWithScale } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { ScatterSettings } from '../state/types/ScatterSettings';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { useViewBox } from '../context/chartLayoutContext';

interface ScatterPointNode {
  x?: number | string;
  y?: number | string;
  z?: number | string;
}

export interface ScatterPointItem {
  /**
   * The x coordinate of the point center in pixels.
   */
  cx: number;
  /**
   * The y coordinate of the point center in pixels.
   */
  cy: number;
  /**
   * The x coordinate (in pixels) of the top-left corner of the rectangle that wraps the point.
   */
  x: number;
  /**
   * The y coordinate (in pixels) of the top-left corner of the rectangle that wraps the point.
   */
  y: number;
  /**
   * ScatterPointItem size is an abstract number that is used to calculate the radius of the point.
   * It's not the radius itself, but rather a value that is used to calculate the radius.
   * Interacts with the zAxis range.
   */
  size: number;
  /**
   * Width of the point in pixels.
   */
  width: number;
  /**
   * Height of the point in pixels.
   */
  height: number;
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
  label?: ImplicitLabelListType;

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
  label?: ImplicitLabelListType;

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

  const scatterProps = svgPropertiesNoEvents(props);
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

function ScatterLabelListProvider({
  showLabels,
  points,
  children,
}: {
  showLabels: boolean;
  points: ReadonlyArray<ScatterPointItem>;
  children: ReactNode;
}) {
  const chartViewBox = useViewBox();
  const labelListEntries: ReadonlyArray<CartesianLabelListEntry> = useMemo(() => {
    return points?.map((point): CartesianLabelListEntry => {
      const viewBox = {
        /*
         * Scatter label uses x and y as the reference point for the label,
         * not cx and cy.
         */
        x: point.x,
        /*
         * Scatter label uses x and y as the reference point for the label,
         * not cx and cy.
         */
        y: point.y,
        width: point.width,
        height: point.height,
      };
      return {
        ...viewBox,
        /*
         * Here we put undefined because Scatter shows two values usually, one for X and one for Y.
         * LabelList will see this undefined and will use its own `dataKey` prop to determine which value to show,
         * using the payload below.
         */
        value: undefined,
        payload: point.payload,
        viewBox,
        parentViewBox: chartViewBox,
        fill: undefined,
      };
    });
  }, [chartViewBox, points]);

  return (
    <CartesianLabelListContextProvider value={showLabels ? labelListEntries : null}>
      {children}
    </CartesianLabelListContextProvider>
  );
}

function ScatterSymbols(props: ScatterSymbolsProps) {
  const { points, allOtherScatterProps } = props;
  const { shape, activeShape, dataKey } = allOtherScatterProps;

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

  const { id, ...allOtherPropsWithoutId } = allOtherScatterProps;
  const baseProps = svgPropertiesNoEvents(allOtherPropsWithoutId);

  return (
    <>
      <ScatterLine points={points} props={allOtherPropsWithoutId} />
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

  const showLabels = !isAnimating;

  return (
    <ScatterLabelListProvider showLabels={showLabels} points={points}>
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
          const stepData =
            t === 1
              ? points
              : points?.map((entry, index) => {
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
              <ScatterSymbols points={stepData} allOtherScatterProps={props} showLabels={showLabels} />
            </Layer>
          );
        }}
      </JavascriptAnimate>
      <LabelListFromLabelProp label={props.label} />
    </ScatterLabelListProvider>
  );
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
  scatterSettings: ScatterSettings;
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
  const { hide, points, className, needClip, xAxisId, yAxisId, id } = props;
  const previousPointsRef = useRef<ReadonlyArray<ScatterPointItem> | null>(null);
  if (hide) {
    return null;
  }
  const layerClass = clsx('recharts-scatter', className);
  const clipPathId = id;

  return (
    <Layer className={layerClass} clipPath={needClip ? `url(#clipPath-${clipPathId})` : null} id={id}>
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
        <Layer key="recharts-scatter-symbols">
          <SymbolsWithAnimation props={props} previousPointsRef={previousPointsRef} />
        </Layer>
      </SetErrorBarContext>
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
  const isPanorama = useIsPanorama();

  const points = useAppSelector(state => {
    return selectScatterPoints(state, xAxisId, yAxisId, zAxisId, props.id, cells, isPanorama);
  });
  if (needClip == null) {
    return null;
  }
  if (points == null) {
    return null;
  }
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

export function Scatter(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, defaultScatterProps);
  const isPanorama = useIsPanorama();
  return (
    <RegisterGraphicalItemId id={props.id} type="scatter">
      {id => (
        <>
          <SetLegendPayload legendPayload={computeLegendPayloadFromScatterProps(props)} />
          <SetCartesianGraphicalItem
            type="scatter"
            id={id}
            data={props.data}
            xAxisId={props.xAxisId}
            yAxisId={props.yAxisId}
            zAxisId={props.zAxisId}
            dataKey={props.dataKey}
            hide={props.hide}
            name={props.name}
            tooltipType={props.tooltipType}
            isPanorama={isPanorama}
          />
          <ScatterImpl {...props} id={id} />
        </>
      )}
    </RegisterGraphicalItemId>
  );
}
Scatter.displayName = 'Scatter';
