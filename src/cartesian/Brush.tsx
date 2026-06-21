import * as React from 'react';
import {
  PureComponent,
  ReactElement,
  ReactNode,
  SVGAttributes,
  SVGProps,
  TouchEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { scalePoint, ScalePoint } from 'victory-vendor/d3-scale';
import range from 'es-toolkit/compat/range';
import { Layer } from '../container/Layer';
import { PanoramaPreview } from '../container/PanoramaPreview';
import { Text } from '../component/Text';
import { getValueByDataKey } from '../util/ChartUtils';
import { isNumber, isNotNil } from '../util/DataUtils';
import { generatePrefixStyle } from '../util/CssPrefixUtils';
import {
  CartesianLayout,
  CategoricalDomain,
  ChartOffsetInternal,
  DataConsumer,
  DataKey,
  Margin,
  NumberDomain,
  Padding,
} from '../util/types';
import { useChartData, useDataIndex } from '../context/chartDataContext';
import { BrushStartEndIndex, BrushUpdateDispatchContext, OnBrushUpdate } from '../context/brushUpdateContext';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { AxisId, defaultAxisId } from '../state/cartesianAxisSlice';
import { ChartData, setDataStartEndIndexes } from '../state/chartDataSlice';
import { HorizontalBrushSettings, setBrushSettings, setVerticalBrushWidth } from '../state/brushSlice';
import { selectAxisDomainIncludingNiceTicks, selectAxisRangeWithReverse } from '../state/selectors/axisSelectors';
import { selectAllXAxes, selectAllYAxes } from '../state/selectors/selectAllAxes';
import { selectSharedZoomLimits, selectZoom } from '../state/selectors/zoomSelectors';
import { selectBrushHeight, selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { selectMargin } from '../state/selectors/containerSelectors';
import { useBrushChartSynchronisation } from '../synchronisation/useChartSynchronisation';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { ZoomDimension } from '../state/zoomSlice';
import { AxisViewport, isRangeFlipped } from '../util/zoom/viewport';
import { clampDimensionToLimitsAnchored, panDimension, zoomDimension, ZoomLimits } from '../util/zoom/zoomActions';
import { axisViewportToPixelWindow, pixelWindowToAxisViewport } from '../util/zoom/viewportWindow';
import { viewportToWindow } from '../util/zoom/ZoomOptions';
import { useZoomState } from '../hooks';
import { AutoScaleAxis } from '../chart/zoom/AutoScaleAxis';
import { isWellFormedNumberDomain } from '../util/isDomainSpecifiedByUser';

type BrushTravellerType =
  | ReactElement<SVGElement>
  | ((props: Omit<TravellerProps, 'layout'>) => ReactElement<SVGElement>);

// Why is this tickFormatter different from the other TickFormatters? This one allows to return numbers too for some reason.
type BrushTickFormatter = (value: any, index: number) => number | string;
type BrushMode = 'slice' | 'zoom';
const DEFAULT_VERTICAL_BRUSH_WIDTH = 64;
const DEFAULT_VERTICAL_BRUSH_GAP = 8;

interface BrushProps<DataPointType = any, DataValueType = any> extends DataConsumer<DataPointType, DataValueType> {
  /**
   * The x-coordinate of brush.
   * If left undefined, it will be computed from the chart's offset and margins.
   */
  x?: number;
  /**
   * The y-coordinate of brush.
   * If left undefined, it will be computed from the chart's offset and margins.
   */
  y?: number;
  dy?: number;
  /**
   * Width of the brush in pixels.
   * If undefined, defaults to the chart width.
   */
  width?: number;
  className?: string;

  ariaLabel?: string;

  /**
   * Height of the brush in pixels.
   *
   * @defaultValue 40
   */
  height?: number;
  /**
   * The width of each traveller.
   *
   * @defaultValue 5
   */
  travellerWidth?: number;
  traveller?: BrushTravellerType;
  /**
   * Number of data points to skip between chart refreshes.
   *
   * @defaultValue 1
   */
  gap?: number;
  padding?: Padding;
  /**
   * The default start index of brush.
   * If the option is not set, the start index will be 0.
   */
  startIndex?: number;
  /**
   * The default end index of brush.
   * If the option is not set, the end index will be calculated by the length of data.
   */
  endIndex?: number;
  /**
   * The formatter function of ticks.
   */
  tickFormatter?: BrushTickFormatter;

  children?: ReactElement;
  /**
   * The handler of changing the active scope of brush.
   */
  onChange?: OnBrushUpdate;
  onDragEnd?: OnBrushUpdate;
  /**
   * @defaultValue 1000
   */
  leaveTimeOut?: number;
  /**
   * @defaultValue false
   */
  alwaysShowText?: boolean;
  /**
   * Direction of the brush rail. The default horizontal brush controls the X axis. A vertical brush
   * renders on the Y axis with horizontal travellers.
   *
   * @defaultValue 'horizontal'
   */
  layout?: CartesianLayout;
  /**
   * `slice` keeps the existing Brush behavior: it writes data start/end indexes. `zoom` makes the
   * brush edit the shared zoom viewport instead, without slicing chart data.
   *
   * @defaultValue 'slice'
   */
  mode?: BrushMode;
  /**
   * Backwards-compatible alias for `mode="zoom"`.
   */
  useZoomPan?: boolean;
  /**
   * In zoom mode, automatically fit the Y viewport to the data visible in the X viewport.
   *
   * @defaultValue false
   */
  autoScaleYDomain?: boolean;
  /**
   * Axis controlled in zoom mode.
   *
   * @defaultValue 'x'
   */
  axis?: ZoomDimension;
  /** Primary X axis used by zoom mode for orientation and labels. @defaultValue 0 */
  xAxisId?: AxisId;
  /** Primary Y axis used by zoom mode for orientation and labels. @defaultValue 0 */
  yAxisId?: AxisId;
  controls?: ReactNode;
  /** Zoom factor per wheel notch in zoom mode. @defaultValue 1.15 */
  wheelStep?: number;
  /** Fraction of the visible window panned per unit of wheel delta in zoom mode. @defaultValue 0.0015 */
  wheelPanStep?: number;
  /** Furthest zoom-out in zoom mode. @defaultValue 1 */
  minZoom?: number;
  /** Deepest zoom-in in zoom mode. @defaultValue 25 */
  maxZoom?: number;
}

export type Props = Omit<SVGProps<SVGElement>, 'onChange' | 'onDragEnd' | 'ref'> & BrushProps;

type InternalProps = Omit<SVGProps<SVGElement>, 'onChange' | 'onDragEnd' | 'ref'> &
  RequiresDefaultProps<BrushProps, typeof defaultBrushProps> & {
    heightIsExplicit?: boolean;
    widthIsExplicit?: boolean;
  };

type PropertiesFromContext = {
  x: number;
  y: number;
  width: number;
  height: number;
  data: ChartData;
  startIndex: number;
  endIndex: number;
  onChange: OnBrushUpdate;
};

function getPrimaryAxisId(axes: ReadonlyArray<{ id: AxisId }>, configured: AxisId | undefined): AxisId {
  const target = configured ?? defaultAxisId;
  return axes.some(axis => axis.id === target) ? target : (axes[0]?.id ?? defaultAxisId);
}

type BrushTravellerId = 'startX' | 'endX';

function DefaultTraveller(props: TravellerProps) {
  const { x, y, width, height, stroke, layout } = props;

  if (layout === 'vertical') {
    const lineX = Math.floor(x + width / 2) - 1;

    return (
      <>
        <rect x={x} y={y} width={width} height={height} fill={stroke} stroke="none" />
        <line x1={lineX} y1={y + 1} x2={lineX} y2={y + height - 1} fill="none" stroke="#fff" />
        <line x1={lineX + 2} y1={y + 1} x2={lineX + 2} y2={y + height - 1} fill="none" stroke="#fff" />
      </>
    );
  }

  const lineY = Math.floor(y + height / 2) - 1;

  return (
    <>
      <rect x={x} y={y} width={width} height={height} fill={stroke} stroke="none" />
      <line x1={x + 1} y1={lineY} x2={x + width - 1} y2={lineY} fill="none" stroke="#fff" />
      <line x1={x + 1} y1={lineY + 2} x2={x + width - 1} y2={lineY + 2} fill="none" stroke="#fff" />
    </>
  );
}

function Traveller(props: { travellerType: BrushTravellerType | undefined; travellerProps: TravellerProps }) {
  const { travellerProps, travellerType } = props;
  const { layout, ...publicTravellerProps } = travellerProps;

  if (React.isValidElement(travellerType)) {
    // @ts-expect-error element cloning disagrees with the types (and it should)
    return React.cloneElement(travellerType, publicTravellerProps);
  }
  if (typeof travellerType === 'function') {
    return travellerType(publicTravellerProps);
  }
  return <DefaultTraveller {...travellerProps} />;
}

function getNameFromUnknown(value: unknown): string | undefined {
  if (isNotNil(value) && typeof value === 'object' && 'name' in value && typeof value.name === 'string') {
    return value.name;
  }
  return undefined;
}

function getAriaLabel(data: ReadonlyArray<unknown>, startIndex: number, endIndex: number) {
  const start = getNameFromUnknown(data[startIndex]);
  const end = getNameFromUnknown(data[endIndex]);
  return `Min value: ${start}, Max value: ${end}`;
}

function TravellerLayer({
  otherProps,
  travellerX,
  id,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onTouchStart,
  onTravellerMoveKeyboard,
  onFocus,
  onBlur,
}: {
  id: BrushTravellerId;
  travellerX: number;
  otherProps: BrushWithStateProps;
  onMouseEnter: (e: MouseOrTouchEvent) => void;
  onMouseLeave: (e: MouseOrTouchEvent) => void;
  onMouseDown: (e: MouseOrTouchEvent) => void;
  onTouchStart: (e: MouseOrTouchEvent) => void;
  onTravellerMoveKeyboard: (direction: -1 | 1, travellerId: BrushTravellerId) => void;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const {
    y,
    x: xFromProps,
    width,
    travellerWidth,
    height,
    traveller,
    ariaLabel,
    data,
    startIndex,
    endIndex,
    layout,
    mode,
    useZoomPan,
    autoScaleYDomain,
    axis,
    controls,
    wheelStep,
    wheelPanStep,
    minZoom,
    maxZoom,
    controlledStartPosition,
    controlledEndPosition,
    endLabel,
    onZoomWindowChange,
    startLabel,
    zoomMode,
    heightIsExplicit,
    widthIsExplicit,
    ...propsForTraveller
  } = otherProps;
  const isVertical = layout === 'vertical';
  const travellerProps: TravellerProps = {
    x: isVertical ? xFromProps : Math.max(travellerX, xFromProps),
    y: isVertical ? Math.max(travellerX, y) : y,
    width: isVertical ? width : travellerWidth,
    height: isVertical ? travellerWidth : height,
    layout,
    ...svgPropertiesNoEvents(propsForTraveller),
  };

  const ariaLabelBrush = ariaLabel || getAriaLabel(data, startIndex, endIndex);

  return (
    <Layer
      tabIndex={0}
      role="slider"
      aria-label={ariaLabelBrush}
      aria-valuenow={travellerX}
      className="recharts-brush-traveller"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onKeyDown={e => {
        if (isVertical && !['ArrowUp', 'ArrowDown'].includes(e.key)) {
          return;
        }
        if (!isVertical && !['ArrowLeft', 'ArrowRight'].includes(e.key)) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        onTravellerMoveKeyboard(e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1, id);
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{ cursor: isVertical ? 'row-resize' : 'col-resize' }}
    >
      <Traveller travellerType={traveller} travellerProps={travellerProps} />
    </Layer>
  );
}

type TextOfTickProps = {
  index: number;
  data: ChartData;
  dataKey: DataKey<any, string | number> | undefined;
  tickFormatter: BrushTickFormatter | undefined;
};

/*
 * This one cannot be a React Component because React is not happy with it returning only string | number.
 * React wants a full React.JSX.Element but that is not compatible with Text component.
 */
function getTextOfTick(props: TextOfTickProps): number | string {
  const { index, data, tickFormatter, dataKey } = props;
  const text: string | number = getValueByDataKey(data[index], dataKey, index);

  return typeof tickFormatter === 'function' ? tickFormatter(text, index) : text;
}

function getDomainValueAtRatio(
  domain: NumberDomain | CategoricalDomain | undefined,
  ratio: number,
): number | string | undefined {
  if (isWellFormedNumberDomain(domain)) {
    const [min, max] = domain;
    return min + (max - min) * ratio;
  }

  if (domain == null || domain.length === 0) {
    return undefined;
  }

  const index = Math.min(Math.max(Math.round(ratio * (domain.length - 1)), 0), domain.length - 1);
  const value = domain[index];
  if (value instanceof Date) {
    return value.toString();
  }
  return value;
}

function getDomainLabel(
  domain: NumberDomain | CategoricalDomain | undefined,
  ratio: number,
  index: number,
  tickFormatter: BrushTickFormatter | undefined,
): number | string | undefined {
  const value = getDomainValueAtRatio(domain, ratio);
  if (value == null) {
    return undefined;
  }
  return typeof tickFormatter === 'function' ? tickFormatter(value, index) : value;
}

function getIndexInRange(valueRange: number[], x: number) {
  const len = valueRange.length;
  let start = 0;
  let end = len - 1;

  while (end - start > 1) {
    const middle = Math.floor((start + end) / 2);
    const middleValue = valueRange[middle];

    if (middleValue != null && middleValue > x) {
      end = middle;
    } else {
      start = middle;
    }
  }

  const endValue = valueRange[end];
  return endValue != null && x >= endValue ? end : start;
}

function getIndex({
  startX,
  endX,
  scaleValues,
  gap,
  data,
}: {
  startX: number;
  endX: number;
  scaleValues: number[];
  gap: number;
  data: ChartData;
}): BrushStartEndIndex {
  const lastIndex = data.length - 1;
  const min = Math.min(startX, endX);
  const max = Math.max(startX, endX);
  const minIndex = getIndexInRange(scaleValues, min);
  const maxIndex = getIndexInRange(scaleValues, max);
  return {
    startIndex: minIndex - (minIndex % gap),
    endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - (maxIndex % gap),
  };
}

function Background({
  x,
  y,
  width,
  height,
  fill,
  stroke,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string | undefined;
  stroke: string | undefined;
}) {
  return <rect stroke={stroke} fill={fill} x={x} y={y} width={width} height={height} />;
}

function BrushText({
  x,
  startIndex,
  endIndex,
  y,
  width,
  height,
  travellerWidth,
  stroke,
  tickFormatter,
  dataKey,
  data,
  startX,
  endX,
  layout,
  startLabel,
  endLabel,
}: {
  x: number;
  startIndex: number;
  endIndex: number;
  y: number;
  width: number;
  height: number;
  travellerWidth: number;
  stroke: string | undefined;
  tickFormatter: BrushTickFormatter | undefined;
  dataKey: DataKey<any> | undefined;
  data: ChartData;
  startX: number;
  endX: number;
  layout: CartesianLayout;
  startLabel: number | string | undefined;
  endLabel: number | string | undefined;
}) {
  const offset = 5;
  const attrs = {
    pointerEvents: 'none',
    fill: stroke,
  };
  const startText = startLabel ?? getTextOfTick({ index: startIndex, tickFormatter, dataKey, data });
  const endText = endLabel ?? getTextOfTick({ index: endIndex, tickFormatter, dataKey, data });

  if (layout === 'vertical') {
    return (
      <Layer className="recharts-brush-texts">
        <Text textAnchor="middle" verticalAnchor="end" x={x + width / 2} y={Math.min(startX, endX) - offset} {...attrs}>
          {startText}
        </Text>
        <Text
          textAnchor="middle"
          verticalAnchor="start"
          x={x + width / 2}
          y={Math.max(startX, endX) + travellerWidth + offset}
          {...attrs}
        >
          {endText}
        </Text>
      </Layer>
    );
  }

  return (
    <Layer className="recharts-brush-texts">
      <Text textAnchor="end" verticalAnchor="middle" x={Math.min(startX, endX) - offset} y={y + height / 2} {...attrs}>
        {startText}
      </Text>
      <Text
        textAnchor="start"
        verticalAnchor="middle"
        x={Math.max(startX, endX) + travellerWidth + offset}
        y={y + height / 2}
        {...attrs}
      >
        {endText}
      </Text>
    </Layer>
  );
}

function Slide({
  x,
  y,
  width,
  height,
  stroke,
  travellerWidth,
  startX,
  endX,
  layout,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onTouchStart,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  stroke: string | undefined;
  travellerWidth: number;
  startX: number;
  endX: number;
  layout: CartesianLayout;
  onMouseEnter: (e: MouseOrTouchEvent) => void;
  onMouseLeave: (e: MouseOrTouchEvent) => void;
  onMouseDown: (e: MouseOrTouchEvent) => void;
  onTouchStart: (e: MouseOrTouchEvent) => void;
}) {
  const isVertical = layout === 'vertical';
  const slideX = isVertical ? x : Math.min(startX, endX) + travellerWidth;
  const slideY = isVertical ? Math.min(startX, endX) + travellerWidth : y;
  const slideWidth = isVertical ? width : Math.max(Math.abs(endX - startX) - travellerWidth, 0);
  const slideHeight = isVertical ? Math.max(Math.abs(endX - startX) - travellerWidth, 0) : height;

  return (
    <rect
      className="recharts-brush-slide"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{ cursor: 'move' }}
      stroke="none"
      fill={stroke}
      fillOpacity={0.2}
      x={slideX}
      y={slideY}
      width={slideWidth}
      height={slideHeight}
    />
  );
}

interface State {
  isTravellerMoving?: boolean;
  isTravellerFocused?: boolean;
  isSlideMoving?: boolean;
  startX: number;
  endX: number;
  slideMoveStartX: number;
  movingTravellerId: BrushTravellerId | undefined;
  isTextActive?: boolean;
  brushMoveStartX: number;
  /** Pixel position of the moving traveller at the start of the drag (absolute positioning). */
  dragTravellerStart?: number;
  /** Page coordinate of the mouse at the start of the drag (absolute positioning). */
  dragMouseStart?: number;
  /** startX at the start of a slide drag (absolute positioning). */
  dragStartXInitial?: number;
  /** endX at the start of a slide drag (absolute positioning). */
  dragEndXInitial?: number;
  dragHeight?: number;
  dragRailLength?: number;
  dragRailStart?: number;
  dragWidth?: number;
  dragX?: number;
  dragY?: number;

  scale?: ScalePoint<number>;
  scaleValues?: number[];

  prevData?: ChartData;
  prevHeight?: number;
  prevWidth?: number;
  prevX?: number;
  prevY?: number;
  prevLayout?: CartesianLayout;
  prevTravellerWidth?: number;

  /**
   * Used to prevent re-setting of traveller position unless controlled via props.
   * This is not perfect as mouseout events will still cause the traveller to move position
   * but only when start/endIndex are controlled via props.
   * */
  prevStartIndexControlledFromProps?: number;
  prevEndIndexControlledFromProps?: number;
}

type TravellerProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  layout: CartesianLayout;
  stroke?: SVGAttributes<SVGElement>['stroke'];
};

const createScale = ({
  data,
  startIndex,
  endIndex,
  layout,
  x,
  y,
  width,
  height,
  travellerWidth,
}: {
  data: ChartData | undefined;
  startIndex: number;
  endIndex: number;
  layout: CartesianLayout;
  x: number;
  y: number;
  width: number;
  height: number;
  travellerWidth: number;
}) => {
  if (!data || !data.length) {
    return {};
  }

  const len = data.length;
  const rangeStart = layout === 'vertical' ? y : x;
  const rangeEnd = layout === 'vertical' ? y + height - travellerWidth : x + width - travellerWidth;
  const scale = scalePoint<number>().domain(range(0, len)).range([rangeStart, rangeEnd]);
  const scaleValues = scale
    .domain()
    .map(entry => scale(entry))
    .filter(isNotNil);

  return {
    isTextActive: false,
    isSlideMoving: false,
    isTravellerMoving: false,
    isTravellerFocused: false,
    startX: scale(startIndex),
    endX: scale(endIndex),
    scale,
    scaleValues,
  };
};

const isTouch = (e: TouchEvent<SVGElement> | React.MouseEvent<SVGElement>): e is TouchEvent<SVGElement> =>
  (e as TouchEvent<SVGElement>).changedTouches && !!(e as TouchEvent<SVGElement>).changedTouches.length;

type MouseOrTouchEvent = React.MouseEvent<SVGGElement> | TouchEvent<SVGGElement>;

function getPrimaryPageCoordinate(
  event: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent,
  layout: CartesianLayout,
): number {
  return layout === 'vertical' ? event.pageY : event.pageX;
}

function getPrimaryStart(props: Pick<BrushWithStateProps, 'layout' | 'x' | 'y'>): number {
  return props.layout === 'vertical' ? props.y : props.x;
}

function getPrimarySize(props: Pick<BrushWithStateProps, 'height' | 'layout' | 'width'>): number {
  return props.layout === 'vertical' ? props.height : props.width;
}

type BrushWithStateProps = InternalProps &
  PropertiesFromContext & {
    startIndexControlledFromProps?: number;
    endIndexControlledFromProps?: number;
    controlledStartPosition?: number;
    controlledEndPosition?: number;
    startLabel?: number | string;
    endLabel?: number | string;
    onLayerNodeChange?: (node: SVGGElement | null) => void;
    onZoomWindowChange?: (
      start: number,
      end: number,
      railStart?: number,
      railLength?: number,
      movingTraveller?: BrushTravellerId,
    ) => void;
    zoomMode?: boolean;
  };

class BrushWithState extends PureComponent<BrushWithStateProps, State> {
  constructor(props: BrushWithStateProps) {
    super(props);

    this.travellerDragStartHandlers = {
      startX: this.handleTravellerDragStart.bind(this, 'startX'),
      endX: this.handleTravellerDragStart.bind(this, 'endX'),
    };

    this.state = { brushMoveStartX: 0, movingTravellerId: undefined, endX: 0, startX: 0, slideMoveStartX: 0 };
  }

  leaveTimer: number | null | undefined;

  travellerDragStartHandlers: Record<BrushTravellerId, (event: MouseOrTouchEvent) => void>;

  layerRef: SVGGElement | null = null;

  static getDerivedStateFromProps(nextProps: BrushWithStateProps, prevState: State): Partial<State> | null {
    const {
      data,
      width,
      height,
      layout,
      x,
      y,
      travellerWidth,
      startIndex,
      endIndex,
      startIndexControlledFromProps,
      endIndexControlledFromProps,
      controlledStartPosition,
      controlledEndPosition,
    } = nextProps;

    if (prevState.scale && (prevState.isSlideMoving || prevState.isTravellerMoving)) {
      /*
       * Zoom mode: during a drag Redux is the single source of truth - the drag handlers dispatch
       * the new window (computed from values frozen at drag start) and never write positions into
       * local state. Applying the controlled positions here, mid-drag, makes the brush and the chart
       * read the same store update in the same commit: same frame, no drift, no feedback loop.
       */
      if (nextProps.zoomMode) {
        const draggedPositionState: Partial<State> = {};
        if (controlledStartPosition != null && controlledStartPosition !== prevState.startX) {
          draggedPositionState.startX = controlledStartPosition;
        }
        if (controlledEndPosition != null && controlledEndPosition !== prevState.endX) {
          draggedPositionState.endX = controlledEndPosition;
        }
        if (draggedPositionState.startX != null || draggedPositionState.endX != null) {
          return draggedPositionState;
        }
      }
      return null;
    }

    if (data !== prevState.prevData) {
      return {
        prevData: data,
        prevHeight: height,
        prevLayout: layout,
        prevTravellerWidth: travellerWidth,
        prevX: x,
        prevY: y,
        prevWidth: width,
        ...(data && data.length
          ? createScale({ data, height, layout, width, x, y, travellerWidth, startIndex, endIndex })
          : { scale: undefined, scaleValues: undefined }),
      };
    }
    const prevScale = prevState.scale;
    if (
      prevScale &&
      (width !== prevState.prevWidth ||
        height !== prevState.prevHeight ||
        layout !== prevState.prevLayout ||
        x !== prevState.prevX ||
        y !== prevState.prevY ||
        travellerWidth !== prevState.prevTravellerWidth)
    ) {
      const rangeStart = layout === 'vertical' ? y : x;
      const rangeEnd = layout === 'vertical' ? y + height - travellerWidth : x + width - travellerWidth;
      prevScale.range([rangeStart, rangeEnd]);

      const scaleValues = prevScale
        .domain()
        .map(entry => prevScale(entry))
        .filter(value => value != null);

      return {
        prevData: data,
        prevHeight: height,
        prevLayout: layout,
        prevTravellerWidth: travellerWidth,
        prevX: x,
        prevY: y,
        prevWidth: width,
        startX: prevScale(nextProps.startIndex),
        endX: prevScale(nextProps.endIndex),
        scaleValues,
      };
    }

    if (prevState.scale && !prevState.isSlideMoving && !prevState.isTravellerMoving) {
      const controlledPositionState: Partial<State> = {};
      if (controlledStartPosition != null && controlledStartPosition !== prevState.startX) {
        controlledPositionState.startX = controlledStartPosition;
      }
      if (controlledEndPosition != null && controlledEndPosition !== prevState.endX) {
        controlledPositionState.endX = controlledEndPosition;
      }
      if (controlledPositionState.startX != null || controlledPositionState.endX != null) {
        return controlledPositionState;
      }
    }

    if (
      prevState.scale &&
      !prevState.isSlideMoving &&
      !prevState.isTravellerMoving &&
      !prevState.isTravellerFocused &&
      !prevState.isTextActive
    ) {
      /*
       * If the startIndex or endIndex are controlled from the outside,
       * we need to keep the startX and end up to date.
       * Also we do not want to do that while user is interacting in the brush,
       * because this will trigger re-render and interrupt the drag&drop.
       */
      if (
        startIndexControlledFromProps != null &&
        prevState.prevStartIndexControlledFromProps !== startIndexControlledFromProps
      ) {
        return {
          startX: prevState.scale(startIndexControlledFromProps),
          prevStartIndexControlledFromProps: startIndexControlledFromProps,
        };
      }

      if (
        endIndexControlledFromProps != null &&
        prevState.prevEndIndexControlledFromProps !== endIndexControlledFromProps
      ) {
        return {
          endX: prevState.scale(endIndexControlledFromProps),
          prevEndIndexControlledFromProps: endIndexControlledFromProps,
        };
      }
    }

    return null;
  }

  componentWillUnmount() {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }

    this.props.onLayerNodeChange?.(null);
    this.detachDragEndListener();
  }

  setLayerRef = (node: SVGGElement | null) => {
    if (this.layerRef === node) {
      return;
    }
    this.layerRef = node;
    this.props.onLayerNodeChange?.(node);
  };

  handleDrag = (e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) => {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }

    if (this.state.isTravellerMoving) {
      this.handleTravellerMove(e);
    } else if (this.state.isSlideMoving) {
      this.handleSlideDrag(e);
    }
  };

  handleTouchMove = (e: TouchEvent<SVGGElement>) => {
    if (e.touches.length > 1) {
      return;
    }

    const touch = e.changedTouches?.[0];
    if (touch != null) {
      this.handleDrag(touch);
    }
  };

  attachDragEndListener() {
    window.addEventListener('mouseup', this.handleDragEnd, true);
    window.addEventListener('touchend', this.handleDragEnd, true);
    window.addEventListener('mousemove', this.handleDrag, true);
  }

  detachDragEndListener() {
    window.removeEventListener('mouseup', this.handleDragEnd, true);
    window.removeEventListener('touchend', this.handleDragEnd, true);
    window.removeEventListener('mousemove', this.handleDrag, true);
  }

  handleDragEnd = () => {
    this.setState(
      {
        dragHeight: undefined,
        dragRailLength: undefined,
        dragRailStart: undefined,
        dragWidth: undefined,
        dragX: undefined,
        dragY: undefined,
        dragTravellerStart: undefined,
        dragMouseStart: undefined,
        dragStartXInitial: undefined,
        dragEndXInitial: undefined,
        isTravellerMoving: false,
        isSlideMoving: false,
      },
      () => {
        const { endIndex, onDragEnd, startIndex } = this.props;
        if (!this.props.zoomMode) {
          onDragEnd?.({
            endIndex,
            startIndex,
          });
        }
      },
    );
    this.detachDragEndListener();
  };

  handleLeaveWrapper = () => {
    if (this.state.isTravellerMoving || this.state.isSlideMoving) {
      this.leaveTimer = window.setTimeout(this.handleDragEnd, this.props.leaveTimeOut);
    }
  };

  handleEnterSlideOrTraveller = () => {
    this.setState({
      isTextActive: true,
    });
  };

  handleLeaveSlideOrTraveller = () => {
    this.setState({
      isTextActive: false,
    });
  };

  handleSlideDragStart = (e: MouseOrTouchEvent) => {
    if (isTouch(e) && e.touches.length > 1) {
      return;
    }
    const event = isTouch(e) ? e.changedTouches[0] : e;
    if (event == null) {
      return;
    }

    this.setState({
      isTravellerMoving: false,
      isSlideMoving: true,
      dragHeight: this.props.height,
      dragRailLength: getPrimarySize(this.props) - this.props.travellerWidth,
      dragRailStart: getPrimaryStart(this.props),
      dragWidth: this.props.width,
      dragX: this.props.x,
      dragY: this.props.y,
      slideMoveStartX: getPrimaryPageCoordinate(event, this.props.layout),
      dragMouseStart: getPrimaryPageCoordinate(event, this.props.layout),
      dragStartXInitial: this.state.startX,
      dragEndXInitial: this.state.endX,
    });

    this.attachDragEndListener();
  };

  handleSlideDrag(e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) {
    const { slideMoveStartX, startX, endX, scaleValues } = this.state;
    if (scaleValues == null) {
      return;
    }
    const { travellerWidth, startIndex, endIndex, onChange, data, gap, onZoomWindowChange, zoomMode } = this.props;
    const primaryStart = this.state.dragRailStart ?? getPrimaryStart(this.props);
    const primarySize = (this.state.dragRailLength ?? getPrimarySize(this.props) - travellerWidth) + travellerWidth;
    let delta = getPrimaryPageCoordinate(e, this.props.layout) - slideMoveStartX;

    if (delta > 0) {
      delta = Math.min(
        delta,
        primaryStart + primarySize - travellerWidth - endX,
        primaryStart + primarySize - travellerWidth - startX,
      );
    } else if (delta < 0) {
      delta = Math.max(delta, primaryStart - startX, primaryStart - endX);
    }
    const newIndex = getIndex({
      startX: startX + delta,
      endX: endX + delta,
      data,
      gap,
      scaleValues,
    });

    if (zoomMode) {
      // Absolute position: compute from frozen drag-start values to avoid float drift.
      const { dragMouseStart, dragStartXInitial, dragEndXInitial } = this.state;
      let totalDelta = getPrimaryPageCoordinate(e, this.props.layout) - (dragMouseStart ?? slideMoveStartX);
      const initStart = dragStartXInitial ?? startX;
      const initEnd = dragEndXInitial ?? endX;
      if (totalDelta > 0) {
        totalDelta = Math.min(
          totalDelta,
          primaryStart + primarySize - travellerWidth - initEnd,
          primaryStart + primarySize - travellerWidth - initStart,
        );
      } else if (totalDelta < 0) {
        totalDelta = Math.max(totalDelta, primaryStart - initStart, primaryStart - initEnd);
      }
      const newStartX = initStart + totalDelta;
      const newEndX = initEnd + totalDelta;
      // Dispatch only: the positions come back as controlled props in the same commit as the chart
      // update (see handleTravellerMove for the full reasoning).
      onZoomWindowChange?.(newStartX, newEndX, this.state.dragRailStart, this.state.dragRailLength);
    } else {
      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }
      this.setState({
        startX: startX + delta,
        endX: endX + delta,
        slideMoveStartX: getPrimaryPageCoordinate(e, this.props.layout),
      });
    }
  }

  handleTravellerDragStart(id: BrushTravellerId, e: MouseOrTouchEvent) {
    if (isTouch(e) && e.touches.length > 1) {
      return;
    }
    const event = isTouch(e) ? e.changedTouches[0] : e;
    if (event == null) {
      return;
    }

    this.setState({
      isSlideMoving: false,
      isTravellerMoving: true,
      dragHeight: this.props.height,
      dragRailLength: getPrimarySize(this.props) - this.props.travellerWidth,
      dragRailStart: getPrimaryStart(this.props),
      dragWidth: this.props.width,
      dragX: this.props.x,
      dragY: this.props.y,
      movingTravellerId: id,
      brushMoveStartX: getPrimaryPageCoordinate(event, this.props.layout),
      dragTravellerStart: this.state[id],
      dragMouseStart: getPrimaryPageCoordinate(event, this.props.layout),
      // Freeze both sides so the zoom-mode drag never reads round-tripped state (no drift).
      dragStartXInitial: this.state.startX,
      dragEndXInitial: this.state.endX,
    });

    this.attachDragEndListener();
  }

  handleTravellerMove(e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) {
    const { brushMoveStartX, movingTravellerId, endX, startX, scaleValues } = this.state;
    if (movingTravellerId == null || scaleValues == null) {
      return;
    }
    const prevValue = this.state[movingTravellerId];

    const { travellerWidth, onChange, gap, data, onZoomWindowChange, zoomMode } = this.props;
    const primaryStart = this.state.dragRailStart ?? getPrimaryStart(this.props);
    const primarySize = (this.state.dragRailLength ?? getPrimarySize(this.props) - travellerWidth) + travellerWidth;
    const params = { startX: this.state.startX, endX: this.state.endX, data, gap, scaleValues };

    let delta = getPrimaryPageCoordinate(e, this.props.layout) - brushMoveStartX;
    if (delta > 0) {
      delta = Math.min(delta, primaryStart + primarySize - travellerWidth - prevValue);
    } else if (delta < 0) {
      delta = Math.max(delta, primaryStart - prevValue);
    }

    params[movingTravellerId] = prevValue + delta;

    const newIndex = getIndex(params);
    const { startIndex, endIndex } = newIndex;
    const isFullGap = () => {
      const lastIndex = data.length - 1;
      if (
        (movingTravellerId === 'startX' && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0)) ||
        (endX < startX && endIndex === lastIndex) ||
        (movingTravellerId === 'endX' && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0)) ||
        (endX > startX && endIndex === lastIndex)
      ) {
        return true;
      }
      return false;
    };

    if (zoomMode) {
      /*
       * Zoom mode: dispatch only. The window is computed from values frozen at drag start (total
       * mouse delta, not incremental - no float drift), Redux is the single writer, and the new
       * positions come back through getDerivedStateFromProps as controlled positions in the same
       * commit as the chart update. Writing positions to local state here would create a second
       * source of truth racing the store (the brush would trail the chart by a commit).
       */
      const { dragTravellerStart, dragMouseStart, dragStartXInitial, dragEndXInitial } = this.state;
      const initValue = dragTravellerStart ?? prevValue;
      let totalDelta = getPrimaryPageCoordinate(e, this.props.layout) - (dragMouseStart ?? brushMoveStartX);
      if (totalDelta > 0) {
        totalDelta = Math.min(totalDelta, primaryStart + primarySize - travellerWidth - initValue);
      } else if (totalDelta < 0) {
        totalDelta = Math.max(totalDelta, primaryStart - initValue);
      }
      const newValue = initValue + totalDelta;
      const newStartX = movingTravellerId === 'startX' ? newValue : (dragStartXInitial ?? startX);
      const newEndX = movingTravellerId === 'endX' ? newValue : (dragEndXInitial ?? endX);
      onZoomWindowChange?.(newStartX, newEndX, this.state.dragRailStart, this.state.dragRailLength, movingTravellerId);
    } else {
      this.setState(
        // @ts-expect-error not sure why typescript is not happy with this, partial update is fine in React
        {
          [movingTravellerId]: prevValue + delta,
          brushMoveStartX: getPrimaryPageCoordinate(e, this.props.layout),
        },
        () => {
          if (onChange && isFullGap()) {
            onChange(newIndex);
          }
        },
      );
    }
  }

  handleTravellerMoveKeyboard = (direction: 1 | -1, id: BrushTravellerId) => {
    const { data, gap, startIndex, endIndex, onZoomWindowChange, zoomMode } = this.props;
    // scaleValues are a list of coordinates. For example: [65, 250, 435, 620, 805, 990].
    const { scaleValues, startX, endX } = this.state;
    if (scaleValues == null) {
      return;
    }

    // unless we search for the closest scaleValue to the current coordinate
    // we need to move travelers via index when using the keyboard
    let currentIndex: number = -1;
    if (id === 'startX') {
      currentIndex = startIndex;
    } else if (id === 'endX') {
      currentIndex = endIndex;
    }

    if (currentIndex < 0 || currentIndex >= data.length) {
      return;
    }

    const newIndex = currentIndex + direction;
    if (newIndex === -1 || newIndex >= scaleValues.length) {
      return;
    }

    const newScaleValue = scaleValues[newIndex];
    if (newScaleValue == null) {
      return;
    }

    // Prevent travellers from being on top of each other or overlapping
    if ((id === 'startX' && newScaleValue >= endX) || (id === 'endX' && newScaleValue <= startX)) {
      return;
    }

    const nextStartX = id === 'startX' ? newScaleValue : startX;
    const nextEndX = id === 'endX' ? newScaleValue : endX;

    if (zoomMode) {
      // Dispatch to Redux only — controlled positions will update startX/endX via getDerivedStateFromProps.
      onZoomWindowChange?.(nextStartX, nextEndX, undefined, undefined, id);
    } else {
      this.setState(
        // @ts-expect-error not sure why typescript is not happy with this, partial update is fine in React
        {
          [id]: newScaleValue,
        },
        () => {
          this.props.onChange(
            getIndex({
              startX: this.state.startX,
              endX: this.state.endX,
              data,
              gap,
              scaleValues,
            }),
          );
        },
      );
    }
  };

  render() {
    const {
      data,
      className,
      children,
      x,
      y,
      dy,
      width,
      height,
      alwaysShowText,
      fill,
      stroke,
      startIndex,
      endIndex,
      travellerWidth,
      tickFormatter,
      dataKey,
      padding,
      layout,
    } = this.props;
    const { startX, endX, isTextActive, isSlideMoving, isTravellerMoving, isTravellerFocused } = this.state;

    if (
      !data ||
      !data.length ||
      !isNumber(x) ||
      !isNumber(y) ||
      !isNumber(width) ||
      !isNumber(height) ||
      width <= 0 ||
      height <= 0
    ) {
      return null;
    }

    const layerClass = clsx('recharts-brush', className);
    // touch-action none in zoom mode: pinch/drag must stay with the brush, not scroll the page
    // (React's touch listeners are passive, so preventDefault alone cannot stop the browser).
    const style: React.CSSProperties = {
      ...generatePrefixStyle('userSelect', 'none'),
      ...(this.props.zoomMode ? { touchAction: 'none' } : {}),
    };
    const activeX = this.state.dragX ?? x;
    const activeY = this.state.dragY ?? y;
    const activeWidth = this.state.dragWidth ?? width;
    const activeHeight = this.state.dragHeight ?? height;
    const calculatedY = activeY + (dy ?? 0);
    const activeProps = { ...this.props, x: activeX, y: calculatedY, width: activeWidth, height: activeHeight };

    return (
      <Layer
        ref={this.setLayerRef}
        className={layerClass}
        onMouseLeave={this.handleLeaveWrapper}
        onTouchMove={this.handleTouchMove}
        style={style}
      >
        <Background x={activeX} y={calculatedY} width={activeWidth} height={activeHeight} fill={fill} stroke={stroke} />
        <PanoramaPreview
          x={activeX}
          y={calculatedY}
          width={activeWidth}
          height={activeHeight}
          data={data}
          padding={padding}
        >
          {children}
        </PanoramaPreview>
        <Slide
          x={activeX}
          y={calculatedY}
          width={activeWidth}
          height={activeHeight}
          stroke={stroke}
          travellerWidth={travellerWidth}
          startX={startX}
          endX={endX}
          layout={layout}
          onMouseEnter={this.handleEnterSlideOrTraveller}
          onMouseLeave={this.handleLeaveSlideOrTraveller}
          onMouseDown={this.handleSlideDragStart}
          onTouchStart={this.handleSlideDragStart}
        />
        <TravellerLayer
          travellerX={startX}
          id="startX"
          otherProps={activeProps}
          onMouseEnter={this.handleEnterSlideOrTraveller}
          onMouseLeave={this.handleLeaveSlideOrTraveller}
          onMouseDown={this.travellerDragStartHandlers.startX}
          onTouchStart={this.travellerDragStartHandlers.startX}
          onTravellerMoveKeyboard={this.handleTravellerMoveKeyboard}
          onFocus={() => {
            this.setState({ isTravellerFocused: true });
          }}
          onBlur={() => {
            this.setState({ isTravellerFocused: false });
          }}
        />
        <TravellerLayer
          travellerX={endX}
          id="endX"
          otherProps={activeProps}
          onMouseEnter={this.handleEnterSlideOrTraveller}
          onMouseLeave={this.handleLeaveSlideOrTraveller}
          onMouseDown={this.travellerDragStartHandlers.endX}
          onTouchStart={this.travellerDragStartHandlers.endX}
          onTravellerMoveKeyboard={this.handleTravellerMoveKeyboard}
          onFocus={() => {
            this.setState({ isTravellerFocused: true });
          }}
          onBlur={() => {
            this.setState({ isTravellerFocused: false });
          }}
        />
        {(isTextActive || isSlideMoving || isTravellerMoving || isTravellerFocused || alwaysShowText) && (
          <BrushText
            x={activeX}
            startIndex={startIndex}
            endIndex={endIndex}
            y={calculatedY}
            width={activeWidth}
            height={activeHeight}
            travellerWidth={travellerWidth}
            stroke={stroke}
            tickFormatter={tickFormatter}
            dataKey={dataKey}
            data={data}
            startX={startX}
            endX={endX}
            layout={layout}
            startLabel={this.props.startLabel}
            endLabel={this.props.endLabel}
          />
        )}
      </Layer>
    );
  }
}

type BrushDimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function getPrimaryStartFromDimensions(dimensions: BrushDimensions, layout: CartesianLayout): number {
  return layout === 'vertical' ? dimensions.y : dimensions.x;
}

function getPrimarySizeFromDimensions(dimensions: BrushDimensions, layout: CartesianLayout): number {
  return layout === 'vertical' ? dimensions.height : dimensions.width;
}

type BrushZoomControlsContextValue = {
  axis: ZoomDimension;
  brushNode: SVGGElement | null;
  layout: CartesianLayout;
  railLength: number;
  railStart: number;
  travellerWidth: number;
  wheelPanStep: number;
  wheelStep: number;
  zoomBy: (factor: number, focusRatio: number, pan: boolean, delta: number) => void;
};

const BrushZoomControlsContext = createContext<BrushZoomControlsContextValue | null>(null);

export function useBrushZoomControls(): BrushZoomControlsContextValue {
  const context = useContext(BrushZoomControlsContext);
  if (context == null) {
    throw new Error('useBrushZoomControls must be used inside <Brush mode="zoom" />.');
  }
  return context;
}

type BrushPinchState = {
  distance: number;
};

export function BrushWheelZoom({ enabled = true }: { enabled?: boolean }) {
  const { brushNode, layout, railLength, railStart, wheelPanStep, wheelStep, zoomBy } = useBrushZoomControls();

  useEffect(() => {
    if (brushNode == null) {
      return undefined;
    }
    const wheel = (event: WheelEvent) => {
      if (!enabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const svgRect = brushNode.ownerSVGElement?.getBoundingClientRect();
      if (svgRect == null) {
        return;
      }
      const primaryClient = layout === 'vertical' ? event.clientY - svgRect.top : event.clientX - svgRect.left;
      if (railLength <= 0) {
        return;
      }
      const focusRatio = Math.min(Math.max((primaryClient - railStart) / railLength, 0), 1);
      const step = wheelStep > 1 ? wheelStep : 1.15;
      const factor = event.deltaY < 0 ? step : 1 / step;
      const rawDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      zoomBy(factor, focusRatio, event.shiftKey, rawDelta * wheelPanStep);
    };
    brushNode.addEventListener('wheel', wheel, { passive: false });
    return () => brushNode.removeEventListener('wheel', wheel);
  }, [brushNode, enabled, layout, railLength, railStart, wheelPanStep, wheelStep, zoomBy]);

  return null;
}

export function BrushPinchZoom({ enabled = true }: { enabled?: boolean }) {
  const { brushNode, layout, railLength, railStart, zoomBy } = useBrushZoomControls();
  const pinchState = React.useRef<BrushPinchState | null>(null);

  useEffect(() => {
    if (brushNode == null) {
      return undefined;
    }
    const touchStart = (event: globalThis.TouchEvent) => {
      if (event.touches.length < 2) {
        return;
      }
      if (!enabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const first = event.touches[0];
      const second = event.touches[1];
      if (first == null || second == null) {
        return;
      }
      pinchState.current = { distance: Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY) };
    };
    const touchMove = (event: globalThis.TouchEvent) => {
      if (event.touches.length < 2) {
        return;
      }
      const state = pinchState.current;
      if (!enabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (state == null) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const first = event.touches[0];
      const second = event.touches[1];
      if (first == null || second == null) {
        return;
      }
      const distance = Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY);
      if (distance <= 0 || state.distance <= 0) {
        return;
      }
      const svgRect = brushNode.ownerSVGElement?.getBoundingClientRect();
      if (svgRect == null) {
        return;
      }
      const center =
        layout === 'vertical' ? (first.clientY + second.clientY) / 2 : (first.clientX + second.clientX) / 2;
      const primaryClient = center - (layout === 'vertical' ? svgRect.top : svgRect.left);
      if (railLength <= 0) {
        return;
      }
      const focusRatio = Math.min(Math.max((primaryClient - railStart) / railLength, 0), 1);
      zoomBy(distance / state.distance, focusRatio, false, 0);
      pinchState.current = { distance };
    };
    const end = () => {
      pinchState.current = null;
    };
    brushNode.addEventListener('touchstart', touchStart, { passive: false });
    brushNode.addEventListener('touchmove', touchMove, { passive: false });
    brushNode.addEventListener('touchend', end);
    brushNode.addEventListener('touchcancel', end);
    return () => {
      brushNode.removeEventListener('touchstart', touchStart);
      brushNode.removeEventListener('touchmove', touchMove);
      brushNode.removeEventListener('touchend', end);
      brushNode.removeEventListener('touchcancel', end);
    };
  }, [brushNode, enabled, layout, railLength, railStart, zoomBy]);

  return null;
}

export function BrushZoomControls({ wheel = true, pinch = true }: { wheel?: boolean; pinch?: boolean }) {
  return (
    <>
      <BrushWheelZoom enabled={wheel} />
      <BrushPinchZoom enabled={pinch} />
    </>
  );
}

function getBrushDimensions(props: InternalProps, offset: ChartOffsetInternal, margin: Margin): BrushDimensions {
  const { height, heightIsExplicit, layout, width, widthIsExplicit, x, y } = props;

  if (layout === 'vertical') {
    const resolvedWidth = widthIsExplicit && isNumber(width) ? width : DEFAULT_VERTICAL_BRUSH_WIDTH;
    const resolvedHeight = heightIsExplicit && isNumber(height) ? height : offset.height;

    return {
      x: isNumber(x) ? x : offset.left + offset.width + DEFAULT_VERTICAL_BRUSH_GAP,
      y: isNumber(y) ? y : offset.top,
      width: resolvedWidth,
      height: resolvedHeight,
    };
  }

  return {
    height,
    x: isNumber(x) ? x : offset.left,
    y: isNumber(y) ? y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
    width: isNumber(width) ? width : offset.width,
  };
}

function BrushInternal(props: InternalProps) {
  const dispatch = useAppDispatch();
  // Brush zoom mode edits the viewport through the same public hook custom controls use
  // (the setter merges per axis, so a concurrent writer on the other axis is never clobbered).
  const [, setZoomWindows] = useZoomState();
  const chartData = useChartData();
  const dataIndexes = useDataIndex();
  const zoom = useAppSelector(selectZoom);
  const [brushNode, setBrushNode] = useState<SVGGElement | null>(null);
  const offset = useAppSelector(selectChartOffsetInternal);
  const registeredBrushHeight = useAppSelector(selectBrushHeight);
  const margin = useAppSelector(selectMargin);
  const onChangeFromContext = useContext(BrushUpdateDispatchContext);
  const {
    endIndex: endIndexFromProps,
    layout,
    maxZoom,
    minZoom,
    onChange: onChangeFromProps,
    startIndex: startIndexFromProps,
    travellerWidth,
    controls,
    wheelPanStep,
    wheelStep,
  } = props;
  const zoomMode = props.mode === 'zoom' || props.useZoomPan === true;
  const controlledZoomAxis: ZoomDimension = props.axis ?? (layout === 'vertical' ? 'y' : 'x');
  const xAxes = useAppSelector(selectAllXAxes) ?? [];
  const yAxes = useAppSelector(selectAllYAxes) ?? [];
  const controlledAxisId =
    controlledZoomAxis === 'x' ? getPrimaryAxisId(xAxes, props.xAxisId) : getPrimaryAxisId(yAxes, props.yAxisId);
  const controlledAxisRange = useAppSelector(state =>
    selectAxisRangeWithReverse(state, controlledZoomAxis === 'x' ? 'xAxis' : 'yAxis', controlledAxisId, false),
  );
  const controlledAxisDomain = useAppSelector(state =>
    selectAxisDomainIncludingNiceTicks(state, controlledZoomAxis === 'x' ? 'xAxis' : 'yAxis', controlledAxisId, false),
  );
  const controlledAxisFlipped = isRangeFlipped(controlledAxisRange);

  useEffect(() => {
    if (zoomMode) {
      return;
    }
    // start and end index can be controlled from props, and we need them to stay up-to-date in the Redux state too
    dispatch(setDataStartEndIndexes({ startIndex: startIndexFromProps, endIndex: endIndexFromProps }));
  }, [dispatch, endIndexFromProps, startIndexFromProps, zoomMode]);

  useBrushChartSynchronisation();

  const onChange = useCallback(
    (nextState: BrushStartEndIndex) => {
      if (dataIndexes == null) {
        return;
      }
      const { startIndex, endIndex } = dataIndexes;
      if (nextState.startIndex !== startIndex || nextState.endIndex !== endIndex) {
        onChangeFromContext?.(nextState);
        onChangeFromProps?.(nextState);
        dispatch(setDataStartEndIndexes(nextState));
      }
    },
    [onChangeFromProps, onChangeFromContext, dispatch, dataIndexes],
  );

  const brushDimensions = offset == null || margin == null ? null : getBrushDimensions(props, offset, margin);
  const primaryStart = brushDimensions == null ? 0 : getPrimaryStartFromDimensions(brushDimensions, layout);
  const primarySize = brushDimensions == null ? 0 : getPrimarySizeFromDimensions(brushDimensions, layout);
  const railLength = Math.max(primarySize - travellerWidth, 0);
  // Explicit props win; otherwise fall back to the chart-level limits registered by the zoom
  // setup (ZoomAndPan / the zoom prop), so one set of limits governs every control by default.
  const sharedLimits = useAppSelector(selectSharedZoomLimits);
  const zoomLimits = useMemo<ZoomLimits>(
    () => ({
      minZoom: minZoom ?? sharedLimits?.minZoom ?? 1,
      maxZoom: maxZoom ?? sharedLimits?.maxZoom ?? 25,
    }),
    [maxZoom, minZoom, sharedLimits],
  );
  const onZoomWheel = useCallback(
    (factor: number, focusRatio: number, pan: boolean, delta: number) => {
      if (!zoomMode || zoom == null) {
        return;
      }
      const current: AxisViewport = zoom[controlledZoomAxis];
      const viewport = pan
        ? panDimension(current, (controlledAxisFlipped ? -1 : 1) * delta)
        : zoomDimension(current, factor, controlledAxisFlipped ? 1 - focusRatio : focusRatio, zoomLimits);
      setZoomWindows({ [controlledZoomAxis]: viewportToWindow(viewport) });
    },
    [controlledAxisFlipped, controlledZoomAxis, setZoomWindows, zoom, zoomLimits, zoomMode],
  );
  const controlsContext = useMemo<BrushZoomControlsContextValue>(
    () => ({
      axis: controlledZoomAxis,
      brushNode,
      layout,
      railLength,
      railStart: primaryStart,
      travellerWidth,
      wheelPanStep,
      wheelStep,
      zoomBy: onZoomWheel,
    }),
    [
      brushNode,
      controlledZoomAxis,
      layout,
      onZoomWheel,
      primaryStart,
      railLength,
      travellerWidth,
      wheelPanStep,
      wheelStep,
    ],
  );

  if (
    brushDimensions == null ||
    dataIndexes == null ||
    chartData == null ||
    !chartData.length ||
    zoom == null ||
    (layout === 'horizontal' && registeredBrushHeight !== props.height)
  ) {
    return null;
  }

  let { startIndex, endIndex } = dataIndexes;
  if (zoomMode) {
    const lastIndex = chartData.length - 1;
    const viewport = zoom[controlledZoomAxis];
    startIndex = Math.max(0, Math.min(lastIndex, Math.floor(viewport.startRatio * lastIndex)));
    endIndex = Math.max(startIndex, Math.min(lastIndex, Math.ceil(viewport.endRatio * lastIndex)));
  }
  const { x, y, width, height } = brushDimensions;
  const controlledWindow =
    zoomMode && railLength > 0
      ? axisViewportToPixelWindow(zoom[controlledZoomAxis], primaryStart, railLength, controlledAxisFlipped)
      : undefined;
  const controlledStartLabel =
    zoomMode && layout === 'vertical'
      ? getDomainLabel(
          controlledAxisDomain,
          controlledAxisFlipped ? zoom[controlledZoomAxis].endRatio : zoom[controlledZoomAxis].startRatio,
          0,
          props.tickFormatter,
        )
      : undefined;
  const controlledEndLabel =
    zoomMode && layout === 'vertical'
      ? getDomainLabel(
          controlledAxisDomain,
          controlledAxisFlipped ? zoom[controlledZoomAxis].startRatio : zoom[controlledZoomAxis].endRatio,
          1,
          props.tickFormatter,
        )
      : undefined;
  const onZoomWindowChange = (
    start: number,
    end: number,
    railStart = primaryStart,
    activeRailLength = railLength,
    movingTraveller?: BrushTravellerId,
  ) => {
    if (!zoomMode || activeRailLength <= 0) {
      return;
    }
    let windowStart = start;
    let windowEnd = end;
    if (movingTraveller != null) {
      /*
       * A traveller drag obeys minZoom/maxZoom in pixel space, against the fixed traveller: the
       * dragged handle stops at the limit, the anchored one holds, and the handles can never
       * cross (which would silently swap which edge the clamp anchors on).
       */
      const minSize = activeRailLength / zoomLimits.maxZoom;
      const maxSize = activeRailLength * Math.min(1, 1 / zoomLimits.minZoom);
      if (movingTraveller === 'startX') {
        windowStart = Math.min(Math.max(windowStart, windowEnd - maxSize), windowEnd - minSize);
      } else {
        windowEnd = Math.max(Math.min(windowEnd, windowStart + maxSize), windowStart + minSize);
      }
    }
    const viewport = pixelWindowToAxisViewport(
      windowStart,
      windowEnd,
      railStart,
      activeRailLength,
      controlledAxisFlipped,
    );
    // The slide and programmatic paths keep their width, so the anchored clamp passes them through.
    const clamped =
      movingTraveller != null
        ? viewport
        : clampDimensionToLimitsAnchored(viewport, zoom[controlledZoomAxis], zoomLimits);
    setZoomWindows({ [controlledZoomAxis]: viewportToWindow(clamped) });
  };

  const contextProperties: PropertiesFromContext = {
    data: chartData,
    x,
    y,
    width,
    height,
    startIndex,
    endIndex,
    onChange: zoomMode ? () => {} : onChange,
  };
  return (
    <>
      {/* Fit the axis OPPOSITE to the one this brush edits. On a categorical target AutoScaleAxis
          bails out by itself (numeric domains only), so this is safe in every layout. */}
      {zoomMode && props.autoScaleYDomain && <AutoScaleAxis axis={controlledZoomAxis === 'x' ? 'y' : 'x'} />}
      <BrushZoomControlsContext.Provider value={controlsContext}>
        <BrushWithState
          {...props}
          {...contextProperties}
          startIndexControlledFromProps={startIndexFromProps ?? undefined}
          endIndexControlledFromProps={endIndexFromProps ?? undefined}
          controlledStartPosition={controlledWindow?.start}
          controlledEndPosition={controlledWindow?.end}
          startLabel={controlledStartLabel}
          endLabel={controlledEndLabel}
          onLayerNodeChange={setBrushNode}
          onZoomWindowChange={onZoomWindowChange}
          zoomMode={zoomMode}
        />
        {zoomMode && (controls === undefined ? <BrushZoomControls /> : controls)}
      </BrushZoomControlsContext.Provider>
    </>
  );
}

function BrushSettingsDispatcher(
  props: HorizontalBrushSettings & { layout: CartesianLayout; widthIsExplicit: boolean },
): null {
  const dispatch = useAppDispatch();
  const { height, layout, padding, width, widthIsExplicit, x, y } = props;
  const paddingTop = padding.top;
  const paddingRight = padding.right;
  const paddingBottom = padding.bottom;
  const paddingLeft = padding.left;

  useEffect(() => {
    if (layout === 'vertical') {
      const brushWidth = widthIsExplicit && isNumber(width) ? width : DEFAULT_VERTICAL_BRUSH_WIDTH;
      dispatch(setVerticalBrushWidth(brushWidth + DEFAULT_VERTICAL_BRUSH_GAP));
      return () => {
        dispatch(setVerticalBrushWidth(null));
      };
    }
    dispatch(
      setBrushSettings({
        height,
        padding: { top: paddingTop, right: paddingRight, bottom: paddingBottom, left: paddingLeft },
        width,
        x,
        y,
      }),
    );
    return () => {
      dispatch(setBrushSettings(null));
    };
  }, [dispatch, height, layout, paddingBottom, paddingLeft, paddingRight, paddingTop, width, widthIsExplicit, x, y]);
  return null;
}

export const defaultBrushProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: '#fff',
  stroke: '#666',
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1000,
  alwaysShowText: false,
  layout: 'horizontal',
  mode: 'slice',
  autoScaleYDomain: false,
  wheelStep: 1.15,
  wheelPanStep: 0.0015,
} as const satisfies Partial<Props>;

