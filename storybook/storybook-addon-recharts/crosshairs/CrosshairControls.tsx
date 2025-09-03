import React, { useState, useCallback } from 'react';
import { useRechartsInspectorState } from '../RechartsInspectorDecorator';
import { Crosshair } from './Crosshair';

// Array of 10 bright, contrasting colors
const CROSSHAIR_COLORS = [
  '#FF0000', // Red
  '#00FF00', // Lime
  '#0000FF', // Blue
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#FFFF00', // Yellow
  '#FF8000', // Orange
  '#8000FF', // Purple
  '#FF0080', // Pink
  '#80FF00', // Chartreuse
];

const getCrosshairColor = (index: number): string => {
  return CROSSHAIR_COLORS[index % CROSSHAIR_COLORS.length];
};

/**
 * Blanket component is a svg component that darkens the background a little bit.
 * @constructor
 */
export function Blanket({
  fill = 'rgba(190, 190, 190, 0.4)',
  onClick,
  onMouseMove,
  onMouseLeave,
  pointerEvents = 'none',
}: {
  fill?: string;
  onClick?: (e: React.MouseEvent) => void;
  onMouseMove?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  pointerEvents?: 'none' | 'auto';
}) {
  return (
    <rect
      x={0}
      y={0}
      width="100%"
      height="100%"
      fill={fill}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1000, pointerEvents }}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    />
  );
}

export type CrosshairType = {
  id: number;
  x: number;
  y: number;
  color: string;
};

export type UseCrosshairManagerProps = {
  onCrosshairAdd?: (crosshair: CrosshairType) => void;
  onCrosshairDelete?: (id: number) => void;
};

export type UseCrosshairManagerReturn = {
  crosshairs: CrosshairType[];
  isAdding: boolean;
  followerCrosshair: { x: number; y: number } | null;
  onAddCrosshair: () => void;
  onDeleteCrosshair: (id: number) => void;
  onChartClick: (x: number, y: number) => void;
  onChartMouseMove: (x: number, y: number) => void;
  onChartMouseLeave: () => void;
};

export const useCrosshairManager = (props?: UseCrosshairManagerProps): UseCrosshairManagerReturn => {
  const [crosshairs, setCrosshairs] = useState<CrosshairType[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [followerCrosshair, setFollowerCrosshair] = useState<{ x: number; y: number } | null>(null);

  const onAddCrosshair = useCallback(() => {
    setIsAdding(prev => !prev);
  }, []);

  const onDeleteCrosshair = useCallback(
    (id: number) => {
      setCrosshairs(prev => prev.filter(c => c.id !== id));
      props?.onCrosshairDelete?.(id);
    },
    [props],
  );

  const onChartClick = useCallback(
    (x: number, y: number) => {
      if (isAdding) {
        const newCrosshair = {
          id: Date.now(),
          x,
          y,
          color: getCrosshairColor(crosshairs.length),
        };
        setCrosshairs(prev => [...prev, newCrosshair]);
        props?.onCrosshairAdd?.(newCrosshair);
        setIsAdding(false);
        setFollowerCrosshair(null);
      }
    },
    [isAdding, props, crosshairs.length],
  );

  const onChartMouseMove = useCallback(
    (x: number, y: number) => {
      if (isAdding) {
        setFollowerCrosshair({ x, y });
      }
    },
    [isAdding],
  );

  const onChartMouseLeave = useCallback(() => {
    setFollowerCrosshair(null);
  }, []);

  return {
    crosshairs,
    isAdding,
    followerCrosshair,
    onAddCrosshair,
    onDeleteCrosshair,
    onChartClick,
    onChartMouseMove,
    onChartMouseLeave,
  };
};

export const CrosshairControls = ({
  crosshairs,
  isAdding,
  onAddCrosshair,
  onDeleteCrosshair,
}: {
  crosshairs: CrosshairType[];
  isAdding: boolean;
  onAddCrosshair: () => void;
  onDeleteCrosshair: (id: number) => void;
}) => {
  const { crosshairControlsEnabled } = useRechartsInspectorState();

  if (!crosshairControlsEnabled) {
    return null;
  }

  return (
    <div>
      <button type="button" onClick={onAddCrosshair} style={{ marginBottom: '10px' }}>
        {isAdding ? 'Cancel' : 'Add crosshair'}
      </button>
      <h4>Crosshairs:</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {crosshairs.map(crosshair => (
          <li key={crosshair.id} style={{ marginBottom: '5px' }}>
            ({crosshair.x.toFixed(0)}, {crosshair.y.toFixed(0)})
            <button type="button" onClick={() => onDeleteCrosshair(crosshair.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const RenderCrosshairs = ({
  crosshairs,
  followerCrosshair,
  onChartClick,
  onChartMouseMove,
  onChartMouseLeave,
  isAdding,
}: {
  crosshairs: CrosshairType[];
  followerCrosshair: { x: number; y: number } | null;
  onChartClick: (x: number, y: number) => void;
  onChartMouseMove: (x: number, y: number) => void;
  onChartMouseLeave: () => void;
  isAdding: boolean;
}) => {
  const { crosshairControlsEnabled } = useRechartsInspectorState();
  if (!crosshairControlsEnabled) {
    return null;
  }
  return (
    <>
      {isAdding && (
        <Blanket
          fill="transparent"
          pointerEvents="auto"
          onClick={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            onChartClick(e.clientX - rect.left, e.clientY - rect.top);
          }}
          onMouseMove={e => {
            e.preventDefault();
            const rect = e.currentTarget.getBoundingClientRect();
            onChartMouseMove(e.clientX - rect.left, e.clientY - rect.top);
          }}
          onMouseLeave={onChartMouseLeave}
        />
      )}
      {crosshairs.map(crosshair => (
        <Crosshair key={crosshair.id} x={crosshair.x} y={crosshair.y} color={crosshair.color} />
      ))}
      {followerCrosshair && (
        <Crosshair
          key="follower"
          x={followerCrosshair.x}
          y={followerCrosshair.y}
          color={getCrosshairColor(crosshairs.length)}
        />
      )}
    </>
  );
};
