import React from 'react';
import { useOffset } from '../../../src/context/chartLayoutContext';
import { SvgDimensionShower } from '../../ChartSizeDimensions';

export function GraphicalAreaShower() {
  const offset = useOffset();
  return (
    <SvgDimensionShower
      x={offset.left}
      y={offset.top}
      width={offset.width}
      height={offset.height}
      labels={{
        background: 'Plot area',
        horizontal: 'usePlotArea.width',
        vertical: 'usePlotArea.height',
      }}
    />
  );
}
