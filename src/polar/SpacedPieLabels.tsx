import * as React from 'react';
import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { Layer } from '../container/Layer';
import { CartesianViewBoxRequired, Coordinate } from '../util/types';
import type { PieSectorDataItem } from './Pie';
import { getSpacedPieLabelPositions, PieLabelExtent } from './spacePieLabels';

type RenderLabels = (positions: ReadonlyArray<Coordinate> | undefined, measure: boolean) => ReactNode;

function getLabelBox(element: SVGGElement): DOMRect | undefined {
  try {
    return element.getBBox();
  } catch {
    // Detached or unsupported SVG elements can still use the geometric layout.
    return undefined;
  }
}

function measureLabel(element: SVGGElement): PieLabelExtent | undefined {
  const box = getLabelBox(element);
  if (!box) {
    return undefined;
  }
  if (box.width === 0 && box.height === 0) {
    return 'hidden';
  }
  const anchor = Number(element.dataset.labelX);
  return { left: anchor - box.x, right: box.x + box.width - anchor };
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

  const positions = layout?.renderLabels === renderLabels ? layout.positions : undefined;

  useLayoutEffect(() => {
    if (!group.current) {
      return undefined;
    }
    const labels = group.current.querySelectorAll<SVGGElement>(':scope > g > g[data-label-x]');
    if (!positions) {
      // Measure at the original slice angles, including after a custom label changes size.
      const extents = Array.from(labels, measureLabel);
      setLayout({ renderLabels, positions: getSpacedPieLabelPositions(sectors, offsetRadius, plot, spacing, extents) });
      return undefined;
    }
    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }
    // Compare sizes at the settled positions. A custom label can depend on its coordinates.
    const settled = Array.from(labels, label => ({ label, box: getLabelBox(label) }));
    const observer = new ResizeObserver(() => {
      const sizeChanged = settled.some(({ label, box }) => {
        const current = getLabelBox(label);
        return current?.width !== box?.width || current?.height !== box?.height;
      });
      if (sizeChanged) {
        setLayout(undefined);
      }
    });
    labels.forEach(label => observer.observe(label));
    return () => observer.disconnect();
  }, [sectors, offsetRadius, plot, spacing, renderLabels, positions]);

  return (
    <Layer ref={group} className="recharts-pie-labels">
      {renderLabels(positions, true)}
    </Layer>
  );
}
