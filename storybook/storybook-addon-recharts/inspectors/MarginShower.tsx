import React from 'react';
import { useChartHeight, useChartWidth, useMargin } from '../../../src';
import { SvgDimensionShower } from '../../ChartSizeDimensions';

export function MarginShower() {
  const margin = useMargin();
  const height = useChartHeight();
  const width = useChartWidth();
  return (
    <>
      <SvgDimensionShower
        width={margin.left}
        height={height}
        labels={{
          background: 'Left',
          horizontal: 'useMargin.left',
        }}
      />
      <SvgDimensionShower
        width={margin.right}
        x={width - margin.right}
        height={height}
        labels={{
          background: 'Right',
          horizontal: 'useMargin.right',
        }}
      />
      <SvgDimensionShower
        width={width}
        height={margin.top}
        labels={{
          background: 'Top',
          vertical: 'useMargin.top',
        }}
      />
      <SvgDimensionShower
        width={width}
        height={margin.bottom}
        y={height - margin.bottom}
        labels={{
          background: 'Bottom',
          vertical: 'useMargin.bottom',
        }}
      />
    </>
  );
}
