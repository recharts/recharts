import React from 'react';
import { useChartHeight, useChartWidth, useOffset } from '../../../src';
import { SvgDimensionShower } from '../../ChartSizeDimensions';

export function OffsetShower() {
  const offset = useOffset();
  const height = useChartHeight();
  const width = useChartWidth();
  return (
    <>
      <SvgDimensionShower
        width={offset.left}
        height={height}
        labels={{
          background: 'Left',
          horizontal: 'useOffset.left',
        }}
      />
      <SvgDimensionShower
        width={offset.right}
        x={width - offset.right}
        height={height}
        labels={{
          background: 'Right',
          horizontal: 'useOffset.right',
        }}
      />
      <SvgDimensionShower
        width={width}
        height={offset.top}
        labels={{
          background: 'Top',
          vertical: 'useOffset.top',
        }}
      />
      <SvgDimensionShower
        width={width}
        height={offset.bottom}
        y={height - offset.bottom}
        labels={{
          background: 'Bottom',
          vertical: 'useOffset.bottom',
        }}
      />
    </>
  );
}
