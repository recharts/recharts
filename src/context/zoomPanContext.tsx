import React, { ReactNode, useCallback, useRef, useState } from 'react';
import { useOffset } from './chartLayoutContext';
import { ClipChartRect } from '../container/ClipPathProvider';
import { useAppDispatch } from '../state/hooks';
import { setZoom } from '../state/zoomSlice';

export interface ZoomConfig {
  mode?: 'x' | 'y' | 'xy';
  minScale?: number;
  maxScale?: number;
  onZoomChange?: (state: ZoomState) => void;
  resetKey?: 'dblclick' | 'dbltap';
  showScrollBar?: boolean;
  disableAnimation?: boolean;
}

interface ZoomState {
  scaleX: number;
  scaleY: number;
  offsetX: number;
  offsetY: number;
  disableAnimation?: boolean;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function restrictOffsets(mode: 'x' | 'y' | 'xy', s: ZoomState, w: number, h: number): ZoomState {
  const minX = w * (1 - s.scaleX);
  const minY = h * (1 - s.scaleY);
  return {
    scaleX: s.scaleX,
    scaleY: s.scaleY,
    offsetX: mode === 'y' ? 0 : clamp(s.offsetX, minX, 0),
    offsetY: mode === 'x' ? 0 : clamp(s.offsetY, minY, 0),
    disableAnimation: s.disableAnimation,
  };
}

export function ZoomPanContainer({ children, config }: { children: ReactNode; config: ZoomConfig }): React.JSX.Element {
  const {
    mode = 'x',
    minScale = 1,
    maxScale = 20,
    onZoomChange,
    showScrollBar = false,
    disableAnimation = false,
  } = config;
  const { width, height, left, top } = useOffset();
  const overlayRef = useRef<SVGRectElement>(null);
  const pointerSupported = typeof window !== 'undefined' && 'PointerEvent' in window;

  const getLocalCoords = useCallback((e: { clientX: number; clientY: number }) => {
    const rect = overlayRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);
  const dispatch = useAppDispatch();
  const [state, setState] = useState<ZoomState>({
    scaleX: 1,
    scaleY: 1,
    offsetX: 0,
    offsetY: 0,
    // start with animations enabled so initial mount is unaffected
    disableAnimation: false,
  });
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStart = useRef<{
    distance: number;
    scaleX: number;
    scaleY: number;
    offsetX: number;
    offsetY: number;
    centerX: number;
    centerY: number;
  } | null>(null);
  const lastTap = useRef<number>(0);

  const update = useCallback(
    (next: ZoomState) => {
      const restricted = restrictOffsets(mode, next, width, height);
      setState(restricted);
      onZoomChange?.(restricted);
      dispatch(setZoom(restricted));
    },
    [onZoomChange, dispatch, mode, width, height],
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGGElement>) => {
      e.preventDefault();
      const local = getLocalCoords(e);
      const anchorX = local.x - state.offsetX;
      const anchorY = local.y - state.offsetY;
      const delta = e.deltaY < 0 ? 1.1 : 0.9;

      const next = { ...state };

      if (mode === 'y') {
        const newScaleY = clamp(state.scaleY * delta, minScale, maxScale);
        const ratioY = newScaleY / state.scaleY;
        next.scaleY = newScaleY;
        next.offsetY = state.offsetY - anchorY * (ratioY - 1);
      } else if (mode === 'xy') {
        const newScale = clamp(state.scaleX * delta, minScale, maxScale);
        const ratio = newScale / state.scaleX;
        next.scaleX = newScale;
        next.scaleY = newScale;
        next.offsetX = state.offsetX - anchorX * (ratio - 1);
        next.offsetY = state.offsetY - anchorY * (ratio - 1);
      } else {
        const newScaleX = clamp(state.scaleX * delta, minScale, maxScale);
        const ratioX = newScaleX / state.scaleX;
        next.scaleX = newScaleX;
        next.offsetX = state.offsetX - anchorX * (ratioX - 1);
      }

      next.disableAnimation = disableAnimation;
      update(next);
    },
    [state, minScale, maxScale, update, mode, getLocalCoords, disableAnimation],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGGElement>) => {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      const { x: localX, y: localY } = getLocalCoords(e);
      pointers.current.set(e.pointerId, { x: localX, y: localY });
      if (pointers.current.size === 1) {
        dragStart.current = { x: localX, y: localY };
      }
      if (pointers.current.size === 2) {
        const [a, b] = Array.from(pointers.current.values());
        pinchStart.current = {
          distance: Math.hypot(a.x - b.x, a.y - b.y),
          scaleX: state.scaleX,
          scaleY: state.scaleY,
          offsetX: state.offsetX,
          offsetY: state.offsetY,
          centerX: (a.x + b.x) / 2 - state.offsetX,
          centerY: (a.y + b.y) / 2 - state.offsetY,
        };
      }
    },
    [state.scaleX, state.scaleY, state.offsetX, state.offsetY, getLocalCoords],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      Array.from(e.changedTouches).forEach(t => {
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        pointers.current.set(t.identifier, local);
      });
      if (pointers.current.size === 1) {
        const t = e.changedTouches[0];
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        dragStart.current = { x: local.x, y: local.y };
      }
      if (pointers.current.size === 2) {
        const [a, b] = Array.from(pointers.current.values());
        pinchStart.current = {
          distance: Math.hypot(a.x - b.x, a.y - b.y),
          scaleX: state.scaleX,
          scaleY: state.scaleY,
          offsetX: state.offsetX,
          offsetY: state.offsetY,
          centerX: (a.x + b.x) / 2 - state.offsetX,
          centerY: (a.y + b.y) / 2 - state.offsetY,
        };
      }
    },
    [pointerSupported, state.scaleX, state.scaleY, state.offsetX, state.offsetY, getLocalCoords],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGGElement>) => {
      const prev = pointers.current.get(e.pointerId);
      if (!prev) return;
      const { x: localX, y: localY } = getLocalCoords(e);
      pointers.current.set(e.pointerId, { x: localX, y: localY });

      if (pointers.current.size === 2 && pinchStart.current) {
        const [a, b] = Array.from(pointers.current.values());
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const ratio = dist / pinchStart.current.distance;

        const next = { ...state };

        if (mode === 'y') {
          const newScaleY = clamp(pinchStart.current.scaleY * ratio, minScale, maxScale);
          const rY = newScaleY / pinchStart.current.scaleY;
          next.scaleY = newScaleY;
          next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (rY - 1);
        } else if (mode === 'xy') {
          const newScale = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
          const r = newScale / pinchStart.current.scaleX;
          next.scaleX = newScale;
          next.scaleY = newScale;
          next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (r - 1);
          next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (r - 1);
        } else {
          const newScaleX = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
          const rX = newScaleX / pinchStart.current.scaleX;
          next.scaleX = newScaleX;
          next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (rX - 1);
        }

        next.disableAnimation = disableAnimation;
        update(next);
        return;
      }

      if (dragStart.current) {
        const { x: localX2, y: localY2 } = getLocalCoords(e);
        const dx = localX2 - dragStart.current.x;
        const dy = localY2 - dragStart.current.y;
        dragStart.current = { x: localX2, y: localY2 };
        const next = {
          ...state,
          offsetX: state.offsetX + dx,
          offsetY: state.offsetY + dy,
        };
        next.disableAnimation = disableAnimation;
        update(next);
      }
    },
    [state, update, minScale, maxScale, mode, getLocalCoords, disableAnimation],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      Array.from(e.changedTouches).forEach(t => {
        const prev = pointers.current.get(t.identifier);
        if (!prev) return;
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        pointers.current.set(t.identifier, local);
      });

      if (pointers.current.size === 2 && pinchStart.current) {
        const [a, b] = Array.from(pointers.current.values());
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const ratio = dist / pinchStart.current.distance;

        const next = { ...state };

        if (mode === 'y') {
          const newScaleY = clamp(pinchStart.current.scaleY * ratio, minScale, maxScale);
          const rY = newScaleY / pinchStart.current.scaleY;
          next.scaleY = newScaleY;
          next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (rY - 1);
        } else if (mode === 'xy') {
          const newScale = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
          const r = newScale / pinchStart.current.scaleX;
          next.scaleX = newScale;
          next.scaleY = newScale;
          next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (r - 1);
          next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (r - 1);
        } else {
          const newScaleX = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
          const rX = newScaleX / pinchStart.current.scaleX;
          next.scaleX = newScaleX;
          next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (rX - 1);
        }

        next.disableAnimation = disableAnimation;
        update(next);
        return;
      }

      if (dragStart.current) {
        const t = e.changedTouches[0];
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        const dx = local.x - dragStart.current.x;
        const dy = local.y - dragStart.current.y;
        dragStart.current = { x: local.x, y: local.y };
        const next = {
          ...state,
          offsetX: state.offsetX + dx,
          offsetY: state.offsetY + dy,
        };
        next.disableAnimation = disableAnimation;
        update(next);
      }
    },
    [pointerSupported, state, update, minScale, maxScale, mode, getLocalCoords, disableAnimation],
  );

  const handleDoubleClick = useCallback(() => {
    update({ scaleX: 1, scaleY: 1, offsetX: 0, offsetY: 0, disableAnimation });
  }, [update, disableAnimation]);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      Array.from(e.changedTouches).forEach(t => {
        pointers.current.delete(t.identifier);
      });
      if (pointers.current.size < 2) pinchStart.current = null;
      if (pointers.current.size === 0) dragStart.current = null;
      const now = Date.now();
      if (now - lastTap.current < 300) {
        handleDoubleClick();
      }
      lastTap.current = now;
      if (disableAnimation) {
        setState(s => ({ ...s, disableAnimation }));
      }
    },
    [pointerSupported, handleDoubleClick, disableAnimation],
  );

  const handlePointerUp = useCallback(
    (e?: React.PointerEvent<SVGGElement>) => {
      if (e) (e.target as Element).releasePointerCapture?.(e.pointerId);
      pointers.current.delete(e?.pointerId ?? 0);
      if (pointers.current.size < 2) pinchStart.current = null;
      if (pointers.current.size === 0) dragStart.current = null;
      if (disableAnimation) {
        setState(s => ({ ...s, disableAnimation }));
      }
    },
    [disableAnimation],
  );

  const barElements = showScrollBar
    ? [
        mode !== 'y' && (
          <rect
            key="xbar"
            x={left - state.offsetX / state.scaleX}
            y={top + height - 4}
            width={width / state.scaleX}
            height={3}
            fill="rgba(0,0,0,0.3)"
            rx={1}
          />
        ),
        mode !== 'x' && (
          <rect
            key="ybar"
            x={left + width - 4}
            y={top - state.offsetY / state.scaleY}
            width={3}
            height={height / state.scaleY}
            fill="rgba(0,0,0,0.3)"
            rx={1}
          />
        ),
      ].filter(Boolean)
    : null;

  const childArray = React.Children.toArray(children);
  const [clippedChildren, tooltipChildren, otherChildren] = childArray.reduce<
    [React.ReactNode[], React.ReactNode[], React.ReactNode[]]
  >(
    (acc, child) => {
      if (
        React.isValidElement(child) &&
        /Axis$|Legend|Brush/.test(
          // @ts-expect-error displayName might not exist
          child.type.displayName || child.type.name || '',
        )
      ) {
        acc[2].push(child);
      } else if (React.isValidElement(child) && /Tooltip/.test(child.type.displayName || child.type.name || '')) {
        acc[1].push(child);
      } else {
        acc[0].push(child);
      }
      return acc;
    },
    [[], [], []],
  );

  return (
    <g style={{ touchAction: 'none', cursor: dragStart.current ? 'grabbing' : 'grab' }}>
      {tooltipChildren}
      <ClipChartRect>{clippedChildren}</ClipChartRect>
      {otherChildren}
      <rect
        ref={overlayRef}
        x={left}
        y={top}
        width={width}
        height={height}
        fill="transparent"
        pointerEvents="all"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
      />
      {barElements}
    </g>
  );
}
