import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, XAxis, YAxis } from '../../../src';

/*
 * Regression test for https://github.com/recharts/recharts/issues/2136
 *
 * A stacked BarChart with only one data point used to render no bars at all.
 */

type BarRect = { x: number; y: number; width: number; height: number };

function getBarRects(container: Element): BarRect[] {
  return Array.from(container.querySelectorAll('.recharts-bar-rectangle path')).map(path => {
    // Rectangle paths are drawn as "M x,y h width v height h -width Z"
    const match = /^M\s*([-\d.]+),([-\d.]+)\s*h\s*([-\d.]+)\s*v\s*([-\d.]+)/.exec(path.getAttribute('d') ?? '');
    return {
      x: Number(match?.[1]),
      y: Number(match?.[2]),
      width: Number(match?.[3]),
      height: Number(match?.[4]),
    };
  });
}

function expectStackedBars(rects: BarRect[]) {
  expect(rects).toHaveLength(2);
  const [bottom, top] = rects;
  expect(bottom.width).toBeGreaterThan(0);
  expect(bottom.height).toBeGreaterThan(0);
  expect(top.width).toBeGreaterThan(0);
  expect(top.height).toBeGreaterThan(0);
  // Same band, and the second series sits directly on top of the first one
  expect(top.x).toBe(bottom.x);
  expect(top.width).toBe(bottom.width);
  expect(top.y + top.height).toBe(bottom.y);
}

const singleDatum = [{ name: 'Page A', x: 5, uv: 400, pv: 240 }];

describe('stacked Bar with a single data point', () => {
  it('should render both stacked bars on a category axis', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={singleDatum}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" stackId="a" isAnimationActive={false} />
        <Bar dataKey="pv" stackId="a" isAnimationActive={false} />
      </BarChart>,
    );
    expectStackedBars(getBarRects(container));
  });

  it('should render both stacked bars on a number axis', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={singleDatum}>
        <XAxis dataKey="x" type="number" />
        <YAxis />
        <Bar dataKey="uv" stackId="a" isAnimationActive={false} />
        <Bar dataKey="pv" stackId="a" isAnimationActive={false} />
      </BarChart>,
    );
    expectStackedBars(getBarRects(container));
  });

  it('should render both stacked bars in vertical layout', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={singleDatum} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Bar dataKey="uv" stackId="a" isAnimationActive={false} />
        <Bar dataKey="pv" stackId="a" isAnimationActive={false} />
      </BarChart>,
    );
    const rects = getBarRects(container);
    expect(rects).toHaveLength(2);
    const [left, right] = rects;
    expect(left.width).toBeGreaterThan(0);
    expect(left.height).toBeGreaterThan(0);
    expect(right.width).toBeGreaterThan(0);
    expect(right.y).toBe(left.y);
    expect(right.x).toBe(left.x + left.width);
  });
});
