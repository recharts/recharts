import * as React from 'react';
import { ReactNode, useCallback, useRef, useState } from 'react';
import { useOffset, useChartLayout } from './chartLayoutContext';
import { ClipChartRect } from '../container/ClipPathProvider';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZoomState as selectZoom } from '../state/selectors/zoomSelectors';
import { setZoom, ZoomState } from '../state/zoomSlice';
import { useChartData } from './chartDataContext';
import { getValueByDataKey } from '../util/ChartUtils';
import { useXAxis, useYAxis } from '../hooks';
import { selectAllXAxes, selectAllYAxes } from '../state/selectors/selectAllAxes';
import { setTooltipSettingsState } from '../state/tooltipSlice';

// Context for axis label interactions
const AxisInteractionContext = React.createContext<{
  handleAxisZoom?: (axisType: 'x' | 'y', zoomRatio: number) => void;
  handleAxisPan?: (axisType: 'x' | 'y', panDelta: number) => void;
  isInteractionEnabled?: boolean;
  mode?: 'x' | 'y' | 'xy';
} | null>(null);

export const useAxisInteraction = () => React.useContext(AxisInteractionContext);

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
  
  // Enhanced scroll bar customization
  scrollBar?: {
    show?: boolean;
    thickness?: number;
    color?: string;
    hoverColor?: string;
    borderRadius?: number;
    opacity?: number;
    hoverOpacity?: number;
  };
  
  // Control customization
  controls?: {
    /** Enable keyboard zoom (+/- and Ctrl+/-) */
    keyboardZoom?: boolean;
    /** Enable keyboard panning (arrow keys) */
    keyboardPan?: boolean;
    /** Enable wheel zoom in chart area */
    wheelZoom?: boolean;
    /** Enable wheel pan on scroll bars/labels */
    wheelPan?: boolean;
    /** Enable drag to pan in chart area */
    dragPan?: boolean;
    /** Enable drag on scroll bars */
    dragScrollBars?: boolean;
    /** Enable label dragging for zoom/pan */
    labelDrag?: boolean;
    /** Enable pinch zoom on mobile */
    pinchZoom?: boolean;
    /** Enable two-finger pan on mobile */
    twoFingerPan?: boolean;
    /** Minimum distance for two-finger pan recognition */
    twoFingerPanThreshold?: number;
    /** Edge threshold for chart drag vs tooltip conflict resolution */
    edgeThreshold?: number;
  };
  
  // Event prevention
  preventDefault?: {
    /** Prevent page scroll when interacting with chart */
    pageScroll?: boolean;
    /** Prevent page zoom when using Ctrl+/- */
    pageZoom?: boolean;
    /** Prevent context menu on right click */
    contextMenu?: boolean;
  };
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function restrictOffsets(mode: 'x' | 'y' | 'xy', s: ZoomState, w: number, h: number): ZoomState {
  const minX = w * (1 - s.scaleX);
  const minY = h * (1 - s.scaleY);
  return {
    ...s,
    offsetX: mode === 'y' ? 0 : clamp(s.offsetX, minX, 0),
    offsetY: mode === 'x' ? 0 : clamp(s.offsetY, minY, 0),
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
    scrollBar = {},
    controls = {},
    preventDefault = {},
  } = config;

  // Default scroll bar settings
  const scrollBarConfig = {
    show: showScrollBar || scrollBar.show !== false,
    thickness: scrollBar.thickness ?? 12,
    color: scrollBar.color ?? 'rgba(0,0,0,0.4)',
    hoverColor: scrollBar.hoverColor ?? 'rgba(0,0,0,0.6)',
    borderRadius: scrollBar.borderRadius ?? 6,
    opacity: scrollBar.opacity ?? 0.7,
    hoverOpacity: scrollBar.hoverOpacity ?? 1,
  };

  // Default control settings - ENSURE ALL ARE ENABLED BY DEFAULT
  const controlConfig = {
    keyboardZoom: controls.keyboardZoom !== false,
    keyboardPan: controls.keyboardPan !== false,
    wheelZoom: controls.wheelZoom !== false,
    wheelPan: controls.wheelPan !== false,
    dragPan: controls.dragPan !== false,
    dragScrollBars: controls.dragScrollBars !== false,
    labelDrag: controls.labelDrag !== false,
    pinchZoom: controls.pinchZoom !== false,
    twoFingerPan: controls.twoFingerPan !== false,
    twoFingerPanThreshold: controls.twoFingerPanThreshold ?? 80,
    edgeThreshold: controls.edgeThreshold ?? 50,
  };

  // Default prevention settings
  const preventConfig = {
    pageScroll: preventDefault.pageScroll !== false,
    pageZoom: preventDefault.pageZoom !== false,
    contextMenu: preventDefault.contextMenu !== false,
  };

  const { width, height, left, top } = useOffset();
  const chartData = useChartData();
  const overlayRef = useRef<SVGRectElement>(null);
  const pointerSupported = typeof window !== 'undefined' && 'PointerEvent' in window;
  const layout = useChartLayout();

  const allXAxes = useAppSelector(selectAllXAxes);
  const allYAxes = useAppSelector(selectAllYAxes);
  const state = useAppSelector(selectZoom);
  const dispatch = useAppDispatch();

  // For now, we only support following the first axis.
  // In the future, we could enhance this by allowing users to specify an axis ID.
  const xAxis = useXAxis(allXAxes?.[0]?.id);
  const yAxis = useYAxis(allYAxes?.[0]?.id);

  const getLocalCoords = useCallback((e: { clientX: number; clientY: number }) => {
    const rect = overlayRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);
  const interacted = useRef(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const selectStart = useRef<{ x: number; y: number } | null>(null);
  const [selectRect, setSelectRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const barDrag = useRef<'x' | 'y' | null>(null);
  const [barHover, setBarHover] = useState<'x' | 'y' | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const twoFingerStart = useRef<{ distance: number; centerX: number; centerY: number } | null>(null);
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
  const doubleTapStart = useRef<{ x: number; y: number } | null>(null);
  const axisGestureLock = useRef<'x' | 'y' | null>(null);

  const update = useCallback(
    (next: Partial<ZoomState>) => {
      const withFlag: ZoomState = {
        ...state,
        ...next,
        autoScaleYDomain,
        followLineKey: config.followLineKey,
      };
      let restricted = restrictOffsets(mode, withFlag, width, height);

      const isHorizontal = layout === 'horizontal';
      const independentAxis = isHorizontal ? xAxis : yAxis;
      const dependentAxis = isHorizontal ? yAxis : xAxis;
      const scale = isHorizontal ? restricted.scaleX : restricted.scaleY;
      const viewSize = isHorizontal ? width : height;

      // Handle the followLineKey feature for centering on a specific line
      if (
        config.followLineKey &&
        chartData &&
        chartData.length > 0 &&
        independentAxis?.scale &&
        dependentAxis?.scale &&
        (restricted.scaleX > 1 || restricted.scaleY > 1)
      ) {
        const offset = isHorizontal ? restricted.offsetX : restricted.offsetY;
        const scale = isHorizontal ? restricted.scaleX : restricted.scaleY;
        const viewSize = isHorizontal ? width : height;
        const centerUnzoomed = (viewSize / 2 - offset) / scale;

        let lowerPointIndex = -1;
        let upperPointIndex = -1;

        for (let i = 0; i < chartData.length; i++) {
          const d = chartData[i];
          const val = getValueByDataKey(d, independentAxis.dataKey);
          let coord = independentAxis.scale(val);
          if (independentAxis.type === 'category' && typeof independentAxis.scale.bandwidth === 'function') {
            coord += independentAxis.scale.bandwidth() / 2;
          }
          if (coord > centerUnzoomed) {
            upperPointIndex = i;
            break;
          }
          lowerPointIndex = i;
        }

        if (lowerPointIndex === -1) lowerPointIndex = 0;
        if (upperPointIndex === -1) upperPointIndex = chartData.length > 0 ? chartData.length - 1 : 0;

        const key = config.followLineKey;
        const yDomain = dependentAxis.scale.domain();
        const min = Number(yDomain[0]);
        const max = Number(yDomain[1]);

        const lowerDataPoint = chartData[lowerPointIndex];
        const upperDataPoint = chartData[upperPointIndex];

        const lowerXValue = getValueByDataKey(lowerDataPoint, independentAxis.dataKey);
        const upperXValue = getValueByDataKey(upperDataPoint, independentAxis.dataKey);

        let lowerScreenX = independentAxis.scale(lowerXValue);
        let upperScreenX = independentAxis.scale(upperXValue);

        if (independentAxis.type === 'category' && typeof independentAxis.scale.bandwidth === 'function') {
          const bandwidth = independentAxis.scale.bandwidth();
          lowerScreenX += bandwidth / 2;
          upperScreenX += bandwidth / 2;
        }

        const fraction =
          upperScreenX === lowerScreenX ? 0 : (centerUnzoomed - lowerScreenX) / (upperScreenX - lowerScreenX);

        const lowerYValue = Number(getValueByDataKey(lowerDataPoint, key));
        const upperYValue = Number(getValueByDataKey(upperDataPoint, key));
        let midValue: number | undefined;

        if (Number.isFinite(lowerYValue) && Number.isFinite(upperYValue)) {
          midValue = lowerYValue + fraction * (upperYValue - lowerYValue);
        } else if (Number.isFinite(lowerYValue)) {
          midValue = lowerYValue;
        } else if (Number.isFinite(upperYValue)) {
          midValue = upperYValue;
        }

        if (Number.isFinite(midValue) && max !== min) {
          const normalizedValue = (midValue - min) / (max - min);
          const targetCoord = isHorizontal
            ? top + height * (1 - normalizedValue)
            : left + width * normalizedValue;

          const currentCoord =
            targetCoord * (isHorizontal ? restricted.scaleY : restricted.scaleX) +
            (isHorizontal ? restricted.offsetY : restricted.offsetX);
          const centerCoord = (isHorizontal ? top + height : left + width) / 2;

          if (isHorizontal) {
            let newOffsetY = restricted.offsetY + centerCoord - currentCoord;

            newOffsetY = Math.max(newOffsetY, height * (1 - restricted.scaleY));
            newOffsetY = Math.min(newOffsetY, 0);

            restricted = { ...restricted, offsetY: newOffsetY };
          } else {
            let newOffsetX = restricted.offsetX + centerCoord - currentCoord;

            newOffsetX = Math.max(newOffsetX, width * (1 - restricted.scaleX));
            newOffsetX = Math.min(newOffsetX, 0);

            restricted = { ...restricted, offsetX: newOffsetX };
          }
        }
      }

      // Add a safeguard to prevent zoom getting stuck after a reset
      if (restricted.scaleX < 1.001) {
        restricted.offsetX = 0;
      }
      if (restricted.scaleY < 1.001) {
        restricted.offsetY = 0;
      }

      onZoomChange?.(restricted);
      dispatch(setZoom(restricted));
    },
    [
      onZoomChange,
      dispatch,
      mode,
      width,
      height,
      autoScaleYDomain,
      config.followLineKey,
      chartData,
      top,
      left,
      xAxis,
      yAxis,
      layout,
      state,
    ],
  );

  const handleAxisZoom = useCallback((axisType: 'x' | 'y', zoomRatio: number) => {
    const next: Partial<ZoomState> = {};
    if (axisType === 'x') {
      const newScaleX = clamp(state.scaleX * zoomRatio, minScale, maxScale);
      const rX = newScaleX / state.scaleX;
      const anchorX = width / 2 - state.offsetX;
      next.scaleX = newScaleX;
      next.offsetX = state.offsetX - anchorX * (rX - 1);
    } else { // 'y'
      const newScaleY = clamp(state.scaleY * zoomRatio, minScale, maxScale);
      const rY = newScaleY / state.scaleY;
      const anchorY = height / 2 - state.offsetY;
      next.scaleY = newScaleY;
      next.offsetY = state.offsetY - anchorY * (rY - 1);
    }
    update(next);
  }, [state, minScale, maxScale, update, width, height]);

  const handleAxisPan = useCallback((axisType: 'x' | 'y', panDelta: number) => {
    const next: Partial<ZoomState> = {};
    if (axisType === 'x') {
      next.offsetX = state.offsetX + panDelta;
    } else {
      next.offsetY = state.offsetY + panDelta;
    }
    update(next);
  }, [state, update]);

  const axisInteractionValue = React.useMemo(() => ({
    handleAxisZoom,
    handleAxisPan,
    isInteractionEnabled: controlConfig.labelDrag || controlConfig.wheelZoom,
    mode,
  }), [handleAxisZoom, handleAxisPan, controlConfig.labelDrag, controlConfig.wheelZoom, mode]);

  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGGElement>) => {
      if (!controlConfig.wheelZoom) return;
      
      e.preventDefault();
      if (preventConfig.pageScroll) {
        e.stopPropagation();
      }
      
      // Clear tooltip when zooming with wheel
      dispatch(setTooltipSettingsState({
        active: false,
        defaultIndex: undefined,
        shared: undefined,
        trigger: undefined,
        axisId: undefined,
      }));
      
      interacted.current = true;
      const local = getLocalCoords(e);
      const anchorX = local.x - state.offsetX;
      const anchorY = local.y - state.offsetY;
      const delta = e.deltaY < 0 ? 1.1 : 0.9;

      const next: Partial<ZoomState> = {};

      if (mode === 'y') {
        const newScaleY = clamp(state.scaleY * delta, minScale, maxScale);
        const ratioY = newScaleY / state.scaleY;
        next.scaleY = newScaleY;
        if (!config.followLineKey) {
        next.offsetY = state.offsetY - anchorY * (ratioY - 1);
        }
      } else if (mode === 'xy') {
        const newScale = clamp(state.scaleX * delta, minScale, maxScale);
        const ratio = newScale / state.scaleX;
        next.scaleX = newScale;
        next.scaleY = newScale;
        next.offsetX = state.offsetX - anchorX * (ratio - 1);
        if (!config.followLineKey) {
        next.offsetY = state.offsetY - anchorY * (ratio - 1);
        }
      } else {
        const newScaleX = clamp(state.scaleX * delta, minScale, maxScale);
        const ratioX = newScaleX / state.scaleX;
        next.scaleX = newScaleX;
        next.offsetX = state.offsetX - anchorX * (ratioX - 1);
      }

      next.disableAnimation = interacted.current && disableAnimation;
      update(next);
    },
    [state, minScale, maxScale, update, mode, getLocalCoords, disableAnimation, config.followLineKey, controlConfig.wheelZoom, preventConfig.pageScroll, dispatch],
  );

  const handleDoubleClick = useCallback(() => {
    // Do not reset if a selection gesture is in progress
    if (selectStart.current) return;

    // Clear any active tooltip to prevent it from remembering the old state
    dispatch(setTooltipSettingsState({
      active: false,
      defaultIndex: undefined,
      shared: undefined,
      trigger: undefined,
      axisId: undefined,
    }));

    update({
      scaleX: 1,
      scaleY: 1,
      offsetX: 0,
      offsetY: 0,
    });
  }, [update, dispatch]);

  // Helper function to check if touch is on scroll bar
  const checkIfTouchOnScrollBar = useCallback((x: number, y: number) => {
    if (!scrollBarConfig.show || (state.scaleX <= 1 && state.scaleY <= 1)) return false;

    const scrollBarThickness = scrollBarConfig.thickness;
        
    // Check X scroll bar (bottom)
    if (mode !== 'y' && state.scaleX > 1) {
      const xBarY = top + height - scrollBarThickness;
      if (y >= xBarY && y <= xBarY + scrollBarThickness && x >= left && x <= left + width) {
        return true;
      }
    }
    
    // Check Y scroll bar (right)
    if (mode !== 'x' && state.scaleY > 1) {
      const yBarX = left + width - scrollBarThickness;
      if (x >= yBarX && x <= yBarX + scrollBarThickness && y >= top && y <= top + height) {
        return true;
      }
    }
    
    return false;
  }, [scrollBarConfig.show, scrollBarConfig.thickness, mode, state.scaleX, state.scaleY, top, height, left, width]);

  // Legacy touch handlers removed - modern browsers use pointer events

  // Legacy touch handlers completely removed - pointer events handle everything

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<SVGRectElement>) => {
      let handled = false;
      
      if (controlConfig.keyboardZoom) {
        const isZoomIn = e.key === '+' || e.key === '=';
        const isZoomOut = e.key === '-' || e.key === '_';
        
        if (isZoomIn || isZoomOut) {
          // Clear tooltip when using keyboard zoom
          dispatch(setTooltipSettingsState({
            active: false,
            defaultIndex: undefined,
            shared: undefined,
            trigger: undefined,
            axisId: undefined,
          }));
          
          const delta = isZoomIn ? 1.1 : 0.9;
          const centerX = width / 2;
          const centerY = height / 2;
          const anchorX = centerX - state.offsetX;
          const anchorY = centerY - state.offsetY;

        const next: Partial<ZoomState> = {};

        if (mode === 'y') {
            const newScaleY = clamp(state.scaleY * delta, minScale, maxScale);
            const ratioY = newScaleY / state.scaleY;
          next.scaleY = newScaleY;
          if (!config.followLineKey) {
              next.offsetY = state.offsetY - anchorY * (ratioY - 1);
          }
        } else if (mode === 'xy') {
            const newScale = clamp(state.scaleX * delta, minScale, maxScale);
            const ratio = newScale / state.scaleX;
          next.scaleX = newScale;
          next.scaleY = newScale;
            next.offsetX = state.offsetX - anchorX * (ratio - 1);
          if (!config.followLineKey) {
              next.offsetY = state.offsetY - anchorY * (ratio - 1);
          }
        } else {
            const newScaleX = clamp(state.scaleX * delta, minScale, maxScale);
            const ratioX = newScaleX / state.scaleX;
          next.scaleX = newScaleX;
            next.offsetX = state.offsetX - anchorX * (ratioX - 1);
        }

          next.disableAnimation = disableAnimation;
        update(next);
          handled = true;
        }
      }
      
      if (controlConfig.keyboardPan && e.key.startsWith('Arrow')) {
        const panAmount = e.shiftKey ? 50 : 20;
        const next: Partial<ZoomState> = {};
        
        if (e.key === 'ArrowLeft') {
          next.offsetX = state.offsetX + panAmount;
          handled = true;
      } else if (e.key === 'ArrowRight') {
          next.offsetX = state.offsetX - panAmount;
          handled = true;
      } else if (e.key === 'ArrowUp') {
          next.offsetY = state.offsetY + panAmount;
          handled = true;
      } else if (e.key === 'ArrowDown') {
          next.offsetY = state.offsetY - panAmount;
          handled = true;
        }
        
        if (handled) {
          update(next);
        }
      }
      
      if (handled) {
        e.preventDefault();
        if (preventConfig.pageZoom || preventConfig.pageScroll) {
          e.stopPropagation();
        }
      }
    },
    [update, state, controlConfig.keyboardZoom, controlConfig.keyboardPan, preventConfig.pageZoom, preventConfig.pageScroll, mode, minScale, maxScale, width, height, config.followLineKey, disableAnimation, dispatch],
  );

  const handleOverlayFocus = useCallback(() => {
    // Ensure the overlay can receive keyboard events
  }, []);

  const handleOverlayClick = useCallback((e: React.MouseEvent<SVGRectElement>) => {
    // This is the definitive fix for the rollback issue.
    // Clear tooltip on ANY click to prevent it restoring old state.
    dispatch(setTooltipSettingsState({
      active: false,
      defaultIndex: undefined,
      shared: undefined,
      trigger: undefined,
      axisId: undefined,
    }));
    // Focus the overlay to enable keyboard events
    if (e.currentTarget && typeof e.currentTarget.focus === 'function') {
      e.currentTarget.focus();
    }
  }, [dispatch]);

  const cleanupInteractionState = useCallback(() => {
    pointers.current.clear();
    dragStart.current = null;
    selectStart.current = null;
    pinchStart.current = null;
    twoFingerStart.current = null;
    barDrag.current = null;
    doubleTapStart.current = null;
    axisGestureLock.current = null;
    setIsInteracting(false);
    if (selectRect) {
      setSelectRect(null);
    }
  }, [selectRect]);

  const handlePointerUp = useCallback(
    (e?: React.PointerEvent<SVGGElement>) => {
      if (e) (e.target as Element).releasePointerCapture?.(e.pointerId);
      
      // If the pointer is lifted after a double-tap without a drag, it's a reset.
      if (doubleTapStart.current) {
        handleDoubleClick();
        doubleTapStart.current = null;
      }
      
      pointers.current.delete(e?.pointerId ?? 0);
      
      if (pointers.current.size === 0) {
        // Last pointer is up, interaction is over.
        setIsInteracting(false);
        cleanupInteractionState();
      } else if (pointers.current.size < 2) {
        pinchStart.current = null;
        twoFingerStart.current = null;
        axisGestureLock.current = null;
      }
      if (selectStart.current && selectRect) {
        const { x, y, w, h } = selectRect;
        if (dragToZoom && w > 10 && h > 10) {
          const next: Partial<ZoomState> = {};
          const startPrevX = (x - left - state.offsetX) / state.scaleX;
          const endPrevX = (x - left + w - state.offsetX) / state.scaleX;
          const startPrevY = (y - top - state.offsetY) / state.scaleY;
          const endPrevY = (y - top + h - state.offsetY) / state.scaleY;
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
    },
    [disableAnimation, dragToZoom, selectRect, state, update, mode, width, height, minScale, maxScale, left, top, cleanupInteractionState],
  );

  const handleBarPointerDown = useCallback(
    (axis: 'x' | 'y') => (e: React.PointerEvent<SVGRectElement>) => {
      if (!controlConfig.dragScrollBars) return;
      e.stopPropagation();
      e.preventDefault(); // Prevent any page scroll or tooltip activation
      (e.target as Element).setPointerCapture?.(e.pointerId);
      barDrag.current = axis;
      
      // Store the initial click position for relative dragging
      const local = getLocalCoords(e);
      if (axis === 'x') {
        const barStartX = left - state.offsetX / state.scaleX;
        barDragStartRef.current = local.x - barStartX; // Store offset within the bar
      } else {
        const barStartY = top - state.offsetY / state.scaleY;
        barDragStartRef.current = local.y - barStartY; // Store offset within the bar
      }
    },
    [controlConfig.dragScrollBars, getLocalCoords, left, top, state.offsetX, state.offsetY, state.scaleX, state.scaleY],
  );

  // Add touch-specific handlers for scroll bars
  const handleBarTouchStart = useCallback(
    (axis: 'x' | 'y') => (e: React.TouchEvent<SVGRectElement>) => {
      if (!controlConfig.dragScrollBars) return;
      
      // Immediately prevent all default behavior for scroll bar touches
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      
      barDrag.current = axis;
      
      const touch = e.touches[0];
      const local = getLocalCoords({ clientX: touch.clientX, clientY: touch.clientY });
      
      if (axis === 'x') {
        const barStartX = left - state.offsetX / state.scaleX;
        barDragStartRef.current = local.x - barStartX;
      } else {
        const barStartY = top - state.offsetY / state.scaleY;
        barDragStartRef.current = local.y - barStartY;
      }
    },
    [controlConfig.dragScrollBars, getLocalCoords, left, top, state.offsetX, state.offsetY, state.scaleX, state.scaleY],
  );

  const handleBarTouchMove = useCallback(
    (e: React.TouchEvent<SVGRectElement>) => {
      if (!barDrag.current || !controlConfig.dragScrollBars) return;
      
      // Always prevent default for scroll bar touches
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      
      const touch = e.touches[0];
      const local = getLocalCoords({ clientX: touch.clientX, clientY: touch.clientY });
      const next: Partial<ZoomState> = {};
      
      if (barDrag.current === 'x') {
        const dragPosition = local.x - barDragStartRef.current;
        const trackStart = left;
        const trackLength = width;
        const barWidth = width / state.scaleX;
        const clampedBarStart = clamp(dragPosition, trackStart, trackStart + trackLength - barWidth);
        const relativePosition = (clampedBarStart - trackStart) / trackLength;
        next.offsetX = -relativePosition * width * state.scaleX;
      } else {
        const dragPosition = local.y - barDragStartRef.current;
        const trackStart = top;
        const trackLength = height;
        const barHeight = height / state.scaleY;
        const clampedBarStart = clamp(dragPosition, trackStart, trackStart + trackLength - barHeight);
        const relativePosition = (clampedBarStart - trackStart) / trackLength;
        next.offsetY = -relativePosition * height * state.scaleY;
      }
      
      update(next);
    },
    [state, update, getLocalCoords, left, top, width, height, controlConfig.dragScrollBars],
  );

  const handleBarTouchEnd = useCallback(() => {
    barDrag.current = null;
  }, []);

  const barDragStartRef = useRef<number>(0);

  // Register native touch events with passive: false for mobile browsers
  React.useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    
    const handleNativeTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };
    
    const handleNativeTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };
    
    // Register with capture and passive: false
    overlay.addEventListener('touchstart', handleNativeTouchStart, { passive: false, capture: true });
    overlay.addEventListener('touchmove', handleNativeTouchMove, { passive: false, capture: true });
    
    return () => {
      overlay.removeEventListener('touchstart', handleNativeTouchStart);
      overlay.removeEventListener('touchmove', handleNativeTouchMove);
    };
  }, []);

  // Add native event listeners for scroll bars to prevent page scroll
  React.useEffect(() => {
    if (!scrollBarConfig.show) return;

    const handleScrollBarTouch = (e: TouchEvent) => {
      // Prevent all page scroll when touching scroll bars
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    };

    // Find all scroll bar elements and add native listeners
    const scrollBars = document.querySelectorAll('[data-scroll-bar="true"]');
    scrollBars.forEach(bar => {
      bar.addEventListener('touchstart', handleScrollBarTouch, { passive: false, capture: true });
      bar.addEventListener('touchmove', handleScrollBarTouch, { passive: false, capture: true });
    });

    return () => {
      scrollBars.forEach(bar => {
        bar.removeEventListener('touchstart', handleScrollBarTouch);
        bar.removeEventListener('touchmove', handleScrollBarTouch);
      });
    };
  }, [scrollBarConfig.show, state.scaleX, state.scaleY]);

  const handleBarPointerMove = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      if (!barDrag.current || !controlConfig.dragScrollBars) return;
      e.stopPropagation();
      
      const local = getLocalCoords(e);
      const next: Partial<ZoomState> = {};
      
      if (barDrag.current === 'x') {
        // Calculate where the bar should be positioned
        const dragPosition = local.x - barDragStartRef.current;
        const trackStart = left;
        const trackLength = width;
        const barWidth = width / state.scaleX;
        
        // Calculate the new bar position clamped to track bounds
        const clampedBarStart = clamp(dragPosition, trackStart, trackStart + trackLength - barWidth);
        
        // Convert bar position to offset
        const relativePosition = (clampedBarStart - trackStart) / trackLength;
        next.offsetX = -relativePosition * width * state.scaleX;
      } else {
        // Calculate where the bar should be positioned
        const dragPosition = local.y - barDragStartRef.current;
        const trackStart = top;
        const trackLength = height;
        const barHeight = height / state.scaleY;
        
        // Calculate the new bar position clamped to track bounds
        const clampedBarStart = clamp(dragPosition, trackStart, trackStart + trackLength - barHeight);
        
        // Convert bar position to offset
        const relativePosition = (clampedBarStart - trackStart) / trackLength;
        next.offsetY = -relativePosition * height * state.scaleY;
      }
      
      update(next);
    },
    [state, update, getLocalCoords, left, top, width, height, controlConfig.dragScrollBars],
  );

  const handleBarPointerUp = useCallback(() => {
    barDrag.current = null;
  }, []);

  const handleBarPointerEnter = useCallback((axis: 'x' | 'y') => () => {
    setBarHover(axis);
  }, []);

  const handleBarPointerLeave = useCallback(() => {
    setBarHover(null);
  }, []);

  const barElements =
    scrollBarConfig.show && (state.scaleX > 1 || state.scaleY > 1)
      ? [
          mode !== 'y' && (
            <rect
              key="xbar"
              data-scroll-bar="true"
              x={left - state.offsetX / state.scaleX}
              y={top + height - scrollBarConfig.thickness}
              width={width / state.scaleX}
              height={scrollBarConfig.thickness}
              fill={barHover === 'x' ? scrollBarConfig.hoverColor : scrollBarConfig.color}
              fillOpacity={barHover === 'x' ? scrollBarConfig.hoverOpacity : scrollBarConfig.opacity}
              rx={scrollBarConfig.borderRadius}
              style={{ cursor: controlConfig.dragScrollBars ? 'grab' : 'default', touchAction: 'none' }}
              onPointerDown={handleBarPointerDown('x')}
              onPointerMove={handleBarPointerMove}
              onPointerUp={handleBarPointerUp}
              onPointerEnter={handleBarPointerEnter('x')}
              onPointerLeave={handleBarPointerLeave}
              onTouchStart={handleBarTouchStart('x')}
              onTouchMove={handleBarTouchMove}
              onTouchEnd={handleBarTouchEnd}
            />
          ),
          mode !== 'x' && (
            <rect
              key="ybar"
              data-scroll-bar="true"
              x={left + width - scrollBarConfig.thickness}
              y={top - state.offsetY / state.scaleY}
              width={scrollBarConfig.thickness}
              height={height / state.scaleY}
              fill={barHover === 'y' ? scrollBarConfig.hoverColor : scrollBarConfig.color}
              fillOpacity={barHover === 'y' ? scrollBarConfig.hoverOpacity : scrollBarConfig.opacity}
              rx={scrollBarConfig.borderRadius}
              style={{ cursor: controlConfig.dragScrollBars ? 'grab' : 'default', touchAction: 'none' }}
              onPointerDown={handleBarPointerDown('y')}
              onPointerMove={handleBarPointerMove}
              onPointerUp={handleBarPointerUp}
              onPointerEnter={handleBarPointerEnter('y')}
              onPointerLeave={handleBarPointerLeave}
              onTouchStart={handleBarTouchStart('y')}
              onTouchMove={handleBarTouchMove}
              onTouchEnd={handleBarTouchEnd}
            />
          ),
        ].filter(Boolean)
      : null;

  const childArray = React.Children.toArray(children);
  const [clippedChildren, tooltipChildren, otherChildren, minimapChildren] = childArray.reduce<
    [React.ReactNode[], React.ReactNode[], React.ReactNode[], React.ReactNode[]]
  >(
    (acc, child: React.ReactNode) => {
      if (React.isValidElement(child)) {
        const name = (child.type as any).displayName || (child.type as any).name || '';
        if (/Minimap/.test(name)) {
          acc[3].push(child);
        } else if (/Axis$|Legend|Brush/.test(name)) {
          acc[2].push(child);
        } else if (/Tooltip/.test(name)) {
          acc[1].push(child);
        } else {
          acc[0].push(child);
        }
      } else {
        acc[0].push(child);
      }
      return acc;
    },
    [[], [], [], []],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGGElement>) => {
      const prev = pointers.current.get(e.pointerId);
      // Do not track pointer if it's not held down
      // But do continue if we're in selection mode
      if (!prev && !selectStart.current) return;
      
      const { x: localX, y: localY } = getLocalCoords(e);
      
      // Handle drag-to-zoom rectangle drawing
      if (selectStart.current) {
        const { x, y } = selectStart.current;
        const w = localX - x;
        const h = localY - y;
        
        setSelectRect({
          x: (w > 0 ? x : localX) + left,
          y: (h > 0 ? y : localY) + top,
          w: Math.abs(w),
          h: Math.abs(h),
        });
        return; // Prevent other move actions while selecting
      }
      
      // Handle the start of a drag-to-zoom gesture from a double-tap-and-hold
      if (doubleTapStart.current && e.pointerType === 'touch') {
        const { x, y } = doubleTapStart.current;
        const dragDistance = Math.hypot(localX - x, localY - y);
        const DRAG_THRESHOLD = 10;
        
        if (dragDistance > DRAG_THRESHOLD) {
          // Start selection and hide tooltip
          setIsInteracting(true);
          selectStart.current = { x, y };
          setSelectRect({ x: x + left, y: y + top, w: 0, h: 0 });
          doubleTapStart.current = null;
          dragStart.current = null;
          return;
        }
      }

      // PC drag-to-pan. MUST be before edge scroll.
      if (dragStart.current && e.pointerType === 'mouse') {
        const dx = localX - dragStart.current.x;
        const dy = localY - dragStart.current.y;
        dragStart.current = { x: localX, y: localY };

        const next: Partial<ZoomState> = {
          offsetX: state.offsetX + dx,
          offsetY: state.offsetY + dy,
        };
        update(next);
        // Return here to prevent edge scroll from firing simultaneously.
        return; 
      }
      
      // Mobile edge scrolling - works even when tooltip is active
      if (
        !dragStart.current && // Don't conflict with main drag
        !selectStart.current && // Don't conflict with selection
        pointers.current.size === 1 && // Single finger only
        e.pointerType === 'touch' && // Touch only
        state.scaleX > 1.01 // Only when zoomed
      ) {
        const edgeThreshold = 60;
        const panAmount = 8;
        let panDeltaX = 0;
        
        if (localX < edgeThreshold && state.offsetX < 0) {
          panDeltaX = panAmount;
        } else if (localX > width - edgeThreshold && state.offsetX > width * (1 - state.scaleX)) {
          panDeltaX = -panAmount;
        }

        if (panDeltaX !== 0) {
          update({ offsetX: state.offsetX + panDeltaX });
        }
      }
      
      pointers.current.set(e.pointerId, { x: localX, y: localY });

      if (pointers.current.size >= 2 && pinchStart.current && controlConfig.pinchZoom && twoFingerStart.current) {
        const [a, b] = Array.from(pointers.current.values());
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const centerX = (a.x + b.x) / 2;
        const centerY = (a.y + b.y) / 2;

        const panDeltaX = centerX - twoFingerStart.current.centerX;
        const panDeltaY = centerY - twoFingerStart.current.centerY;
        
        const ratio = pinchStart.current.distance === 0 ? 1 : dist / pinchStart.current.distance;
        const next: Partial<ZoomState> = {};

        if (mode === 'y') {
          const newScaleY = clamp(pinchStart.current.scaleY * ratio, minScale, maxScale);
          const rY = pinchStart.current.scaleY === 0 ? 1 : newScaleY / pinchStart.current.scaleY;
          next.scaleY = newScaleY;
          if (!config.followLineKey) {
            next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (rY - 1) + panDeltaY;
          } else {
            next.offsetY = pinchStart.current.offsetY + panDeltaY;
          }
        } else if (mode === 'xy') {
          const newScale = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
          const r = pinchStart.current.scaleX === 0 ? 1 : newScale / pinchStart.current.scaleX;
          next.scaleX = newScale;
          next.scaleY = newScale;
          next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (r - 1) + panDeltaX;
          if (!config.followLineKey) {
            next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (r - 1) + panDeltaY;
          } else {
            next.offsetY = pinchStart.current.offsetY + panDeltaY;
          }
        } else {
          const newScaleX = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
          const rX = pinchStart.current.scaleX === 0 ? 1 : newScaleX / pinchStart.current.scaleX;
          next.scaleX = newScaleX;
          next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (rX - 1) + panDeltaX;
          if (config.followLineKey) {
            next.offsetY = pinchStart.current.offsetY + panDeltaY;
          }
        }

        interacted.current = true;
        next.disableAnimation = interacted.current && disableAnimation;
        update(next);
        return;
      }
    },
    [state, update, minScale, maxScale, mode, getLocalCoords, disableAnimation, config.followLineKey, layout, controlConfig.pinchZoom, left, top, width, controlConfig.dragPan],
  );

  // Re-enable PC drag pan
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGGElement>) => {
      // --- Stage 1: Seize control and reset state ---
      // Prevent all default browser actions and stop event bubbling to prevent conflicts.
      e.preventDefault();
      e.stopPropagation();
      
      // Immediately hide the tooltip and kill its state to prevent ghosting.
      setIsInteracting(true);
      dispatch(setTooltipSettingsState({ active: false, defaultIndex: undefined, shared: null, trigger: null, axisId: null }));

      // --- Stage 2: Gesture Detection ---
      interacted.current = true;
      (e.target as Element).setPointerCapture?.(e.pointerId);
      const { x: localX, y: localY } = getLocalCoords(e);
      
      // Add the new pointer
      pointers.current.set(e.pointerId, { x: localX, y: localY });

      // --- Gesture Detection ---
      // The order here is critical to prevent conflicts.

      // 1. Two-finger pinch/pan always takes top priority
      if (pointers.current.size >= 2) {
        if (controlConfig.pinchZoom) {
          const [a, b] = Array.from(pointers.current.values());
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          const centerX = (a.x + b.x) / 2;
          const centerY = (a.y + b.y) / 2;
          
          pinchStart.current = {
            distance,
            scaleX: state.scaleX,
            scaleY: state.scaleY,
            offsetX: state.offsetX,
            offsetY: state.offsetY,
            centerX: centerX - state.offsetX,
            centerY: centerY - state.offsetY,
          };

          if (controlConfig.twoFingerPan) {
            twoFingerStart.current = { distance, centerX, centerY };
          }
          // Clear other potential gestures
          dragStart.current = null;
          doubleTapStart.current = null;
          selectStart.current = null;
        }
        return; // Exit after handling multi-touch
      }

      // 2. Handle double-tap-and-hold for selection on touch devices
      if (e.pointerType === 'touch' && dragToZoom) {
        const now = Date.now();
        const DOUBLE_TAP_TIMEOUT = 300;
        
        if (now - lastTap.current < DOUBLE_TAP_TIMEOUT) {
          e.preventDefault();
          doubleTapStart.current = { x: localX, y: localY };
          lastTap.current = 0; // Reset tap timer
          return; // Exit to wait for drag
        }
        lastTap.current = now;
      }
      
      // 3. Handle Shift+Drag to select on PC
      if (dragToZoom && e.shiftKey) {
        selectStart.current = { x: localX, y: localY };
        setSelectRect({ x: localX + left, y: localY + top, w: 0, h: 0 });
        return;
      }
      
      // 4. If nothing else, it's a potential single-pointer drag
      if (pointers.current.size === 1) {
        // This now works for both mouse and touch, but only if not starting a double-tap select
        if (!doubleTapStart.current) {
          dragStart.current = { x: localX, y: localY };
        }
      } else {
        dragStart.current = null;
      }
    },
    [state.scaleX, state.scaleY, state.offsetX, state.offsetY, getLocalCoords, dragToZoom, left, top, controlConfig.pinchZoom, controlConfig.twoFingerPan, preventConfig.contextMenu],
  );

  return (
    <AxisInteractionContext.Provider value={axisInteractionValue}>
      <g>
        <g style={{ display: isInteracting ? 'none' : 'block' }}>{tooltipChildren}</g>
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
          style={{ 
            touchAction: 'none',
            cursor: dragStart.current ? 'grabbing' : 'grab',
            outline: 'none',
            zIndex: 1000,
            isolation: 'isolate',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={cleanupInteractionState}
          onBlur={cleanupInteractionState}
          onKeyDown={handleKeyDown}
          onFocus={handleOverlayFocus}
          onClick={handleOverlayClick}
          onContextMenu={preventConfig.contextMenu ? (e: React.MouseEvent) => e.preventDefault() : undefined}
        />
        {minimapChildren && minimapChildren.length > 0 && (
          <g onPointerDown={(e) => {
            setIsInteracting(true);
            e.stopPropagation();
          }}
          onPointerUp={() => setIsInteracting(false)}
          onPointerLeave={() => setIsInteracting(false)}
          >
            {minimapChildren}
          </g>
        )}
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
    </AxisInteractionContext.Provider>
  );
}

