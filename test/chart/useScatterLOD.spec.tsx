import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Scatter, ScatterChart, XAxis, YAxis, ZoomAndPan, useScatterLOD } from '../../src';

// 100 coincident points (+ 2 corners to give the axes a domain): they all land in one pixel cell.
const data = [{ x: 0, y: 0 }, { x: 100, y: 100 }, ...Array.from({ length: 100 }, () => ({ x: 50, y: 50 }))];

let lodCount = -1;

// Feeds the decimated result straight to <Scatter data>: the realistic pattern, which also exercises
// the re-register path that previously caused an infinite update loop.
function LODScatter() {
  const lod = useScatterLOD(data, { x: 'x', y: 'y', cellSize: 4 });
  lodCount = lod.length;
  return <Scatter data={lod} dataKey="y" isAnimationActive={false} />;
}

describe('useScatterLOD', () => {
  it('collapses overlapping points to roughly one per grid cell without looping', async () => {
    render(
      <ScatterChart width={400} height={300}>
        <XAxis dataKey="x" type="number" domain={[0, 100]} />
        <YAxis dataKey="y" type="number" domain={[0, 100]} />
        <LODScatter />
      </ScatterChart>,
    );

    // The 100 coincident points collapse to a single cell; only a handful of points remain.
    await waitFor(() => expect(lodCount).toBeGreaterThan(0));
    await waitFor(() => expect(lodCount).toBeLessThan(10));
    expect(lodCount).toBeLessThan(data.length);
  });

  it('does not loop when zooming a scatter chart rapidly', async () => {
    const { container } = render(
      <ScatterChart width={400} height={300}>
        <XAxis dataKey="x" type="number" domain={[0, 100]} />
        <YAxis dataKey="y" type="number" domain={[0, 100]} />
        <LODScatter />
        <ZoomAndPan axis="xy" />
      </ScatterChart>,
    );
    const wrapper = container.querySelector('.recharts-wrapper') as HTMLElement;

    for (let i = 0; i < 12; i++) {
      fireEvent.wheel(wrapper, { deltaY: -120, clientX: 200, clientY: 150 });
    }

    await waitFor(() => expect(lodCount).toBeGreaterThan(0));
  });
});
