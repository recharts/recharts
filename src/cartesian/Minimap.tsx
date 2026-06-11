import * as React from 'react';
import {
  createContext,
  ReactElement,
  ReactNode,
  SVGProps,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { PanoramaPreview } from '../container/PanoramaPreview';
import { ZIndexLayer } from '../zIndex/ZIndexLayer';
import { useChartData } from '../context/chartDataContext';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { setZoom, ZoomState } from '../state/zoomSlice';
import { selectZoom } from '../state/selectors/zoomSelectors';
import { selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { selectAxisRangeWithReverse } from '../state/selectors/axisSelectors';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';
import { Padding } from '../util/types';
import { generatePrefixStyle } from '../util/CssPrefixUtils';
import { isFullViewport, isRangeFlipped, FULL_VIEWPORT } from '../util/zoom/viewport';
import { panDimension, zoomDimension, ZoomLimits } from '../util/zoom/zoomActions';
import { ZoomAxis } from '../util/zoom/ZoomOptions';
import {
  centerZoomStateAtPoint,
  hitTestViewportWindow,
  panZoomStateByPixels,
  resizeZoomStateRect,
  ViewportWindowArea,
  ViewportWindowFlipped,
  ViewportWindowHandle,
  ViewportWindowHit,
  zoomStateToRect,
} from '../util/zoom/viewportWindow';
import { useUniqueId } from '../util/useUniqueId';
import { ZOOM_SCROLLBAR_ATTR } from '../chart/ZoomScrollbars';

type MinimapPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type MinimapStyleProps = {
  /** Background fill of the minimap frame. */
  fill?: string;
  /** Frame stroke. */
  stroke?: string;
  /** Fill of the editable viewport rectangle. */
  viewportFill?: string;
  /** Stroke of the editable viewport rectangle. */
  viewportStroke?: string;
  /** Fill used outside the current viewport. */
  shadeFill?: string;
  /** Opacity used outside the current viewport. */
  shadeOpacity?: number;
};

type MinimapOwnProps = MinimapStyleProps & {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  className?: string;
  padding?: Padding;
  children?: ReactElement;
  position?: MinimapPosition;
  margin?: number;
  axis?: ZoomAxis;
  minZoom?: number;
  maxZoom?: number;
  controls?: ReactNode;
  ariaLabel?: string;
  /**
   * SVG z-index layer used by the minimap. Defaults above series and labels so the minimap stays opaque and interactive.
   *
   * @defaultValue 2500
   */
  zIndex?: number;
};

export type Props = Omit<SVGProps<SVGElement>, 'children' | 'ref'> & MinimapOwnProps;

const DEFAULT_WIDTH = 160;
const DEFAULT_HEIGHT = 96;
const DEFAULT_PADDING: Padding = { top: 2, right: 2, bottom: 2, left: 2 };
const DEFAULT_LIMITS: ZoomLimits = { minZoom: 1, maxZoom: 25 };
const DEFAULT_WHEEL_STEP = 1.15;
const DEFAULT_WHEEL_PAN_STEP = 0.0015;
const DEFAULT_Z_INDEX = 2500;
const KEYBOARD_PAN_STEP = 0.1;
const EMPTY_AREA: ViewportWindowArea = { x: 0, y: 0, width: 0, height: 0 };
const DEFAULT_ZOOM_STATE: ZoomState = { x: FULL_VIEWPORT, y: FULL_VIEWPORT };

function axisEnabled(axis: ZoomAxis, dimension: 'x' | 'y'): boolean {
  return axis === 'xy' || axis === dimension;
}

function mergeEnabledDimensions(current: ZoomState, next: ZoomState, axis: ZoomAxis): ZoomState {
  return {
    x: axisEnabled(axis, 'x') ? next.x : current.x,
    y: axisEnabled(axis, 'y') ? next.y : current.y,
  };
}

function getPointFromClient(
  clientX: number,
  clientY: number,
  target: SVGRectElement,
  area: ViewportWindowArea,
): { x: number; y: number } {
  const rect = target.getBoundingClientRect();
  return {
    x: area.x + clientX - rect.left,
    y: area.y + clientY - rect.top,
  };
}

function getTouchPoint(touch: React.Touch, target: SVGRectElement, area: ViewportWindowArea): { x: number; y: number } {
  return getPointFromClient(touch.clientX, touch.clientY, target, area);
}

function getRatioInArea(value: number, start: number, size: number, flipped: boolean): number {
  if (size <= 0) {
    return 0.5;
  }
  const ratio = Math.min(Math.max((value - start) / size, 0), 1);
  return flipped ? 1 - ratio : ratio;
}

function getCursor(hit: ViewportWindowHit): React.CSSProperties['cursor'] {
  switch (hit) {
    case 'left':
    case 'right':
      return 'ew-resize';
    case 'top':
    case 'bottom':
      return 'ns-resize';
    case 'top-left':
    case 'bottom-right':
      return 'nwse-resize';
    case 'top-right':
    case 'bottom-left':
      return 'nesw-resize';
    case 'body':
      return 'grab';
    default:
      return 'default';
  }
}

function restrictHitToAxis(hit: ViewportWindowHit, axis: ZoomAxis): ViewportWindowHit {
  if (axis === 'xy' || hit === 'outside' || hit === 'body') {
    return hit;
  }
  if (axis === 'x') {
    if (hit.includes('left')) {
      return 'left';
    }
    if (hit.includes('right')) {
      return 'right';
    }
    return 'body';
  }
  if (hit.includes('top')) {
    return 'top';
  }
  if (hit.includes('bottom')) {
    return 'bottom';
  }
  return 'body';
}

type DragState = {
  hit: ViewportWindowHandle;
  startX: number;
  startY: number;
  zoom: ZoomState;
};

type PinchState = {
  distance: number;
  midpoint: { x: number; y: number };
  zoom: ZoomState;
};

type MinimapControlsContextValue = {
  area: ViewportWindowArea;
  axis: ZoomAxis;
  cursor: React.CSSProperties['cursor'];
  flipped: ViewportWindowFlipped;
  limits: ZoomLimits;
  viewportRect: ReturnType<typeof zoomStateToRect>;
  getCurrentZoom: () => ZoomState;
  apply: (next: ZoomState) => void;
  setHoverHit: (hit: ViewportWindowHit) => void;
  overlayNode: SVGRectElement | null;
};

type InternalMinimapControlsContextValue = MinimapControlsContextValue & {
  cancelDrag: () => void;
  cancelPinch: () => void;
  registerCancelDrag: (cancel: () => void) => () => void;
  registerCancelPinch: (cancel: () => void) => () => void;
  setDragHit: (hit: ViewportWindowHandle | null) => void;
};

const MinimapControlsContext = createContext<InternalMinimapControlsContextValue | null>(null);

function useInternalMinimapControls(): InternalMinimapControlsContextValue {
  const context = useContext(MinimapControlsContext);
  if (context == null) {
    throw new Error('useMinimapControls must be used inside <Minimap />.');
  }
  return context;
}

export function useMinimapControls(): MinimapControlsContextValue {
  return useInternalMinimapControls();
}

function MinimapInternal(props: Props) {
  const {
    x,
    y,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    className,
    padding = DEFAULT_PADDING,
    fill = '#fff',
    stroke = '#ccc',
    viewportFill = 'transparent',
    viewportStroke = '#666',
    shadeFill = '#000',
    shadeOpacity = 0.25,
    children,
    position = 'bottom-right',
    margin = 10,
    axis = 'xy',
    minZoom = DEFAULT_LIMITS.minZoom,
    maxZoom = DEFAULT_LIMITS.maxZoom,
    controls,
    ariaLabel,
    zIndex = DEFAULT_Z_INDEX,
    style,
  } = props;

  const dispatch = useAppDispatch();
  const chartData = useChartData();
  const zoom = useAppSelector(selectZoom);
  const offset = useAppSelector(selectChartOffsetInternal);
  const chartWidth = useAppSelector(selectChartWidth);
  const chartHeight = useAppSelector(selectChartHeight);
  const xFlipped =
    useAppSelector(state => isRangeFlipped(selectAxisRangeWithReverse(state, 'xAxis', 0, false))) ?? false;
  const yFlipped =
    useAppSelector(state => isRangeFlipped(selectAxisRangeWithReverse(state, 'yAxis', 0, false))) ?? false;
  const clipId = useUniqueId('recharts-minimap-clip');
  const zoomRef = useRef<ZoomState | undefined>(zoom);
  const cancelDragRef = useRef<() => void>(() => {});
  const cancelPinchRef = useRef<() => void>(() => {});
  const [hoverHit, setHoverHit] = useState<ViewportWindowHit>('outside');
  const [dragHit, setDragHit] = useState<ViewportWindowHandle | null>(null);
  const [overlayNode, setOverlayNode] = useState<SVGRectElement | null>(null);
  zoomRef.current = zoom;

  const frame = useMemo(() => {
    if (offset == null || chartWidth == null || chartHeight == null) {
      return null;
    }
    if (x != null && y != null) {
      return { x, y, width, height };
    }
    const plotRight = offset.left + offset.width;
    const plotBottom = offset.top + offset.height;
    switch (position) {
      case 'top-left':
        return { x: offset.left + margin, y: offset.top + margin, width, height };
      case 'top-right':
        return { x: plotRight - width - margin, y: offset.top + margin, width, height };
      case 'bottom-left':
        return { x: offset.left + margin, y: plotBottom - height - margin, width, height };
      case 'bottom-right':
      default:
        return { x: plotRight - width - margin, y: plotBottom - height - margin, width, height };
    }
  }, [chartHeight, chartWidth, height, margin, offset, position, width, x, y]);

  const content = useMemo<ViewportWindowArea | null>(() => {
    if (frame == null) {
      return null;
    }
    return {
      x: frame.x + padding.left,
      y: frame.y + padding.top,
      width: Math.max(frame.width - padding.left - padding.right, 0),
      height: Math.max(frame.height - padding.top - padding.bottom, 0),
    };
  }, [frame, padding.bottom, padding.left, padding.right, padding.top]);

  const flipped: ViewportWindowFlipped = useMemo(() => ({ x: xFlipped, y: yFlipped }), [xFlipped, yFlipped]);
  const limits = useMemo(() => ({ minZoom, maxZoom }), [maxZoom, minZoom]);

  const apply = useCallback(
    (next: ZoomState) => {
      const { current } = zoomRef;
      if (current == null) {
        return;
      }
      dispatch(setZoom(mergeEnabledDimensions(current, next, axis)));
    },
    [axis, dispatch],
  );

  const getCurrentZoom = useCallback(() => zoomRef.current ?? DEFAULT_ZOOM_STATE, []);

  const cancelDrag = useCallback(() => cancelDragRef.current(), []);
  const cancelPinch = useCallback(() => cancelPinchRef.current(), []);
  const registerCancelDrag = useCallback((cancel: () => void) => {
    cancelDragRef.current = cancel;
    return () => {
      if (cancelDragRef.current === cancel) {
        cancelDragRef.current = () => {};
      }
    };
  }, []);
  const registerCancelPinch = useCallback((cancel: () => void) => {
    cancelPinchRef.current = cancel;
    return () => {
      if (cancelPinchRef.current === cancel) {
        cancelPinchRef.current = () => {};
      }
    };
  }, []);

  const activeArea = content ?? EMPTY_AREA;
  const displayedZoom = zoom ?? DEFAULT_ZOOM_STATE;
  const viewportRect = useMemo(
    () => zoomStateToRect(displayedZoom, activeArea, flipped),
    [activeArea, displayedZoom, flipped],
  );
  const activeHit = dragHit ?? hoverHit;
  const cursor = dragHit === 'body' ? 'grabbing' : getCursor(activeHit);
  const controlsContext = useMemo<InternalMinimapControlsContextValue>(
    () => ({
      area: activeArea,
      axis,
      cursor,
      flipped,
      limits,
      viewportRect,
      getCurrentZoom,
      apply,
      setHoverHit,
      setDragHit,
      overlayNode,
      cancelDrag,
      cancelPinch,
      registerCancelDrag,
      registerCancelPinch,
    }),
    [
      activeArea,
      apply,
      axis,
      cancelDrag,
      cancelPinch,
      cursor,
      flipped,
      getCurrentZoom,
      limits,
      overlayNode,
      registerCancelDrag,
      registerCancelPinch,
      viewportRect,
    ],
  );

  if (frame == null || content == null || chartData == null || !chartData.length || zoom == null) {
    return null;
  }

  const isZoomed = !isFullViewport(zoom.x) || !isFullViewport(zoom.y);
  const layerClass = clsx('recharts-minimap', className);
  const userSelectStyle = generatePrefixStyle('userSelect', 'none');
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const renderedControls = controls === undefined ? <MinimapControls /> : controls;

  return (
    <ZIndexLayer zIndex={zIndex}>
      <Layer className={layerClass} style={{ ...userSelectStyle, ...style }}>
        <rect x={frame.x} y={frame.y} width={frame.width} height={frame.height} fill={fill} stroke={stroke} />
        <defs>
          <clipPath id={clipId}>
            <rect x={content.x} y={content.y} width={content.width} height={content.height} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect x={content.x} y={content.y} width={content.width} height={content.height} fill={fill} />
          <PanoramaPreview
            x={content.x}
            y={content.y}
            width={content.width}
            height={content.height}
            data={chartData}
            padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            {children}
          </PanoramaPreview>
        </g>
        {isZoomed && (
          <>
            <rect
              className="recharts-minimap-shade recharts-minimap-shade-top"
              x={content.x}
              y={content.y}
              width={content.width}
              height={Math.max(viewportRect.y - content.y, 0)}
              fill={shadeFill}
              opacity={shadeOpacity}
              pointerEvents="none"
            />
            <rect
              className="recharts-minimap-shade recharts-minimap-shade-bottom"
              x={content.x}
              y={viewportRect.y + viewportRect.height}
              width={content.width}
              height={Math.max(content.y + content.height - (viewportRect.y + viewportRect.height), 0)}
              fill={shadeFill}
              opacity={shadeOpacity}
              pointerEvents="none"
            />
            <rect
              className="recharts-minimap-shade recharts-minimap-shade-left"
              x={content.x}
              y={viewportRect.y}
              width={Math.max(viewportRect.x - content.x, 0)}
              height={viewportRect.height}
              fill={shadeFill}
              opacity={shadeOpacity}
              pointerEvents="none"
            />
            <rect
              className="recharts-minimap-shade recharts-minimap-shade-right"
              x={viewportRect.x + viewportRect.width}
              y={viewportRect.y}
              width={Math.max(content.x + content.width - (viewportRect.x + viewportRect.width), 0)}
              height={viewportRect.height}
              fill={shadeFill}
              opacity={shadeOpacity}
              pointerEvents="none"
            />
          </>
        )}
        <rect
          className="recharts-minimap-viewport"
          x={viewportRect.x}
          y={viewportRect.y}
          width={viewportRect.width}
          height={viewportRect.height}
          fill={viewportFill}
          stroke={viewportStroke}
          pointerEvents="none"
        />
        <MinimapControlsContext.Provider value={controlsContext}>
          <rect
            {...{ [ZOOM_SCROLLBAR_ATTR]: 'minimap' }}
            ref={setOverlayNode}
            className="recharts-minimap-overlay"
            x={content.x}
            y={content.y}
            width={content.width}
            height={content.height}
            fill="transparent"
            pointerEvents="all"
            tabIndex={0}
            aria-label={ariaLabel}
            /*
             * No outline:none here: the element is keyboard-focusable, so the focus ring must stay
             * visible. Browsers only draw the default ring on :focus-visible (keyboard), not on click.
             */
            style={{ cursor, touchAction: 'none' }}
          />
          {renderedControls}
        </MinimapControlsContext.Provider>
      </Layer>
    </ZIndexLayer>
  );
}

export function MinimapDrag() {
  const {
    area,
    apply,
    axis,
    cancelPinch,
    flipped,
    getCurrentZoom,
    overlayNode,
    registerCancelDrag,
    setDragHit,
    setHoverHit,
    viewportRect,
  } = useInternalMinimapControls();
  const dragRef = useRef<DragState | null>(null);

  useEffect(() => {
    if (overlayNode == null) {
      return undefined;
    }

    const end = () => {
      dragRef.current = null;
      setDragHit(null);
    };
    const unregisterCancelDrag = registerCancelDrag(end);

    const beginDrag = (point: { x: number; y: number }, jumpOutside: boolean) => {
      const currentZoom = getCurrentZoom();
      const currentRect = zoomStateToRect(currentZoom, area, flipped);
      const hit = restrictHitToAxis(hitTestViewportWindow(currentRect, point.x, point.y), axis);
      setHoverHit(hit);
      setDragHit(null);
      if (hit === 'outside') {
        if (jumpOutside) {
          apply(centerZoomStateAtPoint(currentZoom, area, flipped, point.x, point.y));
        }
        return;
      }
      dragRef.current = { hit, startX: point.x, startY: point.y, zoom: currentZoom };
      setDragHit(hit);
    };

    const moveDrag = (point: { x: number; y: number }) => {
      const drag = dragRef.current;
      if (drag == null) {
        return;
      }
      if (drag.hit === 'body') {
        apply(panZoomStateByPixels(drag.zoom, area, flipped, point.x - drag.startX, point.y - drag.startY));
      } else {
        apply(resizeZoomStateRect(drag.zoom, area, flipped, drag.hit, point.x, point.y));
      }
    };

    const pointerDown = (event: PointerEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') {
        return;
      }
      beginDrag(getPointFromClient(event.clientX, event.clientY, overlayNode, area), true);
      overlayNode.setPointerCapture?.(event.pointerId);
    };
    const pointerMove = (event: PointerEvent) => {
      const point = getPointFromClient(event.clientX, event.clientY, overlayNode, area);
      if (dragRef.current == null) {
        setHoverHit(restrictHitToAxis(hitTestViewportWindow(viewportRect, point.x, point.y), axis));
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      moveDrag(point);
    };
    const pointerUp = (event: PointerEvent) => {
      end();
      overlayNode.releasePointerCapture?.(event.pointerId);
    };
    const mouseDown = (event: MouseEvent) => {
      if (dragRef.current != null) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      beginDrag(getPointFromClient(event.clientX, event.clientY, overlayNode, area), true);
    };
    const mouseMove = (event: MouseEvent) => {
      const point = getPointFromClient(event.clientX, event.clientY, overlayNode, area);
      if (dragRef.current == null) {
        setHoverHit(restrictHitToAxis(hitTestViewportWindow(viewportRect, point.x, point.y), axis));
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      moveDrag(point);
    };
    const touchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        end();
        return;
      }
      const touch = event.touches[0];
      if (touch == null) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      cancelPinch();
      beginDrag(getTouchPoint(touch, overlayNode, area), false);
    };
    const touchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1 || dragRef.current == null) {
        if (event.touches.length !== 1) {
          end();
        }
        return;
      }
      const touch = event.touches[0];
      if (touch == null) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      moveDrag(getTouchPoint(touch, overlayNode, area));
    };

    overlayNode.addEventListener('pointerdown', pointerDown);
    overlayNode.addEventListener('pointermove', pointerMove);
    overlayNode.addEventListener('pointerup', pointerUp);
    overlayNode.addEventListener('pointercancel', pointerUp);
    overlayNode.addEventListener('mousedown', mouseDown);
    overlayNode.addEventListener('mousemove', mouseMove);
    overlayNode.addEventListener('mouseup', end);
    overlayNode.addEventListener('mouseleave', end);
    overlayNode.addEventListener('touchstart', touchStart, { passive: false });
    overlayNode.addEventListener('touchmove', touchMove, { passive: false });
    overlayNode.addEventListener('touchend', end);
    overlayNode.addEventListener('touchcancel', end);
    return () => {
      overlayNode.removeEventListener('pointerdown', pointerDown);
      overlayNode.removeEventListener('pointermove', pointerMove);
      overlayNode.removeEventListener('pointerup', pointerUp);
      overlayNode.removeEventListener('pointercancel', pointerUp);
      overlayNode.removeEventListener('mousedown', mouseDown);
      overlayNode.removeEventListener('mousemove', mouseMove);
      overlayNode.removeEventListener('mouseup', end);
      overlayNode.removeEventListener('mouseleave', end);
      overlayNode.removeEventListener('touchstart', touchStart);
      overlayNode.removeEventListener('touchmove', touchMove);
      overlayNode.removeEventListener('touchend', end);
      overlayNode.removeEventListener('touchcancel', end);
      unregisterCancelDrag();
    };
  }, [
    area,
    apply,
    axis,
    cancelPinch,
    flipped,
    getCurrentZoom,
    overlayNode,
    registerCancelDrag,
    setDragHit,
    setHoverHit,
    viewportRect,
  ]);

  return null;
}

