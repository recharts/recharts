import React, { ReactNode } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
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
  Scatter,
  ScatterChart,
  useOffset,
} from '../../src';
import { PageData } from '../_data';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { pageDataWithFillColor } from '../../storybook/stories/data';

type DotCaptureProps = {
  cx?: number;
  cy?: number;
};

type BarCaptureProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

type ScatterCaptureProps = {
  cx?: number;
  cy?: number;
  size?: number;
};

type FunnelCaptureProps = {
  x?: number;
  y?: number;
  upperWidth?: number;
  lowerWidth?: number;
  height?: number;
};

type SectorCaptureProps = {
  startAngle?: number;
  endAngle?: number;
};

type ChartWrapper = React.ComponentType<{ children: ReactNode }>;

function CaptureDot(props: DotCaptureProps) {
  return <circle className="capture-dot" data-cx={props.cx} data-cy={props.cy} />;
}

function CaptureBar(props: BarCaptureProps) {
  return (
    <path
      className="capture-bar"
      data-x={props.x}
      data-y={props.y}
      data-width={props.width}
      data-height={props.height}
    />
  );
}

function CaptureScatter(props: ScatterCaptureProps) {
  return <path className="capture-scatter" data-cx={props.cx} data-cy={props.cy} data-size={props.size} />;
}

function CaptureFunnel(props: FunnelCaptureProps) {
  return (
    <path
      className="capture-funnel"
      data-x={props.x}
      data-y={props.y}
      data-upper-width={props.upperWidth}
      data-lower-width={props.lowerWidth}
      data-height={props.height}
    />
  );
}

function CaptureSector(props: SectorCaptureProps) {
  return <path className="capture-sector" data-start-angle={props.startAngle} data-end-angle={props.endAngle} />;
}

function parseNumber(value: string | null, attribute: string): number {
  if (value == null) {
    throw new Error(`Missing ${attribute}`);
  }
  return Number(value);
}

function midpoint(a: number, b: number): number {
  return (a + b) / 2;
}

function getCurvePoints(container: Element, selector: string): ReadonlyArray<{ x: number; y: number }> {
  const curve = container.querySelector<SVGPathElement>(selector);
  if (curve == null) {
    throw new Error(`Missing curve for selector ${selector}`);
  }
  const d = curve.getAttribute('d');
  if (d == null) {
    throw new Error(`Missing "d" attribute for selector ${selector}`);
  }

  const numbers = d.match(/-?\d*\.?\d+(?:e-?\d+)?/gi)?.map(Number);
  if (numbers == null || numbers.length < 4) {
    throw new Error(`Could not parse curve points from "${d}"`);
  }

  const result = [];
  for (let i = 0; i < numbers.length; i += 2) {
    result.push({ x: numbers[i], y: numbers[i + 1] });
  }
  return result;
}

function getCapturedDots(container: Element): ReadonlyArray<{ cx: number; cy: number }> {
  return Array.from(container.querySelectorAll<SVGCircleElement>('.capture-dot')).map(dot => ({
    cx: parseNumber(dot.getAttribute('data-cx'), 'data-cx'),
    cy: parseNumber(dot.getAttribute('data-cy'), 'data-cy'),
  }));
}

function getCapturedBars(container: Element): ReadonlyArray<{ x: number; y: number; width: number; height: number }> {
  return Array.from(container.querySelectorAll<SVGPathElement>('.capture-bar')).map(bar => ({
    x: parseNumber(bar.getAttribute('data-x'), 'data-x'),
    y: parseNumber(bar.getAttribute('data-y'), 'data-y'),
    width: parseNumber(bar.getAttribute('data-width'), 'data-width'),
    height: parseNumber(bar.getAttribute('data-height'), 'data-height'),
  }));
}

function getCapturedScatterPoints(container: Element): ReadonlyArray<{ cx: number; cy: number; size: number }> {
  return Array.from(container.querySelectorAll<SVGPathElement>('.capture-scatter')).map(point => ({
    cx: parseNumber(point.getAttribute('data-cx'), 'data-cx'),
    cy: parseNumber(point.getAttribute('data-cy'), 'data-cy'),
    size: parseNumber(point.getAttribute('data-size'), 'data-size'),
  }));
}

