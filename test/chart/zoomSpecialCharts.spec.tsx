import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Funnel,
  FunnelChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Sankey,
  SunburstChart,
  Treemap,
  ZoomAndPan,
} from '../../src';

const pieData = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 200 },
];

const sankeyData = {
  nodes: [{ name: 'Source' }, { name: 'A' }, { name: 'B' }, { name: 'Sink' }],
  links: [
    { source: 0, target: 1, value: 10 },
    { source: 0, target: 2, value: 6 },
    { source: 1, target: 3, value: 10 },
    { source: 2, target: 3, value: 6 },
  ],
};

const sunburstData = {
  name: 'root',
  value: 16,
  children: [
    {
      name: 'A',
      value: 10,
      children: [
        { name: 'A1', value: 4 },
        { name: 'A2', value: 6 },
      ],
    },
    { name: 'B', value: 6, children: [{ name: 'B1', value: 6 }] },
  ],
};

const treemapData = [
  { name: 'A', value: 10 },
  { name: 'B', value: 8 },
  { name: 'C', value: 6 },
];

const initialZoom = { x: { start: 0.25, end: 0.75 }, y: { start: 0.25, end: 0.75 } };

function expectZoomTransform(container: HTMLElement) {
  expect(container.querySelector('g[clip-path][transform*="scale"]')).not.toBeNull();
}

function expectTransformedPieSector(container: HTMLElement) {
  expect(container.querySelector('g[clip-path][transform*="scale"] .recharts-pie-sector')).not.toBeNull();
}