export function MinimapWheel({
  enabled = true,
  step = DEFAULT_WHEEL_STEP,
  panStep = DEFAULT_WHEEL_PAN_STEP,
}: {
  enabled?: boolean;
  step?: number;
  panStep?: number;
}) {
  const { area, apply, flipped, getCurrentZoom, limits, overlayNode } = useMinimapControls();

  useEffect(() => {
    if (overlayNode == null) {
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
      const rect = overlayNode.getBoundingClientRect();
      const point = { x: area.x + event.clientX - rect.left, y: area.y + event.clientY - rect.top };
      const currentZoom = getCurrentZoom();
      const factor = event.deltaY < 0 ? step : 1 / step;
      const rawDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      const panAmount = rawDelta * panStep;

      if (event.shiftKey) {
        const panY = event.ctrlKey || event.metaKey;
        apply({
          x: panY ? currentZoom.x : panDimension(currentZoom.x, panAmount),
          y: panY ? panDimension(currentZoom.y, panAmount) : currentZoom.y,
        });
        return;
      }

      apply({
        x: zoomDimension(currentZoom.x, factor, getRatioInArea(point.x, area.x, area.width, flipped.x), limits),
        y: zoomDimension(currentZoom.y, factor, getRatioInArea(point.y, area.y, area.height, flipped.y), limits),
      });
    };
    overlayNode.addEventListener('wheel', wheel, { passive: false });
    return () => overlayNode.removeEventListener('wheel', wheel);
  }, [area, apply, enabled, flipped, getCurrentZoom, limits, overlayNode, panStep, step]);

  return null;
}

