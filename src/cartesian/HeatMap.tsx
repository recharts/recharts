import * as React from 'react';
import { MutableRefObject, ReactElement, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { EasingInput } from '../animation/easing';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { Cell } from '../component/Cell';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelListFromLabelProp,
} from '../component/LabelList';
import type { NameType, TooltipType, ValueType } from '../component/DefaultTooltipContent';
import type { LegendPayload } from '../component/DefaultLegendContent';
import { Layer } from '../container/Layer';
import {
  useMouseClickItemDispatch,
  useMouseEnterItemDispatch,
  useMouseLeaveItemDispatch,
} from '../context/tooltipContext';
import { useIsPanorama } from '../context/PanoramaContext';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { useViewBox } from '../context/chartLayoutContext';
import { AxisId } from '../state/cartesianAxisSlice';
import { SetCartesianGraphicalItem } from '../state/SetGraphicalItem';
import { SetLegendPayload } from '../state/SetLegendPayload';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { useAppSelector } from '../state/hooks';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { selectHeatMapCells } from '../state/selectors/heatMapSelectors';
import { selectActiveTooltipDataKey, selectActiveTooltipIndex } from '../state/selectors/tooltipSelectors';
import { HeatMapDimension, HeatMapGap, HeatMapSettings } from '../state/types/HeatMapSettings';
import { TooltipPayload, TooltipPayloadConfiguration, TooltipPayloadEntry } from '../state/tooltipSlice';
import { Props as RectangleProps, RectRadius } from '../shape/Rectangle';
import { Shape } from '../util/ActiveShapeUtils';
import { getBandSizeOfAxis, getTooltipNameProp, getValueByDataKey } from '../util/ChartUtils';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME } from '../util/Constants';
import { findEntryInArray, interpolate, isNullish } from '../util/DataUtils';
import { findAllByType } from '../util/ReactUtils';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import {
  ActiveShape,
  adaptEventsOfChild,
  AnimationDuration,
  Coordinate,
  DataConsumer,
  DataKey,
  DataProvider,
  LegendType,
  PresentationAttributesAdaptChildEvent,
  TickItem,
  TrapezoidViewBox,
} from '../util/types';
import { useAnimationId } from '../util/useAnimationId';
import { WithIdRequired } from '../util/useUniqueId';
import { propsAreEqual } from '../util/propsAreEqual';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { GraphicalItemClipPath, useNeedsClip } from './GraphicalItemClipPath';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';

export interface HeatMapCellNode {
  x?: NameType;
  y?: NameType;
  value?: ValueType;
}

export interface HeatMapCellItem<TPayload = unknown> extends RectangleProps {
  x: number | undefined;
  y: number | undefined;
  width: number;
  height: number;
  value: unknown;
  node: HeatMapCellNode;
  payload?: TPayload;
  tooltipPayload?: TooltipPayload;
  tooltipPosition: Coordinate;
  originalDataIndex: number;
}

export type HeatMapShapeProps = HeatMapCellItem & {
  isActive: boolean;
  index: number;
  [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: GraphicalItemId;
};

export type HeatMapCustomizedShape = ActiveShape<HeatMapShapeProps, SVGPathElement>;

interface HeatMapInternalProps extends ZIndexable {
  data?: ReadonlyArray<HeatMapCellItem>;
  xAxisId: AxisId;
  yAxisId: AxisId;
  dataKey?: DataKey<any>;
  tooltipType?: TooltipType;
  className?: string;
  name?: string | number;
  unit?: string | number;
  radius?: RectRadius;
  legendType: LegendType;
  shape: HeatMapCustomizedShape;
  activeShape?: HeatMapCustomizedShape;
  hide: boolean;
  label?: ImplicitLabelListType;
  isAnimationActive: boolean | 'auto';
  animationBegin: number;
  animationDuration: AnimationDuration;
  animationEasing: EasingInput;
  needClip: boolean;
  id: GraphicalItemId;
  children?: ReactNode;
}

interface HeatMapProps<DataPointType = any, DataValueType = any>
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
   *
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   *
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  tooltipType?: TooltipType;
  className?: string;
  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent this graphical item.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string | number;
  /**
   * The unit of data. This option will be used in tooltip.
   */
  unit?: string | number;
  /**
   * The type of icon in legend.
   * If set to 'none', no legend item will be rendered.
   *
   * @defaultValue rect
   */
  legendType?: LegendType;
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
   * If set a ReactElement, the shape of heatmap cell can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?: HeatMapCustomizedShape;
  /**
   * This component is rendered when this graphical item is activated
   * (could be by mouse hover, touch, keyboard, programmatically).
   */
  activeShape?: HeatMapCustomizedShape;
  /**
   * The radius of corners.
   *
   * If you provide a single number, it applies to all four corners.
   * If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
   */
  radius?: RectRadius;
  /**
   * Controls the width and height of each heatmap cell.
   * If omitted, the cell fills the full X/Y band size minus any configured gap.
   *
   * You may provide a single number to set both dimensions,
   * or an object with `width` and `height`.
   */
  cellSize?: HeatMapDimension;
  /**
   * Gap between adjacent heatmap cells in pixels.
   *
   * You may provide a single number to set both axes,
   * or an object with `x` and `y`.
   *
   * @defaultValue 0
   */
  cellGap?: HeatMapGap;
  /**
   * Renders one label for each heatmap cell. Options:
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
   * If set false, animation of heatmap cells will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   *
   * @defaultValue 'auto'
   */
  isAnimationActive?: boolean | 'auto';
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   *
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @defaultValue 400
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   *
   * @defaultValue 'ease'
   */
  animationEasing?: EasingInput;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 300
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  children?: ReactNode;
}

type BaseHeatMapSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<HeatMapCellItem, SVGGraphicsElement>,
  'ref' | 'children' | 'dangerouslySetInnerHTML'
>;

type InternalProps = BaseHeatMapSvgProps & HeatMapInternalProps;

export type Props<DataPointType = any, DataValueType = any> = BaseHeatMapSvgProps &
  HeatMapProps<DataPointType, DataValueType>;

const computeLegendPayloadFromHeatMapProps = (props: Props): ReadonlyArray<LegendPayload> => {
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
  cells?: ReadonlyArray<HeatMapCellItem>;
  stroke?: string;
  strokeWidth?: number | string;
  fill?: string;
  name?: string | number;
  hide?: boolean;
  unit?: string | number;
  tooltipType?: TooltipType;
  id: GraphicalItemId;
};

const SetHeatMapTooltipEntrySettings = React.memo(
  ({
    dataKey,
    cells,
    stroke,
    strokeWidth,
    fill,
    name,
    hide,
    unit,
    tooltipType,
    id,
  }: InputRequiredToComputeTooltipEntrySettings) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: cells?.map((cell: HeatMapCellItem) => cell.tooltipPayload),
      getPosition: index => cells?.[Number(index)]?.tooltipPosition,
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
        unit: unit == null ? '' : String(unit),
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

function getGapValue(cellGap: HeatMapGap | undefined, axis: 'x' | 'y'): number {
  if (typeof cellGap === 'number') {
    return Math.max(cellGap, 0);
  }
  if (cellGap == null) {
    return 0;
  }
  return Math.max(cellGap[axis] ?? 0, 0);
}

function getDimensionValue(cellSize: HeatMapDimension | undefined, dimension: 'width' | 'height'): number | undefined {
  if (typeof cellSize === 'number') {
    return Math.max(cellSize, 0);
  }
  if (cellSize == null) {
    return undefined;
  }
  const value = cellSize[dimension];
  return value == null ? undefined : Math.max(value, 0);
}

function getHeatMapCoordinate({
  axis,
  ticks,
  bandSize,
  value,
}: {
  axis: BaseAxisWithScale;
  ticks: ReadonlyArray<TickItem>;
  bandSize: number;
  value: unknown;
}): number | null {
  if (axis.type === 'category') {
    const matchedTick = findEntryInArray(ticks, 'value', value);
    return matchedTick ? matchedTick.coordinate + bandSize / 2 : null;
  }

  const scaled = axis.scale.map(value);
  if (typeof scaled !== 'number' || Number.isNaN(scaled)) {
    return null;
  }

  return scaled;
}

function resolveCellDimension({
  bandSize,
  cellSize,
  cellGap,
  dimension,
}: {
  bandSize: number;
  cellSize: HeatMapDimension | undefined;
  cellGap: HeatMapGap | undefined;
  dimension: 'width' | 'height';
}): number {
  const explicitSize = getDimensionValue(cellSize, dimension);
  if (explicitSize != null) {
    return explicitSize;
  }
  const gapAxis = dimension === 'width' ? 'x' : 'y';
  return Math.max(bandSize - getGapValue(cellGap, gapAxis), 0);
}

function toTooltipEntryValue(value: unknown): TooltipPayloadEntry['value'] {
  if (typeof value === 'number' || typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value) && value.every(item => typeof item === 'number' || typeof item === 'string')) {
    return value;
  }
  return undefined;
}

