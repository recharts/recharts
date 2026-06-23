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
import { Cell } from '../component/Cell';
import { findAllByType } from '../util/ReactUtils';
import { getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import { findEntryInArray, interpolate, isNullish, isNumber } from '../util/DataUtils';
import { polarToCartesian } from '../util/PolarUtils';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  Coordinate,
  DataConsumer,
  DataKey,
  DataProvider,
  EasingInput,
  isNonEmptyArray,
  LegendType,
  PolarViewBoxRequired,
  PresentationAttributesAdaptChildEvent,
  SymbolType,
  TickItem,
  TrapezoidViewBox,
} from '../util/types';
import { TooltipType } from '../component/DefaultTooltipContent';
import { InnerSymbolsProp, Symbols } from '../shape/Symbols';
import { Shape } from '../util/ActiveShapeUtils';
import type { LegendPayload } from '../component/DefaultLegendContent';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { TooltipPayload, TooltipPayloadConfiguration, TooltipPayloadEntry } from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { useAppSelector } from '../state/hooks';
import { selectActiveTooltipGraphicalItemId, selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { SetPolarLegendPayload } from '../state/SetLegendPayload';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME } from '../util/Constants';
import { useAnimationId } from '../util/useAnimationId';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { SetPolarGraphicalItem } from '../state/SetGraphicalItem';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { useViewBox } from '../context/chartLayoutContext';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { propsAreEqual } from '../util/propsAreEqual';
import { PolarScatterSettings } from '../state/types/PolarScatterSettings';
import { selectPolarScatterPoints } from '../state/selectors/polarScatterSelectors';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';

export interface PolarScatterPointNode {
  angle?: number | string;
  radius?: number | string;
}

export interface PolarScatterPointItem<DataPointType = unknown> {
  cx: number | undefined;
  cy: number | undefined;
  x: number | undefined;
  y: number | undefined;
  size: number;
  width: number;
  height: number;
  angle: number | undefined;
  radius: number | undefined;
  node: PolarScatterPointNode;
  payload?: DataPointType;
  tooltipPayload?: TooltipPayload;
  tooltipPosition?: Coordinate;
}

