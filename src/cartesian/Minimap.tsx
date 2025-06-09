import * as React from 'react';
import { useCallback, useRef, useState, ReactElement, PureComponent } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { useChartData } from '../context/chartDataContext';
import { useOffset } from '../context/chartLayoutContext';
import { useSetZoom, useZoom } from '../state/hooks';
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
  } = props;

  const chartData = useChartData();
  const { width: plotAreaWidth, height: plotAreaHeight, left: plotAreaLeft, top: plotAreaTop } = useOffset();
  const currentZoom = useZoom();
  const setZoom = useSetZoom();
  const overlayRef = useRef<SVGRectElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);

  // Calculate position based on preset or use provided x,y
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

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      e.stopPropagation();
      if (!currentZoom || (currentZoom.scaleX <= 1 && currentZoom.scaleY <= 1)) return;
      
      (e.target as Element).setPointerCapture?.(e.pointerId);
      const { x: localX, y: localY } = getLocalCoords(e);
      
      // Check if we're clicking inside the viewport rectangle
      const contentWidth = width - (padding.left || 0) - (padding.right || 0);
      const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);
      
      const viewportWidth = contentWidth / currentZoom.scaleX;
      const viewportHeight = contentHeight / currentZoom.scaleY;
      
      const viewportX = (padding.left || 0) + (-currentZoom.offsetX / (plotAreaWidth * currentZoom.scaleX)) * contentWidth;
      const viewportY = (padding.top || 0) + (-currentZoom.offsetY / (plotAreaHeight * currentZoom.scaleY)) * contentHeight;
      
      const clickInViewport = 
        localX >= viewportX && localX <= viewportX + viewportWidth &&
        localY >= viewportY && localY <= viewportY + viewportHeight;
      
      if (clickInViewport) {
        // Start dragging from current position
        setIsDragging(true);
        dragStart.current = { x: localX, y: localY };
      } else {
        // Click outside viewport - jump to that position
        const newCenterX = localX - (padding.left || 0);
        const newCenterY = localY - (padding.top || 0);
        
        const normalizedCenterX = newCenterX / contentWidth;
        const normalizedCenterY = newCenterY / contentHeight;
        
        const newOffsetX = -normalizedCenterX * plotAreaWidth * currentZoom.scaleX + plotAreaWidth / 2;
        const newOffsetY = -normalizedCenterY * plotAreaHeight * currentZoom.scaleY + plotAreaHeight / 2;
        
        // Clamp offsets
        const minOffsetX = plotAreaWidth * (1 - currentZoom.scaleX);
        const minOffsetY = plotAreaHeight * (1 - currentZoom.scaleY);
        
        setZoom({
          ...currentZoom,
          offsetX: Math.min(Math.max(newOffsetX, minOffsetX), 0),
          offsetY: Math.min(Math.max(newOffsetY, minOffsetY), 0),
        });
      }
    },
    [currentZoom, setZoom, getLocalCoords, width, height, padding, plotAreaWidth, plotAreaHeight]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      e.stopPropagation();
      if (!isDragging || !dragStart.current || !currentZoom) return;
      
      const { x: localX, y: localY } = getLocalCoords(e);
      const dx = localX - dragStart.current.x;
      const dy = localY - dragStart.current.y;
      
      const contentWidth = width - (padding.left || 0) - (padding.right || 0);
      const contentHeight = height - (padding.top || 0) - (padding.bottom || 0);
      
      const deltaOffsetX = -(dx / contentWidth) * plotAreaWidth * currentZoom.scaleX;
      const deltaOffsetY = -(dy / contentHeight) * plotAreaHeight * currentZoom.scaleY;
      
      const newOffsetX = currentZoom.offsetX + deltaOffsetX;
      const newOffsetY = currentZoom.offsetY + deltaOffsetY;
      
      // Clamp offsets
      const minOffsetX = plotAreaWidth * (1 - currentZoom.scaleX);
      const minOffsetY = plotAreaHeight * (1 - currentZoom.scaleY);
      
      setZoom({
        ...currentZoom,
        offsetX: Math.min(Math.max(newOffsetX, minOffsetX), 0),
        offsetY: Math.min(Math.max(newOffsetY, minOffsetY), 0),
      });
      
      dragStart.current = { x: localX, y: localY };
    },
    [isDragging, currentZoom, setZoom, getLocalCoords, width, height, padding, plotAreaWidth, plotAreaHeight]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<SVGRectElement>) => {
      e.stopPropagation();
      (e.target as Element).releasePointerCapture?.(e.pointerId);
      setIsDragging(false);
      dragStart.current = null;
    },
    []
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

  // Calculate viewport dimensions and position
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
      {/* Background */}
      <rect
        x={calculatedX}
        y={calculatedY}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        strokeWidth={1}
      />
      
      {/* Chart preview */}
      <g clipPath={`url(#minimap-clip-${calculatedX}-${calculatedY})`}>
        <defs>
          <clipPath id={`minimap-clip-${calculatedX}-${calculatedY}`}>
            <rect x={contentX} y={contentY} width={contentWidth} height={contentHeight} />
          </clipPath>
        </defs>
        {children && React.cloneElement(children, {
          x: contentX,
          y: contentY,
          width: contentWidth,
          height: contentHeight,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
          compact: true,
          data: chartData,
        })}
      </g>

      {/* Shaded areas (only when zoomed) */}
      {isZoomed && (
        <>
          {/* Top shade */}
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
          {/* Bottom shade */}
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
          {/* Left shade */}
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
          {/* Right shade */}
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

      {/* Viewport rectangle */}
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

      {/* Invisible overlay for interaction */}
      <rect
        ref={overlayRef}
        x={contentX}
        y={contentY}
        width={contentWidth}
        height={contentHeight}
        fill="transparent"
        pointerEvents="all"
        style={{ cursor: isDragging ? 'grabbing' : (isZoomed ? 'grab' : 'default') }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
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
  };

  render() {
    return <MinimapInternal {...this.props} />;
  }
} 