import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, XAxis, YAxis } from '../../../src';

const time = new Date('2025-01-01').getTime();

function getBarSpans(container: Element): Array<{ x: number; width: number }> {
  return Array.from(container.querySelectorAll('.recharts-bar-rectangle path')).map(path => {
    const match = /^M\s*([-\d.]+),[-\d.]+\s*h\s*([-\d.]+)/.exec(path.getAttribute('d') ?? '');
    return { x: Number(match?.[1]), width: Math.abs(Number(match?.[2])) };
  });
}

function getBarWidths(container: Element): number[] {
  return getBarSpans(container).map(span => span.width);
}

describe('Bar with a single tick on a numeric axis', () => {
  it('renders one bar for a single datum on a time-scale number axis', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={[{ interval: time, count: 10 }]}>
        <XAxis dataKey="interval" type="number" scale="time" domain={[time, time]} />
        <YAxis dataKey="count" type="number" />
        <Bar dataKey="count" isAnimationActive={false} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(1);
    expect(getBarWidths(container)[0]).toBeGreaterThan(0);
  });

  it('renders one bar for a single datum on a default number axis', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={[{ x: 5, count: 10 }]}>
        <XAxis dataKey="x" type="number" />
        <Bar dataKey="count" isAnimationActive={false} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(1);
    expect(getBarWidths(container)[0]).toBeGreaterThan(0);
  });

  it('still renders two bars for two data points', () => {
    const { container } = render(
      <BarChart
        width={400}
        height={300}
        data={[
          { x: 5, count: 10 },
          { x: 6, count: 4 },
        ]}
      >
        <XAxis dataKey="x" type="number" />
        <Bar dataKey="count" isAnimationActive={false} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(2);
  });

  it('lets an explicit barSize win over the axis span', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={[{ x: 5, count: 10 }]}>
        <XAxis dataKey="x" type="number" />
        <Bar dataKey="count" barSize={20} isAnimationActive={false} />
      </BarChart>,
    );
    expect(getBarWidths(container)).toEqual([20]);
  });

  it('lets maxBarSize cap the bar width', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={[{ x: 5, count: 10 }]}>
        <XAxis dataKey="x" type="number" />
        <Bar dataKey="count" maxBarSize={30} isAnimationActive={false} />
      </BarChart>,
    );
    expect(getBarWidths(container)).toEqual([30]);
  });

  describe('keeps the bar inside the plot area', () => {
    // 400px wide with the default 5px margins and no YAxis: the plot area spans x=5..395.
    const plotLeft = 5;
    const plotRight = 395;

    function renderLoneBar(x: number, domain: [number, number] | undefined) {
      return render(
        <BarChart width={400} height={300} data={[{ x, count: 10 }]}>
          <XAxis dataKey="x" type="number" domain={domain} />
          <Bar dataKey="count" isAnimationActive={false} />
        </BarChart>,
      );
    }

    const loneBarCases: ReadonlyArray<{ name: string; x: number; domain: [number, number] | undefined }> = [
      { name: 'in the middle', x: 5, domain: [0, 10] },
      { name: 'on a degenerate domain [x, x]', x: 5, domain: [5, 5] },
      { name: 'on an automatic domain', x: 5, domain: undefined },
      { name: 'near the left edge', x: 1, domain: [0, 10] },
      { name: 'near the right edge', x: 9, domain: [0, 10] },
    ];

    it.each(loneBarCases)('for a tick $name', ({ x, domain }) => {
      const { container } = renderLoneBar(x, domain);
      const spans = getBarSpans(container);
      expect(spans).toHaveLength(1);
      expect(spans[0].width).toBeGreaterThan(0);
      expect(spans[0].x).toBeGreaterThanOrEqual(plotLeft);
      expect(spans[0].x + spans[0].width).toBeLessThanOrEqual(plotRight);
    });

    it('fills the plot area minus the category gap when the tick is centered', () => {
      const { container } = renderLoneBar(5, [5, 5]);
      expect(getBarSpans(container)).toEqual([{ x: 44, width: 312 }]);
    });

    it.each([
      { edge: 'left', x: 0 },
      { edge: 'right', x: 10 },
    ])('renders no bar rather than an overflowing one for a tick on the $edge edge', ({ x }) => {
      const { container } = renderLoneBar(x, [0, 10]);
      expect(getBarSpans(container)).toEqual([]);
    });
  });
});
