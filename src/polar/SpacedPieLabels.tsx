import * as React from 'react';
import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { Layer } from '../container/Layer';
import { CartesianViewBoxRequired, Coordinate } from '../util/types';
import type { PieSectorDataItem } from './Pie';
import { getSpacedPieLabelPositions, PieLabelExtent } from './spacePieLabels';

type RenderLabels = (positions: ReadonlyArray<Coordinate> | undefined, measure: boolean) => ReactNode;

function measureLabel(element: SVGGElement): PieLabelExtent | undefined {
  try {
    const box = element.getBBox();
    if (box.width === 0 && box.height === 0) {
      return 'hidden';
    }
    const anchor = Number(element.dataset.labelX);
    return { left: anchor - box.x, right: box.x + box.width - anchor };
  } catch {
    // Detached or unsupported SVG elements can still use the geometric layout.
    return undefined;
  }
}

export function SpacedPieLabels({
  sectors,
  offsetRadius,
  plot,
  spacing,
  renderLabels,
}: {
  sectors: ReadonlyArray<PieSectorDataItem>;
  offsetRadius: number;
  plot: CartesianViewBoxRequired;
  spacing: number;
  renderLabels: RenderLabels;
}) {
  const group = useRef<SVGGElement>(null);
  const [layout, setLayout] = useState<{ renderLabels: RenderLabels; positions: Coordinate[] }>();

  // Measure the actual SVG at the slice angles before moving labels. A renderer can return
  // arbitrary SVG or null, and its output can itself depend on the supplied coordinates.
  useLayoutEffect(() => {
    if (group.current) {
      const labels = group.current.querySelectorAll<SVGGElement>(':scope > g > g[data-label-x]');
      const extents = Array.from(labels, measureLabel);
      setLayout({ renderLabels, positions: getSpacedPieLabelPositions(sectors, offsetRadius, plot, spacing, extents) });
    }
  }, [sectors, offsetRadius, plot, spacing, renderLabels]);

  return (
    <Layer ref={group} className="recharts-pie-labels">
      {renderLabels(layout?.renderLabels === renderLabels ? layout.positions : undefined, true)}
    </Layer>
  );
}