export function MinimapPinch() {
  const { area, apply, cancelDrag, flipped, getCurrentZoom, limits, overlayNode, registerCancelPinch } =
    useInternalMinimapControls();
  const pinchRef = useRef<PinchState | null>(null);

  useEffect(() => {
    if (overlayNode == null) {
      return undefined;
    }
    const end = () => {
      pinchRef.current = null;
    };
    const unregisterCancelPinch = registerCancelPinch(end);

    const touchStart = (event: TouchEvent) => {
      if (event.touches.length < 2) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      cancelDrag();
      const first = event.touches[0];
      const second = event.touches[1];
      if (first == null || second == null) {
        return;
      }
      const a = getTouchPoint(first, overlayNode, area);
      const b = getTouchPoint(second, overlayNode, area);
      pinchRef.current = {
        distance: Math.hypot(a.x - b.x, a.y - b.y),
        midpoint: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
        zoom: getCurrentZoom(),
      };
    };
    const touchMove = (event: TouchEvent) => {
      const pinchState = pinchRef.current;
      if (pinchState == null || event.touches.length < 2) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const first = event.touches[0];
      const second = event.touches[1];
      if (first == null || second == null) {
        return;
      }
      const a = getTouchPoint(first, overlayNode, area);
      const b = getTouchPoint(second, overlayNode, area);
      const midpoint = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const factor = pinchState.distance === 0 ? 1 : distance / pinchState.distance;
      const zoomed: ZoomState = {
        x: zoomDimension(pinchState.zoom.x, factor, getRatioInArea(midpoint.x, area.x, area.width, flipped.x), limits),
        y: zoomDimension(pinchState.zoom.y, factor, getRatioInArea(midpoint.y, area.y, area.height, flipped.y), limits),
      };
      apply(
        panZoomStateByPixels(
          zoomed,
          area,
          flipped,
          midpoint.x - pinchState.midpoint.x,
          midpoint.y - pinchState.midpoint.y,
        ),
      );
    };
    overlayNode.addEventListener('touchstart', touchStart, { passive: false });
    overlayNode.addEventListener('touchmove', touchMove, { passive: false });
    overlayNode.addEventListener('touchend', end);
    overlayNode.addEventListener('touchcancel', end);
    return () => {
      overlayNode.removeEventListener('touchstart', touchStart);
      overlayNode.removeEventListener('touchmove', touchMove);
      overlayNode.removeEventListener('touchend', end);
      overlayNode.removeEventListener('touchcancel', end);
      unregisterCancelPinch();
    };
  }, [area, apply, cancelDrag, flipped, getCurrentZoom, limits, overlayNode, registerCancelPinch]);

  return null;
}

