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
        // Add tolerance to prevent infinite loops due to floating-point precision
        const tolerance = 0.01;
        if (nextProps.controlledStart != null && 
            (prevState.startX == null || Math.abs(nextProps.controlledStart - prevState.startX) > tolerance)) {
          newState.startX = nextProps.controlledStart;
        }
        if (nextProps.controlledEnd != null && 
            (prevState.endX == null || Math.abs(nextProps.controlledEnd - prevState.endX) > tolerance)) {
          newState.endX = nextProps.controlledEnd;
        }
      } else if (prevState.scale) {
        // Only snap to scale values when not interacting (like in original code)
        if (
          startIndexControlledFromProps != null &&
          prevState.prevStartIndexControlledFromProps !== startIndexControlledFromProps
        ) {
          newState.startX = prevState.scale(startIndexControlledFromProps);
          newState.prevStartIndexControlledFromProps = startIndexControlledFromProps;
        }

        if (
          endIndexControlledFromProps != null &&
          prevState.prevEndIndexControlledFromProps !== endIndexControlledFromProps
        ) {
          newState.endX = prevState.scale(endIndexControlledFromProps);
          newState.prevEndIndexControlledFromProps = endIndexControlledFromProps;
        }
      }

      if (Object.keys(newState).length > 0) {
        return newState as State;
      }
    }

    return null;
  }

  componentWillUnmount() {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }

    this.detachDragEndListener();
  }

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
    if (e.changedTouches != null && e.changedTouches.length > 0) {
      this.handleDrag(e.changedTouches[0]);
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

    if (useZoomPan) {
      this.setState(
        {
          startX: newStart,
          endX: newEnd,
          slideMoveStartX: pageCoord,
        },
        () => {
          onBrushPan?.(delta, currentLayout);
        },
      );
    } else {
      // Legacy behavior: calculate indices and trigger onChange immediately
      const newIndex = getIndex({
        startX: newStart,
        endX: newEnd,
        data,
        gap,
        scaleValues: this.state.scaleValues || [],
      });

      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }

      this.setState({
        startX: newStart,
        endX: newEnd,
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

    const newPos = prevValue + delta;

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
    const style = generatePrefixStyle('userSelect', 'none');
    const calculatedY = y + (dy ?? 0);

    const startIndex = isNumber(startX) ? getIndexInRange(scaleValues, startX) : this.props.startIndex;
    const endIndex = isNumber(endX) ? getIndexInRange(scaleValues, endX) : this.props.endIndex;

    return (
      <Layer
        className={layerClass}
        onMouseLeave={this.handleLeaveWrapper}
        onTouchMove={this.handleTouchMove}
        style={style}
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
  const calculatedDimensions = useMemo(() => 
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
      allXAxes
    ]
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
        setZoom({
          ...zoom,
          offsetX: zoom.offsetX + deltaOffsetX,
        });
      } else {
        if (!height) return;
        const brushDataHeight = height - travellerWidth;
        const deltaOffsetY = -delta * ((plotAreaHeight * zoom.scaleY) / brushDataHeight);
        setZoom({
          ...zoom,
          offsetY: zoom.offsetY + deltaOffsetY,
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
          const brushDataDimension = width - brushTravellerDimension;
          const visibleDimensionInBrush = brushDataDimension / currentZoom.scaleX;
          const startOffsetInBrush =
            (-currentZoom.offsetX / (plotAreaWidth * currentZoom.scaleX)) * brushDataDimension;

          const brushPosition = x ?? 0;
          controlledStart = brushPosition + startOffsetInBrush;
          controlledEnd = controlledStart + visibleDimensionInBrush;
        }
      } else if (height > 0 && plotAreaHeight > 0) {
        const brushDataDimension = height - brushTravellerDimension;
        const visibleDimensionInBrush = brushDataDimension / currentZoom.scaleY;
        const startOffsetInBrush =
          (-currentZoom.offsetY / (plotAreaHeight * currentZoom.scaleY)) * brushDataDimension;

        const brushPosition = y ?? 0;
        controlledStart = brushPosition + startOffsetInBrush;
        controlledEnd = controlledStart + visibleDimensionInBrush;
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
  };

  render() {
    return <BrushInternal {...this.props} />;
  }
}
