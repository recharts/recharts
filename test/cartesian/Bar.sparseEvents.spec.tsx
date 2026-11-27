import React from 'react';
import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Bar, BarChart, XAxis, YAxis } from '../../src';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const sparseData = [
  { category: 'A', value: 0 },
  { category: 'B', value: 10 },
];

const events = ['mouseMove', 'mouseDown', 'mouseUp', 'mouseOver', 'mouseOut'] as const;

describe.each([
  { name: 'bar', selector: '.recharts-bar-rectangle', background: false },
  { name: 'background', selector: '.recharts-bar-background-rectangle', background: true },
])('sparse $name event indices', ({ selector, background }) => {
  it.each(events)('should pass the original data index for %s', eventName => {
    const handleEvent = vi.fn();
    const { container } = rechartsTestRender(
      <BarChart width={300} height={200} data={sparseData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Bar
          dataKey="value"
          isAnimationActive={false}
          background={background}
          onMouseMove={handleEvent}
          onMouseDown={handleEvent}
          onMouseUp={handleEvent}
          onMouseOver={handleEvent}
          onMouseOut={handleEvent}
        />
      </BarChart>,
    );

    const rectangles = container.querySelectorAll(selector);
    expect(rectangles).toHaveLength(1);
    const rectangle = rectangles[0];
    assertNotNull(rectangle);
    fireEvent[eventName](rectangle);
    expect(handleEvent).toHaveBeenCalledExactlyOnceWith(
      expect.objectContaining({ originalDataIndex: 1, payload: sparseData[1] }),
      1,
      expect.any(Object),
    );
  });
});
