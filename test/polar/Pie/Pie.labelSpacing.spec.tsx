import React from 'react';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Pie, PieChart } from '../../../src';
import { mockGetBBox, restoreMockGetBBox } from '../../helper/mockGetBBox';

const data = [64, 24, 6, 3, 1.5, 0.9, 0.4, 0.2].map(value => ({ value }));

function labelCoordinates(container: HTMLElement) {
  return Array.from(container.querySelectorAll('.recharts-pie-label-text'), label => ({
    x: Number(label.getAttribute('x')),
    y: Number(label.getAttribute('y')),
    anchor: label.getAttribute('text-anchor'),
  }));
}

function verticalGaps(positions: number[]): number[] {
  const sorted = positions.toSorted((a, b) => a - b);
  return sorted.flatMap((y, i) => {
    const previous = sorted[i - 1];
    return previous === undefined ? [] : [y - previous];
  });
}

describe('Pie minLabelSpacing', () => {
  afterEach(restoreMockGetBBox);

  it.each([false, true])('keeps 50px-wide labels within the chart when spacing moves them outward (left: %s)', left => {
    mockGetBBox(group => {
      const anchor = Number(group.querySelector('text')?.getAttribute('x'));
      return { x: left ? anchor - 50 : anchor, y: 0, width: 50, height: 12 };
    });
    const { container } = render(
      <PieChart width={200} height={200} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <Pie
          data={[{ value: 1 }, { value: 1 }]}
          startAngle={90}
          endAngle={left ? 110 : 70}
          outerRadius={80}
          label
          minLabelSpacing={20}
          isAnimationActive={false}
        />
      </PieChart>,
    );
    const points = labelCoordinates(container);
    expect(points).toHaveLength(2);
    expect(verticalGaps(points.map(p => p.y))).toEqual([20]);
    expect(points[1]?.x).toBe(left ? 50 : 150);
  });

  it('shares the height among visible custom labels and remeasures when the renderer changes', () => {
    mockGetBBox(group => {
      const text = group.querySelector('text');
      return text?.textContent
        ? { x: Number(text.getAttribute('x')), y: 0, width: 12, height: 12 }
        : { x: 0, y: 0, width: 0, height: 0 };
    });
    const slices = Array.from({ length: 10 }, () => ({ value: 1 }));
    const chart = (visible: number) => (
      <PieChart width={200} height={100} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <Pie
          data={slices}
          startAngle={80}
          endAngle={70}
          outerRadius={20}
          minLabelSpacing={20}
          isAnimationActive={false}
          label={({ index, x, y }) =>
            index < visible ? (
              <text data-testid="visible-label" x={x} y={y}>
                {index}
              </text>
            ) : null
          }
        />
      </PieChart>
    );
    const { getAllByTestId, rerender } = render(chart(5));
    const centers = () => getAllByTestId('visible-label').map(node => Number(node.getAttribute('y')));
    expect(verticalGaps(centers())).toEqual([20, 20, 20, 20]);
    rerender(chart(10));
    expect(verticalGaps(centers())).toEqual(Array(9).fill(10));
  });

  it.each([0, 180])('separates neighboring labels without changing their order at startAngle=%i', startAngle => {
    function chart(minLabelSpacing?: number) {
      return (
        <PieChart width={320} height={230}>
          <Pie
            data={data}
            startAngle={startAngle}
            endAngle={startAngle + 360}
            label
            minLabelSpacing={minLabelSpacing}
            isAnimationActive={false}
          />
        </PieChart>
      );
    }
    const { container, rerender } = render(chart());
    const anchor = startAngle === 0 ? 'start' : 'end';
    const defaultLabels = labelCoordinates(container).filter(label => label.anchor === anchor);
    const lines = () =>
      Array.from(container.querySelectorAll('.recharts-pie-label-line'), line => line.getAttribute('d')?.split('L'));
    const originalLines = lines();
    expect(Math.min(...verticalGaps(defaultLabels.map(label => label.y)))).toBeLessThan(14);

    rerender(chart(18));
    const spacedLabels = labelCoordinates(container).filter(label => label.anchor === anchor);
    expect(spacedLabels).toHaveLength(defaultLabels.length);
    expect(Math.min(...verticalGaps(spacedLabels.map(label => label.y)))).toBeGreaterThanOrEqual(18 - 1e-8);
    const verticalOrder = (labels: typeof spacedLabels) =>
      labels
        .map(({ y }, index) => ({ y, index }))
        .sort((a, b) => a.y - b.y)
        .map(({ index }) => index);
    expect(verticalOrder(spacedLabels)).toEqual(verticalOrder(defaultLabels));

    const spacedLines = lines();
    expect(spacedLines).toHaveLength(data.length);
    labelCoordinates(container).forEach(({ x, y }, index) => {
      const line = spacedLines[index];
      expect(line?.[0]).toBe(originalLines[index]?.[0]);
      const [endX, endY] = (line?.[1] ?? '').split(',').map(Number);
      expect(endX).toBeCloseTo(x, 2);
      expect(endY).toBeCloseTo(y, 2);
    });
    rerender(chart(0));
    expect(labelCoordinates(container).filter(label => label.anchor === anchor)).toEqual(defaultLabels);
  });

  it('shares the plot height when the requested spacing cannot fit, and lays out again on resize', () => {
    const sliceData = Array.from({ length: 5 }, () => ({ value: 1 }));
    const chart = (height: number) => (
      <PieChart width={300} height={height} margin={{ top: 10, bottom: 10 }}>
        <Pie
          data={sliceData}
          startAngle={-10}
          endAngle={10}
          outerRadius={12}
          label
          minLabelSpacing={20}
          isAnimationActive={false}
        />
      </PieChart>
    );
    const { container, rerender } = render(chart(70));
    expect(labelCoordinates(container).map(({ y }) => y)).toEqual([55, 45, 35, 25, 15]);
    rerender(chart(200));
    const centers = labelCoordinates(container).map(({ y }) => y);
    expect(centers).toHaveLength(sliceData.length);
    expect(Math.min(...verticalGaps(centers))).toBeCloseTo(20);
  });

  it('keeps isolated labels at their original positions', () => {
    const chart = (minLabelSpacing?: number) => (
      <PieChart width={320} height={230}>
        <Pie
          data={[{ value: 1 }, { value: 1 }]}
          startAngle={90}
          endAngle={450}
          label
          minLabelSpacing={minLabelSpacing}
          isAnimationActive={false}
        />
      </PieChart>
    );
    const { container, rerender } = render(chart());
    const original = labelCoordinates(container);
    expect(original).toHaveLength(2);
    rerender(chart(18));
    expect(labelCoordinates(container)).toEqual(original);
  });
});
