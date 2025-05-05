import * as React from 'react';
import { useOffset } from '../context/chartLayoutContext';

type ClipPathProps = {
  clipPathId: string;
};

export function ClipPath({ clipPathId }: ClipPathProps) {
  const offset = useOffset();
  if (offset == null) {
    return null;
  }
  const { left, top, height, width } = offset;

  return (
    <defs>
      <clipPath id={clipPathId}>
        <rect x={left} y={top} height={height} width={width} />
      </clipPath>
    </defs>
  );
}
