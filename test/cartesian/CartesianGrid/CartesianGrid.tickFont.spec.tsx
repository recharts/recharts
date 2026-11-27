import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, RenderResult } from '@testing-library/react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from '../../../src';
import { getMockDomRect } from '../../helper/mockGetBoundingClientRect';

// Unique labels, so a measurement cached by another test file can't be reused.
const data = Array.from({ length: 40 }, (_, i) => ({ name: `FontSizeTick ${i + 1}`, value: (i * 37) % 100 }));

type TickFont = { fontSize?: number; fontFamily?: string };

function renderChart(tick: boolean | TickFont): RenderResult {
  return render(
    <LineChart width={700} height={400} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" tick={tick} />
      <YAxis />
      <Line dataKey="value" />
    </LineChart>,
  );
}

function countVerticalGridLines(container: Element): number {
  return container.querySelectorAll('.recharts-cartesian-grid-vertical line').length;
}

function getX1s(container: Element, selector: string): ReadonlyArray<string | null> {
  return Array.from(container.querySelectorAll(selector), line => line.getAttribute('x1'));
}

function countVerticalGridLinesAndUnmount(tick: boolean | TickFont): number {
  const { container, unmount } = renderChart(tick);
  const count = countVerticalGridLines(container);
  unmount();
  return count;
}

describe('CartesianGrid with a custom tick font', () => {
  beforeEach(() => {
    /*
     * jsdom has no layout: give the text measurement span a width proportional to its font size,
     * and twice as wide in a monospace font.
     * A font size without a unit is invalid CSS, so it is ignored, like in a browser.
     */
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function mock(this: Element) {
      if (!(this instanceof HTMLElement) || this.id !== 'recharts_measurement_span') {
        return getMockDomRect();
      }
      const { fontSize, fontFamily } = this.style;
      const px = /^\d+(\.\d+)?px$/.test(fontSize) ? parseFloat(fontSize) : 12;
      const charWidth = fontFamily === 'monospace' ? 1.2 : 0.6;
      return getMockDomRect({ width: (this.textContent ?? '').length * px * charWidth, height: px });
    });
  });

  it('draws fewer vertical lines when a large fontSize makes the axis hide ticks', () => {
    const withDefaultFont = countVerticalGridLinesAndUnmount(true);
    const withLargeFont = countVerticalGridLinesAndUnmount({ fontSize: 30 });
    expect(withLargeFont).toBeLessThan(withDefaultFont);
  });

  it('draws fewer vertical lines when a wide fontFamily makes the axis hide ticks', () => {
    const withDefaultFont = countVerticalGridLinesAndUnmount(true);
    const withMonospaceFont = countVerticalGridLinesAndUnmount({ fontFamily: 'monospace' });
    expect(withMonospaceFont).toBeLessThan(withDefaultFont);
  });

  it('draws the vertical lines at the axis ticks when the tick has a custom font', () => {
    // jsdom ignores the font attributes of SVG elements in computed styles. Browsers don't, so read them here.
    vi.spyOn(window, 'getComputedStyle').mockImplementation(element => {
      const fontSize = element.getAttribute('font-size');
      return Object.assign(document.createElement('span').style, {
        fontSize: fontSize == null ? '' : `${fontSize}px`,
        fontFamily: element.getAttribute('font-family') ?? '',
      });
    });

    const { container } = renderChart({ fontFamily: 'monospace', fontSize: 14 });

    const tickLineXs = getX1s(container, '.recharts-xAxis .recharts-cartesian-axis-tick-line');
    expect(tickLineXs.length).toBeGreaterThan(0);
    // The grid also draws lines at the left and right edges of the plot area.
    const plotEdgeXs = ['65', '695'];
    expect(new Set(getX1s(container, '.recharts-cartesian-grid-vertical line'))).toEqual(
      new Set([...tickLineXs, ...plotEdgeXs]),
    );
  });
});
