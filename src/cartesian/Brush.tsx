/*
 * After we refactor classes to functional components, we can remove this eslint-disable
 */
/* eslint-disable max-classes-per-file */
import * as React from 'react';
import {
  Children,
  PureComponent,
  ReactElement,
  SVGAttributes,
  SVGProps,
  TouchEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { scalePoint, ScalePoint } from 'victory-vendor/d3-scale';
import { range } from 'es-toolkit';
import { Layer } from '../container/Layer';
import { Text } from '../component/Text';
import { getValueByDataKey } from '../util/ChartUtils';
import { isNumber } from '../util/DataUtils';
import { generatePrefixStyle } from '../util/CssPrefixUtils';
import { DataKey, Padding } from '../util/types';
import { filterProps } from '../util/ReactUtils';
import { useChartData, useDataIndex } from '../context/chartDataContext';
import { useOffset } from '../context/chartLayoutContext';
import { BrushStartEndIndex, OnBrushUpdate, BrushUpdateDispatchContext } from '../context/brushUpdateContext';
import { useAppDispatch, useAppSelector, useSetZoom, useZoom } from '../state/hooks';
import { setDataStartEndIndexes } from '../state/chartDataSlice';
import { BrushInstanceSettings, setBrushSettings, removeBrushSettings } from '../state/brushSlice';
import { selectBrushDimensions } from '../state/selectors/brushSelectors';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';
import { selectAllXAxes } from '../state/selectors/selectAllAxes';
import { useBrushChartSynchronisation } from '../synchronisation/useChartSynchronisation';
import { BrushPreview } from '../container/BrushPreview';

type BrushTravellerType = ReactElement<SVGElement> | ((props: TravellerProps) => ReactElement<SVGElement>);

// Why is this tickFormatter different from the other TickFormatters? This one allows to return numbers too for some reason.
type BrushTickFormatter = (value: any, index: number) => number | string;

interface BrushProps {
  x?: number;
  y?: number;
  dy?: number;
  width?: number;
  className?: string;

  ariaLabel?: string;

  height: number;
  travellerWidth?: number;
  traveller?: BrushTravellerType;
  gap?: number;
  padding?: Padding;

  dataKey?: DataKey<any>;
  startIndex?: number;
  endIndex?: number;
  tickFormatter?: BrushTickFormatter;
  layout?: 'horizontal' | 'vertical';

  children?: ReactElement;

  onChange?: OnBrushUpdate;
  onDragEnd?: OnBrushUpdate;
  leaveTimeOut?: number;
  alwaysShowText?: boolean;

  /** Integrate with zoom/pan system instead of truncating data */
  useZoomPan?: boolean;

  /** Automatically adjust Y domain based on the visible X range when using zoom */
  autoScaleYDomain?: boolean;

  /** Axis to control (auto-detected from layout if not specified) */
  axis?: 'x' | 'y';

  /** Position brush at top */
  top?: boolean;
  /** Position brush at bottom */
  bottom?: boolean;
  /** Position brush at left */
  left?: boolean;
  /** Position brush at right */
  right?: boolean;

  /** Enable animations in the main chart when brush changes (disabled by default) */
  enableAnimation?: boolean;

  /** Enable scroll to zoom on brush */
  allowScrollZoom?: boolean;

  /** Enable pinch to zoom on mobile brush */
  allowPinchZoom?: boolean;
}

export type Props = Omit<SVGProps<SVGElement>, 'onChange' | 'onDragEnd' | 'ref'> & BrushProps;

type PropertiesFromContext = {
  x: number;
  y: number;
  width: number;
  height: number;
  data: any[];
  startIndex: number;
  endIndex: number;
  onChange: OnBrushUpdate;
};

type BrushTravellerId = 'startX' | 'endX';

interface TravellerMoveParams {
  startX: number;
  endX: number;
  data: any[];
  gap: number;
  scaleValues: number[];
}

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

function Traveller(props: { travellerType: BrushTravellerType; travellerProps: TravellerProps }) {
  const { travellerProps, travellerType } = props;

  if (React.isValidElement(travellerType)) {
    // @ts-expect-error element cloning disagrees with the types (and it should)
    return React.cloneElement(travellerType, travellerProps);
  }
  if (typeof travellerType === 'function') {
    return travellerType(travellerProps);
  }
  return <DefaultTraveller {...travellerProps} />;
}

function TravellerLayer({
  otherProps,
  travellerPos,
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
  travellerPos: number;
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
    y: yFromProps,
    x: xFromProps,
    travellerWidth,
    height,
    traveller,
    ariaLabel,
    data,
    startIndex,
    endIndex,
    layout = 'horizontal',
  } = otherProps;

  const travellerProps: TravellerProps = {
    ...filterProps(otherProps, false),
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    layout,
  };

  if (layout === 'vertical') {
    travellerProps.x = xFromProps;
    travellerProps.y = Math.max(travellerPos, yFromProps);
    travellerProps.width = otherProps.width;
    travellerProps.height = travellerWidth;
  } else {
    travellerProps.x = Math.max(travellerPos, xFromProps);
    travellerProps.y = yFromProps;
    travellerProps.width = travellerWidth;
    travellerProps.height = height;
  }

  const ariaLabelBrush = ariaLabel || `Min value: ${data[startIndex]?.name}, Max value: ${data[endIndex]?.name}`;

  return (
    <Layer
      tabIndex={0}
      role="slider"
      aria-label={ariaLabelBrush}
      aria-valuenow={travellerPos}
      className="recharts-brush-traveller"
      data-id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onKeyDown={e => {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        let direction: 1 | -1;
        if (layout === 'horizontal') {
          direction = e.key === 'ArrowRight' ? 1 : -1;
        } else {
          direction = e.key === 'ArrowDown' ? 1 : -1;
        }
        onTravellerMoveKeyboard(direction, id);
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{ cursor: layout === 'vertical' ? 'row-resize' : 'col-resize' }}
    >
      <Traveller travellerType={traveller} travellerProps={travellerProps} />
    </Layer>
  );
}

type TextOfTickProps = {
  index: number;
  data: any[];
  dataKey: DataKey<any>;
  tickFormatter: BrushTickFormatter;
};

/*
 * This one cannot be a React Component because React is not happy with it returning only string | number.
 * React wants a full React.JSX.Element but that is not compatible with Text component.
 */
function getTextOfTick(props: TextOfTickProps): number | string {
  const { index, data, tickFormatter, dataKey } = props;
  const text = getValueByDataKey(data[index], dataKey, index);

  // @ts-expect-error getValueByDataKey does not validate the output type
  return typeof tickFormatter === 'function' ? tickFormatter(text, index) : text;
}

function getIndexInRange(valueRange: number[], x: number) {
  if (!valueRange) return -1;

  const len = valueRange.length;
  let start = 0;
  let end = len - 1;

  while (end - start > 1) {
    const middle = Math.floor((start + end) / 2);

    if (valueRange[middle] > x) {
      end = middle;
    } else {
      start = middle;
    }
  }

  return x >= valueRange[end] ? end : start;
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
  data: any[];
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
  fill: string;
  stroke: string;
}) {
  return <rect stroke={stroke} fill={fill} x={x} y={y} width={width} height={height} />;
}

function BrushText({
  startIndex,
  endIndex,
  y,
  height,
  travellerWidth,
  stroke,
  tickFormatter,
  dataKey,
  data,
  startX,
  endX,
  layout,
  x,
  width,
}: {
  startIndex: number;
  endIndex: number;
  y: number;
  height: number;
  travellerWidth: number;
  stroke: string;
  tickFormatter: BrushTickFormatter;
  dataKey: DataKey<any>;
  data: any[];
  startX: number;
  endX: number;
  layout: 'horizontal' | 'vertical';
  x: number;
  width: number;
}) {
  const offset = 5;
  const attrs = {
    pointerEvents: 'none',
    fill: stroke,
  };

  const text1 = getTextOfTick({ index: startIndex, tickFormatter, dataKey, data });
  const text2 = getTextOfTick({ index: endIndex, tickFormatter, dataKey, data });

  if (layout === 'vertical') {
    const verticalAttrs = {
      ...attrs,
      x: x + width / 2,
      textAnchor: 'middle' as const,
    };
    return (
      <Layer className="recharts-brush-texts">
        <Text verticalAnchor="end" y={Math.min(startX, endX) - offset} {...verticalAttrs}>
          {text1}
        </Text>
        <Text verticalAnchor="start" y={Math.max(startX, endX) + travellerWidth + offset} {...verticalAttrs}>
          {text2}
        </Text>
      </Layer>
    );
  }
  return (
    <Layer className="recharts-brush-texts">
      <Text textAnchor="end" verticalAnchor="middle" x={Math.min(startX, endX) - offset} y={y + height / 2} {...attrs}>
        {text1}
      </Text>
      <Text
        textAnchor="start"
        verticalAnchor="middle"
        x={Math.max(startX, endX) + travellerWidth + offset}
        y={y + height / 2}
        {...attrs}
      >
        {text2}
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
  stroke: string;
  travellerWidth: number;
  startX: number;
  endX: number;
  layout: 'horizontal' | 'vertical';
  onMouseEnter: (e: MouseOrTouchEvent) => void;
  onMouseLeave: (e: MouseOrTouchEvent) => void;
  onMouseDown: (e: MouseOrTouchEvent) => void;
  onTouchStart: (e: MouseOrTouchEvent) => void;
}) {
  const slideX = layout === 'vertical' ? x : Math.min(startX, endX) + travellerWidth;
  const slideY = layout === 'vertical' ? Math.min(startX, endX) + travellerWidth : y;
  const slideWidth = layout === 'vertical' ? width : Math.max(Math.abs(endX - startX) - travellerWidth, 0);
  const slideHeight = layout === 'vertical' ? Math.max(Math.abs(endX - startX) - travellerWidth, 0) : height;

  return (
    <rect
      className="recharts-brush-slide"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onTouchStart={(e) => {
        // Only handle single-finger touches - let multi-finger go to master handler
        if (e.touches.length === 1) {
          onTouchStart(e);
        }
        // Don't preventDefault to allow pinch zoom
      }}
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

function Panorama({
  x,
  y,
  width,
  height,
  data,
  children,
  padding,
  layout,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  data: any[];
  children: ReactElement;
  padding: Padding;
  layout: 'horizontal' | 'vertical';
}) {
  const isPanoramic = React.Children.count(children) === 1;
  if (!isPanoramic) {
    return null;
  }
  const chartElement = Children.only(children);

  if (!chartElement) {
    return null;
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <BrushPreview width={width} height={height}>
        {React.cloneElement(chartElement, {
          data,
          margin: padding,
        })}
      </BrushPreview>
    </g>
  );
}

interface State {
  isTravellerMoving?: boolean;
  isTravellerFocused?: boolean;
  isSlideMoving?: boolean;
  startX?: number;
  endX?: number;
  slideMoveStartX?: number;
  movingTravellerId?: BrushTravellerId;
  isTextActive?: boolean;
  brushMoveStartX?: number;

  scale?: ScalePoint<number>;
  scaleValues?: number[];

  prevData?: any[];
  prevWidth?: number;
  prevX?: number;
  prevTravellerWidth?: number;
  prevY?: number;
  prevHeight?: number;

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
  stroke?: SVGAttributes<SVGElement>['stroke'];
  layout?: 'horizontal' | 'vertical';
};

const createScale = ({
  data,
  startIndex,
  endIndex,
  x,
  y,
  width,
  height,
  travellerWidth,
  layout,
}: {
  data?: any[];
  startIndex?: number;
  endIndex?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  travellerWidth?: number;
  layout?: 'horizontal' | 'vertical';
}) => {
  if (!data || !data.length) {
    return {};
  }

  const len = data.length;
  const scale = scalePoint<number>().domain(range(0, len));
  if (layout === 'vertical') {
    scale.range([y, y + height - travellerWidth]);
  } else {
    scale.range([x, x + width - travellerWidth]);
  }
  const scaleValues = scale.domain().map(entry => scale(entry));

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

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

type BrushWithStateProps = Props &
  PropertiesFromContext & {
    startIndexControlledFromProps?: number;
    endIndexControlledFromProps?: number;
    /** callback for every pointer move with raw positions */
    onBrushMove?: (startX: number, endX: number) => void;
    onBrushInteractionStart?: () => void;
    onBrushInteractionEnd?: () => void;
    onBrushPan?: (delta: number, layout: 'horizontal' | 'vertical') => void;
    onBrushResize?: (
      start: number,
      end: number,
      movingTravellerId: BrushTravellerId,
      layout: 'horizontal' | 'vertical',
    ) => void;
    controlledStart?: number;
    controlledEnd?: number;
  };

class BrushWithState extends PureComponent<BrushWithStateProps, State> {
  private pinchStart: { distance: number; startX: number; endX: number; centerX: number; centerY: number } | null =
    null;

  private lastTap = 0;

  private doubleClickTimer: NodeJS.Timeout | null = null;

  private isDoubleClickHold = false;

  private doubleClickPos: { x: number; y: number } | null = null;

  private selectStart: { x: number; y: number } | null = null;

  private selectRect: { x: number; y: number; w: number; h: number } | null = null;

  private pointers = new Map<number, { x: number; y: number }>();

  private gestureTimeout: NodeJS.Timeout | null = null;

  private gestureDecided = false;



  constructor(props: BrushWithStateProps) {
    super(props);

    this.travellerDragStartHandlers = {
      startX: this.handleTravellerDragStart.bind(this, 'startX'),
      endX: this.handleTravellerDragStart.bind(this, 'endX'),
    };

    this.state = {};
  }

  leaveTimer?: number;

  travellerDragStartHandlers?: Record<BrushTravellerId, (event: MouseOrTouchEvent) => void>;

  static getDerivedStateFromProps(nextProps: BrushWithStateProps, prevState: State): State {
    const {
      data,
      width,
      height,
      x,
      y,
      travellerWidth,
      startIndex,
      endIndex,
      startIndexControlledFromProps,
      endIndexControlledFromProps,
      layout,
    } = nextProps;

    if (data !== prevState.prevData) {
      return {
        prevData: data,
        prevTravellerWidth: travellerWidth,
        prevX: x,
        prevY: y,
        prevWidth: width,
        prevHeight: height,
        ...(data && data.length
          ? createScale({ data, width, x, travellerWidth, startIndex, endIndex, layout, y, height })
          : { scale: null, scaleValues: null }),
      };
    }
    if (
      prevState.scale &&
      (width !== prevState.prevWidth ||
        x !== prevState.prevX ||
        travellerWidth !== prevState.prevTravellerWidth ||
        y !== prevState.prevY ||
        height !== prevState.prevHeight)
    ) {
      if (layout === 'vertical') {
        prevState.scale.range([y, y + height - travellerWidth]);
      } else {
        prevState.scale.range([x, x + width - travellerWidth]);
      }

      const scaleValues = prevState.scale.domain().map(entry => prevState.scale(entry));

      return {
        prevData: data,
        prevTravellerWidth: travellerWidth,
        prevX: x,
        prevY: y,
        prevWidth: width,
        prevHeight: height,
        startX: prevState.scale(nextProps.startIndex),
        endX: prevState.scale(nextProps.endIndex),
        scaleValues,
      };
    }

    if (
      !prevState.isSlideMoving && 
      !prevState.isTravellerMoving && 
      !prevState.isTravellerFocused && 
      !prevState.isTextActive
    ) {
      const newState: Partial<State> = {};

      if (nextProps.useZoomPan) {
        // ──────────────────────────────────────────────────────────────────────
        // Clamp incoming controlled positions so the internal state never
        // leaves the brush track when zoom‑syncing.
        // ──────────────────────────────────────────────────────────────────────
        if (nextProps.controlledStart != null && 
            (prevState.startX == null || Math.abs(nextProps.controlledStart - (prevState.startX || 0)) > 1)) {
          
          if (isFinite(nextProps.controlledStart)) {
            const brushStart = (layout === 'horizontal' ? x : y) || 0;
            const brushSize = (layout === 'horizontal' ? width : height) || 0;
            const travWidth = travellerWidth || 5;
            const minPos = brushStart;
            const maxPos = brushStart + brushSize - travWidth;
            newState.startX = clamp(nextProps.controlledStart, minPos, maxPos);
          }
        }
        if (nextProps.controlledEnd != null && 
            (prevState.endX == null || Math.abs(nextProps.controlledEnd - (prevState.endX || 0)) > 1)) {
          
          if (isFinite(nextProps.controlledEnd)) {
            const brushStart = (layout === 'horizontal' ? x : y) || 0;
            const brushSize = (layout === 'horizontal' ? width : height) || 0;
            const travWidth = travellerWidth || 5;
            const minPos = brushStart;
            const maxPos = brushStart + brushSize - travWidth;
            newState.endX = clamp(nextProps.controlledEnd, minPos, maxPos);
          }
        }
      } else if (prevState.scale) {
        // Only snap to scale values when not interacting (like in original code)
        if (
          startIndexControlledFromProps != null &&
          prevState.prevStartIndexControlledFromProps !== startIndexControlledFromProps
        ) {
          const scaleValue = prevState.scale(startIndexControlledFromProps);
          // Apply boundaries to scale-based positions with absolute safety
          const brushStart = (layout === 'horizontal' ? x : y) || 0;
          const brushSize = (layout === 'horizontal' ? width : height) || 0;
          const travWidth = travellerWidth || 5;
          const minPos = brushStart;
          const maxPos = brushStart + brushSize - travWidth;
          const safeScaleValue = Math.max(minPos, Math.min(scaleValue, maxPos));
          newState.startX = safeScaleValue;
          newState.prevStartIndexControlledFromProps = startIndexControlledFromProps;
        }

        if (
          endIndexControlledFromProps != null &&
          prevState.prevEndIndexControlledFromProps !== endIndexControlledFromProps
        ) {
          const scaleValue = prevState.scale(endIndexControlledFromProps);
          // Apply boundaries to scale-based positions with absolute safety
          const brushStart = (layout === 'horizontal' ? x : y) || 0;
          const brushSize = (layout === 'horizontal' ? width : height) || 0;
          const travWidth = travellerWidth || 5;
          const minPos = brushStart;
          const maxPos = brushStart + brushSize - travWidth;
          const safeScaleValue = Math.max(minPos, Math.min(scaleValue, maxPos));
          newState.endX = safeScaleValue;
          newState.prevEndIndexControlledFromProps = endIndexControlledFromProps;
        }
      }

      if (Object.keys(newState).length > 0) {
        // For zoom/pan mode, let controlled positions be outside boundaries to accurately represent zoom state
        // Only apply boundary enforcement during user interactions (handled in interaction methods)
        return newState as State;
      }
    }

    return null;
  }



  componentDidMount() {
    // Add more targeted event listeners for scroll prevention
    setTimeout(() => {
      const brushElement = document.querySelector('[data-brush-overlay="true"]');
      if (brushElement) {
        const handleWheelCapture = (e: WheelEvent) => {
          e.preventDefault();
        };
        
        const handleTouchCapture = (e: Event) => {
          e.preventDefault();
        };
        
        brushElement.addEventListener('wheel', handleWheelCapture, { passive: false, capture: true });
        brushElement.addEventListener('touchstart', handleTouchCapture, { passive: false, capture: true });
        brushElement.addEventListener('touchmove', handleTouchCapture, { passive: false, capture: true });
        
        // Store cleanup functions
        this.nativeEventCleanup = () => {
          brushElement.removeEventListener('wheel', handleWheelCapture);
          brushElement.removeEventListener('touchstart', handleTouchCapture);
          brushElement.removeEventListener('touchmove', handleTouchCapture);
        };
      }
    }, 0);
  }

  componentWillUnmount() {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }

    if (this.gestureTimeout) {
      clearTimeout(this.gestureTimeout);
      this.gestureTimeout = null;
    }

    this.detachDragEndListener();
    
    // Clean up native event listeners
    this.nativeEventCleanup?.();
  }

  private nativeEventCleanup?: () => void;

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
    // This now delegates to the master touch move handler
    this.handleMasterTouchMove(e);
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
    this.props.onBrushInteractionEnd?.();
    this.setState(
      {
        isTravellerMoving: false,
        isSlideMoving: false,
      },
      () => {
        // Only call legacy onDragEnd if not in zoom/pan mode
        if (!this.props.useZoomPan) {
          const { endIndex, onDragEnd, startIndex } = this.props;
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
    const event = isTouch(e) ? e.changedTouches[0] : e;
    const { layout = 'horizontal' } = this.props;

    this.props.onBrushInteractionStart?.();
    this.setState({
      isTravellerMoving: false,
      isSlideMoving: true,
      slideMoveStartX: layout === 'horizontal' ? event.pageX : event.pageY,
    });

    this.attachDragEndListener();
  };

  handleSlideDrag(e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) {
    const { slideMoveStartX, startX, endX } = this.state;
    const {
      x,
      width,
      y,
      height,
      travellerWidth,
      startIndex,
      endIndex,
      onChange,
      data,
      gap,
      onBrushPan,
      useZoomPan,
      layout,
    } = this.props;
    const currentLayout = layout ?? 'horizontal';
    const pageCoord = currentLayout === 'horizontal' ? e.pageX : e.pageY;
    let delta = pageCoord - slideMoveStartX;

    const [brushAreaStart, brushAreaEnd] =
      currentLayout === 'horizontal' ? [x, x + width] : [y, y + height];

    if (delta > 0) {
      delta = Math.min(delta, brushAreaEnd - travellerWidth - endX, brushAreaEnd - travellerWidth - startX);
    } else if (delta < 0) {
      delta = Math.max(delta, brushAreaStart - startX, brushAreaStart - endX);
    }
    
    const newStart = startX + delta;
    const newEnd = endX + delta;
    
    // Apply strict boundaries to prevent going out of bounds
    const minStartX = brushAreaStart;
    const maxEndX = brushAreaEnd - travellerWidth;
    const currentRange = Math.abs(endX - startX);
    
    // Ensure both positions stay within bounds while maintaining range
    let clampedStart = newStart;
    let clampedEnd = newEnd;
    
    // If trying to move beyond right edge, clamp end and adjust start
    if (clampedEnd > maxEndX) {
      clampedEnd = maxEndX;
      clampedStart = clampedEnd - currentRange;
    }
    
    // If trying to move beyond left edge, clamp start and adjust end
    if (clampedStart < minStartX) {
      clampedStart = minStartX;
      clampedEnd = clampedStart + currentRange;
    }
    
    // Final safety clamp to absolutely prevent overflow
    const finalStart = Math.max(Math.min(clampedStart, maxEndX - currentRange), minStartX);
    const finalEnd = Math.min(Math.max(clampedEnd, minStartX + currentRange), maxEndX);

    if (useZoomPan) {
      this.setState(
        {
          startX: finalStart,
          endX: finalEnd,
          slideMoveStartX: pageCoord,
        },
        () => {
          onBrushPan?.(delta, currentLayout);
        },
      );
    } else {
      // Legacy behavior: calculate indices and trigger onChange immediately
      const newIndex = getIndex({
        startX: finalStart,
        endX: finalEnd,
        data,
        gap,
        scaleValues: this.state.scaleValues || [],
      });

      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }

      this.setState({
        startX: finalStart,
        endX: finalEnd,
        slideMoveStartX: pageCoord,
      });
    }
  }

  handleTravellerDragStart(id: BrushTravellerId, e: MouseOrTouchEvent) {
    const event = isTouch(e) ? e.changedTouches[0] : e;
    const { layout = 'horizontal' } = this.props;

    this.props.onBrushInteractionStart?.();
    this.setState({
      isSlideMoving: false,
      isTravellerMoving: true,
      movingTravellerId: id,
      brushMoveStartX: layout === 'horizontal' ? event.pageX : event.pageY,
    });

    this.attachDragEndListener();
  }

  handleTravellerMove(e: React.Touch | React.MouseEvent<SVGGElement> | MouseEvent) {
    const { brushMoveStartX, movingTravellerId } = this.state;
    if (movingTravellerId == null || brushMoveStartX == null) {
      return;
    }

    const { x, width, y, height, travellerWidth, layout = 'horizontal' } = this.props;
    const { startX, endX } = this.state;
    const prevValue = this.state[movingTravellerId];

    const pageCoord = layout === 'horizontal' ? e.pageX : e.pageY;
    let delta = pageCoord - brushMoveStartX;

    const [brushAreaStart, brushAreaEnd] = layout === 'horizontal' ? [x, x + width] : [y, y + height];

    if (delta > 0) {
      delta = Math.min(delta, brushAreaEnd - travellerWidth - prevValue);
    } else if (delta < 0) {
      delta = Math.max(delta, brushAreaStart - prevValue);
    }

    let newPos = prevValue + delta;
    
    // Apply strict boundaries to absolutely prevent going out of bounds
    const minPos = brushAreaStart;
    const maxPos = brushAreaEnd - travellerWidth;
    
    // Hard clamp to prevent any overflow whatsoever
    newPos = Math.max(minPos, Math.min(newPos, maxPos));
    
    // Additional safety check to ensure travellers don't overlap
    if (movingTravellerId === 'startX' && newPos >= (endX - travellerWidth)) {
      newPos = endX - travellerWidth;
    } else if (movingTravellerId === 'endX' && newPos <= (startX + travellerWidth)) {
      newPos = startX + travellerWidth;
    }

    const nextState = {
      ...this.state,
      [movingTravellerId]: newPos,
      brushMoveStartX: pageCoord,
    };

    if (this.props.useZoomPan) {
      // In zoom mode, we set state and call the resize callback.
      this.setState(nextState, () => {
        this.props.onBrushResize?.(
          nextState.startX,
          nextState.endX,
          movingTravellerId,
          this.props.layout ?? 'horizontal',
        );
      });
      return;
    }

    // In legacy mode, restore the original smooth dragging behavior
    const { data, gap, onChange, startIndex, endIndex } = this.props;
    const { scaleValues } = this.state;

    const params = { 
      startX: movingTravellerId === 'startX' ? newPos : startX,
      endX: movingTravellerId === 'endX' ? newPos : endX,
      data, 
      gap, 
      scaleValues 
    };

    const newIndex = getIndex(params);

    // Check if we should trigger onChange (original isFullGap logic)
    const isFullGap = () => {
      const lastIndex = data.length - 1;
      const { startIndex: currentStartIndex, endIndex: currentEndIndex } = newIndex;
      if (
        (movingTravellerId === 'startX' && (endX > startX ? currentStartIndex % gap === 0 : currentEndIndex % gap === 0)) ||
        (endX < startX && currentEndIndex === lastIndex) ||
        (movingTravellerId === 'endX' && (endX > startX ? currentEndIndex % gap === 0 : currentStartIndex % gap === 0)) ||
        (endX > startX && currentEndIndex === lastIndex)
      ) {
        return true;
      }
      return false;
    };

    this.setState(nextState, () => {
      // Only trigger onChange when we hit a "full gap" position (original behavior)
      if (onChange && isFullGap()) {
        onChange(newIndex);
      }
    });
  }

  handleTravellerMoveKeyboard = (direction: 1 | -1, id: BrushTravellerId) => {
    const { data, gap, useZoomPan, onBrushResize, layout = 'horizontal', onChange, onBrushMove } = this.props;
    const { scaleValues, startX, endX } = this.state;
    const currentScaleValue = this.state[id];

    if (currentScaleValue == null) {
      return;
    }

    if (useZoomPan) {
      const newPos = currentScaleValue + direction;
      // Prevent travellers from being on top of each other or overlapping
      if ((id === 'startX' && newPos >= endX) || (id === 'endX' && newPos <= startX)) {
        return;
      }
      const nextState = { ...this.state, [id]: newPos };
      this.setState(nextState, () => {
        onBrushResize(nextState.startX, nextState.endX, id, layout);
        onBrushMove?.(nextState.startX, nextState.endX);
      });
      return;
    }

    // Legacy mode: snap to data points
    if (scaleValues == null) {
      return;
    }
    const currentIndex = scaleValues.indexOf(currentScaleValue);
    if (currentIndex === -1) {
      return;
    }
    const newIndex = currentIndex + direction;
    if (newIndex === -1 || newIndex >= scaleValues.length) {
      return;
    }
    const newScaleValue = scaleValues[newIndex];
    if ((id === 'startX' && newScaleValue >= endX) || (id === 'endX' && newScaleValue <= startX)) {
      return;
    }
    const nextState = { ...this.state, [id]: newScaleValue };
    this.setState(nextState, () => {
      const newPositions = {
        startX: nextState.startX,
        endX: nextState.endX,
      };
      onChange(
        getIndex({
          ...newPositions,
          data,
          gap,
          scaleValues,
        }),
      );
      onBrushMove?.(nextState.startX, nextState.endX);
    });
  };

  getLocalCoords = (e: { clientX: number; clientY: number }) => {
    // Try to get the overlay element - fallback to any SVG parent
    const svgElement = document.querySelector(`[data-brush-overlay]`) as SVGElement;
    if (!svgElement) return { x: 0, y: 0 };
    
    const rect = svgElement.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  // MASTER TOUCH HANDLERS
  handleMasterTouchStart = (e: TouchEvent<SVGGElement>) => {
    const { allowPinchZoom } = this.props;
    const target = e.target as SVGElement;

    // Always prevent default to stop page scroll, but be selective about propagation
    e.preventDefault();
    
    // Only stop propagation for specific interactions
    if (target.closest('.recharts-brush-traveller') || target.closest('.recharts-brush-slide')) {
      e.stopPropagation();
    }

    // Always track pointers first
    Array.from(e.changedTouches).forEach((t: React.Touch) => {
      const local = this.getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
      this.pointers.set(t.identifier, local);
    });

    // If this is the first touch, reset gesture state and start timeout
    if (this.pointers.size === 1) {
      this.gestureDecided = false;
      
      // Clear any existing timeout
      if (this.gestureTimeout) {
        clearTimeout(this.gestureTimeout);
      }
      
      // Set a short timeout to wait for potential second finger
      this.gestureTimeout = setTimeout(() => {
        // Timeout expired with only one finger - decide on single-finger gesture
        if (this.pointers.size === 1 && !this.gestureDecided) {
          this.gestureDecided = true;
          this.decideSingleFingerGesture(e, target);
        }
        this.gestureTimeout = null;
      }, 150); // 150ms timeout for second finger
    }

    // If we now have 2+ fingers and haven't decided yet, immediately switch to pinch
    if (allowPinchZoom && this.pointers.size >= 2 && !this.gestureDecided) {
      this.gestureDecided = true;
      
      // Clear the single-finger timeout
      if (this.gestureTimeout) {
        clearTimeout(this.gestureTimeout);
        this.gestureTimeout = null;
      }
      
      // Cancel any ongoing drag operation to start pinch zoom
      if (this.state.isSlideMoving || this.state.isTravellerMoving) {
        this.setState({
          isSlideMoving: false,
          isTravellerMoving: false,
        });
      }
      
      // Cancel any window drag listeners that might interfere
      this.detachDragEndListener();
      
      const [a, b] = Array.from(this.pointers.values());
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const centerX = (a.x + b.x) / 2;
      const centerY = (a.y + b.y) / 2;
      
      this.pinchStart = {
        distance,
        startX: this.state.startX || 0,
        endX: this.state.endX || 0,
        centerX,
        centerY,
      };
      
      // Force stop any competing interactions
      e.preventDefault();
      e.stopPropagation();
    }

    // Handle double-tap for drag-to-zoom if enabled (only for single finger)
    if (allowPinchZoom && e.changedTouches.length === 1 && this.pointers.size === 1) {
      const now = Date.now();
      const t = e.changedTouches[0];
      const local = this.getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
      
      if (now - this.lastTap < 300 && this.doubleClickPos) {
        const distance = Math.hypot(local.x - this.doubleClickPos.x, local.y - this.doubleClickPos.y);
        if (distance < 50) {
          this.isDoubleClickHold = true;
          this.doubleClickPos = local;
          this.gestureDecided = true; // Double-tap takes priority
          // Clear timeout since we've decided
          if (this.gestureTimeout) {
            clearTimeout(this.gestureTimeout);
            this.gestureTimeout = null;
          }
          return;
        }
      }
      
      this.lastTap = now;
      this.doubleClickPos = local;
    }
  };

  private decideSingleFingerGesture = (e: TouchEvent<SVGGElement>, target: SVGElement) => {
    // This is called after the timeout when we're sure it's a single-finger gesture
    
    // Handle traveller/slide drag
    if (target.closest('.recharts-brush-traveller')) {
      const travellerId = target.closest('[data-id]')?.getAttribute('data-id') as BrushTravellerId;
      if (travellerId) {
        this.handleTravellerDragStart(travellerId, e);
      }
      return;
    }
    
    if (target.closest('.recharts-brush-slide')) {
      this.handleSlideDragStart(e);
      return;
    }

    // For other areas, just track the pointer for potential pan
    // (The actual panning will be handled in touchmove if the finger moves)
  };

  handleMasterTouchMove = (e: TouchEvent<SVGGElement>) => {
    const { allowPinchZoom } = this.props;
    
    // Always prevent page scroll
    e.preventDefault();

    // Always update pointer positions
    Array.from(e.changedTouches).forEach((t: React.Touch) => {
      const local = this.getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
      this.pointers.set(t.identifier, local);
    });

    // If we have 2+ fingers and gesture isn't decided yet, immediately decide on pinch
    if (allowPinchZoom && this.pointers.size >= 2 && !this.gestureDecided) {
      this.gestureDecided = true;
      
      // Clear any single-finger timeout
      if (this.gestureTimeout) {
        clearTimeout(this.gestureTimeout);
        this.gestureTimeout = null;
      }
      
      // Cancel any ongoing drag operation to start pinch zoom
      if (this.state.isSlideMoving || this.state.isTravellerMoving) {
        this.setState({
          isSlideMoving: false,
          isTravellerMoving: false,
        });
        this.detachDragEndListener();
      }
      
      const [a, b] = Array.from(this.pointers.values());
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const centerX = (a.x + b.x) / 2;
      const centerY = (a.y + b.y) / 2;
      
      this.pinchStart = {
        distance,
        startX: this.state.startX || 0,
        endX: this.state.endX || 0,
        centerX,
        centerY,
      };
    }

    // Handle pinch zoom
    if (allowPinchZoom && this.pointers.size >= 2 && this.pinchStart && this.gestureDecided) {
      e.stopPropagation();

      const [a, b] = Array.from(this.pointers.values());
      const currentDistance = Math.hypot(a.x - b.x, a.y - b.y);
      const zoomFactor = this.pinchStart.distance === 0 ? 1 : this.pinchStart.distance / currentDistance;
      
      // Only process meaningful zoom changes
      if (Math.abs(zoomFactor - 1) < 0.05) return;
      
      const { layout = 'horizontal', x, y, width, height, travellerWidth = 5 } = this.props;
      const brushStart = (layout === 'horizontal' ? x : y) ?? 0;
      const brushSize = (layout === 'horizontal' ? width : height) || 0;
      const centerPoint = (layout === 'horizontal' ? this.pinchStart.centerX : this.pinchStart.centerY);
      
      const { newStart, newEnd } = this.calculateZoom(
        this.pinchStart.startX,
        this.pinchStart.endX,
        zoomFactor,
        centerPoint,
        brushStart,
        brushSize,
        travellerWidth
      );
      
      // Update pinch start for smooth continued zooming
      this.pinchStart = {
        ...this.pinchStart,
        distance: currentDistance,
        startX: newStart,
        endX: newEnd,
      };
      
      this.setState({
        startX: newStart,
        endX: newEnd,
      }, () => {
        if (this.props.useZoomPan) {
          this.props.onBrushResize?.(newStart, newEnd, 'startX', layout);
          this.props.onBrushMove?.(newStart, newEnd);
        } else {
          const { data, gap = 1 } = this.props;
          const { scaleValues = [] } = this.state;
          if (data) {
            const newIndex = getIndex({ startX: newStart, endX: newEnd, scaleValues, gap, data });
            this.props.onChange?.(newIndex);
            this.props.onBrushMove?.(newStart, newEnd);
          }
        }
      });

      return;
    }

    // 2. Handle single-touch drag (if not pinching and gesture is decided)
    if (this.gestureDecided && (this.state.isTravellerMoving || this.state.isSlideMoving)) {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        this.handleDrag(e.changedTouches[0]);
      }
      return;
    }

    // 3. Handle double-tap drag to zoom (if not pinching or dragging)
    if (allowPinchZoom && this.isDoubleClickHold && this.doubleClickPos && this.pointers.size === 1) {
      const t = e.changedTouches[0];
      const local = this.getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
      
      const distance = Math.hypot(local.x - this.doubleClickPos.x, local.y - this.doubleClickPos.y);
      
      if (distance > 15 && !this.selectStart) {
        this.selectStart = this.doubleClickPos;
        this.selectRect = { x: this.doubleClickPos.x, y: this.doubleClickPos.y, w: 0, h: 0 };
        this.isDoubleClickHold = false;
      }
      
      if (this.selectStart) {
        const rectX = Math.min(this.selectStart.x, local.x);
        const rectY = Math.min(this.selectStart.y, local.y);
        const rectW = Math.abs(local.x - this.selectStart.x);
        const rectH = Math.abs(local.y - this.selectStart.y);
        this.selectRect = { x: rectX, y: rectY, w: rectW, h: rectH };
      }
    }
  };

  handleMasterTouchEnd = (e: TouchEvent<SVGGElement>) => {
    Array.from(e.changedTouches).forEach((t: React.Touch) => {
      this.pointers.delete(t.identifier);
    });
    
    // Clear pinch state when less than 2 fingers
    if (this.pointers.size < 2) {
      this.pinchStart = null;
    }
    
    // Clear all states when no fingers
    if (this.pointers.size === 0) {
      this.gestureDecided = false;
      this.selectStart = null;
      this.selectRect = null;
      this.isDoubleClickHold = false;
      this.doubleClickPos = null;
      
      if (this.doubleClickTimer) {
        clearTimeout(this.doubleClickTimer);
        this.doubleClickTimer = null;
      }
      
      if (this.gestureTimeout) {
        clearTimeout(this.gestureTimeout);
        this.gestureTimeout = null;
      }
    }
    // Do not call handleDragEnd here, as it's attached to window events
  };

  // Simple boundary clamp utility
  private clampPosition = (value: number, brushStart: number, brushSize: number, travellerWidth: number): number => {
    const min = brushStart;
    const max = brushStart + brushSize - travellerWidth;
    return Math.max(min, Math.min(value, max));
  };

  // Calculate new positions from zoom change
  private calculateZoom = (
    currentStart: number,
    currentEnd: number,
    zoomFactor: number,
    anchorPoint: number,
    brushStart: number,
    brushSize: number,
    travellerWidth: number
  ): { newStart: number; newEnd: number } => {
    const currentRange = Math.abs(currentEnd - currentStart);
    const newRange = Math.max(travellerWidth * 2, Math.min(currentRange / zoomFactor, brushSize - travellerWidth));
    
    // Calculate new positions relative to anchor
    const currentCenter = Math.min(currentStart, currentEnd) + currentRange / 2;
    const anchorRatio = Math.max(0, Math.min(1, (anchorPoint - brushStart) / brushSize));
    
    const newCenter = currentCenter + (anchorPoint - currentCenter) * 0.1; // Slight anchor bias
    const newStart = newCenter - newRange / 2;
    const newEnd = newStart + newRange;
    
    // Simple boundary enforcement
    if (newEnd > brushStart + brushSize - travellerWidth) {
      const overflow = newEnd - (brushStart + brushSize - travellerWidth);
      return {
        newStart: newStart - overflow,
        newEnd: brushStart + brushSize - travellerWidth
      };
    }
    
    if (newStart < brushStart) {
      const underflow = brushStart - newStart;
      return {
        newStart: brushStart,
        newEnd: newEnd + underflow
      };
    }
    
    return { newStart, newEnd };
  };

  // Completely refactored wheel handling
  handleWheel = (e: React.WheelEvent<SVGGElement>) => {
    // Always prevent page scroll
    e.preventDefault();
    
    // ⇣ NEW ⇣   don't freeze traveller position while scrolling
    if (this.state.isTextActive) {
      this.setState({ isTextActive: false });
    }
    
    if (!this.props.allowScrollZoom && !e.shiftKey) return;
    
    const { layout = 'horizontal', onBrushPan, useZoomPan, onChange, x, y, width, height, travellerWidth = 5 } = this.props;
    const { startX = 0, endX = 0 } = this.state;
    const local = this.getLocalCoords(e);
    
    // Pan mode (Shift + scroll)
          if (e.shiftKey) {
        const panAmount = e.deltaY > 0 ? -30 : 30;
        const brushStart = (layout === 'horizontal' ? x : y) ?? 0;
        const brushSize = (layout === 'horizontal' ? width : height) || 0;
        
        const currentRange = Math.abs(endX - startX);
        const currentMin = Math.min(startX, endX);
        
        let newMin = currentMin + panAmount;
        let newMax = newMin + currentRange;
        
        // Simple boundary check for panning
        if (newMax > brushStart + brushSize - travellerWidth) {
          newMax = brushStart + brushSize - travellerWidth;
          newMin = newMax - currentRange;
        }
        if (newMin < brushStart) {
          newMin = brushStart;
          newMax = newMin + currentRange;
        }
        
        this.setState({
          startX: newMin,
          endX: newMax,
        }, () => {
          if (useZoomPan && onBrushPan) {
            onBrushPan(panAmount, layout);
          }
        });
        
        return;
          } else {
        // Zoom mode (regular scroll)
        const brushStart = (layout === 'horizontal' ? x : y) ?? 0;
        const brushSize = (layout === 'horizontal' ? width : height) || 0;
        const anchorPoint = (layout === 'horizontal' ? local.x : local.y);
        const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87; // Slightly more responsive
        
        const { newStart, newEnd } = this.calculateZoom(
          startX,
          endX,
          zoomFactor,
          anchorPoint,
          brushStart,
          brushSize,
          travellerWidth
        );
        
        this.setState({
          startX: newStart,
          endX: newEnd,
        }, () => {
          if (useZoomPan) {
            this.props.onBrushResize?.(newStart, newEnd, 'startX', layout);
            this.props.onBrushMove?.(newStart, newEnd);
          } else {
            // Legacy mode
            const { data, gap = 1 } = this.props;
            const { scaleValues = [] } = this.state;
            if (data && onChange) {
              const newIndex = getIndex({
                startX: newStart,
                endX: newEnd,
                scaleValues,
                gap,
                data,
              });
              onChange(newIndex);
            }
          }
        });
      }
  };

  handleKeyDown = (e: React.KeyboardEvent<SVGGElement>) => {
    // ... logic moved from BrushInternal's handleKeyDown
    // This will use this.props to access zoom state and setters
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
      travellerWidth,
      tickFormatter,
      dataKey,
      padding,
      layout = 'horizontal',
    } = this.props;
    const { startX, endX, isTextActive, isSlideMoving, isTravellerMoving, isTravellerFocused, scaleValues } =
      this.state;

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
    const style = { ...generatePrefixStyle('userSelect', 'none'), touchAction: 'none' };
    const calculatedY = y + (dy ?? 0);

    const startIndex = isNumber(startX) ? getIndexInRange(scaleValues, startX) : this.props.startIndex;
    const endIndex = isNumber(endX) ? getIndexInRange(scaleValues, endX) : this.props.endIndex;

    // Simple validation for rendering
    if (isNumber(startX) && isNumber(endX) && (!isFinite(startX) || !isFinite(endX) || startX >= endX)) {
      console.warn('[BRUSH] Invalid positions detected, skipping render:', { startX, endX });
      return null;
    }

    return (
      <Layer
        className={layerClass}
        onMouseLeave={this.handleLeaveWrapper}
        style={style}
        onWheel={this.handleWheel}
        onKeyDown={this.handleKeyDown}
        onTouchStart={this.handleMasterTouchStart}
        onTouchMove={this.handleMasterTouchMove}
        onTouchEnd={this.handleMasterTouchEnd}
        tabIndex={0}
        data-brush-overlay="true"
        data-brush-interaction="true"
      >
        <Background x={x} y={calculatedY} width={width} height={height} fill={fill} stroke={stroke} />
        <Panorama
          x={x}
          y={calculatedY}
          width={width}
          height={height}
          data={data}
          padding={padding}
          layout={layout}
        >
          {children}
        </Panorama>
        {isNumber(startX) && isNumber(endX) && (
          <Slide
            x={x}
            y={calculatedY}
            width={width}
            height={height}
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
        )}
        {isNumber(startX) && (
          <TravellerLayer
            travellerPos={startX}
            id="startX"
            otherProps={{ ...this.props, y: calculatedY }}
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
        )}
        {isNumber(endX) && (
          <TravellerLayer
            travellerPos={endX}
            id="endX"
            otherProps={{ ...this.props, y: calculatedY }}
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
        )}
        {(isTextActive || isSlideMoving || isTravellerMoving || isTravellerFocused || alwaysShowText) &&
          isNumber(startX) &&
          isNumber(endX) &&
          isNumber(startIndex) &&
          isNumber(endIndex) && (
            <BrushText
              startIndex={startIndex}
              endIndex={endIndex}
              y={calculatedY}
              height={height}
              travellerWidth={travellerWidth}
              stroke={stroke}
              tickFormatter={tickFormatter}
              dataKey={dataKey}
              data={data}
              startX={startX}
              endX={endX}
              layout={layout}
              x={x}
              width={width}
            />
          )}
      </Layer>
    );
  }
}

function BrushInternal(props: Props) {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectRect, setSelectRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [selectStart, setSelectStart] = useState<{ x: number; y: number } | null>(null);

  const dispatch = useAppDispatch();
  const setZoomState = useSetZoom();
  const currentZoom = useZoom(); // Get current zoom state
  const chartData = useChartData();
  const { startIndex, endIndex } = useDataIndex();
  const onChangeFromContext = useContext(BrushUpdateDispatchContext);
  const onChangeFromProps = props.onChange;
  const { startIndex: startIndexFromProps, endIndex: endIndexFromProps, useZoomPan } = props;
  
  // Use refs to avoid infinite re-renders due to changing values
  const startIndexRef = useRef(startIndex);
  const endIndexRef = useRef(endIndex);
  const currentZoomRef = useRef(currentZoom);
  const setZoomStateRef = useRef(setZoomState);
  
  startIndexRef.current = startIndex;
  endIndexRef.current = endIndex;
  currentZoomRef.current = currentZoom;
  setZoomStateRef.current = setZoomState;
  const { width: plotAreaWidth, height: plotAreaHeight, left: plotAreaLeft, top: plotAreaTop } = useOffset();
  const chartWidth = useAppSelector(selectChartWidth);
  const chartHeight = useAppSelector(selectChartHeight);
  const allXAxes = useAppSelector(selectAllXAxes);

  useEffect(() => {
    // start and end index can be controlled from props, and we need them to stay up-to-date in the Redux state too
    if (startIndexFromProps !== undefined && endIndexFromProps !== undefined) {
      dispatch(setDataStartEndIndexes({ startIndex: startIndexFromProps, endIndex: endIndexFromProps }));
    }
  }, [dispatch, endIndexFromProps, startIndexFromProps]);

  useBrushChartSynchronisation();

  const onChange = useCallback(
    (nextState: BrushStartEndIndex) => {
      if (nextState.startIndex !== startIndex || nextState.endIndex !== endIndex) {
        onChangeFromContext?.(nextState);
        onChangeFromProps?.(nextState);
        dispatch(setDataStartEndIndexes(nextState));
        
        // Control animation based on enableAnimation flag
        if (!props.enableAnimation && currentZoom) {
          setZoomState({ ...currentZoom, disableAnimation: true });
        }
      }
    },
    [onChangeFromProps, onChangeFromContext, dispatch, startIndex, endIndex, props.enableAnimation, currentZoom, setZoomState],
  );

  const { layout = 'horizontal' } = props;
  // Generate a unique brush ID based on layout and dataKey
  const brushId = `${layout}-${props.dataKey || 'default'}`;
  
  // Calculate brush position and dimensions - memoize to prevent infinite re-renders
  const calculatedDimensions = useMemo(
    () =>
    calculateBrushPosition(
      props,
      chartWidth || 0,
      chartHeight || 0,
      plotAreaWidth,
      plotAreaHeight,
      plotAreaLeft,
      plotAreaTop,
      allXAxes,
    ), 
    [
      props.layout, 
      props.height, 
      props.width, 
      props.x, 
      props.y, 
      props.top, 
      props.bottom, 
      props.left, 
      props.right,
      chartWidth, 
      chartHeight, 
      plotAreaWidth, 
      plotAreaHeight, 
      plotAreaLeft, 
      plotAreaTop,
      allXAxes,
    ],
  );
  
  const brushDimensions = useAppSelector(selectBrushDimensions(brushId));
  const { x, y, width, height } = brushDimensions ?? calculatedDimensions;

  const onBrushPan = useCallback(
    (delta: number, panLayout: 'horizontal' | 'vertical') => {
      const zoom = currentZoomRef.current;
      const setZoom = setZoomStateRef.current;
      
      if (!useZoomPan || !zoom) return;
      const { travellerWidth = 5 } = props;
      
      // Determine which axis to control
      const controlAxis = props.axis || (panLayout === 'horizontal' ? 'x' : 'y');

      if (controlAxis === 'x') {
        if (!width) return;
        const brushDataWidth = width - travellerWidth;
        const deltaOffsetX = -delta * ((plotAreaWidth * zoom.scaleX) / brushDataWidth);
        const minOffsetX = plotAreaWidth * (1 - zoom.scaleX);
        const newOffsetX = Math.min(Math.max(zoom.offsetX + deltaOffsetX, minOffsetX), 0);
        setZoom({
          ...zoom,
          offsetX: newOffsetX,
        });
      } else {
        if (!height) return;
        const brushDataHeight = height - travellerWidth;
        const deltaOffsetY = -delta * ((plotAreaHeight * zoom.scaleY) / brushDataHeight);
        const minOffsetY = plotAreaHeight * (1 - zoom.scaleY);
        const newOffsetY = Math.min(Math.max(zoom.offsetY + deltaOffsetY, minOffsetY), 0);
        setZoom({
          ...zoom,
          offsetY: newOffsetY,
        });
      }
    },
    [useZoomPan, width, plotAreaWidth, props.travellerWidth, height, plotAreaHeight, props.axis],
  );

  const onBrushResize = useCallback(
    (s: number, e: number, movingTravellerId: BrushTravellerId, resizeLayout: 'horizontal' | 'vertical') => {
      const zoom = currentZoomRef.current;
      const setZoom = setZoomStateRef.current;
      
      if (!useZoomPan || !zoom) {
        return;
      }
      const { travellerWidth = 5 } = props;
      
      // Determine which axis to control
      const controlAxis = props.axis || (resizeLayout === 'horizontal' ? 'x' : 'y');
      const brushDim = controlAxis === 'x' ? width : height;
      const chartDim = controlAxis === 'x' ? plotAreaWidth : plotAreaHeight;
      const brushPos = (controlAxis === 'x' ? x : y) ?? 0;

      if (!brushDim || !chartDim) {
        return;
      }

      const brushDataDim = brushDim - travellerWidth;
      const min = Math.min(s, e);
      const max = Math.max(s, e);
      const selectionDim = max - min;

      if (selectionDim <= 0) {
        return;
      }

      // Apply scale constraints - default zoom config has minScale=1, maxScale=20
      const rawNewScale = brushDataDim / selectionDim;
      const newScale = clamp(rawNewScale, 1, 20);
      
      const anchor = movingTravellerId === 'startX' ? max : min;
      const anchorOnScreen = (anchor - brushPos) / brushDataDim;

      if (controlAxis === 'x') {
        const { scaleX: oldScaleX, offsetX: oldOffsetX } = zoom;
        const newOffsetX = anchorOnScreen * chartDim - ((anchorOnScreen * chartDim - oldOffsetX) / oldScaleX) * newScale;

        setZoom({
          ...zoom,
          scaleX: newScale,
          offsetX: newOffsetX,
          disableAnimation: true,
          autoScaleYDomain: props.autoScaleYDomain ?? false,
        });
      } else {
        const { scaleY: oldScaleY, offsetY: oldOffsetY } = zoom;
        const newOffsetY = anchorOnScreen * chartDim - ((anchorOnScreen * chartDim - oldOffsetY) / oldScaleY) * newScale;

        setZoom({
          ...zoom,
          scaleY: newScale,
          offsetY: newOffsetY,
          disableAnimation: true,
          autoScaleYDomain: props.autoScaleYDomain ?? false,
        });
      }
    },
    [
      useZoomPan,
      width,
      height,
      plotAreaWidth,
      plotAreaHeight,
      x,
      y,
      props.travellerWidth,
      props.autoScaleYDomain,
      props.axis,
    ],
  );

  const contextProperties: PropertiesFromContext = {
    data: chartData || [],
    x,
    y,
    width,
    height,
    startIndex,
    endIndex,
    onChange: useZoomPan ? () => {} : onChange,
  };

  const brushTravellerDimension = props.travellerWidth ?? 5;

  let zoomPanProps: Partial<BrushWithStateProps> = {};
  if (useZoomPan) {
    let controlledStart: number | undefined;
    let controlledEnd: number | undefined;

    if (currentZoom && !isInteracting) {
      // Determine which axis to control
      const controlAxis = props.axis || (layout === 'horizontal' ? 'x' : 'y');
      
      if (controlAxis === 'x') {
        if (width > 0 && plotAreaWidth > 0) {
          // ───────────────────────────────────────────────────────────────
          // Calculate brush window directly from the *viewport* just like
          // the minimap & scroll‑bars do:           
          //   viewportWidth   = trackWidth / scaleX
          //   windowStart(px) = trackLeft + (-offsetX / (plotWidth·scaleX)) · trackWidth
          // ----------------------------------------------------------------
          const brushDataWidth = width - brushTravellerDimension;
          const viewportWidth  = brushDataWidth / currentZoom.scaleX;

          controlledStart = (x ?? 0) + (-currentZoom.offsetX / (plotAreaWidth * currentZoom.scaleX)) * brushDataWidth;
          controlledEnd   = controlledStart + viewportWidth;

          // ───────────────────────────────────────────────────────────────
          // Clamp so the window never runs out of its rail
          // ----------------------------------------------------------------
          const minPos = (layout === 'horizontal' ? x : y) ?? 0;
          const maxPos = minPos + brushDataWidth;

          controlledStart = clamp(controlledStart, minPos, maxPos - viewportWidth);
          controlledEnd   = controlledStart + viewportWidth;
          // ───────────────────────────────────────────────────────────────
        }
            } else if (height > 0 && plotAreaHeight > 0) {
        // ───────────────────────────────────────────────────────────────
        // Calculate brush window directly from the *viewport* just like
        // the minimap & scroll‑bars do:           
        //   viewportHeight  = trackHeight / scaleY
        //   windowStart(px) = trackTop + (-offsetY / (plotHeight·scaleY)) · trackHeight
        // ----------------------------------------------------------------
        const brushDataHeight = height - brushTravellerDimension;
        const viewportHeight  = brushDataHeight / currentZoom.scaleY;

        controlledStart = (y ?? 0) + (-currentZoom.offsetY / (plotAreaHeight * currentZoom.scaleY)) * brushDataHeight;
        controlledEnd   = controlledStart + viewportHeight;

        // ───────────────────────────────────────────────────────────────
        // Clamp so the window never runs out of its rail
        // ----------------------------------------------------------------
        const minPos = (layout === 'horizontal' ? x : y) ?? 0;
        const maxPos = minPos + brushDataHeight;

        controlledStart = clamp(controlledStart, minPos, maxPos - viewportHeight);
        controlledEnd   = controlledStart + viewportHeight;
        // ───────────────────────────────────────────────────────────────
      }
    }
    zoomPanProps = {
      onBrushPan,
      onBrushResize,
      onBrushInteractionStart: () => setIsInteracting(true),
      onBrushInteractionEnd: () => setIsInteracting(false),
      controlledStart,
      controlledEnd,
    };
  }

  // ─────────────────────────────────────────────────────────────────────
  // NEW #2 – keep the *chart* in sync if the incoming zoom.offsetX / offsetY
  // wanders outside its legal domain. This runs **after** the above clamp so
  // it can compare the (potentially corrected) traveller positions with the
  // current zoom state and nudge the zoom back into a valid range.
  // ---------------------------------------------------------------------
  useEffect(() => {
    if (!useZoomPan || !currentZoom) return;

    const { scaleX, scaleY, offsetX, offsetY } = currentZoom;

    let needUpdate = false;
    const nextZoom: typeof currentZoom = { ...currentZoom };

    // Helper that mirrors restrictOffsets from zoomPanContext – we repeat it
    // here because we're outside that context and want an immediate fix.
    const clampOffset = (off: number, view: number, scale: number) => {
      const min = view * (1 - scale);
      return Math.min(Math.max(off, min), 0);
    };

    if ((props.axis ?? (layout === 'horizontal' ? 'x' : 'y')) !== 'y') {
      const clamped = clampOffset(offsetX, plotAreaWidth, scaleX);
      if (clamped !== offsetX) {
        nextZoom.offsetX = clamped;
        needUpdate = true;
      }
    }

    if ((props.axis ?? (layout === 'horizontal' ? 'x' : 'y')) !== 'x') {
      const clamped = clampOffset(offsetY, plotAreaHeight, scaleY);
      if (clamped !== offsetY) {
        nextZoom.offsetY = clamped;
        needUpdate = true;
      }
    }

    if (needUpdate) {
      setZoomStateRef.current({ ...nextZoom, disableAnimation: true });
    }
  }, [useZoomPan, currentZoom, plotAreaWidth, plotAreaHeight, props.axis, layout]);

  return (
    <>
      <BrushSettingsDispatcher
        id={brushId}
        height={calculatedDimensions.height}
        x={calculatedDimensions.x}
        y={calculatedDimensions.y}
        width={calculatedDimensions.width}
        padding={props.padding}
        layout={props.layout}
      />

      <BrushWithState
        {...props}
        {...contextProperties}
        {...zoomPanProps}
        startIndexControlledFromProps={startIndexFromProps ?? undefined}
        endIndexControlledFromProps={endIndexFromProps ?? undefined}
      />
    </>
  );
}

function calculateBrushPosition(
  props: Props,
  chartWidth: number,
  chartHeight: number,
  plotAreaWidth: number,
  plotAreaHeight: number,
  plotAreaLeft: number,
  plotAreaTop: number,
  allXAxes: readonly any[],
): { x: number; y: number; width: number; height: number } {
  const { layout = 'horizontal', height, width, x, y, top, bottom, left, right, padding } = props;

  // If explicit x, y, width are provided, use them
  if (isNumber(x) && isNumber(y) && isNumber(width)) {
    return { x, y, width, height };
  }

  const { top: paddingTop = 0, bottom: paddingBottom = 0, left: paddingLeft = 0, right: paddingRight = 0 } =
    padding || {};

  // Calculate based on layout and positioning props
  if (layout === 'horizontal') {
    const brushWidth = plotAreaWidth;
    const brushHeight = height;
    const brushX = plotAreaLeft;
    let brushY: number;

    if (top) {
      brushY = paddingTop;
    } else {
      // Default to bottom - position right after the plot area and X-axis
      // Add space for X-axis only if there are X-axes defined
      const xAxisOffset = allXAxes && allXAxes.length > 0 ? 30 : 0; // 30px for X-axis height
      brushY = plotAreaTop + plotAreaHeight + xAxisOffset;
    }

    return { x: brushX, y: brushY, width: brushWidth, height: brushHeight };
  }
  // Vertical layout
  const brushThickness = width ?? height;
  const brushLength = plotAreaHeight;
  const brushY = plotAreaTop;
  let brushX: number;

  if (left) {
    brushX = paddingLeft;
  } else {
    // Default to right
    brushX = chartWidth - brushThickness - paddingRight;
  }

  return { x: brushX, y: brushY, width: brushThickness, height: brushLength };
}

function BrushSettingsDispatcher(props: BrushInstanceSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setBrushSettings(props));
    return () => {
      dispatch(removeBrushSettings(props.id));
    };
  }, [dispatch, props.id, props.x, props.y, props.width, props.height, props.layout]);
  return null;
}

export class Brush extends PureComponent<Props, State> {
  static displayName = 'Brush';

  static defaultProps = {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: '#fff',
    stroke: '#666',
    padding: { top: 1, right: 1, bottom: 1, left: 1 },
    leaveTimeOut: 1000,
    alwaysShowText: false,
    layout: 'horizontal',
    enableAnimation: false,
    allowScrollZoom: true,
    allowPinchZoom: true,
  };

  render() {
    return <BrushInternal {...this.props} />;
  }
}
