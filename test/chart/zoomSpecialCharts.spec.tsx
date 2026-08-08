import * as React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Funnel,
  FunnelChart,
  Line,
  LineChart,
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
  Tooltip,
  type TooltipContentProps,
  Treemap,
  useZoom,
  ZoomAndPan,
} from '../../src';
import { useAppDispatch, useAppSelector } from '../../src/state/hooks';
import {
  selectActiveTooltipCoordinate,
  selectIsTooltipActive,
  selectTooltipPointerCoordinate,
} from '../../src/state/selectors/tooltipSelectors';
import { setMouseOverAxisIndex } from '../../src/state/tooltipSlice';
import { useZoomApi } from '../../src/chart/zoom/useZoomApi';
import { ZoomGestureApi } from '../../src/chart/zoom/ZoomGestureApi';
import { resolveZoomOptions } from '../../src/util/zoom/ZoomOptions';
import { mouseMoveAction, mouseMoveMiddleware } from '../../src/state/mouseEventsMiddleware';

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
  expect(container.querySelector('g[clip-path] > g[transform*="scale"]')).not.toBeNull();
}

function expectTransformedPieSector(container: HTMLElement) {
  expect(container.querySelector('g[clip-path] > g[transform*="scale"] .recharts-pie-sector')).not.toBeNull();
}

function TooltipCoordinateContent({ coordinate }: TooltipContentProps) {
  return <div data-testid="tooltip-coordinate" data-coordinate-x={coordinate?.x} data-coordinate-y={coordinate?.y} />;
}

function TooltipCoordinateProbe({ defaultIndex = 0 }: { defaultIndex?: number | string }) {
  return <Tooltip active defaultIndex={defaultIndex} isAnimationActive={false} content={TooltipCoordinateContent} />;
}

function readTooltipCoordinate(container: HTMLElement): { x: number; y: number } {
  const probe = container.querySelector('[data-testid="tooltip-coordinate"]');
  expect(probe).not.toBeNull();
  const x = Number(probe?.getAttribute('data-coordinate-x'));
  const y = Number(probe?.getAttribute('data-coordinate-y'));
  expect(Number.isFinite(x)).toBe(true);
  expect(Number.isFinite(y)).toBe(true);
  return { x, y };
}

async function waitForTooltipCoordinate(container: HTMLElement): Promise<{ x: number; y: number }> {
  return waitFor(() => readTooltipCoordinate(container));
}

function applyCameraTransform(coordinate: { x: number; y: number }, transform: string): { x: number; y: number } {
  const match = transform.match(/^translate\(([^ ]+) ([^)]+)\) scale\(([^ ]+) ([^)]+)\) translate\(([^ ]+) ([^)]+)\)$/);
  expect(match).not.toBeNull();
  const [, originX, originY, scaleX, scaleY, translateX, translateY] = match ?? [];
  return {
    x: Number(originX) + Number(scaleX) * (coordinate.x + Number(translateX)),
    y: Number(originY) + Number(scaleY) * (coordinate.y + Number(translateY)),
  };
}

function readCameraTransform(container: HTMLElement): string {
  const transform = container.querySelector('g[clip-path] > g[transform*="scale"]')?.getAttribute('transform');
  expect(transform).toBeTruthy();
  return transform ?? '';
}

function expectCoordinateClose(actual: { x: number; y: number }, expected: { x: number; y: number }) {
  expect(actual.x).toBeCloseTo(expected.x);
  expect(actual.y).toBeCloseTo(expected.y);
}

function ZoomViewportProbe() {
  const { viewport } = useZoom();
  return (
    <g
      data-testid="zoom-viewport"
      data-x-start={viewport.x.start}
      data-x-end={viewport.x.end}
      data-y-start={viewport.y.start}
      data-y-end={viewport.y.end}
    />
  );
}

