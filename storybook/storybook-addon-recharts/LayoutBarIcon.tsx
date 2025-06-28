import React from 'react';

export type Direction = 'EAST' | 'WEST' | 'NORTH' | 'SOUTH';

const directionToRotation: Record<Direction, number> = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

export function LayoutBarIcon({ direction = 'EAST' }: { direction?: Direction }) {
  const rotation = directionToRotation[direction];
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="4" y="3" width="16" height="4" rx="2" fill="#555" />
      <rect x="4" y="9" width="16" height="12" rx="2" fill="#ddd" />
    </svg>
  );
}
