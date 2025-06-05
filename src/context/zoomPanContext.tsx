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
  const pinchStart = useRef<{ distance: number; scaleX: number; scaleY: number } | null>(null);

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
      const delta = e.deltaY < 0 ? 1.1 : 0.9;
      const newScale = clamp(state.scaleX * delta, minScale, maxScale);
      let next: ZoomState;
      if (mode === 'y') {
        next = { ...state, scaleY: newScale };
      } else if (mode === 'xy') {
        next = { ...state, scaleX: newScale, scaleY: newScale };
      } else {
        next = { ...state, scaleX: newScale };
      }
      update(next);
    },
    [state, minScale, maxScale, update, mode],
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
        };
      }
    },
    [state.scaleX, state.scaleY],
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
        const newScale = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
        let next: ZoomState;
        if (mode === 'y') {
          next = { ...state, scaleY: newScale };
        } else if (mode === 'xy') {
          next = { ...state, scaleX: newScale, scaleY: newScale };
        } else {
          next = { ...state, scaleX: newScale };
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
    [state, update, minScale, maxScale, mode],
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
