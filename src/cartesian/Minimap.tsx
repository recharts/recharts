import * as React from 'react';
import { useCallback, useRef, useState, ReactElement, PureComponent, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { useChartData } from '../context/chartDataContext';
import { useOffset } from '../context/chartLayoutContext';
import { useSetZoom, useZoom, useAppDispatch, useAppSelector } from '../state/hooks';
import { setTooltipSettingsState } from '../state/tooltipSlice';
import { selectZoomState } from '../state/selectors/zoomSelectors';
import { generatePrefixStyle } from '../util/CssPrefixUtils';
import { Padding } from '../util/types';
import { filterProps } from '../util/ReactUtils';

interface MinimapProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  className?: string;
  padding?: Padding;
  fill?: string;
  stroke?: string;
  viewportFill?: string;
  viewportStroke?: string;
  shadeFill?: string;
  shadeOpacity?: number;
  children?: ReactElement;
  style?: React.CSSProperties;
  /** Position preset - overrides x,y when provided */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Margin from the chart edges when using position presets */
  margin?: number;
  /** Enable scroll to zoom on minimap */
  allowScrollZoom?: boolean;
  /** Enable pinch to zoom on mobile minimap */
  allowPinchZoom?: boolean;
}

export type Props = MinimapProps;

function MinimapInternal(props: Props) {
  const {
    x = 0,
    y = 0,
    width = 120,
    height = 80,
    className,
    padding = { top: 2, right: 2, bottom: 2, left: 2 },
    fill = '#f5f5f5',
    stroke = '#ccc',
    viewportFill = 'transparent',
    viewportStroke = '#666',
    shadeFill = '#000',
    shadeOpacity = 0.3,
    children,
    style,
    position,
    margin = 0,
    allowScrollZoom = true,
    allowPinchZoom = true,
  } = props;

  const chartData = useChartData();
  const { width: plotAreaWidth, height: plotAreaHeight, left: plotAreaLeft, top: plotAreaTop } = useOffset();
  const currentZoom = useZoom();
  const setZoom = useSetZoom();
  const dispatch = useAppDispatch();
  const zoomState = useAppSelector(selectZoomState);
  const overlayRef = useRef<SVGRectElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStart = useRef<{ distance: number; scaleX: number; scaleY: number; offsetX: number; offsetY: number; centerX: number; centerY: number } | null>(null);
  const lastTap = useRef<number>(0);
  const doubleClickTimer = useRef<NodeJS.Timeout | null>(null);
  const isDoubleClickHold = useRef<boolean>(false);
  const doubleClickPos = useRef<{ x: number; y: number } | null>(null);
  const [selectRect, setSelectRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [selectStart, setSelectStart] = useState<{ x: number; y: number } | null>(null);

  const zoomStateRef = useRef(currentZoom);
  useEffect(() => {
    zoomStateRef.current = currentZoom;
  }, [currentZoom]);

  // Add native event listeners for comprehensive scroll prevention
  useEffect(() => {
    const minimap = overlayRef.current;
    if (!minimap) return;
    
    const handleNativeWheel = (e: WheelEvent) => {
      // Always prevent page scroll when over minimap
      e.preventDefault();
    };
    
    const handleNativeTouch = (e: Event) => {
      // Always prevent page scroll on touch
      e.preventDefault();
    };
    
    minimap.addEventListener('wheel', handleNativeWheel, { passive: false, capture: true });
    minimap.addEventListener('touchstart', handleNativeTouch, { passive: false, capture: true });
    minimap.addEventListener('touchmove', handleNativeTouch, { passive: false, capture: true });
    
    return () => {
      minimap.removeEventListener('wheel', handleNativeWheel);
      minimap.removeEventListener('touchstart', handleNativeTouch);
      minimap.removeEventListener('touchmove', handleNativeTouch);
    };
  }, []);

  // Calculate position based on preset or use provided x,y - moved early to avoid initialization issues
  const calculatePosition = (): { x: number; y: number } => {
    if (position && plotAreaWidth && plotAreaHeight) {
      switch (position) {
        case 'top-left':
          return { x: plotAreaLeft + margin, y: plotAreaTop + margin };
        case 'top-right':
          return { x: plotAreaLeft + plotAreaWidth - width - margin, y: plotAreaTop + margin };
        case 'bottom-left':
          return { x: plotAreaLeft + margin, y: plotAreaTop + plotAreaHeight - height - margin };
        case 'bottom-right':
          return { x: plotAreaLeft + plotAreaWidth - width - margin, y: plotAreaTop + plotAreaHeight - height - margin };
        default:
          return { x, y };
      }
    }
    return { x, y };
  };

  const { x: calculatedX, y: calculatedY } = calculatePosition();

  const getLocalCoords = useCallback((e: { clientX: number; clientY: number }) => {
    const rect = overlayRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);



  useEffect(() => {
    const handleDocumentPointerMove = (e: PointerEvent) => {
      if (!dragStart.current) return;
      e.preventDefault();

      const { x: localX, y: localY } = getLocalCoords(e);
      const dx = localX - dragStart.current.x;
      const dy = localY - dragStart.current.y;

      const contentWidth = width - (padding.left || 0) - (padding.right || 0);
      const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);

      const zoomFromRef = zoomStateRef.current;
      const deltaOffsetX = -(dx / contentWidth) * plotAreaWidth * zoomFromRef.scaleX;
      const deltaOffsetY = -(dy / contentHeight) * plotAreaHeight * zoomFromRef.scaleY;

      const newOffsetX = zoomFromRef.offsetX + deltaOffsetX;
      const newOffsetY = zoomFromRef.offsetY + deltaOffsetY;

      const minOffsetX = plotAreaWidth * (1 - zoomFromRef.scaleX);
      const minOffsetY = plotAreaHeight * (1 - zoomFromRef.scaleY);

      setZoom({
        ...zoomFromRef,
        offsetX: Math.min(Math.max(newOffsetX, minOffsetX), 0),
        offsetY: Math.min(Math.max(newOffsetY, minOffsetY), 0),
        disableAnimation: true, // Always disable animation for minimap dragging
      });

      dragStart.current = { x: localX, y: localY };
    };

    const handleDocumentPointerUp = () => {
      setIsDragging(false);
      dragStart.current = null;
    };

    if (isDragging) {
      document.addEventListener('pointermove', handleDocumentPointerMove, { passive: false });
      document.addEventListener('pointerup', handleDocumentPointerUp);
      document.addEventListener('pointercancel', handleDocumentPointerUp);
    }

    return () => {
      document.removeEventListener('pointermove', handleDocumentPointerMove);
      document.removeEventListener('pointerup', handleDocumentPointerUp);
      document.removeEventListener('pointercancel', handleDocumentPointerUp);
    };
  }, [isDragging, getLocalCoords, padding, height, plotAreaHeight, plotAreaWidth, setZoom, width]);

  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGRectElement>) => {
      // ALWAYS prevent page scroll when over minimap
      e.preventDefault();
      e.stopPropagation();
      
      if (!allowScrollZoom && !e.shiftKey) return;
      if (!currentZoom) return;
      
      const local = getLocalCoords(e);
      const contentWidth = width - (padding.left || 0) - (padding.right || 0);
      const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);
      
      if (e.shiftKey) {
        // Shift + scroll = pan
        const panAmount = e.deltaY > 0 ? -30 : 30;
        
        if (e.ctrlKey) {
          // Ctrl + Shift + scroll = pan Y
          const minOffsetY = plotAreaHeight * (1 - currentZoom.scaleY);
          const newOffsetY = Math.min(Math.max(currentZoom.offsetY + panAmount, minOffsetY), 0);
          setZoom({
            ...currentZoom,
            offsetY: newOffsetY,
            disableAnimation: true, // Disable animation for minimap wheel pan
          });
        } else {
          // Shift + scroll = pan X
          const minOffsetX = plotAreaWidth * (1 - currentZoom.scaleX);
          const newOffsetX = Math.min(Math.max(currentZoom.offsetX + panAmount, minOffsetX), 0);
          setZoom({
            ...currentZoom,
            offsetX: newOffsetX,
            disableAnimation: true, // Disable animation for minimap wheel pan
          });
        }
      } else {
        // Regular scroll = zoom
        const delta = e.deltaY < 0 ? 1.1 : 0.9;
        const normalizedX = (local.x - (padding.left || 0)) / contentWidth;
        const normalizedY = (local.y - (padding.top || 0)) / contentHeight;
        
        const anchorX = normalizedX * plotAreaWidth;
        const anchorY = normalizedY * plotAreaHeight;
        
        const newScaleX = Math.min(Math.max(currentZoom.scaleX * delta, 1), 20);
        const newScaleY = Math.min(Math.max(currentZoom.scaleY * delta, 1), 20);
        
        const newOffsetX = anchorX - ((anchorX - currentZoom.offsetX) / currentZoom.scaleX) * newScaleX;
        const newOffsetY = anchorY - ((anchorY - currentZoom.offsetY) / currentZoom.scaleY) * newScaleY;
        
        // Apply boundaries
        const minOffsetX = plotAreaWidth * (1 - newScaleX);
        const minOffsetY = plotAreaHeight * (1 - newScaleY);
        const clampedOffsetX = Math.min(Math.max(newOffsetX, minOffsetX), 0);
        const clampedOffsetY = Math.min(Math.max(newOffsetY, minOffsetY), 0);
        
        setZoom({
          ...currentZoom,
          scaleX: newScaleX,
          scaleY: newScaleY,
          offsetX: clampedOffsetX,
          offsetY: clampedOffsetY,
          disableAnimation: true, // Disable animation for minimap wheel zoom
        });
      }
    },
    [allowScrollZoom, currentZoom, getLocalCoords, setZoom, width, height, padding, plotAreaWidth, plotAreaHeight],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<SVGRectElement>) => {
      if (!allowPinchZoom) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      Array.from(e.changedTouches).forEach((t: React.Touch) => {
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        pointers.current.set(t.identifier, local);
      });
      
      // Handle double-tap for drag-to-zoom
      if (e.changedTouches.length === 1) {
        const now = Date.now();
        const t = e.changedTouches[0];
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        
        if (now - lastTap.current < 300 && doubleClickPos.current) {
          const distance = Math.hypot(local.x - doubleClickPos.current.x, local.y - doubleClickPos.current.y);
          if (distance < 50) {
            isDoubleClickHold.current = true;
            doubleClickPos.current = local;
            return;
          }
        }
        
        lastTap.current = now;
        doubleClickPos.current = local;
      }
      
      // Handle pinch start
      if (pointers.current.size >= 2 && currentZoom) {
        const [a, b] = Array.from(pointers.current.values());
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        const centerX = (a.x + b.x) / 2;
        const centerY = (a.y + b.y) / 2;
        
        pinchStart.current = {
          distance,
          scaleX: currentZoom.scaleX,
          scaleY: currentZoom.scaleY,
          offsetX: currentZoom.offsetX,
          offsetY: currentZoom.offsetY,
          centerX,
          centerY,
        };
      }
    },
    [allowPinchZoom, getLocalCoords, currentZoom],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<SVGRectElement>) => {
      if (!allowPinchZoom) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      Array.from(e.changedTouches).forEach((t: React.Touch) => {
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        pointers.current.set(t.identifier, local);
      });
      
      // Handle double-tap drag to zoom
      if (isDoubleClickHold.current && doubleClickPos.current && pointers.current.size === 1) {
        const t = e.changedTouches[0];
        const local = getLocalCoords({ clientX: t.clientX, clientY: t.clientY });
        
        const distance = Math.hypot(local.x - doubleClickPos.current.x, local.y - doubleClickPos.current.y);
        
        if (distance > 15 && !selectStart) {
          setSelectStart(doubleClickPos.current);
          setSelectRect({
            x: doubleClickPos.current.x + calculatedX,
            y: doubleClickPos.current.y + calculatedY,
            w: 0,
            h: 0
          });
          isDoubleClickHold.current = false;
        }
        
        if (selectStart) {
          const rectX = Math.min(selectStart.x, local.x);
          const rectY = Math.min(selectStart.y, local.y);
          const rectW = Math.abs(local.x - selectStart.x);
          const rectH = Math.abs(local.y - selectStart.y);
          setSelectRect({
            x: rectX + calculatedX,
            y: rectY + calculatedY,
            w: rectW,
            h: rectH
          });
          return;
        }
      }
      
      // Handle pinch zoom
      if (pointers.current.size >= 2 && pinchStart.current && currentZoom) {
        const [a, b] = Array.from(pointers.current.values());
        const currentDistance = Math.hypot(a.x - b.x, a.y - b.y);
        const ratio = pinchStart.current.distance === 0 ? 1 : currentDistance / pinchStart.current.distance;
        
        // Make pinch zoom responsive but controlled - only apply meaningful changes  
        if (Math.abs(ratio - 1) < 0.08) return; // Filter out very small movements
        
        // Apply much smaller zoom increments to reduce sensitivity
        const zoomFactor = 1 + (ratio - 1) * 0.03; // Only apply 3% of the actual ratio change
        const clampedRatio = Math.min(Math.max(zoomFactor, 0.99), 1.01); // Much smaller range
        const centerX = (a.x + b.x) / 2;
        const centerY = (a.y + b.y) / 2;
        
        const contentWidth = width - (padding.left || 0) - (padding.right || 0);
        const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);
        
        const normalizedX = (centerX - (padding.left || 0)) / contentWidth;
        const normalizedY = (centerY - (padding.top || 0)) / contentHeight;
        
        const anchorX = normalizedX * plotAreaWidth;
        const anchorY = normalizedY * plotAreaHeight;
        
        const newScaleX = Math.min(Math.max(currentZoom.scaleX * clampedRatio, 1), 20);
        const newScaleY = Math.min(Math.max(currentZoom.scaleY * clampedRatio, 1), 20);
        
        const newOffsetX = anchorX - ((anchorX - currentZoom.offsetX) / currentZoom.scaleX) * newScaleX;
        const newOffsetY = anchorY - ((anchorY - currentZoom.offsetY) / currentZoom.scaleY) * newScaleY;
        
        setZoom({
          ...currentZoom,
          scaleX: newScaleX,
          scaleY: newScaleY,
          offsetX: newOffsetX,
          offsetY: newOffsetY,
          disableAnimation: true, // Disable animation for minimap touch zoom
        });
      }
    },
    [allowPinchZoom, getLocalCoords, isDoubleClickHold, doubleClickPos, selectStart, setSelectStart, setSelectRect, calculatedX, calculatedY, currentZoom, setZoom, width, height, padding, plotAreaWidth, plotAreaHeight],
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent<SVGRectElement>) => {
      if (!allowPinchZoom) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      Array.from(e.changedTouches).forEach((t: React.Touch) => {
        pointers.current.delete(t.identifier);
      });
      
      if (pointers.current.size < 2) {
        pinchStart.current = null;
      }
      
      if (pointers.current.size === 0) {
        setIsDragging(false);
        isDoubleClickHold.current = false;
        
        // Handle drag-to-zoom completion
        if (selectStart && selectRect && selectRect.w > 10 && selectRect.h > 10 && currentZoom) {
          const contentWidth = width - (padding.left || 0) - (padding.right || 0);
          const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);
          
          const selectionStartX = (selectRect.x - calculatedX - (padding.left || 0)) / contentWidth;
          const selectionEndX = (selectRect.x + selectRect.w - calculatedX - (padding.left || 0)) / contentWidth;
          const selectionStartY = (selectRect.y - calculatedY - (padding.top || 0)) / contentHeight;
          const selectionEndY = (selectRect.y + selectRect.h - calculatedY - (padding.top || 0)) / contentHeight;
          
          const selectionWidth = Math.abs(selectionEndX - selectionStartX);
          const selectionHeight = Math.abs(selectionEndY - selectionStartY);
          
          if (selectionWidth > 0 && selectionHeight > 0) {
            const newScaleX = Math.min(1 / selectionWidth, 20);
            const newScaleY = Math.min(1 / selectionHeight, 20);
            
            const centerSelectionX = (selectionStartX + selectionEndX) / 2;
            const centerSelectionY = (selectionStartY + selectionEndY) / 2;
            
            const newOffsetX = plotAreaWidth / 2 - centerSelectionX * plotAreaWidth * newScaleX;
            const newOffsetY = plotAreaHeight / 2 - centerSelectionY * plotAreaHeight * newScaleY;
            
            setZoom({
              ...currentZoom,
              scaleX: newScaleX,
              scaleY: newScaleY,
              offsetX: newOffsetX,
              offsetY: newOffsetY,
              disableAnimation: true, // Disable animation for minimap drag-to-zoom
            });
          }
        }
        
        setSelectStart(null);
        setSelectRect(null);
      }
    },
    [allowPinchZoom, selectStart, selectRect, currentZoom, setZoom, width, height, padding, calculatedX, calculatedY, plotAreaWidth, plotAreaHeight],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!currentZoom || (currentZoom.scaleX <= 1 && currentZoom.scaleY <= 1)) return;

      dispatch(
        setTooltipSettingsState({
          active: false,
          defaultIndex: undefined,
          shared: undefined,
          trigger: undefined,
          axisId: undefined,
        }),
      );

      (e.target as Element).setPointerCapture?.(e.pointerId);
      const { x: localX, y: localY } = getLocalCoords(e);

      const contentWidth = width - (padding.left || 0) - (padding.right || 0);
      const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);

      const viewportWidth = contentWidth / currentZoom.scaleX;
      const viewportHeight = contentHeight / currentZoom.scaleY;

      const viewportX = (padding.left || 0) + (-currentZoom.offsetX / (plotAreaWidth * currentZoom.scaleX)) * contentWidth;
      const viewportY =
        (padding.top || 0) + (-currentZoom.offsetY / (plotAreaHeight * currentZoom.scaleY)) * contentHeight;

      const clickInViewport =
        localX >= viewportX &&
        localX <= viewportX + viewportWidth &&
        localY >= viewportY &&
        localY <= viewportY + viewportHeight;

      if (clickInViewport) {
        setIsDragging(true);
        dragStart.current = { x: localX, y: localY };
      } else {
        const newCenterX = localX - (padding.left || 0);
        const newCenterY = localY - (padding.top || 0);

        const normalizedCenterX = newCenterX / contentWidth;
        const normalizedCenterY = newCenterY / contentHeight;

        const newOffsetX = -normalizedCenterX * plotAreaWidth * currentZoom.scaleX + plotAreaWidth / 2;
        const newOffsetY = -normalizedCenterY * plotAreaHeight * currentZoom.scaleY + plotAreaHeight / 2;

        const minOffsetX = plotAreaWidth * (1 - currentZoom.scaleX);
        const minOffsetY = plotAreaHeight * (1 - currentZoom.scaleY);

        setZoom({
          ...currentZoom,
          offsetX: Math.min(Math.max(newOffsetX, minOffsetX), 0),
          offsetY: Math.min(Math.max(newOffsetY, minOffsetY), 0),
          disableAnimation: true, // Disable animation for minimap pointer click
        });
      }
    },
    [currentZoom, dispatch, getLocalCoords, height, padding, plotAreaHeight, plotAreaWidth, setZoom, width],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<SVGRectElement>) => {
      if (!currentZoom) return;
      
      let handled = false;
      
      // Zoom controls
      const isZoomIn = e.key === '+' || e.key === '=';
      const isZoomOut = e.key === '-' || e.key === '_';
      
      if (isZoomIn || isZoomOut) {
        const delta = isZoomIn ? 1.1 : 0.9;
        const centerX = width / 2;
        const centerY = height / 2;
        const contentWidth = width - (padding.left || 0) - (padding.right || 0);
        const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);
        
        const normalizedX = (centerX - (padding.left || 0)) / contentWidth;
        const normalizedY = (centerY - (padding.top || 0)) / contentHeight;
        
        const anchorX = normalizedX * plotAreaWidth;
        const anchorY = normalizedY * plotAreaHeight;
        
        const newScaleX = Math.min(Math.max(currentZoom.scaleX * delta, 1), 20);
        const newScaleY = Math.min(Math.max(currentZoom.scaleY * delta, 1), 20);
        
        const newOffsetX = anchorX - ((anchorX - currentZoom.offsetX) / currentZoom.scaleX) * newScaleX;
        const newOffsetY = anchorY - ((anchorY - currentZoom.offsetY) / currentZoom.scaleY) * newScaleY;
        
        // Apply boundaries
        const minOffsetX = plotAreaWidth * (1 - newScaleX);
        const minOffsetY = plotAreaHeight * (1 - newScaleY);
        const clampedOffsetX = Math.min(Math.max(newOffsetX, minOffsetX), 0);
        const clampedOffsetY = Math.min(Math.max(newOffsetY, minOffsetY), 0);
        
        setZoom({
          ...currentZoom,
          scaleX: newScaleX,
          scaleY: newScaleY,
          offsetX: clampedOffsetX,
          offsetY: clampedOffsetY,
          disableAnimation: true, // Disable animation for minimap keyboard zoom
        });
        handled = true;
      }
      
      // Pan controls
      if (e.key.startsWith('Arrow')) {
        const panAmount = e.shiftKey ? 50 : 20;
        
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          const direction = e.key === 'ArrowLeft' ? panAmount : -panAmount;
          const minOffsetX = plotAreaWidth * (1 - currentZoom.scaleX);
          const newOffsetX = Math.min(Math.max(currentZoom.offsetX + direction, minOffsetX), 0);
          setZoom({
            ...currentZoom,
            offsetX: newOffsetX,
            disableAnimation: true, // Disable animation for minimap keyboard pan
          });
          handled = true;
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          const direction = e.key === 'ArrowUp' ? panAmount : -panAmount;
          const minOffsetY = plotAreaHeight * (1 - currentZoom.scaleY);
          const newOffsetY = Math.min(Math.max(currentZoom.offsetY + direction, minOffsetY), 0);
          setZoom({
            ...currentZoom,
            offsetY: newOffsetY,
            disableAnimation: true, // Disable animation for minimap keyboard pan
          });
          handled = true;
        }
      }
      
      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [currentZoom, setZoom, width, height, padding, plotAreaWidth, plotAreaHeight],
  );

  if (!chartData || !chartData.length || !currentZoom) {
    return null;
  }

  const layerClass = clsx('recharts-minimap', className);
  const userSelectStyle = generatePrefixStyle('userSelect', 'none');
  const contentWidth = width - (padding.left || 0) - (padding.right || 0);
  const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);
  const contentX = calculatedX + (padding.left || 0);
  const contentY = calculatedY + (padding.top || 0);

  const isZoomed = currentZoom.scaleX > 1 || currentZoom.scaleY > 1;
  const viewportWidth = Math.min(contentWidth / currentZoom.scaleX, contentWidth);
  const viewportHeight = Math.min(contentHeight / currentZoom.scaleY, contentHeight);

  const viewportX = contentX + (-currentZoom.offsetX / (plotAreaWidth * currentZoom.scaleX)) * contentWidth;
  const viewportY = contentY + (-currentZoom.offsetY / (plotAreaHeight * currentZoom.scaleY)) * contentHeight;

  const combinedStyle = {
    ...userSelectStyle,
    ...style,
  };

  return (
    <Layer className={layerClass} style={combinedStyle}>
      <rect
        x={calculatedX}
        y={calculatedY}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        strokeWidth={1}
      />

      <g clipPath={`url(#minimap-clip-${calculatedX}-${calculatedY})`}>
        <defs>
          <clipPath id={`minimap-clip-${calculatedX}-${calculatedY}`}>
            <rect x={contentX} y={contentY} width={contentWidth} height={contentHeight} />
          </clipPath>
        </defs>
        {children &&
          React.cloneElement(children, {
            x: contentX,
            y: contentY,
            width: contentWidth,
            height: contentHeight,
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            compact: true,
            data: chartData,
          })}
      </g>

      {isZoomed && (
        <>
          {viewportY > contentY && (
            <rect
              x={contentX}
              y={contentY}
              width={contentWidth}
              height={viewportY - contentY}
              fill={shadeFill}
              opacity={shadeOpacity}
            />
          )}
          {viewportY + viewportHeight < contentY + contentHeight && (
            <rect
              x={contentX}
              y={viewportY + viewportHeight}
              width={contentWidth}
              height={contentY + contentHeight - (viewportY + viewportHeight)}
              fill={shadeFill}
              opacity={shadeOpacity}
            />
          )}
          {viewportX > contentX && (
            <rect
              x={contentX}
              y={Math.max(viewportY, contentY)}
              width={viewportX - contentX}
              height={Math.min(viewportHeight, contentY + contentHeight - Math.max(viewportY, contentY))}
              fill={shadeFill}
              opacity={shadeOpacity}
            />
          )}
          {viewportX + viewportWidth < contentX + contentWidth && (
            <rect
              x={viewportX + viewportWidth}
              y={Math.max(viewportY, contentY)}
              width={contentX + contentWidth - (viewportX + viewportWidth)}
              height={Math.min(viewportHeight, contentY + contentHeight - Math.max(viewportY, contentY))}
              fill={shadeFill}
              opacity={shadeOpacity}
            />
          )}
        </>
      )}

      {isZoomed && (
        <rect
          x={Math.max(viewportX, contentX)}
          y={Math.max(viewportY, contentY)}
          width={Math.min(viewportWidth, contentX + contentWidth - Math.max(viewportX, contentX))}
          height={Math.min(viewportHeight, contentY + contentHeight - Math.max(viewportY, contentY))}
          fill={viewportFill}
          stroke={viewportStroke}
          strokeWidth={1}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        />
      )}

      <rect
        ref={overlayRef}
        x={contentX}
        y={contentY}
        width={contentWidth}
        height={contentHeight}
        fill="transparent"
        pointerEvents="all"
        tabIndex={0}
        style={{
          cursor: isDragging ? 'grabbing' : isZoomed ? 'grab' : 'default',
          touchAction: 'none',
          outline: 'none',
        }}
        onPointerDown={handlePointerDown}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
      />
      
      {/* Selection rectangle for drag-to-zoom */}
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
    </Layer>
  );
}

export class Minimap extends PureComponent<Props> {
  static displayName = 'Minimap';

  static defaultProps = {
    width: 120,
    height: 80,
    padding: { top: 2, right: 2, bottom: 2, left: 2 },
    fill: '#f5f5f5',
    stroke: '#ccc',
    viewportFill: 'transparent',
    viewportStroke: '#666',
    shadeFill: '#000',
    shadeOpacity: 0.3,
    margin: 10,
    allowScrollZoom: true,
    allowPinchZoom: true,
  };

  render() {
    return <MinimapInternal {...this.props} />;
  }
} 