function TooltipSelectorCoordinateProbe() {
  const projected = useAppSelector(selectActiveTooltipCoordinate);
  const pointer = useAppSelector(selectTooltipPointerCoordinate);
  const stored = useAppSelector(state => state.tooltip.axisInteraction.hover.coordinate);
  const isActive = useAppSelector(selectIsTooltipActive);
  return (
    <g
      data-testid="tooltip-selector-coordinates"
      data-projected-x={projected?.x}
      data-projected-y={projected?.y}
      data-pointer-x={pointer?.x}
      data-pointer-y={pointer?.y}
      data-stored-x={stored?.x}
      data-stored-y={stored?.y}
      data-active={isActive}
    />
  );
}

function readSelectorCoordinate(
  container: HTMLElement,
  kind: 'projected' | 'pointer' | 'stored',
): { x: number; y: number } {
  const probe = container.querySelector('[data-testid="tooltip-selector-coordinates"]');
  expect(probe).not.toBeNull();
  const x = probe?.getAttribute(`data-${kind}-x`);
  const y = probe?.getAttribute(`data-${kind}-y`);
  expect(x).not.toBeNull();
  expect(y).not.toBeNull();
  return { x: Number(x), y: Number(y) };
}

function ActivateAxisTooltip({ coordinate }: { coordinate: { x: number; y: number } }) {
  const dispatch = useAppDispatch();
  const { x, y } = coordinate;
  React.useEffect(() => {
    dispatch(
      setMouseOverAxisIndex({
        activeIndex: '0',
        activeDataKey: undefined,
        activeCoordinate: { x, y },
      }),
    );
  }, [dispatch, x, y]);
  return null;
}

function ZoomApiProbe({ onReady }: { onReady: (api: ZoomGestureApi) => void }) {
  const options = React.useMemo(() => resolveZoomOptions(true), []);
  const api = useZoomApi(options);
  React.useEffect(() => {
    if (api != null) {
      onReady(api);
    }
  }, [api, onReady]);
  return null;
}

