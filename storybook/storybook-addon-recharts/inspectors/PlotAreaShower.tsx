import React from 'react';
import { useChartHeight, useChartWidth, usePlotArea } from '../../../src';
import { SvgDimensionShower } from '../../ChartSizeDimensions';

export function PlotAreaShower() {
  const plotArea = usePlotArea();
  const width = useChartWidth();
  const height = useChartHeight();
  return (
    <>
      <SvgDimensionShower width={width} height={plotArea.y} labels={{ background: 'y', vertical: 'usePlotArea.y' }} />
      <SvgDimensionShower
        width={plotArea.x}
        height={height}
        labels={{ background: 'x', horizontal: 'usePlotArea.x' }}
      />
      <SvgDimensionShower
        x={plotArea.x}
        y={plotArea.y}
        width={plotArea.width}
        height={plotArea.height}
        labels={{
          background: 'Plot area',
          horizontal: 'usePlotArea.width',
          vertical: 'usePlotArea.height',
        }}
      />
    </>
  );
}