function toNodeCoordinate(value: unknown): NameType | undefined {
  if (typeof value === 'number' || typeof value === 'string') {
    return value;
  }
  return undefined;
}

function HeatMapRectangle({
  option,
  isActive,
  ...props
}: {
  option: HeatMapCustomizedShape | undefined;
  isActive: boolean;
} & HeatMapShapeProps) {
  return (
    <Shape
      shapeType="rectangle"
      activeClassName="recharts-active-heatmap-cell"
      inActiveClassName="recharts-heatmap-cell"
      option={option}
      isActive={isActive}
      {...props}
    />
  );
}

function HeatMapLabelListProvider({
  showLabels,
  cells,
  children,
}: {
  showLabels: boolean;
  cells: ReadonlyArray<HeatMapCellItem> | undefined;
  children: ReactNode;
}) {
  const chartViewBox = useViewBox();
  const labelListEntries: ReadonlyArray<CartesianLabelListEntry> = useMemo(() => {
    return (cells ?? []).map((cell): CartesianLabelListEntry => {
      const viewBox: TrapezoidViewBox = {
        x: cell.x ?? 0,
        y: cell.y ?? 0,
        width: cell.width,
        height: cell.height,
        lowerWidth: cell.width,
        upperWidth: cell.width,
      };
      return {
        ...viewBox,
        value: cell.value,
        payload: cell.payload,
        viewBox,
        parentViewBox: chartViewBox,
        fill: cell.fill,
      };
    });
  }, [cells, chartViewBox]);

  return (
    <CartesianLabelListContextProvider value={showLabels ? labelListEntries : undefined}>
      {children}
    </CartesianLabelListContextProvider>
  );
}

function HeatMapCells({ cells, props }: { cells: ReadonlyArray<HeatMapCellItem>; props: InternalProps }) {
  const { id, shape, activeShape, dataKey, ...allOtherPropsWithoutId } = props;
  const activeIndex = useAppSelector(selectActiveTooltipIndex);
  const activeDataKey = useAppSelector(selectActiveTooltipDataKey);
  const {
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    ...restOfAllOtherProps
  } = props;

  const onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
  const onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
  const onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);
  const baseProps = svgPropertiesNoEvents(allOtherPropsWithoutId);

  return (
    <>
      {cells.map((entry: HeatMapCellItem, i: number) => {
        const hasActiveShape = activeShape != null && activeShape !== false;
        const isActive =
          hasActiveShape &&
          String(entry.originalDataIndex) === activeIndex &&
          (activeDataKey == null || dataKey === activeDataKey);
        const option = hasActiveShape && isActive ? activeShape : shape;
        const cellProps: HeatMapShapeProps = {
          ...baseProps,
          ...entry,
          radius: entry.radius ?? props.radius,
          index: i,
          isActive,
          [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: String(id),
        };

        return (
          <ZIndexLayer
            key={`cell-${entry.originalDataIndex}`}
            zIndex={isActive ? DefaultZIndexes.activeBar : undefined}
          >
            <Layer
              className="recharts-heatmap-rectangle"
              {...adaptEventsOfChild(restOfAllOtherProps, entry, i)}
              onMouseEnter={onMouseEnterFromContext(entry, i)}
              onMouseLeave={onMouseLeaveFromContext(entry, i)}
              onClick={onClickFromContext(entry, i)}
            >
              <HeatMapRectangle option={option} {...cellProps} />
            </Layer>
          </ZIndexLayer>
        );
      })}
    </>
  );
}

function RectanglesWithAnimation({
  props,
  previousCellsRef,
}: {
  props: InternalProps;
  previousCellsRef: MutableRefObject<ReadonlyArray<HeatMapCellItem> | null>;
}) {
  const { data, isAnimationActive, animationBegin, animationDuration, animationEasing } = props;
  const prevData = previousCellsRef.current;
  const animationId = useAnimationId(props, 'recharts-heatmap-');
  const [isAnimating, setIsAnimating] = useState(false);
  const showLabels = !isAnimating;

  const handleAnimationEnd = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const handleAnimationStart = useCallback(() => {
    setIsAnimating(true);
  }, []);

  return (
    <HeatMapLabelListProvider showLabels={showLabels} cells={data}>
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
          const stableData = data ?? [];
          const stepData: ReadonlyArray<HeatMapCellItem> =
            t === 1
              ? stableData
              : stableData.map((entry: HeatMapCellItem, index: number): HeatMapCellItem => {
                  const prev = prevData?.[index];
                  if (prev != null) {
                    return {
                      ...entry,
                      x: entry.x == null || prev.x == null ? entry.x : interpolate(prev.x, entry.x, t),
                      y: entry.y == null || prev.y == null ? entry.y : interpolate(prev.y, entry.y, t),
                      width: interpolate(prev.width, entry.width, t),
                      height: interpolate(prev.height, entry.height, t),
                    };
                  }
                  return {
                    ...entry,
                    width: interpolate(0, entry.width, t),
                    height: interpolate(0, entry.height, t),
                  };
                });

          if (t > 0) {
            // eslint-disable-next-line no-param-reassign
            previousCellsRef.current = stepData;
          }

          return (
            <Layer>
              <HeatMapCells cells={stepData} props={props} />
            </Layer>
          );
        }}
      </JavascriptAnimate>
      <LabelListFromLabelProp label={props.label} />
      {props.children}
    </HeatMapLabelListProvider>
  );
}