describe('zoom on special charts', () => {
  it('applies transform zoom to polar charts through ZoomAndPan children', async () => {
    const { container } = render(
      <PieChart width={400} height={300}>
        <Pie data={pieData} dataKey="value" isAnimationActive={false} />
        <ZoomAndPan initialZoom={initialZoom} scrollbars={false} />
      </PieChart>,
    );

    await waitFor(() => expectTransformedPieSector(container));
  });

  it('zooms polar charts from wheel interactions', async () => {
    const { container } = render(
      <PieChart width={400} height={300}>
        <Pie data={pieData} dataKey="value" isAnimationActive={false} />
        <ZoomAndPan scrollbars={false} />
      </PieChart>,
    );
    const wrapper = container.querySelector('.recharts-wrapper');
    expect(wrapper).not.toBeNull();

    fireEvent.wheel(wrapper!, { deltaY: -100, clientX: 200, clientY: 150 });

    await waitFor(() => expectTransformedPieSector(container));
  });

  it('applies transform zoom to Sankey through ZoomAndPan children', async () => {
    const { container } = render(
      <Sankey width={400} height={300} data={sankeyData}>
        <ZoomAndPan initialZoom={initialZoom} scrollbars={false} />
      </Sankey>,
    );

    await waitFor(() => expectZoomTransform(container));
  });

  it('applies transform zoom to SunburstChart through ZoomAndPan children', async () => {
    const { container } = render(
      <SunburstChart width={400} height={300} data={sunburstData}>
        <ZoomAndPan initialZoom={initialZoom} scrollbars={false} />
      </SunburstChart>,
    );

    await waitFor(() => expectZoomTransform(container));
  });

  it('applies transform zoom to Treemap through ZoomAndPan children', async () => {
    const { container } = render(
      <Treemap width={400} height={300} data={treemapData} dataKey="value" nameKey="name" isAnimationActive={false}>
        <ZoomAndPan initialZoom={initialZoom} scrollbars={false} />
      </Treemap>,
    );

    await waitFor(() => expectZoomTransform(container));
  });

  it('applies transform zoom to RadarChart through ZoomAndPan children', async () => {
    const radarData = [
      { name: 'A', uv: 4000 },
      { name: 'B', uv: 3000 },
      { name: 'C', uv: 2000 },
    ];
    const { container } = render(
      <RadarChart width={400} height={300} data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" />
        <ZoomAndPan initialZoom={initialZoom} scrollbars={false} />
      </RadarChart>,
    );

    await waitFor(() => expectZoomTransform(container));
  });

  it('applies transform zoom to RadialBarChart through ZoomAndPan children', async () => {
    const radialBarData = [
      { name: 'A', value: 400 },
      { name: 'B', value: 300 },
      { name: 'C', value: 200 },
    ];
    const { container } = render(
      <RadialBarChart width={400} height={300} data={radialBarData}>
        <RadialBar dataKey="value" />
        <ZoomAndPan initialZoom={initialZoom} scrollbars={false} />
      </RadialBarChart>,
    );

    await waitFor(() => expectZoomTransform(container));
  });

  it('applies transform zoom to FunnelChart through ZoomAndPan children', async () => {
    const funnelData = [
      { name: 'A', value: 400 },
      { name: 'B', value: 300 },
      { name: 'C', value: 200 },
    ];
    const { container } = render(
      <FunnelChart width={400} height={300}>
        <Funnel dataKey="value" data={funnelData} isAnimationActive={false} />
        <ZoomAndPan initialZoom={initialZoom} scrollbars={false} />
      </FunnelChart>,
    );

    await waitFor(() => expectZoomTransform(container));
  });

  it('pans special charts with a one-finger touch drag when touchDrag="pan"', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <Sankey width={400} height={300} data={sankeyData}>
        <ZoomAndPan initialZoom={initialZoom} touchDrag="pan" scrollbars={false} onZoomChange={onZoomChange} />
      </Sankey>,
    );
    const wrapper = container.querySelector('.recharts-wrapper') as HTMLElement;
    expect(wrapper).not.toBeNull();
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    fireEvent.touchStart(wrapper, { touches: [{ clientX: 200, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 240, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.start).not.toBeCloseTo(0.25, 5);
  });

  it('supports the zoom prop shorthand on polar charts', async () => {
    const { container } = render(
      <PieChart width={400} height={300} zoom={{ initialZoom, scrollbars: false }}>
        <Pie data={pieData} dataKey="value" isAnimationActive={false} />
      </PieChart>,
    );
    await waitFor(() => expectTransformedPieSector(container));
  });

  it('supports the zoom prop shorthand on Sankey', async () => {
    const { container } = render(
      <Sankey width={400} height={300} data={sankeyData} zoom={{ initialZoom, scrollbars: false }} />,
    );
    await waitFor(() => expectZoomTransform(container));
  });

  it('supports the zoom prop shorthand on Treemap', async () => {
    const { container } = render(
      <Treemap
        width={400}
        height={300}
        data={treemapData}
        dataKey="value"
        nameKey="name"
        isAnimationActive={false}
        zoom={{ initialZoom, scrollbars: false }}
      />,
    );
    await waitFor(() => expectZoomTransform(container));
  });

  it('supports the zoom prop shorthand on SunburstChart', async () => {
    const { container } = render(
      <SunburstChart width={400} height={300} data={sunburstData} zoom={{ initialZoom, scrollbars: false }} />,
    );
    await waitFor(() => expectZoomTransform(container));
  });

  it('supports the zoom prop shorthand on RadarChart', async () => {
    const radarData = [
      { name: 'A', uv: 4000 },
      { name: 'B', uv: 3000 },
      { name: 'C', uv: 2000 },
    ];
    const { container } = render(
      <RadarChart width={400} height={300} data={radarData} zoom={{ initialZoom, scrollbars: false }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" />
      </RadarChart>,
    );
    await waitFor(() => expectZoomTransform(container));
  });

  it('supports the zoom prop shorthand on RadialBarChart', async () => {
    const radialBarData = [
      { name: 'A', value: 400 },
      { name: 'B', value: 300 },
      { name: 'C', value: 200 },
    ];
    const { container } = render(
      <RadialBarChart width={400} height={300} data={radialBarData} zoom={{ initialZoom, scrollbars: false }}>
        <RadialBar dataKey="value" />
      </RadialBarChart>,
    );
    await waitFor(() => expectZoomTransform(container));
  });

  it('supports the zoom prop shorthand on FunnelChart', async () => {
    const funnelData = [
      { name: 'A', value: 400 },
      { name: 'B', value: 300 },
      { name: 'C', value: 200 },
    ];
    const { container } = render(
      <FunnelChart width={400} height={300} zoom={{ initialZoom, scrollbars: false }}>
        <Funnel dataKey="value" data={funnelData} isAnimationActive={false} />
      </FunnelChart>,
    );
    await waitFor(() => expectZoomTransform(container));
  });

  it('supports the headless ZoomAndPan child on standalone special charts', async () => {
    const { container } = render(
      <Sankey width={400} height={300} data={sankeyData}>
        <ZoomAndPan scrollbars={false} />
      </Sankey>,
    );
    const wrapper = container.querySelector('.recharts-wrapper');
    expect(wrapper).not.toBeNull();

    fireEvent.wheel(wrapper!, { deltaY: -100, clientX: 200, clientY: 150 });

    await waitFor(() => expectZoomTransform(container));
  });
});