function getCapturedFunnels(
  container: Element,
): ReadonlyArray<{ x: number; y: number; upperWidth: number; lowerWidth: number; height: number }> {
  return Array.from(container.querySelectorAll<SVGPathElement>('.capture-funnel')).map(funnel => ({
    x: parseNumber(funnel.getAttribute('data-x'), 'data-x'),
    y: parseNumber(funnel.getAttribute('data-y'), 'data-y'),
    upperWidth: parseNumber(funnel.getAttribute('data-upper-width'), 'data-upper-width'),
    lowerWidth: parseNumber(funnel.getAttribute('data-lower-width'), 'data-lower-width'),
    height: parseNumber(funnel.getAttribute('data-height'), 'data-height'),
  }));
}

function getCapturedSectors(container: Element): ReadonlyArray<{ startAngle: number; endAngle: number }> {
  return Array.from(container.querySelectorAll<SVGPathElement>('.capture-sector')).map(sector => ({
    startAngle: parseNumber(sector.getAttribute('data-start-angle'), 'data-start-angle'),
    endAngle: parseNumber(sector.getAttribute('data-end-angle'), 'data-end-angle'),
  }));
}

const linearAnimationProps = {
  animationDuration: 1000,
  animationEasing: 'linear' as const,
  isAnimationActive: true,
};

function renderAreaChart(data: typeof smallData): ChartWrapper {
  return ({ children }) => (
    <AreaChart width={100} height={100} data={data}>
      {children}
      <Area dataKey="uv" {...linearAnimationProps} />
    </AreaChart>
  );
}

function renderLineChart(data: typeof smallData): ChartWrapper {
  return ({ children }) => (
    <LineChart width={100} height={100} data={data}>
      {children}
      <Line dataKey="uv" {...linearAnimationProps} />
    </LineChart>
  );
}

function renderRadarChart(data: typeof smallData): ChartWrapper {
  return ({ children }) => (
    <RadarChart cx={50} cy={50} outerRadius={40} width={100} height={100} data={data}>
      {children}
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar dataKey="uv" dot={<CaptureDot />} {...linearAnimationProps} />
    </RadarChart>
  );
}

function renderBarChart(data: typeof smallData): ChartWrapper {
  return ({ children }) => (
    <BarChart width={100} height={100} data={data}>
      {children}
      <Bar dataKey="uv" shape={CaptureBar} {...linearAnimationProps} />
    </BarChart>
  );
}

function renderFunnelChart(data: typeof smallData): ChartWrapper {
  return ({ children }) => (
    <FunnelChart width={100} height={100}>
      {children}
      <Funnel data={data} dataKey="uv" shape={CaptureFunnel} {...linearAnimationProps} />
    </FunnelChart>
  );
}

function renderScatterChart(data: typeof smallData): ChartWrapper {
  return ({ children }) => (
    <ScatterChart width={100} height={100} data={data}>
      {children}
      <Scatter dataKey="uv" shape={CaptureScatter} {...linearAnimationProps} />
    </ScatterChart>
  );
}

function renderPieChart(data: typeof smallData): ChartWrapper {
  return ({ children }) => (
    <PieChart width={100} height={100}>
      {children}
      <Pie data={data} dataKey="uv" shape={CaptureSector} {...linearAnimationProps} />
    </PieChart>
  );
}

function renderRadialBarChart(data: typeof smallPolarData): ChartWrapper {
  return ({ children }) => (
    <RadialBarChart width={400} height={400} data={data}>
      {children}
      <RadialBar dataKey="uv" shape={CaptureSector} {...linearAnimationProps} />
    </RadialBarChart>
  );
}

function renderChartWithSelectorSpy(chart: ChartWrapper) {
  const renderResult = createSelectorTestCase(chart)(useOffset);
  expect(renderResult.spy).toHaveBeenCalledTimes(1);
  return renderResult;
}

async function primeAndRerender(initialChart: ChartWrapper, nextChart: ChartWrapper) {
  const renderResult = renderChartWithSelectorSpy(initialChart);
  await renderResult.animationManager.completeAnimation();
  expect(renderResult.spy).toHaveBeenCalledTimes(1);
  renderResult.rerender(nextChart);
  expect(renderResult.spy).toHaveBeenCalledTimes(2);
  return renderResult;
}

async function setLengthChangeProgress(renderResult: ReturnType<typeof renderChartWithSelectorSpy>, progress: number) {
  await renderResult.animationManager.setAnimationProgress(progress);
  expect(renderResult.spy).toHaveBeenCalledTimes(2);
}

async function completeLengthChangeAnimation(renderResult: ReturnType<typeof renderChartWithSelectorSpy>) {
  await renderResult.animationManager.completeAnimation();
  expect(renderResult.spy).toHaveBeenCalledTimes(2);
  return renderResult;
}

const smallData = PageData.slice(0, 2);
const largeData = PageData.slice(0, 3);
const smallPolarData = pageDataWithFillColor.slice(0, 2);
const largePolarData = pageDataWithFillColor.slice(0, 3);

