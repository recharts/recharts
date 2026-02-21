import * as React from 'react';
import { MutableRefObject, ReactElement, ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelListFromLabelProp,
} from '../component/LabelList';
import { findAllByType } from '../util/ReactUtils';
import { Curve, CurveType, Props as CurveProps } from '../shape/Curve';
import { ErrorBarDataItem, ErrorBarDataPointFormatter, ErrorBarDirection } from './ErrorBar';
import { Cell } from '../component/Cell';
import { getLinearRegression, interpolate, isNullish } from '../util/DataUtils';
import { getCateCoordinateOfLine, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  AnimationTiming,
  Coordinate,
  DataConsumer,
  DataKey,
  DataProvider,
  isNonEmptyArray,
  LegendType,
  NonEmptyArray,
  NullableCoordinate,
  PresentationAttributesAdaptChildEvent,
  SymbolType,
  TickItem,
  TrapezoidViewBox,
} from '../util/types';
import { TooltipType } from '../component/DefaultTooltipContent';
import { ScatterShapeProps, ScatterSymbol } from '../util/ScatterUtils';
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
import { BaseAxisWithScale, implicitZAxis, ZAxisWithScale } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';
import { selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME } from '../util/Constants';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { ScatterSettings } from '../state/types/ScatterSettings';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { useViewBox } from '../context/chartLayoutContext';
import { WithIdRequired, WithoutId } from '../util/useUniqueId';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { propsAreEqual } from '../util/propsAreEqual';
import { ChartData } from '../state/chartDataSlice';

export interface ScatterPointNode {
  x?: number | string;
  y?: number | string;
  z?: number | string;
}

/**
 * Scatter coordinates are nullable because sometimes the point value is out of the domain,
 * and we can't compute a valid coordinate for it.
 *
 * Scatter -> Symbol ignores points with null cx or cy so those won't render if using the default shapes.
 * However: the points are exposed via various props and can be used in custom shapes so we keep them around.
 */
export interface ScatterPointItem {
  /**
   * The x coordinate of the point center in pixels.
   */
  cx: number | undefined;
  /**
   * The y coordinate of the point center in pixels.
   */
  cy: number | undefined;
  /**
   * The x coordinate (in pixels) of the top-left corner of the rectangle that wraps the point.
   */
  x: number | undefined;
  /**
   * The y coordinate (in pixels) of the top-left corner of the rectangle that wraps the point.
   */
  y: number | undefined;
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
  node: ScatterPointNode;
  payload?: any;
  tooltipPayload?: TooltipPayload;
  tooltipPosition: Coordinate;
}

export type ScatterCustomizedShape = ActiveShape<ScatterShapeProps, SVGPathElement & InnerSymbolsProp> | SymbolType;

/**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */
interface ScatterInternalProps extends ZIndexable {
  data?: ChartData;
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

  isAnimationActive: boolean | 'auto';
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;

  needClip: boolean;

  id: GraphicalItemId;
  children?: ReactNode;
}

/**
 * External props, intended for end users to fill in
 */
