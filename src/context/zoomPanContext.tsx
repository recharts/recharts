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
  handleAxisWheel?: (e: React.WheelEvent, axisType: 'x' | 'y') => void;
  handleAxisDrag?: (e: React.PointerEvent, axisType: 'x' | 'y', action: 'start' | 'move' | 'end') => void;
  handleAxisTouch?: (e: React.TouchEvent, axisType: 'x' | 'y', action: 'start' | 'move' | 'end') => void;
  isLabelInteractionEnabled?: boolean;
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
    /** Allow dragging to pan in main chart area (if false, only edge panning works) */
    allowChartDragPan?: boolean;
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
    /** Enable edge panning when dragging near chart edges */
    edgePan?: boolean;
    /** If true a finger that starts inside the chart auto-pans (tooltip remains active).
     *  If false you must start the drag on the edge to pan. */
    edgePanAutoSeek?: boolean;
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

/* ---------- 15 % damping for raw pinch ratio -------------------------- */
const damp = (r: number, k = 1) => 1 + (r - 1) * k;

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
    edgePan: controls.edgePan !== false, // Enable edge panning by default
    edgePanAutoSeek: controls.edgePanAutoSeek !== false, // Enable auto-seek mode by default
    allowChartDragPan: controls.allowChartDragPan !== false,
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
  const interacted = useRef(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const selectStart = useRef<{ x: number; y: number } | null>(null);
  const [selectRect, setSelectRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const barDrag = useRef<'x' | 'y' | null>(null);
  const [barHover, setBarHover] = useState<'x' | 'y' | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
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
  const tapCount = useRef(0);           // 0-3
  const TAP_DELAY = 300;                // ms - same window as before
  const doubleClickTimer = useRef<NodeJS.Timeout | null>(null);
  const isDoubleClickHold = useRef<boolean>(false);
  const doubleClickPos = useRef<{ x: number; y: number } | null>(null);
  const updateCursorTimer = useRef<number | null>(null);
  
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

      // Update cursor position during zoom operations
      if (updateCursorTimer.current === null) {
        // keep one single RAF running while the user is interacting
        const loop = () => {
          dispatch(setTooltipSettingsState({
            active: true,
            defaultIndex: undefined,
            shared: undefined,
            trigger: undefined,
            axisId: undefined,
          }));   // triggers selector recompute
          updateCursorTimer.current = requestAnimationFrame(loop);
        };
        updateCursorTimer.current = requestAnimationFrame(loop);
      }
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

  // Helper for gentle auto-panning when finger approaches edges during tooltip mode
  const gentleAutoPan = useCallback((localX: number, localY: number, intensity = 0.35) => {
    const { edgePan, edgeThreshold } = controlConfig;
    if (!edgePan) return;

    const dLeft = localX;
    const dRight = width - localX;
    const dTop = localY;
    const dBottom = height - localY;

    let panX = 0, panY = 0;

    if (mode !== 'y' && dLeft < edgeThreshold) panX = (edgeThreshold - dLeft) * intensity;
    if (mode !== 'y' && dRight < edgeThreshold) panX = -(edgeThreshold - dRight) * intensity;
    if (mode !== 'x' && dTop < edgeThreshold) panY = (edgeThreshold - dTop) * intensity;
    if (mode !== 'x' && dBottom < edgeThreshold) panY = -(edgeThreshold - dBottom) * intensity;

    if (panX || panY) {
      update({
        offsetX: state.offsetX + panX,
        offsetY: state.offsetY + panY,
        disableAnimation: true,
      });
    }
  }, [controlConfig, mode, width, height, state.offsetX, state.offsetY, update]);

  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGGElement>) => {
      // ALWAYS prevent page scroll when over the chart area
      e.preventDefault();
      e.stopPropagation();
      
      const local = getLocalCoords(e);
      
      // Check if scrolling on scroll bar area - if so, pan instead of zoom
      const onScrollBarX = scrollBarConfig.show && (mode === 'x' || mode === 'xy') && state.scaleX > 1 && 
        local.y >= height - scrollBarConfig.thickness && local.y <= height &&
        local.x >= 0 && local.x <= width;
        
      const onScrollBarY = scrollBarConfig.show && (mode === 'y' || mode === 'xy') && state.scaleY > 1 && 
        local.x >= width - scrollBarConfig.thickness && local.x <= width &&
        local.y >= 0 && local.y <= height;
        
      const onScrollBar = onScrollBarX || onScrollBarY;
      
      if (onScrollBar && controlConfig.wheelPan) {
        
        if (e.shiftKey) {
          // Shift+scroll in scrollbar area = zoom that axis
          const delta = e.deltaY < 0 ? 1.1 : 0.9;
          const next: Partial<ZoomState> = {};
          
          if (onScrollBarX) {
            const anchorX = local.x - state.offsetX;
            const newScaleX = clamp(state.scaleX * delta, minScale, maxScale);
            const ratioX = newScaleX / state.scaleX;
            next.scaleX = newScaleX;
            next.offsetX = state.offsetX - anchorX * (ratioX - 1);
          }
          if (onScrollBarY) {
            const anchorY = local.y - state.offsetY;
            const newScaleY = clamp(state.scaleY * delta, minScale, maxScale);
            const ratioY = newScaleY / state.scaleY;
            next.scaleY = newScaleY;
            next.offsetY = state.offsetY - anchorY * (ratioY - 1);
          }
          
          interacted.current = true;
          next.disableAnimation = interacted.current && disableAnimation;
          update(next);
        } else {
          // Regular scroll in scrollbar area = pan
          const panAmount = e.deltaY > 0 ? -30 : 30;
          const next: Partial<ZoomState> = {};
          
          if (onScrollBarX && (mode === 'x' || mode === 'xy')) {
            next.offsetX = Math.min(Math.max(state.offsetX + panAmount, width * (1 - state.scaleX)), 0);
          }
          if (onScrollBarY && (mode === 'y' || mode === 'xy')) {
            next.offsetY = Math.min(Math.max(state.offsetY + panAmount, height * (1 - state.scaleY)), 0);
          }
          
          update(next);
        }
        return;
      }
      
      // Main chart area interactions
      if (e.shiftKey && controlConfig.wheelPan) {
        const panAmount = e.deltaY > 0 ? -30 : 30;
        const next: Partial<ZoomState> = {};
        
        if (e.ctrlKey) {
          // Ctrl+Shift+scroll = pan Y axis
          if (mode !== 'x') {
            next.offsetY = Math.min(Math.max(state.offsetY + panAmount, height * (1 - state.scaleY)), 0);
          }
        } else {
          // Shift+scroll = pan X axis
          if (mode !== 'y') {
            next.offsetX = Math.min(Math.max(state.offsetX + panAmount, width * (1 - state.scaleX)), 0);
          }
        }
        
        update(next);
        return;
      }
      
      // Regular zoom behavior for main chart area
      if (!controlConfig.wheelZoom) return;
      
      // Clear tooltip when zooming with wheel
      dispatch(setTooltipSettingsState({
        active: false,
        defaultIndex: undefined,
        shared: undefined,
        trigger: undefined,
        axisId: undefined,
      }));
      
      interacted.current = true;
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
    [state, minScale, maxScale, update, mode, getLocalCoords, disableAnimation, config.followLineKey, controlConfig.wheelZoom, controlConfig.wheelPan, dispatch, scrollBarConfig.show, scrollBarConfig.thickness, width, height],
  );

  const handleDoubleClick = useCallback((e: React.MouseEvent<SVGRectElement>) => {
    // Clear any active tooltip to prevent it from remembering the old state
    dispatch(setTooltipSettingsState({
      active: false,
      defaultIndex: undefined,
      shared: undefined,
      trigger: undefined,
      axisId: undefined,
    }));

    // If drag to zoom is enabled, start a timer to detect hold-and-drag
    if (dragToZoom) {
      const local = getLocalCoords(e);
      doubleClickPos.current = { x: local.x, y: local.y };
      isDoubleClickHold.current = true;
      
      // Clear any existing timer
      if (doubleClickTimer.current) {
        clearTimeout(doubleClickTimer.current);
      }
      
      // Set a timer to reset zoom if no drag starts within 200ms (reduced from 300ms)
      doubleClickTimer.current = setTimeout(() => {
        if (isDoubleClickHold.current && !selectStart.current) {
          // No drag detected, proceed with zoom reset
          update({
            scaleX: 1,
            scaleY: 1,
            offsetX: 0,
            offsetY: 0,
          });
        }
        isDoubleClickHold.current = false;
        doubleClickPos.current = null;
        doubleClickTimer.current = null;
      }, 200);
    } else {
      // No drag to zoom, immediately reset
      update({
        scaleX: 1,
        scaleY: 1,
        offsetX: 0,
        offsetY: 0,
      });
    }
  }, [update, dispatch, dragToZoom, getLocalCoords]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      
      // Handle triple-tap detection FIRST, before any preventDefault calls
      if (e.changedTouches.length === 1) {
        const now = Date.now();
        const t = e.changedTouches[0];
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        
        // Reset counter if too much time has passed
        if (lastTap.current > 0 && now - lastTap.current > TAP_DELAY) {
          tapCount.current = 0; // too slow - start over
        }
        
        // Increment tap count for every primary touch-down
        tapCount.current += 1;
        
        // Check if this is a double-tap (within TAP_DELAY and 50px of last tap)
        if (tapCount.current === 2 && lastTap.current > 0 && now - lastTap.current < TAP_DELAY && doubleClickPos.current) {
          const distance = Math.hypot(local.x - doubleClickPos.current.x, local.y - doubleClickPos.current.y);
          if (distance < 50) {
            // This is a confirmed double-tap - NOW we can prevent default
            e.preventDefault();
            e.stopPropagation();
            
            // Reset tap counter after successful double-tap
            tapCount.current = 0;
            
            // Force hide tooltip and start interaction state
            setIsInteracting(true);
            dispatch(setTooltipSettingsState({
              active: false,
              defaultIndex: undefined,
              shared: undefined,
              trigger: undefined,
              axisId: undefined,
            }));
            
            if (dragToZoom) {
              // Enable drag mode for drag-to-zoom
              isDoubleClickHold.current = true;
              doubleClickPos.current = local;
              lastTap.current = 0; // Reset to prevent issues
              
              // Set pointer for immediate availability
              Array.from(e.changedTouches).forEach((touch: React.Touch) => {
                const touchLocal = getLocalCoords({ clientX: touch.clientX, clientY: touch.clientY });
                pointers.current.set(touch.identifier, touchLocal);
              });
              
              return; // Exit early - we're now in double-tap-hold mode
            } else {
              // No drag to zoom enabled, immediately reset zoom
              lastTap.current = 0; // Reset to prevent issues
              update({
                scaleX: 1,
                scaleY: 1,
                offsetX: 0,
                offsetY: 0,
              });
              return;
            }
          }
        }
        
        // Store this tap for potential double-tap (but don't prevent default yet)
        lastTap.current = now;
        doubleClickPos.current = local;
      }
      
      // Check if touch is on scrollbar - if so, prevent page scroll but allow scrollbar interaction
      const t = e.changedTouches[0];
      const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
      const onScrollBar = checkIfTouchOnScrollBar(local.x, local.y);
      
      if (onScrollBar) {
        // Prevent page scroll when touching scrollbars
        e.preventDefault();
        
        // Force hide tooltip when interacting with scrollbars
        setIsInteracting(true);
        dispatch(setTooltipSettingsState({
          active: false,
          defaultIndex: undefined,
          shared: undefined,
          trigger: undefined,
          axisId: undefined,
        }));
      }
      
      // Check if near edges for potential edge panning
      const nearLeftEdge = controlConfig.edgePan && local.x < controlConfig.edgeThreshold;
      const nearRightEdge = controlConfig.edgePan && local.x > width - controlConfig.edgeThreshold;
      const nearTopEdge = controlConfig.edgePan && local.y < controlConfig.edgeThreshold;
      const nearBottomEdge = controlConfig.edgePan && local.y > height - controlConfig.edgeThreshold;
      const nearEdge = nearLeftEdge || nearRightEdge || nearTopEdge || nearBottomEdge;
      
      // Only prevent default for interactions that we definitely need to handle
      if (nearEdge || onScrollBar || pointers.current.size >= 1) {
        // For edge panning, scrollbar interaction, or multi-touch, we need control
        if (!onScrollBar) { // scrollbar already handled above
          e.preventDefault();
        }
        
        // Force hide tooltip for these interactions
        setIsInteracting(true);
        dispatch(setTooltipSettingsState({
          active: false,
          defaultIndex: undefined,
          shared: undefined,
          trigger: undefined,
          axisId: undefined,
        }));
      }
      
      interacted.current = true;
      
      Array.from(e.changedTouches).forEach((touch: React.Touch) => {
        const touchLocal = getLocalCoords({ clientX: touch.clientX, clientY: touch.clientY });
        pointers.current.set(touch.identifier, touchLocal);
      });
      
      if (pointers.current.size === 1) {
        // Set drag start for edge panning or scroll bar interaction
        if (nearEdge || onScrollBar) {
          dragStart.current = { x: local.x, y: local.y };
        }
        // For regular touches in main area, don't set dragStart to allow tooltip behavior
      }
      
      if (pointers.current.size >= 2 && controlConfig.pinchZoom) {
        // Prevent default for multi-touch gestures
        e.preventDefault();
        
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
        
        // Initialize two-finger tracking for simultaneous zoom+pan
        twoFingerStart.current = {
          distance,
          centerX,
          centerY,
        };
      }
    },
    [pointerSupported, state.scaleX, state.scaleY, state.offsetX, state.offsetY, getLocalCoords, controlConfig.pinchZoom, controlConfig.edgePan, controlConfig.edgeThreshold, checkIfTouchOnScrollBar, width, height, dispatch, dragToZoom, update, TAP_DELAY],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      
      Array.from(e.changedTouches).forEach((t: React.Touch) => {
        const prev = pointers.current.get(t.identifier);
        if (!prev) return;
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        pointers.current.set(t.identifier, local);
      });

      // Handle double-tap-and-hold drag to zoom
      if (dragToZoom && isDoubleClickHold.current && doubleClickPos.current && pointers.current.size === 1) {
        // Prevent default for drag-to-zoom interactions
        e.preventDefault();
        e.stopPropagation();
        
        const t = e.changedTouches[0];
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        
        // Check if we've moved enough to start drag selection
        const distance = Math.hypot(local.x - doubleClickPos.current.x, local.y - doubleClickPos.current.y);
        
        if (distance > 10 && !selectStart.current) {
          // Start drag to zoom selection
          selectStart.current = doubleClickPos.current;
          setSelectRect({ 
            x: doubleClickPos.current.x + left, 
            y: doubleClickPos.current.y + top, 
            w: 0, 
            h: 0 
          });
          
          // Clear double-click state and timer
          if (doubleClickTimer.current) {
            clearTimeout(doubleClickTimer.current);
            doubleClickTimer.current = null;
          }
          isDoubleClickHold.current = false;
        }
        
        // Update selection rectangle if we're in drag mode
        if (selectStart.current) {
          let x = Math.min(selectStart.current.x, local.x);
          let y = Math.min(selectStart.current.y, local.y);
          let w = Math.abs(local.x - selectStart.current.x);
          let h = Math.abs(local.y - selectStart.current.y);
          
          // Constrain selection rectangle based on zoom mode
          if (mode === 'x') {
            // X-only mode: selection should span full height
            y = 0;
            h = height;
          } else if (mode === 'y') {
            // Y-only mode: selection should span full width
            x = 0;
            w = width;
          }
          
          setSelectRect({ x: x + left, y: y + top, w, h });
          return;
        }
      }

      // Two-finger gesture: simultaneous zoom and pan
      if (pointers.current.size >= 2 && pinchStart.current && twoFingerStart.current && controlConfig.pinchZoom) {
        // Prevent default for multi-touch gestures
        e.preventDefault();
        e.stopPropagation();
        
        const [a, b] = Array.from(pointers.current.values());
        const currentDistance = Math.hypot(a.x - b.x, a.y - b.y);
        const currentCenterX = (a.x + b.x) / 2;
        const currentCenterY = (a.y + b.y) / 2;

        const zoomRatio = pinchStart.current.distance === 0 ? 1 : currentDistance / pinchStart.current.distance;

        const isZoomIntentional = zoomRatio < 0.98 || zoomRatio > 1.02;

        const panDeltaX = currentCenterX - twoFingerStart.current.centerX;
        const panDeltaY = currentCenterY - twoFingerStart.current.centerY;

        const next: Partial<ZoomState> = {};
        
        const currentScaleX = isZoomIntentional ? clamp(pinchStart.current.scaleX * zoomRatio, minScale, maxScale) : state.scaleX;
        const currentScaleY = isZoomIntentional ? clamp(pinchStart.current.scaleY * zoomRatio, minScale, maxScale) : state.scaleY;

        if (mode === 'y') {
          const rY = pinchStart.current.scaleY === 0 ? 1 : currentScaleY / pinchStart.current.scaleY;
          next.scaleY = currentScaleY;
          if (!config.followLineKey) {
            next.offsetY = isZoomIntentional ? (pinchStart.current.offsetY - pinchStart.current.centerY * (rY - 1) + panDeltaY) : (state.offsetY + panDeltaY);
          } else {
            next.offsetY = state.offsetY + panDeltaY;
          }
        } else if (mode === 'xy') {
          // Treat X & Y independently so a previous axis-only zoom is preserved
          const newScaleX = clamp(pinchStart.current.scaleX * zoomRatio, minScale, maxScale);
          const newScaleY = clamp(pinchStart.current.scaleY * zoomRatio, minScale, maxScale);

          const rX = pinchStart.current.scaleX === 0 ? 1 : newScaleX / pinchStart.current.scaleX;
          const rY = pinchStart.current.scaleY === 0 ? 1 : newScaleY / pinchStart.current.scaleY;

          next.scaleX = newScaleX;
          next.scaleY = newScaleY;

          if (isZoomIntentional) {
            next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (rX - 1) + panDeltaX;
            next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (rY - 1) + panDeltaY;
          } else {
            next.offsetX = state.offsetX + panDeltaX;
            next.offsetY = state.offsetY + panDeltaY;
          }
        } else { // mode 'x'
          const rX = pinchStart.current.scaleX === 0 ? 1 : currentScaleX / pinchStart.current.scaleX;
          next.scaleX = currentScaleX;
          if (isZoomIntentional) {
            next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (rX - 1) + panDeltaX;
          } else {
            next.offsetX = state.offsetX + panDeltaX;
          }
          if (config.followLineKey) {
            next.offsetY = state.offsetY + panDeltaY;
          }
        }

        if (!isZoomIntentional) {
          twoFingerStart.current.centerX = currentCenterX;
          twoFingerStart.current.centerY = currentCenterY;
        }
        
        interacted.current = true;
        next.disableAnimation = interacted.current && disableAnimation;
        update(next);
        return;
      }

      // Single-finger gesture: handle scrollbar interaction and edge panning
      if (pointers.current.size === 1) {
        const t = e.changedTouches[0];
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        
        // Check if on scroll bars
        const onScrollBar = checkIfTouchOnScrollBar(local.x, local.y);
        
        if (onScrollBar && dragStart.current && controlConfig.dragPan) {
          // Prevent default for scrollbar dragging to avoid page scroll
          e.preventDefault();
          
          // Handle scroll bar dragging
          const dx = local.x - dragStart.current.x;
          const dy = local.y - dragStart.current.y;
          
          dragStart.current = { x: local.x, y: local.y };
          
          const next: Partial<ZoomState> = {};
          
          // Apply panning based on mode and layout
          if (mode !== 'y') {
            next.offsetX = config.followLineKey && layout === 'vertical' ? state.offsetX : state.offsetX + dx;
          }
          if (mode !== 'x') {
            next.offsetY = config.followLineKey && layout === 'horizontal' ? state.offsetY : state.offsetY + dy;
          }
          
          interacted.current = true;
          next.disableAnimation = interacted.current && disableAnimation;
          update(next);
        } else {
          // Two-mode edge panning system
          if (controlConfig.edgePanAutoSeek) {
            // Auto-seek mode: finger started inside chart -> let tooltip survive & pan quietly
            gentleAutoPan(local.x, local.y);
          } else if (dragStart.current) {
            // Classic drag mode: edge-pan via drag (finger started on an edge)
            const dx = local.x - dragStart.current.x;
            const dy = local.y - dragStart.current.y;
            dragStart.current = { x: local.x, y: local.y };
            
            const next: Partial<ZoomState> = {};
            if (mode !== 'y') next.offsetX = state.offsetX + dx;
            if (mode !== 'x') next.offsetY = state.offsetY + dy;
            update(next);
          }
          // For touches not triggering edge panning: allow normal behavior (no preventDefault)
        }
      }
    },
    [pointerSupported, state, update, minScale, maxScale, mode, getLocalCoords, disableAnimation, config.followLineKey, layout, controlConfig.pinchZoom, controlConfig.dragPan, controlConfig.edgePan, controlConfig.edgeThreshold, controlConfig.edgePanAutoSeek, controlConfig.allowChartDragPan, checkIfTouchOnScrollBar, width, height, dragToZoom, left, top, dispatch, isDragging, gentleAutoPan],
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<SVGGElement>) => {
      if (pointerSupported) return;
      
      /* ----- double-tap logic ------------------------------------------ */
      if (isDoubleClickHold.current) {
        // user finished the 2nd tap
        if (!selectStart.current) {
          // it was a quick double-tap → reset zoom
          update({ scaleX: 1, scaleY: 1, offsetX: 0, offsetY: 0 });
        }
        isDoubleClickHold.current = false;
        doubleClickPos.current    = null;
        if (doubleClickTimer.current) {
          clearTimeout(doubleClickTimer.current);
          doubleClickTimer.current = null;
        }
      }
      
      // Always prevent default
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      
      Array.from(e.changedTouches).forEach((t: React.Touch) => {
        pointers.current.delete(t.identifier);
      });
      
      // Handle drag-to-zoom completion BEFORE cleanup
      if (selectStart.current && selectRect) {
        const { x, y, w, h } = selectRect;
        if (dragToZoom && w > 10 && h > 10) {
          const next: Partial<ZoomState> = {};
          const startPrevX = (x - left - state.offsetX) / state.scaleX;
          const endPrevX = (x - left + w - state.offsetX) / state.scaleX;
          const startPrevY = (y - top - state.offsetY) / state.scaleY;
          const endPrevY = (y - top + h - state.offsetY) / state.scaleY;
          
          // Only apply scale changes for allowed axes based on mode
          if (mode === 'x' || mode === 'xy') {
            next.scaleX = clamp(width / (endPrevX - startPrevX), minScale, maxScale);
            next.offsetX = -startPrevX * next.scaleX;
          }
          if (mode === 'y' || mode === 'xy') {
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
      
      if (pointers.current.size < 2) {
        pinchStart.current = null;
        twoFingerStart.current = null;
      }
      if (pointers.current.size === 0) {
        dragStart.current = null;
        setIsInteracting(false);
      }
    },
    [pointerSupported, selectStart, selectRect, dragToZoom, left, top, state.offsetX, state.offsetY, state.scaleX, state.scaleY, mode, width, height, minScale, maxScale, disableAnimation, update],
  );

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
            // Apply boundaries for Y axis
            const minOffsetY = height * (1 - newScaleY);
            next.offsetY = clamp(next.offsetY ?? state.offsetY, minOffsetY, 0);
          } else if (mode === 'xy') {
            const newScale = clamp(state.scaleX * delta, minScale, maxScale);
            const ratio = newScale / state.scaleX;
            next.scaleX = newScale;
            next.scaleY = newScale;
            next.offsetX = state.offsetX - anchorX * (ratio - 1);
            if (!config.followLineKey) {
              next.offsetY = state.offsetY - anchorY * (ratio - 1);
            }
            // Apply boundaries for both axes
            const minOffsetX = width * (1 - newScale);
            const minOffsetY = height * (1 - newScale);
            next.offsetX = clamp(next.offsetX, minOffsetX, 0);
            next.offsetY = clamp(next.offsetY ?? state.offsetY, minOffsetY, 0);
          } else {
            const newScaleX = clamp(state.scaleX * delta, minScale, maxScale);
            const ratioX = newScaleX / state.scaleX;
            next.scaleX = newScaleX;
            next.offsetX = state.offsetX - anchorX * (ratioX - 1);
            // Apply boundaries for X axis
            const minOffsetX = width * (1 - newScaleX);
            next.offsetX = clamp(next.offsetX, minOffsetX, 0);
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
          const minOffsetX = width * (1 - state.scaleX);
          next.offsetX = clamp(state.offsetX + panAmount, minOffsetX, 0);
          handled = true;
        } else if (e.key === 'ArrowRight') {
          const minOffsetX = width * (1 - state.scaleX);
          next.offsetX = clamp(state.offsetX - panAmount, minOffsetX, 0);
          handled = true;
        } else if (e.key === 'ArrowUp') {
          const minOffsetY = height * (1 - state.scaleY);
          next.offsetY = clamp(state.offsetY + panAmount, minOffsetY, 0);
          handled = true;
        } else if (e.key === 'ArrowDown') {
          const minOffsetY = height * (1 - state.scaleY);
          next.offsetY = clamp(state.offsetY - panAmount, minOffsetY, 0);
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
    isDoubleClickHold.current = false;
    doubleClickPos.current = null;
    if (doubleClickTimer.current) {
      clearTimeout(doubleClickTimer.current);
      doubleClickTimer.current = null;
    }
    if (updateCursorTimer.current) {
      cancelAnimationFrame(updateCursorTimer.current);
      updateCursorTimer.current = null;
    }
    setIsInteracting(false);
    setIsDragging(false);
    if (selectRect) {
      setSelectRect(null);
    }
  }, [selectRect]);

  const handlePointerUp = useCallback(
    (e?: React.PointerEvent<SVGGElement>) => {
      if (e) (e.target as Element).releasePointerCapture?.(e.pointerId);
      pointers.current.delete(e?.pointerId ?? 0);
      
      // Handle drag-to-zoom completion BEFORE cleanup
      if (selectStart.current && selectRect) {
        const { x, y, w, h } = selectRect;
        if (dragToZoom && w > 10 && h > 10) {
          const next: Partial<ZoomState> = {};
          const startPrevX = (x - left - state.offsetX) / state.scaleX;
          const endPrevX = (x - left + w - state.offsetX) / state.scaleX;
          const startPrevY = (y - top - state.offsetY) / state.scaleY;
          const endPrevY = (y - top + h - state.offsetY) / state.scaleY;
          
          // Only apply scale changes for allowed axes based on mode
          if (mode === 'x' || mode === 'xy') {
            next.scaleX = clamp(width / (endPrevX - startPrevX), minScale, maxScale);
            next.offsetX = -startPrevX * next.scaleX;
          }
          if (mode === 'y' || mode === 'xy') {
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
      
      if (pointers.current.size === 0) {
        cleanupInteractionState();
      } else if (pointers.current.size < 2) {
        pinchStart.current = null;
        twoFingerStart.current = null;
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

  // Register native event listeners for comprehensive scroll prevention
  React.useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    
    const handleNativeWheel = (e: WheelEvent) => {
      // Only prevent page scroll when over chart, but let React handlers process the event
      e.preventDefault();
    };
    
    // Remove aggressive touch event listeners that conflict with React handlers
    // Let React event handlers handle touch events selectively
    
    // Register only wheel events with passive: false
    overlay.addEventListener('wheel', handleNativeWheel, { passive: false });
    
    return () => {
      overlay.removeEventListener('wheel', handleNativeWheel);
    };
  }, []);

  // Add native event listeners for scroll bars to prevent page scroll
  React.useEffect(() => {
    if (!scrollBarConfig.show) return;

    const handleScrollBarTouch = (e: TouchEvent) => {
      // Only prevent page scroll when touching scroll bars, allow interaction
      e.preventDefault();
      // Don't stop propagation - let React handlers process the scrollbar interaction
    };

    const handleScrollBarWheel = (e: WheelEvent) => {
      // Only prevent page scroll, but allow React handlers to process the event
      e.preventDefault();
      // Don't stop propagation - let React handlers work
    };

    // Find all scroll bar elements and add native listeners
    const scrollBars = document.querySelectorAll('[data-scroll-bar="true"]');
    scrollBars.forEach(bar => {
      bar.addEventListener('touchstart', handleScrollBarTouch, { passive: false });
      bar.addEventListener('touchmove', handleScrollBarTouch, { passive: false });
      bar.addEventListener('wheel', handleScrollBarWheel, { passive: false });
    });

    return () => {
      scrollBars.forEach(bar => {
        bar.removeEventListener('touchstart', handleScrollBarTouch);
        bar.removeEventListener('touchmove', handleScrollBarTouch);
        bar.removeEventListener('wheel', handleScrollBarWheel);
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

  // Handle wheel events directly on scrollbar elements
  const handleBarWheel = useCallback(
    (axis: 'x' | 'y') => (e: React.WheelEvent<SVGRectElement>) => {
      // ALWAYS prevent page scroll when scrolling on scrollbars
      e.preventDefault();
      e.stopPropagation();
      
      if (e.shiftKey && controlConfig.wheelZoom) {
        // Shift+scroll on scrollbar = zoom that axis
        const local = getLocalCoords(e);
        const delta = e.deltaY < 0 ? 1.1 : 0.9;
        const next: Partial<ZoomState> = {};
        
        if (axis === 'x') {
          const anchorX = local.x - state.offsetX;
          const newScaleX = clamp(state.scaleX * delta, minScale, maxScale);
          const ratioX = newScaleX / state.scaleX;
          next.scaleX = newScaleX;
          next.offsetX = state.offsetX - anchorX * (ratioX - 1);
        } else {
          const anchorY = local.y - state.offsetY;
          const newScaleY = clamp(state.scaleY * delta, minScale, maxScale);
          const ratioY = newScaleY / state.scaleY;
          next.scaleY = newScaleY;
          next.offsetY = state.offsetY - anchorY * (ratioY - 1);
        }
        
        interacted.current = true;
        next.disableAnimation = interacted.current && disableAnimation;
        update(next);
      } else if (controlConfig.wheelPan) {
        // Regular scroll on scrollbar = pan
        const panAmount = e.deltaY > 0 ? -30 : 30;
        const next: Partial<ZoomState> = {};
        
        if (axis === 'x' && (mode === 'x' || mode === 'xy')) {
          next.offsetX = Math.min(Math.max(state.offsetX + panAmount, width * (1 - state.scaleX)), 0);
        } else if (axis === 'y' && (mode === 'y' || mode === 'xy')) {
          next.offsetY = Math.min(Math.max(state.offsetY + panAmount, height * (1 - state.scaleY)), 0);
        }
        
        update(next);
      }
    },
    [state, minScale, maxScale, update, mode, getLocalCoords, disableAnimation, controlConfig.wheelZoom, controlConfig.wheelPan, width, height],
  );

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
              onWheel={handleBarWheel('x')}
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
              onWheel={handleBarWheel('y')}
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
      if (!prev) return;
      const { x: localX, y: localY } = getLocalCoords(e);
      pointers.current.set(e.pointerId, { x: localX, y: localY });

      // Handle drag-to-zoom selection rectangle updates
      if (selectStart.current) {
        let x = Math.min(selectStart.current.x, localX);
        let y = Math.min(selectStart.current.y, localY);
        let w = Math.abs(localX - selectStart.current.x);
        let h = Math.abs(localY - selectStart.current.y);
        
        // Constrain selection rectangle based on zoom mode
        if (mode === 'x') {
          // X-only mode: selection should span full height
          y = 0;
          h = height;
        } else if (mode === 'y') {
          // Y-only mode: selection should span full width
          x = 0;
          w = width;
        }
        
        setSelectRect({ x: x + left, y: y + top, w, h });
        return;
      }

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
          // Treat X & Y independently so a previous axis-only zoom is preserved
          const newScaleX = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
          const newScaleY = clamp(pinchStart.current.scaleY * ratio, minScale, maxScale);

          const rX = pinchStart.current.scaleX === 0 ? 1 : newScaleX / pinchStart.current.scaleX;
          const rY = pinchStart.current.scaleY === 0 ? 1 : newScaleY / pinchStart.current.scaleY;

          next.scaleX = newScaleX;
          next.scaleY = newScaleY;
          next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (rX - 1) + panDeltaX;
          if (!config.followLineKey) {
            next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (rY - 1) + panDeltaY;
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

      // Handle single-pointer drag-to-pan with two-mode edge panning
      if (pointers.current.size === 1 && controlConfig.dragPan) {
        // Check if we're not in a drag-to-zoom selection mode
        if (!selectStart.current && !isDoubleClickHold.current) {
          // Two-mode edge panning system for pointer events
          if (controlConfig.edgePanAutoSeek && !dragStart.current) {
            // Auto-seek mode: pointer not started on edge -> gentle auto-pan
            gentleAutoPan(localX, localY);
          } else if (dragStart.current) {
            // Classic drag mode or pointer started on edge
            const dragDistance = Math.hypot(localX - dragStart.current.x, localY - dragStart.current.y);
            
            // Use a 5px threshold to differentiate drag from click
            if (dragDistance > 5) {
              // Mark as dragging and clear tooltip to prevent conflicts
              if (!isDragging) {
                setIsDragging(true);
                dispatch(setTooltipSettingsState({
                  active: false,
                  defaultIndex: undefined,
                  shared: undefined,
                  trigger: undefined,
                  axisId: undefined,
                }));
              }
              
              const dx = localX - prev.x;
              const dy = localY - prev.y;
              
              const next: Partial<ZoomState> = {};
              
              if (mode !== 'y') {
                next.offsetX = state.offsetX + dx;
              }
              if (mode !== 'x') {
                next.offsetY = state.offsetY + dy;
              }
              
              interacted.current = true;
              next.disableAnimation = interacted.current && disableAnimation;
              update(next);
            }
          }
        }
      }
    },
    [state, update, minScale, maxScale, mode, getLocalCoords, disableAnimation, config.followLineKey, layout, controlConfig.pinchZoom, controlConfig.dragPan, controlConfig.edgePan, controlConfig.edgeThreshold, controlConfig.edgePanAutoSeek, controlConfig.allowChartDragPan, checkIfTouchOnScrollBar, width, height, dragToZoom, left, top, dispatch, isDragging, gentleAutoPan],
  );

  // Axis label interaction handlers
  const axisDragRef = useRef<{ axisType: 'x' | 'y'; startValue: number } | null>(null);

  const handleAxisWheel = useCallback((e: React.WheelEvent, axisType: 'x' | 'y') => {
    // Check if this axis type is allowed in the current mode
    if ((mode === 'x' && axisType === 'y') || (mode === 'y' && axisType === 'x')) {
      return; // Don't allow zoom on restricted axis
    }
    
    e.preventDefault();
    e.stopPropagation();
    
    // Clear tooltip when interacting with axis
    dispatch(setTooltipSettingsState({
      active: false,
      defaultIndex: undefined,
      shared: undefined,
      trigger: undefined,
      axisId: undefined,
    }));
    
    // Handle shift+scroll for panning
    if (e.shiftKey && controlConfig.wheelPan) {
      const panAmount = e.deltaY > 0 ? -30 : 30;
      const next: Partial<ZoomState> = {};
      
      if (axisType === 'x' && mode !== 'y') {
        // Shift + scroll on X axis = pan X
        const minOffsetX = width * (1 - state.scaleX);
        next.offsetX = clamp(state.offsetX + panAmount, minOffsetX, 0);
      } else if (axisType === 'y' && mode !== 'x') {
        // Shift + scroll on Y axis = pan Y
        const minOffsetY = height * (1 - state.scaleY);
        next.offsetY = clamp(state.offsetY + panAmount, minOffsetY, 0);
      }
      
      if (Object.keys(next).length > 0) {
        update(next);
      }
      return;
    }
    
    // Regular wheel = zoom (only if wheelZoom is enabled)
    if (!controlConfig.wheelZoom) return;
    
    interacted.current = true;
    const local = getLocalCoords(e);
    const anchorX = local.x - state.offsetX;
    const anchorY = local.y - state.offsetY;
    const delta = e.deltaY < 0 ? 1.1 : 0.9;

    const next: Partial<ZoomState> = {};

    if (axisType === 'y' && mode !== 'x') {
      const newScaleY = clamp(state.scaleY * delta, minScale, maxScale);
      const ratioY = newScaleY / state.scaleY;
      next.scaleY = newScaleY;
      if (!config.followLineKey) {
        next.offsetY = state.offsetY - anchorY * (ratioY - 1);
      }
    } else if (axisType === 'x' && mode !== 'y') {
      const newScaleX = clamp(state.scaleX * delta, minScale, maxScale);
      const ratioX = newScaleX / state.scaleX;
      next.scaleX = newScaleX;
      next.offsetX = state.offsetX - anchorX * (ratioX - 1);
    }

    next.disableAnimation = interacted.current && disableAnimation;
    update(next);
  }, [mode, controlConfig.wheelZoom, controlConfig.wheelPan, state, minScale, maxScale, update, getLocalCoords, disableAnimation, config.followLineKey, dispatch, width, height]);

  const handleAxisDrag = useCallback((e: React.PointerEvent, axisType: 'x' | 'y', action: 'start' | 'move' | 'end') => {
    if (!controlConfig.labelDrag) return;
    
    if (action === 'start') {
      const local = getLocalCoords(e);
      axisDragRef.current = {
        axisType,
        startValue: axisType === 'x' ? local.x : local.y,
      };
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } else if (action === 'move' && axisDragRef.current) {
      const local = getLocalCoords(e);
      const currentValue = axisType === 'x' ? local.x : local.y;
      const movement = currentValue - axisDragRef.current.startValue;
      
      // Update the start value for continuous dragging
      axisDragRef.current.startValue = currentValue;
      
      const next: Partial<ZoomState> = {};
      if (axisType === 'x') {
        next.offsetX = state.offsetX + movement;
      } else {
        next.offsetY = state.offsetY + movement;
      }
      
      update(next);
    } else if (action === 'end') {
      axisDragRef.current = null;
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    }
  }, [controlConfig.labelDrag, state.offsetX, state.offsetY, update, getLocalCoords]);

  const handleAxisTouch = useCallback((e: React.TouchEvent, axisType: 'x' | 'y', action: 'start' | 'move' | 'end') => {
    // Check if this axis type is allowed in the current mode
    if ((mode === 'x' && axisType === 'y') || (mode === 'y' && axisType === 'x')) {
      return; // Don't allow zoom on restricted axis
    }
    
    if (!controlConfig.pinchZoom) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const touches = Array.from(e.touches);
    
    if (action === 'start' && touches.length >= 2) {
      const [t1, t2] = touches;
      const local1 = getLocalCoords({ clientX: t1.clientX, clientY: t1.clientY });
      const local2 = getLocalCoords({ clientX: t2.clientX, clientY: t2.clientY });
      const distance = Math.hypot(local1.x - local2.x, local1.y - local2.y);
      const centerX = (local1.x + local2.x) / 2;
      const centerY = (local1.y + local2.y) / 2;
      
      pinchStart.current = {
        distance,
        scaleX: state.scaleX,
        scaleY: state.scaleY,
        offsetX: state.offsetX,
        offsetY: state.offsetY,
        centerX: centerX - state.offsetX,
        centerY: centerY - state.offsetY,
      };
    } else if (action === 'move' && touches.length >= 2 && pinchStart.current) {
      const [t1, t2] = touches;
      const local1 = getLocalCoords({ clientX: t1.clientX, clientY: t1.clientY });
      const local2 = getLocalCoords({ clientX: t2.clientX, clientY: t2.clientY });
      const currentDistance = Math.hypot(local1.x - local2.x, local1.y - local2.y);
      const rawRatio        = pinchStart.current.distance === 0
                               ? 1
                               : currentDistance / pinchStart.current.distance;
      const ratio           = damp(rawRatio);   // ≈ 15 % sensitivity
      
      const next: Partial<ZoomState> = {};
      
      if (axisType === 'y' && mode !== 'x') {
        // Only zoom Y axis when pinching on Y axis
        const newScaleY = clamp(pinchStart.current.scaleY * ratio, minScale, maxScale);
        const ratioY = pinchStart.current.scaleY === 0 ? 1 : newScaleY / pinchStart.current.scaleY;
        next.scaleY = newScaleY;
        if (!config.followLineKey) {
          next.offsetY = pinchStart.current.offsetY - pinchStart.current.centerY * (ratioY - 1);
        }
      } else if (axisType === 'x' && mode !== 'y') {
        // Only zoom X axis when pinching on X axis (don't affect Y axis)
        const newScaleX = clamp(pinchStart.current.scaleX * ratio, minScale, maxScale);
        const ratioX = pinchStart.current.scaleX === 0 ? 1 : newScaleX / pinchStart.current.scaleX;
        next.scaleX = newScaleX;
        // Do NOT set scaleY when zooming X axis on mobile
        next.offsetX = pinchStart.current.offsetX - pinchStart.current.centerX * (ratioX - 1);
      }
      
      interacted.current = true;
      next.disableAnimation = interacted.current && disableAnimation;
      update(next);
      
      // Refresh the whole baseline, including distance & center
      // This allows smooth direction changes during axis pinch zoom
      if (pinchStart.current) {
        const currentCenterX = (local1.x + local2.x) / 2;
        const currentCenterY = (local1.y + local2.y) / 2;
        
        pinchStart.current.distance = currentDistance;
        pinchStart.current.centerX = currentCenterX - (next.offsetX ?? state.offsetX);
        pinchStart.current.centerY = currentCenterY - (next.offsetY ?? state.offsetY);

        // Keep the scale/offset in sync so we still avoid compounding
        pinchStart.current.scaleX = next.scaleX ?? state.scaleX;
        pinchStart.current.scaleY = next.scaleY ?? state.scaleY;
        pinchStart.current.offsetX = next.offsetX ?? state.offsetX;
        pinchStart.current.offsetY = next.offsetY ?? state.offsetY;
      }
    } else if (action === 'end') {
      pinchStart.current = null;
    }
  }, [mode, controlConfig.pinchZoom, state, minScale, maxScale, update, getLocalCoords, disableAnimation, config.followLineKey]);

  const axisInteractionValue = React.useMemo(() => ({
    handleAxisWheel,
    handleAxisDrag,
    handleAxisTouch,
    isLabelInteractionEnabled: controlConfig.labelDrag || controlConfig.wheelPan,
  }), [handleAxisWheel, handleAxisDrag, handleAxisTouch, controlConfig.labelDrag, controlConfig.wheelPan]);
  
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGGElement>) => {
      if (preventConfig.contextMenu && e.button === 2) {
        e.preventDefault();
      }
      
      // Force hide tooltip and start interaction state
      setIsInteracting(true);
      dispatch(setTooltipSettingsState({
        active: false,
        defaultIndex: undefined,
        shared: undefined,
        trigger: undefined,
        axisId: undefined,
      }));
      
      interacted.current = true;
      (e.target as Element).setPointerCapture?.(e.pointerId);
      const { x: localX, y: localY } = getLocalCoords(e);
      
      // Check for double-click-and-hold drag to zoom
      if (dragToZoom && isDoubleClickHold.current && doubleClickPos.current) {
        // Calculate distance from double-click position
        const distance = Math.hypot(localX - doubleClickPos.current.x, localY - doubleClickPos.current.y);
        
        // If we've moved enough distance (3px threshold), start drag to zoom
        if (distance > 3) {
          selectStart.current = doubleClickPos.current;
          setSelectRect({ 
            x: doubleClickPos.current.x + left, 
            y: doubleClickPos.current.y + top, 
            w: 0, 
            h: 0 
          });
          
          // Clear double-click state and timer
          if (doubleClickTimer.current) {
            clearTimeout(doubleClickTimer.current);
            doubleClickTimer.current = null;
          }
          isDoubleClickHold.current = false;
          doubleClickPos.current = null;
          
          pointers.current.set(e.pointerId, { x: localX, y: localY });
          return;
        }
      }
      
      // Standard shift+drag to zoom
      if (dragToZoom && e.shiftKey) {
        selectStart.current = { x: localX, y: localY };
        setSelectRect({ x: localX + left, y: localY + top, w: 0, h: 0 });
        pointers.current.set(e.pointerId, { x: localX, y: localY });
        return;
      }
      
      pointers.current.set(e.pointerId, { x: localX, y: localY });
      
      if (pointers.current.size === 1) {
        // For PC (pointer events), always set drag start to enable panning
        // For touch devices, be more selective to avoid tooltip conflicts
        if (e.pointerType !== 'touch') {
          // PC - always enable drag to pan
          dragStart.current = { x: localX, y: localY };
        } else {
          // Mobile - only enable for edges or scroll bars
          const nearLeftEdge = controlConfig.edgePan && localX < controlConfig.edgeThreshold;
          const nearRightEdge = controlConfig.edgePan && localX > width - controlConfig.edgeThreshold;
          const nearTopEdge = controlConfig.edgePan && localY < controlConfig.edgeThreshold;
          const nearBottomEdge = controlConfig.edgePan && localY > height - controlConfig.edgeThreshold;
          const nearEdge = nearLeftEdge || nearRightEdge || nearTopEdge || nearBottomEdge;
          const onScrollBar = checkIfTouchOnScrollBar(localX, localY);
          
          if (nearEdge || onScrollBar) {
            dragStart.current = { x: localX, y: localY };
          }
        }
      }
      
      if (pointers.current.size === 2 && controlConfig.pinchZoom) {
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
        
        // Initialize two-finger pan tracking
        if (controlConfig.twoFingerPan) {
          twoFingerStart.current = {
            distance,
            centerX,
            centerY,
          };
        }
      }
    },
    [state.scaleX, state.scaleY, state.offsetX, state.offsetY, getLocalCoords, dragToZoom, left, top, controlConfig.pinchZoom, controlConfig.twoFingerPan, preventConfig.contextMenu, dispatch],
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
            cursor: isDragging || dragStart.current ? 'grabbing' : 'grab',
            outline: 'none',
            zIndex: 1000,
            isolation: 'isolate',
          }}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={cleanupInteractionState}
          onBlur={cleanupInteractionState}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={config.resetKey !== 'dbltap' ? handleDoubleClick : undefined}
          onKeyDown={handleKeyDown}
          onFocus={handleOverlayFocus}
          onClick={handleOverlayClick}
          onContextMenu={preventConfig.contextMenu ? (e) => e.preventDefault() : undefined}
        />
        {minimapChildren}
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