describe('legacy animation behavior when data length changes', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100, left: 0, top: 0 });
  });

  it('Area uses the final curve geometry immediately when data length increases', async () => {
    const renderResult = renderChartWithSelectorSpy(renderAreaChart(smallData));
    await renderResult.animationManager.completeAnimation();
    expect(renderResult.spy).toHaveBeenCalledTimes(1);
    const initialCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');
    renderResult.rerender(renderAreaChart(largeData));
    expect(renderResult.spy).toHaveBeenCalledTimes(2);
    await setLengthChangeProgress(renderResult, 0.5);
    const midCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');
    await completeLengthChangeAnimation(renderResult);
    const finalCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');

    expect(initialCurve).not.toEqual(finalCurve);
    expect(midCurve).toEqual(finalCurve);
  });

  it('Area uses the final curve geometry immediately when data length decreases', async () => {
    const renderResult = renderChartWithSelectorSpy(renderAreaChart(largeData));
    await renderResult.animationManager.completeAnimation();
    expect(renderResult.spy).toHaveBeenCalledTimes(1);
    const initialCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');
    renderResult.rerender(renderAreaChart(smallData));
    expect(renderResult.spy).toHaveBeenCalledTimes(2);
    await setLengthChangeProgress(renderResult, 0.5);
    const midCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');
    await completeLengthChangeAnimation(renderResult);
    const finalCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');

    expect(initialCurve).not.toEqual(finalCurve);
    expect(midCurve).toEqual(finalCurve);
  });

  it('Line uses the final curve geometry immediately when data length increases', async () => {
    const renderResult = renderChartWithSelectorSpy(renderLineChart(smallData));
    await renderResult.animationManager.completeAnimation();
    expect(renderResult.spy).toHaveBeenCalledTimes(1);
    const initialCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');
    renderResult.rerender(renderLineChart(largeData));
    expect(renderResult.spy).toHaveBeenCalledTimes(2);
    await setLengthChangeProgress(renderResult, 0.5);
    const midCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');
    await completeLengthChangeAnimation(renderResult);
    const finalCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');

    expect(initialCurve).not.toEqual(finalCurve);
    expect(midCurve).toEqual(finalCurve);
  });

  it('Line uses the final curve geometry immediately when data length decreases', async () => {
    const renderResult = renderChartWithSelectorSpy(renderLineChart(largeData));
    await renderResult.animationManager.completeAnimation();
    expect(renderResult.spy).toHaveBeenCalledTimes(1);
    const initialCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');
    renderResult.rerender(renderLineChart(smallData));
    expect(renderResult.spy).toHaveBeenCalledTimes(2);
    await setLengthChangeProgress(renderResult, 0.5);
    const midCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');
    await completeLengthChangeAnimation(renderResult);
    const finalCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');

    expect(initialCurve).not.toEqual(finalCurve);
    expect(midCurve).toEqual(finalCurve);
  });

  it('Radar keeps proportional point matching', async () => {
    const renderResult = await primeAndRerender(renderRadarChart(smallData), renderRadarChart(largeData));

    const initialDots = getCapturedDots(renderResult.container);
    await setLengthChangeProgress(renderResult, 0.5);
    const midDots = getCapturedDots(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalDots = getCapturedDots(renderResult.container);

    expect(initialDots).toHaveLength(3);
    expect(midDots).toHaveLength(3);
    expect(finalDots).toHaveLength(3);
    expect(midDots[1].cx).toBeCloseTo(midpoint(initialDots[0].cx, finalDots[1].cx), 4);
    expect(midDots[1].cy).toBeCloseTo(midpoint(initialDots[0].cy, finalDots[1].cy), 4);
  });

  it('Radar keeps proportional point matching when data length decreases', async () => {
    const renderResult = await primeAndRerender(renderRadarChart(largeData), renderRadarChart(smallData));

    const initialDots = getCapturedDots(renderResult.container);
    await setLengthChangeProgress(renderResult, 0.5);
    const midDots = getCapturedDots(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalDots = getCapturedDots(renderResult.container);

    expect(initialDots).toHaveLength(2);
    expect(midDots).toHaveLength(2);
    expect(finalDots).toHaveLength(2);
    expect(midDots[1].cx).toBeCloseTo(midpoint(initialDots[1].cx, finalDots[1].cx), 4);
    expect(midDots[1].cy).toBeCloseTo(midpoint(initialDots[1].cy, finalDots[1].cy), 4);
  });

  it('Bar grows newly appended items from zero size', async () => {
    const renderResult = await primeAndRerender(renderBarChart(smallData), renderBarChart(largeData));

    await setLengthChangeProgress(renderResult, 0.5);
    const midBars = getCapturedBars(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalBars = getCapturedBars(renderResult.container);

    expect(midBars).toHaveLength(3);
    expect(finalBars).toHaveLength(3);
    const midBar = midBars[2];
    const finalBar = finalBars[2];

    expect(midBar.x).toBeCloseTo(finalBar.x, 4);
    expect(midBar.width).toBeCloseTo(finalBar.width, 4);
    expect(midBar.height).toBeCloseTo(finalBar.height / 2, 4);
  });

  it('Bar shrinks removed trailing items to zero size', async () => {
    const renderResult = await primeAndRerender(renderBarChart(largeData), renderBarChart(smallData));

    const initialBars = getCapturedBars(renderResult.container);
    await setLengthChangeProgress(renderResult, 0.5);
    const midBars = getCapturedBars(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalBars = getCapturedBars(renderResult.container);

    expect(initialBars).toHaveLength(2);
    expect(midBars).toHaveLength(2);
    expect(finalBars).toHaveLength(2);
    const initialBar = initialBars[1];
    const midBar = midBars[1];
    const finalBar = finalBars[1];

    expect(initialBar.x).toBeCloseTo(finalBar.x, 4);
    expect(initialBar.width).toBeCloseTo(finalBar.width, 4);
    expect(initialBar.height).toBeCloseTo(0, 4);
    expect(midBar.x).toBeCloseTo(finalBar.x, 4);
    expect(midBar.width).toBeCloseTo(finalBar.width, 4);
    expect(midBar.height).toBeCloseTo(finalBar.height / 2, 4);
  });

  it('Funnel grows newly appended items from zero size', async () => {
    const renderResult = await primeAndRerender(renderFunnelChart(smallData), renderFunnelChart(largeData));

    await setLengthChangeProgress(renderResult, 0.5);
    const midFunnels = getCapturedFunnels(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalFunnels = getCapturedFunnels(renderResult.container);

    expect(midFunnels).toHaveLength(3);
    expect(finalFunnels).toHaveLength(3);
    const midFunnel = midFunnels[2];
    const finalFunnel = finalFunnels[2];

    expect(midFunnel.upperWidth).toBeCloseTo(finalFunnel.upperWidth / 2, 4);
    expect(midFunnel.lowerWidth).toBeCloseTo(finalFunnel.lowerWidth / 2, 4);
    expect(midFunnel.height).toBeCloseTo(finalFunnel.height / 2, 4);
  });

  it('Funnel shrinks removed trailing items to zero size', async () => {
    const renderResult = await primeAndRerender(renderFunnelChart(largeData), renderFunnelChart(smallData));

    const initialFunnels = getCapturedFunnels(renderResult.container);
    await setLengthChangeProgress(renderResult, 0.5);
    const midFunnels = getCapturedFunnels(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalFunnels = getCapturedFunnels(renderResult.container);

    expect(initialFunnels).toHaveLength(2);
    expect(midFunnels).toHaveLength(2);
    expect(finalFunnels).toHaveLength(2);
    const initialFunnel = initialFunnels[1];
    const midFunnel = midFunnels[1];
    const finalFunnel = finalFunnels[1];

    expect(initialFunnel.upperWidth).toBeCloseTo(0, 4);
    expect(initialFunnel.lowerWidth).toBeCloseTo(0, 4);
    expect(initialFunnel.height).toBeCloseTo(0, 4);
    expect(midFunnel.upperWidth).toBeCloseTo(finalFunnel.upperWidth / 2, 4);
    expect(midFunnel.lowerWidth).toBeCloseTo(finalFunnel.lowerWidth / 2, 4);
    expect(midFunnel.height).toBeCloseTo(finalFunnel.height / 2, 4);
  });

  it('Scatter grows newly appended items from zero size at their final position', async () => {
    const renderResult = await primeAndRerender(renderScatterChart(smallData), renderScatterChart(largeData));

    await setLengthChangeProgress(renderResult, 0.5);
    const midPoints = getCapturedScatterPoints(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalPoints = getCapturedScatterPoints(renderResult.container);

    expect(midPoints).toHaveLength(3);
    expect(finalPoints).toHaveLength(3);
    const midPoint = midPoints[2];
    const finalPoint = finalPoints[2];

    expect(midPoint.cx).toBeCloseTo(finalPoint.cx, 4);
    expect(midPoint.cy).toBeCloseTo(finalPoint.cy, 4);
    expect(midPoint.size).toBeCloseTo(finalPoint.size / 2, 4);
  });

  it('Scatter shrinks removed trailing items to zero size at their current position', async () => {
    const renderResult = await primeAndRerender(renderScatterChart(largeData), renderScatterChart(smallData));

    const initialPoints = getCapturedScatterPoints(renderResult.container);
    await setLengthChangeProgress(renderResult, 0.5);
    const midPoints = getCapturedScatterPoints(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalPoints = getCapturedScatterPoints(renderResult.container);

    expect(initialPoints).toHaveLength(2);
    expect(midPoints).toHaveLength(2);
    expect(finalPoints).toHaveLength(2);
    const initialPoint = initialPoints[1];
    const midPoint = midPoints[1];
    const finalPoint = finalPoints[1];

    expect(initialPoint.cx).toBeCloseTo(finalPoint.cx, 4);
    expect(initialPoint.cy).toBeCloseTo(finalPoint.cy, 4);
    expect(initialPoint.size).toBeCloseTo(0, 4);
    expect(midPoint.cx).toBeCloseTo(finalPoint.cx, 4);
    expect(midPoint.cy).toBeCloseTo(finalPoint.cy, 4);
    expect(midPoint.size).toBeCloseTo(finalPoint.size / 2, 4);
  });

  it('Pie grows newly appended sectors from zero angle span', async () => {
    const renderResult = await primeAndRerender(renderPieChart(smallData), renderPieChart(largeData));

    await setLengthChangeProgress(renderResult, 0.5);
    const midSectors = getCapturedSectors(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalSectors = getCapturedSectors(renderResult.container);

    expect(midSectors).toHaveLength(3);
    expect(finalSectors).toHaveLength(3);
    const midSector = midSectors[2];
    const finalSector = finalSectors[2];

    expect(midSector.endAngle - midSector.startAngle).toBeCloseTo(
      (finalSector.endAngle - finalSector.startAngle) / 2,
      3,
    );
  });

  it('Pie shrinks removed trailing sectors to zero angle span', async () => {
    const renderResult = await primeAndRerender(renderPieChart(largeData), renderPieChart(smallData));

    const initialSectors = getCapturedSectors(renderResult.container);
    await setLengthChangeProgress(renderResult, 0.5);
    const midSectors = getCapturedSectors(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalSectors = getCapturedSectors(renderResult.container);

    expect(initialSectors).toHaveLength(0);
    expect(midSectors).toHaveLength(2);
    expect(finalSectors).toHaveLength(2);
    const midSector = midSectors[1];
    const finalSector = finalSectors[1];

    expect(midSector.endAngle - midSector.startAngle).toBeCloseTo(
      (finalSector.endAngle - finalSector.startAngle) / 2,
      3,
    );
  });

  it('RadialBar grows newly appended sectors from zero angle span', async () => {
    const renderResult = await primeAndRerender(
      renderRadialBarChart(smallPolarData),
      renderRadialBarChart(largePolarData),
    );

    await setLengthChangeProgress(renderResult, 0.5);
    const midSectors = getCapturedSectors(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalSectors = getCapturedSectors(renderResult.container);

    expect(midSectors).toHaveLength(3);
    expect(finalSectors).toHaveLength(3);
    const midSector = midSectors[2];
    const finalSector = finalSectors[2];

    expect(midSector.endAngle - midSector.startAngle).toBeCloseTo(
      (finalSector.endAngle - finalSector.startAngle) / 2,
      4,
    );
  });

  it('RadialBar shrinks removed trailing sectors to zero angle span', async () => {
    const renderResult = await primeAndRerender(
      renderRadialBarChart(largePolarData),
      renderRadialBarChart(smallPolarData),
    );

    const initialSectors = getCapturedSectors(renderResult.container);
    await setLengthChangeProgress(renderResult, 0.5);
    const midSectors = getCapturedSectors(renderResult.container);
    await completeLengthChangeAnimation(renderResult);
    const finalSectors = getCapturedSectors(renderResult.container);

    expect(initialSectors).toHaveLength(2);
    expect(midSectors).toHaveLength(2);
    expect(finalSectors).toHaveLength(2);
    const initialSector = initialSectors[1];
    const midSector = midSectors[1];
    const finalSector = finalSectors[1];

    expect(initialSector.startAngle).toBeCloseTo(initialSector.endAngle, 4);
    expect(midSector.endAngle - midSector.startAngle).toBeCloseTo(
      (finalSector.endAngle - finalSector.startAngle) / 2,
      4,
    );
  });
});