/**
 * Renders a scrollbar-like selector with travellers and an optional panorama.
 *
 * By default, `mode="slice"` keeps the historical behavior: moving the brush changes the active data indexes used by
 * the chart. Use `mode="zoom"` when the Brush should edit the shared zoom viewport instead of slicing data. In zoom
 * mode it stays synchronized with `ZoomAndPan`, `Minimap`, and controlled zoom state. Zoom mode mounts
 * `<BrushZoomControls />` by default; replace the `controls` prop to compose Brush zoom gestures or bring your own
 * controls with `useBrushZoomControls()`.
 *
 * If a chart is synchronized with other charts using the `syncId` prop on the chart,
 * slice-mode brush indexes synchronize between all synchronized charts.
 *
 * @see {@link https://recharts.github.io/en-US/examples/BrushBarChart/ BarChart with Brush}
 * @see {@link https://recharts.github.io/en-US/examples/SynchronizedLineChart/ Synchronized Brush}
 *
 * @consumes CartesianChartContext
 */
export function Brush(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, defaultBrushProps);
  return (
    <>
      <BrushSettingsDispatcher
        height={props.height}
        layout={props.layout}
        x={props.x}
        y={props.y}
        width={props.width}
        widthIsExplicit={outsideProps.width != null}
        padding={props.padding}
      />
      <BrushInternal
        {...props}
        heightIsExplicit={outsideProps.height != null}
        widthIsExplicit={outsideProps.width != null}
      />
    </>
  );
}
Brush.displayName = 'Brush';
