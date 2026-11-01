import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from '../../../src';
import { getMockDomRect } from '../../helper/mockGetBoundingClientRect';

// Unique labels, so a measurement cached by another test file can't be reused.
const data = Array.from({ length: 40 }, (_, i) => ({ name: `FontSizeTick ${i + 1}`, value: (i * 37) % 100 }));

function countVerticalGridLines(tick: boolean | { fontSize: number }): number {
  const { container, unmount } = render(
    <LineChart width={700} height={400} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" tick={tick} />
      <YAxis />
      <Line dataKey="value" />
    </LineChart>,
  );
  const count = container.querySelectorAll('.recharts-cartesian-grid-vertical line').length;
  unmount();
  return count;
}

describe('CartesianGrid with a custom tick fontSize', () => {
  beforeEach(() => {
    // jsdom has no layout: give the text measurement span a width proportional to its font size.
    // A font size without a unit is invalid CSS, so it is ignored, like in a browser.
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function mock(this: Element) {
      if (this.id !== 'recharts_measurement_span') {
        return getMockDomRect();
      }
      const fontSize = this instanceof HTMLElement ? this.style.fontSize : '';
      const px = /^\d+(\.\d+)?px$/.test(fontSize) ? parseFloat(fontSize) : 12;
      return getMockDomRect({ width: (this.textContent ?? '').length * px * 0.6, height: px });
    });
  });

  it('draws fewer vertical lines when a large fontSize makes the axis hide ticks', () => {
    const withDefaultFont = countVerticalGridLines(true);
    const withLargeFont = countVerticalGridLines({ fontSize: 30 });
    expect(withLargeFont).toBeLessThan(withDefaultFont);
  });
});
