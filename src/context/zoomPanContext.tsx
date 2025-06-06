import React, { ReactNode, useCallback, useRef, useState } from 'react';
import { useOffset } from './chartLayoutContext';
import { ClipChartRect } from '../container/ClipPathProvider';
import { useAppDispatch } from '../state/hooks';
import { setZoom } from '../state/zoomSlice';
import { useChartData } from './chartDataContext';

export interface ZoomConfig {
  mode?: 'x' | 'y' | 'xy';
  minScale?: number;
  maxScale?: number;
  onZoomChange?: (state: ZoomState) => void;
  resetKey?: 'dblclick' | 'dbltap';
  showScrollBar?: boolean;
  disableAnimation?: boolean;
  /** Enable selecting an area with Shift+Drag to zoom into */
  dragToZoom?: boolean;
  /** Automatically adjust Y domain based on the visible X range */
  autoScaleYDomain?: boolean;
  /** Keep a specific line centered when zooming/panning */
  followLineKey?: string;
}

interface ZoomState {
  scaleX: number;
  scaleY: number;
  offsetX: number;
  offsetY: number;
  disableAnimation?: boolean;
  autoScaleYDomain?: boolean;
  followLineKey?: string;
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
    followLineKey: s.followLineKey,
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
    dragToZoom = false,
    autoScaleYDomain = false,
  } = config;
  const { width, height, left, top } = useOffset();
  const chartData = useChartData();
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
    autoScaleYDomain,
    followLineKey: config.followLineKey,
  });
  const interacted = useRef(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const selectStart = useRef<{ x: number; y: number } | null>(null);
  const [selectRect, setSelectRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const barDrag = useRef<'x' | 'y' | null>(null);
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
      const withFlag = { ...next, autoScaleYDomain };
      const restricted = restrictOffsets(mode, withFlag, width, height);
      if (config.followLineKey && chartData && chartData.length > 0) {
        const step = width / chartData.length;
        const start = Math.max(0, Math.floor(-restricted.offsetX / (step * restricted.scaleX)));
        const end = Math.min(
          chartData.length - 1,
          Math.ceil((-restricted.offsetX + width) / (step * restricted.scaleX)) - 1,
        );
        const mid = Math.min(Math.max(Math.round((start + end) / 2), 0), chartData.length - 1);
        const yValues = chartData.map(d => Number(d[config.followLineKey!])).filter(Number.isFinite);
        let min = Math.min(...yValues);
        let max = Math.max(...yValues);
        if (autoScaleYDomain) {
          const slice = yValues.slice(start, end + 1);
          if (slice.length > 0) {
            min = Math.min(...slice);
            max = Math.max(...slice);
          }
        }
        const v = Number(chartData[mid][config.followLineKey!]);
        if (Number.isFinite(v) && max !== min) {
          const baseY = top + height - ((v - min) / (max - min)) * height;
          restricted.offsetY += top + height / 2 - (baseY * restricted.scaleY + restricted.offsetY);
        }
      }
      setState(restricted);
      onZoomChange?.(restricted);
      dispatch(setZoom(restricted));
    },
    [onZoomChange, dispatch, mode, width, height, autoScaleYDomain, chartData, config.followLineKey, top],
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGGElement>) => {
      e.preventDefault();
      interacted.current = true;
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

      next.disableAnimation = interacted.current && disableAnimation;
      update(next);
    },
    [state, minScale, maxScale, update, mode, getLocalCoords, disableAnimation],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGGElement>) => {
      interacted.current = true;
      (e.target as Element).setPointerCapture?.(e.pointerId);
      const { x: localX, y: localY } = getLocalCoords(e);
      if (dragToZoom && e.shiftKey) {
        selectStart.current = { x: localX, y: localY };
        setSelectRect({ x: localX, y: localY, w: 0, h: 0 });
        return;
      }
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
    [state.scaleX, state.scaleY, state.offsetX, state.offsetY, getLocalCoords, dragToZoom],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      interacted.current = true;
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
      if (selectStart.current) {
        const { x: lx, y: ly } = getLocalCoords(e);
        setSelectRect({
          x: Math.min(selectStart.current.x, lx),
          y: Math.min(selectStart.current.y, ly),
          w: Math.abs(lx - selectStart.current.x),
          h: Math.abs(ly - selectStart.current.y),
        });
        return;
      }
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

        interacted.current = true;
        next.disableAnimation = interacted.current && disableAnimation;
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
        interacted.current = true;
        next.disableAnimation = interacted.current && disableAnimation;
        update(next);
      }
    },
    [state, update, minScale, maxScale, mode, getLocalCoords, disableAnimation],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      Array.from(e.changedTouches).forEach((t: Touch) => {
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

        interacted.current = true;
        next.disableAnimation = interacted.current && disableAnimation;
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
        interacted.current = true;
        next.disableAnimation = interacted.current && disableAnimation;
        update(next);
      }
    },
    [pointerSupported, state, update, minScale, maxScale, mode, getLocalCoords, disableAnimation],
  );

  const handleDoubleClick = useCallback(() => {
    update({
      scaleX: 1,
      scaleY: 1,
      offsetX: 0,
      offsetY: 0,
      disableAnimation: interacted.current && disableAnimation,
    });
  }, [update, disableAnimation]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<SVGRectElement>) => {
      if (e.key === '+' || (e.key === '=' && e.ctrlKey)) {
        handleWheel({ ...e, deltaY: -100 } as unknown as React.WheelEvent<SVGGElement>);
      } else if (e.key === '-' || (e.key === '_' && e.ctrlKey)) {
        handleWheel({ ...e, deltaY: 100 } as unknown as React.WheelEvent<SVGGElement>);
      } else if (e.key === 'ArrowLeft') {
        update({ ...state, offsetX: state.offsetX + 20 });
      } else if (e.key === 'ArrowRight') {
        update({ ...state, offsetX: state.offsetX - 20 });
      } else if (e.key === 'ArrowUp') {
        update({ ...state, offsetY: state.offsetY + 20 });
      } else if (e.key === 'ArrowDown') {
        update({ ...state, offsetY: state.offsetY - 20 });
      }
    },
    [handleWheel, update, state],
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      Array.from(e.changedTouches).forEach((t: Touch) => {
        pointers.current.delete(t.identifier);
      });
      if (pointers.current.size < 2) pinchStart.current = null;
      if (pointers.current.size === 0) dragStart.current = null;
      if (selectStart.current && selectRect) {
        const { x, y, w, h } = selectRect;
        if (dragToZoom && w > 10 && h > 10) {
          const next = { ...state };
          const startPrevX = (x - state.offsetX) / state.scaleX;
          const endPrevX = (x + w - state.offsetX) / state.scaleX;
          const startPrevY = (y - state.offsetY) / state.scaleY;
          const endPrevY = (y + h - state.offsetY) / state.scaleY;
          if (mode !== 'y') {
            next.scaleX = clamp(width / (endPrevX - startPrevX), minScale, maxScale);
            next.offsetX = -startPrevX * next.scaleX;
          }
          if (mode !== 'x') {
            next.scaleY = clamp(height / (endPrevY - startPrevY), minScale, maxScale);
            next.offsetY = -startPrevY * next.scaleY;
          }
          interacted.current = true;
          next.disableAnimation = interacted.current && disableAnimation;
          update(next);
        }
        selectStart.current = null;
        setSelectRect(null);
      }
      const now = Date.now();
      if (config.resetKey !== 'dblclick' && now - lastTap.current < 300) {
        handleDoubleClick();
      }
      lastTap.current = now;
      if (disableAnimation) {
        setState(s => ({ ...s, disableAnimation }));
      }
    },
    [
      pointerSupported,
      handleDoubleClick,
      disableAnimation,
      dragToZoom,
      selectRect,
      state,
      update,
      mode,
      width,
      height,
      minScale,
      maxScale,
    ],
  );

  const handlePointerUp = useCallback(
    (e?: React.PointerEvent<SVGGElement>) => {
      if (e) (e.target as Element).releasePointerCapture?.(e.pointerId);
      pointers.current.delete(e?.pointerId ?? 0);
      if (pointers.current.size < 2) pinchStart.current = null;
      if (pointers.current.size === 0) dragStart.current = null;
      if (selectStart.current && selectRect) {
        const { x, y, w, h } = selectRect;
        if (dragToZoom && w > 10 && h > 10) {
          const next = { ...state };
          const startPrevX = (x - state.offsetX) / state.scaleX;
          const endPrevX = (x + w - state.offsetX) / state.scaleX;
          const startPrevY = (y - state.offsetY) / state.scaleY;
          const endPrevY = (y + h - state.offsetY) / state.scaleY;
          if (mode !== 'y') {
            next.scaleX = clamp(width / (endPrevX - startPrevX), minScale, maxScale);
            next.offsetX = -startPrevX * next.scaleX;
          }
          if (mode !== 'x') {
            next.scaleY = clamp(height / (endPrevY - startPrevY), minScale, maxScale);
            next.offsetY = -startPrevY * next.scaleY;
          }
          interacted.current = true;
          next.disableAnimation = interacted.current && disableAnimation;
          update(next);
        }
        selectStart.current = null;
        setSelectRect(null);
      }
      if (disableAnimation) {
        setState(s => ({ ...s, disableAnimation }));
      }
    },
    [disableAnimation, dragToZoom, selectRect, state, update, mode, width, height, minScale, maxScale],
  );

  const handleBarPointerDown = useCallback(
    (axis: 'x' | 'y') => (e: React.PointerEvent<SVGRectElement>) => {
      e.stopPropagation();
      (e.target as Element).setPointerCapture?.(e.pointerId);
      barDrag.current = axis;
    },
    [],
  );

  const handleBarPointerMove = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      if (!barDrag.current) return;
      const local = getLocalCoords(e);
      const next = { ...state };
      if (barDrag.current === 'x') {
        const xPos = local.x - left;
        next.offsetX = -xPos * state.scaleX;
      } else {
        const yPos = local.y - top;
        next.offsetY = -yPos * state.scaleY;
      }
      update(next);
    },
    [state, update, getLocalCoords, left, top],
  );

  const handleBarPointerUp = useCallback(() => {
    barDrag.current = null;
  }, []);

  const barElements =
    showScrollBar && (state.scaleX > 1 || state.scaleY > 1)
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
              onPointerDown={handleBarPointerDown('x')}
              onPointerMove={handleBarPointerMove}
              onPointerUp={handleBarPointerUp}
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
              onPointerDown={handleBarPointerDown('y')}
              onPointerMove={handleBarPointerMove}
              onPointerUp={handleBarPointerUp}
            />
          ),
        ].filter(Boolean)
      : null;

  const childArray = React.Children.toArray(children);
  const [clippedChildren, tooltipChildren, otherChildren] = childArray.reduce<
    [React.ReactNode[], React.ReactNode[], React.ReactNode[]]
  >(
    (acc: [React.ReactNode[], React.ReactNode[], React.ReactNode[]], child: React.ReactNode) => {
      if (React.isValidElement(child) && /Axis$|Legend|Brush/.test(child.type.displayName || child.type.name || '')) {
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
        tabIndex={0}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={config.resetKey !== 'dbltap' ? handleDoubleClick : undefined}
        onKeyDown={handleKeyDown}
      />
      {selectRect && (
        <rect
          x={selectRect.x}
          y={selectRect.y}
          width={selectRect.w}
          height={selectRect.h}
          fill="rgba(0,0,0,0.1)"
          stroke="rgba(0,0,0,0.3)"
          pointerEvents="none"
        />
      )}
      {barElements}
    </g>
  );
}
