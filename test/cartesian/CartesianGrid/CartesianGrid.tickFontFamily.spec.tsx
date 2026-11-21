import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from '../../../src';
import { getMockDomRect } from '../../helper/mockGetBoundingClientRect';

// Unique labels, so a measurement cached by another test file can't be reused.
const data = Array.from({ length: 40 }, (_, i) => ({ name: `FontFamilyTick ${i + 1}`, value: (i * 37) % 100 }));

const WIDE_FONT = 'Wide Test Font';

function countVerticalGridLines(tick: boolean | { fontFamily: string }): number {
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

describe('CartesianGrid with a custom tick fontFamily', () => {
  beforeEach(() => {
    // jsdom has no layout: make the text measurement span twice as wide when it uses the wide font.
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function mock(this: Element) {
      if (this.id !== 'recharts_measurement_span') {
        return getMockDomRect();
      }
      const fontFamily = this instanceof HTMLElement ? this.style.fontFamily : '';
      const charWidth = fontFamily.includes(WIDE_FONT) ? 14 : 7;
      return getMockDomRect({ width: (this.textContent ?? '').length * charWidth, height: 12 });
    });
  });

  it('measures tick labels in the tick font, so it draws fewer lines for a wider font', () => {
    const withDefaultFont = countVerticalGridLines(true);
    const withWideFont = countVerticalGridLines({ fontFamily: WIDE_FONT });
    expect(withWideFont).toBeLessThan(withDefaultFont);
  });
});
