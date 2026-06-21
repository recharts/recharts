import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Bar, BarChart, MouseWheelZoom, XAxis, YAxis, useZoom } from '../../src';
import type { UseZoomResult } from '../../src';

const data = Array.from({ length: 12 }, (_, i) => ({ name: `#${i}`, uv: 100 + i * 10 }));

let zoomApi: UseZoomResult;

function Capture() {
  zoomApi = useZoom();
  return null;
}

// Wheel-zoom in several times at the same lower-screen position.
function zoomInAtLowerPlot(wrapper: HTMLElement) {
  for (let i = 0; i < 6; i += 1) {
    fireEvent.wheel(wrapper, { deltaY: -120, clientX: 200, clientY: 210 });
  }
}

const yCenter = () => (zoomApi.viewport.y.start + zoomApi.viewport.y.end) / 2;
const xCenter = () => (zoomApi.viewport.x.start + zoomApi.viewport.x.end) / 2;

describe('zoom orientation across layouts', () => {
  it('vertical layout (category y): zooming low on screen lands on the high (late-category) end', async () => {
    const utils = render(
      <BarChart width={400} height={300} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Bar dataKey="uv" isAnimationActive={false} />
        <MouseWheelZoom axis="y" />
        <Capture />
      </BarChart>,
    );
    const wrapper = utils.container.querySelector('.recharts-wrapper') as HTMLElement;
    zoomInAtLowerPlot(wrapper);
    // Bottom of a vertical category axis is the domain maximum, so the window sits high.
    await waitFor(() => expect(yCenter()).toBeGreaterThan(0.55));
  });

  it('horizontal layout (value y): zooming low on screen lands on the low (small-value) end', async () => {
    const utils = render(
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" type="category" />
        <YAxis type="number" />
        <Bar dataKey="uv" isAnimationActive={false} />
        <MouseWheelZoom axis="y" />
        <Capture />
      </BarChart>,
    );
    const wrapper = utils.container.querySelector('.recharts-wrapper') as HTMLElement;
    zoomInAtLowerPlot(wrapper);
    // Bottom of a value y axis is the domain minimum, so the window sits low (opposite of above).
    await waitFor(() => expect(yCenter()).toBeLessThan(0.45));
  });

  it('uses the first registered custom x-axis id for reversed-axis orientation', async () => {
    const utils = render(
      <BarChart width={400} height={300} data={data}>
        <XAxis xAxisId="time" dataKey="name" type="category" reversed />
        <YAxis yAxisId="value" type="number" />
        <Bar xAxisId="time" yAxisId="value" dataKey="uv" isAnimationActive={false} />
        <MouseWheelZoom axis="x" />
        <Capture />
      </BarChart>,
    );
    const wrapper = utils.container.querySelector('.recharts-wrapper') as HTMLElement;
    fireEvent.wheel(wrapper, { deltaY: -120, clientX: 100, clientY: 150 });
    fireEvent.wheel(wrapper, { deltaY: -120, clientX: 100, clientY: 150 });

    await waitFor(() => expect(xCenter()).toBeGreaterThan(0.5));
  });
});
