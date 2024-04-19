import React from 'react';
import { ChartOffset } from '../util/types';

type ClipPathProps = {
  clipPathId: string;
  offset: ChartOffset;
};

export function ClipPath({ clipPathId, offset }: ClipPathProps) {
  const { left, top, height, width } = offset;

  return (
    <defs>
      <clipPath id={clipPathId}>
        <rect x={left} y={top} height={height} width={width} />
      </clipPath>
    </defs>
  );
}