export type PolarScatterShapeProps<DataPointType = unknown> = PolarScatterPointItem<DataPointType> & {
  index: number;
  [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: GraphicalItemId;
};

export type PolarScatterCustomizedShape<DataPointType = unknown> =
  | ActiveShape<PolarScatterShapeProps<DataPointType>, SVGPathElement & InnerSymbolsProp>
  | SymbolType;

interface PolarScatterInternalProps<DataPointType = unknown> extends ZIndexable {
  angleAxisId: string | number;
  radiusAxisId: string | number;
  data?: ReadonlyArray<DataPointType>;
  dataKey?: DataKey<DataPointType>;
  tooltipType?: TooltipType;
  className?: string;
  name?: string | number;
  activeShape?: PolarScatterCustomizedShape<DataPointType>;
  shape: PolarScatterCustomizedShape<DataPointType>;
  size: number;
  points: ReadonlyArray<PolarScatterPointItem<DataPointType>>;
  hide: boolean;
  label?: ImplicitLabelListType;
  legendType: LegendType;
  isAnimationActive: boolean | 'auto';
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: EasingInput;
  id: GraphicalItemId;
  children?: ReactNode;
}

interface PolarScatterProps<DataPointType = unknown, DataValueType = unknown>
  extends DataProvider<DataPointType>, DataConsumer<DataPointType, DataValueType>, ZIndexable {
  id?: string;
  /**
   * The id of PolarAngleAxis which is corresponding to the data.
   * @defaultValue 0
   */
  angleAxisId?: string | number;
  /**
   * The id of PolarRadiusAxis which is corresponding to the data.
   * @defaultValue 0
   */
  radiusAxisId?: string | number;
  tooltipType?: TooltipType;
  className?: string;
  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent this graphical item.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string | number;
  /**
   * This component is rendered when this graphical item is activated
   * (could be by mouse hover, touch, keyboard, programmatically).
   *
   * @example <PolarScatter activeShape={{ fill: 'red' }} />
   */
  activeShape?: PolarScatterCustomizedShape<DataPointType>;
  /**
   * Determines the shape of individual data points.
   * - Can be one of the predefined shapes as a string.
   * - If set a ReactElement, the shape of point can be customized.
   * - If set a function, the function will be called to render customized shape.
   *
   * @defaultValue circle
   */
  shape?: PolarScatterCustomizedShape<DataPointType>;
  /**
   * Point area used by the default symbol renderer.
   * @defaultValue 64
   */
  size?: number;
  /**
   * The type of icon in legend.
   * If set to 'none', no legend item will be rendered.
   *
   * @defaultValue circle
   */
  legendType?: LegendType;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your PolarAngleAxis/PolarRadiusAxis.
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
   * If set false, animation of points will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
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
   * @defaultValue 400
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue linear
   */
  animationEasing?: EasingInput;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.9
   * @defaultValue 600
   */
  zIndex?: number;
  children?: ReactNode;
}

type BasePolarScatterSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<PolarScatterPointItem, SVGGraphicsElement>,
  'points' | 'ref' | 'children' | 'dangerouslySetInnerHTML'
>;

type InternalProps = BasePolarScatterSvgProps & PolarScatterInternalProps<unknown>;

export type Props<DataPointType = unknown, DataValueType = unknown> = BasePolarScatterSvgProps &
  PolarScatterProps<DataPointType, DataValueType>;

type AxisWithScale = BaseAxisWithScale & {
  allowDuplicatedCategory?: boolean;
};

const computeLegendPayloadFromPolarScatterProps = (props: Props<unknown, unknown>): ReadonlyArray<LegendPayload> => {
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

const SetPolarScatterTooltipEntrySettings = React.memo(
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
  }: {
    dataKey?: DataKey<unknown>;
    points?: ReadonlyArray<PolarScatterPointItem<unknown>>;
    stroke?: string;
    strokeWidth?: number | string;
    fill?: string;
    name?: string | number;
    hide?: boolean;
    tooltipType?: TooltipType;
    id: GraphicalItemId;
  }) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: points?.map((point: PolarScatterPointItem) => point.tooltipPayload),
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
        unit: '',
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

function PolarScatterSymbol({
  option,
  isActive,
  ...props
}: {
  option: PolarScatterCustomizedShape<unknown>;
  isActive: boolean;
} & PolarScatterShapeProps<unknown>) {
  if (typeof option === 'string') {
    return <Shape option={<Symbols type={option} {...props} />} isActive={isActive} shapeType="symbols" {...props} />;
  }

  return <Shape option={option} isActive={isActive} shapeType="symbols" {...props} />;
}

function PolarScatterLabelListProvider({
  showLabels,
  points,
  children,
}: {
  showLabels: boolean;
  points: ReadonlyArray<PolarScatterPointItem<unknown>>;
  children: ReactNode;
}) {
  const chartViewBox = useViewBox();
  const labelListEntries: ReadonlyArray<CartesianLabelListEntry> = useMemo(() => {
    return points
      .filter(
        point =>
          point.x != null && point.y != null && point.width != null && point.height != null && point.payload != null,
      )
      .map((point): CartesianLabelListEntry => {
        const payloadValue = getValueByDataKey(point.payload, 'value');
        const labelValue =
          point.node.radius != null && point.node.radius !== ''
            ? point.node.radius
            : payloadValue != null && payloadValue !== ''
              ? (payloadValue as string | number)
              : point.node.angle != null && point.node.angle !== ''
                ? point.node.angle
                : undefined;
        const viewBox: TrapezoidViewBox = {
          x: point.x,
          y: point.y,
          width: point.width,
          height: point.height,
          lowerWidth: point.width,
          upperWidth: point.width,
        };
        return {
          ...viewBox,
          value: labelValue,
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

function PolarScatterSymbols({
  points,
  allOtherPolarScatterProps,
}: {
  points: ReadonlyArray<PolarScatterPointItem<unknown>>;
  allOtherPolarScatterProps: InternalProps;
}) {
  const { shape, activeShape, dataKey } = allOtherPolarScatterProps;
  const { id, ...allOtherPropsWithoutId } = allOtherPolarScatterProps;

  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const activeGraphicalItemId = useAppSelector(selectActiveTooltipGraphicalItemId);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = allOtherPolarScatterProps;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);

  if (!isNonEmptyArray(points)) {
    return null;
  }

  const baseProps = svgPropertiesNoEvents(allOtherPropsWithoutId);

  return (
    <>
      {points.map((entry: PolarScatterPointItem<unknown>, index: number) => {
        const hasActiveShape = activeShape != null && activeShape !== false;
        const isActive = hasActiveShape && activeIndex === String(index) && activeGraphicalItemId === String(id);
        const option = hasActiveShape && isActive ? activeShape : shape;
        const symbolProps: PolarScatterShapeProps<unknown> = {
          ...baseProps,
          ...entry,
          index,
          [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: String(id),
        };

        return (
          <ZIndexLayer key={`symbol-${id}-${index}`} zIndex={isActive ? DefaultZIndexes.activeDot : undefined}>
            <Layer
              className="recharts-polar-scatter-symbol"
              {...adaptEventsOfChild(restOfAllOtherProps, entry, index)}
              onMouseEnter={onMouseEnterFromContext(entry, index)}
              onMouseLeave={onMouseLeaveFromContext(entry, index)}
              onClick={onClickFromContext(entry, index)}
            >
              <PolarScatterSymbol option={option} isActive={isActive} {...symbolProps} />
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
  previousPointsRef: MutableRefObject<ReadonlyArray<PolarScatterPointItem<unknown>> | null>;
  props: InternalProps;
}) {
  const { points, isAnimationActive, animationBegin, animationDuration, animationEasing } = props;
  const prevPoints = previousPointsRef.current;
  const pointsRef = previousPointsRef;
  const animationId = useAnimationId(props, 'recharts-polar-scatter-');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationEnd = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const handleAnimationStart = useCallback(() => {
    setIsAnimating(true);
  }, []);

  const showLabels = !isAnimating;

  return (
    <PolarScatterLabelListProvider showLabels={showLabels} points={points}>
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
          const stepData: ReadonlyArray<PolarScatterPointItem<unknown>> =
            t === 1
              ? points
              : points.map((entry: PolarScatterPointItem<unknown>, index: number): PolarScatterPointItem<unknown> => {
                  const prev = prevPoints?.[index];

                  if (prev != null) {
                    return {
                      ...entry,
                      cx: entry.cx == null ? undefined : interpolate(prev.cx, entry.cx, t),
                      cy: entry.cy == null ? undefined : interpolate(prev.cy, entry.cy, t),
                      x: entry.x == null ? undefined : interpolate(prev.x, entry.x, t),
                      y: entry.y == null ? undefined : interpolate(prev.y, entry.y, t),
                      size: interpolate(prev.size, entry.size, t),
                      width: interpolate(prev.width, entry.width, t),
                      height: interpolate(prev.height, entry.height, t),
                    };
                  }

                  const radius = Math.sqrt(Math.max(entry.size, 0) / Math.PI) * t;
                  return {
                    ...entry,
                    size: interpolate(0, entry.size, t),
                    x: entry.cx == null ? undefined : entry.cx - radius,
                    y: entry.cy == null ? undefined : entry.cy - radius,
                    width: 2 * radius,
                    height: 2 * radius,
                  };
                });

          if (t > 0) {
            pointsRef.current = stepData;
          }

          return (
            <Layer>
              <PolarScatterSymbols points={stepData} allOtherPolarScatterProps={props} />
            </Layer>
          );
        }}
      </JavascriptAnimate>
      <LabelListFromLabelProp label={props.label} />
    </PolarScatterLabelListProvider>
  );
}

function getPolarCoordinate({
  axis,
  ticks,
  bandSize,
  entry,
  index,
  dataKey,
}: {
  axis: AxisWithScale;
  ticks: ReadonlyArray<TickItem>;
  bandSize: number;
  entry: unknown;
  index: number;
  dataKey: DataKey<unknown> | undefined;
}): number | null {
  if (axis.type === 'category') {
    if (!axis.allowDuplicatedCategory && axis.dataKey != null && typeof entry === 'object' && entry != null) {
      const matchedTick = findEntryInArray(ticks, 'value', getValueByDataKey(entry, axis.dataKey));
      if (matchedTick != null) {
        return matchedTick.coordinate + bandSize / 2;
      }
    }

    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const value = getValueByDataKey(entry, dataKey);
  const scaled = axis.scale.map(value);

  if (!isNumber(scaled)) {
    return null;
  }

  return scaled;
}

function getPointPosition(
  polarViewBox: PolarViewBoxRequired,
  angle: number | null,
  radius: number | null,
): { x: number; y: number } | undefined {
  if (angle == null || radius == null) {
    return undefined;
  }

  return polarToCartesian(polarViewBox.cx, polarViewBox.cy, radius, angle);
}

function toNodeValue(value: unknown): number | string | undefined {
  if (typeof value === 'number' || typeof value === 'string') {
    return value;
  }

  return undefined;
}

function toTooltipValue(value: unknown): TooltipPayloadEntry['value'] {
  if (typeof value === 'number' || typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value) && value.every(item => typeof item === 'number' || typeof item === 'string')) {
    return value;
  }

  return undefined;
}

function toSpreadableEntry(entry: unknown): Record<string, unknown> {
  if (typeof entry === 'object' && entry != null) {
    const spreadableEntry: Record<string, unknown> = {};

    Object.entries(entry).forEach(([key, value]) => {
      spreadableEntry[key] = value;
    });

    return spreadableEntry;
  }

  return {};
}

export function computePolarScatterPoints({
  displayedData,
  angleAxis,
  angleAxisTicks,
  angleBandSize,
  radiusAxis,
  radiusAxisTicks,
  radiusBandSize,
  polarViewBox,
  polarScatterSettings,
  cells,
}: {
  displayedData: ReadonlyArray<unknown>;
  angleAxis: AxisWithScale;
  angleAxisTicks: ReadonlyArray<TickItem>;
  angleBandSize: number;
  radiusAxis: AxisWithScale;
  radiusAxisTicks: ReadonlyArray<TickItem>;
  radiusBandSize: number;
  polarViewBox: PolarViewBoxRequired;
  polarScatterSettings: PolarScatterSettings;
  cells: ReadonlyArray<ReactElement> | undefined;
}): ReadonlyArray<PolarScatterPointItem<unknown>> {
  const angleAxisDataKey: DataKey<unknown> | undefined = isNullish(angleAxis.dataKey)
    ? polarScatterSettings.dataKey
    : angleAxis.dataKey;
  const radiusAxisDataKey: DataKey<unknown> | undefined = isNullish(radiusAxis.dataKey)
    ? polarScatterSettings.dataKey
    : radiusAxis.dataKey;

  return displayedData.map((entry: unknown, index: number): PolarScatterPointItem<unknown> => {
    const angleValue: unknown = getValueByDataKey(entry, angleAxisDataKey);
    const radiusValue: unknown = getValueByDataKey(entry, radiusAxisDataKey);
    const angleCoordinate = getPolarCoordinate({
      axis: angleAxis,
      ticks: angleAxisTicks,
      bandSize: angleBandSize,
      entry,
      index,
      dataKey: angleAxisDataKey,
    });
    const radiusCoordinate = getPolarCoordinate({
      axis: radiusAxis,
      ticks: radiusAxisTicks,
      bandSize: radiusBandSize,
      entry,
      index,
      dataKey: radiusAxisDataKey,
    });

    const point = getPointPosition(polarViewBox, angleCoordinate, radiusCoordinate);
    const radius = Math.sqrt(Math.max(polarScatterSettings.size, 0) / Math.PI);

    const tooltipPayload: Array<TooltipPayloadEntry> = [
      {
        name: isNullish(angleAxis.dataKey) ? polarScatterSettings.name : angleAxis.name || String(angleAxis.dataKey),
        unit: angleAxis.unit || '',
        value: toTooltipValue(angleValue),
        payload: entry,
        dataKey: angleAxisDataKey,
        type: polarScatterSettings.tooltipType,
        graphicalItemId: polarScatterSettings.id,
      },
      {
        name: isNullish(radiusAxis.dataKey) ? polarScatterSettings.name : radiusAxis.name || String(radiusAxis.dataKey),
        unit: radiusAxis.unit || '',
        value: toTooltipValue(radiusValue),
        payload: entry,
        dataKey: radiusAxisDataKey,
        type: polarScatterSettings.tooltipType,
        graphicalItemId: polarScatterSettings.id,
      },
    ];

    return {
      ...toSpreadableEntry(entry),
      cx: point?.x,
      cy: point?.y,
      x: point == null ? undefined : point.x - radius,
      y: point == null ? undefined : point.y - radius,
      width: 2 * radius,
      height: 2 * radius,
      size: polarScatterSettings.size,
      angle: angleCoordinate ?? undefined,
      radius: radiusCoordinate ?? undefined,
      node: {
        angle: toNodeValue(angleValue),
        radius: toNodeValue(radiusValue),
      },
      tooltipPayload,
      tooltipPosition: point,
      payload: entry,
      ...(cells?.[index]?.props ?? {}),
    };
  });
}

function PolarScatterWithId(props: InternalProps) {
  const previousPointsRef = useRef<ReadonlyArray<PolarScatterPointItem<unknown>> | null>(null);

  if (props.hide) {
    return null;
  }

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={clsx('recharts-polar-scatter', props.className)} id={props.id}>
        <Layer key="recharts-polar-scatter-symbols">
          <SymbolsWithAnimation props={props} previousPointsRef={previousPointsRef} />
        </Layer>
      </Layer>
    </ZIndexLayer>
  );
}

export const defaultPolarScatterProps = {
  angleAxisId: 0,
  radiusAxisId: 0,
  label: false,
  legendType: 'circle',
  shape: 'circle',
  size: 64,
  hide: false,
  isAnimationActive: 'auto',
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'linear',
  zIndex: DefaultZIndexes.scatter,
} as const satisfies Partial<Props>;

function PolarScatterImpl(props: Props<unknown, unknown> & { id: GraphicalItemId }) {
  const {
    animationBegin,
    animationDuration,
    animationEasing,
    angleAxisId,
    hide,
    isAnimationActive,
    legendType,
    radiusAxisId,
    shape,
    size,
    ...everythingElse
  } = resolveDefaultProps(props, defaultPolarScatterProps);

  const cells = useMemo(() => findAllByType(props.children, Cell), [props.children]);
  const points = useAppSelector(state => selectPolarScatterPoints(state, radiusAxisId, angleAxisId, props.id, cells));

  if (points == null) {
    return null;
  }

  return (
    <>
      <SetPolarScatterTooltipEntrySettings
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
      <PolarScatterWithId
        {...everythingElse}
        id={props.id}
        angleAxisId={angleAxisId}
        radiusAxisId={radiusAxisId}
        hide={hide}
        isAnimationActive={isAnimationActive}
        animationBegin={animationBegin}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
        legendType={legendType}
        shape={shape}
        size={size}
        points={points}
      />
    </>
  );
}

function PolarScatterFn(outsideProps: Props<unknown, unknown>) {
  const props = resolveDefaultProps(outsideProps, defaultPolarScatterProps);

  return (
    <RegisterGraphicalItemId id={props.id} type="polar-scatter">
      {id => (
        <>
          <SetPolarLegendPayload legendPayload={computeLegendPayloadFromPolarScatterProps(props)} />
          <SetPolarGraphicalItem
            type="polarScatter"
            id={id}
            data={props.data}
            dataKey={props.dataKey}
            hide={props.hide}
            angleAxisId={props.angleAxisId}
            radiusAxisId={props.radiusAxisId}
            name={props.name}
            tooltipType={props.tooltipType}
            size={props.size}
          />
          <PolarScatterImpl {...props} id={id} />
        </>
      )}
    </RegisterGraphicalItemId>
  );
}

/**
 * @provides LabelListContext
 * @provides CellReader
 * @consumes PolarChartContext
 */
export const PolarScatter = React.memo(PolarScatterFn, propsAreEqual) as {
  <DataPointType = unknown, DataValueType = unknown>(props: Props<DataPointType, DataValueType>): ReactElement;
  (props: Props<unknown, unknown>): ReactElement;
};

// @ts-expect-error we need to set the displayName for debugging purposes
PolarScatter.displayName = 'PolarScatter';
