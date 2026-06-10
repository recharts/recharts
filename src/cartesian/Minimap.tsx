import * as React from 'react';
import { ReactElement, SVGProps, useMemo, useRef, useState } from 'react';
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
  wheel?: boolean;
  wheelStep?: number;
  wheelPanStep?: number;
  pinch?: boolean;
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

function axisEnabled(axis: ZoomAxis, dimension: 'x' | 'y'): boolean {
  return axis === 'xy' || axis === dimension;
}

function mergeEnabledDimensions(current: ZoomState, next: ZoomState, axis: ZoomAxis): ZoomState {
  return {
    x: axisEnabled(axis, 'x') ? next.x : current.x,
    y: axisEnabled(axis, 'y') ? next.y : current.y,
  };
}

function visibleZoomForAxis(zoom: ZoomState, axis: ZoomAxis): ZoomState {
  return {
    x: axisEnabled(axis, 'x') ? zoom.x : FULL_VIEWPORT,
    y: axisEnabled(axis, 'y') ? zoom.y : FULL_VIEWPORT,
  };
}

function getPointFromEvent(
  event: React.PointerEvent<SVGRectElement>,
  area: ViewportWindowArea,
): { x: number; y: number } {
  const rect = event.currentTarget.getBoundingClientRect();
  return {
    x: area.x + event.clientX - rect.left,
    y: area.y + event.clientY - rect.top,
  };
}

function getPointFromMouseEvent(
  event: React.MouseEvent<SVGRectElement>,
  area: ViewportWindowArea,
): { x: number; y: number } {
  const rect = event.currentTarget.getBoundingClientRect();
  return {
    x: area.x + event.clientX - rect.left,
    y: area.y + event.clientY - rect.top,
  };
}

