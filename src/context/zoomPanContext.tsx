import React, { ReactNode, useCallback, useRef, useState } from 'react';
import { useOffset } from './chartLayoutContext';
import { useClipPathId } from '../container/ClipPathProvider';
import { useAppDispatch } from '../state/hooks';
import { setZoom } from '../state/zoomSlice';

export interface ZoomConfig {
  mode?: 'x' | 'y' | 'xy';
  minScale?: number;
  maxScale?: number;
  onZoomChange?: (state: ZoomState) => void;
  resetKey?: 'dblclick' | 'dbltap';
}

interface ZoomState {
  scaleX: number;
  scaleY: number;
  offsetX: number;
  offsetY: number;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function ZoomPanContainer({ children, config }: { children: ReactNode; config: ZoomConfig }): React.JSX.Element {
  const { mode = 'x', minScale = 1, maxScale = 20, onZoomChange } = config;
  const { width, height, left, top } = useOffset();
  const clipPathId = useClipPathId();
  const dispatch = useAppDispatch();
  const [state, setState] = useState<ZoomState>({ scaleX: 1, scaleY: 1, offsetX: 0, offsetY: 0 });
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

  const update = useCallback(
    (next: ZoomState) => {
      setState(next);
      onZoomChange?.(next);
      dispatch(setZoom(next));
    },
    [onZoomChange, dispatch],
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGGElement>) => {
      e.preventDefault();
      const anchorX = e.clientX - left - state.offsetX;
      const anchorY = e.clientY - top - state.offsetY;
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

      update(next);
    },
    [state, minScale, maxScale, update, mode, left, top],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGGElement>) => {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.current.size === 1) {
        dragStart.current = { x: e.clientX, y: e.clientY };
      }
      if (pointers.current.size === 2) {
        const [a, b] = Array.from(pointers.current.values());
        pinchStart.current = {
          distance: Math.hypot(a.x - b.x, a.y - b.y),
          scaleX: state.scaleX,
          scaleY: state.scaleY,
          offsetX: state.offsetX,
          offsetY: state.offsetY,
          centerX: (a.x + b.x) / 2 - left - state.offsetX,
          centerY: (a.y + b.y) / 2 - top - state.offsetY,
        };
      }
    },
    [state.scaleX, state.scaleY, state.offsetX, state.offsetY, left, top],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGGElement>) => {
      const prev = pointers.current.get(e.pointerId);
      if (!prev) return;
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

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

        update(next);
        return;
      }

      if (dragStart.current) {
        const dx = e.clientX - dragStart.current.x;
        const dy = e.clientY - dragStart.current.y;
        dragStart.current = { x: e.clientX, y: e.clientY };
        const next = {
          ...state,
          offsetX: state.offsetX + dx,
          offsetY: state.offsetY + dy,
        };
        update(next);
      }
    },
    [state, update, minScale, maxScale, mode, left, top],
  );

  const handlePointerUp = useCallback((e?: React.PointerEvent<SVGGElement>) => {
    if (e) (e.target as Element).releasePointerCapture?.(e.pointerId);
    pointers.current.delete(e?.pointerId ?? 0);
    if (pointers.current.size < 2) pinchStart.current = null;
    if (pointers.current.size === 0) dragStart.current = null;
  }, []);

  const handleDoubleClick = useCallback(() => {
    update({ scaleX: 1, scaleY: 1, offsetX: 0, offsetY: 0 });
  }, [update]);

  return (
    <g
      clipPath={clipPathId ? `url(#${clipPathId})` : undefined}
      style={{ touchAction: 'none', cursor: dragStart.current ? 'grabbing' : 'grab' }}
    >
      <rect
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
        onDoubleClick={handleDoubleClick}
      />
      {children}
    </g>
  );
}