function RenderCells(props: InternalProps) {
  const previousCellsRef = useRef<ReadonlyArray<HeatMapCellItem> | null>(null);
  return <RectanglesWithAnimation previousCellsRef={previousCellsRef} props={props} />;
}

function HeatMapWithId(props: InternalProps) {
  const { hide, data, className, needClip, xAxisId, yAxisId, id } = props;
  if (hide || data == null) {
    return null;
  }

  const layerClass = clsx('recharts-heatmap', className);
  const clipPathId = id;

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={layerClass} clipPath={needClip ? `url(#clipPath-${clipPathId})` : undefined} id={id}>
        {needClip && (
          <defs>
            <GraphicalItemClipPath clipPathId={clipPathId} xAxisId={xAxisId} yAxisId={yAxisId} />
          </defs>
        )}
        <RenderCells {...props} />
      </Layer>
    </ZIndexLayer>
  );
}

export const defaultHeatMapProps = {
  xAxisId: 0,
  yAxisId: 0,
  cellGap: 0,
  hide: false,
  label: false,
  legendType: 'rect',
  shape: {},
  isAnimationActive: 'auto',
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
  zIndex: DefaultZIndexes.bar,
} as const satisfies Partial<Props>;

export function computeHeatMapCells({
  displayedData,
  xAxis,
  yAxis,
  heatMapSettings,
  xAxisTicks,
  yAxisTicks,
  cells,
}: {
  displayedData: ReadonlyArray<unknown>;
  xAxis: BaseAxisWithScale;
  yAxis: BaseAxisWithScale;
  heatMapSettings: HeatMapSettings;
  xAxisTicks: ReadonlyArray<TickItem>;
  yAxisTicks: ReadonlyArray<TickItem>;
  cells: ReadonlyArray<ReactElement> | undefined;
}): ReadonlyArray<HeatMapCellItem> {
  const xAxisDataKey = xAxis.dataKey;
  const yAxisDataKey = yAxis.dataKey;
  const xBandSize = getBandSizeOfAxis(xAxis, xAxisTicks) ?? 0;
  const yBandSize = getBandSizeOfAxis(yAxis, yAxisTicks) ?? 0;
  const width = resolveCellDimension({
    bandSize: xBandSize,
    cellSize: heatMapSettings.cellSize,
    cellGap: heatMapSettings.cellGap,
    dimension: 'width',
  });
  const height = resolveCellDimension({
    bandSize: yBandSize,
    cellSize: heatMapSettings.cellSize,
    cellGap: heatMapSettings.cellGap,
    dimension: 'height',
  });

  return displayedData.reduce<Array<HeatMapCellItem>>((result, entry: unknown, index) => {
    if (typeof entry !== 'object' || entry == null) {
      return result;
    }

    const xValue = getValueByDataKey<unknown, unknown>(entry, xAxisDataKey, xAxis.scale.domain()[index]);
    const yValue = getValueByDataKey<unknown, unknown>(entry, yAxisDataKey, yAxis.scale.domain()[index]);
    const value = getValueByDataKey<unknown, unknown>(entry, heatMapSettings.dataKey);
    const cx = getHeatMapCoordinate({ axis: xAxis, ticks: xAxisTicks, bandSize: xBandSize, value: xValue });
    const cy = getHeatMapCoordinate({ axis: yAxis, ticks: yAxisTicks, bandSize: yBandSize, value: yValue });
    const tooltipXValue = toTooltipEntryValue(xValue);
    const tooltipYValue = toTooltipEntryValue(yValue);
    const tooltipValue = toTooltipEntryValue(value);
    const tooltipPayload: Array<TooltipPayloadEntry> = [
      {
        name: xAxis.name || (xAxis.dataKey == null ? undefined : String(xAxis.dataKey)),
        unit: xAxis.unit || '',
        value: tooltipXValue,
        payload: entry,
        dataKey: xAxisDataKey,
        type: heatMapSettings.tooltipType,
        graphicalItemId: heatMapSettings.id,
      },
      {
        name: yAxis.name || (yAxis.dataKey == null ? undefined : String(yAxis.dataKey)),
        unit: yAxis.unit || '',
        value: tooltipYValue,
        payload: entry,
        dataKey: yAxisDataKey,
        type: heatMapSettings.tooltipType,
        graphicalItemId: heatMapSettings.id,
      },
    ];

    if (!isNullish(heatMapSettings.dataKey)) {
      tooltipPayload.push({
        name: getTooltipNameProp(heatMapSettings.name, heatMapSettings.dataKey),
        unit: heatMapSettings.unit == null ? '' : String(heatMapSettings.unit),
        value: tooltipValue,
        payload: entry,
        dataKey: heatMapSettings.dataKey,
        type: heatMapSettings.tooltipType,
        graphicalItemId: heatMapSettings.id,
      });
    }

    result.push({
      ...entry,
      x: cx == null ? undefined : cx - width / 2,
      y: cy == null ? undefined : cy - height / 2,
      width,
      height,
      value,
      node: { x: toNodeCoordinate(xValue), y: toNodeCoordinate(yValue), value: tooltipValue },
      tooltipPayload,
      tooltipPosition: { x: cx ?? 0, y: cy ?? 0 },
      payload: entry,
      originalDataIndex: index,
      ...(cells && cells[index] && cells[index].props),
    });

    return result;
  }, []);
}