interface ScatterProps<DataPointType = any, DataValueType = any>
  extends DataProvider<DataPointType>, DataConsumer<DataPointType, DataValueType>, ZIndexable {
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
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
   * The id of ZAxis which is corresponding to the data. Required when there are multiple ZAxes.
   *
   * ZAxis does not render directly, has no ticks and no tick line.
   * It is used to control the size of each scatter point.
   *
   * @defaultValue 0
   * @see {@link https://recharts.github.io/en-US/examples/ThreeDimScatterChart/ Scatter chart with Z axis}
   */
  zAxisId?: AxisId;

  /**
   * Renders line connecting individual points.
   * Options:
   * - `false`: no line is drawn.
   * - `true`: a default line is drawn.
   * - `ReactElement`: the option is the custom line element.
   * - `function`: the function will be called to render customized line.
   * - `object`: the option is the props of Curve element.
   *
   * Also see the `lineType` prop which controls how is this line calculated.
   *
   * @defaultValue false
   * @example <Scatter line />
   * @example <Scatter line={CustomizedLineComponent} />
   * @example <Scatter line={{ strokeDasharray: '5 5' }} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/JointLineScatterChart/ Scatter chart with joint line}
   */
  line?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | CurveProps | boolean;
  /**
   * Determines calculation method of the line if the `line` prop is set.
   * Options:
   * - `'joint'`: line will be generated by connecting all the points.
   * - `'fitting'`: line will be generated by fitting algorithm (linear regression).
   *
   * Has no effect if `line` prop is not set or is false.
   *
   * @defaultValue joint
   * @example <Scatter line lineType="fitting" />
   * @see {@link http://recharts.github.io/en-US/examples/JointLineScatterChart/ Scatter chart with joint line}
   */
  lineType?: 'fitting' | 'joint';
  /**
   * Determines the shape of joint line.
   * Same as `type` prop on Curve, Line and Area components.
   *
   * Has no effect if `line` prop is not set or is false or if `lineType` is 'fitting'.
   *
   * @defaultValue linear
   * @see {@link http://recharts.github.io/en-US/examples/JointLineScatterChart/ Scatter chart with joint line}
   */
  lineJointType?: CurveType;
  /**
   * The type of icon in legend.
   * If set to 'none', no legend item will be rendered.
   *
   * @defaultValue 'circle'
   * @example <Scatter legendType="diamond" />
   */
  legendType?: LegendType;
  tooltipType?: TooltipType;
  className?: string;
  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent this graphical item.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string;

  /**
   * This component is rendered when this graphical item is activated
   * (could be by mouse hover, touch, keyboard, programmatically).
   *
   * @see {@link http://recharts.github.io/en-US/examples/SimpleScatterChart/ Scatter chart with custom active shape}
   * @example <Scatter activeShape={{ fill: 'red' }} />
   */
  activeShape?: ScatterCustomizedShape;
  /**
   * Determines the shape of individual data points.
   * - Can be one of the predefined shapes as a string, which will be passed to {@link Symbols} component.
   * - If set a ReactElement, the shape of point can be customized.
   * - If set a function, the function will be called to render customized shape.
   * @defaultValue circle
   *
   * @example <Scatter shape={CustomizedShapeComponent} />
   * @example <Scatter shape="diamond" />
   *
   * @see {@link https://recharts.github.io/en-US/examples/JointLineScatterChart/ Scatter chart with custom shapes}
   */
  shape?: ScatterCustomizedShape;
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
   * Renders one label for each data point. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   */
  label?: ImplicitLabelListType;

  /**
   * If set false, animation of Scatter points will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue 'auto'
   */
  isAnimationActive?: boolean | 'auto';
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 400
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue 'linear'
   */
  animationEasing?: AnimationTiming;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 600
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  children?: ReactNode;
}

/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type BaseScatterSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<ScatterPointItem, SVGGraphicsElement>,
  'points' | 'ref' | 'children' | 'dangerouslySetInnerHTML'
>;

type InternalProps = BaseScatterSvgProps & ScatterInternalProps;

export type Props<DataPointType = any, ValueAxisType = any> = BaseScatterSvgProps &
  ScatterProps<DataPointType, ValueAxisType>;

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

type InputRequiredToComputeTooltipEntrySettings = {
  dataKey?: DataKey<any> | undefined;
  points?: ReadonlyArray<ScatterPointItem>;
  stroke?: string;
  strokeWidth?: number | string;
  fill?: string;
  name?: string;
  hide?: boolean;
  tooltipType?: TooltipType;
  id: GraphicalItemId;
};

const SetScatterTooltipEntrySettings = React.memo(
  ({
    dataKey,
    points,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    tooltipType,
    id,
  }: InputRequiredToComputeTooltipEntrySettings) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: points?.map((p: ScatterPointItem) => p.tooltipPayload),
      getPosition: index => points?.[Number(index)]?.tooltipPosition,
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
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

type ScatterSymbolsProps = {
  points: ReadonlyArray<ScatterPointItem>;
  showLabels: boolean;
  allOtherScatterProps: InternalProps;
};

function ScatterLine({ points, props }: { points: NonEmptyArray<ScatterPointItem>; props: WithoutId<InternalProps> }) {
  const { line, lineType, lineJointType } = props;

  if (!line) {
    return null;
  }

  const scatterProps = svgPropertiesNoEvents(props);
  const customLineProps = svgPropertiesNoEventsFromUnknown(line);
  let linePoints: ReadonlyArray<NullableCoordinate>, lineItem: ReactNode;

  if (lineType === 'joint') {
    linePoints = points.map(entry => ({ x: entry.cx ?? null, y: entry.cy ?? null }));
  } else if (lineType === 'fitting') {
    const { xmin, xmax, a, b } = getLinearRegression(points);
    const linearExp = (x: number) => a * x + b;
    linePoints = [
      { x: xmin, y: linearExp(xmin) },
      { x: xmax, y: linearExp(xmax) },
    ];
  }

  const lineProps: CurveProps = {
    ...scatterProps,
    // @ts-expect-error customLineProps is contributing unknown props
    fill: 'none',
    // @ts-expect-error customLineProps is contributing unknown props
    stroke: scatterProps && scatterProps.fill,
    ...customLineProps,
    // @ts-expect-error linePoints is used before it is assigned (???)
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
      const viewBox: TrapezoidViewBox = {
        /*
         * Scatter label uses x and y as the reference point for the label,
         * not cx and cy.
         */
        x: point.x ?? 0,
        /*
         * Scatter label uses x and y as the reference point for the label,
         * not cx and cy.
         */
        y: point.y ?? 0,
        width: point.width,
        height: point.height,
        lowerWidth: point.width,
        upperWidth: point.width,
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
    <CartesianLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      {children}
    </CartesianLabelListContextProvider>
  );
}

function ScatterSymbols(props: ScatterSymbolsProps) {
  const { points, allOtherScatterProps } = props;
  const { shape, activeShape, dataKey } = allOtherScatterProps;
  const { id, ...allOtherPropsWithoutId } = allOtherScatterProps;

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherScatterProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);
  if (!isNonEmptyArray(points)) {
    return null;
  }

  const baseProps = svgPropertiesNoEvents(allOtherPropsWithoutId);

  return (
    <>
      <ScatterLine points={points} props={allOtherPropsWithoutId} />
      {points.map((entry: ScatterPointItem, i: number) => {
        const hasActiveShape = activeShape != null && activeShape !== false;
        const isActive: boolean = hasActiveShape && activeIndex === String(i);
        const option = hasActiveShape && isActive ? activeShape : shape;
        const symbolProps: ScatterShapeProps = {
          ...baseProps,
          ...entry,
          index: i,
          [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: String(id),
        };

        return (
          <ZIndexLayer
            key={`symbol-${entry?.cx}-${entry?.cy}-${entry?.size}-${i}`}
            /*
             * inactive Scatters use the parent zIndex, which is represented by undefined here.
             * ZIndexLayer will render undefined zIndex as-is, as regular children, without portals.
             * Active Scatters use the activeDot zIndex so they render above other elements.
             */
            zIndex={isActive ? DefaultZIndexes.activeDot : undefined}
          >
            <Layer
              className="recharts-scatter-symbol"
              {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
              onMouseEnter={onMouseEnterFromContext(entry, i)}
              onMouseLeave={onMouseLeaveFromContext(entry, i)}
              onClick={onClickFromContext(entry, i)}
            >
              <ScatterSymbol option={option} isActive={isActive} {...symbolProps} />
            </Layer>
          </ZIndexLayer>
        );
      })}
    </>
  );
}

function SymbolsWithAnimation({
  previousPointsRef,
  props,
}: {
  previousPointsRef: MutableRefObject<ReadonlyArray<ScatterPointItem> | null>;
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
          const stepData: ReadonlyArray<ScatterPointItem> =
            t === 1
              ? points
              : points?.map((entry: ScatterPointItem, index: number): ScatterPointItem => {
                  const prev = prevPoints && prevPoints[index];

                  if (prev) {
                    return {
                      ...entry,
                      cx: entry.cx == null ? undefined : interpolate(prev.cx, entry.cx, t),
                      cy: entry.cy == null ? undefined : interpolate(prev.cy, entry.cy, t),
                      size: interpolate(prev.size, entry.size, t),
                    };
                  }

                  return { ...entry, size: interpolate(0, entry.size, t) };
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
  displayedData: ReadonlyArray<unknown>;
  xAxis: BaseAxisWithScale;
  yAxis: BaseAxisWithScale;
  zAxis: ZAxisWithScale | undefined;
  scatterSettings: ScatterSettings;
  xAxisTicks: ReadonlyArray<TickItem> | undefined;
  yAxisTicks: ReadonlyArray<TickItem> | undefined;
  cells: ReadonlyArray<ReactElement> | undefined;
}): ReadonlyArray<ScatterPointItem> {
  const xAxisDataKey = isNullish(xAxis.dataKey) ? scatterSettings.dataKey : xAxis.dataKey;
  const yAxisDataKey = isNullish(yAxis.dataKey) ? scatterSettings.dataKey : yAxis.dataKey;
  const zAxisDataKey = zAxis && zAxis.dataKey;
  const defaultRangeZ = zAxis ? zAxis.range : implicitZAxis.range;
  const defaultZ = defaultRangeZ && defaultRangeZ[0];
  const xBandSize = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
  const yBandSize = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
  return displayedData.map((entry: unknown, index): ScatterPointItem => {
    const x: unknown = getValueByDataKey(entry, xAxisDataKey);
    const y: unknown = getValueByDataKey(entry, yAxisDataKey);
    const z: unknown = (!isNullish(zAxisDataKey) && getValueByDataKey(entry, zAxisDataKey)) || '-';

    const tooltipPayload: Array<TooltipPayloadEntry> = [
      {
        name: isNullish(xAxis.dataKey) ? scatterSettings.name : xAxis.name || String(xAxis.dataKey),
        unit: xAxis.unit || '',
        // @ts-expect-error getValueByDataKey does not validate the output type
        value: x,
        payload: entry,
        dataKey: xAxisDataKey,
        type: scatterSettings.tooltipType,
        graphicalItemId: scatterSettings.id,
      },
      {
        name: isNullish(yAxis.dataKey) ? scatterSettings.name : yAxis.name || String(yAxis.dataKey),
        unit: yAxis.unit || '',
        // @ts-expect-error getValueByDataKey does not validate the output type
        value: y,
        payload: entry,
        dataKey: yAxisDataKey,
        type: scatterSettings.tooltipType,
        graphicalItemId: scatterSettings.id,
      },
    ];

    if (z !== '-' && zAxis != null) {
      tooltipPayload.push({
        // @ts-expect-error name prop should not have dataKey in it
        name: zAxis.name || zAxis.dataKey,
        unit: zAxis.unit || '',
        // @ts-expect-error getValueByDataKey does not validate the output type
        value: z,
        payload: entry,
        dataKey: zAxisDataKey,
        type: scatterSettings.tooltipType,
        graphicalItemId: scatterSettings.id,
      });
    }

    const cx: number | null = getCateCoordinateOfLine({
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
    const size = z !== '-' && zAxis != null ? zAxis.scale.map(z) : defaultZ;
    const radius = size == null ? 0 : Math.sqrt(Math.max(size, 0) / Math.PI);

    return {
      // @ts-expect-error can't spread unknown
      ...entry,
      cx,
      cy,
      x: cx == null ? undefined : cx - radius,
      y: cy == null ? undefined : cy - radius,
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

const errorBarDataPointFormatter: ErrorBarDataPointFormatter<ScatterPointItem> = (
  dataPoint: ScatterPointItem,
  dataKey: Props['dataKey'],
  direction: ErrorBarDirection,
): ErrorBarDataItem => {
  return {
    x: dataPoint.cx,
    y: dataPoint.cy,
    value: direction === 'x' ? Number(dataPoint.node.x) : Number(dataPoint.node.y),
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
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={layerClass} clipPath={needClip ? `url(#clipPath-${clipPathId})` : undefined} id={id}>
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
    </ZIndexLayer>
  );
}

export const defaultScatterProps = {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  label: false,
  line: false,
  legendType: 'circle',
  lineType: 'joint',
  lineJointType: 'linear',
  shape: 'circle',
  hide: false,

  isAnimationActive: 'auto',
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'linear',
  zIndex: DefaultZIndexes.scatter,
} as const satisfies Partial<Props>;

function ScatterImpl(props: WithIdRequired<Props>) {
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
      <SetScatterTooltipEntrySettings
        dataKey={props.dataKey}
        points={points}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        name={props.name}
        hide={props.hide}
        tooltipType={props.tooltipType}
        id={props.id}
      />
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

function ScatterFn(outsideProps: Props) {
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

/**
 * @provides LabelListContext
 * @provides ErrorBarContext
 * @provides CellReader
 * @consumes CartesianChartContext
 */
export const Scatter = React.memo(ScatterFn, propsAreEqual) as {
  <DataPointType = any, ValueAxisType = any>(props: Props<DataPointType, ValueAxisType>): ReactElement;
  (props: Props<any, any>): ReactElement;
};
// @ts-expect-error we need to set the displayName for debugging purposes

Scatter.displayName = 'Scatter';
