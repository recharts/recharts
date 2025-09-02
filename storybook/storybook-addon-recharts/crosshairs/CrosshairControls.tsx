import React, { useState, useCallback } from 'react';

export type CrosshairType = {
  id: number;
  x: number;
  y: number;
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
        const newCrosshair = { id: Date.now(), x, y };
        setCrosshairs(prev => [...prev, newCrosshair]);
        props?.onCrosshairAdd?.(newCrosshair);
        setIsAdding(false);
        setFollowerCrosshair(null);
      }
    },
    [isAdding, props],
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

type CrosshairControlsProps = {
  crosshairs: CrosshairType[];
  isAdding: boolean;
  onAddCrosshair: () => void;
  onDeleteCrosshair: (id: number) => void;
};

export const CrosshairControls = ({
  crosshairs,
  isAdding,
  onAddCrosshair,
  onDeleteCrosshair,
}: CrosshairControlsProps) => {
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