export function MinimapKeyboard({ step = DEFAULT_WHEEL_STEP }: { step?: number }) {
  const { apply, flipped, getCurrentZoom, limits, overlayNode } = useInternalMinimapControls();

  useEffect(() => {
    if (overlayNode == null) {
      return undefined;
    }
    const keydown = (event: KeyboardEvent) => {
      const currentZoom = getCurrentZoom();
      let next: ZoomState | undefined;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        next = {
          x: panDimension(currentZoom.x, direction * (flipped.x ? -1 : 1) * KEYBOARD_PAN_STEP),
          y: currentZoom.y,
        };
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        next = {
          x: currentZoom.x,
          y: panDimension(currentZoom.y, direction * (flipped.y ? -1 : 1) * KEYBOARD_PAN_STEP),
        };
      } else if (event.key === '+' || event.key === '=') {
        next = {
          x: zoomDimension(currentZoom.x, step, 0.5, limits),
          y: zoomDimension(currentZoom.y, step, 0.5, limits),
        };
      } else if (event.key === '-') {
        next = {
          x: zoomDimension(currentZoom.x, 1 / step, 0.5, limits),
          y: zoomDimension(currentZoom.y, 1 / step, 0.5, limits),
        };
      } else if (event.key === '0' || event.key === 'Home') {
        next = { x: FULL_VIEWPORT, y: FULL_VIEWPORT };
      }
      if (next == null) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      apply(next);
    };
    overlayNode.addEventListener('keydown', keydown);
    return () => overlayNode.removeEventListener('keydown', keydown);
  }, [apply, flipped, getCurrentZoom, limits, overlayNode, step]);

  return null;
}

export function MinimapControls() {
  return (
    <>
      <MinimapDrag />
      <MinimapWheel />
      <MinimapPinch />
      <MinimapKeyboard />
    </>
  );
}

/**
 * Renders a compact overview of the full chart data with an editable viewport rectangle.
 *
 * By default, `<Minimap />` renders a hit surface plus `<MinimapControls />`: drag, wheel, pinch and keyboard controls.
 * Replace the `controls` prop to compose only the controls you want, or use `useMinimapControls()` to bring your own
 * controls. The minimap always renders the complete shared viewport rectangle; its `axis` prop only limits which
 * dimensions the minimap controls write back. The minimap reads and writes the same normalized zoom viewport as
 * `ZoomAndPan`, so it stays in sync with plot gestures, scrollbars, Brush zoom mode and controlled zoom state.
 *
 * @consumes CartesianChartContext
 */
export function Minimap(outsideProps: Props) {
  return <MinimapInternal {...outsideProps} />;
}

Minimap.displayName = 'Minimap';