function HeatMapImpl(props: WithIdRequired<Props>) {
  const {
    animationBegin,
    animationDuration,
    animationEasing,
    hide,
    isAnimationActive,
    legendType,
    shape,
    xAxisId,
    yAxisId,
    ...everythingElse
  } = resolveDefaultProps(props, defaultHeatMapProps);

  const { needClip } = useNeedsClip(xAxisId, yAxisId);
  const cells = useMemo(() => findAllByType(props.children, Cell), [props.children]);
  const isPanorama = useIsPanorama();

  const data = useAppSelector(state => {
    return selectHeatMapCells(state, xAxisId, yAxisId, props.id, cells, isPanorama);
  });

  if (needClip == null || data == null) {
    return null;
  }

  return (
    <>
      <SetHeatMapTooltipEntrySettings
        dataKey={props.dataKey}
        cells={data}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        name={props.name}
        hide={props.hide}
        unit={props.unit}
        tooltipType={props.tooltipType}
        id={props.id}
      />
      <HeatMapWithId
        {...everythingElse}
        xAxisId={xAxisId}
        yAxisId={yAxisId}
        legendType={legendType}
        shape={shape}
        hide={hide}
        isAnimationActive={isAnimationActive}
        animationBegin={animationBegin}
        animationDuration={animationDuration}
        animationEasing={animationEasing}
        data={data}
        needClip={needClip}
      />
    </>
  );
}

function HeatMapFn(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, defaultHeatMapProps);
  const isPanorama = useIsPanorama();

  return (
    <RegisterGraphicalItemId id={props.id} type="heat-map">
      {id => (
        <>
          <SetLegendPayload legendPayload={computeLegendPayloadFromHeatMapProps(props)} />
          <SetCartesianGraphicalItem
            type="heatMap"
            id={id}
            data={props.data}
            dataKey={props.dataKey}
            xAxisId={props.xAxisId}
            yAxisId={props.yAxisId}
            zAxisId={0}
            hide={props.hide}
            name={props.name}
            tooltipType={props.tooltipType}
            unit={props.unit}
            cellSize={props.cellSize}
            cellGap={props.cellGap}
            isPanorama={isPanorama}
          />
          <HeatMapImpl {...props} id={id} />
        </>
      )}
    </RegisterGraphicalItemId>
  );
}

/**
 * @provides LabelListContext
 * @provides CellReader
 * @consumes CartesianChartContext
 */
type HeatMapComponent = {
  <DataPointType = any, DataValueType = any>(props: Props<DataPointType, DataValueType>): React.ReactNode;
  (props: Props<any, any>): React.ReactNode;
};

export const HeatMap: HeatMapComponent = React.memo(HeatMapFn, propsAreEqual);

// @ts-expect-error we need to set the displayName for debugging purposes
HeatMap.displayName = 'HeatMap';
