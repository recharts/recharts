import React from 'react';
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
} from '../../src';
import { PageData } from '../_data';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
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

async function primeAndRerender(initialChart: React.ReactNode, nextChart: React.ReactNode) {
  const renderResult = rechartsTestRender(initialChart);
  await renderResult.animationManager.completeAnimation();
  renderResult.rerender(nextChart);
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
    const renderResult = rechartsTestRender(
      <AreaChart width={100} height={100} data={smallData}>
        <Area dataKey="uv" isAnimationActive animationDuration={1000} animationEasing="linear" />
      </AreaChart>,
    );

    await renderResult.animationManager.completeAnimation();
    const initialCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');
    renderResult.rerender(
      <AreaChart width={100} height={100} data={largeData}>
        <Area dataKey="uv" isAnimationActive animationDuration={1000} animationEasing="linear" />
      </AreaChart>,
    );
    await renderResult.animationManager.setAnimationProgress(0.5);
    const midCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');
    await renderResult.animationManager.completeAnimation();
    const finalCurve = getCurvePoints(renderResult.container, '.recharts-area-curve');

    expect(initialCurve).not.toEqual(finalCurve);
    expect(midCurve).toEqual(finalCurve);
  });

  it('Line uses the final curve geometry immediately when data length increases', async () => {
    const renderResult = rechartsTestRender(
      <LineChart width={100} height={100} data={smallData}>
        <Line dataKey="uv" isAnimationActive animationDuration={1000} animationEasing="linear" />
      </LineChart>,
    );

    await renderResult.animationManager.completeAnimation();
    const initialCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');
    renderResult.rerender(
      <LineChart width={100} height={100} data={largeData}>
        <Line dataKey="uv" isAnimationActive animationDuration={1000} animationEasing="linear" />
      </LineChart>,
    );
    await renderResult.animationManager.setAnimationProgress(0.5);
    const midCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');
    await renderResult.animationManager.completeAnimation();
    const finalCurve = getCurvePoints(renderResult.container, '.recharts-line-curve');

    expect(initialCurve).not.toEqual(finalCurve);
    expect(midCurve).toEqual(finalCurve);
  });

  it('Radar keeps proportional point matching', async () => {
    const renderResult = await primeAndRerender(
      <RadarChart cx={50} cy={50} outerRadius={40} width={100} height={100} data={smallData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" isAnimationActive animationDuration={1000} animationEasing="linear" dot={<CaptureDot />} />
      </RadarChart>,
      <RadarChart cx={50} cy={50} outerRadius={40} width={100} height={100} data={largeData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" isAnimationActive animationDuration={1000} animationEasing="linear" dot={<CaptureDot />} />
      </RadarChart>,
    );

    const initialDots = getCapturedDots(renderResult.container);
    await renderResult.animationManager.setAnimationProgress(0.5);
    const midDots = getCapturedDots(renderResult.container);
    await renderResult.animationManager.completeAnimation();
    const finalDots = getCapturedDots(renderResult.container);

    expect(midDots[1].cx).toBeCloseTo(midpoint(initialDots[0].cx, finalDots[1].cx), 4);
    expect(midDots[1].cy).toBeCloseTo(midpoint(initialDots[0].cy, finalDots[1].cy), 4);
  });

  it('Bar grows newly appended items from zero size', async () => {
    const renderResult = await primeAndRerender(
      <BarChart width={100} height={100} data={smallData}>
        <Bar dataKey="uv" isAnimationActive animationDuration={1000} animationEasing="linear" shape={CaptureBar} />
      </BarChart>,
      <BarChart width={100} height={100} data={largeData}>
        <Bar dataKey="uv" isAnimationActive animationDuration={1000} animationEasing="linear" shape={CaptureBar} />
      </BarChart>,
    );

    await renderResult.animationManager.setAnimationProgress(0.5);
    const midBars = getCapturedBars(renderResult.container);
    await renderResult.animationManager.completeAnimation();
    const finalBars = getCapturedBars(renderResult.container);

    const midBar = midBars[2];
    const finalBar = finalBars[2];

    expect(midBar.x).toBeCloseTo(finalBar.x, 4);
    expect(midBar.width).toBeCloseTo(finalBar.width, 4);
    expect(midBar.height).toBeCloseTo(finalBar.height / 2, 4);
  });

  it('Funnel grows newly appended items from zero size', async () => {
    const renderResult = await primeAndRerender(
      <FunnelChart width={100} height={100}>
        <Funnel
          data={smallData}
          dataKey="uv"
          isAnimationActive
          animationDuration={1000}
          animationEasing="linear"
          shape={CaptureFunnel}
        />
      </FunnelChart>,
      <FunnelChart width={100} height={100}>
        <Funnel
          data={largeData}
          dataKey="uv"
          isAnimationActive
          animationDuration={1000}
          animationEasing="linear"
          shape={CaptureFunnel}
        />
      </FunnelChart>,
    );

    await renderResult.animationManager.setAnimationProgress(0.5);
    const midFunnels = getCapturedFunnels(renderResult.container);
    await renderResult.animationManager.completeAnimation();
    const finalFunnels = getCapturedFunnels(renderResult.container);

    const midFunnel = midFunnels[2];
    const finalFunnel = finalFunnels[2];

    expect(midFunnel.upperWidth).toBeCloseTo(finalFunnel.upperWidth / 2, 4);
    expect(midFunnel.lowerWidth).toBeCloseTo(finalFunnel.lowerWidth / 2, 4);
    expect(midFunnel.height).toBeCloseTo(finalFunnel.height / 2, 4);
  });

  it('Scatter grows newly appended items from zero size at their final position', async () => {
    const renderResult = await primeAndRerender(
      <ScatterChart width={100} height={100} data={smallData}>
        <Scatter
          dataKey="uv"
          isAnimationActive
          animationDuration={1000}
          animationEasing="linear"
          shape={CaptureScatter}
        />
      </ScatterChart>,
      <ScatterChart width={100} height={100} data={largeData}>
        <Scatter
          dataKey="uv"
          isAnimationActive
          animationDuration={1000}
          animationEasing="linear"
          shape={CaptureScatter}
        />
      </ScatterChart>,
    );

    await renderResult.animationManager.setAnimationProgress(0.5);
    const midPoints = getCapturedScatterPoints(renderResult.container);
    await renderResult.animationManager.completeAnimation();
    const finalPoints = getCapturedScatterPoints(renderResult.container);

    const midPoint = midPoints[2];
    const finalPoint = finalPoints[2];

    expect(midPoint.cx).toBeCloseTo(finalPoint.cx, 4);
    expect(midPoint.cy).toBeCloseTo(finalPoint.cy, 4);
    expect(midPoint.size).toBeCloseTo(finalPoint.size / 2, 4);
  });

  it('Pie grows newly appended sectors from zero angle span', async () => {
    const renderResult = await primeAndRerender(
      <PieChart width={100} height={100}>
        <Pie
          data={smallData}
          dataKey="uv"
          isAnimationActive
          animationDuration={1000}
          animationEasing="linear"
          shape={CaptureSector}
        />
      </PieChart>,
      <PieChart width={100} height={100}>
        <Pie
          data={largeData}
          dataKey="uv"
          isAnimationActive
          animationDuration={1000}
          animationEasing="linear"
          shape={CaptureSector}
        />
      </PieChart>,
    );

    await renderResult.animationManager.setAnimationProgress(0.5);
    const midSectors = getCapturedSectors(renderResult.container);
    await renderResult.animationManager.completeAnimation();
    const finalSectors = getCapturedSectors(renderResult.container);

    const midSector = midSectors[2];
    const finalSector = finalSectors[2];

    expect(midSector.endAngle - midSector.startAngle).toBeCloseTo(
      (finalSector.endAngle - finalSector.startAngle) / 2,
      4,
    );
  });

  it('RadialBar grows newly appended sectors from zero angle span', async () => {
    const renderResult = await primeAndRerender(
      <RadialBarChart width={400} height={400} data={smallPolarData}>
        <RadialBar
          dataKey="uv"
          isAnimationActive
          animationDuration={1000}
          animationEasing="linear"
          shape={CaptureSector}
        />
      </RadialBarChart>,
      <RadialBarChart width={400} height={400} data={largePolarData}>
        <RadialBar
          dataKey="uv"
          isAnimationActive
          animationDuration={1000}
          animationEasing="linear"
          shape={CaptureSector}
        />
      </RadialBarChart>,
    );

    await renderResult.animationManager.setAnimationProgress(0.5);
    const midSectors = getCapturedSectors(renderResult.container);
    await renderResult.animationManager.completeAnimation();
    const finalSectors = getCapturedSectors(renderResult.container);

    const midSector = midSectors[2];
    const finalSector = finalSectors[2];

    expect(midSector.endAngle - midSector.startAngle).toBeCloseTo(
      (finalSector.endAngle - finalSector.startAngle) / 2,
      4,
    );
  });
});