function getTouchPoint(touch: React.Touch, target: SVGRectElement, area: ViewportWindowArea): { x: number; y: number } {
  const rect = target.getBoundingClientRect();
  return {
    x: area.x + touch.clientX - rect.left,
    y: area.y + touch.clientY - rect.top,
  };
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
    wheel = true,
    wheelStep = DEFAULT_WHEEL_STEP,
    wheelPanStep = DEFAULT_WHEEL_PAN_STEP,
    pinch = true,
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
  const dragRef = useRef<DragState | null>(null);
  const pinchRef = useRef<PinchState | null>(null);
  const zoomRef = useRef<ZoomState | undefined>(zoom);
  const [hoverHit, setHoverHit] = useState<ViewportWindowHit>('outside');
  zoomRef.current = zoom;

  /*
   * Wheel is attached as a NATIVE non-passive listener: React's synthetic `onWheel` is passive since
   * v17, which makes `preventDefault()` a no-op - the page would scroll while wheeling the minimap.
   * The trampoline always calls the latest handler so the listener is attached only once per node.
   */
  const overlayNodeRef = useRef<SVGRectElement | null>(null);
  const wheelHandlerRef = useRef<(event: WheelEvent) => void>(() => {});
  const overlayRefCallback = useMemo(() => {
    const trampoline = (event: WheelEvent) => wheelHandlerRef.current(event);
    return (node: SVGRectElement | null) => {
      if (overlayNodeRef.current != null) {
        overlayNodeRef.current.removeEventListener('wheel', trampoline);
      }
      overlayNodeRef.current = node;
      if (node != null) {
        node.addEventListener('wheel', trampoline, { passive: false });
      }
    };
  }, []);

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

  if (frame == null || content == null || chartData == null || !chartData.length || zoom == null) {
    return null;
  }

  const flipped: ViewportWindowFlipped = { x: xFlipped, y: yFlipped };
  const displayedZoom = visibleZoomForAxis(zoom, axis);
  const viewportRect = zoomStateToRect(displayedZoom, content, flipped);
  const isZoomed =
    (axisEnabled(axis, 'x') && !isFullViewport(zoom.x)) || (axisEnabled(axis, 'y') && !isFullViewport(zoom.y));
  const limits = { minZoom, maxZoom };

  const apply = (next: ZoomState) => {
    const { current } = zoomRef;
    if (current == null) {
      return;
    }
    dispatch(setZoom(mergeEnabledDimensions(current, next, axis)));
  };

  const beginDrag = (point: { x: number; y: number }) => {
    const currentZoom = zoomRef.current == null ? displayedZoom : visibleZoomForAxis(zoomRef.current, axis);
    const currentRect = zoomStateToRect(currentZoom, content, flipped);
    const hit = hitTestViewportWindow(currentRect, point.x, point.y);
    setHoverHit(hit);
    if (hit === 'outside') {
      apply(centerZoomStateAtPoint(currentZoom, content, flipped, point.x, point.y));
      return;
    }
    dragRef.current = { hit, startX: point.x, startY: point.y, zoom: currentZoom };
  };

  const beginTouchDrag = (point: { x: number; y: number }) => {
    const currentZoom = zoomRef.current == null ? displayedZoom : visibleZoomForAxis(zoomRef.current, axis);
    const currentRect = zoomStateToRect(currentZoom, content, flipped);
    const hit = hitTestViewportWindow(currentRect, point.x, point.y);
    setHoverHit(hit);
    if (hit !== 'outside') {
      dragRef.current = { hit, startX: point.x, startY: point.y, zoom: currentZoom };
    }
  };

  const moveDrag = (point: { x: number; y: number }) => {
    const drag = dragRef.current;
    if (drag == null) {
      return;
    }
    if (drag.hit === 'body') {
      apply(panZoomStateByPixels(drag.zoom, content, flipped, point.x - drag.startX, point.y - drag.startY));
    } else {
      apply(resizeZoomStateRect(drag.zoom, content, flipped, drag.hit, point.x, point.y));
    }
  };

  const handlePointerDown = (event: React.PointerEvent<SVGRectElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') {
      return;
    }
    beginDrag(getPointFromEvent(event, content));
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<SVGRectElement>) => {
    if (dragRef.current == null) {
      const point = getPointFromEvent(event, content);
      const nextHit = hitTestViewportWindow(viewportRect, point.x, point.y);
      if (nextHit !== hoverHit) {
        setHoverHit(nextHit);
      }
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    moveDrag(getPointFromEvent(event, content));
  };

  const handlePointerUp = (event: React.PointerEvent<SVGRectElement>) => {
    dragRef.current = null;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  const handleMouseDown = (event: React.MouseEvent<SVGRectElement>) => {
    if (dragRef.current != null) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    beginDrag(getPointFromMouseEvent(event, content));
  };

  const handleMouseMove = (event: React.MouseEvent<SVGRectElement>) => {
    if (dragRef.current == null) {
      const point = getPointFromMouseEvent(event, content);
      const nextHit = hitTestViewportWindow(viewportRect, point.x, point.y);
      if (nextHit !== hoverHit) {
        setHoverHit(nextHit);
      }
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    moveDrag(getPointFromMouseEvent(event, content));
  };

  const handleMouseUp = () => {
    dragRef.current = null;
  };

  const handleWheel = (event: WheelEvent) => {
    const node = overlayNodeRef.current;
    if (!wheel || node == null) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const rect = node.getBoundingClientRect();
    const point = { x: content.x + event.clientX - rect.left, y: content.y + event.clientY - rect.top };
    const currentZoom = zoomRef.current == null ? displayedZoom : visibleZoomForAxis(zoomRef.current, axis);
    const factor = event.deltaY < 0 ? wheelStep : 1 / wheelStep;
    const rawDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    const panAmount = rawDelta * wheelPanStep;

    if (event.shiftKey) {
      const panY = event.ctrlKey || event.metaKey;
      apply({
        x: panY ? currentZoom.x : panDimension(currentZoom.x, panAmount),
        y: panY ? panDimension(currentZoom.y, panAmount) : currentZoom.y,
      });
      return;
    }

    apply({
      x: zoomDimension(currentZoom.x, factor, getRatioInArea(point.x, content.x, content.width, flipped.x), limits),
      y: zoomDimension(currentZoom.y, factor, getRatioInArea(point.y, content.y, content.height, flipped.y), limits),
    });
  };

  const handleTouchStart = (event: React.TouchEvent<SVGRectElement>) => {
    if (event.touches.length === 1) {
      const touch = event.touches[0];
      if (touch == null) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      pinchRef.current = null;
      beginTouchDrag(getTouchPoint(touch, event.currentTarget, content));
      return;
    }

    if (!pinch || event.touches.length < 2) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    dragRef.current = null;
    const first = event.touches[0];
    const second = event.touches[1];
    if (first == null || second == null) {
      return;
    }
    const a = getTouchPoint(first, event.currentTarget, content);
    const b = getTouchPoint(second, event.currentTarget, content);
    const currentZoom = zoomRef.current == null ? displayedZoom : visibleZoomForAxis(zoomRef.current, axis);
    pinchRef.current = {
      distance: Math.hypot(a.x - b.x, a.y - b.y),
      midpoint: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
      zoom: currentZoom,
    };
  };

  const handleTouchMove = (event: React.TouchEvent<SVGRectElement>) => {
    const pinchState = pinchRef.current;
    if (pinchState == null && event.touches.length === 1 && dragRef.current != null) {
      const touch = event.touches[0];
      if (touch == null) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      moveDrag(getTouchPoint(touch, event.currentTarget, content));
      return;
    }

    if (!pinch || pinchState == null || event.touches.length < 2) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const first = event.touches[0];
    const second = event.touches[1];
    if (first == null || second == null) {
      return;
    }
    const a = getTouchPoint(first, event.currentTarget, content);
    const b = getTouchPoint(second, event.currentTarget, content);
    const midpoint = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    const distance = Math.hypot(a.x - b.x, a.y - b.y);
    const factor = pinchState.distance === 0 ? 1 : distance / pinchState.distance;
    const zoomed: ZoomState = {
      x: zoomDimension(
        pinchState.zoom.x,
        factor,
        getRatioInArea(midpoint.x, content.x, content.width, flipped.x),
        limits,
      ),
      y: zoomDimension(
        pinchState.zoom.y,
        factor,
        getRatioInArea(midpoint.y, content.y, content.height, flipped.y),
        limits,
      ),
    };
    apply(
      panZoomStateByPixels(
        zoomed,
        content,
        flipped,
        midpoint.x - pinchState.midpoint.x,
        midpoint.y - pinchState.midpoint.y,
      ),
    );
  };

  const handleTouchEnd = () => {
    pinchRef.current = null;
    dragRef.current = null;
  };

  const handleKeyDown = (event: React.KeyboardEvent<SVGRectElement>) => {
    const currentZoom = zoomRef.current == null ? displayedZoom : visibleZoomForAxis(zoomRef.current, axis);
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
        x: zoomDimension(currentZoom.x, wheelStep, 0.5, limits),
        y: zoomDimension(currentZoom.y, wheelStep, 0.5, limits),
      };
    } else if (event.key === '-') {
      next = {
        x: zoomDimension(currentZoom.x, 1 / wheelStep, 0.5, limits),
        y: zoomDimension(currentZoom.y, 1 / wheelStep, 0.5, limits),
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

  wheelHandlerRef.current = handleWheel;

  const layerClass = clsx('recharts-minimap', className);
  const userSelectStyle = generatePrefixStyle('userSelect', 'none');
  const activeHit = dragRef.current?.hit ?? hoverHit;
  const cursor = dragRef.current?.hit === 'body' ? 'grabbing' : getCursor(activeHit);

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
        <rect
          {...{ [ZOOM_SCROLLBAR_ATTR]: 'minimap' }}
          ref={overlayRefCallback}
          className="recharts-minimap-overlay"
          x={content.x}
          y={content.y}
          width={content.width}
          height={content.height}
          fill="transparent"
          pointerEvents="all"
          tabIndex={0}
          aria-label={ariaLabel}
          style={{ cursor, touchAction: 'none', outline: 'none' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStartCapture={handleTouchStart}
          onTouchMoveCapture={handleTouchMove}
          onTouchEndCapture={handleTouchEnd}
          onTouchCancelCapture={handleTouchEnd}
          onKeyDown={handleKeyDown}
        />
      </Layer>
    </ZIndexLayer>
  );
}

/**
 * Renders a compact overview of the full chart data with an editable viewport rectangle.
 *
 * Drag the rectangle to pan, resize its edges to zoom, click outside it to jump, or use wheel and pinch gestures over
 * the minimap. The minimap reads and writes the same normalized zoom viewport as `ZoomAndPan`, so it stays in sync with
 * plot gestures, scrollbars, Brush zoom mode and controlled zoom state.
 *
 * @consumes CartesianChartContext
 */
export function Minimap(outsideProps: Props) {
  return <MinimapInternal {...outsideProps} />;
}

Minimap.displayName = 'Minimap';