async function expectAccessibleKeyboardZoomSurface(container: HTMLElement, title: string, desc: string) {
  const surface = container.querySelector('svg.recharts-surface');
  expect(surface).not.toBeNull();
  expect(surface).toHaveAttribute('role', 'application');
  expect(surface).toHaveAttribute('tabindex', '0');
  expect(surface?.querySelector('title')).toHaveTextContent(title);
  expect(surface?.querySelector('desc')).toHaveTextContent(desc);

  fireEvent.keyDown(surface!, { key: '+' });
  await waitFor(() => {
    const scale = readCameraTransform(container).match(/scale\(([^ ]+) ([^)]+)\)/);
    expect(Number(scale?.[1])).toBeGreaterThan(1);
    expect(Number(scale?.[2])).toBeGreaterThan(1);
  });
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

  it('keeps the plot clip fixed outside the camera transform', async () => {
    const { container } = render(
      <PieChart width={400} height={300} zoom={{ initialZoom, scrollbars: false }}>
        <Pie data={pieData} dataKey="value" isAnimationActive={false} />
      </PieChart>,
    );

    await waitFor(() => expectTransformedPieSector(container));
    const transformLayer = container.querySelector('g[clip-path] > g[transform*="scale"]');
    const clipLayer = transformLayer?.parentElement;
    expect(transformLayer).not.toBeNull();
    expect(clipLayer?.getAttribute('clip-path')).toMatch(/^url\(#.+\)$/);
    expect(clipLayer?.hasAttribute('transform')).toBe(false);
    expect(transformLayer?.hasAttribute('clip-path')).toBe(false);
  });

  it('does not camera-transform a cartesian chart that omits visible axes', async () => {
    const data = [
      { name: 'A', value: 1 },
      { name: 'B', value: 2 },
      { name: 'C', value: 3 },
    ];
    const { container } = render(
      <LineChart width={400} height={300} data={data} zoom={{ initialZoom, scrollbars: false }}>
        <Line dataKey="value" isAnimationActive={false} />
      </LineChart>,
    );

    await waitFor(() => expect(container.querySelector('.recharts-line-curve')).not.toBeNull());
    expect(container.querySelector('g[clip-path] > g[transform*="scale"]')).toBeNull();
  });

  it('derives uniform camera zoom without mutating a controlled one-axis viewport', async () => {
    const viewport = { x: { start: 0.2, end: 0.6 } };
    const { container } = render(
      <PieChart width={400} height={300} zoom={{ viewport, scrollbars: false }}>
        <Pie data={pieData} dataKey="value" isAnimationActive={false} />
        <ZoomViewportProbe />
      </PieChart>,
    );

    await waitFor(() => expectTransformedPieSector(container));
    const transform = container.querySelector('g[clip-path] > g[transform*="scale"]')?.getAttribute('transform');
    const scale = transform?.match(/scale\(([^ ]+) ([^)]+)\)/);
    expect(Number(scale?.[1])).toBeCloseTo(2.5);
    expect(Number(scale?.[2])).toBeCloseTo(2.5);
    const viewportProbe = container.querySelector('[data-testid="zoom-viewport"]');
    expect(viewportProbe).not.toBeNull();
    expect({
      x: {
        start: Number(viewportProbe?.getAttribute('data-x-start')),
        end: Number(viewportProbe?.getAttribute('data-x-end')),
      },
      y: {
        start: Number(viewportProbe?.getAttribute('data-y-start')),
        end: Number(viewportProbe?.getAttribute('data-y-end')),
      },
    }).toEqual({
      x: { start: 0.2, end: 0.6 },
      y: { start: 0, end: 1 },
    });
  });

  it('projects the Pie HTML tooltip through the uniform camera transform', async () => {
    const plain = render(
      <PieChart width={400} height={300}>
        <Pie data={pieData} dataKey="value" isAnimationActive={false} />
        <TooltipCoordinateProbe />
      </PieChart>,
    );
    const rawCoordinate = await waitForTooltipCoordinate(plain.container);
    plain.unmount();

    const zoomed = render(
      <PieChart width={400} height={300} zoom={{ initialZoom, scrollbars: false }}>
        <Pie data={pieData} dataKey="value" isAnimationActive={false} />
        <TooltipCoordinateProbe />
      </PieChart>,
    );
    await waitFor(() => expectTransformedPieSector(zoomed.container));
    const expected = applyCameraTransform(rawCoordinate, readCameraTransform(zoomed.container));
    await waitFor(() => expectCoordinateClose(readTooltipCoordinate(zoomed.container), expected));
  });

  it('projects the Funnel HTML tooltip through the independent camera transform', async () => {
    const funnelData = [
      { name: 'A', value: 400 },
      { name: 'B', value: 300 },
      { name: 'C', value: 200 },
    ];
    const plain = render(
      <FunnelChart width={400} height={300}>
        <Funnel dataKey="value" data={funnelData} isAnimationActive={false} />
        <TooltipCoordinateProbe />
      </FunnelChart>,
    );
    const rawCoordinate = await waitForTooltipCoordinate(plain.container);
    plain.unmount();

    const zoomed = render(
      <FunnelChart
        width={400}
        height={300}
        zoom={{
          initialZoom: { x: { start: 0.25, end: 0.75 }, y: { start: 0.1, end: 0.9 } },
          scrollbars: false,
        }}
      >
        <Funnel dataKey="value" data={funnelData} isAnimationActive={false} />
        <TooltipCoordinateProbe />
      </FunnelChart>,
    );
    await waitFor(() => expectZoomTransform(zoomed.container));
    const expected = applyCameraTransform(rawCoordinate, readCameraTransform(zoomed.container));
    await waitFor(() => expectCoordinateClose(readTooltipCoordinate(zoomed.container), expected));
  });

  it('projects the Sankey HTML tooltip exactly once', async () => {
    const plain = render(
      <Sankey width={400} height={300} data={sankeyData}>
        <TooltipCoordinateProbe defaultIndex="node-0" />
      </Sankey>,
    );
    const rawCoordinate = await waitForTooltipCoordinate(plain.container);
    plain.unmount();

    const zoomed = render(
      <Sankey width={400} height={300} data={sankeyData} zoom={{ initialZoom, scrollbars: false }}>
        <TooltipCoordinateProbe defaultIndex="node-0" />
      </Sankey>,
    );
    await waitFor(() => expectZoomTransform(zoomed.container));
    const expected = applyCameraTransform(rawCoordinate, readCameraTransform(zoomed.container));
    await waitFor(() => expectCoordinateClose(readTooltipCoordinate(zoomed.container), expected));
  });

  it('keeps the Radar SVG highlight in raw coordinates inside the camera transform', async () => {
    const radarData = [
      { name: 'A', uv: 4000 },
      { name: 'B', uv: 3000 },
      { name: 'C', uv: 2000 },
    ];
    const plain = render(
      <RadarChart width={400} height={300} data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" isAnimationActive={false} />
        <TooltipCoordinateProbe />
      </RadarChart>,
    );
    const plainHighlight = await waitFor(() => {
      const highlight = plain.container.querySelector('.recharts-active-dot .recharts-dot');
      expect(highlight).not.toBeNull();
      return highlight;
    });
    const rawHighlightPosition = {
      cx: plainHighlight?.getAttribute('cx'),
      cy: plainHighlight?.getAttribute('cy'),
    };
    plain.unmount();

    const zoomed = render(
      <RadarChart width={400} height={300} data={radarData} zoom={{ initialZoom, scrollbars: false }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" isAnimationActive={false} />
        <TooltipCoordinateProbe />
      </RadarChart>,
    );
    await waitFor(() => expectZoomTransform(zoomed.container));
    const zoomedHighlight = await waitFor(() => {
      const highlight = zoomed.container.querySelector('.recharts-active-dot .recharts-dot');
      expect(highlight).not.toBeNull();
      return highlight;
    });
    expect({
      cx: zoomedHighlight?.getAttribute('cx'),
      cy: zoomedHighlight?.getAttribute('cy'),
    }).toEqual(rawHighlightPosition);
    expect(zoomedHighlight?.closest('g[transform*="scale"]')).not.toBeNull();
  });

  it('keeps polar pointer coordinates coherent instead of merging cartesian x/y components', async () => {
    const radarData = [
      { name: 'A', uv: 4000 },
      { name: 'B', uv: 3000 },
      { name: 'C', uv: 2000 },
    ];
    const renderRadar = (storedCoordinate?: { x: number; y: number }) =>
      render(
        <RadarChart width={400} height={300} data={radarData} zoom={{ initialZoom, scrollbars: false }}>
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar dataKey="uv" isAnimationActive={false} />
          <Tooltip active defaultIndex={0} isAnimationActive={false} />
          {storedCoordinate == null ? null : <ActivateAxisTooltip coordinate={storedCoordinate} />}
          <TooltipSelectorCoordinateProbe />
        </RadarChart>,
      );

    const baseline = renderRadar();
    const expected = await waitFor(() => readSelectorCoordinate(baseline.container, 'pointer'));
    baseline.unmount();

    const withStoredCoordinate = renderRadar({ x: 11, y: 22 });
    await waitFor(() =>
      expectCoordinateClose(readSelectorCoordinate(withStoredCoordinate.container, 'pointer'), expected),
    );
  });

  it('uses untransformed coordinates only for synthetic pointer refreshes on camera charts', async () => {
    const radarData = [
      { name: 'A', uv: 4000 },
      { name: 'B', uv: 3000 },
      { name: 'C', uv: 2000 },
    ];
    const extremeZoom = { x: { start: 0.8, end: 1 }, y: { start: 0.8, end: 1 } };
    let zoomApi: ZoomGestureApi | undefined;
    const onApiReady = (api: ZoomGestureApi) => {
      zoomApi = api;
    };
    const { container } = render(
      <RadarChart
        width={400}
        height={300}
        data={radarData}
        zoom={{ initialZoom: extremeZoom, scrollbars: false }}
        throttledEvents={[]}
      >
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" isAnimationActive={false} />
        <Tooltip isAnimationActive={false} />
        <ActivateAxisTooltip coordinate={{ x: 200, y: 100 }} />
        <TooltipSelectorCoordinateProbe />
        <ZoomApiProbe onReady={onApiReady} />
      </RadarChart>,
    );

    await waitFor(() => {
      expect(zoomApi).toBeDefined();
      expect(container.querySelector('[data-testid="tooltip-selector-coordinates"]')).toHaveAttribute(
        'data-active',
        'true',
      );
    });
    const pointerCoordinate = readSelectorCoordinate(container, 'pointer');
    const projectedCoordinate = readSelectorCoordinate(container, 'projected');
    expect(readSelectorCoordinate(container, 'stored')).toEqual({ x: 200, y: 100 });
    expectCoordinateClose(projectedCoordinate, applyCameraTransform(pointerCoordinate, readCameraTransform(container)));
    expect(pointerCoordinate.x).toBeGreaterThanOrEqual(0);
    expect(pointerCoordinate.x).toBeLessThanOrEqual(400);
    expect(pointerCoordinate.y).toBeGreaterThanOrEqual(0);
    expect(pointerCoordinate.y).toBeLessThanOrEqual(300);
    expect(
      projectedCoordinate.x < 0 ||
        projectedCoordinate.x > 400 ||
        projectedCoordinate.y < 0 ||
        projectedCoordinate.y > 300,
    ).toBe(true);

    const readyZoomApi = zoomApi;
    if (readyZoomApi == null) {
      throw new Error('Expected the zoom API to be available');
    }
    const wrapperRect = {
      x: 37,
      y: 53,
      left: 37,
      top: 53,
      right: 437,
      bottom: 353,
      width: 400,
      height: 300,
      toJSON: () => ({}),
    };
    vi.spyOn(readyZoomApi.element, 'getBoundingClientRect').mockReturnValue(wrapperRect);
    const dispatchedMouseMoves: Array<ReturnType<typeof mouseMoveAction>['payload']> = [];
    const stopObservingMouseMoves = mouseMoveMiddleware.startListening({
      actionCreator: mouseMoveAction,
      effect: action => {
        dispatchedMouseMoves.push(action.payload);
      },
    });
    try {
      act(() => {
        readyZoomApi.refreshActivePointer();
      });
      await waitFor(() => {
        expect(dispatchedMouseMoves).toHaveLength(1);
        expect(dispatchedMouseMoves[0].clientX).toBeCloseTo(wrapperRect.left + pointerCoordinate.x);
        expect(dispatchedMouseMoves[0].clientY).toBeCloseTo(wrapperRect.top + pointerCoordinate.y);
        expect(dispatchedMouseMoves[0].clientX).not.toBeCloseTo(wrapperRect.left + projectedCoordinate.x);
        expect(dispatchedMouseMoves[0].clientY).not.toBeCloseTo(wrapperRect.top + projectedCoordinate.y);
      });
    } finally {
      stopObservingMouseMoves();
    }

    expect(container.querySelector('[data-testid="tooltip-selector-coordinates"]')).toHaveAttribute(
      'data-active',
      'true',
    );
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

  it('makes the Sunburst surface accessible and lets its keyboard event reach the zoom controller', async () => {
    const { container } = render(
      <SunburstChart
        width={400}
        height={300}
        data={sunburstData}
        title="Sunburst title"
        desc="Sunburst description"
        zoom={{ scrollbars: false }}
      />,
    );

    await expectAccessibleKeyboardZoomSurface(container, 'Sunburst title', 'Sunburst description');
  });

  it('applies transform zoom to Treemap through ZoomAndPan children', async () => {
    const { container } = render(
      <Treemap width={400} height={300} data={treemapData} dataKey="value" nameKey="name" isAnimationActive={false}>
        <ZoomAndPan initialZoom={initialZoom} scrollbars={false} />
      </Treemap>,
    );

    await waitFor(() => expectZoomTransform(container));
  });

  it('makes the Treemap surface accessible and lets its keyboard event reach the zoom controller', async () => {
    const { container } = render(
      <Treemap
        width={400}
        height={300}
        data={treemapData}
        dataKey="value"
        nameKey="name"
        isAnimationActive={false}
        title="Treemap title"
        desc="Treemap description"
        zoom={{ scrollbars: false }}
      />,
    );

    await expectAccessibleKeyboardZoomSurface(container, 'Treemap title', 'Treemap description');
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
